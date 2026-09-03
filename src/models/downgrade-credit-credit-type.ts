import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DowngradeCreditCreditType = {
  Full: "full",
  Prorated: "prorated",
  None: "none",
} as const;
export type DowngradeCreditCreditType =
  | (typeof DowngradeCreditCreditType)[keyof typeof DowngradeCreditCreditType]
  | (string & {});

export const downgradeCreditCreditTypeSchema: EnumSchema<DowngradeCreditCreditType> =
  s.enumOf<DowngradeCreditCreditType>(DowngradeCreditCreditType);
