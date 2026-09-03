import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TrialType = {
  NoObligation: "no_obligation",
  PaymentExpected: "payment_expected",
} as const;
export type TrialType = (typeof TrialType)[keyof typeof TrialType] | (string & {});

export const trialTypeSchema: EnumSchema<TrialType> = s.enumOf<TrialType>(TrialType);
