import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  cloneComponentPricePointRequestSchema,
  type CloneComponentPricePointRequest,
} from "../models/clone-component-price-point-request.js";
import {
  componentCurrencyPricesResponseSchema,
  type ComponentCurrencyPricesResponse,
} from "../models/component-currency-prices-response.js";
import {
  componentPricePointCurrencyOverageResponseSchema,
  type ComponentPricePointCurrencyOverageResponse,
} from "../models/component-price-point-currency-overage-response.js";
import {
  componentPricePointResponseSchema,
  type ComponentPricePointResponse,
} from "../models/component-price-point-response.js";
import {
  componentPricePointsResponseSchema,
  type ComponentPricePointsResponse,
} from "../models/component-price-points-response.js";
import { componentResponseSchema, type ComponentResponse } from "../models/component-response.js";
import {
  createComponentPricePointRequestSchema,
  type CreateComponentPricePointRequest,
} from "../models/create-component-price-point-request.js";
import {
  createComponentPricePointsRequestSchema,
  type CreateComponentPricePointsRequest,
} from "../models/create-component-price-points-request.js";
import {
  createCurrencyPricesRequestSchema,
  type CreateCurrencyPricesRequest,
} from "../models/create-currency-prices-request.js";
import {
  errorArrayMapResponse1Schema,
  type ErrorArrayMapResponse1,
} from "../models/error-array-map-response1.js";
import { errorListResponse1Schema, type ErrorListResponse1 } from "../models/error-list-response1.js";
import {
  listComponentsPricePointsIncludeSchema,
  type ListComponentsPricePointsInclude,
} from "../models/list-components-price-points-include.js";
import {
  listComponentsPricePointsResponseSchema,
  type ListComponentsPricePointsResponse,
} from "../models/list-components-price-points-response.js";
import {
  listPricePointsFilterSchema,
  type ListPricePointsFilter,
} from "../models/list-price-points-filter.js";
import { pricePointTypeSchema, type PricePointType } from "../models/price-point-type.js";
import { sortingDirectionSchema, type SortingDirection } from "../models/sorting-direction.js";
import { componentIdModelSchema, type ComponentIdModel } from "../models/unions/component-id-model.js";
import { pricePointIdModelSchema, type PricePointIdModel } from "../models/unions/price-point-id-model.js";
import {
  updateComponentPricePointRequestSchema,
  type UpdateComponentPricePointRequest,
} from "../models/update-component-price-point-request.js";
import {
  updateCurrencyPricesRequestSchema,
  type UpdateCurrencyPricesRequest,
} from "../models/update-currency-prices-request.js";
import type { Servers } from "../servers.js";

export class ComponentPricePoints {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  archiveComponentPricePoint(
    request: ComponentPricePoints.ArchiveComponentPricePointRequest,
    options?: RequestOptions,
  ): ApiPromise<ComponentPricePointResponse, ComponentPricePoints.ArchiveComponentPricePointError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.production("/components/{component_id}/price_points/{price_point_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "component_id", value: request.componentId, schema: componentIdModelSchema },
          { name: "price_point_id", value: request.pricePointId, schema: pricePointIdModelSchema },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: componentPricePointResponseSchema },
        errorFactory: ComponentPricePoints.ArchiveComponentPricePointError,
      },
      options,
    );
  }

  bulkCreateComponentPricePoints(
    request: ComponentPricePoints.BulkCreateComponentPricePointsRequest,
    options?: RequestOptions,
  ): ApiPromise<ComponentPricePointsResponse, ComponentPricePoints.BulkCreateComponentPricePointsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/components/{component_id}/price_points/bulk.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "component_id", value: request.componentId, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createComponentPricePointsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: componentPricePointsResponseSchema },
        errorFactory: ComponentPricePoints.BulkCreateComponentPricePointsError,
      },
      options,
    );
  }

  cloneComponentPricePoint(
    request: ComponentPricePoints.CloneComponentPricePointRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    ComponentPricePointCurrencyOverageResponse,
    ComponentPricePoints.CloneComponentPricePointError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/components/{component_id}/price_points/{price_point_id}/clone.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "component_id", value: request.componentId, schema: componentIdModelSchema },
          { name: "price_point_id", value: request.pricePointId, schema: pricePointIdModelSchema },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => cloneComponentPricePointRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: componentPricePointCurrencyOverageResponseSchema },
        errorFactory: ComponentPricePoints.CloneComponentPricePointError,
      },
      options,
    );
  }

  createComponentPricePoint(
    request: ComponentPricePoints.CreateComponentPricePointRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ComponentPricePointResponse, ComponentPricePoints.CreateComponentPricePointError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/components/{component_id}/price_points.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "component_id", value: request.componentId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createComponentPricePointRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: componentPricePointResponseSchema },
        errorFactory: ComponentPricePoints.CreateComponentPricePointError,
      },
      options,
    );
  }

  createCurrencyPrices(
    request: ComponentPricePoints.CreateCurrencyPricesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ComponentCurrencyPricesResponse, ComponentPricePoints.CreateCurrencyPricesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/price_points/{price_point_id}/currency_prices.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "price_point_id", value: request.pricePointId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createCurrencyPricesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: componentCurrencyPricesResponseSchema },
        errorFactory: ComponentPricePoints.CreateCurrencyPricesError,
      },
      options,
    );
  }

  listAllComponentPricePoints(
    request: ComponentPricePoints.ListAllComponentPricePointsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListComponentsPricePointsResponse, ComponentPricePoints.ListAllComponentPricePointsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.production("/components_price_points.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [
          {
            name: "include",
            value: request.include,
            schema: s.optional(s.lazy(() => listComponentsPricePointsIncludeSchema)),
          },
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 20) },
          {
            name: "direction",
            value: request.direction,
            schema: s.optional(s.lazy(() => sortingDirectionSchema)),
          },
          {
            name: "filter",
            value: request.filter,
            schema: s.optional(s.lazy(() => listPricePointsFilterSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listComponentsPricePointsResponseSchema },
        errorFactory: ComponentPricePoints.ListAllComponentPricePointsError,
      },
      options,
    );
  }

  listComponentPricePoints(
    request: ComponentPricePoints.ListComponentPricePointsRequest,
    options?: RequestOptions,
  ): ApiPromise<ComponentPricePointsResponse, ResponseError> {
    return this.#rawClient.execute<ComponentPricePointsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/components/{component_id}/price_points.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "component_id", value: request.componentId, schema: s.number() }],
        query: [
          { name: "currency_prices", value: request.currencyPrices, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 20) },
          {
            name: "filter[type]",
            value: request.filterType,
            schema: s.optional(s.array(s.lazy(() => pricePointTypeSchema))),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: componentPricePointsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  promoteComponentPricePointToDefault(
    request: ComponentPricePoints.PromoteComponentPricePointToDefaultRequest,
    options?: RequestOptions,
  ): ApiPromise<ComponentResponse, ResponseError> {
    return this.#rawClient.execute<ComponentResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.production(
          "/components/{component_id}/price_points/{price_point_id}/default.json",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "component_id", value: request.componentId, schema: s.number() },
          { name: "price_point_id", value: request.pricePointId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: componentResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  readComponentPricePoint(
    request: ComponentPricePoints.ReadComponentPricePointRequest,
    options?: RequestOptions,
  ): ApiPromise<ComponentPricePointCurrencyOverageResponse, ResponseError> {
    return this.#rawClient.execute<ComponentPricePointCurrencyOverageResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/components/{component_id}/price_points/{price_point_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "component_id", value: request.componentId, schema: componentIdModelSchema },
          { name: "price_point_id", value: request.pricePointId, schema: pricePointIdModelSchema },
        ],
        query: [{ name: "currency_prices", value: request.currencyPrices, schema: s.optional(s.boolean()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: componentPricePointCurrencyOverageResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  unarchiveComponentPricePoint(
    request: ComponentPricePoints.UnarchiveComponentPricePointRequest,
    options?: RequestOptions,
  ): ApiPromise<ComponentPricePointResponse, ResponseError> {
    return this.#rawClient.execute<ComponentPricePointResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.production(
          "/components/{component_id}/price_points/{price_point_id}/unarchive.json",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "component_id", value: request.componentId, schema: s.number() },
          { name: "price_point_id", value: request.pricePointId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: componentPricePointResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateComponentPricePoint(
    request: ComponentPricePoints.UpdateComponentPricePointRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ComponentPricePointResponse, ComponentPricePoints.UpdateComponentPricePointError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production("/components/{component_id}/price_points/{price_point_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "component_id", value: request.componentId, schema: componentIdModelSchema },
          { name: "price_point_id", value: request.pricePointId, schema: pricePointIdModelSchema },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateComponentPricePointRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: componentPricePointResponseSchema },
        errorFactory: ComponentPricePoints.UpdateComponentPricePointError,
      },
      options,
    );
  }

  updateCurrencyPrices(
    request: ComponentPricePoints.UpdateCurrencyPricesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ComponentCurrencyPricesResponse, ComponentPricePoints.UpdateCurrencyPricesError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production("/price_points/{price_point_id}/currency_prices.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "price_point_id", value: request.pricePointId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateCurrencyPricesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: componentCurrencyPricesResponseSchema },
        errorFactory: ComponentPricePoints.UpdateCurrencyPricesError,
      },
      options,
    );
  }
}

export namespace ComponentPricePoints {
  export type ArchiveComponentPricePointRequest = {
    componentId: ComponentIdModel;
    pricePointId: PricePointIdModel;
  };

  export class ArchiveComponentPricePointError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<ArchiveComponentPricePointError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type BulkCreateComponentPricePointsRequest = {
    componentId: string;
    body?: CreateComponentPricePointsRequest;
  };

  export class BulkCreateComponentPricePointsError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<BulkCreateComponentPricePointsError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type CloneComponentPricePointRequestParams = {
    componentId: ComponentIdModel;
    pricePointId: PricePointIdModel;
    body?: CloneComponentPricePointRequest;
  };

  export class CloneComponentPricePointError extends ResponseError<
    Declared<"error404", undefined> | Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<CloneComponentPricePointError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type CreateComponentPricePointRequestParams = {
    componentId: number;
    body?: CreateComponentPricePointRequest;
  };

  export class CreateComponentPricePointError extends ResponseError<
    Declared<"errorArrayMapResponse1", ErrorArrayMapResponse1>
  > {
    static readonly errors: ErrorDecoders<CreateComponentPricePointError> = [
      {
        on: 422,
        kind: "errorArrayMapResponse1",
        decode: { kind: "json", schema: errorArrayMapResponse1Schema },
      },
    ];
  }

  export type CreateCurrencyPricesRequestParams = {
    pricePointId: number;
    body?: CreateCurrencyPricesRequest;
  };

  export class CreateCurrencyPricesError extends ResponseError<
    Declared<"errorArrayMapResponse1", ErrorArrayMapResponse1>
  > {
    static readonly errors: ErrorDecoders<CreateCurrencyPricesError> = [
      {
        on: 422,
        kind: "errorArrayMapResponse1",
        decode: { kind: "json", schema: errorArrayMapResponse1Schema },
      },
    ];
  }

  export type ListAllComponentPricePointsRequest = {
    include?: ListComponentsPricePointsInclude;
    page?: number;
    perPage?: number;
    direction?: SortingDirection;
    filter?: ListPricePointsFilter;
  };

  export class ListAllComponentPricePointsError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<ListAllComponentPricePointsError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type ListComponentPricePointsRequest = {
    componentId: number;
    currencyPrices?: boolean;
    page?: number;
    perPage?: number;
    filterType?: PricePointType[];
  };

  export type PromoteComponentPricePointToDefaultRequest = {
    componentId: number;
    pricePointId: number;
  };

  export type ReadComponentPricePointRequest = {
    componentId: ComponentIdModel;
    pricePointId: PricePointIdModel;
    currencyPrices?: boolean;
  };

  export type UnarchiveComponentPricePointRequest = {
    componentId: number;
    pricePointId: number;
  };

  export type UpdateComponentPricePointRequestParams = {
    componentId: ComponentIdModel;
    pricePointId: PricePointIdModel;
    body?: UpdateComponentPricePointRequest;
  };

  export class UpdateComponentPricePointError extends ResponseError<
    Declared<"errorArrayMapResponse1", ErrorArrayMapResponse1>
  > {
    static readonly errors: ErrorDecoders<UpdateComponentPricePointError> = [
      {
        on: 422,
        kind: "errorArrayMapResponse1",
        decode: { kind: "json", schema: errorArrayMapResponse1Schema },
      },
    ];
  }

  export type UpdateCurrencyPricesRequestParams = {
    pricePointId: number;
    body?: UpdateCurrencyPricesRequest;
  };

  export class UpdateCurrencyPricesError extends ResponseError<
    Declared<"errorArrayMapResponse1", ErrorArrayMapResponse1>
  > {
    static readonly errors: ErrorDecoders<UpdateCurrencyPricesError> = [
      {
        on: 422,
        kind: "errorArrayMapResponse1",
        decode: { kind: "json", schema: errorArrayMapResponse1Schema },
      },
    ];
  }
}
