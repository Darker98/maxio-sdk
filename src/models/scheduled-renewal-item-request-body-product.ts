import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  scheduledRenewalProductPricePointSchema,
  type ScheduledRenewalProductPricePoint,
} from "./scheduled-renewal-product-price-point.js";

export type ScheduledRenewalItemRequestBodyProduct = {
  itemType: "Product";
  itemId: number;
  pricePointId?: number;
  quantity?: number;
  customPrice?: ScheduledRenewalProductPricePoint;
};

export const scheduledRenewalItemRequestBodyProductSchema: Schema<ScheduledRenewalItemRequestBodyProduct> =
  s.object<ScheduledRenewalItemRequestBodyProduct>({
    itemType: s.literal("Product"),
    itemId: s.number(),
    pricePointId: s.optional(s.number()),
    quantity: s.optional(s.number()),
    customPrice: s.optional(s.lazy(() => scheduledRenewalProductPricePointSchema)),
    _keysMap: {
      itemType: "item_type",
      itemId: "item_id",
      pricePointId: "price_point_id",
      customPrice: "custom_price",
    },
  });
