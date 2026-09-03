import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { componentCustomPriceSchema, type ComponentCustomPrice } from "./component-custom-price.js";

export type UpdateSubscriptionComponent = {
  componentId?: number;
  customPrice?: ComponentCustomPrice;
};

export const updateSubscriptionComponentSchema: Schema<UpdateSubscriptionComponent> =
  s.object<UpdateSubscriptionComponent>({
    componentId: s.optional(s.number()),
    customPrice: s.optional(s.lazy(() => componentCustomPriceSchema)),
    _keysMap: {
      componentId: "component_id",
      customPrice: "custom_price",
    },
  });
