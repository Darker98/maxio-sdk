import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvoicePrePayment = {
  subscriptionId?: number;
  amountInCents?: number;
  endingBalanceInCents?: number;
};

export const invoicePrePaymentSchema: Schema<InvoicePrePayment> = s.object<InvoicePrePayment>({
  subscriptionId: s.optional(s.number()),
  amountInCents: s.optional(s.number()),
  endingBalanceInCents: s.optional(s.number()),
  _keysMap: {
    subscriptionId: "subscription_id",
    amountInCents: "amount_in_cents",
    endingBalanceInCents: "ending_balance_in_cents",
  },
});
