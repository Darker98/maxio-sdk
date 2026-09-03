import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { intervalUnitSchema, type IntervalUnit } from "./interval-unit.js";
import { priceSchema, type Price } from "./price.js";
import { pricingSchemeSchema, type PricingScheme } from "./pricing-scheme.js";

export type ComponentPricePointItem = {
  name?: string;
  handle?: string;
  pricingScheme?: PricingScheme;
  interval?: number;
  intervalUnit?: IntervalUnit | null;
  prices?: Price[];
};

export const componentPricePointItemSchema: Schema<ComponentPricePointItem> =
  s.object<ComponentPricePointItem>({
    name: s.optional(s.string()),
    handle: s.optional(s.string()),
    pricingScheme: s.optional(s.lazy(() => pricingSchemeSchema)),
    interval: s.optional(s.number()),
    intervalUnit: s.optionalNullable(s.lazy(() => intervalUnitSchema)),
    prices: s.optional(s.array(s.lazy(() => priceSchema))),
    _keysMap: {
      pricingScheme: "pricing_scheme",
      intervalUnit: "interval_unit",
    },
  });
