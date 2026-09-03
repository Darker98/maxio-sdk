import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { consolidatedInvoiceSchema, type ConsolidatedInvoice } from "../models/consolidated-invoice.js";
import {
  createInvoicePaymentRequestSchema,
  type CreateInvoicePaymentRequest,
} from "../models/create-invoice-payment-request.js";
import { createInvoiceRequestSchema, type CreateInvoiceRequest } from "../models/create-invoice-request.js";
import {
  createMultiInvoicePaymentRequestSchema,
  type CreateMultiInvoicePaymentRequest,
} from "../models/create-multi-invoice-payment-request.js";
import { creditNoteSchema, type CreditNote } from "../models/credit-note.js";
import {
  customerChangesPreviewResponseSchema,
  type CustomerChangesPreviewResponse,
} from "../models/customer-changes-preview-response.js";
import { Direction, directionSchema } from "../models/direction.js";
import {
  errorArrayMapResponse1Schema,
  type ErrorArrayMapResponse1,
} from "../models/error-array-map-response1.js";
import { errorListResponse1Schema, type ErrorListResponse1 } from "../models/error-list-response1.js";
import { InvoiceDateField, invoiceDateFieldSchema } from "../models/invoice-date-field.js";
import { invoiceEventTypeSchema, type InvoiceEventType } from "../models/invoice-event-type.js";
import { invoiceResponseSchema, type InvoiceResponse } from "../models/invoice-response.js";
import { InvoiceSortField, invoiceSortFieldSchema } from "../models/invoice-sort-field.js";
import { invoiceStatusSchema, type InvoiceStatus } from "../models/invoice-status.js";
import { invoiceSchema, type Invoice } from "../models/invoice.js";
import { issueInvoiceRequestSchema, type IssueInvoiceRequest } from "../models/issue-invoice-request.js";
import {
  listCreditNotesResponseSchema,
  type ListCreditNotesResponse,
} from "../models/list-credit-notes-response.js";
import {
  listInvoiceEventsResponseSchema,
  type ListInvoiceEventsResponse,
} from "../models/list-invoice-events-response.js";
import { listInvoicesResponseSchema, type ListInvoicesResponse } from "../models/list-invoices-response.js";
import {
  multiInvoicePaymentResponseSchema,
  type MultiInvoicePaymentResponse,
} from "../models/multi-invoice-payment-response.js";
import { recordPaymentRequestSchema, type RecordPaymentRequest } from "../models/record-payment-request.js";
import {
  recordPaymentResponseSchema,
  type RecordPaymentResponse,
} from "../models/record-payment-response.js";
import { refundInvoiceRequestSchema, type RefundInvoiceRequest } from "../models/refund-invoice-request.js";
import { sendInvoiceRequestSchema, type SendInvoiceRequest } from "../models/send-invoice-request.js";
import { updateInvoiceRequestSchema, type UpdateInvoiceRequest } from "../models/update-invoice-request.js";
import { voidInvoiceRequestSchema, type VoidInvoiceRequest } from "../models/void-invoice-request.js";
import type { Servers } from "../servers.js";

export class Invoices {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createInvoice(
    request: Invoices.CreateInvoiceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<InvoiceResponse, Invoices.CreateInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscriptions/{subscription_id}/invoices.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createInvoiceRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: invoiceResponseSchema },
        errorFactory: Invoices.CreateInvoiceError,
      },
      options,
    );
  }

  deleteInvoice(
    request: Invoices.DeleteInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Invoices.DeleteInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.production("/subscriptions/{subscription_id}/invoices/{uid}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "subscription_id", value: request.subscriptionId, schema: s.number() },
          { name: "uid", value: request.uid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Invoices.DeleteInvoiceError,
      },
      options,
    );
  }

  issueInvoice(
    request: Invoices.IssueInvoiceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Invoice, Invoices.IssueInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/invoices/{uid}/issue.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "uid", value: request.uid, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => issueInvoiceRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: invoiceSchema },
        errorFactory: Invoices.IssueInvoiceError,
      },
      options,
    );
  }

  listConsolidatedInvoiceSegments(
    request: Invoices.ListConsolidatedInvoiceSegmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<ConsolidatedInvoice, ResponseError> {
    return this.#rawClient.execute<ConsolidatedInvoice, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/invoices/{invoice_uid}/segments.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "invoice_uid", value: request.invoiceUid, schema: s.string() }],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 20) },
          {
            name: "direction",
            value: request.direction,
            schema: s.defaulted(directionSchema, Direction.Asc),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: consolidatedInvoiceSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listCreditNotes(
    request: Invoices.ListCreditNotesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCreditNotesResponse, ResponseError> {
    return this.#rawClient.execute<ListCreditNotesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/credit_notes.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [
          { name: "subscription_id", value: request.subscriptionId, schema: s.optional(s.number()) },
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 20) },
          { name: "line_items", value: request.lineItems, schema: s.defaulted(s.boolean(), false) },
          { name: "discounts", value: request.discounts, schema: s.defaulted(s.boolean(), false) },
          { name: "taxes", value: request.taxes, schema: s.defaulted(s.boolean(), false) },
          { name: "refunds", value: request.refunds, schema: s.defaulted(s.boolean(), false) },
          { name: "applications", value: request.applications, schema: s.defaulted(s.boolean(), false) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCreditNotesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listInvoiceEvents(
    request: Invoices.ListInvoiceEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInvoiceEventsResponse, ResponseError> {
    return this.#rawClient.execute<ListInvoiceEventsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/invoices/events.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [
          { name: "since_date", value: request.sinceDate, schema: s.optional(s.string()) },
          { name: "since_id", value: request.sinceId, schema: s.optional(s.number()) },
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 100) },
          { name: "invoice_uid", value: request.invoiceUid, schema: s.optional(s.string()) },
          {
            name: "with_change_invoice_status",
            value: request.withChangeInvoiceStatus,
            schema: s.optional(s.string()),
          },
          {
            name: "event_types",
            value: request.eventTypes,
            schema: s.optional(s.array(s.lazy(() => invoiceEventTypeSchema))),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInvoiceEventsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listInvoices(
    request: Invoices.ListInvoicesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInvoicesResponse, ResponseError> {
    return this.#rawClient.execute<ListInvoicesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/invoices.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [
          { name: "start_date", value: request.startDate, schema: s.optional(s.string()) },
          { name: "end_date", value: request.endDate, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => invoiceStatusSchema)) },
          { name: "subscription_id", value: request.subscriptionId, schema: s.optional(s.number()) },
          {
            name: "subscription_group_uid",
            value: request.subscriptionGroupUid,
            schema: s.optional(s.string()),
          },
          { name: "consolidation_level", value: request.consolidationLevel, schema: s.optional(s.string()) },
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
          { name: "refunds", value: request.refunds, schema: s.defaulted(s.boolean(), false) },
          {
            name: "date_field",
            value: request.dateField,
            schema: s.defaulted(invoiceDateFieldSchema, InvoiceDateField.DueDate),
          },
          { name: "start_datetime", value: request.startDatetime, schema: s.optional(s.string()) },
          { name: "end_datetime", value: request.endDatetime, schema: s.optional(s.string()) },
          { name: "customer_ids", value: request.customerIds, schema: s.optional(s.array(s.number())) },
          { name: "number", value: request.number, schema: s.optional(s.array(s.string())) },
          { name: "product_ids", value: request.productIds, schema: s.optional(s.array(s.number())) },
          {
            name: "sort",
            value: request.sort,
            schema: s.defaulted(invoiceSortFieldSchema, InvoiceSortField.Number),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInvoicesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  previewCustomerInformationChanges(
    request: Invoices.PreviewCustomerInformationChangesRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerChangesPreviewResponse, Invoices.PreviewCustomerInformationChangesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/invoices/{uid}/customer_information/preview.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "uid", value: request.uid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customerChangesPreviewResponseSchema },
        errorFactory: Invoices.PreviewCustomerInformationChangesError,
      },
      options,
    );
  }

  readCreditNote(
    request: Invoices.ReadCreditNoteRequest,
    options?: RequestOptions,
  ): ApiPromise<CreditNote, ResponseError> {
    return this.#rawClient.execute<CreditNote, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/credit_notes/{uid}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "uid", value: request.uid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: creditNoteSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  readInvoice(
    request: Invoices.ReadInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<Invoice, ResponseError> {
    return this.#rawClient.execute<Invoice, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/invoices/{uid}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "uid", value: request.uid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: invoiceSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  recordPaymentForInvoice(
    request: Invoices.RecordPaymentForInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<Invoice, Invoices.RecordPaymentForInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/invoices/{uid}/payments.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "uid", value: request.uid, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createInvoicePaymentRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: invoiceSchema },
        errorFactory: Invoices.RecordPaymentForInvoiceError,
      },
      options,
    );
  }

  recordPaymentForMultipleInvoices(
    request: Invoices.RecordPaymentForMultipleInvoicesRequest,
    options?: RequestOptions,
  ): ApiPromise<MultiInvoicePaymentResponse, Invoices.RecordPaymentForMultipleInvoicesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/invoices/payments.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createMultiInvoicePaymentRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: multiInvoicePaymentResponseSchema },
        errorFactory: Invoices.RecordPaymentForMultipleInvoicesError,
      },
      options,
    );
  }

  recordPaymentForSubscription(
    request: Invoices.RecordPaymentForSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<RecordPaymentResponse, Invoices.RecordPaymentForSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscriptions/{subscription_id}/payments.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => recordPaymentRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: recordPaymentResponseSchema },
        errorFactory: Invoices.RecordPaymentForSubscriptionError,
      },
      options,
    );
  }

  refundInvoice(
    request: Invoices.RefundInvoiceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Invoice, Invoices.RefundInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/invoices/{uid}/refunds.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "uid", value: request.uid, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => refundInvoiceRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: invoiceSchema },
        errorFactory: Invoices.RefundInvoiceError,
      },
      options,
    );
  }

  reopenInvoice(
    request: Invoices.ReopenInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<Invoice, Invoices.ReopenInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/invoices/{uid}/reopen.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "uid", value: request.uid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: invoiceSchema },
        errorFactory: Invoices.ReopenInvoiceError,
      },
      options,
    );
  }

  sendInvoice(
    request: Invoices.SendInvoiceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Invoices.SendInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/invoices/{uid}/deliveries.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "uid", value: request.uid, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => sendInvoiceRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Invoices.SendInvoiceError,
      },
      options,
    );
  }

  updateCustomerInformation(
    request: Invoices.UpdateCustomerInformationRequest,
    options?: RequestOptions,
  ): ApiPromise<Invoice, Invoices.UpdateCustomerInformationError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production("/invoices/{uid}/customer_information.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "uid", value: request.uid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: invoiceSchema },
        errorFactory: Invoices.UpdateCustomerInformationError,
      },
      options,
    );
  }

  updateInvoice(
    request: Invoices.UpdateInvoiceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<InvoiceResponse, Invoices.UpdateInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production("/subscriptions/{subscription_id}/invoices/{uid}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "subscription_id", value: request.subscriptionId, schema: s.number() },
          { name: "uid", value: request.uid, schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateInvoiceRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: invoiceResponseSchema },
        errorFactory: Invoices.UpdateInvoiceError,
      },
      options,
    );
  }

  voidInvoice(
    request: Invoices.VoidInvoiceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Invoice, Invoices.VoidInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/invoices/{uid}/void.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "uid", value: request.uid, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => voidInvoiceRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: invoiceSchema },
        errorFactory: Invoices.VoidInvoiceError,
      },
      options,
    );
  }
}

export namespace Invoices {
  export type CreateInvoiceRequestParams = {
    subscriptionId: number;
    body?: CreateInvoiceRequest;
  };

  export class CreateInvoiceError extends ResponseError<
    Declared<"errorArrayMapResponse1", ErrorArrayMapResponse1>
  > {
    static readonly errors: ErrorDecoders<CreateInvoiceError> = [
      {
        on: 422,
        kind: "errorArrayMapResponse1",
        decode: { kind: "json", schema: errorArrayMapResponse1Schema },
      },
    ];
  }

  export type DeleteInvoiceRequest = {
    subscriptionId: number;
    uid: string;
  };

  export class DeleteInvoiceError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1> | Declared<"errorListResponse12", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<DeleteInvoiceError> = [
      { on: 404, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
      { on: 422, kind: "errorListResponse12", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type IssueInvoiceRequestParams = {
    uid: string;
    body?: IssueInvoiceRequest;
  };

  export class IssueInvoiceError extends ResponseError<
    Declared<"error404", undefined> | Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<IssueInvoiceError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type ListConsolidatedInvoiceSegmentsRequest = {
    invoiceUid: string;
    page?: number;
    perPage?: number;
    direction?: Direction;
  };

  export type ListCreditNotesRequest = {
    subscriptionId?: number;
    page?: number;
    perPage?: number;
    lineItems?: boolean;
    discounts?: boolean;
    taxes?: boolean;
    refunds?: boolean;
    applications?: boolean;
  };

  export type ListInvoiceEventsRequest = {
    sinceDate?: string;
    sinceId?: number;
    page?: number;
    perPage?: number;
    invoiceUid?: string;
    withChangeInvoiceStatus?: string;
    eventTypes?: InvoiceEventType[];
  };

  export type ListInvoicesRequest = {
    startDate?: string;
    endDate?: string;
    status?: InvoiceStatus;
    subscriptionId?: number;
    subscriptionGroupUid?: string;
    consolidationLevel?: string;
    page?: number;
    perPage?: number;
    direction?: Direction;
    lineItems?: boolean;
    discounts?: boolean;
    taxes?: boolean;
    credits?: boolean;
    payments?: boolean;
    customFields?: boolean;
    refunds?: boolean;
    dateField?: InvoiceDateField;
    startDatetime?: string;
    endDatetime?: string;
    customerIds?: number[];
    number?: string[];
    productIds?: number[];
    sort?: InvoiceSortField;
  };

  export type PreviewCustomerInformationChangesRequest = {
    uid: string;
  };

  export class PreviewCustomerInformationChangesError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1> | Declared<"errorListResponse12", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<PreviewCustomerInformationChangesError> = [
      { on: 404, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
      { on: 422, kind: "errorListResponse12", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type ReadCreditNoteRequest = {
    uid: string;
  };

  export type ReadInvoiceRequest = {
    uid: string;
  };

  export type RecordPaymentForInvoiceRequest = {
    uid: string;
    body?: CreateInvoicePaymentRequest;
  };

  export class RecordPaymentForInvoiceError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<RecordPaymentForInvoiceError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type RecordPaymentForMultipleInvoicesRequest = {
    body?: CreateMultiInvoicePaymentRequest;
  };

  export class RecordPaymentForMultipleInvoicesError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<RecordPaymentForMultipleInvoicesError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type RecordPaymentForSubscriptionRequest = {
    subscriptionId: number;
    body?: RecordPaymentRequest;
  };

  export class RecordPaymentForSubscriptionError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<RecordPaymentForSubscriptionError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type RefundInvoiceRequestParams = {
    uid: string;
    body?: RefundInvoiceRequest;
  };

  export class RefundInvoiceError extends ResponseError<Declared<"errorListResponse1", ErrorListResponse1>> {
    static readonly errors: ErrorDecoders<RefundInvoiceError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type ReopenInvoiceRequest = {
    uid: string;
  };

  export class ReopenInvoiceError extends ResponseError<
    Declared<"error404", unknown> | Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<ReopenInvoiceError> = [
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.unknown() } },
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type SendInvoiceRequestParams = {
    uid: string;
    body?: SendInvoiceRequest;
  };

  export class SendInvoiceError extends ResponseError<Declared<"errorListResponse1", ErrorListResponse1>> {
    static readonly errors: ErrorDecoders<SendInvoiceError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type UpdateCustomerInformationRequest = {
    uid: string;
  };

  export class UpdateCustomerInformationError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1> | Declared<"errorListResponse12", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<UpdateCustomerInformationError> = [
      { on: 404, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
      { on: 422, kind: "errorListResponse12", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type UpdateInvoiceRequestParams = {
    subscriptionId: number;
    uid: string;
    body?: UpdateInvoiceRequest;
  };

  export class UpdateInvoiceError extends ResponseError<
    | Declared<"errorListResponse1", ErrorListResponse1>
    | Declared<"errorArrayMapResponse1", ErrorArrayMapResponse1>
  > {
    static readonly errors: ErrorDecoders<UpdateInvoiceError> = [
      { on: 404, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
      {
        on: 422,
        kind: "errorArrayMapResponse1",
        decode: { kind: "json", schema: errorArrayMapResponse1Schema },
      },
    ];
  }

  export type VoidInvoiceRequestParams = {
    uid: string;
    body?: VoidInvoiceRequest;
  };

  export class VoidInvoiceError extends ResponseError<
    Declared<"error404", unknown> | Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<VoidInvoiceError> = [
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.unknown() } },
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }
}
