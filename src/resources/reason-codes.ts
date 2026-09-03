import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  createReasonCodeRequestSchema,
  type CreateReasonCodeRequest,
} from "../models/create-reason-code-request.js";
import { errorListResponse1Schema, type ErrorListResponse1 } from "../models/error-list-response1.js";
import { okResponseSchema, type OkResponse } from "../models/ok-response.js";
import { reasonCodeResponseSchema, type ReasonCodeResponse } from "../models/reason-code-response.js";
import {
  updateReasonCodeRequestSchema,
  type UpdateReasonCodeRequest,
} from "../models/update-reason-code-request.js";
import type { Servers } from "../servers.js";

export class ReasonCodes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createReasonCode(
    request: ReasonCodes.CreateReasonCodeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ReasonCodeResponse, ReasonCodes.CreateReasonCodeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/reason_codes.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createReasonCodeRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: reasonCodeResponseSchema },
        errorFactory: ReasonCodes.CreateReasonCodeError,
      },
      options,
    );
  }

  deleteReasonCode(
    request: ReasonCodes.DeleteReasonCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<OkResponse, ReasonCodes.DeleteReasonCodeError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.production("/reason_codes/{reason_code_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "reason_code_id", value: request.reasonCodeId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: okResponseSchema },
        errorFactory: ReasonCodes.DeleteReasonCodeError,
      },
      options,
    );
  }

  listReasonCodes(
    request: ReasonCodes.ListReasonCodesRequest,
    options?: RequestOptions,
  ): ApiPromise<ReasonCodeResponse[], ReasonCodes.ListReasonCodesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.production("/reason_codes.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 20) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => reasonCodeResponseSchema)) },
        errorFactory: ReasonCodes.ListReasonCodesError,
      },
      options,
    );
  }

  readReasonCode(
    request: ReasonCodes.ReadReasonCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<ReasonCodeResponse, ReasonCodes.ReadReasonCodeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.production("/reason_codes/{reason_code_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "reason_code_id", value: request.reasonCodeId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: reasonCodeResponseSchema },
        errorFactory: ReasonCodes.ReadReasonCodeError,
      },
      options,
    );
  }

  updateReasonCode(
    request: ReasonCodes.UpdateReasonCodeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ReasonCodeResponse, ReasonCodes.UpdateReasonCodeError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production("/reason_codes/{reason_code_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "reason_code_id", value: request.reasonCodeId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateReasonCodeRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: reasonCodeResponseSchema },
        errorFactory: ReasonCodes.UpdateReasonCodeError,
      },
      options,
    );
  }
}

export namespace ReasonCodes {
  export type CreateReasonCodeRequestParams = {
    body?: CreateReasonCodeRequest;
  };

  export class CreateReasonCodeError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<CreateReasonCodeError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type DeleteReasonCodeRequest = {
    reasonCodeId: number;
  };

  export class DeleteReasonCodeError extends ResponseError<Declared<"error404", undefined>> {
    static readonly errors: ErrorDecoders<DeleteReasonCodeError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListReasonCodesRequest = {
    page?: number;
    perPage?: number;
  };

  export class ListReasonCodesError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<ListReasonCodesError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type ReadReasonCodeRequest = {
    reasonCodeId: number;
  };

  export class ReadReasonCodeError extends ResponseError<Declared<"error404", undefined>> {
    static readonly errors: ErrorDecoders<ReadReasonCodeError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type UpdateReasonCodeRequestParams = {
    reasonCodeId: number;
    body?: UpdateReasonCodeRequest;
  };

  export class UpdateReasonCodeError extends ResponseError<
    Declared<"error404", undefined> | Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<UpdateReasonCodeError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }
}
