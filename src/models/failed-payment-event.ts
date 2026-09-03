import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { failedPaymentEventDataSchema, type FailedPaymentEventData } from "./failed-payment-event-data.js";
import { invoiceEventTypeSchema, type InvoiceEventType } from "./invoice-event-type.js";
import { invoiceSchema, type Invoice } from "./invoice.js";

export type FailedPaymentEvent = {
  id: number;
  timestamp: Date;
  invoice: Invoice;
  eventType: InvoiceEventType;
  eventData: FailedPaymentEventData;
};

export const failedPaymentEventSchema: Schema<FailedPaymentEvent> = s.object<FailedPaymentEvent>({
  id: s.number(),
  timestamp: s.dateTime(),
  invoice: invoiceSchema,
  eventType: invoiceEventTypeSchema,
  eventData: failedPaymentEventDataSchema,
  _keysMap: {
    eventType: "event_type",
    eventData: "event_data",
  },
});
