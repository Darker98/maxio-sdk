import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResumptionCharge = {
  Prorated: "prorated",
  Immediate: "immediate",
  Delayed: "delayed",
} as const;
export type ResumptionCharge = (typeof ResumptionCharge)[keyof typeof ResumptionCharge] | (string & {});

export const resumptionChargeSchema: EnumSchema<ResumptionCharge> =
  s.enumOf<ResumptionCharge>(ResumptionCharge);
