import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { componentCustomPriceSchema, type ComponentCustomPrice } from "./component-custom-price.js";
import { allocatedQuantity3Schema, type AllocatedQuantity3 } from "./unions/allocated-quantity3.js";
import { componentId1Schema, type ComponentId1 } from "./unions/component-id1.js";
import { pricePointId2Schema, type PricePointId2 } from "./unions/price-point-id2.js";

export type CreateSubscriptionComponent = {
  componentId?: ComponentId1;
  enabled?: boolean;
  unitBalance?: number;
  allocatedQuantity?: AllocatedQuantity3;
  quantity?: number;
  pricePointId?: PricePointId2;
  customPrice?: ComponentCustomPrice;
};

export const createSubscriptionComponentSchema: Schema<CreateSubscriptionComponent> =
  s.object<CreateSubscriptionComponent>({
    componentId: s.optional(s.lazy(() => componentId1Schema)),
    enabled: s.optional(s.boolean()),
    unitBalance: s.optional(s.number()),
    allocatedQuantity: s.optional(s.lazy(() => allocatedQuantity3Schema)),
    quantity: s.optional(s.number()),
    pricePointId: s.optional(s.lazy(() => pricePointId2Schema)),
    customPrice: s.optional(s.lazy(() => componentCustomPriceSchema)),
    _keysMap: {
      componentId: "component_id",
      unitBalance: "unit_balance",
      allocatedQuantity: "allocated_quantity",
      pricePointId: "price_point_id",
      customPrice: "custom_price",
    },
  });
