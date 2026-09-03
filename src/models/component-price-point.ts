import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { componentCurrencyPriceSchema, type ComponentCurrencyPrice } from "./component-currency-price.js";
import { componentPriceSchema, type ComponentPrice } from "./component-price.js";
import { expirationIntervalUnitSchema, type ExpirationIntervalUnit } from "./expiration-interval-unit.js";
import { intervalUnitSchema, type IntervalUnit } from "./interval-unit.js";
import { pricePointTypeSchema, type PricePointType } from "./price-point-type.js";
import { pricingSchemeSchema, type PricingScheme } from "./pricing-scheme.js";

export type ComponentPricePoint = {
  id?: number;
  type?: PricePointType;
  default?: boolean;
  name?: string;
  pricingScheme?: PricingScheme;
  componentId?: number;
  handle?: string | null;
  archivedAt?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
  prices?: ComponentPrice[];
  useSiteExchangeRate?: boolean;
  subscriptionId?: number;
  taxIncluded?: boolean;
  interval?: number | null;
  intervalUnit?: IntervalUnit | null;
  currencyPrices?: ComponentCurrencyPrice[];
  overagePrices?: ComponentPrice[];
  overagePricingScheme?: PricingScheme;
  renewPrepaidAllocation?: boolean;
  rolloverPrepaidRemainder?: boolean;
  expirationInterval?: number | null;
  expirationIntervalUnit?: ExpirationIntervalUnit | null;
};

export const componentPricePointSchema: Schema<ComponentPricePoint> = s.object<ComponentPricePoint>({
  id: s.optional(s.number()),
  type: s.optional(s.lazy(() => pricePointTypeSchema)),
  default: s.optional(s.boolean()),
  name: s.optional(s.string()),
  pricingScheme: s.optional(s.lazy(() => pricingSchemeSchema)),
  componentId: s.optional(s.number()),
  handle: s.optionalNullable(s.string()),
  archivedAt: s.optionalNullable(s.dateTime()),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  prices: s.optional(s.array(s.lazy(() => componentPriceSchema))),
  useSiteExchangeRate: s.optional(s.boolean()),
  subscriptionId: s.optional(s.number()),
  taxIncluded: s.optional(s.boolean()),
  interval: s.optionalNullable(s.number()),
  intervalUnit: s.optionalNullable(s.lazy(() => intervalUnitSchema)),
  currencyPrices: s.optional(s.array(s.lazy(() => componentCurrencyPriceSchema))),
  overagePrices: s.optional(s.array(s.lazy(() => componentPriceSchema))),
  overagePricingScheme: s.optional(s.lazy(() => pricingSchemeSchema)),
  renewPrepaidAllocation: s.optional(s.boolean()),
  rolloverPrepaidRemainder: s.optional(s.boolean()),
  expirationInterval: s.optionalNullable(s.number()),
  expirationIntervalUnit: s.optionalNullable(s.lazy(() => expirationIntervalUnitSchema)),
  _keysMap: {
    pricingScheme: "pricing_scheme",
    componentId: "component_id",
    archivedAt: "archived_at",
    createdAt: "created_at",
    updatedAt: "updated_at",
    useSiteExchangeRate: "use_site_exchange_rate",
    subscriptionId: "subscription_id",
    taxIncluded: "tax_included",
    intervalUnit: "interval_unit",
    currencyPrices: "currency_prices",
    overagePrices: "overage_prices",
    overagePricingScheme: "overage_pricing_scheme",
    renewPrepaidAllocation: "renew_prepaid_allocation",
    rolloverPrepaidRemainder: "rollover_prepaid_remainder",
    expirationInterval: "expiration_interval",
    expirationIntervalUnit: "expiration_interval_unit",
  },
});
