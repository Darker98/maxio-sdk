import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HistoricUsage = {
  totalUsageQuantity?: number;
  billingPeriodStartsAt?: Date;
  billingPeriodEndsAt?: Date;
};

export const historicUsageSchema: Schema<HistoricUsage> = s.object<HistoricUsage>({
  totalUsageQuantity: s.optional(s.number()),
  billingPeriodStartsAt: s.optional(s.dateTime()),
  billingPeriodEndsAt: s.optional(s.dateTime()),
  _keysMap: {
    totalUsageQuantity: "total_usage_quantity",
    billingPeriodStartsAt: "billing_period_starts_at",
    billingPeriodEndsAt: "billing_period_ends_at",
  },
});
