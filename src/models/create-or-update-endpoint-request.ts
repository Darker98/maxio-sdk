import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { createOrUpdateEndpointSchema, type CreateOrUpdateEndpoint } from "./create-or-update-endpoint.js";

export type CreateOrUpdateEndpointRequest = {
  endpoint: CreateOrUpdateEndpoint;
};

export const createOrUpdateEndpointRequestSchema: Schema<CreateOrUpdateEndpointRequest> =
  s.object<CreateOrUpdateEndpointRequest>({
    endpoint: createOrUpdateEndpointSchema,
  });
