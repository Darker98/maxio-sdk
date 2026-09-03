import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CouponUsage = {
  id?: number;
  name?: string;
  signups?: number;
  savings?: number | null;
  savingsInCents?: number | null;
  revenue?: number | null;
  revenueInCents?: number;
};

export const couponUsageSchema: Schema<CouponUsage> = s.object<CouponUsage>({
  id: s.optional(s.number()),
  name: s.optional(s.string()),
  signups: s.optional(s.number()),
  savings: s.optionalNullable(s.number()),
  savingsInCents: s.optionalNullable(s.number()),
  revenue: s.optionalNullable(s.number()),
  revenueInCents: s.optional(s.number()),
  _keysMap: {
    savingsInCents: "savings_in_cents",
    revenueInCents: "revenue_in_cents",
  },
});
