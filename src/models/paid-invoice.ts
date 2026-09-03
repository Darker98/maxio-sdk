import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invoiceStatusSchema, type InvoiceStatus } from "./invoice-status.js";

export type PaidInvoice = {
  invoiceId?: string;
  status?: InvoiceStatus;
  dueAmount?: string;
  paidAmount?: string;
};

export const paidInvoiceSchema: Schema<PaidInvoice> = s.object<PaidInvoice>({
  invoiceId: s.optional(s.string()),
  status: s.optional(s.lazy(() => invoiceStatusSchema)),
  dueAmount: s.optional(s.string()),
  paidAmount: s.optional(s.string()),
  _keysMap: {
    invoiceId: "invoice_id",
    dueAmount: "due_amount",
    paidAmount: "paid_amount",
  },
});
