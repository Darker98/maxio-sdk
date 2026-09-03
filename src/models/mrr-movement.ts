import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MrrMovement = {
  amount?: number;
  category?: string;
  subscriberDelta?: number;
  leadDelta?: number;
};

export const mrrMovementSchema: Schema<MrrMovement> = s.object<MrrMovement>({
  amount: s.optional(s.number()),
  category: s.optional(s.string()),
  subscriberDelta: s.optional(s.number()),
  leadDelta: s.optional(s.number()),
  _keysMap: {
    subscriberDelta: "subscriber_delta",
    leadDelta: "lead_delta",
  },
});
