import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateCurrencyPrice = {
  id: number;
  price: number;
};

export const updateCurrencyPriceSchema: Schema<UpdateCurrencyPrice> = s.object<UpdateCurrencyPrice>({
  id: s.number(),
  price: s.number(),
});
