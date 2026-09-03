import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { accountBalancesSchema, type AccountBalances } from "../models/account-balances.js";
import {
  createPrepaymentRequestSchema,
  type CreatePrepaymentRequest,
} from "../models/create-prepayment-request.js";
import {
  createPrepaymentResponseSchema,
  type CreatePrepaymentResponse,
} from "../models/create-prepayment-response.js";
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
  listServiceCreditsResponseSchema,
  type ListServiceCreditsResponse,
} from "../models/list-service-credits-response.js";
import { prepaymentResponseSchema, type PrepaymentResponse } from "../models/prepayment-response.js";
import { prepaymentsResponseSchema, type PrepaymentsResponse } from "../models/prepayments-response.js";
import {
  refundPrepaymentBaseErrorsResponse1Schema,
  type RefundPrepaymentBaseErrorsResponse1,
} from "../models/refund-prepayment-base-errors-response1.js";
import {
  refundPrepaymentRequestSchema,
  type RefundPrepaymentRequest,
} from "../models/refund-prepayment-request.js";
import { serviceCreditSchema, type ServiceCredit } from "../models/service-credit.js";
import { sortingDirectionSchema, type SortingDirection } from "../models/sorting-direction.js";
import {
  createPrepaymentErrorResponseSchema,
  type CreatePrepaymentErrorResponse,
} from "../models/unions/create-prepayment-error-response.js";
import {
  deductServiceCreditErrorResponseSchema,
  type DeductServiceCreditErrorResponse,
} from "../models/unions/deduct-service-credit-error-response.js";
import {
  issueServiceCreditErrorResponseSchema,
  type IssueServiceCreditErrorResponse,
} from "../models/unions/issue-service-credit-error-response.js";
import {
  refundPrepaymentErrorResponseSchema,
  type RefundPrepaymentErrorResponse,
} from "../models/unions/refund-prepayment-error-response.js";
import type { Servers } from "../servers.js";

export class SubscriptionInvoiceAccount {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createPrepayment(
    request: SubscriptionInvoiceAccount.CreatePrepaymentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreatePrepaymentResponse, SubscriptionInvoiceAccount.CreatePrepaymentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscriptions/{subscription_id}/prepayments.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createPrepaymentRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createPrepaymentResponseSchema },
        errorFactory: SubscriptionInvoiceAccount.CreatePrepaymentError,
      },
      options,
    );
  }

  deductServiceCredit(
    request: SubscriptionInvoiceAccount.DeductServiceCreditRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, SubscriptionInvoiceAccount.DeductServiceCreditError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscriptions/{subscription_id}/service_credit_deductions.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deductServiceCreditRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: SubscriptionInvoiceAccount.DeductServiceCreditError,
      },
      options,
    );
  }

  issueServiceCredit(
    request: SubscriptionInvoiceAccount.IssueServiceCreditRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ServiceCredit, SubscriptionInvoiceAccount.IssueServiceCreditError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscriptions/{subscription_id}/service_credits.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => issueServiceCreditRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: serviceCreditSchema },
        errorFactory: SubscriptionInvoiceAccount.IssueServiceCreditError,
      },
      options,
    );
  }

  listPrepayments(
    request: SubscriptionInvoiceAccount.ListPrepaymentsRequest,
    options?: RequestOptions,
  ): ApiPromise<PrepaymentsResponse, SubscriptionInvoiceAccount.ListPrepaymentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.production("/subscriptions/{subscription_id}/prepayments.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
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
        success: { kind: "json", schema: prepaymentsResponseSchema },
        errorFactory: SubscriptionInvoiceAccount.ListPrepaymentsError,
      },
      options,
    );
  }

  listServiceCredits(
    request: SubscriptionInvoiceAccount.ListServiceCreditsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListServiceCreditsResponse, SubscriptionInvoiceAccount.ListServiceCreditsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.production("/subscriptions/{subscription_id}/service_credits/list.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 20) },
          {
            name: "direction",
            value: request.direction,
            schema: s.optional(s.lazy(() => sortingDirectionSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listServiceCreditsResponseSchema },
        errorFactory: SubscriptionInvoiceAccount.ListServiceCreditsError,
      },
      options,
    );
  }

  readAccountBalances(
    request: SubscriptionInvoiceAccount.ReadAccountBalancesRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountBalances, ResponseError> {
    return this.#rawClient.execute<AccountBalances, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/subscriptions/{subscription_id}/account_balances.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountBalancesSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  refundPrepayment(
    request: SubscriptionInvoiceAccount.RefundPrepaymentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PrepaymentResponse, SubscriptionInvoiceAccount.RefundPrepaymentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production(
          "/subscriptions/{subscription_id}/prepayments/{prepayment_id}/refunds.json",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "subscription_id", value: request.subscriptionId, schema: s.number() },
          { name: "prepayment_id", value: request.prepaymentId, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => refundPrepaymentRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: prepaymentResponseSchema },
        errorFactory: SubscriptionInvoiceAccount.RefundPrepaymentError,
      },
      options,
    );
  }
}

export namespace SubscriptionInvoiceAccount {
  export type CreatePrepaymentRequestParams = {
    subscriptionId: number;
    body?: CreatePrepaymentRequest;
  };

  export class CreatePrepaymentError extends ResponseError<
    Declared<"createPrepaymentErrorResponse", CreatePrepaymentErrorResponse>
  > {
    static readonly errors: ErrorDecoders<CreatePrepaymentError> = [
      {
        on: 422,
        kind: "createPrepaymentErrorResponse",
        decode: { kind: "json", schema: createPrepaymentErrorResponseSchema },
      },
    ];
  }

  export type DeductServiceCreditRequestParams = {
    subscriptionId: number;
    body?: DeductServiceCreditRequest;
  };

  export class DeductServiceCreditError extends ResponseError<
    Declared<"deductServiceCreditErrorResponse", DeductServiceCreditErrorResponse>
  > {
    static readonly errors: ErrorDecoders<DeductServiceCreditError> = [
      {
        on: 422,
        kind: "deductServiceCreditErrorResponse",
        decode: { kind: "json", schema: deductServiceCreditErrorResponseSchema },
      },
    ];
  }

  export type IssueServiceCreditRequestParams = {
    subscriptionId: number;
    body?: IssueServiceCreditRequest;
  };

  export class IssueServiceCreditError extends ResponseError<
    Declared<"issueServiceCreditErrorResponse", IssueServiceCreditErrorResponse>
  > {
    static readonly errors: ErrorDecoders<IssueServiceCreditError> = [
      {
        on: 422,
        kind: "issueServiceCreditErrorResponse",
        decode: { kind: "json", schema: issueServiceCreditErrorResponseSchema },
      },
    ];
  }

  export type ListPrepaymentsRequest = {
    subscriptionId: number;
    page?: number;
    perPage?: number;
    filter?: ListPrepaymentsFilter;
  };

  export class ListPrepaymentsError extends ResponseError<Declared<"error404", undefined>> {
    static readonly errors: ErrorDecoders<ListPrepaymentsError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListServiceCreditsRequest = {
    subscriptionId: number;
    page?: number;
    perPage?: number;
    direction?: SortingDirection;
  };

  export class ListServiceCreditsError extends ResponseError<
    Declared<"error404", undefined> | Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<ListServiceCreditsError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type ReadAccountBalancesRequest = {
    subscriptionId: number;
  };

  export type RefundPrepaymentRequestParams = {
    subscriptionId: number;
    prepaymentId: number;
    body?: RefundPrepaymentRequest;
  };

  export class RefundPrepaymentError extends ResponseError<
    | Declared<"refundPrepaymentBaseErrorsResponse1", RefundPrepaymentBaseErrorsResponse1>
    | Declared<"error404", string>
    | Declared<"refundPrepaymentErrorResponse", RefundPrepaymentErrorResponse>
  > {
    static readonly errors: ErrorDecoders<RefundPrepaymentError> = [
      {
        on: 400,
        kind: "refundPrepaymentBaseErrorsResponse1",
        decode: { kind: "json", schema: refundPrepaymentBaseErrorsResponse1Schema },
      },
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.string() } },
      {
        on: 422,
        kind: "refundPrepaymentErrorResponse",
        decode: { kind: "json", schema: refundPrepaymentErrorResponseSchema },
      },
    ];
  }
}
