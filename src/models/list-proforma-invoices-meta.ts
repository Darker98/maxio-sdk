import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListProformaInvoicesMeta = {
  totalCount?: number;
  currentPage?: number;
  totalPages?: number;
  statusCode?: number;
};

export const listProformaInvoicesMetaSchema: Schema<ListProformaInvoicesMeta> =
  s.object<ListProformaInvoicesMeta>({
    totalCount: s.optional(s.number()),
    currentPage: s.optional(s.number()),
    totalPages: s.optional(s.number()),
    statusCode: s.optional(s.number()),
    _keysMap: {
      totalCount: "total_count",
      currentPage: "current_page",
      totalPages: "total_pages",
      statusCode: "status_code",
    },
  });
