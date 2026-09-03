import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { allVaultsSchema, type AllVaults } from "./all-vaults.js";
import { cardTypeSchema, type CardType } from "./card-type.js";
import { paymentTypeSchema, type PaymentType } from "./payment-type.js";
import { expirationMonth2Schema, type ExpirationMonth2 } from "./unions/expiration-month2.js";
import { expirationYear2Schema, type ExpirationYear2 } from "./unions/expiration-year2.js";

export type PaymentProfileAttributes = {
  chargifyToken?: string;
  id?: number;
  paymentType?: PaymentType;
  firstName?: string;
  lastName?: string;
  maskedCardNumber?: string;
  fullNumber?: string;
  cardType?: CardType;
  expirationMonth?: ExpirationMonth2;
  expirationYear?: ExpirationYear2;
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
  lastFour?: string;
};

export const paymentProfileAttributesSchema: Schema<PaymentProfileAttributes> =
  s.object<PaymentProfileAttributes>({
    chargifyToken: s.optional(s.string()),
    id: s.optional(s.number()),
    paymentType: s.optional(s.lazy(() => paymentTypeSchema)),
    firstName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    maskedCardNumber: s.optional(s.string()),
    fullNumber: s.optional(s.string()),
    cardType: s.optional(s.lazy(() => cardTypeSchema)),
    expirationMonth: s.optional(s.lazy(() => expirationMonth2Schema)),
    expirationYear: s.optional(s.lazy(() => expirationYear2Schema)),
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
      lastFour: "last_four",
    },
  });
