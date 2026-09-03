import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditNoteSchema, type CreditNote } from "./credit-note.js";

export type VoidInvoiceEventData = {
  creditNoteAttributes: CreditNote | null;
  memo: string | null;
  appliedAmount: string | null;
  transactionTime: Date | null;
  isAdvanceInvoice: boolean;
  reason: string;
};

export const voidInvoiceEventDataSchema: Schema<VoidInvoiceEventData> = s.object<VoidInvoiceEventData>({
  creditNoteAttributes: s.nullable(s.lazy(() => creditNoteSchema)),
  memo: s.nullable(s.string()),
  appliedAmount: s.nullable(s.string()),
  transactionTime: s.nullable(s.dateTime()),
  isAdvanceInvoice: s.boolean(),
  reason: s.string(),
  _keysMap: {
    creditNoteAttributes: "credit_note_attributes",
    appliedAmount: "applied_amount",
    transactionTime: "transaction_time",
    isAdvanceInvoice: "is_advance_invoice",
  },
});
