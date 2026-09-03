import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { createOfferRequestSchema, type CreateOfferRequest } from "../models/create-offer-request.js";
import {
  errorArrayMapResponse1Schema,
  type ErrorArrayMapResponse1,
} from "../models/error-array-map-response1.js";
import { errorListResponse1Schema, type ErrorListResponse1 } from "../models/error-list-response1.js";
import { listOffersResponseSchema, type ListOffersResponse } from "../models/list-offers-response.js";
import { offerResponseSchema, type OfferResponse } from "../models/offer-response.js";
import type { Servers } from "../servers.js";

export class Offers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  archiveOffer(
    request: Offers.ArchiveOfferRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.production("/offers/{offer_id}/archive.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "offer_id", value: request.offerId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createOffer(
    request: Offers.CreateOfferRequestParams,
    options?: RequestOptions,
  ): ApiPromise<OfferResponse, Offers.CreateOfferError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/offers.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createOfferRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: offerResponseSchema },
        errorFactory: Offers.CreateOfferError,
      },
      options,
    );
  }

  listOffers(
    request: Offers.ListOffersRequest,
    options?: RequestOptions,
  ): ApiPromise<ListOffersResponse, Offers.ListOffersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.production("/offers.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 20) },
          { name: "include_archived", value: request.includeArchived, schema: s.optional(s.boolean()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listOffersResponseSchema },
        errorFactory: Offers.ListOffersError,
      },
      options,
    );
  }

  readOffer(
    request: Offers.ReadOfferRequest,
    options?: RequestOptions,
  ): ApiPromise<OfferResponse, ResponseError> {
    return this.#rawClient.execute<OfferResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/offers/{offer_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "offer_id", value: request.offerId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: offerResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  unarchiveOffer(
    request: Offers.UnarchiveOfferRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.production("/offers/{offer_id}/unarchive.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "offer_id", value: request.offerId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Offers {
  export type ArchiveOfferRequest = {
    offerId: number;
  };

  export type CreateOfferRequestParams = {
    body?: CreateOfferRequest;
  };

  export class CreateOfferError extends ResponseError<
    Declared<"errorArrayMapResponse1", ErrorArrayMapResponse1>
  > {
    static readonly errors: ErrorDecoders<CreateOfferError> = [
      {
        on: 422,
        kind: "errorArrayMapResponse1",
        decode: { kind: "json", schema: errorArrayMapResponse1Schema },
      },
    ];
  }

  export type ListOffersRequest = {
    page?: number;
    perPage?: number;
    includeArchived?: boolean;
  };

  export class ListOffersError extends ResponseError<Declared<"errorListResponse1", ErrorListResponse1>> {
    static readonly errors: ErrorDecoders<ListOffersError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type ReadOfferRequest = {
    offerId: number;
  };

  export type UnarchiveOfferRequest = {
    offerId: number;
  };
}
