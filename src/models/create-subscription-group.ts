import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateSubscriptionGroup = {
  subscriptionId: number;
  memberIds?: number[];
};

export const createSubscriptionGroupSchema: Schema<CreateSubscriptionGroup> =
  s.object<CreateSubscriptionGroup>({
    subscriptionId: s.number(),
    memberIds: s.optional(s.array(s.number())),
    _keysMap: {
      subscriptionId: "subscription_id",
      memberIds: "member_ids",
    },
  });
