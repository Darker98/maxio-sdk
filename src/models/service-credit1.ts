import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { serviceCreditTypeSchema, type ServiceCreditType } from "./service-credit-type.js";

export type ServiceCredit1 = {
  id?: number;
  amountInCents?: number;
  endingBalanceInCents?: number;
  entryType?: ServiceCreditType;
  memo?: string;
  invoiceUid?: string | null;
  remainingBalanceInCents?: number;
  createdAt?: Date;
};

export const serviceCredit1Schema: Schema<ServiceCredit1> = s.object<ServiceCredit1>({
  id: s.optional(s.number()),
  amountInCents: s.optional(s.number()),
  endingBalanceInCents: s.optional(s.number()),
  entryType: s.optional(s.lazy(() => serviceCreditTypeSchema)),
  memo: s.optional(s.string()),
  invoiceUid: s.optionalNullable(s.string()),
  remainingBalanceInCents: s.optional(s.number()),
  createdAt: s.optional(s.dateTime()),
  _keysMap: {
    amountInCents: "amount_in_cents",
    endingBalanceInCents: "ending_balance_in_cents",
    entryType: "entry_type",
    invoiceUid: "invoice_uid",
    remainingBalanceInCents: "remaining_balance_in_cents",
    createdAt: "created_at",
  },
});
