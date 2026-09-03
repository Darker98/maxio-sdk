import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  couponCurrencyRequestSchema,
  type CouponCurrencyRequest,
} from "../models/coupon-currency-request.js";
import {
  couponCurrencyResponseSchema,
  type CouponCurrencyResponse,
} from "../models/coupon-currency-response.js";
import { couponRequestSchema, type CouponRequest } from "../models/coupon-request.js";
import { couponResponseSchema, type CouponResponse } from "../models/coupon-response.js";
import {
  couponSubcodesResponseSchema,
  type CouponSubcodesResponse,
} from "../models/coupon-subcodes-response.js";
import { couponSubcodesSchema, type CouponSubcodes } from "../models/coupon-subcodes.js";
import { couponUsageSchema, type CouponUsage } from "../models/coupon-usage.js";
import { errorListResponse1Schema, type ErrorListResponse1 } from "../models/error-list-response1.js";
import {
  errorStringMapResponse1Schema,
  type ErrorStringMapResponse1,
} from "../models/error-string-map-response1.js";
import { listCouponsFilterSchema, type ListCouponsFilter } from "../models/list-coupons-filter.js";
import {
  singleStringErrorResponse1Schema,
  type SingleStringErrorResponse1,
} from "../models/single-string-error-response1.js";
import type { Servers } from "../servers.js";

export class Coupons {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  archiveCoupon(
    request: Coupons.ArchiveCouponRequest,
    options?: RequestOptions,
  ): ApiPromise<CouponResponse, ResponseError> {
    return this.#rawClient.execute<CouponResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.production("/product_families/{product_family_id}/coupons/{coupon_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "product_family_id", value: request.productFamilyId, schema: s.number() },
          { name: "coupon_id", value: request.couponId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: couponResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createCoupon(
    request: Coupons.CreateCouponRequest,
    options?: RequestOptions,
  ): ApiPromise<CouponResponse, Coupons.CreateCouponError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/product_families/{product_family_id}/coupons.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "product_family_id", value: request.productFamilyId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => couponRequestSchema)) },
      },
      {
        success: { kind: "json", schema: couponResponseSchema },
        errorFactory: Coupons.CreateCouponError,
      },
      options,
    );
  }

  createCouponSubcodes(
    request: Coupons.CreateCouponSubcodesRequest,
    options?: RequestOptions,
  ): ApiPromise<CouponSubcodesResponse, ResponseError> {
    return this.#rawClient.execute<CouponSubcodesResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.production("/coupons/{coupon_id}/codes.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "coupon_id", value: request.couponId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => couponSubcodesSchema)) },
      },
      {
        success: { kind: "json", schema: couponSubcodesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createOrUpdateCouponCurrencyPrices(
    request: Coupons.CreateOrUpdateCouponCurrencyPricesRequest,
    options?: RequestOptions,
  ): ApiPromise<CouponCurrencyResponse, Coupons.CreateOrUpdateCouponCurrencyPricesError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production("/coupons/{coupon_id}/currency_prices.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "coupon_id", value: request.couponId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => couponCurrencyRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: couponCurrencyResponseSchema },
        errorFactory: Coupons.CreateOrUpdateCouponCurrencyPricesError,
      },
      options,
    );
  }

  deleteCouponSubcode(
    request: Coupons.DeleteCouponSubcodeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Coupons.DeleteCouponSubcodeError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.production("/coupons/{coupon_id}/codes/{subcode}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "coupon_id", value: request.couponId, schema: s.number() },
          { name: "subcode", value: request.subcode, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Coupons.DeleteCouponSubcodeError,
      },
      options,
    );
  }

  findCoupon(
    request: Coupons.FindCouponRequest,
    options?: RequestOptions,
  ): ApiPromise<CouponResponse, ResponseError> {
    return this.#rawClient.execute<CouponResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/coupons/find.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [
          { name: "product_family_id", value: request.productFamilyId, schema: s.optional(s.number()) },
          { name: "code", value: request.code, schema: s.optional(s.string()) },
          { name: "currency_prices", value: request.currencyPrices, schema: s.optional(s.boolean()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: couponResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listCouponSubcodes(
    request: Coupons.ListCouponSubcodesRequest,
    options?: RequestOptions,
  ): ApiPromise<CouponSubcodes, ResponseError> {
    return this.#rawClient.execute<CouponSubcodes, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/coupons/{coupon_id}/codes.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "coupon_id", value: request.couponId, schema: s.number() }],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 20) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: couponSubcodesSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listCoupons(
    request: Coupons.ListCouponsRequest,
    options?: RequestOptions,
  ): ApiPromise<CouponResponse[], ResponseError> {
    return this.#rawClient.execute<CouponResponse[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/coupons.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 30) },
          {
            name: "filter",
            value: request.filter,
            schema: s.optional(s.lazy(() => listCouponsFilterSchema)),
          },
          { name: "currency_prices", value: request.currencyPrices, schema: s.optional(s.boolean()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => couponResponseSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listCouponsForProductFamily(
    request: Coupons.ListCouponsForProductFamilyRequest,
    options?: RequestOptions,
  ): ApiPromise<CouponResponse[], ResponseError> {
    return this.#rawClient.execute<CouponResponse[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/product_families/{product_family_id}/coupons.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "product_family_id", value: request.productFamilyId, schema: s.number() }],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 30) },
          {
            name: "filter",
            value: request.filter,
            schema: s.optional(s.lazy(() => listCouponsFilterSchema)),
          },
          { name: "currency_prices", value: request.currencyPrices, schema: s.optional(s.boolean()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => couponResponseSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  readCoupon(
    request: Coupons.ReadCouponRequest,
    options?: RequestOptions,
  ): ApiPromise<CouponResponse, ResponseError> {
    return this.#rawClient.execute<CouponResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/product_families/{product_family_id}/coupons/{coupon_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "product_family_id", value: request.productFamilyId, schema: s.number() },
          { name: "coupon_id", value: request.couponId, schema: s.number() },
        ],
        query: [{ name: "currency_prices", value: request.currencyPrices, schema: s.optional(s.boolean()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: couponResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  readCouponUsage(
    request: Coupons.ReadCouponUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<CouponUsage[], ResponseError> {
    return this.#rawClient.execute<CouponUsage[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/product_families/{product_family_id}/coupons/{coupon_id}/usage.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "product_family_id", value: request.productFamilyId, schema: s.number() },
          { name: "coupon_id", value: request.couponId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => couponUsageSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateCoupon(
    request: Coupons.UpdateCouponRequest,
    options?: RequestOptions,
  ): ApiPromise<CouponResponse, Coupons.UpdateCouponError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production("/product_families/{product_family_id}/coupons/{coupon_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "product_family_id", value: request.productFamilyId, schema: s.number() },
          { name: "coupon_id", value: request.couponId, schema: s.number() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => couponRequestSchema)) },
      },
      {
        success: { kind: "json", schema: couponResponseSchema },
        errorFactory: Coupons.UpdateCouponError,
      },
      options,
    );
  }

  updateCouponSubcodes(
    request: Coupons.UpdateCouponSubcodesRequest,
    options?: RequestOptions,
  ): ApiPromise<CouponSubcodesResponse, ResponseError> {
    return this.#rawClient.execute<CouponSubcodesResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.production("/coupons/{coupon_id}/codes.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "coupon_id", value: request.couponId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => couponSubcodesSchema)) },
      },
      {
        success: { kind: "json", schema: couponSubcodesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  validateCoupon(
    request: Coupons.ValidateCouponRequest,
    options?: RequestOptions,
  ): ApiPromise<CouponResponse, Coupons.ValidateCouponError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.production("/coupons/validate.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [
          { name: "code", value: request.code, schema: s.string() },
          { name: "product_family_id", value: request.productFamilyId, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: couponResponseSchema },
        errorFactory: Coupons.ValidateCouponError,
      },
      options,
    );
  }
}

export namespace Coupons {
  export type ArchiveCouponRequest = {
    productFamilyId: number;
    couponId: number;
  };

  export type CreateCouponRequest = {
    productFamilyId: number;
    body?: CouponRequest;
  };

  export class CreateCouponError extends ResponseError<Declared<"errorListResponse1", ErrorListResponse1>> {
    static readonly errors: ErrorDecoders<CreateCouponError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type CreateCouponSubcodesRequest = {
    couponId: number;
    body?: CouponSubcodes;
  };

  export type CreateOrUpdateCouponCurrencyPricesRequest = {
    couponId: number;
    body?: CouponCurrencyRequest;
  };

  export class CreateOrUpdateCouponCurrencyPricesError extends ResponseError<
    Declared<"errorStringMapResponse1", ErrorStringMapResponse1>
  > {
    static readonly errors: ErrorDecoders<CreateOrUpdateCouponCurrencyPricesError> = [
      {
        on: 422,
        kind: "errorStringMapResponse1",
        decode: { kind: "json", schema: errorStringMapResponse1Schema },
      },
    ];
  }

  export type DeleteCouponSubcodeRequest = {
    couponId: number;
    subcode: string;
  };

  export class DeleteCouponSubcodeError extends ResponseError<Declared<"error404", undefined>> {
    static readonly errors: ErrorDecoders<DeleteCouponSubcodeError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type FindCouponRequest = {
    productFamilyId?: number;
    code?: string;
    currencyPrices?: boolean;
  };

  export type ListCouponSubcodesRequest = {
    couponId: number;
    page?: number;
    perPage?: number;
  };

  export type ListCouponsRequest = {
    page?: number;
    perPage?: number;
    filter?: ListCouponsFilter;
    currencyPrices?: boolean;
  };

  export type ListCouponsForProductFamilyRequest = {
    productFamilyId: number;
    page?: number;
    perPage?: number;
    filter?: ListCouponsFilter;
    currencyPrices?: boolean;
  };

  export type ReadCouponRequest = {
    productFamilyId: number;
    couponId: number;
    currencyPrices?: boolean;
  };

  export type ReadCouponUsageRequest = {
    productFamilyId: number;
    couponId: number;
  };

  export type UpdateCouponRequest = {
    productFamilyId: number;
    couponId: number;
    body?: CouponRequest;
  };

  export class UpdateCouponError extends ResponseError<Declared<"errorListResponse1", ErrorListResponse1>> {
    static readonly errors: ErrorDecoders<UpdateCouponError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type UpdateCouponSubcodesRequest = {
    couponId: number;
    body?: CouponSubcodes;
  };

  export type ValidateCouponRequest = {
    code: string;
    productFamilyId?: number;
  };

  export class ValidateCouponError extends ResponseError<
    Declared<"singleStringErrorResponse1", SingleStringErrorResponse1>
  > {
    static readonly errors: ErrorDecoders<ValidateCouponError> = [
      {
        on: 404,
        kind: "singleStringErrorResponse1",
        decode: { kind: "json", schema: singleStringErrorResponse1Schema },
      },
    ];
  }
}
