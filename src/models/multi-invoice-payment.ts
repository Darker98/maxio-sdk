import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoicePaymentApplicationSchema,
  type InvoicePaymentApplication,
} from "./invoice-payment-application.js";

export type MultiInvoicePayment = {
  transactionId?: number;
  totalAmount?: string;
  currencyCode?: string;
  applications?: InvoicePaymentApplication[];
};

export const multiInvoicePaymentSchema: Schema<MultiInvoicePayment> = s.object<MultiInvoicePayment>({
  transactionId: s.optional(s.number()),
  totalAmount: s.optional(s.string()),
  currencyCode: s.optional(s.string()),
  applications: s.optional(s.array(s.lazy(() => invoicePaymentApplicationSchema))),
  _keysMap: {
    transactionId: "transaction_id",
    totalAmount: "total_amount",
    currencyCode: "currency_code",
  },
});
