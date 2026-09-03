import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subscriptionGroupBalancesSchema,
  type SubscriptionGroupBalances,
} from "./subscription-group-balances.js";
import {
  subscriptionGroupCustomerSchema,
  type SubscriptionGroupCustomer,
} from "./subscription-group-customer.js";
import { subscriptionStateSchema, type SubscriptionState } from "./subscription-state.js";

export type FullSubscriptionGroupResponse = {
  uid?: string;
  scheme?: number;
  customerId?: number;
  paymentProfileId?: number;
  subscriptionIds?: number[];
  primarySubscriptionId?: number;
  nextAssessmentAt?: Date;
  state?: SubscriptionState;
  cancelAtEndOfPeriod?: boolean;
  currentBillingAmountInCents?: number;
  customer?: SubscriptionGroupCustomer;
  accountBalances?: SubscriptionGroupBalances;
};

export const fullSubscriptionGroupResponseSchema: Schema<FullSubscriptionGroupResponse> =
  s.object<FullSubscriptionGroupResponse>({
    uid: s.optional(s.string()),
    scheme: s.optional(s.number()),
    customerId: s.optional(s.number()),
    paymentProfileId: s.optional(s.number()),
    subscriptionIds: s.optional(s.array(s.number())),
    primarySubscriptionId: s.optional(s.number()),
    nextAssessmentAt: s.optional(s.dateTime()),
    state: s.optional(s.lazy(() => subscriptionStateSchema)),
    cancelAtEndOfPeriod: s.optional(s.boolean()),
    currentBillingAmountInCents: s.optional(s.number()),
    customer: s.optional(s.lazy(() => subscriptionGroupCustomerSchema)),
    accountBalances: s.optional(s.lazy(() => subscriptionGroupBalancesSchema)),
    _keysMap: {
      customerId: "customer_id",
      paymentProfileId: "payment_profile_id",
      subscriptionIds: "subscription_ids",
      primarySubscriptionId: "primary_subscription_id",
      nextAssessmentAt: "next_assessment_at",
      cancelAtEndOfPeriod: "cancel_at_end_of_period",
      currentBillingAmountInCents: "current_billing_amount_in_cents",
      accountBalances: "account_balances",
    },
  });
