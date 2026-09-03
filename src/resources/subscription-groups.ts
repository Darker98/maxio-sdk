import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  addSubscriptionToAGroupSchema,
  type AddSubscriptionToAGroup,
} from "../models/add-subscription-to-agroup.js";
import {
  createSubscriptionGroupRequestSchema,
  type CreateSubscriptionGroupRequest,
} from "../models/create-subscription-group-request.js";
import {
  deleteSubscriptionGroupResponseSchema,
  type DeleteSubscriptionGroupResponse,
} from "../models/delete-subscription-group-response.js";
import { errorListResponse1Schema, type ErrorListResponse1 } from "../models/error-list-response1.js";
import {
  fullSubscriptionGroupResponseSchema,
  type FullSubscriptionGroupResponse,
} from "../models/full-subscription-group-response.js";
import {
  listSubscriptionGroupsResponseSchema,
  type ListSubscriptionGroupsResponse,
} from "../models/list-subscription-groups-response.js";
import {
  subscriptionGroupCreateErrorResponse1Schema,
  type SubscriptionGroupCreateErrorResponse1,
} from "../models/subscription-group-create-error-response1.js";
import {
  subscriptionGroupIncludeSchema,
  type SubscriptionGroupInclude,
} from "../models/subscription-group-include.js";
import {
  subscriptionGroupResponseSchema,
  type SubscriptionGroupResponse,
} from "../models/subscription-group-response.js";
import {
  subscriptionGroupSignupErrorResponse1Schema,
  type SubscriptionGroupSignupErrorResponse1,
} from "../models/subscription-group-signup-error-response1.js";
import {
  subscriptionGroupSignupRequestSchema,
  type SubscriptionGroupSignupRequest,
} from "../models/subscription-group-signup-request.js";
import {
  subscriptionGroupSignupResponseSchema,
  type SubscriptionGroupSignupResponse,
} from "../models/subscription-group-signup-response.js";
import {
  subscriptionGroupUpdateErrorResponse1Schema,
  type SubscriptionGroupUpdateErrorResponse1,
} from "../models/subscription-group-update-error-response1.js";
import {
  subscriptionGroupsListIncludeSchema,
  type SubscriptionGroupsListInclude,
} from "../models/subscription-groups-list-include.js";
import {
  updateSubscriptionGroupRequestSchema,
  type UpdateSubscriptionGroupRequest,
} from "../models/update-subscription-group-request.js";
import type { Servers } from "../servers.js";

export class SubscriptionGroups {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  addSubscriptionToGroup(
    request: SubscriptionGroups.AddSubscriptionToGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionGroupResponse, ResponseError> {
    return this.#rawClient.execute<SubscriptionGroupResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.production("/subscriptions/{subscription_id}/group.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => addSubscriptionToAGroupSchema)),
        },
      },
      {
        success: { kind: "json", schema: subscriptionGroupResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createSubscriptionGroup(
    request: SubscriptionGroups.CreateSubscriptionGroupRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionGroupResponse, SubscriptionGroups.CreateSubscriptionGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscription_groups.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createSubscriptionGroupRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: subscriptionGroupResponseSchema },
        errorFactory: SubscriptionGroups.CreateSubscriptionGroupError,
      },
      options,
    );
  }

  deleteSubscriptionGroup(
    request: SubscriptionGroups.DeleteSubscriptionGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteSubscriptionGroupResponse, SubscriptionGroups.DeleteSubscriptionGroupError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.production("/subscription_groups/{uid}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "uid", value: request.uid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteSubscriptionGroupResponseSchema },
        errorFactory: SubscriptionGroups.DeleteSubscriptionGroupError,
      },
      options,
    );
  }

  findSubscriptionGroup(
    request: SubscriptionGroups.FindSubscriptionGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<FullSubscriptionGroupResponse, SubscriptionGroups.FindSubscriptionGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.production("/subscription_groups/lookup.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [{ name: "subscription_id", value: request.subscriptionId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fullSubscriptionGroupResponseSchema },
        errorFactory: SubscriptionGroups.FindSubscriptionGroupError,
      },
      options,
    );
  }

  listSubscriptionGroups(
    request: SubscriptionGroups.ListSubscriptionGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSubscriptionGroupsResponse, ResponseError> {
    return this.#rawClient.execute<ListSubscriptionGroupsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/subscription_groups.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 20) },
          {
            name: "include",
            value: request.include,
            schema: s.optional(s.array(s.lazy(() => subscriptionGroupsListIncludeSchema))),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSubscriptionGroupsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  readSubscriptionGroup(
    request: SubscriptionGroups.ReadSubscriptionGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<FullSubscriptionGroupResponse, ResponseError> {
    return this.#rawClient.execute<FullSubscriptionGroupResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/subscription_groups/{uid}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "uid", value: request.uid, schema: s.string() }],
        query: [
          {
            name: "include",
            value: request.include,
            schema: s.optional(s.array(s.lazy(() => subscriptionGroupIncludeSchema))),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fullSubscriptionGroupResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  removeSubscriptionFromGroup(
    request: SubscriptionGroups.RemoveSubscriptionFromGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SubscriptionGroups.RemoveSubscriptionFromGroupError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.production("/subscriptions/{subscription_id}/group.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SubscriptionGroups.RemoveSubscriptionFromGroupError,
      },
      options,
    );
  }

  signupWithSubscriptionGroup(
    request: SubscriptionGroups.SignupWithSubscriptionGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionGroupSignupResponse, SubscriptionGroups.SignupWithSubscriptionGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/subscription_groups/signup.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => subscriptionGroupSignupRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: subscriptionGroupSignupResponseSchema },
        errorFactory: SubscriptionGroups.SignupWithSubscriptionGroupError,
      },
      options,
    );
  }

  updateSubscriptionGroupMembers(
    request: SubscriptionGroups.UpdateSubscriptionGroupMembersRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionGroupResponse, SubscriptionGroups.UpdateSubscriptionGroupMembersError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production("/subscription_groups/{uid}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "uid", value: request.uid, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateSubscriptionGroupRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: subscriptionGroupResponseSchema },
        errorFactory: SubscriptionGroups.UpdateSubscriptionGroupMembersError,
      },
      options,
    );
  }
}

export namespace SubscriptionGroups {
  export type AddSubscriptionToGroupRequest = {
    subscriptionId: number;
    body?: AddSubscriptionToAGroup;
  };

  export type CreateSubscriptionGroupRequestParams = {
    body?: CreateSubscriptionGroupRequest;
  };

  export class CreateSubscriptionGroupError extends ResponseError<
    Declared<"subscriptionGroupCreateErrorResponse1", SubscriptionGroupCreateErrorResponse1>
  > {
    static readonly errors: ErrorDecoders<CreateSubscriptionGroupError> = [
      {
        on: 422,
        kind: "subscriptionGroupCreateErrorResponse1",
        decode: { kind: "json", schema: subscriptionGroupCreateErrorResponse1Schema },
      },
    ];
  }

  export type DeleteSubscriptionGroupRequest = {
    uid: string;
  };

  export class DeleteSubscriptionGroupError extends ResponseError<Declared<"error404", undefined>> {
    static readonly errors: ErrorDecoders<DeleteSubscriptionGroupError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type FindSubscriptionGroupRequest = {
    subscriptionId: string;
  };

  export class FindSubscriptionGroupError extends ResponseError<Declared<"error404", undefined>> {
    static readonly errors: ErrorDecoders<FindSubscriptionGroupError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListSubscriptionGroupsRequest = {
    page?: number;
    perPage?: number;
    include?: SubscriptionGroupsListInclude[];
  };

  export type ReadSubscriptionGroupRequest = {
    uid: string;
    include?: SubscriptionGroupInclude[];
  };

  export type RemoveSubscriptionFromGroupRequest = {
    subscriptionId: number;
  };

  export class RemoveSubscriptionFromGroupError extends ResponseError<
    Declared<"error404", undefined> | Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<RemoveSubscriptionFromGroupError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type SignupWithSubscriptionGroupRequest = {
    body?: SubscriptionGroupSignupRequest;
  };

  export class SignupWithSubscriptionGroupError extends ResponseError<
    Declared<"subscriptionGroupSignupErrorResponse1", SubscriptionGroupSignupErrorResponse1>
  > {
    static readonly errors: ErrorDecoders<SignupWithSubscriptionGroupError> = [
      {
        on: 422,
        kind: "subscriptionGroupSignupErrorResponse1",
        decode: { kind: "json", schema: subscriptionGroupSignupErrorResponse1Schema },
      },
    ];
  }

  export type UpdateSubscriptionGroupMembersRequest = {
    uid: string;
    body?: UpdateSubscriptionGroupRequest;
  };

  export class UpdateSubscriptionGroupMembersError extends ResponseError<
    Declared<"subscriptionGroupUpdateErrorResponse1", SubscriptionGroupUpdateErrorResponse1>
  > {
    static readonly errors: ErrorDecoders<UpdateSubscriptionGroupMembersError> = [
      {
        on: 422,
        kind: "subscriptionGroupUpdateErrorResponse1",
        decode: { kind: "json", schema: subscriptionGroupUpdateErrorResponse1Schema },
      },
    ];
  }
}
