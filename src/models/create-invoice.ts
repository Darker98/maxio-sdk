import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { createInvoiceAddressSchema, type CreateInvoiceAddress } from "./create-invoice-address.js";
import { createInvoiceCouponSchema, type CreateInvoiceCoupon } from "./create-invoice-coupon.js";
import { createInvoiceItemSchema, type CreateInvoiceItem } from "./create-invoice-item.js";
import { createInvoiceStatusSchema, type CreateInvoiceStatus } from "./create-invoice-status.js";

export type CreateInvoice = {
  lineItems?: CreateInvoiceItem[];
  issueDate?: string;
  netTerms?: number;
  paymentInstructions?: string;
  memo?: string;
  sellerAddress?: CreateInvoiceAddress;
  billingAddress?: CreateInvoiceAddress;
  shippingAddress?: CreateInvoiceAddress;
  coupons?: CreateInvoiceCoupon[];
  status?: CreateInvoiceStatus;
};

export const createInvoiceSchema: Schema<CreateInvoice> = s.object<CreateInvoice>({
  lineItems: s.optional(s.array(s.lazy(() => createInvoiceItemSchema))),
  issueDate: s.optional(s.dateOnly()),
  netTerms: s.optional(s.number()),
  paymentInstructions: s.optional(s.string()),
  memo: s.optional(s.string()),
  sellerAddress: s.optional(s.lazy(() => createInvoiceAddressSchema)),
  billingAddress: s.optional(s.lazy(() => createInvoiceAddressSchema)),
  shippingAddress: s.optional(s.lazy(() => createInvoiceAddressSchema)),
  coupons: s.optional(s.array(s.lazy(() => createInvoiceCouponSchema))),
  status: s.optional(s.lazy(() => createInvoiceStatusSchema)),
  _keysMap: {
    lineItems: "line_items",
    issueDate: "issue_date",
    netTerms: "net_terms",
    paymentInstructions: "payment_instructions",
    sellerAddress: "seller_address",
    billingAddress: "billing_address",
    shippingAddress: "shipping_address",
  },
});
