import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metafieldInputSchema, type MetafieldInput } from "./metafield-input.js";
import { metafieldScopeSchema, type MetafieldScope } from "./metafield-scope.js";

export type CreateMetafield = {
  name?: string;
  scope?: MetafieldScope;
  inputType?: MetafieldInput;
  enum?: string[];
};

export const createMetafieldSchema: Schema<CreateMetafield> = s.object<CreateMetafield>({
  name: s.optional(s.string()),
  scope: s.optional(s.lazy(() => metafieldScopeSchema)),
  inputType: s.optional(s.lazy(() => metafieldInputSchema)),
  enum: s.optional(s.array(s.string())),
  _keysMap: {
    inputType: "input_type",
  },
});
