import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { basicDateFieldSchema, type BasicDateField } from "../models/basic-date-field.js";
import { componentResponseSchema, type ComponentResponse } from "../models/component-response.js";
import { componentSchema, type Component } from "../models/component.js";
import { createEbbComponentSchema, type CreateEbbComponent } from "../models/create-ebb-component.js";
import {
  createMeteredComponentSchema,
  type CreateMeteredComponent,
} from "../models/create-metered-component.js";
import { createOnOffComponentSchema, type CreateOnOffComponent } from "../models/create-on-off-component.js";
import {
  createPrepaidComponentSchema,
  type CreatePrepaidComponent,
} from "../models/create-prepaid-component.js";
import {
  createQuantityBasedComponentSchema,
  type CreateQuantityBasedComponent,
} from "../models/create-quantity-based-component.js";
import { errorListResponse1Schema, type ErrorListResponse1 } from "../models/error-list-response1.js";
import { listComponentsFilterSchema, type ListComponentsFilter } from "../models/list-components-filter.js";
import {
  updateComponentRequestSchema,
  type UpdateComponentRequest,
} from "../models/update-component-request.js";
import type { Servers } from "../servers.js";

export class Components {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  archiveComponent(
    request: Components.ArchiveComponentRequest,
    options?: RequestOptions,
  ): ApiPromise<Component, Components.ArchiveComponentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.production("/product_families/{product_family_id}/components/{component_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "product_family_id", value: request.productFamilyId, schema: s.number() },
          { name: "component_id", value: request.componentId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: componentSchema },
        errorFactory: Components.ArchiveComponentError,
      },
      options,
    );
  }

  createEventBasedComponent(
    request: Components.CreateEventBasedComponentRequest,
    options?: RequestOptions,
  ): ApiPromise<ComponentResponse, Components.CreateEventBasedComponentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/product_families/{product_family_id}/event_based_components.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "product_family_id", value: request.productFamilyId, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createEbbComponentSchema)),
        },
      },
      {
        success: { kind: "json", schema: componentResponseSchema },
        errorFactory: Components.CreateEventBasedComponentError,
      },
      options,
    );
  }

  createMeteredComponent(
    request: Components.CreateMeteredComponentRequest,
    options?: RequestOptions,
  ): ApiPromise<ComponentResponse, Components.CreateMeteredComponentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/product_families/{product_family_id}/metered_components.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "product_family_id", value: request.productFamilyId, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createMeteredComponentSchema)),
        },
      },
      {
        success: { kind: "json", schema: componentResponseSchema },
        errorFactory: Components.CreateMeteredComponentError,
      },
      options,
    );
  }

  createOnOffComponent(
    request: Components.CreateOnOffComponentRequest,
    options?: RequestOptions,
  ): ApiPromise<ComponentResponse, Components.CreateOnOffComponentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/product_families/{product_family_id}/on_off_components.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "product_family_id", value: request.productFamilyId, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createOnOffComponentSchema)),
        },
      },
      {
        success: { kind: "json", schema: componentResponseSchema },
        errorFactory: Components.CreateOnOffComponentError,
      },
      options,
    );
  }

  createPrepaidUsageComponent(
    request: Components.CreatePrepaidUsageComponentRequest,
    options?: RequestOptions,
  ): ApiPromise<ComponentResponse, Components.CreatePrepaidUsageComponentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/product_families/{product_family_id}/prepaid_usage_components.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "product_family_id", value: request.productFamilyId, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createPrepaidComponentSchema)),
        },
      },
      {
        success: { kind: "json", schema: componentResponseSchema },
        errorFactory: Components.CreatePrepaidUsageComponentError,
      },
      options,
    );
  }

  createQuantityBasedComponent(
    request: Components.CreateQuantityBasedComponentRequest,
    options?: RequestOptions,
  ): ApiPromise<ComponentResponse, Components.CreateQuantityBasedComponentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/product_families/{product_family_id}/quantity_based_components.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "product_family_id", value: request.productFamilyId, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createQuantityBasedComponentSchema)),
        },
      },
      {
        success: { kind: "json", schema: componentResponseSchema },
        errorFactory: Components.CreateQuantityBasedComponentError,
      },
      options,
    );
  }

  findComponent(
    request: Components.FindComponentRequest,
    options?: RequestOptions,
  ): ApiPromise<ComponentResponse, ResponseError> {
    return this.#rawClient.execute<ComponentResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/components/lookup.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [{ name: "handle", value: request.handle, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: componentResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listComponents(
    request: Components.ListComponentsRequest,
    options?: RequestOptions,
  ): ApiPromise<ComponentResponse[], ResponseError> {
    return this.#rawClient.execute<ComponentResponse[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/components.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [
          {
            name: "date_field",
            value: request.dateField,
            schema: s.optional(s.lazy(() => basicDateFieldSchema)),
          },
          { name: "start_date", value: request.startDate, schema: s.optional(s.string()) },
          { name: "end_date", value: request.endDate, schema: s.optional(s.string()) },
          { name: "start_datetime", value: request.startDatetime, schema: s.optional(s.string()) },
          { name: "end_datetime", value: request.endDatetime, schema: s.optional(s.string()) },
          { name: "include_archived", value: request.includeArchived, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 20) },
          {
            name: "filter",
            value: request.filter,
            schema: s.optional(s.lazy(() => listComponentsFilterSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => componentResponseSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listComponentsForProductFamily(
    request: Components.ListComponentsForProductFamilyRequest,
    options?: RequestOptions,
  ): ApiPromise<ComponentResponse[], ResponseError> {
    return this.#rawClient.execute<ComponentResponse[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/product_families/{product_family_id}/components.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "product_family_id", value: request.productFamilyId, schema: s.number() }],
        query: [
          { name: "include_archived", value: request.includeArchived, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 20) },
          {
            name: "filter",
            value: request.filter,
            schema: s.optional(s.lazy(() => listComponentsFilterSchema)),
          },
          {
            name: "date_field",
            value: request.dateField,
            schema: s.optional(s.lazy(() => basicDateFieldSchema)),
          },
          { name: "end_date", value: request.endDate, schema: s.optional(s.string()) },
          { name: "end_datetime", value: request.endDatetime, schema: s.optional(s.string()) },
          { name: "start_date", value: request.startDate, schema: s.optional(s.string()) },
          { name: "start_datetime", value: request.startDatetime, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => componentResponseSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  readComponent(
    request: Components.ReadComponentRequest,
    options?: RequestOptions,
  ): ApiPromise<ComponentResponse, ResponseError> {
    return this.#rawClient.execute<ComponentResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/product_families/{product_family_id}/components/{component_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "product_family_id", value: request.productFamilyId, schema: s.number() },
          { name: "component_id", value: request.componentId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: componentResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateComponent(
    request: Components.UpdateComponentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ComponentResponse, Components.UpdateComponentError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production("/components/{component_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "component_id", value: request.componentId, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateComponentRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: componentResponseSchema },
        errorFactory: Components.UpdateComponentError,
      },
      options,
    );
  }

  updateProductFamilyComponent(
    request: Components.UpdateProductFamilyComponentRequest,
    options?: RequestOptions,
  ): ApiPromise<ComponentResponse, Components.UpdateProductFamilyComponentError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production("/product_families/{product_family_id}/components/{component_id}.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "product_family_id", value: request.productFamilyId, schema: s.number() },
          { name: "component_id", value: request.componentId, schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateComponentRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: componentResponseSchema },
        errorFactory: Components.UpdateProductFamilyComponentError,
      },
      options,
    );
  }
}

export namespace Components {
  export type ArchiveComponentRequest = {
    productFamilyId: number;
    componentId: string;
  };

  export class ArchiveComponentError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<ArchiveComponentError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type CreateEventBasedComponentRequest = {
    productFamilyId: string;
    body?: CreateEbbComponent;
  };

  export class CreateEventBasedComponentError extends ResponseError<
    Declared<"error404", undefined> | Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<CreateEventBasedComponentError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type CreateMeteredComponentRequest = {
    productFamilyId: string;
    body?: CreateMeteredComponent;
  };

  export class CreateMeteredComponentError extends ResponseError<
    Declared<"error404", undefined> | Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<CreateMeteredComponentError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type CreateOnOffComponentRequest = {
    productFamilyId: string;
    body?: CreateOnOffComponent;
  };

  export class CreateOnOffComponentError extends ResponseError<
    Declared<"error404", undefined> | Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<CreateOnOffComponentError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type CreatePrepaidUsageComponentRequest = {
    productFamilyId: string;
    body?: CreatePrepaidComponent;
  };

  export class CreatePrepaidUsageComponentError extends ResponseError<
    Declared<"error404", undefined> | Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<CreatePrepaidUsageComponentError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type CreateQuantityBasedComponentRequest = {
    productFamilyId: string;
    body?: CreateQuantityBasedComponent;
  };

  export class CreateQuantityBasedComponentError extends ResponseError<
    Declared<"error404", undefined> | Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<CreateQuantityBasedComponentError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type FindComponentRequest = {
    handle: string;
  };

  export type ListComponentsRequest = {
    dateField?: BasicDateField;
    startDate?: string;
    endDate?: string;
    startDatetime?: string;
    endDatetime?: string;
    includeArchived?: boolean;
    page?: number;
    perPage?: number;
    filter?: ListComponentsFilter;
  };

  export type ListComponentsForProductFamilyRequest = {
    productFamilyId: number;
    includeArchived?: boolean;
    page?: number;
    perPage?: number;
    filter?: ListComponentsFilter;
    dateField?: BasicDateField;
    endDate?: string;
    endDatetime?: string;
    startDate?: string;
    startDatetime?: string;
  };

  export type ReadComponentRequest = {
    productFamilyId: number;
    componentId: string;
  };

  export type UpdateComponentRequestParams = {
    componentId: string;
    body?: UpdateComponentRequest;
  };

  export class UpdateComponentError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<UpdateComponentError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }

  export type UpdateProductFamilyComponentRequest = {
    productFamilyId: number;
    componentId: string;
    body?: UpdateComponentRequest;
  };

  export class UpdateProductFamilyComponentError extends ResponseError<
    Declared<"errorListResponse1", ErrorListResponse1>
  > {
    static readonly errors: ErrorDecoders<UpdateProductFamilyComponentError> = [
      { on: 422, kind: "errorListResponse1", decode: { kind: "json", schema: errorListResponse1Schema } },
    ];
  }
}
