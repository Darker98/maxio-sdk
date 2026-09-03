import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { errorListResponse1Schema, type ErrorListResponse1 } from "../models/error-list-response1.js";
import {
  scheduledRenewalConfigurationItemRequestSchema,
  type ScheduledRenewalConfigurationItemRequest,
} from "../models/scheduled-renewal-configuration-item-request.js";
import {
  scheduledRenewalConfigurationItemResponseSchema,
  type ScheduledRenewalConfigurationItemResponse,
} from "../models/scheduled-renewal-configuration-item-response.js";
import {
  scheduledRenewalConfigurationRequestSchema,
  type ScheduledRenewalConfigurationRequest,
} from "../models/scheduled-renewal-configuration-request.js";
import {
  scheduledRenewalConfigurationResponseSchema,
  type ScheduledRenewalConfigurationResponse,
} from "../models/scheduled-renewal-configuration-response.js";
import {
  scheduledRenewalConfigurationsResponseSchema,
  type ScheduledRenewalConfigurationsResponse,
} from "../models/scheduled-renewal-configurations-response.js";
import {
  scheduledRenewalLockInRequestSchema,
  type ScheduledRenewalLockInRequest,
} from "../models/scheduled-renewal-lock-in-request.js";
import {
  scheduledRenewalUpdateRequestSchema,
  type ScheduledRenewalUpdateRequest,
} from "../models/scheduled-renewal-update-request.js";
import { statusSchema, type Status } from "../models/status.js";
import type { Servers } from "../servers.js";

export class SubscriptionRenewals {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  cancelScheduledRenewalConfiguration(
    request: SubscriptionRenewals.CancelScheduledRenewalConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ScheduledRenewalConfigurationResponse,
    SubscriptionRenewals.CancelScheduledRenewalConfigurationError
  > {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production("/subscriptions/{subscription_id}/scheduled_renewals/{id}/cancel.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "subscription_id", value: request.subscriptionId, schema: s.number() },
          { name: "id", value: request.id, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: scheduledRenewalConfigurationResponseSchema },
        errorFactory: SubscriptionRenewals.CancelScheduledRenewalConfigurationError,
      },
      options,
    );
  }

  createScheduledRenewalConfiguration(
    request: SubscriptionRenewals.CreateScheduledRenewalConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ScheduledRenewalConfigurationResponse,
    SubscriptionRenewals.CreateScheduledRenewalConfigurationError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscriptions/{subscription_id}/scheduled_renewals.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => scheduledRenewalConfigurationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: scheduledRenewalConfigurationResponseSchema },
        errorFactory: SubscriptionRenewals.CreateScheduledRenewalConfigurationError,
      },
      options,
    );
  }

  createScheduledRenewalConfigurationItem(
    request: SubscriptionRenewals.CreateScheduledRenewalConfigurationItemRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ScheduledRenewalConfigurationItemResponse,
    SubscriptionRenewals.CreateScheduledRenewalConfigurationItemError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production(
          "/subscriptions/{subscription_id}/scheduled_renewals/{scheduled_renewals_configuration_id}/configuration_items.json",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "subscription_id", value: request.subscriptionId, schema: s.number() },
          {
            name: "scheduled_renewals_configuration_id",
            value: request.scheduledRenewalsConfigurationId,
            schema: s.number(),
          },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => scheduledRenewalConfigurationItemRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: scheduledRenewalConfigurationItemResponseSchema },
        errorFactory: SubscriptionRenewals.CreateScheduledRenewalConfigurationItemError,
      },
      options,
    );
  }

  deleteScheduledRenewalConfigurationItem(
    request: SubscriptionRenewals.DeleteScheduledRenewalConfigurationItemRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SubscriptionRenewals.DeleteScheduledRenewalConfigurationItemError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.production(
          "/subscriptions/{subscription_id}/scheduled_renewals/{scheduled_renewals_configuration_id}/configuration_items/{id}.json",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "subscription_id", value: request.subscriptionId, schema: s.number() },
          {
            name: "scheduled_renewals_configuration_id",
            value: request.scheduledRenewalsConfigurationId,
            schema: s.number(),
          },
          { name: "id", value: request.id, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SubscriptionRenewals.DeleteScheduledRenewalConfigurationItemError,
      },
      options,
    );
  }

  listScheduledRenewalConfigurations(
    request: SubscriptionRenewals.ListScheduledRenewalConfigurationsRequest,
    options?: RequestOptions,
  ): ApiPromise<ScheduledRenewalConfigurationsResponse, ResponseError> {
    return this.#rawClient.execute<ScheduledRenewalConfigurationsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/subscriptions/{subscription_id}/scheduled_renewals.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        query: [{ name: "status", value: request.status, schema: s.optional(s.lazy(() => statusSchema)) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: scheduledRenewalConfigurationsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  lockInScheduledRenewalImmediately(
    request: SubscriptionRenewals.LockInScheduledRenewalImmediatelyRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ScheduledRenewalConfigurationResponse,
    SubscriptionRenewals.LockInScheduledRenewalImmediatelyError
  > {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production(
          "/subscriptions/{subscription_id}/scheduled_renewals/{id}/immediate_lock_in.json",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "subscription_id", value: request.subscriptionId, schema: s.number() },
          { name: "id", value: request.id, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: scheduledRenewalConfigurationResponseSchema },
        errorFactory: SubscriptionRenewals.LockInScheduledRenewalImmediatelyError,
      },
      options,
    );
  }

  readScheduledRenewalConfiguration(
    request: SubscriptionRenewals.ReadScheduledRenewalConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<ScheduledRenewalConfigurationResponse, ResponseError> {
    return this.#rawClient.execute<ScheduledRenewalConfigurationResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/subscriptions/{subscription_id}/scheduled_renewals/{id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "subscription_id", value: request.subscriptionId, schema: s.number() },
          { name: "id", value: request.id, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: scheduledRenewalConfigurationResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  scheduleScheduledRenewalLockIn(
    request: SubscriptionRenewals.ScheduleScheduledRenewalLockInRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ScheduledRenewalConfigurationResponse,
    SubscriptionRenewals.ScheduleScheduledRenewalLockInError
  > {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production(
          "/subscriptions/{subscription_id}/scheduled_renewals/{id}/schedule_lock_in.json",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "subscription_id", value: request.subscriptionId, schema: s.number() },
          { name: "id", value: request.id, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => scheduledRenewalLockInRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: scheduledRenewalConfigurationResponseSchema },
        errorFactory: SubscriptionRenewals.ScheduleScheduledRenewalLockInError,
      },
      options,
    );
  }

  unpublishScheduledRenewalConfiguration(
    request: SubscriptionRenewals.UnpublishScheduledRenewalConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ScheduledRenewalConfigurationResponse,
    SubscriptionRenewals.UnpublishScheduledRenewalConfigurationError
  > {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production(
          "/subscriptions/{subscription_id}/scheduled_renewals/{id}/unpublish.json",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "subscription_id", value: request.subscriptionId, schema: s.number() },
          { name: "id", value: request.id, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: scheduledRenewalConfigurationResponseSchema },
        errorFactory: SubscriptionRenewals.UnpublishScheduledRenewalConfigurationError,
      },
      options,
    );
  }

  updateScheduledRenewalConfiguration(
    request: SubscriptionRenewals.UpdateScheduledRenewalConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ScheduledRenewalConfigurationResponse,
    SubscriptionRenewals.UpdateScheduledRenewalConfigurationError
  > {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production("/subscriptions/{subscription_id}/scheduled_renewals/{id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "subscription_id", value: request.subscriptionId, schema: s.number() },
          { name: "id", value: request.id, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => scheduledRenewalConfigurationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: scheduledRenewalConfigurationResponseSchema },
        errorFactory: SubscriptionRenewals.UpdateScheduledRenewalConfigurationError,
      },
      options,
    );
  }

  updateScheduledRenewalConfigurationItem(
    request: SubscriptionRenewals.UpdateScheduledRenewalConfigurationItemRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ScheduledRenewalConfigurationItemResponse,
    SubscriptionRenewals.UpdateScheduledRenewalConfigurationItemError
  > {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production(
          "/subscriptions/{subscription_id}/scheduled_renewals/{scheduled_renewals_configuration_id}/configuration_items/{id}.json",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "subscription_id", value: request.subscriptionId, schema: s.number() },
          {
            name: "scheduled_renewals_configuration_id",
            value: request.scheduledRenewalsConfigurationId,
            schema: s.number(),
          },
          { name: "id", value: request.id, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => scheduledRenewalUpdateRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: scheduledRenewalConfigurationItemResponseSchema },
        errorFactory: SubscriptionRenewals.UpdateScheduledRenewalConfigurationItemError,
      },
      options,
    );
  }
}

export namespace SubscriptionRenewals {
  export type CancelScheduledRenewalConfigurationRequest = {
    subscriptionId: number;
    id: number;
  };

  export class CancelScheduledRenewalConfigurationError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<CancelScheduledRenewalConfigurationError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type CreateScheduledRenewalConfigurationRequest = {
    subscriptionId: number;
    body?: ScheduledRenewalConfigurationRequest;
  };

  export class CreateScheduledRenewalConfigurationError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<CreateScheduledRenewalConfigurationError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type CreateScheduledRenewalConfigurationItemRequest = {
    subscriptionId: number;
    scheduledRenewalsConfigurationId: number;
    body?: ScheduledRenewalConfigurationItemRequest;
  };

  export class CreateScheduledRenewalConfigurationItemError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<CreateScheduledRenewalConfigurationItemError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type DeleteScheduledRenewalConfigurationItemRequest = {
    subscriptionId: number;
    scheduledRenewalsConfigurationId: number;
    id: number;
  };

  export class DeleteScheduledRenewalConfigurationItemError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<DeleteScheduledRenewalConfigurationItemError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type ListScheduledRenewalConfigurationsRequest = {
    subscriptionId: number;
    status?: Status;
  };

  export type LockInScheduledRenewalImmediatelyRequest = {
    subscriptionId: number;
    id: number;
  };

  export class LockInScheduledRenewalImmediatelyError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<LockInScheduledRenewalImmediatelyError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type ReadScheduledRenewalConfigurationRequest = {
    subscriptionId: number;
    id: number;
  };

  export type ScheduleScheduledRenewalLockInRequest = {
    subscriptionId: number;
    id: number;
    body?: ScheduledRenewalLockInRequest;
  };

  export class ScheduleScheduledRenewalLockInError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<ScheduleScheduledRenewalLockInError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type UnpublishScheduledRenewalConfigurationRequest = {
    subscriptionId: number;
    id: number;
  };

  export class UnpublishScheduledRenewalConfigurationError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<UnpublishScheduledRenewalConfigurationError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type UpdateScheduledRenewalConfigurationRequest = {
    subscriptionId: number;
    id: number;
    body?: ScheduledRenewalConfigurationRequest;
  };

  export class UpdateScheduledRenewalConfigurationError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<UpdateScheduledRenewalConfigurationError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type UpdateScheduledRenewalConfigurationItemRequest = {
    subscriptionId: number;
    scheduledRenewalsConfigurationId: number;
    id: number;
    body?: ScheduledRenewalUpdateRequest;
  };

  export class UpdateScheduledRenewalConfigurationItemError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<UpdateScheduledRenewalConfigurationItemError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }
}
