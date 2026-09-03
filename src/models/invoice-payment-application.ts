import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvoicePaymentApplication = {
  invoiceUid?: string;
  applicationUid?: string;
  appliedAmount?: string;
};

export const invoicePaymentApplicationSchema: Schema<InvoicePaymentApplication> =
  s.object<InvoicePaymentApplication>({
    invoiceUid: s.optional(s.string()),
    applicationUid: s.optional(s.string()),
    appliedAmount: s.optional(s.string()),
    _keysMap: {
      invoiceUid: "invoice_uid",
      applicationUid: "application_uid",
      appliedAmount: "applied_amount",
    },
  });
