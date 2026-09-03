import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  deductServiceCreditRequestSchema,
  type DeductServiceCreditRequest,
} from "../models/deduct-service-credit-request.js";
import { errorListResponse1Schema, type ErrorListResponse1 } from "../models/error-list-response1.js";
import {
  issueServiceCreditRequestSchema,
  type IssueServiceCreditRequest,
} from "../models/issue-service-credit-request.js";
import {
  listPrepaymentsFilterSchema,
  type ListPrepaymentsFilter,
} from "../models/list-prepayments-filter.js";
import {
  listSubscriptionGroupPrepaymentResponseSchema,
  type ListSubscriptionGroupPrepaymentResponse,
} from "../models/list-subscription-group-prepayment-response.js";
import {
  serviceCreditResponseSchema,
  type ServiceCreditResponse,
} from "../models/service-credit-response.js";
import { serviceCreditSchema, type ServiceCredit } from "../models/service-credit.js";
import {
  subscriptionGroupPrepaymentRequestSchema,
  type SubscriptionGroupPrepaymentRequest,
} from "../models/subscription-group-prepayment-request.js";
import {
  subscriptionGroupPrepaymentResponseSchema,
  type SubscriptionGroupPrepaymentResponse,
} from "../models/subscription-group-prepayment-response.js";
import type { Servers } from "../servers.js";

export class SubscriptionGroupInvoiceAccount {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createSubscriptionGroupPrepayment(
    request: SubscriptionGroupInvoiceAccount.CreateSubscriptionGroupPrepaymentRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SubscriptionGroupPrepaymentResponse,
    SubscriptionGroupInvoiceAccount.CreateSubscriptionGroupPrepaymentError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscription_groups/{uid}/prepayments.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "uid", value: request.uid, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => subscriptionGroupPrepaymentRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: subscriptionGroupPrepaymentResponseSchema },
        errorFactory: SubscriptionGroupInvoiceAccount.CreateSubscriptionGroupPrepaymentError,
      },
      options,
    );
  }

  deductSubscriptionGroupServiceCredit(
    request: SubscriptionGroupInvoiceAccount.DeductSubscriptionGroupServiceCreditRequest,
    options?: RequestOptions,
  ): ApiPromise<ServiceCredit, SubscriptionGroupInvoiceAccount.DeductSubscriptionGroupServiceCreditError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscription_groups/{uid}/service_credit_deductions.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "uid", value: request.uid, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deductServiceCreditRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: serviceCreditSchema },
        errorFactory: SubscriptionGroupInvoiceAccount.DeductSubscriptionGroupServiceCreditError,
      },
      options,
    );
  }

  issueSubscriptionGroupServiceCredit(
    request: SubscriptionGroupInvoiceAccount.IssueSubscriptionGroupServiceCreditRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ServiceCreditResponse,
    SubscriptionGroupInvoiceAccount.IssueSubscriptionGroupServiceCreditError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscription_groups/{uid}/service_credits.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "uid", value: request.uid, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => issueServiceCreditRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: serviceCreditResponseSchema },
        errorFactory: SubscriptionGroupInvoiceAccount.IssueSubscriptionGroupServiceCreditError,
      },
      options,
    );
  }

  listPrepaymentsForSubscriptionGroup(
    request: SubscriptionGroupInvoiceAccount.ListPrepaymentsForSubscriptionGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListSubscriptionGroupPrepaymentResponse,
    SubscriptionGroupInvoiceAccount.ListPrepaymentsForSubscriptionGroupError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.production("/subscription_groups/{uid}/prepayments.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "uid", value: request.uid, schema: s.string() }],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 20) },
          {
            name: "filter",
            value: request.filter,
            schema: s.optional(s.lazy(() => listPrepaymentsFilterSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSubscriptionGroupPrepaymentResponseSchema },
        errorFactory: SubscriptionGroupInvoiceAccount.ListPrepaymentsForSubscriptionGroupError,
      },
      options,
    );
  }
}

export namespace SubscriptionGroupInvoiceAccount {
  export type CreateSubscriptionGroupPrepaymentRequest = {
    uid: string;
    body?: SubscriptionGroupPrepaymentRequest;
  };

  export class CreateSubscriptionGroupPrepaymentError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<CreateSubscriptionGroupPrepaymentError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type DeductSubscriptionGroupServiceCreditRequest = {
    uid: string;
    body?: DeductServiceCreditRequest;
  };

  export class DeductSubscriptionGroupServiceCreditError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<DeductSubscriptionGroupServiceCreditError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type IssueSubscriptionGroupServiceCreditRequest = {
    uid: string;
    body?: IssueServiceCreditRequest;
  };

  export class IssueSubscriptionGroupServiceCreditError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<IssueSubscriptionGroupServiceCreditError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type ListPrepaymentsForSubscriptionGroupRequest = {
    uid: string;
    page?: number;
    perPage?: number;
    filter?: ListPrepaymentsFilter;
  };

  export class ListPrepaymentsForSubscriptionGroupError extends ResponseError<
    Declared<"error404", undefined>
  > {
    static readonly errors: ErrorDecoders<ListPrepaymentsForSubscriptionGroupError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
