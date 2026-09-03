import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BankAccountVault = {
  Authorizenet: "authorizenet",
  BlueSnap: "blue_snap",
  Bogus: "bogus",
  Forte: "forte",
  Gocardless: "gocardless",
  MaxioPayments: "maxio_payments",
  Maxp: "maxp",
  StripeConnect: "stripe_connect",
} as const;
export type BankAccountVault = (typeof BankAccountVault)[keyof typeof BankAccountVault] | (string & {});

export const bankAccountVaultSchema: EnumSchema<BankAccountVault> =
  s.enumOf<BankAccountVault>(BankAccountVault);
