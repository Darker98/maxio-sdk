import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  activateSubscriptionRequestSchema,
  type ActivateSubscriptionRequest,
} from "../models/activate-subscription-request.js";
import { addCouponsRequestSchema, type AddCouponsRequest } from "../models/add-coupons-request.js";
import {
  createSubscriptionRequestSchema,
  type CreateSubscriptionRequest,
} from "../models/create-subscription-request.js";
import {
  errorArrayMapResponse1Schema,
  type ErrorArrayMapResponse1,
} from "../models/error-array-map-response1.js";
import { errorListResponse1Schema, type ErrorListResponse1 } from "../models/error-list-response1.js";
import {
  overrideSubscriptionRequestSchema,
  type OverrideSubscriptionRequest,
} from "../models/override-subscription-request.js";
import {
  prepaidConfigurationResponseSchema,
  type PrepaidConfigurationResponse,
} from "../models/prepaid-configuration-response.js";
import { singleErrorResponse1Schema, type SingleErrorResponse1 } from "../models/single-error-response1.js";
import { sortingDirectionSchema, type SortingDirection } from "../models/sorting-direction.js";
import {
  subscriptionAddCouponError1Schema,
  type SubscriptionAddCouponError1,
} from "../models/subscription-add-coupon-error1.js";
import {
  subscriptionDateFieldSchema,
  type SubscriptionDateField,
} from "../models/subscription-date-field.js";
import { subscriptionIncludeSchema, type SubscriptionInclude } from "../models/subscription-include.js";
import {
  subscriptionListIncludeSchema,
  type SubscriptionListInclude,
} from "../models/subscription-list-include.js";
import {
  subscriptionPreviewResponseSchema,
  type SubscriptionPreviewResponse,
} from "../models/subscription-preview-response.js";
import {
  subscriptionPurgeTypeSchema,
  type SubscriptionPurgeType,
} from "../models/subscription-purge-type.js";
import {
  subscriptionRemoveCouponErrors1Schema,
  type SubscriptionRemoveCouponErrors1,
} from "../models/subscription-remove-coupon-errors1.js";
import { subscriptionResponseSchema, type SubscriptionResponse } from "../models/subscription-response.js";
import { SubscriptionSort, subscriptionSortSchema } from "../models/subscription-sort.js";
import {
  subscriptionStateFilterSchema,
  type SubscriptionStateFilter,
} from "../models/subscription-state-filter.js";
import {
  prepaidConfigurationErrorResponseSchema,
  type PrepaidConfigurationErrorResponse,
} from "../models/unions/prepaid-configuration-error-response.js";
import {
  updateSubscriptionRequestSchema,
  type UpdateSubscriptionRequest,
} from "../models/update-subscription-request.js";
import {
  upsertPrepaidConfigurationRequestSchema,
  type UpsertPrepaidConfigurationRequest,
} from "../models/upsert-prepaid-configuration-request.js";
import type { Servers } from "../servers.js";

export class Subscriptions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  activateSubscription(
    request: Subscriptions.ActivateSubscriptionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponse, Subscriptions.ActivateSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production("/subscriptions/{subscription_id}/activate.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => activateSubscriptionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: subscriptionResponseSchema },
        errorFactory: Subscriptions.ActivateSubscriptionError,
      },
      options,
    );
  }

  applyCouponsToSubscription(
    request: Subscriptions.ApplyCouponsToSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponse, Subscriptions.ApplyCouponsToSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscriptions/{subscription_id}/add_coupon.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        query: [{ name: "code", value: request.code, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => addCouponsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: subscriptionResponseSchema },
        errorFactory: Subscriptions.ApplyCouponsToSubscriptionError,
      },
      options,
    );
  }

  createSubscription(
    request: Subscriptions.CreateSubscriptionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponse, Subscriptions.CreateSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscriptions.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createSubscriptionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: subscriptionResponseSchema },
        errorFactory: Subscriptions.CreateSubscriptionError,
      },
      options,
    );
  }

  findSubscription(
    request: Subscriptions.FindSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponse, Subscriptions.FindSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.production("/subscriptions/lookup.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [{ name: "reference", value: request.reference, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subscriptionResponseSchema },
        errorFactory: Subscriptions.FindSubscriptionError,
      },
      options,
    );
  }

  listSubscriptions(
    request: Subscriptions.ListSubscriptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponse[], ResponseError> {
    return this.#rawClient.execute<SubscriptionResponse[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/subscriptions.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 20) },
          {
            name: "state",
            value: request.state,
            schema: s.optional(s.lazy(() => subscriptionStateFilterSchema)),
          },
          { name: "product", value: request.product, schema: s.optional(s.number()) },
          {
            name: "product_price_point_id",
            value: request.productPricePointId,
            schema: s.optional(s.number()),
          },
          { name: "coupon", value: request.coupon, schema: s.optional(s.number()) },
          { name: "coupon_code", value: request.couponCode, schema: s.optional(s.string()) },
          { name: "branding_theme_id", value: request.brandingThemeId, schema: s.optional(s.number()) },
          {
            name: "date_field",
            value: request.dateField,
            schema: s.optional(s.lazy(() => subscriptionDateFieldSchema)),
          },
          { name: "start_date", value: request.startDate, schema: s.optional(s.dateOnly()) },
          { name: "end_date", value: request.endDate, schema: s.optional(s.dateOnly()) },
          { name: "start_datetime", value: request.startDatetime, schema: s.optional(s.dateTime()) },
          { name: "end_datetime", value: request.endDatetime, schema: s.optional(s.dateTime()) },
          { name: "metadata", value: request.metadata, schema: s.optional(s.record(s.string(), s.string())) },
          {
            name: "direction",
            value: request.direction,
            schema: s.optional(s.lazy(() => sortingDirectionSchema)),
          },
          {
            name: "sort",
            value: request.sort,
            schema: s.defaulted(subscriptionSortSchema, SubscriptionSort.SignupDate),
          },
          {
            name: "include",
            value: request.include,
            schema: s.optional(s.array(s.lazy(() => subscriptionListIncludeSchema))),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => subscriptionResponseSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  overrideSubscription(
    request: Subscriptions.OverrideSubscriptionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Subscriptions.OverrideSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production("/subscriptions/{subscription_id}/override.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => overrideSubscriptionRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Subscriptions.OverrideSubscriptionError,
      },
      options,
    );
  }

  previewSubscription(
    request: Subscriptions.PreviewSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionPreviewResponse, ResponseError> {
    return this.#rawClient.execute<SubscriptionPreviewResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.production("/subscriptions/preview.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createSubscriptionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: subscriptionPreviewResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  purgeSubscription(
    request: Subscriptions.PurgeSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponse, Subscriptions.PurgeSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscriptions/{subscription_id}/purge.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        query: [
          { name: "ack", value: request.ack, schema: s.number() },
          {
            name: "cascade",
            value: request.cascade,
            schema: s.optional(s.array(s.lazy(() => subscriptionPurgeTypeSchema))),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subscriptionResponseSchema },
        errorFactory: Subscriptions.PurgeSubscriptionError,
      },
      options,
    );
  }

  readSubscription(
    request: Subscriptions.ReadSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponse, ResponseError> {
    return this.#rawClient.execute<SubscriptionResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/subscriptions/{subscription_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        query: [
          {
            name: "include",
            value: request.include,
            schema: s.optional(s.array(s.lazy(() => subscriptionIncludeSchema))),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subscriptionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  removeCouponFromSubscription(
    request: Subscriptions.RemoveCouponFromSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<string, Subscriptions.RemoveCouponFromSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.production("/subscriptions/{subscription_id}/remove_coupon.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        query: [{ name: "coupon_code", value: request.couponCode, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.string() },
        errorFactory: Subscriptions.RemoveCouponFromSubscriptionError,
      },
      options,
    );
  }

  updatePrepaidSubscriptionConfiguration(
    request: Subscriptions.UpdatePrepaidSubscriptionConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<PrepaidConfigurationResponse, Subscriptions.UpdatePrepaidSubscriptionConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscriptions/{subscription_id}/prepaid_configurations.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => upsertPrepaidConfigurationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: prepaidConfigurationResponseSchema },
        errorFactory: Subscriptions.UpdatePrepaidSubscriptionConfigurationError,
      },
      options,
    );
  }

  updateSubscription(
    request: Subscriptions.UpdateSubscriptionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponse, Subscriptions.UpdateSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production("/subscriptions/{subscription_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateSubscriptionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: subscriptionResponseSchema },
        errorFactory: Subscriptions.UpdateSubscriptionError,
      },
      options,
    );
  }
}

export namespace Subscriptions {
  export type ActivateSubscriptionRequestParams = {
    subscriptionId: number;
    body?: ActivateSubscriptionRequest;
  };

  export class ActivateSubscriptionError extends ResponseError<
    Declared<"errorArrayMapResponse1", ErrorArrayMapResponse1>
  > {
    static readonly errors: ErrorDecoders<ActivateSubscriptionError> = [
      {
        on: 400,
        kind: "errorArrayMapResponse1",
        decode: { kind: "json", schema: errorArrayMapResponse1Schema },
      },
    ];
  }

  export type ApplyCouponsToSubscriptionRequest = {
    subscriptionId: number;
    code?: string;
    body?: AddCouponsRequest;
  };

  export class ApplyCouponsToSubscriptionError extends ResponseError<
    Declared<"subscriptionAddCouponError1", SubscriptionAddCouponError1>
  > {
    static readonly errors: ErrorDecoders<ApplyCouponsToSubscriptionError> = [
      {
        on: 422,
        kind: "subscriptionAddCouponError1",
        decode: { kind: "json", schema: subscriptionAddCouponError1Schema },
      },
    ];
  }

  export type CreateSubscriptionRequestParams = {
    body?: CreateSubscriptionRequest;
  };

  export class CreateSubscriptionError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<CreateSubscriptionError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type FindSubscriptionRequest = {
    reference?: string;
  };

  export class FindSubscriptionError extends ResponseError<Declared<"error404", undefined>> {
    static readonly errors: ErrorDecoders<FindSubscriptionError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListSubscriptionsRequest = {
    page?: number;
    perPage?: number;
    state?: SubscriptionStateFilter;
    product?: number;
    productPricePointId?: number;
    coupon?: number;
    couponCode?: string;
    brandingThemeId?: number;
    dateField?: SubscriptionDateField;
    startDate?: string;
    endDate?: string;
    startDatetime?: Date;
    endDatetime?: Date;
    metadata?: Record<string, string>;
    direction?: SortingDirection;
    sort?: SubscriptionSort;
    include?: SubscriptionListInclude[];
  };

  export type OverrideSubscriptionRequestParams = {
    subscriptionId: number;
    body?: OverrideSubscriptionRequest;
  };

  export class OverrideSubscriptionError extends ResponseError<
    Declared<"singleErrorResponse1", SingleErrorResponse1>
  > {
    static readonly errors: ErrorDecoders<OverrideSubscriptionError> = [
      { on: 422, kind: "singleErrorResponse1", decode: { kind: "json", schema: singleErrorResponse1Schema } },
    ];
  }

  export type PreviewSubscriptionRequest = {
    body?: CreateSubscriptionRequest;
  };

  export type PurgeSubscriptionRequest = {
    subscriptionId: number;
    ack: number;
    cascade?: SubscriptionPurgeType[];
  };

  export class PurgeSubscriptionError extends ResponseError<
    Declared<"subscriptionResponse", SubscriptionResponse>
  > {
    static readonly errors: ErrorDecoders<PurgeSubscriptionError> = [
      { on: 400, kind: "subscriptionResponse", decode: { kind: "json", schema: subscriptionResponseSchema } },
    ];
  }

  export type ReadSubscriptionRequest = {
    subscriptionId: number;
    include?: SubscriptionInclude[];
  };

  export type RemoveCouponFromSubscriptionRequest = {
    subscriptionId: number;
    couponCode?: string;
  };

  export class RemoveCouponFromSubscriptionError extends ResponseError<
    Declared<"subscriptionRemoveCouponErrors1", SubscriptionRemoveCouponErrors1>
  > {
    static readonly errors: ErrorDecoders<RemoveCouponFromSubscriptionError> = [
      {
        on: 422,
        kind: "subscriptionRemoveCouponErrors1",
        decode: { kind: "json", schema: subscriptionRemoveCouponErrors1Schema },
      },
    ];
  }

  export type UpdatePrepaidSubscriptionConfigurationRequest = {
    subscriptionId: number;
    body?: UpsertPrepaidConfigurationRequest;
  };

  export class UpdatePrepaidSubscriptionConfigurationError extends ResponseError<
    Declared<"prepaidConfigurationErrorResponse", PrepaidConfigurationErrorResponse>
  > {
    static readonly errors: ErrorDecoders<UpdatePrepaidSubscriptionConfigurationError> = [
      {
        on: 422,
        kind: "prepaidConfigurationErrorResponse",
        decode: { kind: "json", schema: prepaidConfigurationErrorResponseSchema },
      },
    ];
  }

  export type UpdateSubscriptionRequestParams = {
    subscriptionId: number;
    body?: UpdateSubscriptionRequest;
  };

  export class UpdateSubscriptionError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<UpdateSubscriptionError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }
}
