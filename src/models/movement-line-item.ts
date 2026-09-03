import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mrrMovementSchema, type MrrMovement } from "./mrr-movement.js";

export type MovementLineItem = {
  productId?: number;
  componentId?: number;
  pricePointId?: number;
  name?: string;
  mrr?: number;
  mrrMovements?: MrrMovement[];
  quantity?: number;
  prevQuantity?: number;
  recurring?: boolean;
};

export const movementLineItemSchema: Schema<MovementLineItem> = s.object<MovementLineItem>({
  productId: s.optional(s.number()),
  componentId: s.optional(s.number()),
  pricePointId: s.optional(s.number()),
  name: s.optional(s.string()),
  mrr: s.optional(s.number()),
  mrrMovements: s.optional(s.array(s.lazy(() => mrrMovementSchema))),
  quantity: s.optional(s.number()),
  prevQuantity: s.optional(s.number()),
  recurring: s.optional(s.boolean()),
  _keysMap: {
    productId: "product_id",
    componentId: "component_id",
    pricePointId: "price_point_id",
    mrrMovements: "mrr_movements",
    prevQuantity: "prev_quantity",
  },
});
