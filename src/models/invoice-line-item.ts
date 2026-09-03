import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoiceLineItemComponentCostDataSchema,
  type InvoiceLineItemComponentCostData,
} from "./invoice-line-item-component-cost-data.js";

export type InvoiceLineItem = {
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
  transactionId?: number;
  productId?: number | null;
  productVersion?: number | null;
  componentId?: number | null;
  pricePointId?: number | null;
  billingScheduleItemId?: number | null;
  hide?: boolean;
  componentCostData?: InvoiceLineItemComponentCostData | null;
  productPricePointId?: number | null;
  customItem?: boolean;
  kind?: string;
  prepaidAllocationExpiresAt?: string | null;
};

export const invoiceLineItemSchema: Schema<InvoiceLineItem> = s.object<InvoiceLineItem>({
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
  transactionId: s.optional(s.number()),
  productId: s.optionalNullable(s.number()),
  productVersion: s.optionalNullable(s.number()),
  componentId: s.optionalNullable(s.number()),
  pricePointId: s.optionalNullable(s.number()),
  billingScheduleItemId: s.optionalNullable(s.number()),
  hide: s.optional(s.boolean()),
  componentCostData: s.optionalNullable(s.lazy(() => invoiceLineItemComponentCostDataSchema)),
  productPricePointId: s.optionalNullable(s.number()),
  customItem: s.optional(s.boolean()),
  kind: s.optional(s.string()),
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
    transactionId: "transaction_id",
    productId: "product_id",
    productVersion: "product_version",
    componentId: "component_id",
    pricePointId: "price_point_id",
    billingScheduleItemId: "billing_schedule_item_id",
    componentCostData: "component_cost_data",
    productPricePointId: "product_price_point_id",
    customItem: "custom_item",
    prepaidAllocationExpiresAt: "prepaid_allocation_expires_at",
  },
});
