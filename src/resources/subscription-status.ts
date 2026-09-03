import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { cancellationRequestSchema, type CancellationRequest } from "../models/cancellation-request.js";
import {
  delayedCancellationResponseSchema,
  type DelayedCancellationResponse,
} from "../models/delayed-cancellation-response.js";
import { errorListResponse1Schema, type ErrorListResponse1 } from "../models/error-list-response1.js";
import { pauseRequestSchema, type PauseRequest } from "../models/pause-request.js";
import {
  reactivateSubscriptionRequestSchema,
  type ReactivateSubscriptionRequest,
} from "../models/reactivate-subscription-request.js";
import {
  renewalPreviewRequestSchema,
  type RenewalPreviewRequest,
} from "../models/renewal-preview-request.js";
import {
  renewalPreviewResponseSchema,
  type RenewalPreviewResponse,
} from "../models/renewal-preview-response.js";
import { ResumptionCharge, resumptionChargeSchema } from "../models/resumption-charge.js";
import { subscriptionResponseSchema, type SubscriptionResponse } from "../models/subscription-response.js";
import {
  cancelSubscriptionErrorResponseSchema,
  type CancelSubscriptionErrorResponse,
} from "../models/unions/cancel-subscription-error-response.js";
import type { Servers } from "../servers.js";

export class SubscriptionStatus {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  cancelDelayedCancellation(
    request: SubscriptionStatus.CancelDelayedCancellationRequest,
    options?: RequestOptions,
  ): ApiPromise<DelayedCancellationResponse, SubscriptionStatus.CancelDelayedCancellationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.production("/subscriptions/{subscription_id}/delayed_cancel.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: delayedCancellationResponseSchema },
        errorFactory: SubscriptionStatus.CancelDelayedCancellationError,
      },
      options,
    );
  }

  cancelDunning(
    request: SubscriptionStatus.CancelDunningRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponse, SubscriptionStatus.CancelDunningError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscriptions/{subscription_id}/cancel_dunning.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subscriptionResponseSchema },
        errorFactory: SubscriptionStatus.CancelDunningError,
      },
      options,
    );
  }

  cancelSubscription(
    request: SubscriptionStatus.CancelSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponse, SubscriptionStatus.CancelSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.production("/subscriptions/{subscription_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => cancellationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: subscriptionResponseSchema },
        errorFactory: SubscriptionStatus.CancelSubscriptionError,
      },
      options,
    );
  }

  initiateDelayedCancellation(
    request: SubscriptionStatus.InitiateDelayedCancellationRequest,
    options?: RequestOptions,
  ): ApiPromise<DelayedCancellationResponse, SubscriptionStatus.InitiateDelayedCancellationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscriptions/{subscription_id}/delayed_cancel.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => cancellationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: delayedCancellationResponseSchema },
        errorFactory: SubscriptionStatus.InitiateDelayedCancellationError,
      },
      options,
    );
  }

  pauseSubscription(
    request: SubscriptionStatus.PauseSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponse, SubscriptionStatus.PauseSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscriptions/{subscription_id}/hold.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => pauseRequestSchema)) },
      },
      {
        success: { kind: "json", schema: subscriptionResponseSchema },
        errorFactory: SubscriptionStatus.PauseSubscriptionError,
      },
      options,
    );
  }

  previewRenewal(
    request: SubscriptionStatus.PreviewRenewalRequest,
    options?: RequestOptions,
  ): ApiPromise<RenewalPreviewResponse, SubscriptionStatus.PreviewRenewalError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscriptions/{subscription_id}/renewals/preview.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => renewalPreviewRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: renewalPreviewResponseSchema },
        errorFactory: SubscriptionStatus.PreviewRenewalError,
      },
      options,
    );
  }

  reactivateSubscription(
    request: SubscriptionStatus.ReactivateSubscriptionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponse, SubscriptionStatus.ReactivateSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production("/subscriptions/{subscription_id}/reactivate.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => reactivateSubscriptionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: subscriptionResponseSchema },
        errorFactory: SubscriptionStatus.ReactivateSubscriptionError,
      },
      options,
    );
  }

  resumeSubscription(
    request: SubscriptionStatus.ResumeSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponse, SubscriptionStatus.ResumeSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscriptions/{subscription_id}/resume.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        query: [
          {
            name: "calendar_billing['resumption_charge']",
            value: request.calendarBillingResumptionCharge,
            schema: s.defaulted(resumptionChargeSchema, ResumptionCharge.Prorated),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subscriptionResponseSchema },
        errorFactory: SubscriptionStatus.ResumeSubscriptionError,
      },
      options,
    );
  }

  retrySubscription(
    request: SubscriptionStatus.RetrySubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponse, SubscriptionStatus.RetrySubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production("/subscriptions/{subscription_id}/retry.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subscriptionResponseSchema },
        errorFactory: SubscriptionStatus.RetrySubscriptionError,
      },
      options,
    );
  }

  updateAutomaticSubscriptionResumption(
    request: SubscriptionStatus.UpdateAutomaticSubscriptionResumptionRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponse, SubscriptionStatus.UpdateAutomaticSubscriptionResumptionError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production("/subscriptions/{subscription_id}/hold.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => pauseRequestSchema)) },
      },
      {
        success: { kind: "json", schema: subscriptionResponseSchema },
        errorFactory: SubscriptionStatus.UpdateAutomaticSubscriptionResumptionError,
      },
      options,
    );
  }
}

export namespace SubscriptionStatus {
  export type CancelDelayedCancellationRequest = {
    subscriptionId: number;
  };

  export class CancelDelayedCancellationError extends ResponseError<Declared<"error404", undefined>> {
    static readonly errors: ErrorDecoders<CancelDelayedCancellationError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type CancelDunningRequest = {
    subscriptionId: number;
  };

  export class CancelDunningError extends ResponseError<Declared<"errorListResponse1", ErrorListResponse1>> {
    static readonly errors: ErrorDecoders<CancelDunningError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type CancelSubscriptionRequest = {
    subscriptionId: number;
    body?: CancellationRequest;
  };

  export class CancelSubscriptionError extends ResponseError<
    | Declared<"error404", undefined>
    | Declared<"cancelSubscriptionErrorResponse", CancelSubscriptionErrorResponse>
  > {
    static readonly errors: ErrorDecoders<CancelSubscriptionError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      {
        on: 422,
        kind: "cancelSubscriptionErrorResponse",
        decode: { kind: "json", schema: cancelSubscriptionErrorResponseSchema },
      },
    ];
  }

  export type InitiateDelayedCancellationRequest = {
    subscriptionId: number;
    body?: CancellationRequest;
  };

  export class InitiateDelayedCancellationError extends ResponseError<
    Declared<"error404", undefined> | Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<InitiateDelayedCancellationError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type PauseSubscriptionRequest = {
    subscriptionId: number;
    body?: PauseRequest;
  };

  export class PauseSubscriptionError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<PauseSubscriptionError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type PreviewRenewalRequest = {
    subscriptionId: number;
    body?: RenewalPreviewRequest;
  };

  export class PreviewRenewalError extends ResponseError<Declared<"errorListResponse1", ErrorListResponse1>> {
    static readonly errors: ErrorDecoders<PreviewRenewalError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type ReactivateSubscriptionRequestParams = {
    subscriptionId: number;
    body?: ReactivateSubscriptionRequest;
  };

  export class ReactivateSubscriptionError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<ReactivateSubscriptionError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type ResumeSubscriptionRequest = {
    subscriptionId: number;
    calendarBillingResumptionCharge?: ResumptionCharge;
  };

  export class ResumeSubscriptionError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<ResumeSubscriptionError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type RetrySubscriptionRequest = {
    subscriptionId: number;
  };

  export class RetrySubscriptionError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<RetrySubscriptionError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type UpdateAutomaticSubscriptionResumptionRequest = {
    subscriptionId: number;
    body?: PauseRequest;
  };

  export class UpdateAutomaticSubscriptionResumptionError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<UpdateAutomaticSubscriptionResumptionError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }
}
