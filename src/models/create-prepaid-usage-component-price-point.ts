import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expirationIntervalUnitSchema, type ExpirationIntervalUnit } from "./expiration-interval-unit.js";
import { overagePricingSchema, type OveragePricing } from "./overage-pricing.js";
import { priceSchema, type Price } from "./price.js";
import { pricingSchemeSchema, type PricingScheme } from "./pricing-scheme.js";

export type CreatePrepaidUsageComponentPricePoint = {
  name: string;
  handle?: string;
  pricingScheme: PricingScheme;
  prices: Price[];
  overagePricing: OveragePricing;
  useSiteExchangeRate?: boolean;
  rolloverPrepaidRemainder?: boolean;
  renewPrepaidAllocation?: boolean;
  expirationInterval?: number;
  expirationIntervalUnit?: ExpirationIntervalUnit | null;
};

export const createPrepaidUsageComponentPricePointSchema: Schema<CreatePrepaidUsageComponentPricePoint> =
  s.object<CreatePrepaidUsageComponentPricePoint>({
    name: s.string(),
    handle: s.optional(s.string()),
    pricingScheme: pricingSchemeSchema,
    prices: s.array(s.lazy(() => priceSchema)),
    overagePricing: overagePricingSchema,
    useSiteExchangeRate: s.optional(s.boolean()),
    rolloverPrepaidRemainder: s.optional(s.boolean()),
    renewPrepaidAllocation: s.optional(s.boolean()),
    expirationInterval: s.optional(s.number()),
    expirationIntervalUnit: s.optionalNullable(s.lazy(() => expirationIntervalUnitSchema)),
    _keysMap: {
      pricingScheme: "pricing_scheme",
      overagePricing: "overage_pricing",
      useSiteExchangeRate: "use_site_exchange_rate",
      rolloverPrepaidRemainder: "rollover_prepaid_remainder",
      renewPrepaidAllocation: "renew_prepaid_allocation",
      expirationInterval: "expiration_interval",
      expirationIntervalUnit: "expiration_interval_unit",
    },
  });
