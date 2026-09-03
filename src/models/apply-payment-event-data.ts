import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoiceConsolidationLevelSchema,
  type InvoiceConsolidationLevel,
} from "./invoice-consolidation-level.js";
import { invoiceEventPaymentSchema, type InvoiceEventPayment } from "./unions/invoice-event-payment.js";

export type ApplyPaymentEventData = {
  consolidationLevel: InvoiceConsolidationLevel;
  memo: string;
  originalAmount: string;
  appliedAmount: string;
  transactionTime: Date;
  paymentMethod: InvoiceEventPayment;
  transactionId?: number;
  parentInvoiceNumber?: number | null;
  remainingPrepaymentAmount?: string | null;
  prepayment?: boolean;
  external?: boolean;
};

export const applyPaymentEventDataSchema: Schema<ApplyPaymentEventData> = s.object<ApplyPaymentEventData>({
  consolidationLevel: invoiceConsolidationLevelSchema,
  memo: s.string(),
  originalAmount: s.string(),
  appliedAmount: s.string(),
  transactionTime: s.dateTime(),
  paymentMethod: invoiceEventPaymentSchema,
  transactionId: s.optional(s.number()),
  parentInvoiceNumber: s.optionalNullable(s.number()),
  remainingPrepaymentAmount: s.optionalNullable(s.string()),
  prepayment: s.optional(s.boolean()),
  external: s.optional(s.boolean()),
  _keysMap: {
    consolidationLevel: "consolidation_level",
    originalAmount: "original_amount",
    appliedAmount: "applied_amount",
    transactionTime: "transaction_time",
    paymentMethod: "payment_method",
    transactionId: "transaction_id",
    parentInvoiceNumber: "parent_invoice_number",
    remainingPrepaymentAmount: "remaining_prepayment_amount",
  },
});
