import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountHolderTypeSchema, type BankAccountHolderType } from "./bank-account-holder-type.js";
import { bankAccountTypeSchema, type BankAccountType } from "./bank-account-type.js";
import { bankAccountVaultSchema, type BankAccountVault } from "./bank-account-vault.js";
import { paymentTypeSchema, type PaymentType } from "./payment-type.js";

export type SubscriptionGroupBankAccount = {
  bankName?: string;
  bankAccountNumber?: string;
  bankRoutingNumber?: string;
  bankIban?: string;
  bankBranchCode?: string;
  bankAccountType?: BankAccountType;
  bankAccountHolderType?: BankAccountHolderType;
  paymentType?: PaymentType;
  billingAddress?: string;
  billingCity?: string;
  billingState?: string;
  billingZip?: string;
  billingCountry?: string;
  chargifyToken?: string;
  currentVault?: BankAccountVault;
  gatewayHandle?: string;
};

export const subscriptionGroupBankAccountSchema: Schema<SubscriptionGroupBankAccount> =
  s.object<SubscriptionGroupBankAccount>({
    bankName: s.optional(s.string()),
    bankAccountNumber: s.optional(s.string()),
    bankRoutingNumber: s.optional(s.string()),
    bankIban: s.optional(s.string()),
    bankBranchCode: s.optional(s.string()),
    bankAccountType: s.optional(s.lazy(() => bankAccountTypeSchema)),
    bankAccountHolderType: s.optional(s.lazy(() => bankAccountHolderTypeSchema)),
    paymentType: s.optional(s.lazy(() => paymentTypeSchema)),
    billingAddress: s.optional(s.string()),
    billingCity: s.optional(s.string()),
    billingState: s.optional(s.string()),
    billingZip: s.optional(s.string()),
    billingCountry: s.optional(s.string()),
    chargifyToken: s.optional(s.string()),
    currentVault: s.optional(s.lazy(() => bankAccountVaultSchema)),
    gatewayHandle: s.optional(s.string()),
    _keysMap: {
      bankName: "bank_name",
      bankAccountNumber: "bank_account_number",
      bankRoutingNumber: "bank_routing_number",
      bankIban: "bank_iban",
      bankBranchCode: "bank_branch_code",
      bankAccountType: "bank_account_type",
      bankAccountHolderType: "bank_account_holder_type",
      paymentType: "payment_type",
      billingAddress: "billing_address",
      billingCity: "billing_city",
      billingState: "billing_state",
      billingZip: "billing_zip",
      billingCountry: "billing_country",
      chargifyToken: "chargify_token",
      currentVault: "current_vault",
      gatewayHandle: "gateway_handle",
    },
  });
