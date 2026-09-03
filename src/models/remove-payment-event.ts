import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invoiceEventTypeSchema, type InvoiceEventType } from "./invoice-event-type.js";
import { invoiceSchema, type Invoice } from "./invoice.js";
import { removePaymentEventDataSchema, type RemovePaymentEventData } from "./remove-payment-event-data.js";

export type RemovePaymentEvent = {
  id: number;
  timestamp: Date;
  invoice: Invoice;
  eventType: InvoiceEventType;
  eventData: RemovePaymentEventData;
};

export const removePaymentEventSchema: Schema<RemovePaymentEvent> = s.object<RemovePaymentEvent>({
  id: s.number(),
  timestamp: s.dateTime(),
  invoice: invoiceSchema,
  eventType: invoiceEventTypeSchema,
  eventData: removePaymentEventDataSchema,
  _keysMap: {
    eventType: "event_type",
    eventData: "event_data",
  },
});
