import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListSubscriptionComponentsFilter = {
  currencies?: string[];
  useSiteExchangeRate?: boolean;
};

export const listSubscriptionComponentsFilterSchema: Schema<ListSubscriptionComponentsFilter> =
  s.object<ListSubscriptionComponentsFilter>({
    currencies: s.optional(s.array(s.string())),
    useSiteExchangeRate: s.optional(s.boolean()),
    _keysMap: {
      useSiteExchangeRate: "use_site_exchange_rate",
    },
  });
