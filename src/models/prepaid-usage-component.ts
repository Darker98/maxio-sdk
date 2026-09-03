import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  createPrepaidUsageComponentPricePointSchema,
  type CreatePrepaidUsageComponentPricePoint,
} from "./create-prepaid-usage-component-price-point.js";
import { creditTypeSchema, type CreditType } from "./credit-type.js";
import { expirationIntervalUnitSchema, type ExpirationIntervalUnit } from "./expiration-interval-unit.js";
import { overagePricingSchema, type OveragePricing } from "./overage-pricing.js";
import { priceSchema, type Price } from "./price.js";
import { pricingSchemeSchema, type PricingScheme } from "./pricing-scheme.js";
import { unitPrice1Schema, type UnitPrice1 } from "./unions/unit-price1.js";

export type PrepaidUsageComponent = {
  name: string;
  unitName: string;
  description?: string;
  handle?: string;
  taxable?: boolean;
  pricingScheme: PricingScheme;
  prices?: Price[];
  upgradeCharge?: CreditType | null;
  downgradeCredit?: CreditType | null;
  pricePoints?: CreatePrepaidUsageComponentPricePoint[];
  unitPrice?: UnitPrice1;
  taxCode?: string;
  hideDateRangeOnInvoice?: boolean;
  overagePricing: OveragePricing;
  rolloverPrepaidRemainder?: boolean;
  renewPrepaidAllocation?: boolean;
  expirationInterval?: number;
  expirationIntervalUnit?: ExpirationIntervalUnit | null;
  displayOnHostedPage?: boolean;
  allowFractionalQuantities?: boolean;
  publicSignupPageIds?: number[];
};

export const prepaidUsageComponentSchema: Schema<PrepaidUsageComponent> = s.object<PrepaidUsageComponent>({
  name: s.string(),
  unitName: s.string(),
  description: s.optional(s.string()),
  handle: s.optional(s.string()),
  taxable: s.optional(s.boolean()),
  pricingScheme: pricingSchemeSchema,
  prices: s.optional(s.array(s.lazy(() => priceSchema))),
  upgradeCharge: s.optionalNullable(s.lazy(() => creditTypeSchema)),
  downgradeCredit: s.optionalNullable(s.lazy(() => creditTypeSchema)),
  pricePoints: s.optional(s.array(s.lazy(() => createPrepaidUsageComponentPricePointSchema))),
  unitPrice: s.optional(s.lazy(() => unitPrice1Schema)),
  taxCode: s.optional(s.string()),
  hideDateRangeOnInvoice: s.optional(s.boolean()),
  overagePricing: overagePricingSchema,
  rolloverPrepaidRemainder: s.optional(s.boolean()),
  renewPrepaidAllocation: s.optional(s.boolean()),
  expirationInterval: s.optional(s.number()),
  expirationIntervalUnit: s.optionalNullable(s.lazy(() => expirationIntervalUnitSchema)),
  displayOnHostedPage: s.optional(s.boolean()),
  allowFractionalQuantities: s.optional(s.boolean()),
  publicSignupPageIds: s.optional(s.array(s.number())),
  _keysMap: {
    unitName: "unit_name",
    pricingScheme: "pricing_scheme",
    upgradeCharge: "upgrade_charge",
    downgradeCredit: "downgrade_credit",
    pricePoints: "price_points",
    unitPrice: "unit_price",
    taxCode: "tax_code",
    hideDateRangeOnInvoice: "hide_date_range_on_invoice",
    overagePricing: "overage_pricing",
    rolloverPrepaidRemainder: "rollover_prepaid_remainder",
    renewPrepaidAllocation: "renew_prepaid_allocation",
    expirationInterval: "expiration_interval",
    expirationIntervalUnit: "expiration_interval_unit",
    displayOnHostedPage: "display_on_hosted_page",
    allowFractionalQuantities: "allow_fractional_quantities",
    publicSignupPageIds: "public_signup_page_ids",
  },
});
