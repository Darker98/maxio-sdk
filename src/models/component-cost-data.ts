import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  componentCostDataRateTierSchema,
  type ComponentCostDataRateTier,
} from "./component-cost-data-rate-tier.js";
import { pricingSchemeSchema, type PricingScheme } from "./pricing-scheme.js";

export type ComponentCostData = {
  componentCodeId?: number | null;
  pricePointId?: number;
  productId?: number;
  quantity?: string;
  amount?: string;
  pricingScheme?: PricingScheme;
  tiers?: ComponentCostDataRateTier[];
};

export const componentCostDataSchema: Schema<ComponentCostData> = s.object<ComponentCostData>({
  componentCodeId: s.optionalNullable(s.number()),
  pricePointId: s.optional(s.number()),
  productId: s.optional(s.number()),
  quantity: s.optional(s.string()),
  amount: s.optional(s.string()),
  pricingScheme: s.optional(s.lazy(() => pricingSchemeSchema)),
  tiers: s.optional(s.array(s.lazy(() => componentCostDataRateTierSchema))),
  _keysMap: {
    componentCodeId: "component_code_id",
    pricePointId: "price_point_id",
    productId: "product_id",
    pricingScheme: "pricing_scheme",
  },
});
