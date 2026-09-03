import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { collectionMethodSchema, type CollectionMethod } from "./collection-method.js";
import { invoiceAddressSchema, type InvoiceAddress } from "./invoice-address.js";
import { invoiceAvataxDetailsSchema, type InvoiceAvataxDetails } from "./invoice-avatax-details.js";
import {
  invoiceConsolidationLevelSchema,
  type InvoiceConsolidationLevel,
} from "./invoice-consolidation-level.js";
import { invoiceCreditSchema, type InvoiceCredit } from "./invoice-credit.js";
import { invoiceCustomFieldSchema, type InvoiceCustomField } from "./invoice-custom-field.js";
import { invoiceCustomerSchema, type InvoiceCustomer } from "./invoice-customer.js";
import { invoiceDebitSchema, type InvoiceDebit } from "./invoice-debit.js";
import { invoiceDiscountSchema, type InvoiceDiscount } from "./invoice-discount.js";
import { invoiceDisplaySettingsSchema, type InvoiceDisplaySettings } from "./invoice-display-settings.js";
import { invoiceLineItemSchema, type InvoiceLineItem } from "./invoice-line-item.js";
import { invoicePayerSchema, type InvoicePayer } from "./invoice-payer.js";
import { invoicePaymentSchema, type InvoicePayment } from "./invoice-payment.js";
import { invoicePreviousBalanceSchema, type InvoicePreviousBalance } from "./invoice-previous-balance.js";
import { invoiceRefundSchema, type InvoiceRefund } from "./invoice-refund.js";
import { invoiceRoleSchema, type InvoiceRole } from "./invoice-role.js";
import { invoiceSellerSchema, type InvoiceSeller } from "./invoice-seller.js";
import { invoiceStatusSchema, type InvoiceStatus } from "./invoice-status.js";
import { invoiceTaxSchema, type InvoiceTax } from "./invoice-tax.js";

export type Invoice = {
  id?: number;
  uid?: string;
  siteId?: number;
  customerId?: number;
  subscriptionId?: number;
  number?: string;
  sequenceNumber?: number;
  transactionTime?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  issueDate?: string;
  dueDate?: string;
  paidDate?: string | null;
  status?: InvoiceStatus;
  role?: InvoiceRole;
  parentInvoiceId?: number | null;
  collectionMethod?: CollectionMethod;
  paymentInstructions?: string;
  currency?: string;
  consolidationLevel?: InvoiceConsolidationLevel;
  parentInvoiceUid?: string | null;
  subscriptionGroupId?: number | null;
  parentInvoiceNumber?: number | null;
  groupPrimarySubscriptionId?: number | null;
  productName?: string;
  productFamilyName?: string;
  seller?: InvoiceSeller;
  customer?: InvoiceCustomer;
  payer?: InvoicePayer;
  recipientEmails?: string[];
  netTerms?: number;
  memo?: string;
  billingAddress?: InvoiceAddress;
  shippingAddress?: InvoiceAddress;
  subtotalAmount?: string;
  discountAmount?: string;
  taxAmount?: string;
  totalAmount?: string;
  creditAmount?: string;
  debitAmount?: string;
  refundAmount?: string;
  paidAmount?: string;
  dueAmount?: string;
  lineItems?: InvoiceLineItem[];
  discounts?: InvoiceDiscount[];
  taxes?: InvoiceTax[];
  credits?: InvoiceCredit[];
  debits?: InvoiceDebit[];
  refunds?: InvoiceRefund[];
  payments?: InvoicePayment[];
  customFields?: InvoiceCustomField[];
  displaySettings?: InvoiceDisplaySettings;
  avataxDetails?: InvoiceAvataxDetails;
  publicUrl?: string;
  previousBalanceData?: InvoicePreviousBalance;
  publicUrlExpiresOn?: string;
  brandingThemeId?: number | null;
};

export const invoiceSchema: Schema<Invoice> = s.object<Invoice>({
  id: s.optional(s.number()),
  uid: s.optional(s.string()),
  siteId: s.optional(s.number()),
  customerId: s.optional(s.number()),
  subscriptionId: s.optional(s.number()),
  number: s.optional(s.string()),
  sequenceNumber: s.optional(s.number()),
  transactionTime: s.optional(s.dateTime()),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  issueDate: s.optional(s.dateOnly()),
  dueDate: s.optional(s.dateOnly()),
  paidDate: s.optionalNullable(s.dateOnly()),
  status: s.optional(s.lazy(() => invoiceStatusSchema)),
  role: s.optional(s.lazy(() => invoiceRoleSchema)),
  parentInvoiceId: s.optionalNullable(s.number()),
  collectionMethod: s.optional(s.lazy(() => collectionMethodSchema)),
  paymentInstructions: s.optional(s.string()),
  currency: s.optional(s.string()),
  consolidationLevel: s.optional(s.lazy(() => invoiceConsolidationLevelSchema)),
  parentInvoiceUid: s.optionalNullable(s.string()),
  subscriptionGroupId: s.optionalNullable(s.number()),
  parentInvoiceNumber: s.optionalNullable(s.number()),
  groupPrimarySubscriptionId: s.optionalNullable(s.number()),
  productName: s.optional(s.string()),
  productFamilyName: s.optional(s.string()),
  seller: s.optional(s.lazy(() => invoiceSellerSchema)),
  customer: s.optional(s.lazy(() => invoiceCustomerSchema)),
  payer: s.optional(s.lazy(() => invoicePayerSchema)),
  recipientEmails: s.optional(s.array(s.string())),
  netTerms: s.optional(s.number()),
  memo: s.optional(s.string()),
  billingAddress: s.optional(s.lazy(() => invoiceAddressSchema)),
  shippingAddress: s.optional(s.lazy(() => invoiceAddressSchema)),
  subtotalAmount: s.optional(s.string()),
  discountAmount: s.optional(s.string()),
  taxAmount: s.optional(s.string()),
  totalAmount: s.optional(s.string()),
  creditAmount: s.optional(s.string()),
  debitAmount: s.optional(s.string()),
  refundAmount: s.optional(s.string()),
  paidAmount: s.optional(s.string()),
  dueAmount: s.optional(s.string()),
  lineItems: s.optional(s.array(s.lazy(() => invoiceLineItemSchema))),
  discounts: s.optional(s.array(s.lazy(() => invoiceDiscountSchema))),
  taxes: s.optional(s.array(s.lazy(() => invoiceTaxSchema))),
  credits: s.optional(s.array(s.lazy(() => invoiceCreditSchema))),
  debits: s.optional(s.array(s.lazy(() => invoiceDebitSchema))),
  refunds: s.optional(s.array(s.lazy(() => invoiceRefundSchema))),
  payments: s.optional(s.array(s.lazy(() => invoicePaymentSchema))),
  customFields: s.optional(s.array(s.lazy(() => invoiceCustomFieldSchema))),
  displaySettings: s.optional(s.lazy(() => invoiceDisplaySettingsSchema)),
  avataxDetails: s.optional(s.lazy(() => invoiceAvataxDetailsSchema)),
  publicUrl: s.optional(s.string()),
  previousBalanceData: s.optional(s.lazy(() => invoicePreviousBalanceSchema)),
  publicUrlExpiresOn: s.optional(s.dateOnly()),
  brandingThemeId: s.optionalNullable(s.number()),
  _keysMap: {
    siteId: "site_id",
    customerId: "customer_id",
    subscriptionId: "subscription_id",
    sequenceNumber: "sequence_number",
    transactionTime: "transaction_time",
    createdAt: "created_at",
    updatedAt: "updated_at",
    issueDate: "issue_date",
    dueDate: "due_date",
    paidDate: "paid_date",
    parentInvoiceId: "parent_invoice_id",
    collectionMethod: "collection_method",
    paymentInstructions: "payment_instructions",
    consolidationLevel: "consolidation_level",
    parentInvoiceUid: "parent_invoice_uid",
    subscriptionGroupId: "subscription_group_id",
    parentInvoiceNumber: "parent_invoice_number",
    groupPrimarySubscriptionId: "group_primary_subscription_id",
    productName: "product_name",
    productFamilyName: "product_family_name",
    recipientEmails: "recipient_emails",
    netTerms: "net_terms",
    billingAddress: "billing_address",
    shippingAddress: "shipping_address",
    subtotalAmount: "subtotal_amount",
    discountAmount: "discount_amount",
    taxAmount: "tax_amount",
    totalAmount: "total_amount",
    creditAmount: "credit_amount",
    debitAmount: "debit_amount",
    refundAmount: "refund_amount",
    paidAmount: "paid_amount",
    dueAmount: "due_amount",
    lineItems: "line_items",
    customFields: "custom_fields",
    displaySettings: "display_settings",
    avataxDetails: "avatax_details",
    publicUrl: "public_url",
    previousBalanceData: "previous_balance_data",
    publicUrlExpiresOn: "public_url_expires_on",
    brandingThemeId: "branding_theme_id",
  },
});
