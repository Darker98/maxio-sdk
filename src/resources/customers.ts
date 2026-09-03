import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { basicDateFieldSchema, type BasicDateField } from "../models/basic-date-field.js";
import {
  createCustomerRequestSchema,
  type CreateCustomerRequest,
} from "../models/create-customer-request.js";
import {
  customerErrorResponse1Schema,
  type CustomerErrorResponse1,
} from "../models/customer-error-response1.js";
import { customerResponseSchema, type CustomerResponse } from "../models/customer-response.js";
import { sortingDirectionSchema, type SortingDirection } from "../models/sorting-direction.js";
import { subscriptionResponseSchema, type SubscriptionResponse } from "../models/subscription-response.js";
import {
  updateCustomerRequestSchema,
  type UpdateCustomerRequest,
} from "../models/update-customer-request.js";
import type { Servers } from "../servers.js";

export class Customers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createCustomer(
    request: Customers.CreateCustomerRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CustomerResponse, Customers.CreateCustomerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/customers.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createCustomerRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: customerResponseSchema },
        errorFactory: Customers.CreateCustomerError,
      },
      options,
    );
  }

  deleteCustomer(
    request: Customers.DeleteCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.production("/customers/{id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listCustomerSubscriptions(
    request: Customers.ListCustomerSubscriptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponse[], ResponseError> {
    return this.#rawClient.execute<SubscriptionResponse[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/customers/{customer_id}/subscriptions.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "customer_id", value: request.customerId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => subscriptionResponseSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listCustomers(
    request: Customers.ListCustomersRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerResponse[], ResponseError> {
    return this.#rawClient.execute<CustomerResponse[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/customers.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [
          {
            name: "direction",
            value: request.direction,
            schema: s.optional(s.lazy(() => sortingDirectionSchema)),
          },
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 50) },
          {
            name: "date_field",
            value: request.dateField,
            schema: s.optional(s.lazy(() => basicDateFieldSchema)),
          },
          { name: "start_date", value: request.startDate, schema: s.optional(s.string()) },
          { name: "end_date", value: request.endDate, schema: s.optional(s.string()) },
          { name: "start_datetime", value: request.startDatetime, schema: s.optional(s.string()) },
          { name: "end_datetime", value: request.endDatetime, schema: s.optional(s.string()) },
          { name: "q", value: request.q, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => customerResponseSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  readCustomer(
    request: Customers.ReadCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerResponse, ResponseError> {
    return this.#rawClient.execute<CustomerResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/customers/{id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customerResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  readCustomerByReference(
    request: Customers.ReadCustomerByReferenceRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerResponse, ResponseError> {
    return this.#rawClient.execute<CustomerResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/customers/lookup.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [{ name: "reference", value: request.reference, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customerResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateCustomer(
    request: Customers.UpdateCustomerRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CustomerResponse, Customers.UpdateCustomerError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production("/customers/{id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateCustomerRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: customerResponseSchema },
        errorFactory: Customers.UpdateCustomerError,
      },
      options,
    );
  }
}

export namespace Customers {
  export type CreateCustomerRequestParams = {
    body?: CreateCustomerRequest;
  };

  export class CreateCustomerError extends ResponseError<
    Declared<"customerErrorResponse1", CustomerErrorResponse1>
  > {
    static readonly errors: ErrorDecoders<CreateCustomerError> = [
      {
        on: 422,
        kind: "customerErrorResponse1",
        decode: { kind: "json", schema: customerErrorResponse1Schema },
      },
    ];
  }

  export type DeleteCustomerRequest = {
    id: number;
  };

  export type ListCustomerSubscriptionsRequest = {
    customerId: number;
  };

  export type ListCustomersRequest = {
    direction?: SortingDirection;
    page?: number;
    perPage?: number;
    dateField?: BasicDateField;
    startDate?: string;
    endDate?: string;
    startDatetime?: string;
    endDatetime?: string;
    q?: string;
  };

  export type ReadCustomerRequest = {
    id: number;
  };

  export type ReadCustomerByReferenceRequest = {
    reference: string;
  };

  export type UpdateCustomerRequestParams = {
    id: number;
    body?: UpdateCustomerRequest;
  };

  export class UpdateCustomerError extends ResponseError<
    Declared<"error404", undefined> | Declared<"customerErrorResponse1", CustomerErrorResponse1>
  > {
    static readonly errors: ErrorDecoders<UpdateCustomerError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      {
        on: 422,
        kind: "customerErrorResponse1",
        decode: { kind: "json", schema: customerErrorResponse1Schema },
      },
    ];
  }
}
