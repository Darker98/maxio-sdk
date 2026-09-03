import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardTypeSchema, type CardType } from "./card-type.js";
import { creditCardVaultSchema, type CreditCardVault } from "./credit-card-vault.js";
import { paymentTypeSchema, type PaymentType } from "./payment-type.js";

export type CreditCardPaymentProfile = {
  id?: number;
  firstName?: string;
  lastName?: string;
  maskedCardNumber?: string;
  cardType?: CardType;
  expirationMonth?: number;
  expirationYear?: number;
  customerId?: number;
  currentVault?: CreditCardVault;
  vaultToken?: string | null;
  billingAddress?: string | null;
  billingCity?: string | null;
  billingState?: string | null;
  billingZip?: string | null;
  billingCountry?: string | null;
  customerVaultToken?: string | null;
  billingAddress2?: string | null;
  paymentType: PaymentType;
  disabled?: boolean;
  chargifyToken?: string;
  siteGatewaySettingId?: number | null;
  gatewayHandle?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
};

export const creditCardPaymentProfileSchema: Schema<CreditCardPaymentProfile> =
  s.object<CreditCardPaymentProfile>({
    id: s.optional(s.number()),
    firstName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    maskedCardNumber: s.optional(s.string()),
    cardType: s.optional(s.lazy(() => cardTypeSchema)),
    expirationMonth: s.optional(s.number()),
    expirationYear: s.optional(s.number()),
    customerId: s.optional(s.number()),
    currentVault: s.optional(s.lazy(() => creditCardVaultSchema)),
    vaultToken: s.optionalNullable(s.string()),
    billingAddress: s.optionalNullable(s.string()),
    billingCity: s.optionalNullable(s.string()),
    billingState: s.optionalNullable(s.string()),
    billingZip: s.optionalNullable(s.string()),
    billingCountry: s.optionalNullable(s.string()),
    customerVaultToken: s.optionalNullable(s.string()),
    billingAddress2: s.optionalNullable(s.string()),
    paymentType: paymentTypeSchema,
    disabled: s.optional(s.boolean()),
    chargifyToken: s.optional(s.string()),
    siteGatewaySettingId: s.optionalNullable(s.number()),
    gatewayHandle: s.optionalNullable(s.string()),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    _keysMap: {
      firstName: "first_name",
      lastName: "last_name",
      maskedCardNumber: "masked_card_number",
      cardType: "card_type",
      expirationMonth: "expiration_month",
      expirationYear: "expiration_year",
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
      paymentType: "payment_type",
      chargifyToken: "chargify_token",
      siteGatewaySettingId: "site_gateway_setting_id",
      gatewayHandle: "gateway_handle",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  });
