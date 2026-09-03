import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { basicDateFieldSchema, type BasicDateField } from "../models/basic-date-field.js";
import {
  createOrUpdateProductRequestSchema,
  type CreateOrUpdateProductRequest,
} from "../models/create-or-update-product-request.js";
import { errorListResponse1Schema, type ErrorListResponse1 } from "../models/error-list-response1.js";
import { listProductsFilterSchema, type ListProductsFilter } from "../models/list-products-filter.js";
import { listProductsIncludeSchema, type ListProductsInclude } from "../models/list-products-include.js";
import { productResponseSchema, type ProductResponse } from "../models/product-response.js";
import type { Servers } from "../servers.js";

export class Products {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  archiveProduct(
    request: Products.ArchiveProductRequest,
    options?: RequestOptions,
  ): ApiPromise<ProductResponse, Products.ArchiveProductError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.production("/products/{product_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "product_id", value: request.productId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: productResponseSchema },
        errorFactory: Products.ArchiveProductError,
      },
      options,
    );
  }

  createProduct(
    request: Products.CreateProductRequest,
    options?: RequestOptions,
  ): ApiPromise<ProductResponse, Products.CreateProductError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/product_families/{product_family_id}/products.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "product_family_id", value: request.productFamilyId, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createOrUpdateProductRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: productResponseSchema },
        errorFactory: Products.CreateProductError,
      },
      options,
    );
  }

  listProducts(
    request: Products.ListProductsRequest,
    options?: RequestOptions,
  ): ApiPromise<ProductResponse[], ResponseError> {
    return this.#rawClient.execute<ProductResponse[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/products.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [
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
          { name: "end_date", value: request.endDate, schema: s.optional(s.dateOnly()) },
          { name: "end_datetime", value: request.endDatetime, schema: s.optional(s.dateTime()) },
          { name: "start_date", value: request.startDate, schema: s.optional(s.dateOnly()) },
          { name: "start_datetime", value: request.startDatetime, schema: s.optional(s.dateTime()) },
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 20) },
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  readProduct(
    request: Products.ReadProductRequest,
    options?: RequestOptions,
  ): ApiPromise<ProductResponse, ResponseError> {
    return this.#rawClient.execute<ProductResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/products/{product_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "product_id", value: request.productId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: productResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  readProductByHandle(
    request: Products.ReadProductByHandleRequest,
    options?: RequestOptions,
  ): ApiPromise<ProductResponse, ResponseError> {
    return this.#rawClient.execute<ProductResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/products/handle/{api_handle}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "api_handle", value: request.apiHandle, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: productResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateProduct(
    request: Products.UpdateProductRequest,
    options?: RequestOptions,
  ): ApiPromise<ProductResponse, Products.UpdateProductError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production("/products/{product_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "product_id", value: request.productId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createOrUpdateProductRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: productResponseSchema },
        errorFactory: Products.UpdateProductError,
      },
      options,
    );
  }
}

export namespace Products {
  export type ArchiveProductRequest = {
    productId: number;
  };

  export class ArchiveProductError extends ResponseError<Declared<"errorListResponse1", ErrorListResponse1>> {
    static readonly errors: ErrorDecoders<ArchiveProductError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type CreateProductRequest = {
    productFamilyId: string;
    body?: CreateOrUpdateProductRequest;
  };

  export class CreateProductError extends ResponseError<Declared<"errorListResponse1", ErrorListResponse1>> {
    static readonly errors: ErrorDecoders<CreateProductError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type ListProductsRequest = {
    dateField?: BasicDateField;
    filter?: ListProductsFilter;
    endDate?: string;
    endDatetime?: Date;
    startDate?: string;
    startDatetime?: Date;
    page?: number;
    perPage?: number;
    includeArchived?: boolean;
    include?: ListProductsInclude;
  };

  export type ReadProductRequest = {
    productId: number;
  };

  export type ReadProductByHandleRequest = {
    apiHandle: string;
  };

  export type UpdateProductRequest = {
    productId: number;
    body?: CreateOrUpdateProductRequest;
  };

  export class UpdateProductError extends ResponseError<Declared<"errorListResponse1", ErrorListResponse1>> {
    static readonly errors: ErrorDecoders<UpdateProductError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }
}
