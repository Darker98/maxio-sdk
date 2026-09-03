import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expirationIntervalUnitSchema, type ExpirationIntervalUnit } from "./expiration-interval-unit.js";
import { intervalUnitSchema, type IntervalUnit } from "./interval-unit.js";
import { intervalSchema, type Interval } from "./unions/interval.js";
import { priceInCentsSchema, type PriceInCents } from "./unions/price-in-cents.js";

export type ScheduledRenewalProductPricePoint = {
  name?: string;
  handle?: string;
  priceInCents: PriceInCents;
  interval: Interval;
  intervalUnit: IntervalUnit | null;
  taxIncluded?: boolean;
  initialChargeInCents?: number;
  expirationInterval?: number;
  expirationIntervalUnit?: ExpirationIntervalUnit | null;
};

export const scheduledRenewalProductPricePointSchema: Schema<ScheduledRenewalProductPricePoint> =
  s.object<ScheduledRenewalProductPricePoint>({
    name: s.optional(s.string()),
    handle: s.optional(s.string()),
    priceInCents: priceInCentsSchema,
    interval: intervalSchema,
    intervalUnit: s.nullable(s.lazy(() => intervalUnitSchema)),
    taxIncluded: s.optional(s.boolean()),
    initialChargeInCents: s.optional(s.number()),
    expirationInterval: s.optional(s.number()),
    expirationIntervalUnit: s.optionalNullable(s.lazy(() => expirationIntervalUnitSchema)),
    _keysMap: {
      priceInCents: "price_in_cents",
      intervalUnit: "interval_unit",
      taxIncluded: "tax_included",
      initialChargeInCents: "initial_charge_in_cents",
      expirationInterval: "expiration_interval",
      expirationIntervalUnit: "expiration_interval_unit",
    },
  });
