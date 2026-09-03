import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { errorListResponse1Schema, type ErrorListResponse1 } from "../models/error-list-response1.js";
import {
  subscriptionMigrationPreviewRequestSchema,
  type SubscriptionMigrationPreviewRequest,
} from "../models/subscription-migration-preview-request.js";
import {
  subscriptionMigrationPreviewResponseSchema,
  type SubscriptionMigrationPreviewResponse,
} from "../models/subscription-migration-preview-response.js";
import {
  subscriptionProductMigrationRequestSchema,
  type SubscriptionProductMigrationRequest,
} from "../models/subscription-product-migration-request.js";
import { subscriptionResponseSchema, type SubscriptionResponse } from "../models/subscription-response.js";
import type { Servers } from "../servers.js";

export class SubscriptionProducts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  migrateSubscriptionProduct(
    request: SubscriptionProducts.MigrateSubscriptionProductRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponse, SubscriptionProducts.MigrateSubscriptionProductError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscriptions/{subscription_id}/migrations.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => subscriptionProductMigrationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: subscriptionResponseSchema },
        errorFactory: SubscriptionProducts.MigrateSubscriptionProductError,
      },
      options,
    );
  }

  previewSubscriptionProductMigration(
    request: SubscriptionProducts.PreviewSubscriptionProductMigrationRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SubscriptionMigrationPreviewResponse,
    SubscriptionProducts.PreviewSubscriptionProductMigrationError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscriptions/{subscription_id}/migrations/preview.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => subscriptionMigrationPreviewRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: subscriptionMigrationPreviewResponseSchema },
        errorFactory: SubscriptionProducts.PreviewSubscriptionProductMigrationError,
      },
      options,
    );
  }
}

export namespace SubscriptionProducts {
  export type MigrateSubscriptionProductRequest = {
    subscriptionId: number;
    body?: SubscriptionProductMigrationRequest;
  };

  export class MigrateSubscriptionProductError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<MigrateSubscriptionProductError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type PreviewSubscriptionProductMigrationRequest = {
    subscriptionId: number;
    body?: SubscriptionMigrationPreviewRequest;
  };

  export class PreviewSubscriptionProductMigrationError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<PreviewSubscriptionProductMigrationError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }
}
