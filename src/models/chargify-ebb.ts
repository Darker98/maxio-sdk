import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChargifyEbb = {
  timestamp?: Date;
  id?: string;
  createdAt?: Date;
  uniquenessToken?: string;
  subscriptionId?: number;
  subscriptionReference?: string;
};

export const chargifyEbbSchema: Schema<ChargifyEbb> = s.object<ChargifyEbb>({
  timestamp: s.optional(s.dateTime()),
  id: s.optional(s.string()),
  createdAt: s.optional(s.dateTime()),
  uniquenessToken: s.optional(s.string()),
  subscriptionId: s.optional(s.number()),
  subscriptionReference: s.optional(s.string()),
  _keysMap: {
    createdAt: "created_at",
    uniquenessToken: "uniqueness_token",
    subscriptionId: "subscription_id",
    subscriptionReference: "subscription_reference",
  },
});
