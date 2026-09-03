import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { basicDateFieldSchema, type BasicDateField } from "../models/basic-date-field.js";
import {
  createMetadataRequestSchema,
  type CreateMetadataRequest,
} from "../models/create-metadata-request.js";
import {
  createMetafieldsRequestSchema,
  type CreateMetafieldsRequest,
} from "../models/create-metafields-request.js";
import {
  listMetafieldsResponseSchema,
  type ListMetafieldsResponse,
} from "../models/list-metafields-response.js";
import { metadataSchema, type Metadata } from "../models/metadata.js";
import { metafieldSchema, type Metafield } from "../models/metafield.js";
import { paginatedMetadataSchema, type PaginatedMetadata } from "../models/paginated-metadata.js";
import { resourceTypeSchema, type ResourceType } from "../models/resource-type.js";
import { singleErrorResponse1Schema, type SingleErrorResponse1 } from "../models/single-error-response1.js";
import { sortingDirectionSchema, type SortingDirection } from "../models/sorting-direction.js";
import {
  updateMetadataRequestSchema,
  type UpdateMetadataRequest,
} from "../models/update-metadata-request.js";
import {
  updateMetafieldsRequestSchema,
  type UpdateMetafieldsRequest,
} from "../models/update-metafields-request.js";
import type { Servers } from "../servers.js";

export class CustomFields {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createMetadata(
    request: CustomFields.CreateMetadataRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Metadata[], CustomFields.CreateMetadataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/{resource_type}/{resource_id}/metadata.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "resource_type", value: request.resourceType, schema: resourceTypeSchema },
          { name: "resource_id", value: request.resourceId, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createMetadataRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => metadataSchema)) },
        errorFactory: CustomFields.CreateMetadataError,
      },
      options,
    );
  }

  createMetafields(
    request: CustomFields.CreateMetafieldsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Metafield[], CustomFields.CreateMetafieldsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.production("/{resource_type}/metafields.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "resource_type", value: request.resourceType, schema: resourceTypeSchema }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createMetafieldsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => metafieldSchema)) },
        errorFactory: CustomFields.CreateMetafieldsError,
      },
      options,
    );
  }

  deleteMetadata(
    request: CustomFields.DeleteMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CustomFields.DeleteMetadataError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.production("/{resource_type}/{resource_id}/metadata.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "resource_type", value: request.resourceType, schema: resourceTypeSchema },
          { name: "resource_id", value: request.resourceId, schema: s.number() },
        ],
        query: [
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "names", value: request.names, schema: s.optional(s.array(s.string())) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CustomFields.DeleteMetadataError,
      },
      options,
    );
  }

  deleteMetafield(
    request: CustomFields.DeleteMetafieldRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CustomFields.DeleteMetafieldError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.production("/{resource_type}/metafields.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "resource_type", value: request.resourceType, schema: resourceTypeSchema }],
        query: [{ name: "name", value: request.name, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CustomFields.DeleteMetafieldError,
      },
      options,
    );
  }

  listMetadata(
    request: CustomFields.ListMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedMetadata, ResponseError> {
    return this.#rawClient.execute<PaginatedMetadata, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/{resource_type}/{resource_id}/metadata.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "resource_type", value: request.resourceType, schema: resourceTypeSchema },
          { name: "resource_id", value: request.resourceId, schema: s.number() },
        ],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 20) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedMetadataSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listMetadataForResourceType(
    request: CustomFields.ListMetadataForResourceTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedMetadata, ResponseError> {
    return this.#rawClient.execute<PaginatedMetadata, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/{resource_type}/metadata.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "resource_type", value: request.resourceType, schema: resourceTypeSchema }],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 20) },
          {
            name: "date_field",
            value: request.dateField,
            schema: s.optional(s.lazy(() => basicDateFieldSchema)),
          },
          { name: "start_date", value: request.startDate, schema: s.optional(s.dateOnly()) },
          { name: "end_date", value: request.endDate, schema: s.optional(s.dateOnly()) },
          { name: "start_datetime", value: request.startDatetime, schema: s.optional(s.dateTime()) },
          { name: "end_datetime", value: request.endDatetime, schema: s.optional(s.dateTime()) },
          { name: "with_deleted", value: request.withDeleted, schema: s.optional(s.boolean()) },
          { name: "resource_ids", value: request.resourceIds, schema: s.optional(s.array(s.number())) },
          {
            name: "direction",
            value: request.direction,
            schema: s.optional(s.lazy(() => sortingDirectionSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedMetadataSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listMetafields(
    request: CustomFields.ListMetafieldsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListMetafieldsResponse, ResponseError> {
    return this.#rawClient.execute<ListMetafieldsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.production("/{resource_type}/metafields.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "resource_type", value: request.resourceType, schema: resourceTypeSchema }],
        query: [
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.defaulted(s.number(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 20) },
          {
            name: "direction",
            value: request.direction,
            schema: s.optional(s.lazy(() => sortingDirectionSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listMetafieldsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateMetadata(
    request: CustomFields.UpdateMetadataRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Metadata[], CustomFields.UpdateMetadataError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production("/{resource_type}/{resource_id}/metadata.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "resource_type", value: request.resourceType, schema: resourceTypeSchema },
          { name: "resource_id", value: request.resourceId, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateMetadataRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => metadataSchema)) },
        errorFactory: CustomFields.UpdateMetadataError,
      },
      options,
    );
  }

  updateMetafield(
    request: CustomFields.UpdateMetafieldRequest,
    options?: RequestOptions,
  ): ApiPromise<Metafield[], CustomFields.UpdateMetafieldError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.production("/{resource_type}/metafields.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "resource_type", value: request.resourceType, schema: resourceTypeSchema }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateMetafieldsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => metafieldSchema)) },
        errorFactory: CustomFields.UpdateMetafieldError,
      },
      options,
    );
  }
}

export namespace CustomFields {
  export type CreateMetadataRequestParams = {
    resourceType: ResourceType;
    resourceId: number;
    body?: CreateMetadataRequest;
  };

  export class CreateMetadataError extends ResponseError<
    Declared<"singleErrorResponse1", SingleErrorResponse1>
  > {
    static readonly errors: ErrorDecoders<CreateMetadataError> = [
      { on: 422, kind: "singleErrorResponse1", decode: { kind: "json", schema: singleErrorResponse1Schema } },
    ];
  }

  export type CreateMetafieldsRequestParams = {
    resourceType: ResourceType;
    body?: CreateMetafieldsRequest;
  };

  export class CreateMetafieldsError extends ResponseError<
    Declared<"singleErrorResponse1", SingleErrorResponse1>
  > {
    static readonly errors: ErrorDecoders<CreateMetafieldsError> = [
      { on: 422, kind: "singleErrorResponse1", decode: { kind: "json", schema: singleErrorResponse1Schema } },
    ];
  }

  export type DeleteMetadataRequest = {
    resourceType: ResourceType;
    resourceId: number;
    name?: string;
    names?: string[];
  };

  export class DeleteMetadataError extends ResponseError<Declared<"error404", undefined>> {
    static readonly errors: ErrorDecoders<DeleteMetadataError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DeleteMetafieldRequest = {
    resourceType: ResourceType;
    name?: string;
  };

  export class DeleteMetafieldError extends ResponseError<Declared<"error404", undefined>> {
    static readonly errors: ErrorDecoders<DeleteMetafieldError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListMetadataRequest = {
    resourceType: ResourceType;
    resourceId: number;
    page?: number;
    perPage?: number;
  };

  export type ListMetadataForResourceTypeRequest = {
    resourceType: ResourceType;
    page?: number;
    perPage?: number;
    dateField?: BasicDateField;
    startDate?: string;
    endDate?: string;
    startDatetime?: Date;
    endDatetime?: Date;
    withDeleted?: boolean;
    resourceIds?: number[];
    direction?: SortingDirection;
  };

  export type ListMetafieldsRequest = {
    resourceType: ResourceType;
    name?: string;
    page?: number;
    perPage?: number;
    direction?: SortingDirection;
  };

  export type UpdateMetadataRequestParams = {
    resourceType: ResourceType;
    resourceId: number;
    body?: UpdateMetadataRequest;
  };

  export class UpdateMetadataError extends ResponseError<
    Declared<"singleErrorResponse1", SingleErrorResponse1>
  > {
    static readonly errors: ErrorDecoders<UpdateMetadataError> = [
      { on: 422, kind: "singleErrorResponse1", decode: { kind: "json", schema: singleErrorResponse1Schema } },
    ];
  }

  export type UpdateMetafieldRequest = {
    resourceType: ResourceType;
    body?: UpdateMetafieldsRequest;
  };

  export class UpdateMetafieldError extends ResponseError<
    Declared<"singleErrorResponse1", SingleErrorResponse1>
  > {
    static readonly errors: ErrorDecoders<UpdateMetafieldError> = [
      { on: 422, kind: "singleErrorResponse1", decode: { kind: "json", schema: singleErrorResponse1Schema } },
    ];
  }
}
