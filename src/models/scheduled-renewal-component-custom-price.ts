import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { priceSchema, type Price } from "./price.js";
import { pricingSchemeSchema, type PricingScheme } from "./pricing-scheme.js";

export type ScheduledRenewalComponentCustomPrice = {
  taxIncluded?: boolean;
  pricingScheme: PricingScheme;
  prices: Price[];
};

export const scheduledRenewalComponentCustomPriceSchema: Schema<ScheduledRenewalComponentCustomPrice> =
  s.object<ScheduledRenewalComponentCustomPrice>({
    taxIncluded: s.optional(s.boolean()),
    pricingScheme: pricingSchemeSchema,
    prices: s.array(s.lazy(() => priceSchema)),
    _keysMap: {
      taxIncluded: "tax_included",
      pricingScheme: "pricing_scheme",
    },
  });
