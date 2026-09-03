import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InvoicePaymentMethodType = {
  CreditCard: "credit_card",
  Check: "check",
  Cash: "cash",
  MoneyOrder: "money_order",
  Ach: "ach",
  Other: "other",
} as const;
export type InvoicePaymentMethodType =
  | (typeof InvoicePaymentMethodType)[keyof typeof InvoicePaymentMethodType]
  | (string & {});

export const invoicePaymentMethodTypeSchema: EnumSchema<InvoicePaymentMethodType> =
  s.enumOf<InvoicePaymentMethodType>(InvoicePaymentMethodType);
