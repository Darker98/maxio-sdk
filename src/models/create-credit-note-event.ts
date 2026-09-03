import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditNoteSchema, type CreditNote } from "./credit-note.js";
import { invoiceEventTypeSchema, type InvoiceEventType } from "./invoice-event-type.js";
import { invoiceSchema, type Invoice } from "./invoice.js";

export type CreateCreditNoteEvent = {
  id: number;
  timestamp: Date;
  invoice: Invoice;
  eventType: InvoiceEventType;
  eventData: CreditNote;
};

export const createCreditNoteEventSchema: Schema<CreateCreditNoteEvent> = s.object<CreateCreditNoteEvent>({
  id: s.number(),
  timestamp: s.dateTime(),
  invoice: invoiceSchema,
  eventType: invoiceEventTypeSchema,
  eventData: creditNoteSchema,
  _keysMap: {
    eventType: "event_type",
    eventData: "event_data",
  },
});
