import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { priceSchema, type Price } from "./price.js";
import { pricingSchemeSchema, type PricingScheme } from "./pricing-scheme.js";

export type OveragePricing = {
  pricingScheme: PricingScheme;
  prices?: Price[];
};

export const overagePricingSchema: Schema<OveragePricing> = s.object<OveragePricing>({
  pricingScheme: pricingSchemeSchema,
  prices: s.optional(s.array(s.lazy(() => priceSchema))),
  _keysMap: {
    pricingScheme: "pricing_scheme",
  },
});
