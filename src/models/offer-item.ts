import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currencyPriceSchema, type CurrencyPrice } from "./currency-price.js";
import { intervalUnitSchema, type IntervalUnit } from "./interval-unit.js";

export type OfferItem = {
  componentId?: number;
  pricePointId?: number;
  startingQuantity?: string;
  editable?: boolean;
  componentUnitPrice?: string;
  componentName?: string;
  pricePointName?: string;
  currencyPrices?: CurrencyPrice[];
  interval?: number;
  intervalUnit?: IntervalUnit | null;
};

export const offerItemSchema: Schema<OfferItem> = s.object<OfferItem>({
  componentId: s.optional(s.number()),
  pricePointId: s.optional(s.number()),
  startingQuantity: s.optional(s.string()),
  editable: s.optional(s.boolean()),
  componentUnitPrice: s.optional(s.string()),
  componentName: s.optional(s.string()),
  pricePointName: s.optional(s.string()),
  currencyPrices: s.optional(s.array(s.lazy(() => currencyPriceSchema))),
  interval: s.optional(s.number()),
  intervalUnit: s.optionalNullable(s.lazy(() => intervalUnitSchema)),
  _keysMap: {
    componentId: "component_id",
    pricePointId: "price_point_id",
    startingQuantity: "starting_quantity",
    componentUnitPrice: "component_unit_price",
    componentName: "component_name",
    pricePointName: "price_point_name",
    currencyPrices: "currency_prices",
    intervalUnit: "interval_unit",
  },
});
