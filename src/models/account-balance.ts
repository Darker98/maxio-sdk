import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountBalance = {
  balanceInCents?: number;
  automaticBalanceInCents?: number | null;
  remittanceBalanceInCents?: number | null;
};

export const accountBalanceSchema: Schema<AccountBalance> = s.object<AccountBalance>({
  balanceInCents: s.optional(s.number()),
  automaticBalanceInCents: s.optionalNullable(s.number()),
  remittanceBalanceInCents: s.optionalNullable(s.number()),
  _keysMap: {
    balanceInCents: "balance_in_cents",
    automaticBalanceInCents: "automatic_balance_in_cents",
    remittanceBalanceInCents: "remittance_balance_in_cents",
  },
});
