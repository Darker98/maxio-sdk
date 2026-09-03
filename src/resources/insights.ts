import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { listMrrFilterSchema, type ListMrrFilter } from "../models/list-mrr-filter.js";
import { listMrrResponseSchema, type ListMrrResponse } from "../models/list-mrr-response.js";
import { mrrResponseSchema, type MrrResponse } from "../models/mrr-response.js";
import { siteSummarySchema, type SiteSummary } from "../models/site-summary.js";
import { sortingDirectionSchema, type SortingDirection } from "../models/sorting-direction.js";
import {
  subscriptionMrrResponseSchema,
  type SubscriptionMrrResponse,
} from "../models/subscription-mrr-response.js";
import {
  subscriptionsMrrErrorResponse1Schema,
  type SubscriptionsMrrErrorResponse1,
} from "../models/subscriptions-mrr-error-response1.js";
import type { Servers } from "../servers.js";

export class Insights {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  listMrrMovements(
    request: Insights.ListMrrMovementsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListMrrResponse, ResponseError> {
    return this.#rawClient.execute<ListMrrResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/mrr_movements.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [
          { name: "subscription_id", value: request.subscriptionId, schema: s.optional(s.number()) },
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 10) },
          {
            name: "direction",
            value: request.direction,
            schema: s.optional(s.lazy(() => sortingDirectionSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listMrrResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listMrrPerSubscription(
    request: Insights.ListMrrPerSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionMrrResponse, Insights.ListMrrPerSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.production("/subscriptions_mrr.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => listMrrFilterSchema)) },
          { name: "at_time", value: request.atTime, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 20) },
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subscriptionMrrResponseSchema },
        errorFactory: Insights.ListMrrPerSubscriptionError,
      },
      options,
    );
  }

  readMrr(
    request: Insights.ReadMrrRequest,
    options?: RequestOptions,
  ): ApiPromise<MrrResponse, ResponseError> {
    return this.#rawClient.execute<MrrResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/mrr.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [
          { name: "at_time", value: request.atTime, schema: s.optional(s.dateTime()) },
          { name: "subscription_id", value: request.subscriptionId, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: mrrResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  readSiteStats(options?: RequestOptions): ApiPromise<SiteSummary, ResponseError> {
    return this.#rawClient.execute<SiteSummary, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/stats.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: siteSummarySchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Insights {
  export type ListMrrMovementsRequest = {
    subscriptionId?: number;
    page?: number;
    perPage?: number;
    direction?: SortingDirection;
  };

  export type ListMrrPerSubscriptionRequest = {
    filter?: ListMrrFilter;
    atTime?: string;
    page?: number;
    perPage?: number;
    direction?: Direction;
  };

  export class ListMrrPerSubscriptionError extends ResponseError<
    Declared<"subscriptionsMrrErrorResponse1", SubscriptionsMrrErrorResponse1>
  > {
    static readonly errors: ErrorDecoders<ListMrrPerSubscriptionError> = [
      {
        on: 400,
        kind: "subscriptionsMrrErrorResponse1",
        decode: { kind: "json", schema: subscriptionsMrrErrorResponse1Schema },
      },
    ];
  }

  export type ReadMrrRequest = {
    atTime?: Date;
    subscriptionId?: number;
  };
}
