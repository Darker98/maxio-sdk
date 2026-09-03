import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { bulkCreateSegmentsSchema, type BulkCreateSegments } from "../models/bulk-create-segments.js";
import { bulkUpdateSegmentsSchema, type BulkUpdateSegments } from "../models/bulk-update-segments.js";
import { createSegmentRequestSchema, type CreateSegmentRequest } from "../models/create-segment-request.js";
import {
  eventBasedBillingListSegmentsErrors1Schema,
  type EventBasedBillingListSegmentsErrors1,
} from "../models/event-based-billing-list-segments-errors1.js";
import {
  eventBasedBillingSegmentErrors1Schema,
  type EventBasedBillingSegmentErrors1,
} from "../models/event-based-billing-segment-errors1.js";
import {
  eventBasedBillingSegment1Schema,
  type EventBasedBillingSegment1,
} from "../models/event-based-billing-segment1.js";
import { listSegmentsFilterSchema, type ListSegmentsFilter } from "../models/list-segments-filter.js";
import { listSegmentsResponseSchema, type ListSegmentsResponse } from "../models/list-segments-response.js";
import { segmentResponseSchema, type SegmentResponse } from "../models/segment-response.js";
import { updateSegmentRequestSchema, type UpdateSegmentRequest } from "../models/update-segment-request.js";
import type { Servers } from "../servers.js";

export class EventsBasedBillingSegments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  bulkCreateSegments(
    request: EventsBasedBillingSegments.BulkCreateSegmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSegmentsResponse, EventsBasedBillingSegments.BulkCreateSegmentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production(
          "/components/{component_id}/price_points/{price_point_id}/segments/bulk.json",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "component_id", value: request.componentId, schema: s.string() },
          { name: "price_point_id", value: request.pricePointId, schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => bulkCreateSegmentsSchema)),
        },
      },
      {
        success: { kind: "json", schema: listSegmentsResponseSchema },
        errorFactory: EventsBasedBillingSegments.BulkCreateSegmentsError,
      },
      options,
    );
  }

  bulkUpdateSegments(
    request: EventsBasedBillingSegments.BulkUpdateSegmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSegmentsResponse, EventsBasedBillingSegments.BulkUpdateSegmentsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production(
          "/components/{component_id}/price_points/{price_point_id}/segments/bulk.json",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "component_id", value: request.componentId, schema: s.string() },
          { name: "price_point_id", value: request.pricePointId, schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => bulkUpdateSegmentsSchema)),
        },
      },
      {
        success: { kind: "json", schema: listSegmentsResponseSchema },
        errorFactory: EventsBasedBillingSegments.BulkUpdateSegmentsError,
      },
      options,
    );
  }

  createSegment(
    request: EventsBasedBillingSegments.CreateSegmentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SegmentResponse, EventsBasedBillingSegments.CreateSegmentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production(
          "/components/{component_id}/price_points/{price_point_id}/segments.json",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "component_id", value: request.componentId, schema: s.string() },
          { name: "price_point_id", value: request.pricePointId, schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createSegmentRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: segmentResponseSchema },
        errorFactory: EventsBasedBillingSegments.CreateSegmentError,
      },
      options,
    );
  }

  deleteSegment(
    request: EventsBasedBillingSegments.DeleteSegmentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, EventsBasedBillingSegments.DeleteSegmentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.production(
          "/components/{component_id}/price_points/{price_point_id}/segments/{id}.json",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "component_id", value: request.componentId, schema: s.string() },
          { name: "price_point_id", value: request.pricePointId, schema: s.string() },
          { name: "id", value: request.id, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: EventsBasedBillingSegments.DeleteSegmentError,
      },
      options,
    );
  }

  listSegmentsForPricePoint(
    request: EventsBasedBillingSegments.ListSegmentsForPricePointRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSegmentsResponse, EventsBasedBillingSegments.ListSegmentsForPricePointError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.production(
          "/components/{component_id}/price_points/{price_point_id}/segments.json",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "component_id", value: request.componentId, schema: s.string() },
          { name: "price_point_id", value: request.pricePointId, schema: s.string() },
        ],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 30) },
          {
            name: "filter",
            value: request.filter,
            schema: s.optional(s.lazy(() => listSegmentsFilterSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSegmentsResponseSchema },
        errorFactory: EventsBasedBillingSegments.ListSegmentsForPricePointError,
      },
      options,
    );
  }

  updateSegment(
    request: EventsBasedBillingSegments.UpdateSegmentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SegmentResponse, EventsBasedBillingSegments.UpdateSegmentError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production(
          "/components/{component_id}/price_points/{price_point_id}/segments/{id}.json",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "component_id", value: request.componentId, schema: s.string() },
          { name: "price_point_id", value: request.pricePointId, schema: s.string() },
          { name: "id", value: request.id, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateSegmentRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: segmentResponseSchema },
        errorFactory: EventsBasedBillingSegments.UpdateSegmentError,
      },
      options,
    );
  }
}

export namespace EventsBasedBillingSegments {
  export type BulkCreateSegmentsRequest = {
    componentId: string;
    pricePointId: string;
    body?: BulkCreateSegments;
  };

  export class BulkCreateSegmentsError extends ResponseError<
    Declared<"error404", undefined> | Declared<"eventBasedBillingSegment1", EventBasedBillingSegment1>
  > {
    static readonly errors: ErrorDecoders<BulkCreateSegmentsError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      {
        on: 422,
        kind: "eventBasedBillingSegment1",
        decode: { kind: "json", schema: eventBasedBillingSegment1Schema },
      },
    ];
  }

  export type BulkUpdateSegmentsRequest = {
    componentId: string;
    pricePointId: string;
    body?: BulkUpdateSegments;
  };

  export class BulkUpdateSegmentsError extends ResponseError<
    Declared<"error404", undefined> | Declared<"eventBasedBillingSegment1", EventBasedBillingSegment1>
  > {
    static readonly errors: ErrorDecoders<BulkUpdateSegmentsError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      {
        on: 422,
        kind: "eventBasedBillingSegment1",
        decode: { kind: "json", schema: eventBasedBillingSegment1Schema },
      },
    ];
  }

  export type CreateSegmentRequestParams = {
    componentId: string;
    pricePointId: string;
    body?: CreateSegmentRequest;
  };

  export class CreateSegmentError extends ResponseError<
    | Declared<"error404", undefined>
    | Declared<"eventBasedBillingSegmentErrors1", EventBasedBillingSegmentErrors1>
  > {
    static readonly errors: ErrorDecoders<CreateSegmentError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      {
        on: 422,
        kind: "eventBasedBillingSegmentErrors1",
        decode: { kind: "json", schema: eventBasedBillingSegmentErrors1Schema },
      },
    ];
  }

  export type DeleteSegmentRequest = {
    componentId: string;
    pricePointId: string;
    id: number;
  };

  export class DeleteSegmentError extends ResponseError<
    Declared<"error404", undefined> | Declared<"error422", undefined>
  > {
    static readonly errors: ErrorDecoders<DeleteSegmentError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ListSegmentsForPricePointRequest = {
    componentId: string;
    pricePointId: string;
    page?: number;
    perPage?: number;
    filter?: ListSegmentsFilter;
  };

  export class ListSegmentsForPricePointError extends ResponseError<
    | Declared<"error404", undefined>
    | Declared<"eventBasedBillingListSegmentsErrors1", EventBasedBillingListSegmentsErrors1>
  > {
    static readonly errors: ErrorDecoders<ListSegmentsForPricePointError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      {
        on: 422,
        kind: "eventBasedBillingListSegmentsErrors1",
        decode: { kind: "json", schema: eventBasedBillingListSegmentsErrors1Schema },
      },
    ];
  }

  export type UpdateSegmentRequestParams = {
    componentId: string;
    pricePointId: string;
    id: number;
    body?: UpdateSegmentRequest;
  };

  export class UpdateSegmentError extends ResponseError<
    | Declared<"error404", undefined>
    | Declared<"eventBasedBillingSegmentErrors1", EventBasedBillingSegmentErrors1>
  > {
    static readonly errors: ErrorDecoders<UpdateSegmentError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      {
        on: 422,
        kind: "eventBasedBillingSegmentErrors1",
        decode: { kind: "json", schema: eventBasedBillingSegmentErrors1Schema },
      },
    ];
  }
}
