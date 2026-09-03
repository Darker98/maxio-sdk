import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount5Schema, type Amount5 } from "./unions/amount5.js";

export type RefundPrepayment = {
  amountInCents: number | null;
  amount: Amount5;
  memo: string;
  external?: boolean;
};

export const refundPrepaymentSchema: Schema<RefundPrepayment> = s.object<RefundPrepayment>({
  amountInCents: s.nullable(s.number()),
  amount: amount5Schema,
  memo: s.string(),
  external: s.optional(s.boolean()),
  _keysMap: {
    amountInCents: "amount_in_cents",
  },
});
