import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { listSaleRepItemSchema, type ListSaleRepItem } from "../models/list-sale-rep-item.js";
import { saleRepSettingsSchema, type SaleRepSettings } from "../models/sale-rep-settings.js";
import { saleRepSchema, type SaleRep } from "../models/sale-rep.js";
import type { Servers } from "../servers.js";

export class SalesCommissions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  listSalesCommissionSettings(
    request: SalesCommissions.ListSalesCommissionSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<SaleRepSettings[], ResponseError> {
    return this.#rawClient.execute<SaleRepSettings[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/sellers/{seller_id}/sales_commission_settings.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "seller_id", value: request.sellerId, schema: s.string() }],
        query: [
          { name: "live_mode", value: request.liveMode, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 100) },
        ],
        headers: [
          {
            name: "Authorization",
            value: request.authorization,
            schema: s.defaulted(s.string(), "Bearer <<apiKey>>"),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => saleRepSettingsSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listSalesReps(
    request: SalesCommissions.ListSalesRepsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSaleRepItem[], ResponseError> {
    return this.#rawClient.execute<ListSaleRepItem[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/sellers/{seller_id}/sales_reps.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "seller_id", value: request.sellerId, schema: s.string() }],
        query: [
          { name: "live_mode", value: request.liveMode, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 100) },
        ],
        headers: [
          {
            name: "Authorization",
            value: request.authorization,
            schema: s.defaulted(s.string(), "Bearer <<apiKey>>"),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => listSaleRepItemSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  readSalesRep(
    request: SalesCommissions.ReadSalesRepRequest,
    options?: RequestOptions,
  ): ApiPromise<SaleRep, ResponseError> {
    return this.#rawClient.execute<SaleRep, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/sellers/{seller_id}/sales_reps/{sales_rep_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "seller_id", value: request.sellerId, schema: s.string() },
          { name: "sales_rep_id", value: request.salesRepId, schema: s.string() },
        ],
        query: [
          { name: "live_mode", value: request.liveMode, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 100) },
        ],
        headers: [
          {
            name: "Authorization",
            value: request.authorization,
            schema: s.defaulted(s.string(), "Bearer <<apiKey>>"),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: saleRepSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace SalesCommissions {
  export type ListSalesCommissionSettingsRequest = {
    sellerId: string;
    liveMode?: boolean;
    page?: number;
    perPage?: number;
    authorization?: string;
  };

  export type ListSalesRepsRequest = {
    sellerId: string;
    liveMode?: boolean;
    page?: number;
    perPage?: number;
    authorization?: string;
  };

  export type ReadSalesRepRequest = {
    sellerId: string;
    salesRepId: string;
    liveMode?: boolean;
    page?: number;
    perPage?: number;
    authorization?: string;
  };
}
