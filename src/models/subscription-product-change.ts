import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SubscriptionProductChange = {
  previousProductId: number;
  newProductId: number;
};

export const subscriptionProductChangeSchema: Schema<SubscriptionProductChange> =
  s.object<SubscriptionProductChange>({
    previousProductId: s.number(),
    newProductId: s.number(),
    _keysMap: {
      previousProductId: "previous_product_id",
      newProductId: "new_product_id",
    },
  });
