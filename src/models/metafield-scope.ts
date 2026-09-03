import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { includeOptionSchema, type IncludeOption } from "./include-option.js";

export type MetafieldScope = {
  csv?: IncludeOption;
  invoices?: IncludeOption;
  statements?: IncludeOption;
  portal?: IncludeOption;
  publicShow?: IncludeOption;
  publicEdit?: IncludeOption;
  hosted?: string[];
};

export const metafieldScopeSchema: Schema<MetafieldScope> = s.object<MetafieldScope>({
  csv: s.optional(s.lazy(() => includeOptionSchema)),
  invoices: s.optional(s.lazy(() => includeOptionSchema)),
  statements: s.optional(s.lazy(() => includeOptionSchema)),
  portal: s.optional(s.lazy(() => includeOptionSchema)),
  publicShow: s.optional(s.lazy(() => includeOptionSchema)),
  publicEdit: s.optional(s.lazy(() => includeOptionSchema)),
  hosted: s.optional(s.array(s.string())),
  _keysMap: {
    publicShow: "public_show",
    publicEdit: "public_edit",
  },
});
