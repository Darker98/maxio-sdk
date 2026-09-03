import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditNoteSchema, type CreditNote } from "./credit-note.js";

export type VoidRemainderEventData = {
  creditNoteAttributes: CreditNote;
  memo: string;
  appliedAmount: string;
  transactionTime: Date;
};

export const voidRemainderEventDataSchema: Schema<VoidRemainderEventData> = s.object<VoidRemainderEventData>({
  creditNoteAttributes: creditNoteSchema,
  memo: s.string(),
  appliedAmount: s.string(),
  transactionTime: s.dateTime(),
  _keysMap: {
    creditNoteAttributes: "credit_note_attributes",
    appliedAmount: "applied_amount",
    transactionTime: "transaction_time",
  },
});
