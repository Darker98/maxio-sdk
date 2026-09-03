import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { componentKindSchema, type ComponentKind } from "./component-kind.js";
import { componentPriceSchema, type ComponentPrice } from "./component-price.js";
import { creditTypeSchema, type CreditType } from "./credit-type.js";
import { intervalUnitSchema, type IntervalUnit } from "./interval-unit.js";
import { itemCategorySchema, type ItemCategory } from "./item-category.js";
import { pricingSchemeSchema, type PricingScheme } from "./pricing-scheme.js";

export type Component = {
  id?: number;
  name?: string;
  handle?: string | null;
  pricingScheme?: PricingScheme | null;
  unitName?: string;
  unitPrice?: string | null;
  productFamilyId?: number;
  productFamilyName?: string;
  productFamilyHandle?: string;
  pricePerUnitInCents?: number | null;
  kind?: ComponentKind;
  archived?: boolean;
  description?: string | null;
  defaultPricePointId?: number | null;
  overagePrices?: ComponentPrice[] | null;
  prices?: ComponentPrice[] | null;
  pricePointCount?: number;
  pricePointsUrl?: string | null;
  defaultPricePointName?: string;
  taxable?: boolean;
  taxCode?: string | null;
  recurring?: boolean;
  upgradeCharge?: CreditType | null;
  downgradeCredit?: CreditType | null;
  createdAt?: Date;
  updatedAt?: Date;
  archivedAt?: Date | null;
  hideDateRangeOnInvoice?: boolean;
  allowFractionalQuantities?: boolean;
  itemCategory?: ItemCategory | null;
  useSiteExchangeRate?: boolean | null;
  accountingCode?: string | null;
  eventBasedBillingMetricId?: number;
  interval?: number;
  intervalUnit?: IntervalUnit | null;
};

export const componentSchema: Schema<Component> = s.object<Component>({
  id: s.optional(s.number()),
  name: s.optional(s.string()),
  handle: s.optionalNullable(s.string()),
  pricingScheme: s.optionalNullable(s.lazy(() => pricingSchemeSchema)),
  unitName: s.optional(s.string()),
  unitPrice: s.optionalNullable(s.string()),
  productFamilyId: s.optional(s.number()),
  productFamilyName: s.optional(s.string()),
  productFamilyHandle: s.optional(s.string()),
  pricePerUnitInCents: s.optionalNullable(s.number()),
  kind: s.optional(s.lazy(() => componentKindSchema)),
  archived: s.optional(s.boolean()),
  description: s.optionalNullable(s.string()),
  defaultPricePointId: s.optionalNullable(s.number()),
  overagePrices: s.optionalNullable(s.array(s.lazy(() => componentPriceSchema))),
  prices: s.optionalNullable(s.array(s.lazy(() => componentPriceSchema))),
  pricePointCount: s.optional(s.number()),
  pricePointsUrl: s.optionalNullable(s.string()),
  defaultPricePointName: s.optional(s.string()),
  taxable: s.optional(s.boolean()),
  taxCode: s.optionalNullable(s.string()),
  recurring: s.optional(s.boolean()),
  upgradeCharge: s.optionalNullable(s.lazy(() => creditTypeSchema)),
  downgradeCredit: s.optionalNullable(s.lazy(() => creditTypeSchema)),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  archivedAt: s.optionalNullable(s.dateTime()),
  hideDateRangeOnInvoice: s.optional(s.boolean()),
  allowFractionalQuantities: s.optional(s.boolean()),
  itemCategory: s.optionalNullable(s.lazy(() => itemCategorySchema)),
  useSiteExchangeRate: s.optionalNullable(s.boolean()),
  accountingCode: s.optionalNullable(s.string()),
  eventBasedBillingMetricId: s.optional(s.number()),
  interval: s.optional(s.number()),
  intervalUnit: s.optionalNullable(s.lazy(() => intervalUnitSchema)),
  _keysMap: {
    pricingScheme: "pricing_scheme",
    unitName: "unit_name",
    unitPrice: "unit_price",
    productFamilyId: "product_family_id",
    productFamilyName: "product_family_name",
    productFamilyHandle: "product_family_handle",
    pricePerUnitInCents: "price_per_unit_in_cents",
    defaultPricePointId: "default_price_point_id",
    overagePrices: "overage_prices",
    pricePointCount: "price_point_count",
    pricePointsUrl: "price_points_url",
    defaultPricePointName: "default_price_point_name",
    taxCode: "tax_code",
    upgradeCharge: "upgrade_charge",
    downgradeCredit: "downgrade_credit",
    createdAt: "created_at",
    updatedAt: "updated_at",
    archivedAt: "archived_at",
    hideDateRangeOnInvoice: "hide_date_range_on_invoice",
    allowFractionalQuantities: "allow_fractional_quantities",
    itemCategory: "item_category",
    useSiteExchangeRate: "use_site_exchange_rate",
    accountingCode: "accounting_code",
    eventBasedBillingMetricId: "event_based_billing_metric_id",
    intervalUnit: "interval_unit",
  },
});
