import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  cancelGroupedSubscriptionsRequestSchema,
  type CancelGroupedSubscriptionsRequest,
} from "../models/cancel-grouped-subscriptions-request.js";
import { errorListResponse1Schema, type ErrorListResponse1 } from "../models/error-list-response1.js";
import {
  reactivateSubscriptionGroupRequestSchema,
  type ReactivateSubscriptionGroupRequest,
} from "../models/reactivate-subscription-group-request.js";
import {
  reactivateSubscriptionGroupResponseSchema,
  type ReactivateSubscriptionGroupResponse,
} from "../models/reactivate-subscription-group-response.js";
import type { Servers } from "../servers.js";

export class SubscriptionGroupStatus {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  cancelDelayedCancellationForGroup(
    request: SubscriptionGroupStatus.CancelDelayedCancellationForGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SubscriptionGroupStatus.CancelDelayedCancellationForGroupError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.production("/subscription_groups/{uid}/delayed_cancel.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "uid", value: request.uid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SubscriptionGroupStatus.CancelDelayedCancellationForGroupError,
      },
      options,
    );
  }

  cancelSubscriptionsInGroup(
    request: SubscriptionGroupStatus.CancelSubscriptionsInGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SubscriptionGroupStatus.CancelSubscriptionsInGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscription_groups/{uid}/cancel.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "uid", value: request.uid, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => cancelGroupedSubscriptionsRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: SubscriptionGroupStatus.CancelSubscriptionsInGroupError,
      },
      options,
    );
  }

  initiateDelayedCancellationForGroup(
    request: SubscriptionGroupStatus.InitiateDelayedCancellationForGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SubscriptionGroupStatus.InitiateDelayedCancellationForGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscription_groups/{uid}/delayed_cancel.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "uid", value: request.uid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SubscriptionGroupStatus.InitiateDelayedCancellationForGroupError,
      },
      options,
    );
  }

  reactivateSubscriptionGroup(
    request: SubscriptionGroupStatus.ReactivateSubscriptionGroupRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    ReactivateSubscriptionGroupResponse,
    SubscriptionGroupStatus.ReactivateSubscriptionGroupError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscription_groups/{uid}/reactivate.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "uid", value: request.uid, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => reactivateSubscriptionGroupRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: reactivateSubscriptionGroupResponseSchema },
        errorFactory: SubscriptionGroupStatus.ReactivateSubscriptionGroupError,
      },
      options,
    );
  }
}

export namespace SubscriptionGroupStatus {
  export type CancelDelayedCancellationForGroupRequest = {
    uid: string;
  };

  export class CancelDelayedCancellationForGroupError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<CancelDelayedCancellationForGroupError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type CancelSubscriptionsInGroupRequest = {
    uid: string;
    body?: CancelGroupedSubscriptionsRequest;
  };

  export class CancelSubscriptionsInGroupError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<CancelSubscriptionsInGroupError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type InitiateDelayedCancellationForGroupRequest = {
    uid: string;
  };

  export class InitiateDelayedCancellationForGroupError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<InitiateDelayedCancellationForGroupError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type ReactivateSubscriptionGroupRequestParams = {
    uid: string;
    body?: ReactivateSubscriptionGroupRequest;
  };

  export class ReactivateSubscriptionGroupError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<ReactivateSubscriptionGroupError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }
}
