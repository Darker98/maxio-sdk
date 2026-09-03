import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  createInvoicePaymentApplicationSchema,
  type CreateInvoicePaymentApplication,
} from "./create-invoice-payment-application.js";
import {
  invoicePaymentMethodTypeSchema,
  type InvoicePaymentMethodType,
} from "./invoice-payment-method-type.js";
import { amount1Schema, type Amount1 } from "./unions/amount1.js";

export type CreateMultiInvoicePayment = {
  memo?: string;
  details?: string;
  method?: InvoicePaymentMethodType;
  amount: Amount1;
  receivedOn?: string;
  applications: CreateInvoicePaymentApplication[];
};

export const createMultiInvoicePaymentSchema: Schema<CreateMultiInvoicePayment> =
  s.object<CreateMultiInvoicePayment>({
    memo: s.optional(s.string()),
    details: s.optional(s.string()),
    method: s.optional(s.lazy(() => invoicePaymentMethodTypeSchema)),
    amount: amount1Schema,
    receivedOn: s.optional(s.string()),
    applications: s.array(s.lazy(() => createInvoicePaymentApplicationSchema)),
    _keysMap: {
      receivedOn: "received_on",
    },
  });
