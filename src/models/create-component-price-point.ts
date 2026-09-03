import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { intervalUnitSchema, type IntervalUnit } from "./interval-unit.js";
import { priceSchema, type Price } from "./price.js";
import { pricingSchemeSchema, type PricingScheme } from "./pricing-scheme.js";

export type CreateComponentPricePoint = {
  name: string;
  handle?: string;
  pricingScheme: PricingScheme;
  prices: Price[];
  useSiteExchangeRate?: boolean;
  taxIncluded?: boolean;
  interval?: number;
  intervalUnit?: IntervalUnit | null;
};

export const createComponentPricePointSchema: Schema<CreateComponentPricePoint> =
  s.object<CreateComponentPricePoint>({
    name: s.string(),
    handle: s.optional(s.string()),
    pricingScheme: pricingSchemeSchema,
    prices: s.array(s.lazy(() => priceSchema)),
    useSiteExchangeRate: s.optional(s.boolean()),
    taxIncluded: s.optional(s.boolean()),
    interval: s.optional(s.number()),
    intervalUnit: s.optionalNullable(s.lazy(() => intervalUnitSchema)),
    _keysMap: {
      pricingScheme: "pricing_scheme",
      useSiteExchangeRate: "use_site_exchange_rate",
      taxIncluded: "tax_included",
      intervalUnit: "interval_unit",
    },
  });
