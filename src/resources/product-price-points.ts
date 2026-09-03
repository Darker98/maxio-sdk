import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  bulkCreateProductPricePointsRequestSchema,
  type BulkCreateProductPricePointsRequest,
} from "../models/bulk-create-product-price-points-request.js";
import {
  bulkCreateProductPricePointsResponseSchema,
  type BulkCreateProductPricePointsResponse,
} from "../models/bulk-create-product-price-points-response.js";
import {
  createProductCurrencyPricesRequestSchema,
  type CreateProductCurrencyPricesRequest,
} from "../models/create-product-currency-prices-request.js";
import {
  createProductPricePointRequestSchema,
  type CreateProductPricePointRequest,
} from "../models/create-product-price-point-request.js";
import {
  currencyPricesResponseSchema,
  type CurrencyPricesResponse,
} from "../models/currency-prices-response.js";
import {
  errorArrayMapResponse1Schema,
  type ErrorArrayMapResponse1,
} from "../models/error-array-map-response1.js";
import { errorListResponse1Schema, type ErrorListResponse1 } from "../models/error-list-response1.js";
import {
  listPricePointsFilterSchema,
  type ListPricePointsFilter,
} from "../models/list-price-points-filter.js";
import {
  listProductPricePointsResponseSchema,
  type ListProductPricePointsResponse,
} from "../models/list-product-price-points-response.js";
import {
  listProductsPricePointsIncludeSchema,
  type ListProductsPricePointsInclude,
} from "../models/list-products-price-points-include.js";
import { pricePointTypeSchema, type PricePointType } from "../models/price-point-type.js";
import {
  productPricePointErrorResponse1Schema,
  type ProductPricePointErrorResponse1,
} from "../models/product-price-point-error-response1.js";
import {
  productPricePointResponseSchema,
  type ProductPricePointResponse,
} from "../models/product-price-point-response.js";
import { productResponseSchema, type ProductResponse } from "../models/product-response.js";
import { sortingDirectionSchema, type SortingDirection } from "../models/sorting-direction.js";
import { pricePointIdModelSchema, type PricePointIdModel } from "../models/unions/price-point-id-model.js";
import { productIdModelSchema, type ProductIdModel } from "../models/unions/product-id-model.js";
import {
  updateCurrencyPricesRequestSchema,
  type UpdateCurrencyPricesRequest,
} from "../models/update-currency-prices-request.js";
import {
  updateProductPricePointRequestSchema,
  type UpdateProductPricePointRequest,
} from "../models/update-product-price-point-request.js";
import type { Servers } from "../servers.js";

export class ProductPricePoints {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  archiveProductPricePoint(
    request: ProductPricePoints.ArchiveProductPricePointRequest,
    options?: RequestOptions,
  ): ApiPromise<ProductPricePointResponse, ProductPricePoints.ArchiveProductPricePointError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.production("/products/{product_id}/price_points/{price_point_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "product_id", value: request.productId, schema: productIdModelSchema },
          { name: "price_point_id", value: request.pricePointId, schema: pricePointIdModelSchema },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: productPricePointResponseSchema },
        errorFactory: ProductPricePoints.ArchiveProductPricePointError,
      },
      options,
    );
  }

  bulkCreateProductPricePoints(
    request: ProductPricePoints.BulkCreateProductPricePointsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkCreateProductPricePointsResponse, ProductPricePoints.BulkCreateProductPricePointsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/products/{product_id}/price_points/bulk.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "product_id", value: request.productId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => bulkCreateProductPricePointsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: bulkCreateProductPricePointsResponseSchema },
        errorFactory: ProductPricePoints.BulkCreateProductPricePointsError,
      },
      options,
    );
  }

  createProductCurrencyPrices(
    request: ProductPricePoints.CreateProductCurrencyPricesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CurrencyPricesResponse, ProductPricePoints.CreateProductCurrencyPricesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/product_price_points/{product_price_point_id}/currency_prices.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "product_price_point_id", value: request.productPricePointId, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createProductCurrencyPricesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: currencyPricesResponseSchema },
        errorFactory: ProductPricePoints.CreateProductCurrencyPricesError,
      },
      options,
    );
  }

  createProductPricePoint(
    request: ProductPricePoints.CreateProductPricePointRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProductPricePointResponse, ProductPricePoints.CreateProductPricePointError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/products/{product_id}/price_points.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "product_id", value: request.productId, schema: productIdModelSchema }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createProductPricePointRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: productPricePointResponseSchema },
        errorFactory: ProductPricePoints.CreateProductPricePointError,
      },
      options,
    );
  }

  listAllProductPricePoints(
    request: ProductPricePoints.ListAllProductPricePointsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListProductPricePointsResponse, ProductPricePoints.ListAllProductPricePointsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.production("/products_price_points.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [
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
          {
            name: "include",
            value: request.include,
            schema: s.optional(s.lazy(() => listProductsPricePointsIncludeSchema)),
          },
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 20) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listProductPricePointsResponseSchema },
        errorFactory: ProductPricePoints.ListAllProductPricePointsError,
      },
      options,
    );
  }

  listProductPricePoints(
    request: ProductPricePoints.ListProductPricePointsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListProductPricePointsResponse, ResponseError> {
    return this.#rawClient.execute<ListProductPricePointsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/products/{product_id}/price_points.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "product_id", value: request.productId, schema: productIdModelSchema }],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 10) },
          { name: "currency_prices", value: request.currencyPrices, schema: s.optional(s.boolean()) },
          {
            name: "filter[type]",
            value: request.filterType,
            schema: s.optional(s.array(s.lazy(() => pricePointTypeSchema))),
          },
          { name: "archived", value: request.archived, schema: s.optional(s.boolean()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listProductPricePointsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  promoteProductPricePointToDefault(
    request: ProductPricePoints.PromoteProductPricePointToDefaultRequest,
    options?: RequestOptions,
  ): ApiPromise<ProductResponse, ResponseError> {
    return this.#rawClient.execute<ProductResponse, ResponseError>(
      {
        method: "PATCH",
        url: this.#servers.production("/products/{product_id}/price_points/{price_point_id}/default.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "product_id", value: request.productId, schema: s.number() },
          { name: "price_point_id", value: request.pricePointId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: productResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  readProductPricePoint(
    request: ProductPricePoints.ReadProductPricePointRequest,
    options?: RequestOptions,
  ): ApiPromise<ProductPricePointResponse, ResponseError> {
    return this.#rawClient.execute<ProductPricePointResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/products/{product_id}/price_points/{price_point_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "product_id", value: request.productId, schema: productIdModelSchema },
          { name: "price_point_id", value: request.pricePointId, schema: pricePointIdModelSchema },
        ],
        query: [{ name: "currency_prices", value: request.currencyPrices, schema: s.optional(s.boolean()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: productPricePointResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  unarchiveProductPricePoint(
    request: ProductPricePoints.UnarchiveProductPricePointRequest,
    options?: RequestOptions,
  ): ApiPromise<ProductPricePointResponse, ResponseError> {
    return this.#rawClient.execute<ProductPricePointResponse, ResponseError>(
      {
        method: "PATCH",
        url: this.#servers.production("/products/{product_id}/price_points/{price_point_id}/unarchive.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "product_id", value: request.productId, schema: s.number() },
          { name: "price_point_id", value: request.pricePointId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: productPricePointResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateProductCurrencyPrices(
    request: ProductPricePoints.UpdateProductCurrencyPricesRequest,
    options?: RequestOptions,
  ): ApiPromise<CurrencyPricesResponse, ProductPricePoints.UpdateProductCurrencyPricesError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production("/product_price_points/{product_price_point_id}/currency_prices.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "product_price_point_id", value: request.productPricePointId, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateCurrencyPricesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: currencyPricesResponseSchema },
        errorFactory: ProductPricePoints.UpdateProductCurrencyPricesError,
      },
      options,
    );
  }

  updateProductPricePoint(
    request: ProductPricePoints.UpdateProductPricePointRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProductPricePointResponse, ResponseError> {
    return this.#rawClient.execute<ProductPricePointResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.production("/products/{product_id}/price_points/{price_point_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "product_id", value: request.productId, schema: productIdModelSchema },
          { name: "price_point_id", value: request.pricePointId, schema: pricePointIdModelSchema },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateProductPricePointRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: productPricePointResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace ProductPricePoints {
  export type ArchiveProductPricePointRequest = {
    productId: ProductIdModel;
    pricePointId: PricePointIdModel;
  };

  export class ArchiveProductPricePointError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<ArchiveProductPricePointError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type BulkCreateProductPricePointsRequestParams = {
    productId: number;
    body?: BulkCreateProductPricePointsRequest;
  };

  export class BulkCreateProductPricePointsError extends ResponseError<
    Declared<"error422", Record<string, unknown>>
  > {
    static readonly errors: ErrorDecoders<BulkCreateProductPricePointsError> = [
      { on: 422, kind: "error422", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
    ];
  }

  export type CreateProductCurrencyPricesRequestParams = {
    productPricePointId: number;
    body?: CreateProductCurrencyPricesRequest;
  };

  export class CreateProductCurrencyPricesError extends ResponseError<
    Declared<"errorArrayMapResponse1", ErrorArrayMapResponse1>
  > {
    static readonly errors: ErrorDecoders<CreateProductCurrencyPricesError> = [
      {
        on: 422,
        kind: "errorArrayMapResponse1",
        decode: { kind: "json", schema: errorArrayMapResponse1Schema },
      },
    ];
  }

  export type CreateProductPricePointRequestParams = {
    productId: ProductIdModel;
    body?: CreateProductPricePointRequest;
  };

  export class CreateProductPricePointError extends ResponseError<
    Declared<"productPricePointErrorResponse1", ProductPricePointErrorResponse1>
  > {
    static readonly errors: ErrorDecoders<CreateProductPricePointError> = [
      {
        on: 422,
        kind: "productPricePointErrorResponse1",
        decode: { kind: "json", schema: productPricePointErrorResponse1Schema },
      },
    ];
  }

  export type ListAllProductPricePointsRequest = {
    direction?: SortingDirection;
    filter?: ListPricePointsFilter;
    include?: ListProductsPricePointsInclude;
    page?: number;
    perPage?: number;
  };

  export class ListAllProductPricePointsError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<ListAllProductPricePointsError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type ListProductPricePointsRequest = {
    productId: ProductIdModel;
    page?: number;
    perPage?: number;
    currencyPrices?: boolean;
    filterType?: PricePointType[];
    archived?: boolean;
  };

  export type PromoteProductPricePointToDefaultRequest = {
    productId: number;
    pricePointId: number;
  };

  export type ReadProductPricePointRequest = {
    productId: ProductIdModel;
    pricePointId: PricePointIdModel;
    currencyPrices?: boolean;
  };

  export type UnarchiveProductPricePointRequest = {
    productId: number;
    pricePointId: number;
  };

  export type UpdateProductCurrencyPricesRequest = {
    productPricePointId: number;
    body?: UpdateCurrencyPricesRequest;
  };

  export class UpdateProductCurrencyPricesError extends ResponseError<
    Declared<"errorArrayMapResponse1", ErrorArrayMapResponse1>
  > {
    static readonly errors: ErrorDecoders<UpdateProductCurrencyPricesError> = [
      {
        on: 422,
        kind: "errorArrayMapResponse1",
        decode: { kind: "json", schema: errorArrayMapResponse1Schema },
      },
    ];
  }

  export type UpdateProductPricePointRequestParams = {
    productId: ProductIdModel;
    pricePointId: PricePointIdModel;
    body?: UpdateProductPricePointRequest;
  };
}
