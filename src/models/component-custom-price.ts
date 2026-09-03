import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expirationIntervalUnitSchema, type ExpirationIntervalUnit } from "./expiration-interval-unit.js";
import { intervalUnitSchema, type IntervalUnit } from "./interval-unit.js";
import { priceSchema, type Price } from "./price.js";
import { pricingSchemeSchema, type PricingScheme } from "./pricing-scheme.js";

export type ComponentCustomPrice = {
  taxIncluded?: boolean;
  pricingScheme?: PricingScheme;
  interval?: number;
  intervalUnit?: IntervalUnit | null;
  listPricePointId?: number | null;
  useDefaultListPrice?: boolean;
  prices: Price[];
  renewPrepaidAllocation?: boolean;
  rolloverPrepaidRemainder?: boolean;
  expirationInterval?: number | null;
  expirationIntervalUnit?: ExpirationIntervalUnit | null;
};

export const componentCustomPriceSchema: Schema<ComponentCustomPrice> = s.object<ComponentCustomPrice>({
  taxIncluded: s.optional(s.boolean()),
  pricingScheme: s.optional(s.lazy(() => pricingSchemeSchema)),
  interval: s.optional(s.number()),
  intervalUnit: s.optionalNullable(s.lazy(() => intervalUnitSchema)),
  listPricePointId: s.optionalNullable(s.number()),
  useDefaultListPrice: s.optional(s.boolean()),
  prices: s.array(s.lazy(() => priceSchema)),
  renewPrepaidAllocation: s.optional(s.boolean()),
  rolloverPrepaidRemainder: s.optional(s.boolean()),
  expirationInterval: s.optionalNullable(s.number()),
  expirationIntervalUnit: s.optionalNullable(s.lazy(() => expirationIntervalUnitSchema)),
  _keysMap: {
    taxIncluded: "tax_included",
    pricingScheme: "pricing_scheme",
    intervalUnit: "interval_unit",
    listPricePointId: "list_price_point_id",
    useDefaultListPrice: "use_default_list_price",
    renewPrepaidAllocation: "renew_prepaid_allocation",
    rolloverPrepaidRemainder: "rollover_prepaid_remainder",
    expirationInterval: "expiration_interval",
    expirationIntervalUnit: "expiration_interval_unit",
  },
});
