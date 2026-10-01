import type { ApiRequest, HttpMethod, RequestOptions, RawClientOptions } from "./api-request.js";
import { AuthError, CoreError, ConnectionError, DecodeError, EncodeError, TimeoutError } from "./errors.js";
import { decodeErrorPayload, type AnyApiError, type ResponseHandler } from "./api-error.js";
import { decodeResponse } from "./response-decoder.js";
import { ApiPromise, type RequestOutcome } from "./api-promise.js";
import { buildBody, type BodyContent } from "./request-body.js";
import { buildRetryOptions, RetryPolicy } from "./retry.js";
import { applyQuery, resolveUri, templateUri } from "./url.js";
import { buildHeaders } from "./headers.js";
import { queryString } from "./params.js";
import * as s from "./validation/index.js";
import { SchemaError } from "./validation/schema-error.js";

export class RawClient {
  readonly #config: RawClientOptions;

  constructor(config: RawClientOptions) {
    this.#config = config;
  }

  execute<T, E extends AnyApiError>(
    apiRequest: ApiRequest,
    responseHandler: ResponseHandler<T, E>,
    options?: RequestOptions,
  ): ApiPromise<T, E> {
    return new ApiPromise<T, E>(this.#dispatch<T, E>(apiRequest, responseHandler, options));
  }

  async #dispatch<T, E extends AnyApiError>(
    apiRequest: ApiRequest,
    responseHandler: ResponseHandler<T, E>,
    options: RequestOptions | undefined,
  ): Promise<RequestOutcome<T, E>> {
    const callerSignal = options?.signal === undefined ? [] : [options.signal];
    const uploadController = new AbortController();
    let uri = templateUri(apiRequest.url);

    let url: URL;
    let body: BodyContent;
    let headers: Headers;
    try {
      url = resolveUri(apiRequest.url, apiRequest.pathParams, this.#config.defaultPathParams);
      uri = url.href;
      applyQuery(url, apiRequest.query, this.#config.defaultQuery);
      body = buildBody(apiRequest.body, AbortSignal.any([...callerSignal, uploadController.signal]));
      headers = buildHeaders([
        [
          { name: "content-type", value: body.contentType, schema: s.optional(s.string()) },
          { name: "content-disposition", value: body.contentDisposition, schema: s.optional(s.string()) },
        ],
        this.#config.defaultHeaders,
        apiRequest.headers,
      ]);
    } catch (err) {
      if (err instanceof CoreError) throw err;
      if (err instanceof SchemaError) {
        throw new EncodeError(`${apiRequest.method} ${uri} failed: Request value could not be encoded.`, {
          cause: err,
          method: apiRequest.method,
          uri,
        });
      }
      throw err;
    }

    const policy = new RetryPolicy(buildRetryOptions(options?.retry, this.#config.retry));

    const response = await policy.execute(apiRequest.method, options?.signal, async () => {
      const attemptUrl = new URL(url);
      let attemptHeaders: Headers;

      try {
        const auth = await apiRequest.auth.resolve(options?.signal);
        if (auth.query !== undefined && auth.query.length > 0) {
          attemptUrl.search = queryString([auth.query], [...attemptUrl.searchParams]);
        }
        attemptHeaders = buildHeaders([auth.headers], auth.cookies, headers);
      } catch (err) {
        if (err instanceof CoreError && err.kind !== "api" && err.kind !== "decode" && err.kind !== "encode")
          throw err;
        if (options?.signal?.aborted) throw options.signal.reason;
        throw new AuthError(
          `${apiRequest.method} ${uri} failed: ${
            err instanceof Error && err.message !== "" ? err.message : "A credential could not be obtained."
          }`,
          { cause: err, method: apiRequest.method, uri },
        );
      }

      const isStreaming = body.streaming === true;
      const timeoutController = new AbortController();
      const signal = AbortSignal.any([...callerSignal, timeoutController.signal]);
      if (isStreaming) {
        timeoutController.signal.addEventListener(
          "abort",
          () => uploadController.abort(timeoutController.signal.reason),
          { once: true },
        );
      }

      const timer = startTimeout(timeoutController, policy.timeout, apiRequest.method, uri);
      let response: Response;
      try {
        response = await this.#config.fetch.call(undefined, attemptUrl, {
          method: apiRequest.method,
          headers: attemptHeaders,
          body: body.body,
          signal,
          ...(isStreaming ? { duplex: "half", window: null, redirect: "error" } : {}),
        });
      } catch (err) {
        if (err instanceof CoreError && (err.kind === "connection" || err.kind === "timeout"))
          return { kind: "fault", error: err, isStreaming };
        if (err instanceof CoreError) throw err;
        if (signal.aborted) throw signal.reason;
        return {
          kind: "fault",
          error: new ConnectionError(
            `${apiRequest.method} ${uri} failed: ${
              err instanceof Error && err.message !== "" ? err.message : "Connection error."
            }`,
            { cause: err, method: apiRequest.method, uri },
          ),
          isStreaming,
        };
      } finally {
        clearTimeout(timer);
      }

      if (response.status === 401) apiRequest.auth.invalidate?.();
      return {
        kind: "response",
        response,
        isStreaming,
        discard: (): void => {
          void Promise.resolve(response.body?.cancel()).catch(() => {});
        },
      };
    });

    try {
      if (isSuccess(response.status)) {
        const data = await decodeResponse(responseHandler.success, response, apiRequest.method, uri);
        return { ok: true, status: response.status, headers: response.headers, data };
      }

      const payload = await decodeErrorPayload(
        response,
        responseHandler.errorFactory.errors,
        response.status,
        apiRequest.method,
        uri,
      );
      const error = new responseHandler.errorFactory({
        status: response.status,
        headers: response.headers,
        method: apiRequest.method,
        uri,
        payload,
      });

      return { ok: false, status: response.status, headers: response.headers, error };
    } catch (err) {
      if (options?.signal?.aborted && err instanceof DecodeError && err.cause === options?.signal.reason)
        throw options?.signal.reason;
      throw err;
    }
  }
}

function isSuccess(status: number): boolean {
  return status >= 200 && status <= 299;
}

function startTimeout(
  controller: AbortController,
  timeoutMs: number,
  method: HttpMethod,
  uri: string,
): ReturnType<typeof setTimeout> {
  return setTimeout(
    () =>
      controller.abort(
        new TimeoutError(`${method} ${uri} failed: Request timed out after ${timeoutMs}ms.`, {
          method,
          uri,
          timeout: timeoutMs,
        }),
      ),
    timeoutMs,
  );
}
