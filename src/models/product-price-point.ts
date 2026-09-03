import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currencyPriceSchema, type CurrencyPrice } from "./currency-price.js";
import { expirationIntervalUnitSchema, type ExpirationIntervalUnit } from "./expiration-interval-unit.js";
import { intervalUnitSchema, type IntervalUnit } from "./interval-unit.js";
import { pricePointTypeSchema, type PricePointType } from "./price-point-type.js";
import { trialTypeSchema, type TrialType } from "./trial-type.js";

export type ProductPricePoint = {
  id?: number;
  name?: string;
  handle?: string | null;
  priceInCents?: number;
  interval?: number;
  intervalUnit?: IntervalUnit;
  trialPriceInCents?: number | null;
  trialInterval?: number | null;
  trialIntervalUnit?: IntervalUnit | null;
  trialType?: TrialType | null;
  introductoryOffer?: boolean | null;
  initialChargeInCents?: number | null;
  initialChargeAfterTrial?: boolean | null;
  expirationInterval?: number | null;
  expirationIntervalUnit?: ExpirationIntervalUnit | null;
  productId?: number;
  archivedAt?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
  useSiteExchangeRate?: boolean;
  type?: PricePointType;
  taxIncluded?: boolean;
  subscriptionId?: number | null;
  currencyPrices?: CurrencyPrice[];
};

export const productPricePointSchema: Schema<ProductPricePoint> = s.object<ProductPricePoint>({
  id: s.optional(s.number()),
  name: s.optional(s.string()),
  handle: s.optionalNullable(s.string()),
  priceInCents: s.optional(s.number()),
  interval: s.optional(s.number()),
  intervalUnit: s.optional(s.lazy(() => intervalUnitSchema)),
  trialPriceInCents: s.optionalNullable(s.number()),
  trialInterval: s.optionalNullable(s.number()),
  trialIntervalUnit: s.optionalNullable(s.lazy(() => intervalUnitSchema)),
  trialType: s.optionalNullable(s.lazy(() => trialTypeSchema)),
  introductoryOffer: s.optionalNullable(s.boolean()),
  initialChargeInCents: s.optionalNullable(s.number()),
  initialChargeAfterTrial: s.optionalNullable(s.boolean()),
  expirationInterval: s.optionalNullable(s.number()),
  expirationIntervalUnit: s.optionalNullable(s.lazy(() => expirationIntervalUnitSchema)),
  productId: s.optional(s.number()),
  archivedAt: s.optionalNullable(s.dateTime()),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  useSiteExchangeRate: s.optional(s.boolean()),
  type: s.optional(s.lazy(() => pricePointTypeSchema)),
  taxIncluded: s.optional(s.boolean()),
  subscriptionId: s.optionalNullable(s.number()),
  currencyPrices: s.optional(s.array(s.lazy(() => currencyPriceSchema))),
  _keysMap: {
    priceInCents: "price_in_cents",
    intervalUnit: "interval_unit",
    trialPriceInCents: "trial_price_in_cents",
    trialInterval: "trial_interval",
    trialIntervalUnit: "trial_interval_unit",
    trialType: "trial_type",
    introductoryOffer: "introductory_offer",
    initialChargeInCents: "initial_charge_in_cents",
    initialChargeAfterTrial: "initial_charge_after_trial",
    expirationInterval: "expiration_interval",
    expirationIntervalUnit: "expiration_interval_unit",
    productId: "product_id",
    archivedAt: "archived_at",
    createdAt: "created_at",
    updatedAt: "updated_at",
    useSiteExchangeRate: "use_site_exchange_rate",
    taxIncluded: "tax_included",
    subscriptionId: "subscription_id",
    currencyPrices: "currency_prices",
  },
});
