import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvoicePrePayment = {
  /** The subscription id for the prepayment account */
  subscriptionId?: number;
  /** The amount in cents of the prepayment that was created as a result of this payment. */
  amountInCents?: number;
  /**
   * The total balance of the prepayment account for this subscription including any prior
   * prepayments
   */
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
