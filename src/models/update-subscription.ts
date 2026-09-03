import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditCardAttributesSchema, type CreditCardAttributes } from "./credit-card-attributes.js";
import { subscriptionCustomPriceSchema, type SubscriptionCustomPrice } from "./subscription-custom-price.js";
import { netTerms1Schema, type NetTerms1 } from "./unions/net-terms1.js";
import { snapDay1Schema, type SnapDay1 } from "./unions/snap-day1.js";
import {
  updateSubscriptionComponentSchema,
  type UpdateSubscriptionComponent,
} from "./update-subscription-component.js";

export type UpdateSubscription = {
  creditCardAttributes?: CreditCardAttributes;
  productHandle?: string;
  productId?: number;
  productChangeDelayed?: boolean;
  nextProductId?: string;
  nextProductPricePointId?: string;
  snapDay?: SnapDay1;
  initialBillingAt?: Date;
  deferSignup?: boolean;
  nextBillingAt?: Date;
  brandingThemeId?: number | null;
  expiresAt?: Date;
  paymentCollectionMethod?: string;
  receivesInvoiceEmails?: boolean;
  netTerms?: NetTerms1;
  storedCredentialTransactionId?: number;
  reference?: string;
  customPrice?: SubscriptionCustomPrice;
  components?: UpdateSubscriptionComponent[];
  dunningCommunicationDelayEnabled?: boolean;
  dunningCommunicationDelayTimeZone?: string | null;
  productPricePointId?: number;
  productPricePointHandle?: string;
};

export const updateSubscriptionSchema: Schema<UpdateSubscription> = s.object<UpdateSubscription>({
  creditCardAttributes: s.optional(s.lazy(() => creditCardAttributesSchema)),
  productHandle: s.optional(s.string()),
  productId: s.optional(s.number()),
  productChangeDelayed: s.optional(s.boolean()),
  nextProductId: s.optional(s.string()),
  nextProductPricePointId: s.optional(s.string()),
  snapDay: s.optional(s.lazy(() => snapDay1Schema)),
  initialBillingAt: s.optional(s.dateTime()),
  deferSignup: s.optional(s.boolean()),
  nextBillingAt: s.optional(s.dateTime()),
  brandingThemeId: s.optionalNullable(s.number()),
  expiresAt: s.optional(s.dateTime()),
  paymentCollectionMethod: s.optional(s.string()),
  receivesInvoiceEmails: s.optional(s.boolean()),
  netTerms: s.optional(s.lazy(() => netTerms1Schema)),
  storedCredentialTransactionId: s.optional(s.number()),
  reference: s.optional(s.string()),
  customPrice: s.optional(s.lazy(() => subscriptionCustomPriceSchema)),
  components: s.optional(s.array(s.lazy(() => updateSubscriptionComponentSchema))),
  dunningCommunicationDelayEnabled: s.optional(s.boolean()),
  dunningCommunicationDelayTimeZone: s.optionalNullable(s.string()),
  productPricePointId: s.optional(s.number()),
  productPricePointHandle: s.optional(s.string()),
  _keysMap: {
    creditCardAttributes: "credit_card_attributes",
    productHandle: "product_handle",
    productId: "product_id",
    productChangeDelayed: "product_change_delayed",
    nextProductId: "next_product_id",
    nextProductPricePointId: "next_product_price_point_id",
    snapDay: "snap_day",
    initialBillingAt: "initial_billing_at",
    deferSignup: "defer_signup",
    nextBillingAt: "next_billing_at",
    brandingThemeId: "branding_theme_id",
    expiresAt: "expires_at",
    paymentCollectionMethod: "payment_collection_method",
    receivesInvoiceEmails: "receives_invoice_emails",
    netTerms: "net_terms",
    storedCredentialTransactionId: "stored_credential_transaction_id",
    customPrice: "custom_price",
    dunningCommunicationDelayEnabled: "dunning_communication_delay_enabled",
    dunningCommunicationDelayTimeZone: "dunning_communication_delay_time_zone",
    productPricePointId: "product_price_point_id",
    productPricePointHandle: "product_price_point_handle",
  },
});
