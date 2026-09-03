import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoicePaymentMethodTypeSchema,
  type InvoicePaymentMethodType,
} from "./invoice-payment-method-type.js";

export type FailedPaymentEventData = {
  amountInCents: number;
  appliedAmount: number;
  memo?: string | null;
  paymentMethod: InvoicePaymentMethodType;
  transactionId: number;
};

export const failedPaymentEventDataSchema: Schema<FailedPaymentEventData> = s.object<FailedPaymentEventData>({
  amountInCents: s.number(),
  appliedAmount: s.number(),
  memo: s.optionalNullable(s.string()),
  paymentMethod: invoicePaymentMethodTypeSchema,
  transactionId: s.number(),
  _keysMap: {
    amountInCents: "amount_in_cents",
    appliedAmount: "applied_amount",
    paymentMethod: "payment_method",
    transactionId: "transaction_id",
  },
});
