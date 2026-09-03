import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoicePaymentMethodTypeSchema,
  type InvoicePaymentMethodType,
} from "./invoice-payment-method-type.js";
import { amountSchema, type Amount } from "./unions/amount.js";

export type CreateInvoicePayment = {
  amount?: Amount;
  memo?: string;
  method?: InvoicePaymentMethodType;
  details?: string;
  paymentProfileId?: number;
  receivedOn?: string;
};

export const createInvoicePaymentSchema: Schema<CreateInvoicePayment> = s.object<CreateInvoicePayment>({
  amount: s.optional(s.lazy(() => amountSchema)),
  memo: s.optional(s.string()),
  method: s.optional(s.lazy(() => invoicePaymentMethodTypeSchema)),
  details: s.optional(s.string()),
  paymentProfileId: s.optional(s.number()),
  receivedOn: s.optional(s.dateOnly()),
  _keysMap: {
    paymentProfileId: "payment_profile_id",
    receivedOn: "received_on",
  },
});
