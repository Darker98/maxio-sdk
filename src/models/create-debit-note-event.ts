import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { debitNoteSchema, type DebitNote } from "./debit-note.js";
import { invoiceEventTypeSchema, type InvoiceEventType } from "./invoice-event-type.js";
import { invoiceSchema, type Invoice } from "./invoice.js";

export type CreateDebitNoteEvent = {
  id: number;
  timestamp: Date;
  invoice: Invoice;
  eventType: InvoiceEventType;
  eventData: DebitNote;
};

export const createDebitNoteEventSchema: Schema<CreateDebitNoteEvent> = s.object<CreateDebitNoteEvent>({
  id: s.number(),
  timestamp: s.dateTime(),
  invoice: invoiceSchema,
  eventType: invoiceEventTypeSchema,
  eventData: debitNoteSchema,
  _keysMap: {
    eventType: "event_type",
    eventData: "event_data",
  },
});
