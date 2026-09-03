import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateOfferComponent = {
  componentId?: number;
  pricePointId?: number;
  startingQuantity?: number;
};

export const createOfferComponentSchema: Schema<CreateOfferComponent> = s.object<CreateOfferComponent>({
  componentId: s.optional(s.number()),
  pricePointId: s.optional(s.number()),
  startingQuantity: s.optional(s.number()),
  _keysMap: {
    componentId: "component_id",
    pricePointId: "price_point_id",
    startingQuantity: "starting_quantity",
  },
});
