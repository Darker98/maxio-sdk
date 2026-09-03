import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { batchJobResponseSchema, type BatchJobResponse } from "../models/batch-job-response.js";
import { invoiceSchema, type Invoice } from "../models/invoice.js";
import { proformaInvoiceSchema, type ProformaInvoice } from "../models/proforma-invoice.js";
import { singleErrorResponse1Schema, type SingleErrorResponse1 } from "../models/single-error-response1.js";
import { subscriptionSchema, type Subscription } from "../models/subscription.js";
import type { Servers } from "../servers.js";

export class ApiExports {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  exportInvoices(options?: RequestOptions): ApiPromise<BatchJobResponse, ApiExports.ExportInvoicesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/api_exports/invoices.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: batchJobResponseSchema },
        errorFactory: ApiExports.ExportInvoicesError,
      },
      options,
    );
  }

  exportProformaInvoices(
    options?: RequestOptions,
  ): ApiPromise<BatchJobResponse, ApiExports.ExportProformaInvoicesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/api_exports/proforma_invoices.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: batchJobResponseSchema },
        errorFactory: ApiExports.ExportProformaInvoicesError,
      },
      options,
    );
  }

  exportSubscriptions(
    options?: RequestOptions,
  ): ApiPromise<BatchJobResponse, ApiExports.ExportSubscriptionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/api_exports/subscriptions.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: batchJobResponseSchema },
        errorFactory: ApiExports.ExportSubscriptionsError,
      },
      options,
    );
  }

  listExportedInvoices(
    request: ApiExports.ListExportedInvoicesRequest,
    options?: RequestOptions,
  ): ApiPromise<Invoice[], ApiExports.ListExportedInvoicesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.production("/api_exports/invoices/{batch_id}/rows.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "batch_id", value: request.batchId, schema: s.string() }],
        query: [
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 100) },
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => invoiceSchema)) },
        errorFactory: ApiExports.ListExportedInvoicesError,
      },
      options,
    );
  }

  listExportedProformaInvoices(
    request: ApiExports.ListExportedProformaInvoicesRequest,
    options?: RequestOptions,
  ): ApiPromise<ProformaInvoice[], ApiExports.ListExportedProformaInvoicesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.production("/api_exports/proforma_invoices/{batch_id}/rows.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "batch_id", value: request.batchId, schema: s.string() }],
        query: [
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 100) },
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => proformaInvoiceSchema)) },
        errorFactory: ApiExports.ListExportedProformaInvoicesError,
      },
      options,
    );
  }

  listExportedSubscriptions(
    request: ApiExports.ListExportedSubscriptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<Subscription[], ApiExports.ListExportedSubscriptionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.production("/api_exports/subscriptions/{batch_id}/rows.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "batch_id", value: request.batchId, schema: s.string() }],
        query: [
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 100) },
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => subscriptionSchema)) },
        errorFactory: ApiExports.ListExportedSubscriptionsError,
      },
      options,
    );
  }

  readInvoicesExport(
    request: ApiExports.ReadInvoicesExportRequest,
    options?: RequestOptions,
  ): ApiPromise<BatchJobResponse, ApiExports.ReadInvoicesExportError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.production("/api_exports/invoices/{batch_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "batch_id", value: request.batchId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: batchJobResponseSchema },
        errorFactory: ApiExports.ReadInvoicesExportError,
      },
      options,
    );
  }

  readProformaInvoicesExport(
    request: ApiExports.ReadProformaInvoicesExportRequest,
    options?: RequestOptions,
  ): ApiPromise<BatchJobResponse, ApiExports.ReadProformaInvoicesExportError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.production("/api_exports/proforma_invoices/{batch_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "batch_id", value: request.batchId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: batchJobResponseSchema },
        errorFactory: ApiExports.ReadProformaInvoicesExportError,
      },
      options,
    );
  }

  readSubscriptionsExport(
    request: ApiExports.ReadSubscriptionsExportRequest,
    options?: RequestOptions,
  ): ApiPromise<BatchJobResponse, ApiExports.ReadSubscriptionsExportError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.production("/api_exports/subscriptions/{batch_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "batch_id", value: request.batchId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: batchJobResponseSchema },
        errorFactory: ApiExports.ReadSubscriptionsExportError,
      },
      options,
    );
  }
}

export namespace ApiExports {
  export class ExportInvoicesError extends ResponseError<
    Declared<"error404", undefined> | Declared<"singleErrorResponse1", SingleErrorResponse1>
  > {
    static readonly errors: ErrorDecoders<ExportInvoicesError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 409, kind: "singleErrorResponse1", decode: { kind: "json", schema: singleErrorResponse1Schema } },
    ];
  }

  export class ExportProformaInvoicesError extends ResponseError<
    Declared<"error404", undefined> | Declared<"singleErrorResponse1", SingleErrorResponse1>
  > {
    static readonly errors: ErrorDecoders<ExportProformaInvoicesError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 409, kind: "singleErrorResponse1", decode: { kind: "json", schema: singleErrorResponse1Schema } },
    ];
  }

  export class ExportSubscriptionsError extends ResponseError<
    Declared<"singleErrorResponse1", SingleErrorResponse1>
  > {
    static readonly errors: ErrorDecoders<ExportSubscriptionsError> = [
      { on: 409, kind: "singleErrorResponse1", decode: { kind: "json", schema: singleErrorResponse1Schema } },
    ];
  }

  export type ListExportedInvoicesRequest = {
    batchId: string;
    perPage?: number;
    page?: number;
  };

  export class ListExportedInvoicesError extends ResponseError<Declared<"error404", undefined>> {
    static readonly errors: ErrorDecoders<ListExportedInvoicesError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListExportedProformaInvoicesRequest = {
    batchId: string;
    perPage?: number;
    page?: number;
  };

  export class ListExportedProformaInvoicesError extends ResponseError<Declared<"error404", undefined>> {
    static readonly errors: ErrorDecoders<ListExportedProformaInvoicesError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListExportedSubscriptionsRequest = {
    batchId: string;
    perPage?: number;
    page?: number;
  };

  export class ListExportedSubscriptionsError extends ResponseError<Declared<"error404", undefined>> {
    static readonly errors: ErrorDecoders<ListExportedSubscriptionsError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ReadInvoicesExportRequest = {
    batchId: string;
  };

  export class ReadInvoicesExportError extends ResponseError<Declared<"error404", undefined>> {
    static readonly errors: ErrorDecoders<ReadInvoicesExportError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ReadProformaInvoicesExportRequest = {
    batchId: string;
  };

  export class ReadProformaInvoicesExportError extends ResponseError<Declared<"error404", undefined>> {
    static readonly errors: ErrorDecoders<ReadProformaInvoicesExportError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ReadSubscriptionsExportRequest = {
    batchId: string;
  };

  export class ReadSubscriptionsExportError extends ResponseError<Declared<"error404", undefined>> {
    static readonly errors: ErrorDecoders<ReadSubscriptionsExportError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
