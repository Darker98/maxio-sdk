import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditNoteSchema, type CreditNote } from "./credit-note.js";
import {
  invoiceConsolidationLevelSchema,
  type InvoiceConsolidationLevel,
} from "./invoice-consolidation-level.js";

export type RefundInvoiceEventData = {
  applyCredit: boolean;
  consolidationLevel?: InvoiceConsolidationLevel;
  creditNoteAttributes: CreditNote;
  memo?: string;
  originalAmount?: string;
  paymentId: number;
  refundAmount: string;
  refundId: number;
  transactionTime: Date;
};

export const refundInvoiceEventDataSchema: Schema<RefundInvoiceEventData> = s.object<RefundInvoiceEventData>({
  applyCredit: s.boolean(),
  consolidationLevel: s.optional(s.lazy(() => invoiceConsolidationLevelSchema)),
  creditNoteAttributes: creditNoteSchema,
  memo: s.optional(s.string()),
  originalAmount: s.optional(s.string()),
  paymentId: s.number(),
  refundAmount: s.string(),
  refundId: s.number(),
  transactionTime: s.dateTime(),
  _keysMap: {
    applyCredit: "apply_credit",
    consolidationLevel: "consolidation_level",
    creditNoteAttributes: "credit_note_attributes",
    originalAmount: "original_amount",
    paymentId: "payment_id",
    refundAmount: "refund_amount",
    refundId: "refund_id",
    transactionTime: "transaction_time",
  },
});
