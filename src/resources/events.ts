import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { countResponseSchema, type CountResponse } from "../models/count-response.js";
import { Direction, directionSchema } from "../models/direction.js";
import { eventKeySchema, type EventKey } from "../models/event-key.js";
import { eventResponseSchema, type EventResponse } from "../models/event-response.js";
import { listEventsDateFieldSchema, type ListEventsDateField } from "../models/list-events-date-field.js";
import type { Servers } from "../servers.js";

export class Events {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  listEvents(
    request: Events.ListEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<EventResponse[], ResponseError> {
    return this.#rawClient.execute<EventResponse[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/events.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 20) },
          { name: "since_id", value: request.sinceId, schema: s.optional(s.number()) },
          { name: "max_id", value: request.maxId, schema: s.optional(s.number()) },
          {
            name: "direction",
            value: request.direction,
            schema: s.defaulted(directionSchema, Direction.Desc),
          },
          {
            name: "filter",
            value: request.filter,
            schema: s.optional(s.array(s.lazy(() => eventKeySchema))),
          },
          {
            name: "date_field",
            value: request.dateField,
            schema: s.optional(s.lazy(() => listEventsDateFieldSchema)),
          },
          { name: "start_date", value: request.startDate, schema: s.optional(s.string()) },
          { name: "end_date", value: request.endDate, schema: s.optional(s.string()) },
          { name: "start_datetime", value: request.startDatetime, schema: s.optional(s.string()) },
          { name: "end_datetime", value: request.endDatetime, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => eventResponseSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listSubscriptionEvents(
    request: Events.ListSubscriptionEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<EventResponse[], ResponseError> {
    return this.#rawClient.execute<EventResponse[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/subscriptions/{subscription_id}/events.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 20) },
          { name: "since_id", value: request.sinceId, schema: s.optional(s.number()) },
          { name: "max_id", value: request.maxId, schema: s.optional(s.number()) },
          {
            name: "direction",
            value: request.direction,
            schema: s.defaulted(directionSchema, Direction.Desc),
          },
          {
            name: "filter",
            value: request.filter,
            schema: s.optional(s.array(s.lazy(() => eventKeySchema))),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => eventResponseSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  readEventsCount(
    request: Events.ReadEventsCountRequest,
    options?: RequestOptions,
  ): ApiPromise<CountResponse, ResponseError> {
    return this.#rawClient.execute<CountResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/events/count.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 20) },
          { name: "since_id", value: request.sinceId, schema: s.optional(s.number()) },
          { name: "max_id", value: request.maxId, schema: s.optional(s.number()) },
          {
            name: "direction",
            value: request.direction,
            schema: s.defaulted(directionSchema, Direction.Desc),
          },
          {
            name: "filter",
            value: request.filter,
            schema: s.optional(s.array(s.lazy(() => eventKeySchema))),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Events {
  export type ListEventsRequest = {
    page?: number;
    perPage?: number;
    sinceId?: number;
    maxId?: number;
    direction?: Direction;
    filter?: EventKey[];
    dateField?: ListEventsDateField;
    startDate?: string;
    endDate?: string;
    startDatetime?: string;
    endDatetime?: string;
  };

  export type ListSubscriptionEventsRequest = {
    subscriptionId: number;
    page?: number;
    perPage?: number;
    sinceId?: number;
    maxId?: number;
    direction?: Direction;
    filter?: EventKey[];
  };

  export type ReadEventsCountRequest = {
    page?: number;
    perPage?: number;
    sinceId?: number;
    maxId?: number;
    direction?: Direction;
    filter?: EventKey[];
  };
}
