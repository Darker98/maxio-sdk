import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  applyCreditNoteEventDataSchema,
  type ApplyCreditNoteEventData,
} from "./apply-credit-note-event-data.js";
import { invoiceEventTypeSchema, type InvoiceEventType } from "./invoice-event-type.js";
import { invoiceSchema, type Invoice } from "./invoice.js";

export type ApplyCreditNoteEvent = {
  id: number;
  timestamp: Date;
  invoice: Invoice;
  eventType: InvoiceEventType;
  eventData: ApplyCreditNoteEventData;
};

export const applyCreditNoteEventSchema: Schema<ApplyCreditNoteEvent> = s.object<ApplyCreditNoteEvent>({
  id: s.number(),
  timestamp: s.dateTime(),
  invoice: invoiceSchema,
  eventType: invoiceEventTypeSchema,
  eventData: applyCreditNoteEventDataSchema,
  _keysMap: {
    eventType: "event_type",
    eventData: "event_data",
  },
});
