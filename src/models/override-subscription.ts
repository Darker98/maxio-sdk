import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OverrideSubscription = {
  activatedAt?: Date;
  canceledAt?: Date;
  cancellationMessage?: string;
  expiresAt?: Date;
  currentPeriodStartsAt?: Date;
};

export const overrideSubscriptionSchema: Schema<OverrideSubscription> = s.object<OverrideSubscription>({
  activatedAt: s.optional(s.dateTime()),
  canceledAt: s.optional(s.dateTime()),
  cancellationMessage: s.optional(s.string()),
  expiresAt: s.optional(s.dateTime()),
  currentPeriodStartsAt: s.optional(s.dateTime()),
  _keysMap: {
    activatedAt: "activated_at",
    canceledAt: "canceled_at",
    cancellationMessage: "cancellation_message",
    expiresAt: "expires_at",
    currentPeriodStartsAt: "current_period_starts_at",
  },
});
