import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InvoicePaymentType = {
  External: "external",
  Prepayment: "prepayment",
  ServiceCredit: "service_credit",
  Payment: "payment",
} as const;
export type InvoicePaymentType = (typeof InvoicePaymentType)[keyof typeof InvoicePaymentType] | (string & {});

export const invoicePaymentTypeSchema: EnumSchema<InvoicePaymentType> =
  s.enumOf<InvoicePaymentType>(InvoicePaymentType);
