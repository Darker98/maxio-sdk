import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { errorListResponse1Schema, type ErrorListResponse1 } from "../models/error-list-response1.js";
import {
  subscriptionNoteResponseSchema,
  type SubscriptionNoteResponse,
} from "../models/subscription-note-response.js";
import {
  updateSubscriptionNoteRequestSchema,
  type UpdateSubscriptionNoteRequest,
} from "../models/update-subscription-note-request.js";
import type { Servers } from "../servers.js";

export class SubscriptionNotes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createSubscriptionNote(
    request: SubscriptionNotes.CreateSubscriptionNoteRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionNoteResponse, SubscriptionNotes.CreateSubscriptionNoteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscriptions/{subscription_id}/notes.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateSubscriptionNoteRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: subscriptionNoteResponseSchema },
        errorFactory: SubscriptionNotes.CreateSubscriptionNoteError,
      },
      options,
    );
  }

  deleteSubscriptionNote(
    request: SubscriptionNotes.DeleteSubscriptionNoteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.production("/subscriptions/{subscription_id}/notes/{note_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "subscription_id", value: request.subscriptionId, schema: s.number() },
          { name: "note_id", value: request.noteId, schema: s.number() },
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

  listSubscriptionNotes(
    request: SubscriptionNotes.ListSubscriptionNotesRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionNoteResponse[], SubscriptionNotes.ListSubscriptionNotesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.production("/subscriptions/{subscription_id}/notes.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 20) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => subscriptionNoteResponseSchema)) },
        errorFactory: SubscriptionNotes.ListSubscriptionNotesError,
      },
      options,
    );
  }

  readSubscriptionNote(
    request: SubscriptionNotes.ReadSubscriptionNoteRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionNoteResponse, ResponseError> {
    return this.#rawClient.execute<SubscriptionNoteResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/subscriptions/{subscription_id}/notes/{note_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "subscription_id", value: request.subscriptionId, schema: s.number() },
          { name: "note_id", value: request.noteId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subscriptionNoteResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateSubscriptionNote(
    request: SubscriptionNotes.UpdateSubscriptionNoteRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionNoteResponse, SubscriptionNotes.UpdateSubscriptionNoteError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production("/subscriptions/{subscription_id}/notes/{note_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "subscription_id", value: request.subscriptionId, schema: s.number() },
          { name: "note_id", value: request.noteId, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateSubscriptionNoteRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: subscriptionNoteResponseSchema },
        errorFactory: SubscriptionNotes.UpdateSubscriptionNoteError,
      },
      options,
    );
  }
}

export namespace SubscriptionNotes {
  export type CreateSubscriptionNoteRequest = {
    subscriptionId: number;
    body?: UpdateSubscriptionNoteRequest;
  };

  export class CreateSubscriptionNoteError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<CreateSubscriptionNoteError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type DeleteSubscriptionNoteRequest = {
    subscriptionId: number;
    noteId: number;
  };

  export type ListSubscriptionNotesRequest = {
    subscriptionId: number;
    page?: number;
    perPage?: number;
  };

  export class ListSubscriptionNotesError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<ListSubscriptionNotesError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type ReadSubscriptionNoteRequest = {
    subscriptionId: number;
    noteId: number;
  };

  export type UpdateSubscriptionNoteRequestParams = {
    subscriptionId: number;
    noteId: number;
    body?: UpdateSubscriptionNoteRequest;
  };

  export class UpdateSubscriptionNoteError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<UpdateSubscriptionNoteError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }
}
