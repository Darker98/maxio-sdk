import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import {
  maxioGatewayOAuthAccessTokenSchema,
  type MaxioGatewayOAuthAccessToken,
} from "../models/maxio-gateway-oauth-access-token.js";
import {
  maxioGatewayOAuthErrorSchema,
  type MaxioGatewayOAuthError,
} from "../models/maxio-gateway-oauth-error.js";
import {
  maxioGatewayOAuthTokenRequestSchema,
  type MaxioGatewayOAuthTokenRequest,
} from "../models/maxio-gateway-oauth-token-request.js";
import type { Servers } from "../servers.js";

export class MaxioGateway {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  requestAccessToken(
    request: MaxioGateway.RequestAccessTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<MaxioGatewayOAuthAccessToken, MaxioGateway.RequestAccessTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.oauth("/oauth/token"),
        auth: noneAuth,
        body: { kind: "json", value: request.body, schema: maxioGatewayOAuthTokenRequestSchema },
      },
      {
        success: { kind: "json", schema: maxioGatewayOAuthAccessTokenSchema },
        errorFactory: MaxioGateway.RequestAccessTokenError,
      },
      options,
    );
  }
}

export namespace MaxioGateway {
  export type RequestAccessTokenRequest = {
    body: MaxioGatewayOAuthTokenRequest;
  };

  export class RequestAccessTokenError extends ResponseError<
    | Declared<"maxioGatewayOAuthError", MaxioGatewayOAuthError>
    | Declared<"maxioGatewayOAuthError2", MaxioGatewayOAuthError>
  > {
    static readonly errors: ErrorDecoders<RequestAccessTokenError> = [
      {
        on: 400,
        kind: "maxioGatewayOAuthError",
        decode: { kind: "json", schema: maxioGatewayOAuthErrorSchema },
      },
      {
        on: 401,
        kind: "maxioGatewayOAuthError2",
        decode: { kind: "json", schema: maxioGatewayOAuthErrorSchema },
      },
    ];
  }
}
