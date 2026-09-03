import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { paymentMethodApplePaySchema, type PaymentMethodApplePay } from "../payment-method-apple-pay.js";
import {
  paymentMethodBankAccountSchema,
  type PaymentMethodBankAccount,
} from "../payment-method-bank-account.js";
import {
  paymentMethodCreditCardSchema,
  type PaymentMethodCreditCard,
} from "../payment-method-credit-card.js";
import { paymentMethodExternalSchema, type PaymentMethodExternal } from "../payment-method-external.js";
import { paymentMethodPaypalSchema, type PaymentMethodPaypal } from "../payment-method-paypal.js";

export type InvoiceEventPayment1 =
  | PaymentMethodApplePay
  | PaymentMethodBankAccount
  | PaymentMethodCreditCard
  | PaymentMethodExternal
  | PaymentMethodPaypal;

export const invoiceEventPayment1Schema: Schema<InvoiceEventPayment1> = s.of<InvoiceEventPayment1>(
  s.union([
    s.lazy(() => paymentMethodApplePaySchema),
    s.lazy(() => paymentMethodBankAccountSchema),
    s.lazy(() => paymentMethodCreditCardSchema),
    s.lazy(() => paymentMethodExternalSchema),
    s.lazy(() => paymentMethodPaypalSchema),
  ]),
);
