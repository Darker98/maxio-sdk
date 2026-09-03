import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expirationIntervalUnitSchema, type ExpirationIntervalUnit } from "./expiration-interval-unit.js";
import { intervalUnitSchema, type IntervalUnit } from "./interval-unit.js";
import { productFamilySchema, type ProductFamily } from "./product-family.js";
import { publicSignupPageSchema, type PublicSignupPage } from "./public-signup-page.js";

export type Product = {
  id?: number;
  name?: string;
  handle?: string | null;
  description?: string | null;
  accountingCode?: string | null;
  requestCreditCard?: boolean;
  expirationInterval?: number | null;
  expirationIntervalUnit?: ExpirationIntervalUnit | null;
  createdAt?: Date;
  updatedAt?: Date;
  priceInCents?: number;
  interval?: number;
  intervalUnit?: IntervalUnit;
  initialChargeInCents?: number | null;
  trialPriceInCents?: number | null;
  trialInterval?: number | null;
  trialIntervalUnit?: IntervalUnit | null;
  archivedAt?: Date | null;
  requireCreditCard?: boolean;
  returnParams?: string | null;
  taxable?: boolean;
  updateReturnUrl?: string | null;
  initialChargeAfterTrial?: boolean | null;
  versionNumber?: number;
  updateReturnParams?: string | null;
  productFamily?: ProductFamily;
  publicSignupPages?: PublicSignupPage[];
  productPricePointName?: string;
  requestBillingAddress?: boolean;
  requireBillingAddress?: boolean;
  requireShippingAddress?: boolean;
  taxCode?: string | null;
  defaultProductPricePointId?: number;
  useSiteExchangeRate?: boolean | null;
  itemCategory?: string | null;
  productPricePointId?: number;
  productPricePointHandle?: string | null;
};

export const productSchema: Schema<Product> = s.object<Product>({
  id: s.optional(s.number()),
  name: s.optional(s.string()),
  handle: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  accountingCode: s.optionalNullable(s.string()),
  requestCreditCard: s.optional(s.boolean()),
  expirationInterval: s.optionalNullable(s.number()),
  expirationIntervalUnit: s.optionalNullable(s.lazy(() => expirationIntervalUnitSchema)),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  priceInCents: s.optional(s.number()),
  interval: s.optional(s.number()),
  intervalUnit: s.optional(s.lazy(() => intervalUnitSchema)),
  initialChargeInCents: s.optionalNullable(s.number()),
  trialPriceInCents: s.optionalNullable(s.number()),
  trialInterval: s.optionalNullable(s.number()),
  trialIntervalUnit: s.optionalNullable(s.lazy(() => intervalUnitSchema)),
  archivedAt: s.optionalNullable(s.dateTime()),
  requireCreditCard: s.optional(s.boolean()),
  returnParams: s.optionalNullable(s.string()),
  taxable: s.optional(s.boolean()),
  updateReturnUrl: s.optionalNullable(s.string()),
  initialChargeAfterTrial: s.optionalNullable(s.boolean()),
  versionNumber: s.optional(s.number()),
  updateReturnParams: s.optionalNullable(s.string()),
  productFamily: s.optional(s.lazy(() => productFamilySchema)),
  publicSignupPages: s.optional(s.array(s.lazy(() => publicSignupPageSchema))),
  productPricePointName: s.optional(s.string()),
  requestBillingAddress: s.optional(s.boolean()),
  requireBillingAddress: s.optional(s.boolean()),
  requireShippingAddress: s.optional(s.boolean()),
  taxCode: s.optionalNullable(s.string()),
  defaultProductPricePointId: s.optional(s.number()),
  useSiteExchangeRate: s.optionalNullable(s.boolean()),
  itemCategory: s.optionalNullable(s.string()),
  productPricePointId: s.optional(s.number()),
  productPricePointHandle: s.optionalNullable(s.string()),
  _keysMap: {
    accountingCode: "accounting_code",
    requestCreditCard: "request_credit_card",
    expirationInterval: "expiration_interval",
    expirationIntervalUnit: "expiration_interval_unit",
    createdAt: "created_at",
    updatedAt: "updated_at",
    priceInCents: "price_in_cents",
    intervalUnit: "interval_unit",
    initialChargeInCents: "initial_charge_in_cents",
    trialPriceInCents: "trial_price_in_cents",
    trialInterval: "trial_interval",
    trialIntervalUnit: "trial_interval_unit",
    archivedAt: "archived_at",
    requireCreditCard: "require_credit_card",
    returnParams: "return_params",
    updateReturnUrl: "update_return_url",
    initialChargeAfterTrial: "initial_charge_after_trial",
    versionNumber: "version_number",
    updateReturnParams: "update_return_params",
    productFamily: "product_family",
    publicSignupPages: "public_signup_pages",
    productPricePointName: "product_price_point_name",
    requestBillingAddress: "request_billing_address",
    requireBillingAddress: "require_billing_address",
    requireShippingAddress: "require_shipping_address",
    taxCode: "tax_code",
    defaultProductPricePointId: "default_product_price_point_id",
    useSiteExchangeRate: "use_site_exchange_rate",
    itemCategory: "item_category",
    productPricePointId: "product_price_point_id",
    productPricePointHandle: "product_price_point_handle",
  },
});
