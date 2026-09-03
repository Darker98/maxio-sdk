import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invoiceEventTypeSchema, type InvoiceEventType } from "./invoice-event-type.js";
import { invoiceSchema, type Invoice } from "./invoice.js";

export type BackportInvoiceEvent = {
  id: number;
  timestamp: Date;
  invoice: Invoice;
  eventType: InvoiceEventType;
  eventData: Invoice;
};

export const backportInvoiceEventSchema: Schema<BackportInvoiceEvent> = s.object<BackportInvoiceEvent>({
  id: s.number(),
  timestamp: s.dateTime(),
  invoice: invoiceSchema,
  eventType: invoiceEventTypeSchema,
  eventData: invoiceSchema,
  _keysMap: {
    eventType: "event_type",
    eventData: "event_data",
  },
});
