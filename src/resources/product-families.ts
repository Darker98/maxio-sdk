import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { basicDateFieldSchema, type BasicDateField } from "../models/basic-date-field.js";
import {
  createProductFamilyRequestSchema,
  type CreateProductFamilyRequest,
} from "../models/create-product-family-request.js";
import { errorListResponse1Schema, type ErrorListResponse1 } from "../models/error-list-response1.js";
import { listProductsFilterSchema, type ListProductsFilter } from "../models/list-products-filter.js";
import { listProductsIncludeSchema, type ListProductsInclude } from "../models/list-products-include.js";
import {
  productFamilyResponseSchema,
  type ProductFamilyResponse,
} from "../models/product-family-response.js";
import { productResponseSchema, type ProductResponse } from "../models/product-response.js";
import type { Servers } from "../servers.js";

export class ProductFamilies {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createProductFamily(
    request: ProductFamilies.CreateProductFamilyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProductFamilyResponse, ProductFamilies.CreateProductFamilyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/product_families.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createProductFamilyRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: productFamilyResponseSchema },
        errorFactory: ProductFamilies.CreateProductFamilyError,
      },
      options,
    );
  }

  listProductFamilies(
    request: ProductFamilies.ListProductFamiliesRequest,
    options?: RequestOptions,
  ): ApiPromise<ProductFamilyResponse[], ResponseError> {
    return this.#rawClient.execute<ProductFamilyResponse[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/product_families.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [
          {
            name: "date_field",
            value: request.dateField,
            schema: s.optional(s.lazy(() => basicDateFieldSchema)),
          },
          { name: "start_date", value: request.startDate, schema: s.optional(s.dateOnly()) },
          { name: "end_date", value: request.endDate, schema: s.optional(s.dateOnly()) },
          { name: "start_datetime", value: request.startDatetime, schema: s.optional(s.dateTime()) },
          { name: "end_datetime", value: request.endDatetime, schema: s.optional(s.dateTime()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => productFamilyResponseSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listProductsForProductFamily(
    request: ProductFamilies.ListProductsForProductFamilyRequest,
    options?: RequestOptions,
  ): ApiPromise<ProductResponse[], ProductFamilies.ListProductsForProductFamilyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.production("/product_families/{product_family_id}/products.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "product_family_id", value: request.productFamilyId, schema: s.string() }],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 20) },
          {
            name: "date_field",
            value: request.dateField,
            schema: s.optional(s.lazy(() => basicDateFieldSchema)),
          },
          {
            name: "filter",
            value: request.filter,
            schema: s.optional(s.lazy(() => listProductsFilterSchema)),
          },
          { name: "start_date", value: request.startDate, schema: s.optional(s.dateOnly()) },
          { name: "end_date", value: request.endDate, schema: s.optional(s.dateOnly()) },
          { name: "start_datetime", value: request.startDatetime, schema: s.optional(s.dateTime()) },
          { name: "end_datetime", value: request.endDatetime, schema: s.optional(s.dateTime()) },
          { name: "include_archived", value: request.includeArchived, schema: s.optional(s.boolean()) },
          {
            name: "include",
            value: request.include,
            schema: s.optional(s.lazy(() => listProductsIncludeSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => productResponseSchema)) },
        errorFactory: ProductFamilies.ListProductsForProductFamilyError,
      },
      options,
    );
  }

  readProductFamily(
    request: ProductFamilies.ReadProductFamilyRequest,
    options?: RequestOptions,
  ): ApiPromise<ProductFamilyResponse, ResponseError> {
    return this.#rawClient.execute<ProductFamilyResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/product_families/{id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: productFamilyResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace ProductFamilies {
  export type CreateProductFamilyRequestParams = {
    body?: CreateProductFamilyRequest;
  };

  export class CreateProductFamilyError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<CreateProductFamilyError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type ListProductFamiliesRequest = {
    dateField?: BasicDateField;
    startDate?: string;
    endDate?: string;
    startDatetime?: Date;
    endDatetime?: Date;
  };

  export type ListProductsForProductFamilyRequest = {
    productFamilyId: string;
    page?: number;
    perPage?: number;
    dateField?: BasicDateField;
    filter?: ListProductsFilter;
    startDate?: string;
    endDate?: string;
    startDatetime?: Date;
    endDatetime?: Date;
    includeArchived?: boolean;
    include?: ListProductsInclude;
  };

  export class ListProductsForProductFamilyError extends ResponseError<Declared<"error404", string>> {
    static readonly errors: ErrorDecoders<ListProductsForProductFamilyError> = [
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type ReadProductFamilyRequest = {
    id: number;
  };
}
