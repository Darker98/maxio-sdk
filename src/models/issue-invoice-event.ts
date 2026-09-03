import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invoiceEventTypeSchema, type InvoiceEventType } from "./invoice-event-type.js";
import { invoiceSchema, type Invoice } from "./invoice.js";
import { issueInvoiceEventDataSchema, type IssueInvoiceEventData } from "./issue-invoice-event-data.js";

export type IssueInvoiceEvent = {
  id: number;
  timestamp: Date;
  invoice: Invoice;
  eventType: InvoiceEventType;
  eventData: IssueInvoiceEventData;
};

export const issueInvoiceEventSchema: Schema<IssueInvoiceEvent> = s.object<IssueInvoiceEvent>({
  id: s.number(),
  timestamp: s.dateTime(),
  invoice: invoiceSchema,
  eventType: invoiceEventTypeSchema,
  eventData: issueInvoiceEventDataSchema,
  _keysMap: {
    eventType: "event_type",
    eventData: "event_data",
  },
});
