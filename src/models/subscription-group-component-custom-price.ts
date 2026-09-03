import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { componentCustomPriceSchema, type ComponentCustomPrice } from "./component-custom-price.js";
import { priceSchema, type Price } from "./price.js";
import { pricingSchemeSchema, type PricingScheme } from "./pricing-scheme.js";

export type SubscriptionGroupComponentCustomPrice = {
  pricingScheme?: PricingScheme;
  prices?: Price[];
  overagePricing?: ComponentCustomPrice[];
};

export const subscriptionGroupComponentCustomPriceSchema: Schema<SubscriptionGroupComponentCustomPrice> =
  s.object<SubscriptionGroupComponentCustomPrice>({
    pricingScheme: s.optional(s.lazy(() => pricingSchemeSchema)),
    prices: s.optional(s.array(s.lazy(() => priceSchema))),
    overagePricing: s.optional(s.array(s.lazy(() => componentCustomPriceSchema))),
    _keysMap: {
      pricingScheme: "pricing_scheme",
      overagePricing: "overage_pricing",
    },
  });
