import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountHolderTypeSchema, type BankAccountHolderType } from "./bank-account-holder-type.js";
import { bankAccountTypeSchema, type BankAccountType } from "./bank-account-type.js";
import { bankAccountVaultSchema, type BankAccountVault } from "./bank-account-vault.js";
import { paymentTypeSchema, type PaymentType } from "./payment-type.js";

export type BankAccountAttributes = {
  chargifyToken?: string;
  bankName?: string;
  bankRoutingNumber?: string;
  bankAccountNumber?: string;
  bankAccountType?: BankAccountType;
  bankBranchCode?: string;
  bankIban?: string;
  bankAccountHolderType?: BankAccountHolderType;
  paymentType?: PaymentType;
  currentVault?: BankAccountVault;
  vaultToken?: string;
  customerVaultToken?: string;
};

export const bankAccountAttributesSchema: Schema<BankAccountAttributes> = s.object<BankAccountAttributes>({
  chargifyToken: s.optional(s.string()),
  bankName: s.optional(s.string()),
  bankRoutingNumber: s.optional(s.string()),
  bankAccountNumber: s.optional(s.string()),
  bankAccountType: s.optional(s.lazy(() => bankAccountTypeSchema)),
  bankBranchCode: s.optional(s.string()),
  bankIban: s.optional(s.string()),
  bankAccountHolderType: s.optional(s.lazy(() => bankAccountHolderTypeSchema)),
  paymentType: s.optional(s.lazy(() => paymentTypeSchema)),
  currentVault: s.optional(s.lazy(() => bankAccountVaultSchema)),
  vaultToken: s.optional(s.string()),
  customerVaultToken: s.optional(s.string()),
  _keysMap: {
    chargifyToken: "chargify_token",
    bankName: "bank_name",
    bankRoutingNumber: "bank_routing_number",
    bankAccountNumber: "bank_account_number",
    bankAccountType: "bank_account_type",
    bankBranchCode: "bank_branch_code",
    bankIban: "bank_iban",
    bankAccountHolderType: "bank_account_holder_type",
    paymentType: "payment_type",
    currentVault: "current_vault",
    vaultToken: "vault_token",
    customerVaultToken: "customer_vault_token",
  },
});
