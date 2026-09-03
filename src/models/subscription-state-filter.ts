import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SubscriptionStateFilter = {
  Active: "active",
  Canceled: "canceled",
  Expired: "expired",
  ExpiredCards: "expired_cards",
  OnHold: "on_hold",
  PastDue: "past_due",
  PendingCancellation: "pending_cancellation",
  PendingRenewal: "pending_renewal",
  Suspended: "suspended",
  TrialEnded: "trial_ended",
  Trialing: "trialing",
  Unpaid: "unpaid",
} as const;
export type SubscriptionStateFilter =
  | (typeof SubscriptionStateFilter)[keyof typeof SubscriptionStateFilter]
  | (string & {});

export const subscriptionStateFilterSchema: EnumSchema<SubscriptionStateFilter> =
  s.enumOf<SubscriptionStateFilter>(SubscriptionStateFilter);
