import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { autoInviteSchema, type AutoInvite } from "../models/auto-invite.js";
import { customerResponseSchema, type CustomerResponse } from "../models/customer-response.js";
import { errorListResponse1Schema, type ErrorListResponse1 } from "../models/error-list-response1.js";
import { portalManagementLinkSchema, type PortalManagementLink } from "../models/portal-management-link.js";
import { resentInvitationSchema, type ResentInvitation } from "../models/resent-invitation.js";
import { revokedInvitationSchema, type RevokedInvitation } from "../models/revoked-invitation.js";
import {
  tooManyManagementLinkRequestsError1Schema,
  type TooManyManagementLinkRequestsError1,
} from "../models/too-many-management-link-requests-error1.js";
import type { Servers } from "../servers.js";

export class BillingPortal {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  enableBillingPortalForCustomer(
    request: BillingPortal.EnableBillingPortalForCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerResponse, BillingPortal.EnableBillingPortalForCustomerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/portal/customers/{customer_id}/enable.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "customer_id", value: request.customerId, schema: s.number() }],
        query: [
          {
            name: "auto_invite",
            value: request.autoInvite,
            schema: s.optional(s.lazy(() => autoInviteSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customerResponseSchema },
        errorFactory: BillingPortal.EnableBillingPortalForCustomerError,
      },
      options,
    );
  }

  readBillingPortalLink(
    request: BillingPortal.ReadBillingPortalLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<PortalManagementLink, BillingPortal.ReadBillingPortalLinkError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.production("/portal/customers/{customer_id}/management_link.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "customer_id", value: request.customerId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: portalManagementLinkSchema },
        errorFactory: BillingPortal.ReadBillingPortalLinkError,
      },
      options,
    );
  }

  resendBillingPortalInvitation(
    request: BillingPortal.ResendBillingPortalInvitationRequest,
    options?: RequestOptions,
  ): ApiPromise<ResentInvitation, BillingPortal.ResendBillingPortalInvitationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/portal/customers/{customer_id}/invitations/invite.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "customer_id", value: request.customerId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: resentInvitationSchema },
        errorFactory: BillingPortal.ResendBillingPortalInvitationError,
      },
      options,
    );
  }

  revokeBillingPortalAccess(
    request: BillingPortal.RevokeBillingPortalAccessRequest,
    options?: RequestOptions,
  ): ApiPromise<RevokedInvitation, ResponseError> {
    return this.#rawClient.execute<RevokedInvitation, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.production("/portal/customers/{customer_id}/invitations/revoke.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "customer_id", value: request.customerId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: revokedInvitationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace BillingPortal {
  export type EnableBillingPortalForCustomerRequest = {
    customerId: number;
    autoInvite?: AutoInvite;
  };

  export class EnableBillingPortalForCustomerError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<EnableBillingPortalForCustomerError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type ReadBillingPortalLinkRequest = {
    customerId: number;
  };

  export class ReadBillingPortalLinkError extends ResponseError<
    | Declared<"errorListResponse1", ErrorListResponse1>
    | Declared<"tooManyManagementLinkRequestsError1", TooManyManagementLinkRequestsError1>
  > {
    static readonly errors: ErrorDecoders<ReadBillingPortalLinkError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
      {
        on: 429,
        kind: "tooManyManagementLinkRequestsError1",
        decode: { kind: "json", schema: tooManyManagementLinkRequestsError1Schema },
      },
    ];
  }

  export type ResendBillingPortalInvitationRequest = {
    customerId: number;
  };

  export class ResendBillingPortalInvitationError extends ResponseError<
    Declared<"error404", undefined> | Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<ResendBillingPortalInvitationError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type RevokeBillingPortalAccessRequest = {
    customerId: number;
  };
}
