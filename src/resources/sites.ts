import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { CleanupScope, cleanupScopeSchema } from "../models/cleanup-scope.js";
import {
  listPublicKeysResponseSchema,
  type ListPublicKeysResponse,
} from "../models/list-public-keys-response.js";
import { siteResponseSchema, type SiteResponse } from "../models/site-response.js";
import type { Servers } from "../servers.js";

export class Sites {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  clearSite(request: Sites.ClearSiteRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "POST",
        url: this.#servers.production("/sites/clear_data.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [
          {
            name: "cleanup_scope",
            value: request.cleanupScope,
            schema: s.defaulted(cleanupScopeSchema, CleanupScope.All),
          },
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

  listChargifyJsPublicKeys(
    request: Sites.ListChargifyJsPublicKeysRequest,
    options?: RequestOptions,
  ): ApiPromise<ListPublicKeysResponse, ResponseError> {
    return this.#rawClient.execute<ListPublicKeysResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/chargify_js_keys.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 20) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listPublicKeysResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  readSite(options?: RequestOptions): ApiPromise<SiteResponse, ResponseError> {
    return this.#rawClient.execute<SiteResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/site.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: siteResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Sites {
  export type ClearSiteRequest = {
    cleanupScope?: CleanupScope;
  };

  export type ListChargifyJsPublicKeysRequest = {
    page?: number;
    perPage?: number;
  };
}
