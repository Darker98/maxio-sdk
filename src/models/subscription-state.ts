import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SubscriptionState = {
  Pending: "pending",
  FailedToCreate: "failed_to_create",
  Trialing: "trialing",
  Assessing: "assessing",
  Active: "active",
  SoftFailure: "soft_failure",
  PastDue: "past_due",
  Suspended: "suspended",
  Canceled: "canceled",
  Expired: "expired",
  Paused: "paused",
  Unpaid: "unpaid",
  TrialEnded: "trial_ended",
  OnHold: "on_hold",
  AwaitingSignup: "awaiting_signup",
} as const;
export type SubscriptionState = (typeof SubscriptionState)[keyof typeof SubscriptionState] | (string & {});

export const subscriptionStateSchema: EnumSchema<SubscriptionState> =
  s.enumOf<SubscriptionState>(SubscriptionState);
