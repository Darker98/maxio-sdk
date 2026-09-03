import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  activateEventBasedComponentSchema,
  type ActivateEventBasedComponent,
} from "../models/activate-event-based-component.js";
import { allocateComponentsSchema, type AllocateComponents } from "../models/allocate-components.js";
import {
  allocationPreviewResponseSchema,
  type AllocationPreviewResponse,
} from "../models/allocation-preview-response.js";
import { allocationResponseSchema, type AllocationResponse } from "../models/allocation-response.js";
import {
  bulkComponentsPricePointAssignmentSchema,
  type BulkComponentsPricePointAssignment,
} from "../models/bulk-components-price-point-assignment.js";
import {
  componentAllocationError1Schema,
  type ComponentAllocationError1,
} from "../models/component-allocation-error1.js";
import {
  componentPricePointError1Schema,
  type ComponentPricePointError1,
} from "../models/component-price-point-error1.js";
import {
  createAllocationRequestSchema,
  type CreateAllocationRequest,
} from "../models/create-allocation-request.js";
import { createUsageRequestSchema, type CreateUsageRequest } from "../models/create-usage-request.js";
import { creditSchemeRequestSchema, type CreditSchemeRequest } from "../models/credit-scheme-request.js";
import { ebbEventSchema, type EbbEvent } from "../models/ebb-event.js";
import { errorListResponse1Schema, type ErrorListResponse1 } from "../models/error-list-response1.js";
import { includeNotNullSchema, type IncludeNotNull } from "../models/include-not-null.js";
import {
  listSubscriptionComponentsFilterSchema,
  type ListSubscriptionComponentsFilter,
} from "../models/list-subscription-components-filter.js";
import {
  listSubscriptionComponentsForSiteFilterSchema,
  type ListSubscriptionComponentsForSiteFilter,
} from "../models/list-subscription-components-for-site-filter.js";
import {
  listSubscriptionComponentsIncludeSchema,
  type ListSubscriptionComponentsInclude,
} from "../models/list-subscription-components-include.js";
import {
  listSubscriptionComponentsResponseSchema,
  type ListSubscriptionComponentsResponse,
} from "../models/list-subscription-components-response.js";
import {
  listSubscriptionComponentsSortSchema,
  type ListSubscriptionComponentsSort,
} from "../models/list-subscription-components-sort.js";
import {
  previewAllocationsRequestSchema,
  type PreviewAllocationsRequest,
} from "../models/preview-allocations-request.js";
import { sortingDirectionSchema, type SortingDirection } from "../models/sorting-direction.js";
import {
  subscriptionComponentAllocationError1Schema,
  type SubscriptionComponentAllocationError1,
} from "../models/subscription-component-allocation-error1.js";
import {
  subscriptionComponentResponseSchema,
  type SubscriptionComponentResponse,
} from "../models/subscription-component-response.js";
import {
  subscriptionListDateFieldSchema,
  type SubscriptionListDateField,
} from "../models/subscription-list-date-field.js";
import { subscriptionResponseSchema, type SubscriptionResponse } from "../models/subscription-response.js";
import { componentIdModelSchema, type ComponentIdModel } from "../models/unions/component-id-model.js";
import {
  subscriptionIdOrReferenceSchema,
  type SubscriptionIdOrReference,
} from "../models/unions/subscription-id-or-reference.js";
import {
  updateAllocationExpirationDateSchema,
  type UpdateAllocationExpirationDate,
} from "../models/update-allocation-expiration-date.js";
import { usageResponseSchema, type UsageResponse } from "../models/usage-response.js";
import type { Servers } from "../servers.js";

export class SubscriptionComponents {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  activateEventBasedComponent(
    request: SubscriptionComponents.ActivateEventBasedComponentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "POST",
        url: this.#servers.production(
          "/event_based_billing/subscriptions/{subscription_id}/components/{component_id}/activate.json",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "subscription_id", value: request.subscriptionId, schema: s.number() },
          { name: "component_id", value: request.componentId, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => activateEventBasedComponentSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  allocateComponent(
    request: SubscriptionComponents.AllocateComponentRequest,
    options?: RequestOptions,
  ): ApiPromise<AllocationResponse, SubscriptionComponents.AllocateComponentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production(
          "/subscriptions/{subscription_id}/components/{component_id}/allocations.json",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "subscription_id", value: request.subscriptionId, schema: s.number() },
          { name: "component_id", value: request.componentId, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createAllocationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: allocationResponseSchema },
        errorFactory: SubscriptionComponents.AllocateComponentError,
      },
      options,
    );
  }

  allocateComponents(
    request: SubscriptionComponents.AllocateComponentsRequest,
    options?: RequestOptions,
  ): ApiPromise<AllocationResponse[], SubscriptionComponents.AllocateComponentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscriptions/{subscription_id}/allocations.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => allocateComponentsSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => allocationResponseSchema)) },
        errorFactory: SubscriptionComponents.AllocateComponentsError,
      },
      options,
    );
  }

  bulkRecordEvents(
    request: SubscriptionComponents.BulkRecordEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "POST",
        url: this.#servers.ebb("/events/{api_handle}/bulk.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "api_handle", value: request.apiHandle, schema: s.string() }],
        query: [{ name: "store_uid", value: request.storeUid, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.array(s.lazy(() => ebbEventSchema))),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  bulkResetSubscriptionComponentsPricePoints(
    request: SubscriptionComponents.BulkResetSubscriptionComponentsPricePointsRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponse, ResponseError> {
    return this.#rawClient.execute<SubscriptionResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.production("/subscriptions/{subscription_id}/price_points/reset.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subscriptionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  bulkUpdateSubscriptionComponentsPricePoints(
    request: SubscriptionComponents.BulkUpdateSubscriptionComponentsPricePointsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    BulkComponentsPricePointAssignment,
    SubscriptionComponents.BulkUpdateSubscriptionComponentsPricePointsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscriptions/{subscription_id}/price_points.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => bulkComponentsPricePointAssignmentSchema)),
        },
      },
      {
        success: { kind: "json", schema: bulkComponentsPricePointAssignmentSchema },
        errorFactory: SubscriptionComponents.BulkUpdateSubscriptionComponentsPricePointsError,
      },
      options,
    );
  }

  createUsage(
    request: SubscriptionComponents.CreateUsageRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UsageResponse, SubscriptionComponents.CreateUsageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production(
          "/subscriptions/{subscription_id_or_reference}/components/{component_id}/usages.json",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          {
            name: "subscription_id_or_reference",
            value: request.subscriptionIdOrReference,
            schema: subscriptionIdOrReferenceSchema,
          },
          { name: "component_id", value: request.componentId, schema: componentIdModelSchema },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createUsageRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: usageResponseSchema },
        errorFactory: SubscriptionComponents.CreateUsageError,
      },
      options,
    );
  }

  deactivateEventBasedComponent(
    request: SubscriptionComponents.DeactivateEventBasedComponentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "POST",
        url: this.#servers.production(
          "/event_based_billing/subscriptions/{subscription_id}/components/{component_id}/deactivate.json",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "subscription_id", value: request.subscriptionId, schema: s.number() },
          { name: "component_id", value: request.componentId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deletePrepaidUsageAllocation(
    request: SubscriptionComponents.DeletePrepaidUsageAllocationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SubscriptionComponents.DeletePrepaidUsageAllocationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.production(
          "/subscriptions/{subscription_id}/components/{component_id}/allocations/{allocation_id}.json",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "subscription_id", value: request.subscriptionId, schema: s.number() },
          { name: "component_id", value: request.componentId, schema: s.number() },
          { name: "allocation_id", value: request.allocationId, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => creditSchemeRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: SubscriptionComponents.DeletePrepaidUsageAllocationError,
      },
      options,
    );
  }

  listAllocations(
    request: SubscriptionComponents.ListAllocationsRequest,
    options?: RequestOptions,
  ): ApiPromise<AllocationResponse[], SubscriptionComponents.ListAllocationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.production(
          "/subscriptions/{subscription_id}/components/{component_id}/allocations.json",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "subscription_id", value: request.subscriptionId, schema: s.number() },
          { name: "component_id", value: request.componentId, schema: s.number() },
        ],
        query: [{ name: "page", value: request.page, schema: s.defaulted(s.number(), 1) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => allocationResponseSchema)) },
        errorFactory: SubscriptionComponents.ListAllocationsError,
      },
      options,
    );
  }

  listSubscriptionComponents(
    request: SubscriptionComponents.ListSubscriptionComponentsRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionComponentResponse[], ResponseError> {
    return this.#rawClient.execute<SubscriptionComponentResponse[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/subscriptions/{subscription_id}/components.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        query: [
          {
            name: "date_field",
            value: request.dateField,
            schema: s.optional(s.lazy(() => subscriptionListDateFieldSchema)),
          },
          {
            name: "direction",
            value: request.direction,
            schema: s.optional(s.lazy(() => sortingDirectionSchema)),
          },
          {
            name: "filter",
            value: request.filter,
            schema: s.optional(s.lazy(() => listSubscriptionComponentsFilterSchema)),
          },
          { name: "end_date", value: request.endDate, schema: s.optional(s.string()) },
          { name: "end_datetime", value: request.endDatetime, schema: s.optional(s.string()) },
          {
            name: "price_point_ids",
            value: request.pricePointIds,
            schema: s.optional(s.lazy(() => includeNotNullSchema)),
          },
          {
            name: "product_family_ids",
            value: request.productFamilyIds,
            schema: s.optional(s.array(s.number())),
          },
          {
            name: "sort",
            value: request.sort,
            schema: s.optional(s.lazy(() => listSubscriptionComponentsSortSchema)),
          },
          { name: "start_date", value: request.startDate, schema: s.optional(s.string()) },
          { name: "start_datetime", value: request.startDatetime, schema: s.optional(s.string()) },
          {
            name: "include",
            value: request.include,
            schema: s.optional(s.array(s.lazy(() => listSubscriptionComponentsIncludeSchema))),
          },
          { name: "in_use", value: request.inUse, schema: s.optional(s.boolean()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => subscriptionComponentResponseSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listSubscriptionComponentsForSite(
    request: SubscriptionComponents.ListSubscriptionComponentsForSiteRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSubscriptionComponentsResponse, ResponseError> {
    return this.#rawClient.execute<ListSubscriptionComponentsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/subscriptions_components.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 20) },
          {
            name: "sort",
            value: request.sort,
            schema: s.optional(s.lazy(() => listSubscriptionComponentsSortSchema)),
          },
          {
            name: "direction",
            value: request.direction,
            schema: s.optional(s.lazy(() => sortingDirectionSchema)),
          },
          {
            name: "filter",
            value: request.filter,
            schema: s.optional(s.lazy(() => listSubscriptionComponentsForSiteFilterSchema)),
          },
          {
            name: "date_field",
            value: request.dateField,
            schema: s.optional(s.lazy(() => subscriptionListDateFieldSchema)),
          },
          { name: "start_date", value: request.startDate, schema: s.optional(s.string()) },
          { name: "start_datetime", value: request.startDatetime, schema: s.optional(s.string()) },
          { name: "end_date", value: request.endDate, schema: s.optional(s.string()) },
          { name: "end_datetime", value: request.endDatetime, schema: s.optional(s.string()) },
          {
            name: "subscription_ids",
            value: request.subscriptionIds,
            schema: s.optional(s.array(s.number())),
          },
          {
            name: "price_point_ids",
            value: request.pricePointIds,
            schema: s.optional(s.lazy(() => includeNotNullSchema)),
          },
          {
            name: "product_family_ids",
            value: request.productFamilyIds,
            schema: s.optional(s.array(s.number())),
          },
          {
            name: "include",
            value: request.include,
            schema: s.optional(s.lazy(() => listSubscriptionComponentsIncludeSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSubscriptionComponentsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listUsages(
    request: SubscriptionComponents.ListUsagesRequest,
    options?: RequestOptions,
  ): ApiPromise<UsageResponse[], ResponseError> {
    return this.#rawClient.execute<UsageResponse[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.production(
          "/subscriptions/{subscription_id_or_reference}/components/{component_id}/usages.json",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          {
            name: "subscription_id_or_reference",
            value: request.subscriptionIdOrReference,
            schema: subscriptionIdOrReferenceSchema,
          },
          { name: "component_id", value: request.componentId, schema: componentIdModelSchema },
        ],
        query: [
          { name: "since_id", value: request.sinceId, schema: s.optional(s.number()) },
          { name: "max_id", value: request.maxId, schema: s.optional(s.number()) },
          { name: "since_date", value: request.sinceDate, schema: s.optional(s.dateOnly()) },
          { name: "until_date", value: request.untilDate, schema: s.optional(s.dateOnly()) },
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 20) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => usageResponseSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  previewAllocations(
    request: SubscriptionComponents.PreviewAllocationsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AllocationPreviewResponse, SubscriptionComponents.PreviewAllocationsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscriptions/{subscription_id}/allocations/preview.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => previewAllocationsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: allocationPreviewResponseSchema },
        errorFactory: SubscriptionComponents.PreviewAllocationsError,
      },
      options,
    );
  }

  readSubscriptionComponent(
    request: SubscriptionComponents.ReadSubscriptionComponentRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionComponentResponse, SubscriptionComponents.ReadSubscriptionComponentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.production("/subscriptions/{subscription_id}/components/{component_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "subscription_id", value: request.subscriptionId, schema: s.number() },
          { name: "component_id", value: request.componentId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subscriptionComponentResponseSchema },
        errorFactory: SubscriptionComponents.ReadSubscriptionComponentError,
      },
      options,
    );
  }

  recordEvent(
    request: SubscriptionComponents.RecordEventRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "POST",
        url: this.#servers.ebb("/events/{api_handle}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "api_handle", value: request.apiHandle, schema: s.string() }],
        query: [{ name: "store_uid", value: request.storeUid, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => ebbEventSchema)) },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updatePrepaidUsageAllocationExpirationDate(
    request: SubscriptionComponents.UpdatePrepaidUsageAllocationExpirationDateRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SubscriptionComponents.UpdatePrepaidUsageAllocationExpirationDateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production(
          "/subscriptions/{subscription_id}/components/{component_id}/allocations/{allocation_id}.json",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "subscription_id", value: request.subscriptionId, schema: s.number() },
          { name: "component_id", value: request.componentId, schema: s.number() },
          { name: "allocation_id", value: request.allocationId, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateAllocationExpirationDateSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: SubscriptionComponents.UpdatePrepaidUsageAllocationExpirationDateError,
      },
      options,
    );
  }
}

export namespace SubscriptionComponents {
  export type ActivateEventBasedComponentRequest = {
    subscriptionId: number;
    componentId: number;
    body?: ActivateEventBasedComponent;
  };

  export type AllocateComponentRequest = {
    subscriptionId: number;
    componentId: number;
    body?: CreateAllocationRequest;
  };

  export class AllocateComponentError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<AllocateComponentError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type AllocateComponentsRequest = {
    subscriptionId: number;
    body?: AllocateComponents;
  };

  export class AllocateComponentsError extends ResponseError<
    Declared<"error404", undefined> | Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<AllocateComponentsError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type BulkRecordEventsRequest = {
    apiHandle: string;
    storeUid?: string;
    body?: EbbEvent[];
  };

  export type BulkResetSubscriptionComponentsPricePointsRequest = {
    subscriptionId: number;
  };

  export type BulkUpdateSubscriptionComponentsPricePointsRequest = {
    subscriptionId: number;
    body?: BulkComponentsPricePointAssignment;
  };

  export class BulkUpdateSubscriptionComponentsPricePointsError extends ResponseError<
    Declared<"componentPricePointError1", ComponentPricePointError1>
  > {
    static readonly errors: ErrorDecoders<BulkUpdateSubscriptionComponentsPricePointsError> = [
      {
        on: 422,
        kind: "componentPricePointError1",
        decode: { kind: "json", schema: componentPricePointError1Schema },
      },
    ];
  }

  export type CreateUsageRequestParams = {
    subscriptionIdOrReference: SubscriptionIdOrReference;
    componentId: ComponentIdModel;
    body?: CreateUsageRequest;
  };

  export class CreateUsageError extends ResponseError<Declared<"errorListResponse1", ErrorListResponse1>> {
    static readonly errors: ErrorDecoders<CreateUsageError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type DeactivateEventBasedComponentRequest = {
    subscriptionId: number;
    componentId: number;
  };

  export type DeletePrepaidUsageAllocationRequest = {
    subscriptionId: number;
    componentId: number;
    allocationId: number;
    body?: CreditSchemeRequest;
  };

  export class DeletePrepaidUsageAllocationError extends ResponseError<
    | Declared<"error404", undefined>
    | Declared<"subscriptionComponentAllocationError1", SubscriptionComponentAllocationError1>
  > {
    static readonly errors: ErrorDecoders<DeletePrepaidUsageAllocationError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      {
        on: 422,
        kind: "subscriptionComponentAllocationError1",
        decode: { kind: "json", schema: subscriptionComponentAllocationError1Schema },
      },
    ];
  }

  export type ListAllocationsRequest = {
    subscriptionId: number;
    componentId: number;
    page?: number;
  };

  export class ListAllocationsError extends ResponseError<
    Declared<"error404", undefined> | Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<ListAllocationsError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type ListSubscriptionComponentsRequest = {
    subscriptionId: number;
    dateField?: SubscriptionListDateField;
    direction?: SortingDirection;
    filter?: ListSubscriptionComponentsFilter;
    endDate?: string;
    endDatetime?: string;
    pricePointIds?: IncludeNotNull;
    productFamilyIds?: number[];
    sort?: ListSubscriptionComponentsSort;
    startDate?: string;
    startDatetime?: string;
    include?: ListSubscriptionComponentsInclude[];
    inUse?: boolean;
  };

  export type ListSubscriptionComponentsForSiteRequest = {
    page?: number;
    perPage?: number;
    sort?: ListSubscriptionComponentsSort;
    direction?: SortingDirection;
    filter?: ListSubscriptionComponentsForSiteFilter;
    dateField?: SubscriptionListDateField;
    startDate?: string;
    startDatetime?: string;
    endDate?: string;
    endDatetime?: string;
    subscriptionIds?: number[];
    pricePointIds?: IncludeNotNull;
    productFamilyIds?: number[];
    include?: ListSubscriptionComponentsInclude;
  };

  export type ListUsagesRequest = {
    subscriptionIdOrReference: SubscriptionIdOrReference;
    componentId: ComponentIdModel;
    sinceId?: number;
    maxId?: number;
    sinceDate?: string;
    untilDate?: string;
    page?: number;
    perPage?: number;
  };

  export type PreviewAllocationsRequestParams = {
    subscriptionId: number;
    body?: PreviewAllocationsRequest;
  };

  export class PreviewAllocationsError extends ResponseError<
    Declared<"componentAllocationError1", ComponentAllocationError1>
  > {
    static readonly errors: ErrorDecoders<PreviewAllocationsError> = [
      {
        on: 422,
        kind: "componentAllocationError1",
        decode: { kind: "json", schema: componentAllocationError1Schema },
      },
    ];
  }

  export type ReadSubscriptionComponentRequest = {
    subscriptionId: number;
    componentId: number;
  };

  export class ReadSubscriptionComponentError extends ResponseError<Declared<"error404", undefined>> {
    static readonly errors: ErrorDecoders<ReadSubscriptionComponentError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type RecordEventRequest = {
    apiHandle: string;
    storeUid?: string;
    body?: EbbEvent;
  };

  export type UpdatePrepaidUsageAllocationExpirationDateRequest = {
    subscriptionId: number;
    componentId: number;
    allocationId: number;
    body?: UpdateAllocationExpirationDate;
  };

  export class UpdatePrepaidUsageAllocationExpirationDateError extends ResponseError<
    | Declared<"error404", undefined>
    | Declared<"subscriptionComponentAllocationError1", SubscriptionComponentAllocationError1>
  > {
    static readonly errors: ErrorDecoders<UpdatePrepaidUsageAllocationExpirationDateError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      {
        on: 422,
        kind: "subscriptionComponentAllocationError1",
        decode: { kind: "json", schema: subscriptionComponentAllocationError1Schema },
      },
    ];
  }
}
