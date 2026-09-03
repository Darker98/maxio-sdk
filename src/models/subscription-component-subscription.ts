import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subscriptionStateSchema, type SubscriptionState } from "./subscription-state.js";

export type SubscriptionComponentSubscription = {
  state?: SubscriptionState;
  updatedAt?: Date;
};

export const subscriptionComponentSubscriptionSchema: Schema<SubscriptionComponentSubscription> =
  s.object<SubscriptionComponentSubscription>({
    state: s.optional(s.lazy(() => subscriptionStateSchema)),
    updatedAt: s.optional(s.dateTime()),
    _keysMap: {
      updatedAt: "updated_at",
    },
  });
