import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReactivateSubscriptionGroupResponse = {
  uid?: string;
  scheme?: number;
  customerId?: number;
  paymentProfileId?: number;
  subscriptionIds?: number[];
  primarySubscriptionId?: number;
  nextAssessmentAt?: Date;
  state?: string;
  cancelAtEndOfPeriod?: boolean;
};

export const reactivateSubscriptionGroupResponseSchema: Schema<ReactivateSubscriptionGroupResponse> =
  s.object<ReactivateSubscriptionGroupResponse>({
    uid: s.optional(s.string()),
    scheme: s.optional(s.number()),
    customerId: s.optional(s.number()),
    paymentProfileId: s.optional(s.number()),
    subscriptionIds: s.optional(s.array(s.number())),
    primarySubscriptionId: s.optional(s.number()),
    nextAssessmentAt: s.optional(s.dateTime()),
    state: s.optional(s.string()),
    cancelAtEndOfPeriod: s.optional(s.boolean()),
    _keysMap: {
      customerId: "customer_id",
      paymentProfileId: "payment_profile_id",
      subscriptionIds: "subscription_ids",
      primarySubscriptionId: "primary_subscription_id",
      nextAssessmentAt: "next_assessment_at",
      cancelAtEndOfPeriod: "cancel_at_end_of_period",
    },
  });
