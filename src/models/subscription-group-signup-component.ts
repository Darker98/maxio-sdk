import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subscriptionGroupComponentCustomPriceSchema,
  type SubscriptionGroupComponentCustomPrice,
} from "./subscription-group-component-custom-price.js";
import { allocatedQuantity1Schema, type AllocatedQuantity1 } from "./unions/allocated-quantity1.js";
import { componentIdSchema, type ComponentId } from "./unions/component-id.js";
import { pricePointIdSchema, type PricePointId } from "./unions/price-point-id.js";
import { unitBalanceSchema, type UnitBalance } from "./unions/unit-balance.js";

export type SubscriptionGroupSignupComponent = {
  componentId?: ComponentId;
  allocatedQuantity?: AllocatedQuantity1;
  unitBalance?: UnitBalance;
  pricePointId?: PricePointId;
  customPrice?: SubscriptionGroupComponentCustomPrice;
};

export const subscriptionGroupSignupComponentSchema: Schema<SubscriptionGroupSignupComponent> =
  s.object<SubscriptionGroupSignupComponent>({
    componentId: s.optional(s.lazy(() => componentIdSchema)),
    allocatedQuantity: s.optional(s.lazy(() => allocatedQuantity1Schema)),
    unitBalance: s.optional(s.lazy(() => unitBalanceSchema)),
    pricePointId: s.optional(s.lazy(() => pricePointIdSchema)),
    customPrice: s.optional(s.lazy(() => subscriptionGroupComponentCustomPriceSchema)),
    _keysMap: {
      componentId: "component_id",
      allocatedQuantity: "allocated_quantity",
      unitBalance: "unit_balance",
      pricePointId: "price_point_id",
      customPrice: "custom_price",
    },
  });
