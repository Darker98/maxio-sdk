import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Breakouts = {
  planAmountInCents?: number;
  planAmountFormatted?: string;
  usageAmountInCents?: number;
  usageAmountFormatted?: string;
};

export const breakoutsSchema: Schema<Breakouts> = s.object<Breakouts>({
  planAmountInCents: s.optional(s.number()),
  planAmountFormatted: s.optional(s.string()),
  usageAmountInCents: s.optional(s.number()),
  usageAmountFormatted: s.optional(s.string()),
  _keysMap: {
    planAmountInCents: "plan_amount_in_cents",
    planAmountFormatted: "plan_amount_formatted",
    usageAmountInCents: "usage_amount_in_cents",
    usageAmountFormatted: "usage_amount_formatted",
  },
});
