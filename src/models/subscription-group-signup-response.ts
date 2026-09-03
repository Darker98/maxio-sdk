import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { collectionMethodSchema, type CollectionMethod } from "./collection-method.js";
import { subscriptionGroupItemSchema, type SubscriptionGroupItem } from "./subscription-group-item.js";
import { subscriptionStateSchema, type SubscriptionState } from "./subscription-state.js";

export type SubscriptionGroupSignupResponse = {
  uid?: string;
  scheme?: number;
  customerId?: number;
  paymentProfileId?: number;
  subscriptionIds?: number[];
  primarySubscriptionId?: number;
  nextAssessmentAt?: Date;
  state?: SubscriptionState;
  cancelAtEndOfPeriod?: boolean;
  subscriptions?: SubscriptionGroupItem[];
  paymentCollectionMethod?: CollectionMethod;
};

export const subscriptionGroupSignupResponseSchema: Schema<SubscriptionGroupSignupResponse> =
  s.object<SubscriptionGroupSignupResponse>({
    uid: s.optional(s.string()),
    scheme: s.optional(s.number()),
    customerId: s.optional(s.number()),
    paymentProfileId: s.optional(s.number()),
    subscriptionIds: s.optional(s.array(s.number())),
    primarySubscriptionId: s.optional(s.number()),
    nextAssessmentAt: s.optional(s.dateTime()),
    state: s.optional(s.lazy(() => subscriptionStateSchema)),
    cancelAtEndOfPeriod: s.optional(s.boolean()),
    subscriptions: s.optional(s.array(s.lazy(() => subscriptionGroupItemSchema))),
    paymentCollectionMethod: s.optional(s.lazy(() => collectionMethodSchema)),
    _keysMap: {
      customerId: "customer_id",
      paymentProfileId: "payment_profile_id",
      subscriptionIds: "subscription_ids",
      primarySubscriptionId: "primary_subscription_id",
      nextAssessmentAt: "next_assessment_at",
      cancelAtEndOfPeriod: "cancel_at_end_of_period",
      paymentCollectionMethod: "payment_collection_method",
    },
  });
