import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { componentPricePointItemSchema, type ComponentPricePointItem } from "./component-price-point-item.js";
import { intervalUnitSchema, type IntervalUnit } from "./interval-unit.js";
import { priceSchema, type Price } from "./price.js";
import { pricingSchemeSchema, type PricingScheme } from "./pricing-scheme.js";
import { unitPrice5Schema, type UnitPrice5 } from "./unions/unit-price5.js";

export type EbbComponent = {
  name: string;
  unitName: string;
  description?: string;
  handle?: string;
  taxable?: boolean;
  pricingScheme: PricingScheme;
  prices?: Price[];
  pricePoints?: ComponentPricePointItem[];
  unitPrice?: UnitPrice5;
  taxCode?: string;
  hideDateRangeOnInvoice?: boolean;
  eventBasedBillingMetricId: number;
  interval?: number;
  intervalUnit?: IntervalUnit | null;
};

export const ebbComponentSchema: Schema<EbbComponent> = s.object<EbbComponent>({
  name: s.string(),
  unitName: s.string(),
  description: s.optional(s.string()),
  handle: s.optional(s.string()),
  taxable: s.optional(s.boolean()),
  pricingScheme: pricingSchemeSchema,
  prices: s.optional(s.array(s.lazy(() => priceSchema))),
  pricePoints: s.optional(s.array(s.lazy(() => componentPricePointItemSchema))),
  unitPrice: s.optional(s.lazy(() => unitPrice5Schema)),
  taxCode: s.optional(s.string()),
  hideDateRangeOnInvoice: s.optional(s.boolean()),
  eventBasedBillingMetricId: s.number(),
  interval: s.optional(s.number()),
  intervalUnit: s.optionalNullable(s.lazy(() => intervalUnitSchema)),
  _keysMap: {
    unitName: "unit_name",
    pricingScheme: "pricing_scheme",
    pricePoints: "price_points",
    unitPrice: "unit_price",
    taxCode: "tax_code",
    hideDateRangeOnInvoice: "hide_date_range_on_invoice",
    eventBasedBillingMetricId: "event_based_billing_metric_id",
    intervalUnit: "interval_unit",
  },
});
