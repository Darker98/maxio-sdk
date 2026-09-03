import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreditType = {
  Full: "full",
  Prorated: "prorated",
  None: "none",
} as const;
export type CreditType = (typeof CreditType)[keyof typeof CreditType] | (string & {});

export const creditTypeSchema: EnumSchema<CreditType> = s.enumOf<CreditType>(CreditType);
