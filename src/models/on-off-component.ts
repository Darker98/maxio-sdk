import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { componentPricePointItemSchema, type ComponentPricePointItem } from "./component-price-point-item.js";
import { creditTypeSchema, type CreditType } from "./credit-type.js";
import { intervalUnitSchema, type IntervalUnit } from "./interval-unit.js";
import { unitPrice3Schema, type UnitPrice3 } from "./unions/unit-price3.js";

export type OnOffComponent = {
  name: string;
  description?: string;
  handle?: string;
  taxable?: boolean;
  upgradeCharge?: CreditType | null;
  downgradeCredit?: CreditType | null;
  pricePoints?: ComponentPricePointItem[];
  unitPrice: UnitPrice3;
  taxCode?: string;
  hideDateRangeOnInvoice?: boolean;
  displayOnHostedPage?: boolean;
  allowFractionalQuantities?: boolean;
  publicSignupPageIds?: number[];
  interval?: number;
  intervalUnit?: IntervalUnit | null;
};

export const onOffComponentSchema: Schema<OnOffComponent> = s.object<OnOffComponent>({
  name: s.string(),
  description: s.optional(s.string()),
  handle: s.optional(s.string()),
  taxable: s.optional(s.boolean()),
  upgradeCharge: s.optionalNullable(s.lazy(() => creditTypeSchema)),
  downgradeCredit: s.optionalNullable(s.lazy(() => creditTypeSchema)),
  pricePoints: s.optional(s.array(s.lazy(() => componentPricePointItemSchema))),
  unitPrice: unitPrice3Schema,
  taxCode: s.optional(s.string()),
  hideDateRangeOnInvoice: s.optional(s.boolean()),
  displayOnHostedPage: s.optional(s.boolean()),
  allowFractionalQuantities: s.optional(s.boolean()),
  publicSignupPageIds: s.optional(s.array(s.number())),
  interval: s.optional(s.number()),
  intervalUnit: s.optionalNullable(s.lazy(() => intervalUnitSchema)),
  _keysMap: {
    upgradeCharge: "upgrade_charge",
    downgradeCredit: "downgrade_credit",
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
