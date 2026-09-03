import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invoiceEventPaymentSchema, type InvoiceEventPayment } from "./unions/invoice-event-payment.js";

export type RemovePaymentEventData = {
  transactionId: number;
  memo: string;
  originalAmount?: string;
  appliedAmount: string;
  transactionTime: Date;
  paymentMethod: InvoiceEventPayment;
  prepayment: boolean;
};

export const removePaymentEventDataSchema: Schema<RemovePaymentEventData> = s.object<RemovePaymentEventData>({
  transactionId: s.number(),
  memo: s.string(),
  originalAmount: s.optional(s.string()),
  appliedAmount: s.string(),
  transactionTime: s.dateTime(),
  paymentMethod: invoiceEventPaymentSchema,
  prepayment: s.boolean(),
  _keysMap: {
    transactionId: "transaction_id",
    originalAmount: "original_amount",
    appliedAmount: "applied_amount",
    transactionTime: "transaction_time",
    paymentMethod: "payment_method",
  },
});
