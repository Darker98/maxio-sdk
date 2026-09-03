import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SubscriptionMigrationPreview = {
  proratedAdjustmentInCents?: number;
  chargeInCents?: number;
  paymentDueInCents?: number;
  creditAppliedInCents?: number;
};

export const subscriptionMigrationPreviewSchema: Schema<SubscriptionMigrationPreview> =
  s.object<SubscriptionMigrationPreview>({
    proratedAdjustmentInCents: s.optional(s.number()),
    chargeInCents: s.optional(s.number()),
    paymentDueInCents: s.optional(s.number()),
    creditAppliedInCents: s.optional(s.number()),
    _keysMap: {
      proratedAdjustmentInCents: "prorated_adjustment_in_cents",
      chargeInCents: "charge_in_cents",
      paymentDueInCents: "payment_due_in_cents",
      creditAppliedInCents: "credit_applied_in_cents",
    },
  });
