import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TrialInterval = string | number;

export const trialIntervalSchema: Schema<TrialInterval> = s.of<TrialInterval>(
  s.union([s.string(), s.number()]),
);
