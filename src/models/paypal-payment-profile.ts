import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payPalVaultSchema, type PayPalVault } from "./pay-pal-vault.js";
import { paymentTypeSchema, type PaymentType } from "./payment-type.js";

export type PaypalPaymentProfile = {
  id?: number;
  firstName?: string;
  lastName?: string;
  customerId?: number;
  currentVault?: PayPalVault;
  vaultToken?: string;
  billingAddress?: string | null;
  billingCity?: string | null;
  billingState?: string | null;
  billingZip?: string | null;
  billingCountry?: string | null;
  customerVaultToken?: string | null;
  billingAddress2?: string | null;
  paymentType: PaymentType;
  siteGatewaySettingId?: number | null;
  gatewayHandle?: string | null;
  paypalEmail?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export const paypalPaymentProfileSchema: Schema<PaypalPaymentProfile> = s.object<PaypalPaymentProfile>({
  id: s.optional(s.number()),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  customerId: s.optional(s.number()),
  currentVault: s.optional(s.lazy(() => payPalVaultSchema)),
  vaultToken: s.optional(s.string()),
  billingAddress: s.optionalNullable(s.string()),
  billingCity: s.optionalNullable(s.string()),
  billingState: s.optionalNullable(s.string()),
  billingZip: s.optionalNullable(s.string()),
  billingCountry: s.optionalNullable(s.string()),
  customerVaultToken: s.optionalNullable(s.string()),
  billingAddress2: s.optionalNullable(s.string()),
  paymentType: paymentTypeSchema,
  siteGatewaySettingId: s.optionalNullable(s.number()),
  gatewayHandle: s.optionalNullable(s.string()),
  paypalEmail: s.optional(s.string()),
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
    paymentType: "payment_type",
    siteGatewaySettingId: "site_gateway_setting_id",
    gatewayHandle: "gateway_handle",
    paypalEmail: "paypal_email",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
