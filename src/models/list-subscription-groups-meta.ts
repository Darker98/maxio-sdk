import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListSubscriptionGroupsMeta = {
  currentPage?: number;
  totalCount?: number;
};

export const listSubscriptionGroupsMetaSchema: Schema<ListSubscriptionGroupsMeta> =
  s.object<ListSubscriptionGroupsMeta>({
    currentPage: s.optional(s.number()),
    totalCount: s.optional(s.number()),
    _keysMap: {
      currentPage: "current_page",
      totalCount: "total_count",
    },
  });
