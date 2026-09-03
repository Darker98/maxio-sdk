import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SubscriptionGroupItem = {
  id?: number;
  reference?: string | null;
  productId?: number;
  productHandle?: string | null;
  productPricePointId?: number;
  productPricePointHandle?: string;
  currency?: string;
  couponCode?: string | null;
  totalRevenueInCents?: number;
  balanceInCents?: number;
};

export const subscriptionGroupItemSchema: Schema<SubscriptionGroupItem> = s.object<SubscriptionGroupItem>({
  id: s.optional(s.number()),
  reference: s.optionalNullable(s.string()),
  productId: s.optional(s.number()),
  productHandle: s.optionalNullable(s.string()),
  productPricePointId: s.optional(s.number()),
  productPricePointHandle: s.optional(s.string()),
  currency: s.optional(s.string()),
  couponCode: s.optionalNullable(s.string()),
  totalRevenueInCents: s.optional(s.number()),
  balanceInCents: s.optional(s.number()),
  _keysMap: {
    productId: "product_id",
    productHandle: "product_handle",
    productPricePointId: "product_price_point_id",
    productPricePointHandle: "product_price_point_handle",
    couponCode: "coupon_code",
    totalRevenueInCents: "total_revenue_in_cents",
    balanceInCents: "balance_in_cents",
  },
});
