import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { applyPaymentEventDataSchema, type ApplyPaymentEventData } from "./apply-payment-event-data.js";
import { invoiceEventTypeSchema, type InvoiceEventType } from "./invoice-event-type.js";
import { invoiceSchema, type Invoice } from "./invoice.js";

export type ApplyPaymentEvent = {
  id: number;
  timestamp: Date;
  invoice: Invoice;
  eventType: InvoiceEventType;
  eventData: ApplyPaymentEventData;
};

export const applyPaymentEventSchema: Schema<ApplyPaymentEvent> = s.object<ApplyPaymentEvent>({
  id: s.number(),
  timestamp: s.dateTime(),
  invoice: invoiceSchema,
  eventType: invoiceEventTypeSchema,
  eventData: applyPaymentEventDataSchema,
  _keysMap: {
    eventType: "event_type",
    eventData: "event_data",
  },
});
