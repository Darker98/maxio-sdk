import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  createOrUpdateEndpointRequestSchema,
  type CreateOrUpdateEndpointRequest,
} from "../models/create-or-update-endpoint-request.js";
import {
  enableWebhooksRequestSchema,
  type EnableWebhooksRequest,
} from "../models/enable-webhooks-request.js";
import {
  enableWebhooksResponseSchema,
  type EnableWebhooksResponse,
} from "../models/enable-webhooks-response.js";
import { endpointResponseSchema, type EndpointResponse } from "../models/endpoint-response.js";
import { endpointSchema, type Endpoint } from "../models/endpoint.js";
import { errorListResponse1Schema, type ErrorListResponse1 } from "../models/error-list-response1.js";
import {
  replayWebhooksRequestSchema,
  type ReplayWebhooksRequest,
} from "../models/replay-webhooks-request.js";
import {
  replayWebhooksResponseSchema,
  type ReplayWebhooksResponse,
} from "../models/replay-webhooks-response.js";
import { webhookOrderSchema, type WebhookOrder } from "../models/webhook-order.js";
import { webhookResponseSchema, type WebhookResponse } from "../models/webhook-response.js";
import { webhookStatusSchema, type WebhookStatus } from "../models/webhook-status.js";
import type { Servers } from "../servers.js";

export class Webhooks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createEndpoint(
    request: Webhooks.CreateEndpointRequest,
    options?: RequestOptions,
  ): ApiPromise<EndpointResponse, Webhooks.CreateEndpointError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/endpoints.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createOrUpdateEndpointRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: endpointResponseSchema },
        errorFactory: Webhooks.CreateEndpointError,
      },
      options,
    );
  }

  enableWebhooks(
    request: Webhooks.EnableWebhooksRequestParams,
    options?: RequestOptions,
  ): ApiPromise<EnableWebhooksResponse, ResponseError> {
    return this.#rawClient.execute<EnableWebhooksResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.production("/webhooks/settings.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => enableWebhooksRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: enableWebhooksResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listEndpoints(options?: RequestOptions): ApiPromise<Endpoint[], ResponseError> {
    return this.#rawClient.execute<Endpoint[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/endpoints.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => endpointSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listWebhooks(
    request: Webhooks.ListWebhooksRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookResponse[], ResponseError> {
    return this.#rawClient.execute<WebhookResponse[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/webhooks.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => webhookStatusSchema)) },
          { name: "since_date", value: request.sinceDate, schema: s.optional(s.string()) },
          { name: "until_date", value: request.untilDate, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 20) },
          { name: "order", value: request.order, schema: s.optional(s.lazy(() => webhookOrderSchema)) },
          { name: "subscription", value: request.subscription, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => webhookResponseSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  replayWebhooks(
    request: Webhooks.ReplayWebhooksRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ReplayWebhooksResponse, ResponseError> {
    return this.#rawClient.execute<ReplayWebhooksResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.production("/webhooks/replay.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => replayWebhooksRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: replayWebhooksResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateEndpoint(
    request: Webhooks.UpdateEndpointRequest,
    options?: RequestOptions,
  ): ApiPromise<EndpointResponse, Webhooks.UpdateEndpointError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production("/endpoints/{endpoint_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "endpoint_id", value: request.endpointId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createOrUpdateEndpointRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: endpointResponseSchema },
        errorFactory: Webhooks.UpdateEndpointError,
      },
      options,
    );
  }
}

export namespace Webhooks {
  export type CreateEndpointRequest = {
    body?: CreateOrUpdateEndpointRequest;
  };

  export class CreateEndpointError extends ResponseError<Declared<"errorListResponse1", ErrorListResponse1>> {
    static readonly errors: ErrorDecoders<CreateEndpointError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type EnableWebhooksRequestParams = {
    body?: EnableWebhooksRequest;
  };

  export type ListWebhooksRequest = {
    status?: WebhookStatus;
    sinceDate?: string;
    untilDate?: string;
    page?: number;
    perPage?: number;
    order?: WebhookOrder;
    subscription?: number;
  };

  export type ReplayWebhooksRequestParams = {
    body?: ReplayWebhooksRequest;
  };

  export type UpdateEndpointRequest = {
    endpointId: number;
    body?: CreateOrUpdateEndpointRequest;
  };

  export class UpdateEndpointError extends ResponseError<
    Declared<"error404", undefined> | Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<UpdateEndpointError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }
}
