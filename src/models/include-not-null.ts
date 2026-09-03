import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncludeNotNull = {
  NotNull: "not_null",
} as const;
export type IncludeNotNull = (typeof IncludeNotNull)[keyof typeof IncludeNotNull] | (string & {});

export const includeNotNullSchema: EnumSchema<IncludeNotNull> = s.enumOf<IncludeNotNull>(IncludeNotNull);
