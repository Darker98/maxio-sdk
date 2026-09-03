import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApplyDebitNoteEventData = {
  debitNoteNumber: string;
  debitNoteUid: string;
  originalAmount: string;
  appliedAmount: string;
  memo?: string | null;
  transactionTime?: Date | null;
};

export const applyDebitNoteEventDataSchema: Schema<ApplyDebitNoteEventData> =
  s.object<ApplyDebitNoteEventData>({
    debitNoteNumber: s.string(),
    debitNoteUid: s.string(),
    originalAmount: s.string(),
    appliedAmount: s.string(),
    memo: s.optionalNullable(s.string()),
    transactionTime: s.optionalNullable(s.dateTime()),
    _keysMap: {
      debitNoteNumber: "debit_note_number",
      debitNoteUid: "debit_note_uid",
      originalAmount: "original_amount",
      appliedAmount: "applied_amount",
      transactionTime: "transaction_time",
    },
  });
