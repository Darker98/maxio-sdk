import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invoiceEventTypeSchema, type InvoiceEventType } from "./invoice-event-type.js";
import { invoiceSchema, type Invoice } from "./invoice.js";
import { refundInvoiceEventDataSchema, type RefundInvoiceEventData } from "./refund-invoice-event-data.js";

export type RefundInvoiceEvent = {
  id: number;
  timestamp: Date;
  invoice: Invoice;
  eventType: InvoiceEventType;
  eventData: RefundInvoiceEventData;
};

export const refundInvoiceEventSchema: Schema<RefundInvoiceEvent> = s.object<RefundInvoiceEvent>({
  id: s.number(),
  timestamp: s.dateTime(),
  invoice: invoiceSchema,
  eventType: invoiceEventTypeSchema,
  eventData: refundInvoiceEventDataSchema,
  _keysMap: {
    eventType: "event_type",
    eventData: "event_data",
  },
});
