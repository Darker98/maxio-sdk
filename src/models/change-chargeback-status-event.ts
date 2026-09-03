import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  changeChargebackStatusEventDataSchema,
  type ChangeChargebackStatusEventData,
} from "./change-chargeback-status-event-data.js";
import { invoiceEventTypeSchema, type InvoiceEventType } from "./invoice-event-type.js";
import { invoiceSchema, type Invoice } from "./invoice.js";

export type ChangeChargebackStatusEvent = {
  id: number;
  timestamp: Date;
  invoice: Invoice;
  eventType: InvoiceEventType;
  eventData: ChangeChargebackStatusEventData;
};

export const changeChargebackStatusEventSchema: Schema<ChangeChargebackStatusEvent> =
  s.object<ChangeChargebackStatusEvent>({
    id: s.number(),
    timestamp: s.dateTime(),
    invoice: invoiceSchema,
    eventType: invoiceEventTypeSchema,
    eventData: changeChargebackStatusEventDataSchema,
    _keysMap: {
      eventType: "event_type",
      eventData: "event_data",
    },
  });
