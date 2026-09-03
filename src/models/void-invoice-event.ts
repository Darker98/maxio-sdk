import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invoiceEventTypeSchema, type InvoiceEventType } from "./invoice-event-type.js";
import { invoiceSchema, type Invoice } from "./invoice.js";
import { voidInvoiceEventDataSchema, type VoidInvoiceEventData } from "./void-invoice-event-data.js";

export type VoidInvoiceEvent = {
  id: number;
  timestamp: Date;
  invoice: Invoice;
  eventType: InvoiceEventType;
  eventData: VoidInvoiceEventData;
};

export const voidInvoiceEventSchema: Schema<VoidInvoiceEvent> = s.object<VoidInvoiceEvent>({
  id: s.number(),
  timestamp: s.dateTime(),
  invoice: invoiceSchema,
  eventType: invoiceEventTypeSchema,
  eventData: voidInvoiceEventDataSchema,
  _keysMap: {
    eventType: "event_type",
    eventData: "event_data",
  },
});
