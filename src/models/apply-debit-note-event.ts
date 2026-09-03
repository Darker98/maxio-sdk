import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  applyDebitNoteEventDataSchema,
  type ApplyDebitNoteEventData,
} from "./apply-debit-note-event-data.js";
import { invoiceEventTypeSchema, type InvoiceEventType } from "./invoice-event-type.js";
import { invoiceSchema, type Invoice } from "./invoice.js";

export type ApplyDebitNoteEvent = {
  id: number;
  timestamp: Date;
  invoice: Invoice;
  eventType: InvoiceEventType;
  eventData: ApplyDebitNoteEventData;
};

export const applyDebitNoteEventSchema: Schema<ApplyDebitNoteEvent> = s.object<ApplyDebitNoteEvent>({
  id: s.number(),
  timestamp: s.dateTime(),
  invoice: invoiceSchema,
  eventType: invoiceEventTypeSchema,
  eventData: applyDebitNoteEventDataSchema,
  _keysMap: {
    eventType: "event_type",
    eventData: "event_data",
  },
});
