import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { errorListResponse1Schema, type ErrorListResponse1 } from "../models/error-list-response1.js";
import { invoiceSchema, type Invoice } from "../models/invoice.js";
import {
  issueAdvanceInvoiceRequestSchema,
  type IssueAdvanceInvoiceRequest,
} from "../models/issue-advance-invoice-request.js";
import { voidInvoiceRequestSchema, type VoidInvoiceRequest } from "../models/void-invoice-request.js";
import type { Servers } from "../servers.js";

export class AdvanceInvoice {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  issueAdvanceInvoice(
    request: AdvanceInvoice.IssueAdvanceInvoiceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Invoice, AdvanceInvoice.IssueAdvanceInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscriptions/{subscription_id}/advance_invoice/issue.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => issueAdvanceInvoiceRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: invoiceSchema },
        errorFactory: AdvanceInvoice.IssueAdvanceInvoiceError,
      },
      options,
    );
  }

  readAdvanceInvoice(
    request: AdvanceInvoice.ReadAdvanceInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<Invoice, AdvanceInvoice.ReadAdvanceInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.production("/subscriptions/{subscription_id}/advance_invoice.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: invoiceSchema },
        errorFactory: AdvanceInvoice.ReadAdvanceInvoiceError,
      },
      options,
    );
  }

  voidAdvanceInvoice(
    request: AdvanceInvoice.VoidAdvanceInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<Invoice, AdvanceInvoice.VoidAdvanceInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscriptions/{subscription_id}/advance_invoice/void.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => voidInvoiceRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: invoiceSchema },
        errorFactory: AdvanceInvoice.VoidAdvanceInvoiceError,
      },
      options,
    );
  }
}

export namespace AdvanceInvoice {
  export type IssueAdvanceInvoiceRequestParams = {
    subscriptionId: number;
    body?: IssueAdvanceInvoiceRequest;
  };

  export class IssueAdvanceInvoiceError extends ResponseError<
    Declared<"error404", undefined> | Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<IssueAdvanceInvoiceError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type ReadAdvanceInvoiceRequest = {
    subscriptionId: number;
  };

  export class ReadAdvanceInvoiceError extends ResponseError<Declared<"error404", undefined>> {
    static readonly errors: ErrorDecoders<ReadAdvanceInvoiceError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type VoidAdvanceInvoiceRequest = {
    subscriptionId: number;
    body?: VoidInvoiceRequest;
  };

  export class VoidAdvanceInvoiceError extends ResponseError<Declared<"error404", undefined>> {
    static readonly errors: ErrorDecoders<VoidAdvanceInvoiceError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
