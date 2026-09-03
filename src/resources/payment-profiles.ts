import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { bankAccountResponseSchema, type BankAccountResponse } from "../models/bank-account-response.js";
import {
  bankAccountVerificationRequestSchema,
  type BankAccountVerificationRequest,
} from "../models/bank-account-verification-request.js";
import {
  createPaymentProfileRequestSchema,
  type CreatePaymentProfileRequest,
} from "../models/create-payment-profile-request.js";
import { errorListResponse1Schema, type ErrorListResponse1 } from "../models/error-list-response1.js";
import {
  errorStringMapResponse1Schema,
  type ErrorStringMapResponse1,
} from "../models/error-string-map-response1.js";
import {
  getOneTimeTokenRequestSchema,
  type GetOneTimeTokenRequest,
} from "../models/get-one-time-token-request.js";
import {
  paymentProfileResponseSchema,
  type PaymentProfileResponse,
} from "../models/payment-profile-response.js";
import {
  updatePaymentProfileRequestSchema,
  type UpdatePaymentProfileRequest,
} from "../models/update-payment-profile-request.js";
import type { Servers } from "../servers.js";

export class PaymentProfiles {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  changeSubscriptionDefaultPaymentProfile(
    request: PaymentProfiles.ChangeSubscriptionDefaultPaymentProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentProfileResponse, PaymentProfiles.ChangeSubscriptionDefaultPaymentProfileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production(
          "/subscriptions/{subscription_id}/payment_profiles/{payment_profile_id}/change_payment_profile.json",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "subscription_id", value: request.subscriptionId, schema: s.number() },
          { name: "payment_profile_id", value: request.paymentProfileId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentProfileResponseSchema },
        errorFactory: PaymentProfiles.ChangeSubscriptionDefaultPaymentProfileError,
      },
      options,
    );
  }

  changeSubscriptionGroupDefaultPaymentProfile(
    request: PaymentProfiles.ChangeSubscriptionGroupDefaultPaymentProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentProfileResponse, PaymentProfiles.ChangeSubscriptionGroupDefaultPaymentProfileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production(
          "/subscription_groups/{uid}/payment_profiles/{payment_profile_id}/change_payment_profile.json",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "uid", value: request.uid, schema: s.string() },
          { name: "payment_profile_id", value: request.paymentProfileId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentProfileResponseSchema },
        errorFactory: PaymentProfiles.ChangeSubscriptionGroupDefaultPaymentProfileError,
      },
      options,
    );
  }

  createPaymentProfile(
    request: PaymentProfiles.CreatePaymentProfileRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PaymentProfileResponse, PaymentProfiles.CreatePaymentProfileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/payment_profiles.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createPaymentProfileRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: paymentProfileResponseSchema },
        errorFactory: PaymentProfiles.CreatePaymentProfileError,
      },
      options,
    );
  }

  deleteSubscriptionGroupPaymentProfile(
    request: PaymentProfiles.DeleteSubscriptionGroupPaymentProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.production(
          "/subscription_groups/{uid}/payment_profiles/{payment_profile_id}.json",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "uid", value: request.uid, schema: s.string() },
          { name: "payment_profile_id", value: request.paymentProfileId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteSubscriptionsPaymentProfile(
    request: PaymentProfiles.DeleteSubscriptionsPaymentProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.production(
          "/subscriptions/{subscription_id}/payment_profiles/{payment_profile_id}.json",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "subscription_id", value: request.subscriptionId, schema: s.number() },
          { name: "payment_profile_id", value: request.paymentProfileId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteUnusedPaymentProfile(
    request: PaymentProfiles.DeleteUnusedPaymentProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PaymentProfiles.DeleteUnusedPaymentProfileError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.production("/payment_profiles/{payment_profile_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "payment_profile_id", value: request.paymentProfileId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: PaymentProfiles.DeleteUnusedPaymentProfileError,
      },
      options,
    );
  }

  listPaymentProfiles(
    request: PaymentProfiles.ListPaymentProfilesRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentProfileResponse[], ResponseError> {
    return this.#rawClient.execute<PaymentProfileResponse[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/payment_profiles.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 20) },
          { name: "customer_id", value: request.customerId, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => paymentProfileResponseSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  readOneTimeToken(
    request: PaymentProfiles.ReadOneTimeTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<GetOneTimeTokenRequest, PaymentProfiles.ReadOneTimeTokenError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.production("/one_time_tokens/{chargify_token}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "chargify_token", value: request.chargifyToken, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getOneTimeTokenRequestSchema },
        errorFactory: PaymentProfiles.ReadOneTimeTokenError,
      },
      options,
    );
  }

  readPaymentProfile(
    request: PaymentProfiles.ReadPaymentProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentProfileResponse, PaymentProfiles.ReadPaymentProfileError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.production("/payment_profiles/{payment_profile_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "payment_profile_id", value: request.paymentProfileId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentProfileResponseSchema },
        errorFactory: PaymentProfiles.ReadPaymentProfileError,
      },
      options,
    );
  }

  sendRequestUpdatePaymentEmail(
    request: PaymentProfiles.SendRequestUpdatePaymentEmailRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PaymentProfiles.SendRequestUpdatePaymentEmailError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production(
          "/subscriptions/{subscription_id}/request_payment_profiles_update.json",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: PaymentProfiles.SendRequestUpdatePaymentEmailError,
      },
      options,
    );
  }

  updatePaymentProfile(
    request: PaymentProfiles.UpdatePaymentProfileRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PaymentProfileResponse, PaymentProfiles.UpdatePaymentProfileError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production("/payment_profiles/{payment_profile_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "payment_profile_id", value: request.paymentProfileId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updatePaymentProfileRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: paymentProfileResponseSchema },
        errorFactory: PaymentProfiles.UpdatePaymentProfileError,
      },
      options,
    );
  }

  verifyBankAccount(
    request: PaymentProfiles.VerifyBankAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<BankAccountResponse, PaymentProfiles.VerifyBankAccountError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production("/bank_accounts/{bank_account_id}/verification.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "bank_account_id", value: request.bankAccountId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => bankAccountVerificationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: bankAccountResponseSchema },
        errorFactory: PaymentProfiles.VerifyBankAccountError,
      },
      options,
    );
  }
}

export namespace PaymentProfiles {
  export type ChangeSubscriptionDefaultPaymentProfileRequest = {
    subscriptionId: number;
    paymentProfileId: number;
  };

  export class ChangeSubscriptionDefaultPaymentProfileError extends ResponseError<
    Declared<"error404", undefined> | Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<ChangeSubscriptionDefaultPaymentProfileError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type ChangeSubscriptionGroupDefaultPaymentProfileRequest = {
    uid: string;
    paymentProfileId: number;
  };

  export class ChangeSubscriptionGroupDefaultPaymentProfileError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<ChangeSubscriptionGroupDefaultPaymentProfileError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type CreatePaymentProfileRequestParams = {
    body?: CreatePaymentProfileRequest;
  };

  export class CreatePaymentProfileError extends ResponseError<
    Declared<"error404", undefined> | Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<CreatePaymentProfileError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type DeleteSubscriptionGroupPaymentProfileRequest = {
    uid: string;
    paymentProfileId: number;
  };

  export type DeleteSubscriptionsPaymentProfileRequest = {
    subscriptionId: number;
    paymentProfileId: number;
  };

  export type DeleteUnusedPaymentProfileRequest = {
    paymentProfileId: number;
  };

  export class DeleteUnusedPaymentProfileError extends ResponseError<
    Declared<"error404", undefined> | Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<DeleteUnusedPaymentProfileError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type ListPaymentProfilesRequest = {
    page?: number;
    perPage?: number;
    customerId?: number;
  };

  export type ReadOneTimeTokenRequest = {
    chargifyToken: string;
  };

  export class ReadOneTimeTokenError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<ReadOneTimeTokenError> = [
      { on: 404, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type ReadPaymentProfileRequest = {
    paymentProfileId: number;
  };

  export class ReadPaymentProfileError extends ResponseError<Declared<"error404", undefined>> {
    static readonly errors: ErrorDecoders<ReadPaymentProfileError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type SendRequestUpdatePaymentEmailRequest = {
    subscriptionId: number;
  };

  export class SendRequestUpdatePaymentEmailError extends ResponseError<
    Declared<"error404", undefined> | Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<SendRequestUpdatePaymentEmailError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type UpdatePaymentProfileRequestParams = {
    paymentProfileId: number;
    body?: UpdatePaymentProfileRequest;
  };

  export class UpdatePaymentProfileError extends ResponseError<
    Declared<"error404", undefined> | Declared<"errorStringMapResponse1", ErrorStringMapResponse1>
  > {
    static readonly errors: ErrorDecoders<UpdatePaymentProfileError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      {
        on: 422,
        kind: "errorStringMapResponse1",
        decode: { kind: "json", schema: errorStringMapResponse1Schema },
      },
    ];
  }

  export type VerifyBankAccountRequest = {
    bankAccountId: number;
    body?: BankAccountVerificationRequest;
  };

  export class VerifyBankAccountError extends ResponseError<
    Declared<"error404", undefined> | Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<VerifyBankAccountError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }
}
