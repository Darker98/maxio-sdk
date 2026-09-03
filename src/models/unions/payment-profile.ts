import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { applePayPaymentProfileSchema, type ApplePayPaymentProfile } from "../apple-pay-payment-profile.js";
import {
  bankAccountPaymentProfileSchema,
  type BankAccountPaymentProfile,
} from "../bank-account-payment-profile.js";
import {
  creditCardPaymentProfileSchema,
  type CreditCardPaymentProfile,
} from "../credit-card-payment-profile.js";
import { paypalPaymentProfileSchema, type PaypalPaymentProfile } from "../paypal-payment-profile.js";

export type PaymentProfile =
  | ApplePayPaymentProfile
  | BankAccountPaymentProfile
  | CreditCardPaymentProfile
  | PaypalPaymentProfile;

export const paymentProfileSchema: Schema<PaymentProfile> = s.of<PaymentProfile>(
  s.union([
    s.lazy(() => applePayPaymentProfileSchema),
    s.lazy(() => bankAccountPaymentProfileSchema),
    s.lazy(() => creditCardPaymentProfileSchema),
    s.lazy(() => paypalPaymentProfileSchema),
  ]),
);
