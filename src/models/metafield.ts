import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metafieldInputSchema, type MetafieldInput } from "./metafield-input.js";
import { metafieldScopeSchema, type MetafieldScope } from "./metafield-scope.js";
import { enumSchema, type Enum } from "./unions/enum.js";

export type Metafield = {
  id?: number;
  name?: string;
  scope?: MetafieldScope;
  dataCount?: number;
  inputType?: MetafieldInput;
  enum?: Enum | null;
};

export const metafieldSchema: Schema<Metafield> = s.object<Metafield>({
  id: s.optional(s.number()),
  name: s.optional(s.string()),
  scope: s.optional(s.lazy(() => metafieldScopeSchema)),
  dataCount: s.optional(s.number()),
  inputType: s.optional(s.lazy(() => metafieldInputSchema)),
  enum: s.optionalNullable(s.lazy(() => enumSchema)),
  _keysMap: {
    dataCount: "data_count",
    inputType: "input_type",
  },
});
