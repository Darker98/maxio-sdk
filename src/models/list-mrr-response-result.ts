import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { movementSchema, type Movement } from "./movement.js";

export type ListMrrResponseResult = {
  page?: number;
  perPage?: number;
  totalPages?: number;
  totalEntries?: number;
  currency?: string;
  currencySymbol?: string;
  movements?: Movement[];
};

export const listMrrResponseResultSchema: Schema<ListMrrResponseResult> = s.object<ListMrrResponseResult>({
  page: s.optional(s.number()),
  perPage: s.optional(s.number()),
  totalPages: s.optional(s.number()),
  totalEntries: s.optional(s.number()),
  currency: s.optional(s.string()),
  currencySymbol: s.optional(s.string()),
  movements: s.optional(s.array(s.lazy(() => movementSchema))),
  _keysMap: {
    perPage: "per_page",
    totalPages: "total_pages",
    totalEntries: "total_entries",
    currencySymbol: "currency_symbol",
  },
});
