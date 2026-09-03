import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InvoiceStatus = {
  Draft: "draft",
  Open: "open",
  Paid: "paid",
  Pending: "pending",
  Voided: "voided",
  Canceled: "canceled",
  Processing: "processing",
} as const;
export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus] | (string & {});

export const invoiceStatusSchema: EnumSchema<InvoiceStatus> = s.enumOf<InvoiceStatus>(InvoiceStatus);
