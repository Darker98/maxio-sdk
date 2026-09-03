import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditNoteLineItemSchema, type CreditNoteLineItem } from "./credit-note-line-item.js";
import { debitNoteRoleSchema, type DebitNoteRole } from "./debit-note-role.js";
import { debitNoteStatusSchema, type DebitNoteStatus } from "./debit-note-status.js";
import { invoiceAddressSchema, type InvoiceAddress } from "./invoice-address.js";
import { invoiceCustomerSchema, type InvoiceCustomer } from "./invoice-customer.js";
import { invoiceDiscountSchema, type InvoiceDiscount } from "./invoice-discount.js";
import { invoiceRefundSchema, type InvoiceRefund } from "./invoice-refund.js";
import { invoiceSellerSchema, type InvoiceSeller } from "./invoice-seller.js";
import { invoiceTaxSchema, type InvoiceTax } from "./invoice-tax.js";

export type DebitNote = {
  uid?: string;
  siteId?: number;
  customerId?: number;
  subscriptionId?: number;
  number?: number;
  sequenceNumber?: number;
  originCreditNoteUid?: string;
  originCreditNoteNumber?: string;
  issueDate?: string;
  appliedDate?: string;
  dueDate?: string;
  status?: DebitNoteStatus;
  memo?: string;
  role?: DebitNoteRole;
  currency?: string;
  seller?: InvoiceSeller;
  customer?: InvoiceCustomer;
  billingAddress?: InvoiceAddress;
  shippingAddress?: InvoiceAddress;
  lineItems?: CreditNoteLineItem[];
  discounts?: InvoiceDiscount[];
  taxes?: InvoiceTax[];
  refunds?: InvoiceRefund[];
};

export const debitNoteSchema: Schema<DebitNote> = s.object<DebitNote>({
  uid: s.optional(s.string()),
  siteId: s.optional(s.number()),
  customerId: s.optional(s.number()),
  subscriptionId: s.optional(s.number()),
  number: s.optional(s.number()),
  sequenceNumber: s.optional(s.number()),
  originCreditNoteUid: s.optional(s.string()),
  originCreditNoteNumber: s.optional(s.string()),
  issueDate: s.optional(s.dateOnly()),
  appliedDate: s.optional(s.dateOnly()),
  dueDate: s.optional(s.dateOnly()),
  status: s.optional(s.lazy(() => debitNoteStatusSchema)),
  memo: s.optional(s.string()),
  role: s.optional(s.lazy(() => debitNoteRoleSchema)),
  currency: s.optional(s.string()),
  seller: s.optional(s.lazy(() => invoiceSellerSchema)),
  customer: s.optional(s.lazy(() => invoiceCustomerSchema)),
  billingAddress: s.optional(s.lazy(() => invoiceAddressSchema)),
  shippingAddress: s.optional(s.lazy(() => invoiceAddressSchema)),
  lineItems: s.optional(s.array(s.lazy(() => creditNoteLineItemSchema))),
  discounts: s.optional(s.array(s.lazy(() => invoiceDiscountSchema))),
  taxes: s.optional(s.array(s.lazy(() => invoiceTaxSchema))),
  refunds: s.optional(s.array(s.lazy(() => invoiceRefundSchema))),
  _keysMap: {
    siteId: "site_id",
    customerId: "customer_id",
    subscriptionId: "subscription_id",
    sequenceNumber: "sequence_number",
    originCreditNoteUid: "origin_credit_note_uid",
    originCreditNoteNumber: "origin_credit_note_number",
    issueDate: "issue_date",
    appliedDate: "applied_date",
    dueDate: "due_date",
    billingAddress: "billing_address",
    shippingAddress: "shipping_address",
    lineItems: "line_items",
  },
});
