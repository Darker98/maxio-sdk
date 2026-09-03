import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListPublicKeysMeta = {
  totalCount?: number;
  currentPage?: number;
  totalPages?: number;
  perPage?: number;
};

export const listPublicKeysMetaSchema: Schema<ListPublicKeysMeta> = s.object<ListPublicKeysMeta>({
  totalCount: s.optional(s.number()),
  currentPage: s.optional(s.number()),
  totalPages: s.optional(s.number()),
  perPage: s.optional(s.number()),
  _keysMap: {
    totalCount: "total_count",
    currentPage: "current_page",
    totalPages: "total_pages",
    perPage: "per_page",
  },
});
