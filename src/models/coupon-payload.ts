import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { compoundingStrategySchema, type CompoundingStrategy } from "./compounding-strategy.js";
import { percentageSchema, type Percentage } from "./unions/percentage.js";

export type CouponPayload = {
  name?: string;
  code?: string;
  description?: string;
  percentage?: Percentage;
  amountInCents?: number;
  allowNegativeBalance?: boolean;
  recurring?: boolean;
  endDate?: string;
  productFamilyId?: string;
  stackable?: boolean;
  compoundingStrategy?: CompoundingStrategy;
  excludeMidPeriodAllocations?: boolean;
  applyOnCancelAtEndOfPeriod?: boolean;
  applyOnSubscriptionExpiration?: boolean;
};

export const couponPayloadSchema: Schema<CouponPayload> = s.object<CouponPayload>({
  name: s.optional(s.string()),
  code: s.optional(s.string()),
  description: s.optional(s.string()),
  percentage: s.optional(s.lazy(() => percentageSchema)),
  amountInCents: s.optional(s.number()),
  allowNegativeBalance: s.optional(s.boolean()),
  recurring: s.optional(s.boolean()),
  endDate: s.optional(s.dateOnly()),
  productFamilyId: s.optional(s.string()),
  stackable: s.optional(s.boolean()),
  compoundingStrategy: s.optional(s.lazy(() => compoundingStrategySchema)),
  excludeMidPeriodAllocations: s.optional(s.boolean()),
  applyOnCancelAtEndOfPeriod: s.optional(s.boolean()),
  applyOnSubscriptionExpiration: s.optional(s.boolean()),
  _keysMap: {
    amountInCents: "amount_in_cents",
    allowNegativeBalance: "allow_negative_balance",
    endDate: "end_date",
    productFamilyId: "product_family_id",
    compoundingStrategy: "compounding_strategy",
    excludeMidPeriodAllocations: "exclude_mid_period_allocations",
    applyOnCancelAtEndOfPeriod: "apply_on_cancel_at_end_of_period",
    applyOnSubscriptionExpiration: "apply_on_subscription_expiration",
  },
});
