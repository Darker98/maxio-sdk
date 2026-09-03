import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bankAccountPaymentProfileSchema,
  type BankAccountPaymentProfile,
} from "./bank-account-payment-profile.js";
import { cancellationMethodSchema, type CancellationMethod } from "./cancellation-method.js";
import { collectionMethodSchema, type CollectionMethod } from "./collection-method.js";
import {
  creditCardPaymentProfileSchema,
  type CreditCardPaymentProfile,
} from "./credit-card-payment-profile.js";
import { customerSchema, type Customer } from "./customer.js";
import { nestedSubscriptionGroupSchema, type NestedSubscriptionGroup } from "./nested-subscription-group.js";
import { prepaidConfigurationSchema, type PrepaidConfiguration } from "./prepaid-configuration.js";
import { pricePointTypeSchema, type PricePointType } from "./price-point-type.js";
import { productSchema, type Product } from "./product.js";
import {
  subscriptionIncludedCouponSchema,
  type SubscriptionIncludedCoupon,
} from "./subscription-included-coupon.js";
import { subscriptionStateSchema, type SubscriptionState } from "./subscription-state.js";

export type Subscription = {
  id?: number;
  state?: SubscriptionState;
  balanceInCents?: number;
  totalRevenueInCents?: number;
  productPriceInCents?: number;
  productVersionNumber?: number;
  currentPeriodEndsAt?: Date | null;
  nextAssessmentAt?: Date | null;
  trialStartedAt?: Date | null;
  trialEndedAt?: Date | null;
  activatedAt?: Date | null;
  expiresAt?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
  cancellationMessage?: string | null;
  cancellationMethod?: CancellationMethod | null;
  cancelAtEndOfPeriod?: boolean | null;
  canceledAt?: Date | null;
  currentPeriodStartedAt?: Date | null;
  previousState?: SubscriptionState;
  signupPaymentId?: number;
  signupRevenue?: string;
  delayedCancelAt?: Date | null;
  couponCode?: string | null;
  snapDay?: string | null;
  paymentCollectionMethod?: CollectionMethod;
  customer?: Customer;
  product?: Product;
  creditCard?: CreditCardPaymentProfile;
  group?: NestedSubscriptionGroup | null;
  bankAccount?: BankAccountPaymentProfile;
  paymentType?: string | null;
  referralCode?: string | null;
  nextProductId?: number | null;
  nextProductHandle?: string | null;
  couponUseCount?: number | null;
  couponUsesAllowed?: number | null;
  reasonCode?: string | null;
  automaticallyResumeAt?: Date | null;
  couponCodes?: string[];
  offerId?: number | null;
  payerId?: number | null;
  currentBillingAmountInCents?: number;
  productPricePointId?: number;
  productPricePointType?: PricePointType;
  nextProductPricePointId?: number | null;
  netTerms?: number | null;
  storedCredentialTransactionId?: number | null;
  reference?: string | null;
  onHoldAt?: Date | null;
  prepaidDunning?: boolean;
  coupons?: SubscriptionIncludedCoupon[];
  dunningCommunicationDelayEnabled?: boolean;
  dunningCommunicationDelayTimeZone?: string | null;
  receivesInvoiceEmails?: boolean | null;
  locale?: string | null;
  currency?: string;
  scheduledCancellationAt?: Date | null;
  creditBalanceInCents?: number;
  prepaymentBalanceInCents?: number;
  prepaidConfiguration?: PrepaidConfiguration | null;
  selfServicePageToken?: string;
};

export const subscriptionSchema: Schema<Subscription> = s.object<Subscription>({
  id: s.optional(s.number()),
  state: s.optional(s.lazy(() => subscriptionStateSchema)),
  balanceInCents: s.optional(s.number()),
  totalRevenueInCents: s.optional(s.number()),
  productPriceInCents: s.optional(s.number()),
  productVersionNumber: s.optional(s.number()),
  currentPeriodEndsAt: s.optionalNullable(s.dateTime()),
  nextAssessmentAt: s.optionalNullable(s.dateTime()),
  trialStartedAt: s.optionalNullable(s.dateTime()),
  trialEndedAt: s.optionalNullable(s.dateTime()),
  activatedAt: s.optionalNullable(s.dateTime()),
  expiresAt: s.optionalNullable(s.dateTime()),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  cancellationMessage: s.optionalNullable(s.string()),
  cancellationMethod: s.optionalNullable(s.lazy(() => cancellationMethodSchema)),
  cancelAtEndOfPeriod: s.optionalNullable(s.boolean()),
  canceledAt: s.optionalNullable(s.dateTime()),
  currentPeriodStartedAt: s.optionalNullable(s.dateTime()),
  previousState: s.optional(s.lazy(() => subscriptionStateSchema)),
  signupPaymentId: s.optional(s.number()),
  signupRevenue: s.optional(s.string()),
  delayedCancelAt: s.optionalNullable(s.dateTime()),
  couponCode: s.optionalNullable(s.string()),
  snapDay: s.optionalNullable(s.string()),
  paymentCollectionMethod: s.optional(s.lazy(() => collectionMethodSchema)),
  customer: s.optional(s.lazy(() => customerSchema)),
  product: s.optional(s.lazy(() => productSchema)),
  creditCard: s.optional(s.lazy(() => creditCardPaymentProfileSchema)),
  group: s.optionalNullable(s.lazy(() => nestedSubscriptionGroupSchema)),
  bankAccount: s.optional(s.lazy(() => bankAccountPaymentProfileSchema)),
  paymentType: s.optionalNullable(s.string()),
  referralCode: s.optionalNullable(s.string()),
  nextProductId: s.optionalNullable(s.number()),
  nextProductHandle: s.optionalNullable(s.string()),
  couponUseCount: s.optionalNullable(s.number()),
  couponUsesAllowed: s.optionalNullable(s.number()),
  reasonCode: s.optionalNullable(s.string()),
  automaticallyResumeAt: s.optionalNullable(s.dateTime()),
  couponCodes: s.optional(s.array(s.string())),
  offerId: s.optionalNullable(s.number()),
  payerId: s.optionalNullable(s.number()),
  currentBillingAmountInCents: s.optional(s.number()),
  productPricePointId: s.optional(s.number()),
  productPricePointType: s.optional(s.lazy(() => pricePointTypeSchema)),
  nextProductPricePointId: s.optionalNullable(s.number()),
  netTerms: s.optionalNullable(s.number()),
  storedCredentialTransactionId: s.optionalNullable(s.number()),
  reference: s.optionalNullable(s.string()),
  onHoldAt: s.optionalNullable(s.dateTime()),
  prepaidDunning: s.optional(s.boolean()),
  coupons: s.optional(s.array(s.lazy(() => subscriptionIncludedCouponSchema))),
  dunningCommunicationDelayEnabled: s.optional(s.boolean()),
  dunningCommunicationDelayTimeZone: s.optionalNullable(s.string()),
  receivesInvoiceEmails: s.optionalNullable(s.boolean()),
  locale: s.optionalNullable(s.string()),
  currency: s.optional(s.string()),
  scheduledCancellationAt: s.optionalNullable(s.dateTime()),
  creditBalanceInCents: s.optional(s.number()),
  prepaymentBalanceInCents: s.optional(s.number()),
  prepaidConfiguration: s.optionalNullable(s.lazy(() => prepaidConfigurationSchema)),
  selfServicePageToken: s.optional(s.string()),
  _keysMap: {
    balanceInCents: "balance_in_cents",
    totalRevenueInCents: "total_revenue_in_cents",
    productPriceInCents: "product_price_in_cents",
    productVersionNumber: "product_version_number",
    currentPeriodEndsAt: "current_period_ends_at",
    nextAssessmentAt: "next_assessment_at",
    trialStartedAt: "trial_started_at",
    trialEndedAt: "trial_ended_at",
    activatedAt: "activated_at",
    expiresAt: "expires_at",
    createdAt: "created_at",
    updatedAt: "updated_at",
    cancellationMessage: "cancellation_message",
    cancellationMethod: "cancellation_method",
    cancelAtEndOfPeriod: "cancel_at_end_of_period",
    canceledAt: "canceled_at",
    currentPeriodStartedAt: "current_period_started_at",
    previousState: "previous_state",
    signupPaymentId: "signup_payment_id",
    signupRevenue: "signup_revenue",
    delayedCancelAt: "delayed_cancel_at",
    couponCode: "coupon_code",
    snapDay: "snap_day",
    paymentCollectionMethod: "payment_collection_method",
    creditCard: "credit_card",
    bankAccount: "bank_account",
    paymentType: "payment_type",
    referralCode: "referral_code",
    nextProductId: "next_product_id",
    nextProductHandle: "next_product_handle",
    couponUseCount: "coupon_use_count",
    couponUsesAllowed: "coupon_uses_allowed",
    reasonCode: "reason_code",
    automaticallyResumeAt: "automatically_resume_at",
    couponCodes: "coupon_codes",
    offerId: "offer_id",
    payerId: "payer_id",
    currentBillingAmountInCents: "current_billing_amount_in_cents",
    productPricePointId: "product_price_point_id",
    productPricePointType: "product_price_point_type",
    nextProductPricePointId: "next_product_price_point_id",
    netTerms: "net_terms",
    storedCredentialTransactionId: "stored_credential_transaction_id",
    onHoldAt: "on_hold_at",
    prepaidDunning: "prepaid_dunning",
    dunningCommunicationDelayEnabled: "dunning_communication_delay_enabled",
    dunningCommunicationDelayTimeZone: "dunning_communication_delay_time_zone",
    receivesInvoiceEmails: "receives_invoice_emails",
    scheduledCancellationAt: "scheduled_cancellation_at",
    creditBalanceInCents: "credit_balance_in_cents",
    prepaymentBalanceInCents: "prepayment_balance_in_cents",
    prepaidConfiguration: "prepaid_configuration",
    selfServicePageToken: "self_service_page_token",
  },
});
