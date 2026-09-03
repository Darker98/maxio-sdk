import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expirationIntervalUnitSchema, type ExpirationIntervalUnit } from "./expiration-interval-unit.js";
import { intervalUnitSchema, type IntervalUnit } from "./interval-unit.js";
import { trialTypeSchema, type TrialType } from "./trial-type.js";

export type CreateOrUpdateProduct = {
  name: string;
  handle?: string;
  description: string;
  accountingCode?: string;
  requireCreditCard?: boolean;
  priceInCents: number;
  interval: number;
  intervalUnit: IntervalUnit;
  trialPriceInCents?: number;
  trialInterval?: number;
  trialIntervalUnit?: IntervalUnit | null;
  trialType?: TrialType | null;
  expirationInterval?: number;
  expirationIntervalUnit?: ExpirationIntervalUnit | null;
  autoCreateSignupPage?: boolean;
  taxCode?: string;
};

export const createOrUpdateProductSchema: Schema<CreateOrUpdateProduct> = s.object<CreateOrUpdateProduct>({
  name: s.string(),
  handle: s.optional(s.string()),
  description: s.string(),
  accountingCode: s.optional(s.string()),
  requireCreditCard: s.optional(s.boolean()),
  priceInCents: s.number(),
  interval: s.number(),
  intervalUnit: intervalUnitSchema,
  trialPriceInCents: s.optional(s.number()),
  trialInterval: s.optional(s.number()),
  trialIntervalUnit: s.optionalNullable(s.lazy(() => intervalUnitSchema)),
  trialType: s.optionalNullable(s.lazy(() => trialTypeSchema)),
  expirationInterval: s.optional(s.number()),
  expirationIntervalUnit: s.optionalNullable(s.lazy(() => expirationIntervalUnitSchema)),
  autoCreateSignupPage: s.optional(s.boolean()),
  taxCode: s.optional(s.string()),
  _keysMap: {
    accountingCode: "accounting_code",
    requireCreditCard: "require_credit_card",
    priceInCents: "price_in_cents",
    intervalUnit: "interval_unit",
    trialPriceInCents: "trial_price_in_cents",
    trialInterval: "trial_interval",
    trialIntervalUnit: "trial_interval_unit",
    trialType: "trial_type",
    expirationInterval: "expiration_interval",
    expirationIntervalUnit: "expiration_interval_unit",
    autoCreateSignupPage: "auto_create_signup_page",
    taxCode: "tax_code",
  },
});
