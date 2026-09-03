import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expirationIntervalUnitSchema, type ExpirationIntervalUnit } from "./expiration-interval-unit.js";
import { intervalUnitSchema, type IntervalUnit } from "./interval-unit.js";
import { trialTypeSchema, type TrialType } from "./trial-type.js";
import { expirationIntervalSchema, type ExpirationInterval } from "./unions/expiration-interval.js";
import { initialChargeInCentsSchema, type InitialChargeInCents } from "./unions/initial-charge-in-cents.js";
import { intervalSchema, type Interval } from "./unions/interval.js";
import { priceInCentsSchema, type PriceInCents } from "./unions/price-in-cents.js";
import { trialIntervalSchema, type TrialInterval } from "./unions/trial-interval.js";
import { trialPriceInCentsSchema, type TrialPriceInCents } from "./unions/trial-price-in-cents.js";

export type SubscriptionCustomPrice = {
  name?: string;
  handle?: string;
  priceInCents: PriceInCents;
  interval: Interval;
  intervalUnit: IntervalUnit | null;
  trialPriceInCents?: TrialPriceInCents;
  trialInterval?: TrialInterval;
  trialIntervalUnit?: IntervalUnit;
  trialType?: TrialType | null;
  initialChargeInCents?: InitialChargeInCents;
  initialChargeAfterTrial?: boolean;
  expirationInterval?: ExpirationInterval;
  expirationIntervalUnit?: ExpirationIntervalUnit | null;
  taxIncluded?: boolean;
};

export const subscriptionCustomPriceSchema: Schema<SubscriptionCustomPrice> =
  s.object<SubscriptionCustomPrice>({
    name: s.optional(s.string()),
    handle: s.optional(s.string()),
    priceInCents: priceInCentsSchema,
    interval: intervalSchema,
    intervalUnit: s.nullable(s.lazy(() => intervalUnitSchema)),
    trialPriceInCents: s.optional(s.lazy(() => trialPriceInCentsSchema)),
    trialInterval: s.optional(s.lazy(() => trialIntervalSchema)),
    trialIntervalUnit: s.optional(s.lazy(() => intervalUnitSchema)),
    trialType: s.optionalNullable(s.lazy(() => trialTypeSchema)),
    initialChargeInCents: s.optional(s.lazy(() => initialChargeInCentsSchema)),
    initialChargeAfterTrial: s.optional(s.boolean()),
    expirationInterval: s.optional(s.lazy(() => expirationIntervalSchema)),
    expirationIntervalUnit: s.optionalNullable(s.lazy(() => expirationIntervalUnitSchema)),
    taxIncluded: s.optional(s.boolean()),
    _keysMap: {
      priceInCents: "price_in_cents",
      intervalUnit: "interval_unit",
      trialPriceInCents: "trial_price_in_cents",
      trialInterval: "trial_interval",
      trialIntervalUnit: "trial_interval_unit",
      trialType: "trial_type",
      initialChargeInCents: "initial_charge_in_cents",
      initialChargeAfterTrial: "initial_charge_after_trial",
      expirationInterval: "expiration_interval",
      expirationIntervalUnit: "expiration_interval_unit",
      taxIncluded: "tax_included",
    },
  });
