import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  changeInvoiceCollectionMethodEventDataSchema,
  type ChangeInvoiceCollectionMethodEventData,
} from "./change-invoice-collection-method-event-data.js";
import { invoiceEventTypeSchema, type InvoiceEventType } from "./invoice-event-type.js";
import { invoiceSchema, type Invoice } from "./invoice.js";

export type ChangeInvoiceCollectionMethodEvent = {
  id: number;
  timestamp: Date;
  invoice: Invoice;
  eventType: InvoiceEventType;
  eventData: ChangeInvoiceCollectionMethodEventData;
};

export const changeInvoiceCollectionMethodEventSchema: Schema<ChangeInvoiceCollectionMethodEvent> =
  s.object<ChangeInvoiceCollectionMethodEvent>({
    id: s.number(),
    timestamp: s.dateTime(),
    invoice: invoiceSchema,
    eventType: invoiceEventTypeSchema,
    eventData: changeInvoiceCollectionMethodEventDataSchema,
    _keysMap: {
      eventType: "event_type",
      eventData: "event_data",
    },
  });
