import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invoiceEventSchema, type InvoiceEvent } from "./unions/invoice-event.js";

export type ListInvoiceEventsResponse = {
  events?: InvoiceEvent[];
  page?: number;
  perPage?: number;
  totalPages?: number;
};

export const listInvoiceEventsResponseSchema: Schema<ListInvoiceEventsResponse> =
  s.object<ListInvoiceEventsResponse>({
    events: s.optional(s.array(s.lazy(() => invoiceEventSchema))),
    page: s.optional(s.number()),
    perPage: s.optional(s.number()),
    totalPages: s.optional(s.number()),
    _keysMap: {
      perPage: "per_page",
      totalPages: "total_pages",
    },
  });
