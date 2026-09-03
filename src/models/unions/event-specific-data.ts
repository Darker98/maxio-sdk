import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { chjsTokenizationFailureSchema, type ChjsTokenizationFailure } from "../chjs-tokenization-failure.js";
import { chjsTokenizationSuccessSchema, type ChjsTokenizationSuccess } from "../chjs-tokenization-success.js";
import {
  componentAllocationChangeSchema,
  type ComponentAllocationChange,
} from "../component-allocation-change.js";
import {
  creditAccountBalanceChangedSchema,
  type CreditAccountBalanceChanged,
} from "../credit-account-balance-changed.js";
import { customFieldValueChangeSchema, type CustomFieldValueChange } from "../custom-field-value-change.js";
import { dunningStepReachedSchema, type DunningStepReached } from "../dunning-step-reached.js";
import { invoiceIssuedSchema, type InvoiceIssued } from "../invoice-issued.js";
import { itemPricePointChangedSchema, type ItemPricePointChanged } from "../item-price-point-changed.js";
import { meteredUsageSchema, type MeteredUsage } from "../metered-usage.js";
import {
  paymentCollectionMethodChangedSchema,
  type PaymentCollectionMethodChanged,
} from "../payment-collection-method-changed.js";
import { paymentRelatedEventsSchema, type PaymentRelatedEvents } from "../payment-related-events.js";
import {
  pendingCancellationChangeSchema,
  type PendingCancellationChange,
} from "../pending-cancellation-change.js";
import {
  prepaidSubscriptionBalanceChangedSchema,
  type PrepaidSubscriptionBalanceChanged,
} from "../prepaid-subscription-balance-changed.js";
import { prepaidUsageSchema, type PrepaidUsage } from "../prepaid-usage.js";
import {
  prepaymentAccountBalanceChangedSchema,
  type PrepaymentAccountBalanceChanged,
} from "../prepayment-account-balance-changed.js";
import { proformaInvoiceIssuedSchema, type ProformaInvoiceIssued } from "../proforma-invoice-issued.js";
import { refundSuccessSchema, type RefundSuccess } from "../refund-success.js";
import {
  subscriptionGroupSignupEventDataSchema,
  type SubscriptionGroupSignupEventData,
} from "../subscription-group-signup-event-data.js";
import {
  subscriptionProductChangeScheduledSchema,
  type SubscriptionProductChangeScheduled,
} from "../subscription-product-change-scheduled.js";
import {
  subscriptionProductChangeSchema,
  type SubscriptionProductChange,
} from "../subscription-product-change.js";
import { subscriptionStateChangeSchema, type SubscriptionStateChange } from "../subscription-state-change.js";

export type EventSpecificData =
  | SubscriptionProductChange
  | SubscriptionProductChangeScheduled
  | SubscriptionStateChange
  | PaymentRelatedEvents
  | RefundSuccess
  | ComponentAllocationChange
  | MeteredUsage
  | PrepaidUsage
  | DunningStepReached
  | InvoiceIssued
  | PendingCancellationChange
  | PrepaidSubscriptionBalanceChanged
  | ProformaInvoiceIssued
  | SubscriptionGroupSignupEventData
  | CreditAccountBalanceChanged
  | PrepaymentAccountBalanceChanged
  | PaymentCollectionMethodChanged
  | ItemPricePointChanged
  | CustomFieldValueChange
  | ChjsTokenizationSuccess
  | ChjsTokenizationFailure;

export const eventSpecificDataSchema: Schema<EventSpecificData> = s.of<EventSpecificData>(
  s.union([
    s.lazy(() => subscriptionProductChangeSchema),
    s.lazy(() => subscriptionProductChangeScheduledSchema),
    s.lazy(() => subscriptionStateChangeSchema),
    s.lazy(() => paymentRelatedEventsSchema),
    s.lazy(() => refundSuccessSchema),
    s.lazy(() => componentAllocationChangeSchema),
    s.lazy(() => meteredUsageSchema),
    s.lazy(() => prepaidUsageSchema),
    s.lazy(() => dunningStepReachedSchema),
    s.lazy(() => invoiceIssuedSchema),
    s.lazy(() => pendingCancellationChangeSchema),
    s.lazy(() => prepaidSubscriptionBalanceChangedSchema),
    s.lazy(() => proformaInvoiceIssuedSchema),
    s.lazy(() => subscriptionGroupSignupEventDataSchema),
    s.lazy(() => creditAccountBalanceChangedSchema),
    s.lazy(() => prepaymentAccountBalanceChangedSchema),
    s.lazy(() => paymentCollectionMethodChangedSchema),
    s.lazy(() => itemPricePointChangedSchema),
    s.lazy(() => customFieldValueChangeSchema),
    s.lazy(() => chjsTokenizationSuccessSchema),
    s.lazy(() => chjsTokenizationFailureSchema),
  ]),
);
