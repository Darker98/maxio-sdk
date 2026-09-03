import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateCouponCurrency = {
  currency: string;
  price: number;
};

export const updateCouponCurrencySchema: Schema<UpdateCouponCurrency> = s.object<UpdateCouponCurrency>({
  currency: s.string(),
  price: s.number(),
});
