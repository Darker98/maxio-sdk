import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateInvoicePaymentApplication = {
  invoiceUid: string;
  amount: string;
};

export const createInvoicePaymentApplicationSchema: Schema<CreateInvoicePaymentApplication> =
  s.object<CreateInvoicePaymentApplication>({
    invoiceUid: s.string(),
    amount: s.string(),
    _keysMap: {
      invoiceUid: "invoice_uid",
    },
  });
