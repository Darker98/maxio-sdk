import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListComponentsFilter = {
  ids?: number[];
  useSiteExchangeRate?: boolean;
};

export const listComponentsFilterSchema: Schema<ListComponentsFilter> = s.object<ListComponentsFilter>({
  ids: s.optional(s.array(s.number())),
  useSiteExchangeRate: s.optional(s.boolean()),
  _keysMap: {
    useSiteExchangeRate: "use_site_exchange_rate",
  },
});
