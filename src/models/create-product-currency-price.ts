import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currencyPriceRoleSchema, type CurrencyPriceRole } from "./currency-price-role.js";

export type CreateProductCurrencyPrice = {
  currency: string;
  price: number;
  role: CurrencyPriceRole;
};

export const createProductCurrencyPriceSchema: Schema<CreateProductCurrencyPrice> =
  s.object<CreateProductCurrencyPrice>({
    currency: s.string(),
    price: s.number(),
    role: currencyPriceRoleSchema,
  });
