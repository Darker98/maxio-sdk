import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { appliedCreditNoteDataSchema, type AppliedCreditNoteData } from "./applied-credit-note-data.js";

export type ApplyCreditNoteEventData = {
  uid: string;
  creditNoteNumber: string;
  creditNoteUid: string;
  originalAmount: string;
  appliedAmount: string;
  transactionTime?: Date;
  memo?: string | null;
  role?: string;
  consolidatedInvoice?: boolean;
  appliedCreditNotes?: AppliedCreditNoteData[];
};

export const applyCreditNoteEventDataSchema: Schema<ApplyCreditNoteEventData> =
  s.object<ApplyCreditNoteEventData>({
    uid: s.string(),
    creditNoteNumber: s.string(),
    creditNoteUid: s.string(),
    originalAmount: s.string(),
    appliedAmount: s.string(),
    transactionTime: s.optional(s.dateTime()),
    memo: s.optionalNullable(s.string()),
    role: s.optional(s.string()),
    consolidatedInvoice: s.optional(s.boolean()),
    appliedCreditNotes: s.optional(s.array(s.lazy(() => appliedCreditNoteDataSchema))),
    _keysMap: {
      creditNoteNumber: "credit_note_number",
      creditNoteUid: "credit_note_uid",
      originalAmount: "original_amount",
      appliedAmount: "applied_amount",
      transactionTime: "transaction_time",
      consolidatedInvoice: "consolidated_invoice",
      appliedCreditNotes: "applied_credit_notes",
    },
  });
