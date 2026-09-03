import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SubscriptionProductChangeScheduled = {
  previousProductId: number;
  newProductId: number;
  previousProductPricePointId?: number | null;
  newProductPricePointId?: number | null;
  effectiveAt?: Date | null;
};

export const subscriptionProductChangeScheduledSchema: Schema<SubscriptionProductChangeScheduled> =
  s.object<SubscriptionProductChangeScheduled>({
    previousProductId: s.number(),
    newProductId: s.number(),
    previousProductPricePointId: s.optionalNullable(s.number()),
    newProductPricePointId: s.optionalNullable(s.number()),
    effectiveAt: s.optionalNullable(s.dateTime()),
    _keysMap: {
      previousProductId: "previous_product_id",
      newProductId: "new_product_id",
      previousProductPricePointId: "previous_product_price_point_id",
      newProductPricePointId: "new_product_price_point_id",
      effectiveAt: "effective_at",
    },
  });
