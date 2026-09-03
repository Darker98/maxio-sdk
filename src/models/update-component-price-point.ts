import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { intervalUnitSchema, type IntervalUnit } from "./interval-unit.js";
import { pricingSchemeSchema, type PricingScheme } from "./pricing-scheme.js";
import { updatePriceSchema, type UpdatePrice } from "./update-price.js";

export type UpdateComponentPricePoint = {
  name?: string;
  handle?: string;
  pricingScheme?: PricingScheme;
  useSiteExchangeRate?: boolean;
  taxIncluded?: boolean;
  interval?: number;
  intervalUnit?: IntervalUnit | null;
  prices?: UpdatePrice[];
};

export const updateComponentPricePointSchema: Schema<UpdateComponentPricePoint> =
  s.object<UpdateComponentPricePoint>({
    name: s.optional(s.string()),
    handle: s.optional(s.string()),
    pricingScheme: s.optional(s.lazy(() => pricingSchemeSchema)),
    useSiteExchangeRate: s.optional(s.boolean()),
    taxIncluded: s.optional(s.boolean()),
    interval: s.optional(s.number()),
    intervalUnit: s.optionalNullable(s.lazy(() => intervalUnitSchema)),
    prices: s.optional(s.array(s.lazy(() => updatePriceSchema))),
    _keysMap: {
      pricingScheme: "pricing_scheme",
      useSiteExchangeRate: "use_site_exchange_rate",
      taxIncluded: "tax_included",
      intervalUnit: "interval_unit",
    },
  });
