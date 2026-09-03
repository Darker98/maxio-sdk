import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PrepaidProductPricePointFilter = {
  productPricePointId: "not_null";
};

export const prepaidProductPricePointFilterSchema: Schema<PrepaidProductPricePointFilter> =
  s.object<PrepaidProductPricePointFilter>({
    productPricePointId: s.literal("not_null"),
    _keysMap: {
      productPricePointId: "product_price_point_id",
    },
  });
