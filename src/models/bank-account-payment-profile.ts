import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountHolderTypeSchema, type BankAccountHolderType } from "./bank-account-holder-type.js";
import { bankAccountTypeSchema, type BankAccountType } from "./bank-account-type.js";
import { bankAccountVaultSchema, type BankAccountVault } from "./bank-account-vault.js";
import { paymentTypeSchema, type PaymentType } from "./payment-type.js";

export type BankAccountPaymentProfile = {
  id?: number;
  firstName?: string;
  lastName?: string;
  customerId?: number;
  currentVault?: BankAccountVault;
  vaultToken?: string;
  billingAddress?: string | null;
  billingCity?: string | null;
  billingState?: string | null;
  billingZip?: string | null;
  billingCountry?: string | null;
  customerVaultToken?: string | null;
  billingAddress2?: string | null;
  bankName?: string;
  maskedBankRoutingNumber?: string | null;
  bankAccountType?: BankAccountType;
  bankAccountHolderType?: BankAccountHolderType;
  paymentType: PaymentType;
  verified?: boolean;
  siteGatewaySettingId?: number | null;
  gatewayHandle?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
};

export const bankAccountPaymentProfileSchema: Schema<BankAccountPaymentProfile> =
  s.object<BankAccountPaymentProfile>({
    id: s.optional(s.number()),
    firstName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    customerId: s.optional(s.number()),
    currentVault: s.optional(s.lazy(() => bankAccountVaultSchema)),
    vaultToken: s.optional(s.string()),
    billingAddress: s.optionalNullable(s.string()),
    billingCity: s.optionalNullable(s.string()),
    billingState: s.optionalNullable(s.string()),
    billingZip: s.optionalNullable(s.string()),
    billingCountry: s.optionalNullable(s.string()),
    customerVaultToken: s.optionalNullable(s.string()),
    billingAddress2: s.optionalNullable(s.string()),
    bankName: s.optional(s.string()),
    maskedBankRoutingNumber: s.optionalNullable(s.string()),
    bankAccountType: s.optional(s.lazy(() => bankAccountTypeSchema)),
    bankAccountHolderType: s.optional(s.lazy(() => bankAccountHolderTypeSchema)),
    paymentType: paymentTypeSchema,
    verified: s.optional(s.boolean()),
    siteGatewaySettingId: s.optionalNullable(s.number()),
    gatewayHandle: s.optionalNullable(s.string()),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    _keysMap: {
      firstName: "first_name",
      lastName: "last_name",
      customerId: "customer_id",
      currentVault: "current_vault",
      vaultToken: "vault_token",
      billingAddress: "billing_address",
      billingCity: "billing_city",
      billingState: "billing_state",
      billingZip: "billing_zip",
      billingCountry: "billing_country",
      customerVaultToken: "customer_vault_token",
      billingAddress2: "billing_address_2",
      bankName: "bank_name",
      maskedBankRoutingNumber: "masked_bank_routing_number",
      bankAccountType: "bank_account_type",
      bankAccountHolderType: "bank_account_holder_type",
      paymentType: "payment_type",
      siteGatewaySettingId: "site_gateway_setting_id",
      gatewayHandle: "gateway_handle",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  });
