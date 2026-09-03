import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReactivationCharge = {
  Prorated: "prorated",
  Immediate: "immediate",
  Delayed: "delayed",
} as const;
export type ReactivationCharge = (typeof ReactivationCharge)[keyof typeof ReactivationCharge] | (string & {});

export const reactivationChargeSchema: EnumSchema<ReactivationCharge> =
  s.enumOf<ReactivationCharge>(ReactivationCharge);
