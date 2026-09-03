import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CleanupScope = {
  All: "all",
  Customers: "customers",
} as const;
export type CleanupScope = (typeof CleanupScope)[keyof typeof CleanupScope] | (string & {});

export const cleanupScopeSchema: EnumSchema<CleanupScope> = s.enumOf<CleanupScope>(CleanupScope);
