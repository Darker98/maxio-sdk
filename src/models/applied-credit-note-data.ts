import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AppliedCreditNoteData = {
  uid?: string;
  number?: string;
};

export const appliedCreditNoteDataSchema: Schema<AppliedCreditNoteData> = s.object<AppliedCreditNoteData>({
  uid: s.optional(s.string()),
  number: s.optional(s.string()),
});
