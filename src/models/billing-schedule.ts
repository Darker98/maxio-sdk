import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BillingSchedule = {
  initialBillingAt?: string | null;
};

export const billingScheduleSchema: Schema<BillingSchedule> = s.object<BillingSchedule>({
  initialBillingAt: s.optionalNullable(s.dateOnly()),
  _keysMap: {
    initialBillingAt: "initial_billing_at",
  },
});
