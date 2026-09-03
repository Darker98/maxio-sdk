import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpsertPrepaidConfiguration = {
  initialFundingAmountInCents?: number;
  replenishToAmountInCents?: number;
  autoReplenish?: boolean;
  replenishThresholdAmountInCents?: number;
};

export const upsertPrepaidConfigurationSchema: Schema<UpsertPrepaidConfiguration> =
  s.object<UpsertPrepaidConfiguration>({
    initialFundingAmountInCents: s.optional(s.number()),
    replenishToAmountInCents: s.optional(s.number()),
    autoReplenish: s.optional(s.boolean()),
    replenishThresholdAmountInCents: s.optional(s.number()),
    _keysMap: {
      initialFundingAmountInCents: "initial_funding_amount_in_cents",
      replenishToAmountInCents: "replenish_to_amount_in_cents",
      autoReplenish: "auto_replenish",
      replenishThresholdAmountInCents: "replenish_threshold_amount_in_cents",
    },
  });
