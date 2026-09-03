import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditNoteLineItem = {
  uid?: string;
  title?: string;
  description?: string;
  quantity?: string;
  unitPrice?: string;
  subtotalAmount?: string;
  discountAmount?: string;
  taxAmount?: string;
  taxIncluded?: boolean;
  totalAmount?: string;
  tieredUnitPrice?: boolean;
  periodRangeStart?: string;
  periodRangeEnd?: string;
  productId?: number;
  productVersion?: number;
  componentId?: number | null;
  pricePointId?: number | null;
  billingScheduleItemId?: number | null;
  customItem?: boolean;
  prepaidAllocationExpiresAt?: string | null;
};

export const creditNoteLineItemSchema: Schema<CreditNoteLineItem> = s.object<CreditNoteLineItem>({
  uid: s.optional(s.string()),
  title: s.optional(s.string()),
  description: s.optional(s.string()),
  quantity: s.optional(s.string()),
  unitPrice: s.optional(s.string()),
  subtotalAmount: s.optional(s.string()),
  discountAmount: s.optional(s.string()),
  taxAmount: s.optional(s.string()),
  taxIncluded: s.optional(s.boolean()),
  totalAmount: s.optional(s.string()),
  tieredUnitPrice: s.optional(s.boolean()),
  periodRangeStart: s.optional(s.dateOnly()),
  periodRangeEnd: s.optional(s.dateOnly()),
  productId: s.optional(s.number()),
  productVersion: s.optional(s.number()),
  componentId: s.optionalNullable(s.number()),
  pricePointId: s.optionalNullable(s.number()),
  billingScheduleItemId: s.optionalNullable(s.number()),
  customItem: s.optional(s.boolean()),
  prepaidAllocationExpiresAt: s.optionalNullable(s.dateOnly()),
  _keysMap: {
    unitPrice: "unit_price",
    subtotalAmount: "subtotal_amount",
    discountAmount: "discount_amount",
    taxAmount: "tax_amount",
    taxIncluded: "tax_included",
    totalAmount: "total_amount",
    tieredUnitPrice: "tiered_unit_price",
    periodRangeStart: "period_range_start",
    periodRangeEnd: "period_range_end",
    productId: "product_id",
    productVersion: "product_version",
    componentId: "component_id",
    pricePointId: "price_point_id",
    billingScheduleItemId: "billing_schedule_item_id",
    customItem: "custom_item",
    prepaidAllocationExpiresAt: "prepaid_allocation_expires_at",
  },
});
