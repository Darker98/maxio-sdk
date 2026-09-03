import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expirationIntervalUnitSchema, type ExpirationIntervalUnit } from "./expiration-interval-unit.js";
import { intervalUnitSchema, type IntervalUnit } from "./interval-unit.js";
import { trialTypeSchema, type TrialType } from "./trial-type.js";

export type CreateProductPricePoint = {
  name: string;
  handle?: string;
  priceInCents: number;
  interval: number;
  intervalUnit: IntervalUnit;
  trialPriceInCents?: number;
  trialInterval?: number;
  trialIntervalUnit?: IntervalUnit;
  trialType?: TrialType | null;
  initialChargeInCents?: number;
  initialChargeAfterTrial?: boolean;
  expirationInterval?: number;
  expirationIntervalUnit?: ExpirationIntervalUnit | null;
  useSiteExchangeRate?: boolean;
};

export const createProductPricePointSchema: Schema<CreateProductPricePoint> =
  s.object<CreateProductPricePoint>({
    name: s.string(),
    handle: s.optional(s.string()),
    priceInCents: s.number(),
    interval: s.number(),
    intervalUnit: intervalUnitSchema,
    trialPriceInCents: s.optional(s.number()),
    trialInterval: s.optional(s.number()),
    trialIntervalUnit: s.optional(s.lazy(() => intervalUnitSchema)),
    trialType: s.optionalNullable(s.lazy(() => trialTypeSchema)),
    initialChargeInCents: s.optional(s.number()),
    initialChargeAfterTrial: s.optional(s.boolean()),
    expirationInterval: s.optional(s.number()),
    expirationIntervalUnit: s.optionalNullable(s.lazy(() => expirationIntervalUnitSchema)),
    useSiteExchangeRate: s.optional(s.boolean()),
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
      useSiteExchangeRate: "use_site_exchange_rate",
    },
  });
