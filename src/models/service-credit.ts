import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { serviceCreditTypeSchema, type ServiceCreditType } from "./service-credit-type.js";

export type ServiceCredit = {
  id?: number;
  amountInCents?: number;
  endingBalanceInCents?: number;
  entryType?: ServiceCreditType;
  memo?: string;
};

export const serviceCreditSchema: Schema<ServiceCredit> = s.object<ServiceCredit>({
  id: s.optional(s.number()),
  amountInCents: s.optional(s.number()),
  endingBalanceInCents: s.optional(s.number()),
  entryType: s.optional(s.lazy(() => serviceCreditTypeSchema)),
  memo: s.optional(s.string()),
  _keysMap: {
    amountInCents: "amount_in_cents",
    endingBalanceInCents: "ending_balance_in_cents",
    entryType: "entry_type",
  },
});
