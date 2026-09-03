import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { componentPricePointItemSchema, type ComponentPricePointItem } from "./component-price-point-item.js";
import { intervalUnitSchema, type IntervalUnit } from "./interval-unit.js";
import { priceSchema, type Price } from "./price.js";
import { pricingSchemeSchema, type PricingScheme } from "./pricing-scheme.js";
import { unitPrice1Schema, type UnitPrice1 } from "./unions/unit-price1.js";

export type MeteredComponent = {
  name: string;
  unitName: string;
  description?: string;
  handle?: string;
  taxable?: boolean;
  pricingScheme: PricingScheme;
  prices?: Price[];
  pricePoints?: ComponentPricePointItem[];
  unitPrice?: UnitPrice1;
  taxCode?: string;
  hideDateRangeOnInvoice?: boolean;
  displayOnHostedPage?: boolean;
  allowFractionalQuantities?: boolean;
  publicSignupPageIds?: number[];
  interval?: number;
  intervalUnit?: IntervalUnit | null;
};

export const meteredComponentSchema: Schema<MeteredComponent> = s.object<MeteredComponent>({
  name: s.string(),
  unitName: s.string(),
  description: s.optional(s.string()),
  handle: s.optional(s.string()),
  taxable: s.optional(s.boolean()),
  pricingScheme: pricingSchemeSchema,
  prices: s.optional(s.array(s.lazy(() => priceSchema))),
  pricePoints: s.optional(s.array(s.lazy(() => componentPricePointItemSchema))),
  unitPrice: s.optional(s.lazy(() => unitPrice1Schema)),
  taxCode: s.optional(s.string()),
  hideDateRangeOnInvoice: s.optional(s.boolean()),
  displayOnHostedPage: s.optional(s.boolean()),
  allowFractionalQuantities: s.optional(s.boolean()),
  publicSignupPageIds: s.optional(s.array(s.number())),
  interval: s.optional(s.number()),
  intervalUnit: s.optionalNullable(s.lazy(() => intervalUnitSchema)),
  _keysMap: {
    unitName: "unit_name",
    pricingScheme: "pricing_scheme",
    pricePoints: "price_points",
    unitPrice: "unit_price",
    taxCode: "tax_code",
    hideDateRangeOnInvoice: "hide_date_range_on_invoice",
    displayOnHostedPage: "display_on_hosted_page",
    allowFractionalQuantities: "allow_fractional_quantities",
    publicSignupPageIds: "public_signup_page_ids",
    intervalUnit: "interval_unit",
  },
});
