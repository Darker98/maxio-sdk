import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListMrrFilter = {
  subscriptionIds?: number[];
};

export const listMrrFilterSchema: Schema<ListMrrFilter> = s.object<ListMrrFilter>({
  subscriptionIds: s.optional(s.array(s.number())),
  _keysMap: {
    subscriptionIds: "subscription_ids",
  },
});
