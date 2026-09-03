import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GroupBilling = {
  accrue?: boolean;
  alignDate?: boolean;
  prorate?: boolean;
};

export const groupBillingSchema: Schema<GroupBilling> = s.object<GroupBilling>({
  accrue: s.optional(s.boolean()),
  alignDate: s.optional(s.boolean()),
  prorate: s.optional(s.boolean()),
  _keysMap: {
    alignDate: "align_date",
  },
});
