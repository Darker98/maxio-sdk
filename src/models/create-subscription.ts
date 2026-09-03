import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { achAgreementSchema, type AchAgreement } from "./ach-agreement.js";
import { agreementAcceptanceSchema, type AgreementAcceptance } from "./agreement-acceptance.js";
import { bankAccountAttributesSchema, type BankAccountAttributes } from "./bank-account-attributes.js";
import { calendarBillingSchema, type CalendarBilling } from "./calendar-billing.js";
import { collectionMethodSchema, type CollectionMethod } from "./collection-method.js";
import {
  createSubscriptionComponentSchema,
  type CreateSubscriptionComponent,
} from "./create-subscription-component.js";
import { customerAttributesSchema, type CustomerAttributes } from "./customer-attributes.js";
import { groupSettingsSchema, type GroupSettings } from "./group-settings.js";
import {
  paymentProfileAttributesSchema,
  type PaymentProfileAttributes,
} from "./payment-profile-attributes.js";
import { subscriptionCustomPriceSchema, type SubscriptionCustomPrice } from "./subscription-custom-price.js";
import { offerIdSchema, type OfferId } from "./unions/offer-id.js";
import {
  upsertPrepaidConfigurationSchema,
  type UpsertPrepaidConfiguration,
} from "./upsert-prepaid-configuration.js";

export type CreateSubscription = {
  productHandle?: string;
  productId?: number;
  productPricePointHandle?: string;
  productPricePointId?: number;
  customPrice?: SubscriptionCustomPrice;
  couponCode?: string;
  couponCodes?: string[];
  paymentCollectionMethod?: CollectionMethod;
  receivesInvoiceEmails?: string;
  netTerms?: string;
  customerId?: number;
  brandingThemeId?: number | null;
  nextBillingAt?: Date;
  initialBillingAt?: Date;
  deferSignup?: boolean;
  storedCredentialTransactionId?: number;
  salesRepId?: number;
  paymentProfileId?: number;
  reference?: string;
  customerAttributes?: CustomerAttributes;
  paymentProfileAttributes?: PaymentProfileAttributes;
  creditCardAttributes?: PaymentProfileAttributes;
  bankAccountAttributes?: BankAccountAttributes;
  components?: CreateSubscriptionComponent[];
  calendarBilling?: CalendarBilling;
  metafields?: Record<string, string>;
  customerReference?: string;
  group?: GroupSettings;
  ref?: string;
  cancellationMessage?: string;
  cancellationMethod?: string;
  currency?: string;
  expiresAt?: Date;
  expirationTracksNextBillingChange?: string;
  agreementTerms?: string;
  authorizerFirstName?: string;
  authorizerLastName?: string;
  calendarBillingFirstCharge?: string;
  reasonCode?: string;
  productChangeDelayed?: boolean;
  offerId?: OfferId;
  prepaidConfiguration?: UpsertPrepaidConfiguration;
  previousBillingAt?: Date;
  importMrr?: boolean;
  canceledAt?: Date;
  activatedAt?: Date;
  agreementAcceptance?: AgreementAcceptance;
  achAgreement?: AchAgreement;
  dunningCommunicationDelayEnabled?: boolean;
  dunningCommunicationDelayTimeZone?: string | null;
  skipBillingManifestTaxes?: boolean;
};

export const createSubscriptionSchema: Schema<CreateSubscription> = s.object<CreateSubscription>({
  productHandle: s.optional(s.string()),
  productId: s.optional(s.number()),
  productPricePointHandle: s.optional(s.string()),
  productPricePointId: s.optional(s.number()),
  customPrice: s.optional(s.lazy(() => subscriptionCustomPriceSchema)),
  couponCode: s.optional(s.string()),
  couponCodes: s.optional(s.array(s.string())),
  paymentCollectionMethod: s.optional(s.lazy(() => collectionMethodSchema)),
  receivesInvoiceEmails: s.optional(s.string()),
  netTerms: s.optional(s.string()),
  customerId: s.optional(s.number()),
  brandingThemeId: s.optionalNullable(s.number()),
  nextBillingAt: s.optional(s.dateTime()),
  initialBillingAt: s.optional(s.dateTime()),
  deferSignup: s.optional(s.boolean()),
  storedCredentialTransactionId: s.optional(s.number()),
  salesRepId: s.optional(s.number()),
  paymentProfileId: s.optional(s.number()),
  reference: s.optional(s.string()),
  customerAttributes: s.optional(s.lazy(() => customerAttributesSchema)),
  paymentProfileAttributes: s.optional(s.lazy(() => paymentProfileAttributesSchema)),
  creditCardAttributes: s.optional(s.lazy(() => paymentProfileAttributesSchema)),
  bankAccountAttributes: s.optional(s.lazy(() => bankAccountAttributesSchema)),
  components: s.optional(s.array(s.lazy(() => createSubscriptionComponentSchema))),
  calendarBilling: s.optional(s.lazy(() => calendarBillingSchema)),
  metafields: s.optional(s.record(s.string(), s.string())),
  customerReference: s.optional(s.string()),
  group: s.optional(s.lazy(() => groupSettingsSchema)),
  ref: s.optional(s.string()),
  cancellationMessage: s.optional(s.string()),
  cancellationMethod: s.optional(s.string()),
  currency: s.optional(s.string()),
  expiresAt: s.optional(s.dateTime()),
  expirationTracksNextBillingChange: s.optional(s.string()),
  agreementTerms: s.optional(s.string()),
  authorizerFirstName: s.optional(s.string()),
  authorizerLastName: s.optional(s.string()),
  calendarBillingFirstCharge: s.optional(s.string()),
  reasonCode: s.optional(s.string()),
  productChangeDelayed: s.optional(s.boolean()),
  offerId: s.optional(s.lazy(() => offerIdSchema)),
  prepaidConfiguration: s.optional(s.lazy(() => upsertPrepaidConfigurationSchema)),
  previousBillingAt: s.optional(s.dateTime()),
  importMrr: s.optional(s.boolean()),
  canceledAt: s.optional(s.dateTime()),
  activatedAt: s.optional(s.dateTime()),
  agreementAcceptance: s.optional(s.lazy(() => agreementAcceptanceSchema)),
  achAgreement: s.optional(s.lazy(() => achAgreementSchema)),
  dunningCommunicationDelayEnabled: s.optional(s.boolean()),
  dunningCommunicationDelayTimeZone: s.optionalNullable(s.string()),
  skipBillingManifestTaxes: s.optional(s.boolean()),
  _keysMap: {
    productHandle: "product_handle",
    productId: "product_id",
    productPricePointHandle: "product_price_point_handle",
    productPricePointId: "product_price_point_id",
    customPrice: "custom_price",
    couponCode: "coupon_code",
    couponCodes: "coupon_codes",
    paymentCollectionMethod: "payment_collection_method",
    receivesInvoiceEmails: "receives_invoice_emails",
    netTerms: "net_terms",
    customerId: "customer_id",
    brandingThemeId: "branding_theme_id",
    nextBillingAt: "next_billing_at",
    initialBillingAt: "initial_billing_at",
    deferSignup: "defer_signup",
    storedCredentialTransactionId: "stored_credential_transaction_id",
    salesRepId: "sales_rep_id",
    paymentProfileId: "payment_profile_id",
    customerAttributes: "customer_attributes",
    paymentProfileAttributes: "payment_profile_attributes",
    creditCardAttributes: "credit_card_attributes",
    bankAccountAttributes: "bank_account_attributes",
    calendarBilling: "calendar_billing",
    customerReference: "customer_reference",
    cancellationMessage: "cancellation_message",
    cancellationMethod: "cancellation_method",
    expiresAt: "expires_at",
    expirationTracksNextBillingChange: "expiration_tracks_next_billing_change",
    agreementTerms: "agreement_terms",
    authorizerFirstName: "authorizer_first_name",
    authorizerLastName: "authorizer_last_name",
    calendarBillingFirstCharge: "calendar_billing_first_charge",
    reasonCode: "reason_code",
    productChangeDelayed: "product_change_delayed",
    offerId: "offer_id",
    prepaidConfiguration: "prepaid_configuration",
    previousBillingAt: "previous_billing_at",
    importMrr: "import_mrr",
    canceledAt: "canceled_at",
    activatedAt: "activated_at",
    agreementAcceptance: "agreement_acceptance",
    achAgreement: "ach_agreement",
    dunningCommunicationDelayEnabled: "dunning_communication_delay_enabled",
    dunningCommunicationDelayTimeZone: "dunning_communication_delay_time_zone",
    skipBillingManifestTaxes: "skip_billing_manifest_taxes",
  },
});
