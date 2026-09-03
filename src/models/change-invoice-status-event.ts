import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  changeInvoiceStatusEventDataSchema,
  type ChangeInvoiceStatusEventData,
} from "./change-invoice-status-event-data.js";
import { invoiceEventTypeSchema, type InvoiceEventType } from "./invoice-event-type.js";
import { invoiceSchema, type Invoice } from "./invoice.js";

export type ChangeInvoiceStatusEvent = {
  id: number;
  timestamp: Date;
  invoice: Invoice;
  eventType: InvoiceEventType;
  eventData: ChangeInvoiceStatusEventData;
};

export const changeInvoiceStatusEventSchema: Schema<ChangeInvoiceStatusEvent> =
  s.object<ChangeInvoiceStatusEvent>({
    id: s.number(),
    timestamp: s.dateTime(),
    invoice: invoiceSchema,
    eventType: invoiceEventTypeSchema,
    eventData: changeInvoiceStatusEventDataSchema,
    _keysMap: {
      eventType: "event_type",
      eventData: "event_data",
    },
  });
