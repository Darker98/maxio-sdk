import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountBalanceSchema, type AccountBalance } from "./account-balance.js";

export type AccountBalances = {
  openInvoices?: AccountBalance;
  pendingInvoices?: AccountBalance;
  pendingDiscounts?: AccountBalance;
  serviceCredits?: AccountBalance;
  prepayments?: AccountBalance;
};

export const accountBalancesSchema: Schema<AccountBalances> = s.object<AccountBalances>({
  openInvoices: s.optional(s.lazy(() => accountBalanceSchema)),
  pendingInvoices: s.optional(s.lazy(() => accountBalanceSchema)),
  pendingDiscounts: s.optional(s.lazy(() => accountBalanceSchema)),
  serviceCredits: s.optional(s.lazy(() => accountBalanceSchema)),
  prepayments: s.optional(s.lazy(() => accountBalanceSchema)),
  _keysMap: {
    openInvoices: "open_invoices",
    pendingInvoices: "pending_invoices",
    pendingDiscounts: "pending_discounts",
    serviceCredits: "service_credits",
  },
});
