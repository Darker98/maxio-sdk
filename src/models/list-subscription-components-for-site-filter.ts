import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subscriptionFilterSchema, type SubscriptionFilter } from "./subscription-filter.js";

export type ListSubscriptionComponentsForSiteFilter = {
  currencies?: string[];
  useSiteExchangeRate?: boolean;
  subscription?: SubscriptionFilter;
};

export const listSubscriptionComponentsForSiteFilterSchema: Schema<ListSubscriptionComponentsForSiteFilter> =
  s.object<ListSubscriptionComponentsForSiteFilter>({
    currencies: s.optional(s.array(s.string())),
    useSiteExchangeRate: s.optional(s.boolean()),
    subscription: s.optional(s.lazy(() => subscriptionFilterSchema)),
    _keysMap: {
      useSiteExchangeRate: "use_site_exchange_rate",
    },
  });
