import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateCurrencyPrice = {
  currency?: string;
  price?: number;
  priceId?: number;
};

export const createCurrencyPriceSchema: Schema<CreateCurrencyPrice> = s.object<CreateCurrencyPrice>({
  currency: s.optional(s.string()),
  price: s.optional(s.number()),
  priceId: s.optional(s.number()),
  _keysMap: {
    priceId: "price_id",
  },
});
