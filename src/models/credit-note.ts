import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditNoteApplicationSchema, type CreditNoteApplication } from "./credit-note-application.js";
import { creditNoteLineItemSchema, type CreditNoteLineItem } from "./credit-note-line-item.js";
import { creditNoteStatusSchema, type CreditNoteStatus } from "./credit-note-status.js";
import { invoiceAddressSchema, type InvoiceAddress } from "./invoice-address.js";
import { invoiceCustomerSchema, type InvoiceCustomer } from "./invoice-customer.js";
import { invoiceDiscountSchema, type InvoiceDiscount } from "./invoice-discount.js";
import { invoiceRefundSchema, type InvoiceRefund } from "./invoice-refund.js";
import { invoiceSellerSchema, type InvoiceSeller } from "./invoice-seller.js";
import { invoiceTaxSchema, type InvoiceTax } from "./invoice-tax.js";
import { originInvoiceSchema, type OriginInvoice } from "./origin-invoice.js";

export type CreditNote = {
  uid?: string;
  siteId?: number;
  customerId?: number;
  subscriptionId?: number;
  number?: string;
  sequenceNumber?: number;
  issueDate?: string;
  appliedDate?: string;
  status?: CreditNoteStatus;
  currency?: string;
  memo?: string;
  seller?: InvoiceSeller;
  customer?: InvoiceCustomer;
  billingAddress?: InvoiceAddress;
  shippingAddress?: InvoiceAddress;
  subtotalAmount?: string;
  discountAmount?: string;
  taxAmount?: string;
  totalAmount?: string;
  appliedAmount?: string;
  remainingAmount?: string;
  lineItems?: CreditNoteLineItem[];
  discounts?: InvoiceDiscount[];
  taxes?: InvoiceTax[];
  applications?: CreditNoteApplication[];
  refunds?: InvoiceRefund[];
  originInvoices?: OriginInvoice[];
};

export const creditNoteSchema: Schema<CreditNote> = s.object<CreditNote>({
  uid: s.optional(s.string()),
  siteId: s.optional(s.number()),
  customerId: s.optional(s.number()),
  subscriptionId: s.optional(s.number()),
  number: s.optional(s.string()),
  sequenceNumber: s.optional(s.number()),
  issueDate: s.optional(s.dateOnly()),
  appliedDate: s.optional(s.dateOnly()),
  status: s.optional(s.lazy(() => creditNoteStatusSchema)),
  currency: s.optional(s.string()),
  memo: s.optional(s.string()),
  seller: s.optional(s.lazy(() => invoiceSellerSchema)),
  customer: s.optional(s.lazy(() => invoiceCustomerSchema)),
  billingAddress: s.optional(s.lazy(() => invoiceAddressSchema)),
  shippingAddress: s.optional(s.lazy(() => invoiceAddressSchema)),
  subtotalAmount: s.optional(s.string()),
  discountAmount: s.optional(s.string()),
  taxAmount: s.optional(s.string()),
  totalAmount: s.optional(s.string()),
  appliedAmount: s.optional(s.string()),
  remainingAmount: s.optional(s.string()),
  lineItems: s.optional(s.array(s.lazy(() => creditNoteLineItemSchema))),
  discounts: s.optional(s.array(s.lazy(() => invoiceDiscountSchema))),
  taxes: s.optional(s.array(s.lazy(() => invoiceTaxSchema))),
  applications: s.optional(s.array(s.lazy(() => creditNoteApplicationSchema))),
  refunds: s.optional(s.array(s.lazy(() => invoiceRefundSchema))),
  originInvoices: s.optional(s.array(s.lazy(() => originInvoiceSchema))),
  _keysMap: {
    siteId: "site_id",
    customerId: "customer_id",
    subscriptionId: "subscription_id",
    sequenceNumber: "sequence_number",
    issueDate: "issue_date",
    appliedDate: "applied_date",
    billingAddress: "billing_address",
    shippingAddress: "shipping_address",
    subtotalAmount: "subtotal_amount",
    discountAmount: "discount_amount",
    taxAmount: "tax_amount",
    totalAmount: "total_amount",
    appliedAmount: "applied_amount",
    remainingAmount: "remaining_amount",
    lineItems: "line_items",
    originInvoices: "origin_invoices",
  },
});
