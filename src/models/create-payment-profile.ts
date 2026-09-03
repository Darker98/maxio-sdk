import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { allVaultsSchema, type AllVaults } from "./all-vaults.js";
import { bankAccountHolderTypeSchema, type BankAccountHolderType } from "./bank-account-holder-type.js";
import { bankAccountTypeSchema, type BankAccountType } from "./bank-account-type.js";
import { cardTypeSchema, type CardType } from "./card-type.js";
import { paymentTypeSchema, type PaymentType } from "./payment-type.js";
import { expirationMonth1Schema, type ExpirationMonth1 } from "./unions/expiration-month1.js";
import { expirationYear1Schema, type ExpirationYear1 } from "./unions/expiration-year1.js";

export type CreatePaymentProfile = {
  chargifyToken?: string;
  id?: number;
  paymentType?: PaymentType;
  firstName?: string;
  lastName?: string;
  maskedCardNumber?: string;
  fullNumber?: string;
  cardType?: CardType;
  expirationMonth?: ExpirationMonth1;
  expirationYear?: ExpirationYear1;
  billingAddress?: string;
  billingAddress2?: string | null;
  billingCity?: string;
  billingState?: string;
  billingCountry?: string;
  billingZip?: string;
  currentVault?: AllVaults;
  vaultToken?: string;
  customerVaultToken?: string;
  customerId?: number;
  paypalEmail?: string;
  paymentMethodNonce?: string;
  gatewayHandle?: string;
  cvv?: string;
  bankName?: string;
  bankIban?: string;
  bankRoutingNumber?: string;
  bankAccountNumber?: string;
  bankBranchCode?: string;
  bankAccountType?: BankAccountType;
  bankAccountHolderType?: BankAccountHolderType;
  lastFour?: string;
};

export const createPaymentProfileSchema: Schema<CreatePaymentProfile> = s.object<CreatePaymentProfile>({
  chargifyToken: s.optional(s.string()),
  id: s.optional(s.number()),
  paymentType: s.optional(s.lazy(() => paymentTypeSchema)),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  maskedCardNumber: s.optional(s.string()),
  fullNumber: s.optional(s.string()),
  cardType: s.optional(s.lazy(() => cardTypeSchema)),
  expirationMonth: s.optional(s.lazy(() => expirationMonth1Schema)),
  expirationYear: s.optional(s.lazy(() => expirationYear1Schema)),
  billingAddress: s.optional(s.string()),
  billingAddress2: s.optionalNullable(s.string()),
  billingCity: s.optional(s.string()),
  billingState: s.optional(s.string()),
  billingCountry: s.optional(s.string()),
  billingZip: s.optional(s.string()),
  currentVault: s.optional(s.lazy(() => allVaultsSchema)),
  vaultToken: s.optional(s.string()),
  customerVaultToken: s.optional(s.string()),
  customerId: s.optional(s.number()),
  paypalEmail: s.optional(s.string()),
  paymentMethodNonce: s.optional(s.string()),
  gatewayHandle: s.optional(s.string()),
  cvv: s.optional(s.string()),
  bankName: s.optional(s.string()),
  bankIban: s.optional(s.string()),
  bankRoutingNumber: s.optional(s.string()),
  bankAccountNumber: s.optional(s.string()),
  bankBranchCode: s.optional(s.string()),
  bankAccountType: s.optional(s.lazy(() => bankAccountTypeSchema)),
  bankAccountHolderType: s.optional(s.lazy(() => bankAccountHolderTypeSchema)),
  lastFour: s.optional(s.string()),
  _keysMap: {
    chargifyToken: "chargify_token",
    paymentType: "payment_type",
    firstName: "first_name",
    lastName: "last_name",
    maskedCardNumber: "masked_card_number",
    fullNumber: "full_number",
    cardType: "card_type",
    expirationMonth: "expiration_month",
    expirationYear: "expiration_year",
    billingAddress: "billing_address",
    billingAddress2: "billing_address_2",
    billingCity: "billing_city",
    billingState: "billing_state",
    billingCountry: "billing_country",
    billingZip: "billing_zip",
    currentVault: "current_vault",
    vaultToken: "vault_token",
    customerVaultToken: "customer_vault_token",
    customerId: "customer_id",
    paypalEmail: "paypal_email",
    paymentMethodNonce: "payment_method_nonce",
    gatewayHandle: "gateway_handle",
    bankName: "bank_name",
    bankIban: "bank_iban",
    bankRoutingNumber: "bank_routing_number",
    bankAccountNumber: "bank_account_number",
    bankBranchCode: "bank_branch_code",
    bankAccountType: "bank_account_type",
    bankAccountHolderType: "bank_account_holder_type",
    lastFour: "last_four",
  },
});
