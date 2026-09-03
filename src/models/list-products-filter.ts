import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  prepaidProductPricePointFilterSchema,
  type PrepaidProductPricePointFilter,
} from "./prepaid-product-price-point-filter.js";

export type ListProductsFilter = {
  ids?: number[];
  prepaidProductPricePoint?: PrepaidProductPricePointFilter;
  useSiteExchangeRate?: boolean;
};

export const listProductsFilterSchema: Schema<ListProductsFilter> = s.object<ListProductsFilter>({
  ids: s.optional(s.array(s.number())),
  prepaidProductPricePoint: s.optional(s.lazy(() => prepaidProductPricePointFilterSchema)),
  useSiteExchangeRate: s.optional(s.boolean()),
  _keysMap: {
    prepaidProductPricePoint: "prepaid_product_price_point",
    useSiteExchangeRate: "use_site_exchange_rate",
  },
});
