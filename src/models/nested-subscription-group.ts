import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NestedSubscriptionGroup = {
  uid?: string;
  scheme?: number;
  primarySubscriptionId?: number;
  primary?: boolean;
};

export const nestedSubscriptionGroupSchema: Schema<NestedSubscriptionGroup> =
  s.object<NestedSubscriptionGroup>({
    uid: s.optional(s.string()),
    scheme: s.optional(s.number()),
    primarySubscriptionId: s.optional(s.number()),
    primary: s.optional(s.boolean()),
    _keysMap: {
      primarySubscriptionId: "primary_subscription_id",
    },
  });
