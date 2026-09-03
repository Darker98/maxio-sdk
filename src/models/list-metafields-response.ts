import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metafieldSchema, type Metafield } from "./metafield.js";

export type ListMetafieldsResponse = {
  totalCount?: number;
  currentPage?: number;
  totalPages?: number;
  perPage?: number;
  metafields?: Metafield[];
};

export const listMetafieldsResponseSchema: Schema<ListMetafieldsResponse> = s.object<ListMetafieldsResponse>({
  totalCount: s.optional(s.number()),
  currentPage: s.optional(s.number()),
  totalPages: s.optional(s.number()),
  perPage: s.optional(s.number()),
  metafields: s.optional(s.array(s.lazy(() => metafieldSchema))),
  _keysMap: {
    totalCount: "total_count",
    currentPage: "current_page",
    totalPages: "total_pages",
    perPage: "per_page",
  },
});
