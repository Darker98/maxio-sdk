import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  scheduledRenewalComponentCustomPriceSchema,
  type ScheduledRenewalComponentCustomPrice,
} from "./scheduled-renewal-component-custom-price.js";

export type ScheduledRenewalItemRequestBodyComponent = {
  itemType: "Component";
  itemId: number;
  pricePointId?: number;
  quantity?: number;
  customPrice?: ScheduledRenewalComponentCustomPrice;
};

export const scheduledRenewalItemRequestBodyComponentSchema: Schema<ScheduledRenewalItemRequestBodyComponent> =
  s.object<ScheduledRenewalItemRequestBodyComponent>({
    itemType: s.literal("Component"),
    itemId: s.number(),
    pricePointId: s.optional(s.number()),
    quantity: s.optional(s.number()),
    customPrice: s.optional(s.lazy(() => scheduledRenewalComponentCustomPriceSchema)),
    _keysMap: {
      itemType: "item_type",
      itemId: "item_id",
      pricePointId: "price_point_id",
      customPrice: "custom_price",
    },
  });
