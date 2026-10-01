import type { RequestBody } from "./request-body.js";
import type { RequestRetryOptions } from "./retry.js";
import type { ResolvedCoreClientOptions } from "./client-options.js";
import type { StyledParam, Param } from "./param-value.js";

/** HTTP method of a call. Closed, and the type of `method` on every failure the SDK raises. */
export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS";

/**
 * Per-call options, the optional second argument of every operation.
 *
 * @remarks
 * Credentials and the server are configured once on the client rather than per call. Three fields
 * of the retry policy are the one thing a single call may shape for itself.
 */
export type RequestOptions = {
  /** Cancels the call. Aborting rejects the returned promise with the signal's own `reason`. */
  signal?: AbortSignal | undefined;

  /**
   * Shapes the retry policy for this call alone, leaving every other call on the client's.
   *
   * @remarks
   * Three fields of `RetryOptions`, the ones {@link RequestRetryOptions} names, merged field by
   * field over what the client resolved: a field left out — or passed as `undefined` — keeps the
   * client's value, and `0` and an empty list are values rather than misses. `timeout` bounds one
   * attempt here exactly as it does there, so `{ retry: { timeout: 5000 } }` is a per-attempt
   * budget and not a budget for the call.
   *
   * A value the engine cannot honour is dropped rather than raising: that field keeps the client's
   * value, and the fields beside it in the same literal still apply. A record whose reads throw
   * rejects the call with a `ConfigurationError` before anything is sent.
   */
  retry?: RequestRetryOptions;
};

export type RawClientOptions = ResolvedCoreClientOptions & {
  readonly defaultHeaders: readonly Param[];
  readonly defaultQuery: readonly StyledParam[];
  readonly defaultPathParams: readonly Param[];
};

export type UrlTemplate = {
  baseUrl: string;
  subPath: string;
  variables?: Record<string, string> | undefined;
};

/**
 * A named server with its options already decoded: the base URL and its variables, still
 * unexpanded, and without an operation's sub-path.
 */
export type ServerBase = Omit<UrlTemplate, "subPath">;

export type AuthParams = {
  readonly headers?: readonly Param[];
  readonly query?: readonly StyledParam[];
  readonly cookies?: readonly Param[];
};

export type AuthScheme = {
  resolve(signal?: AbortSignal): Promise<AuthParams> | AuthParams;
  hasCredentials(): boolean;
  invalidate?(): void;
};

export type ApiRequest = {
  method: HttpMethod;
  url: UrlTemplate;
  auth: AuthScheme;
  pathParams?: Param[] | undefined;
  query?: StyledParam[] | undefined;
  headers?: Param[] | undefined;
  body: RequestBody;
};
