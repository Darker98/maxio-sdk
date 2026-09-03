import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  createSignupProformaPreviewIncludeSchema,
  type CreateSignupProformaPreviewInclude,
} from "../models/create-signup-proforma-preview-include.js";
import {
  createSubscriptionRequestSchema,
  type CreateSubscriptionRequest,
} from "../models/create-subscription-request.js";
import {
  deliverProformaInvoiceRequestSchema,
  type DeliverProformaInvoiceRequest,
} from "../models/deliver-proforma-invoice-request.js";
import { Direction, directionSchema } from "../models/direction.js";
import {
  errorArrayMapResponse1Schema,
  type ErrorArrayMapResponse1,
} from "../models/error-array-map-response1.js";
import { errorListResponse1Schema, type ErrorListResponse1 } from "../models/error-list-response1.js";
import {
  listProformaInvoicesResponseSchema,
  type ListProformaInvoicesResponse,
} from "../models/list-proforma-invoices-response.js";
import {
  proformaBadRequestErrorResponse1Schema,
  type ProformaBadRequestErrorResponse1,
} from "../models/proforma-bad-request-error-response1.js";
import {
  proformaInvoiceStatusSchema,
  type ProformaInvoiceStatus,
} from "../models/proforma-invoice-status.js";
import { proformaInvoiceSchema, type ProformaInvoice } from "../models/proforma-invoice.js";
import {
  signupProformaPreviewResponseSchema,
  type SignupProformaPreviewResponse,
} from "../models/signup-proforma-preview-response.js";
import { voidInvoiceRequestSchema, type VoidInvoiceRequest } from "../models/void-invoice-request.js";
import type { Servers } from "../servers.js";

export class ProformaInvoices {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createConsolidatedProformaInvoice(
    request: ProformaInvoices.CreateConsolidatedProformaInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ProformaInvoices.CreateConsolidatedProformaInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscription_groups/{uid}/proforma_invoices.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "uid", value: request.uid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ProformaInvoices.CreateConsolidatedProformaInvoiceError,
      },
      options,
    );
  }

  createProformaInvoice(
    request: ProformaInvoices.CreateProformaInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<ProformaInvoice, ProformaInvoices.CreateProformaInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscriptions/{subscription_id}/proforma_invoices.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: proformaInvoiceSchema },
        errorFactory: ProformaInvoices.CreateProformaInvoiceError,
      },
      options,
    );
  }

  createSignupProformaInvoice(
    request: ProformaInvoices.CreateSignupProformaInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<ProformaInvoice, ProformaInvoices.CreateSignupProformaInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscriptions/proforma_invoices.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createSubscriptionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: proformaInvoiceSchema },
        errorFactory: ProformaInvoices.CreateSignupProformaInvoiceError,
      },
      options,
    );
  }

  deliverProformaInvoice(
    request: ProformaInvoices.DeliverProformaInvoiceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProformaInvoice, ProformaInvoices.DeliverProformaInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/proforma_invoices/{proforma_invoice_uid}/deliveries.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "proforma_invoice_uid", value: request.proformaInvoiceUid, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deliverProformaInvoiceRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: proformaInvoiceSchema },
        errorFactory: ProformaInvoices.DeliverProformaInvoiceError,
      },
      options,
    );
  }

  listProformaInvoices(
    request: ProformaInvoices.ListProformaInvoicesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListProformaInvoicesResponse, ResponseError> {
    return this.#rawClient.execute<ListProformaInvoicesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/subscriptions/{subscription_id}/proforma_invoices.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        query: [
          { name: "start_date", value: request.startDate, schema: s.optional(s.string()) },
          { name: "end_date", value: request.endDate, schema: s.optional(s.string()) },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => proformaInvoiceStatusSchema)),
          },
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 20) },
          {
            name: "direction",
            value: request.direction,
            schema: s.defaulted(directionSchema, Direction.Desc),
          },
          { name: "line_items", value: request.lineItems, schema: s.defaulted(s.boolean(), false) },
          { name: "discounts", value: request.discounts, schema: s.defaulted(s.boolean(), false) },
          { name: "taxes", value: request.taxes, schema: s.defaulted(s.boolean(), false) },
          { name: "credits", value: request.credits, schema: s.defaulted(s.boolean(), false) },
          { name: "payments", value: request.payments, schema: s.defaulted(s.boolean(), false) },
          { name: "custom_fields", value: request.customFields, schema: s.defaulted(s.boolean(), false) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listProformaInvoicesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listSubscriptionGroupProformaInvoices(
    request: ProformaInvoices.ListSubscriptionGroupProformaInvoicesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListProformaInvoicesResponse, ProformaInvoices.ListSubscriptionGroupProformaInvoicesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.production("/subscription_groups/{uid}/proforma_invoices.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "uid", value: request.uid, schema: s.string() }],
        query: [
          { name: "line_items", value: request.lineItems, schema: s.defaulted(s.boolean(), false) },
          { name: "discounts", value: request.discounts, schema: s.defaulted(s.boolean(), false) },
          { name: "taxes", value: request.taxes, schema: s.defaulted(s.boolean(), false) },
          { name: "credits", value: request.credits, schema: s.defaulted(s.boolean(), false) },
          { name: "payments", value: request.payments, schema: s.defaulted(s.boolean(), false) },
          { name: "custom_fields", value: request.customFields, schema: s.defaulted(s.boolean(), false) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listProformaInvoicesResponseSchema },
        errorFactory: ProformaInvoices.ListSubscriptionGroupProformaInvoicesError,
      },
      options,
    );
  }

  previewProformaInvoice(
    request: ProformaInvoices.PreviewProformaInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<ProformaInvoice, ProformaInvoices.PreviewProformaInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscriptions/{subscription_id}/proforma_invoices/preview.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: proformaInvoiceSchema },
        errorFactory: ProformaInvoices.PreviewProformaInvoiceError,
      },
      options,
    );
  }

  previewSignupProformaInvoice(
    request: ProformaInvoices.PreviewSignupProformaInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<SignupProformaPreviewResponse, ProformaInvoices.PreviewSignupProformaInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscriptions/proforma_invoices/preview.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [
          {
            name: "include",
            value: request.include,
            schema: s.optional(s.lazy(() => createSignupProformaPreviewIncludeSchema)),
          },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createSubscriptionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: signupProformaPreviewResponseSchema },
        errorFactory: ProformaInvoices.PreviewSignupProformaInvoiceError,
      },
      options,
    );
  }

  readProformaInvoice(
    request: ProformaInvoices.ReadProformaInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<ProformaInvoice, ProformaInvoices.ReadProformaInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.production("/proforma_invoices/{proforma_invoice_uid}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "proforma_invoice_uid", value: request.proformaInvoiceUid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: proformaInvoiceSchema },
        errorFactory: ProformaInvoices.ReadProformaInvoiceError,
      },
      options,
    );
  }

  voidProformaInvoice(
    request: ProformaInvoices.VoidProformaInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<ProformaInvoice, ProformaInvoices.VoidProformaInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/proforma_invoices/{proforma_invoice_uid}/void.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "proforma_invoice_uid", value: request.proformaInvoiceUid, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => voidInvoiceRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: proformaInvoiceSchema },
        errorFactory: ProformaInvoices.VoidProformaInvoiceError,
      },
      options,
    );
  }
}

export namespace ProformaInvoices {
  export type CreateConsolidatedProformaInvoiceRequest = {
    uid: string;
  };

  export class CreateConsolidatedProformaInvoiceError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<CreateConsolidatedProformaInvoiceError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type CreateProformaInvoiceRequest = {
    subscriptionId: number;
  };

  export class CreateProformaInvoiceError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<CreateProformaInvoiceError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type CreateSignupProformaInvoiceRequest = {
    body?: CreateSubscriptionRequest;
  };

  export class CreateSignupProformaInvoiceError extends ResponseError<
    | Declared<"proformaBadRequestErrorResponse1", ProformaBadRequestErrorResponse1>
    | Declared<"errorArrayMapResponse1", ErrorArrayMapResponse1>
  > {
    static readonly errors: ErrorDecoders<CreateSignupProformaInvoiceError> = [
      {
        on: 400,
        kind: "proformaBadRequestErrorResponse1",
        decode: { kind: "json", schema: proformaBadRequestErrorResponse1Schema },
      },
      {
        on: 422,
        kind: "errorArrayMapResponse1",
        decode: { kind: "json", schema: errorArrayMapResponse1Schema },
      },
    ];
  }

  export type DeliverProformaInvoiceRequestParams = {
    proformaInvoiceUid: string;
    body?: DeliverProformaInvoiceRequest;
  };

  export class DeliverProformaInvoiceError extends ResponseError<
    Declared<"error404", undefined> | Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<DeliverProformaInvoiceError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type ListProformaInvoicesRequest = {
    subscriptionId: number;
    startDate?: string;
    endDate?: string;
    status?: ProformaInvoiceStatus;
    page?: number;
    perPage?: number;
    direction?: Direction;
    lineItems?: boolean;
    discounts?: boolean;
    taxes?: boolean;
    credits?: boolean;
    payments?: boolean;
    customFields?: boolean;
  };

  export type ListSubscriptionGroupProformaInvoicesRequest = {
    uid: string;
    lineItems?: boolean;
    discounts?: boolean;
    taxes?: boolean;
    credits?: boolean;
    payments?: boolean;
    customFields?: boolean;
  };

  export class ListSubscriptionGroupProformaInvoicesError extends ResponseError<
    Declared<"error404", undefined>
  > {
    static readonly errors: ErrorDecoders<ListSubscriptionGroupProformaInvoicesError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type PreviewProformaInvoiceRequest = {
    subscriptionId: number;
  };

  export class PreviewProformaInvoiceError extends ResponseError<
    Declared<"error404", undefined> | Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<PreviewProformaInvoiceError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type PreviewSignupProformaInvoiceRequest = {
    include?: CreateSignupProformaPreviewInclude;
    body?: CreateSubscriptionRequest;
  };

  export class PreviewSignupProformaInvoiceError extends ResponseError<
    | Declared<"proformaBadRequestErrorResponse1", ProformaBadRequestErrorResponse1>
    | Declared<"errorArrayMapResponse1", ErrorArrayMapResponse1>
  > {
    static readonly errors: ErrorDecoders<PreviewSignupProformaInvoiceError> = [
      {
        on: 400,
        kind: "proformaBadRequestErrorResponse1",
        decode: { kind: "json", schema: proformaBadRequestErrorResponse1Schema },
      },
      {
        on: 422,
        kind: "errorArrayMapResponse1",
        decode: { kind: "json", schema: errorArrayMapResponse1Schema },
      },
    ];
  }

  export type ReadProformaInvoiceRequest = {
    proformaInvoiceUid: string;
  };

  export class ReadProformaInvoiceError extends ResponseError<Declared<"error404", undefined>> {
    static readonly errors: ErrorDecoders<ReadProformaInvoiceError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type VoidProformaInvoiceRequest = {
    proformaInvoiceUid: string;
    body?: VoidInvoiceRequest;
  };

  export class VoidProformaInvoiceError extends ResponseError<
    Declared<"error404", undefined> | Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<VoidProformaInvoiceError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }
}
