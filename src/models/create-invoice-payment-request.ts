import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { createInvoicePaymentSchema, type CreateInvoicePayment } from "./create-invoice-payment.js";
import { invoicePaymentTypeSchema, type InvoicePaymentType } from "./invoice-payment-type.js";

export type CreateInvoicePaymentRequest = {
  payment: CreateInvoicePayment;
  type?: InvoicePaymentType;
};

export const createInvoicePaymentRequestSchema: Schema<CreateInvoicePaymentRequest> =
  s.object<CreateInvoicePaymentRequest>({
    payment: createInvoicePaymentSchema,
    type: s.optional(s.lazy(() => invoicePaymentTypeSchema)),
  });
