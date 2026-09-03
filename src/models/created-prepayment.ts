import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreatedPrepayment = {
  id?: number;
  subscriptionId?: number;
  amountInCents?: number;
  memo?: string;
  createdAt?: Date;
  startingBalanceInCents?: number;
  endingBalanceInCents?: number;
};

export const createdPrepaymentSchema: Schema<CreatedPrepayment> = s.object<CreatedPrepayment>({
  id: s.optional(s.number()),
  subscriptionId: s.optional(s.number()),
  amountInCents: s.optional(s.number()),
  memo: s.optional(s.string()),
  createdAt: s.optional(s.dateTime()),
  startingBalanceInCents: s.optional(s.number()),
  endingBalanceInCents: s.optional(s.number()),
  _keysMap: {
    subscriptionId: "subscription_id",
    amountInCents: "amount_in_cents",
    createdAt: "created_at",
    startingBalanceInCents: "starting_balance_in_cents",
    endingBalanceInCents: "ending_balance_in_cents",
  },
});
