import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { prorationSchema, type Proration } from "./proration.js";

export type SubscriptionMigrationPreviewOptions = {
  productId?: number;
  productPricePointId?: number;
  includeTrial?: boolean;
  includeInitialCharge?: boolean;
  includeCoupons?: boolean;
  preservePeriod?: boolean;
  productHandle?: string;
  productPricePointHandle?: string;
  proration?: Proration;
  prorationDate?: Date;
};

export const subscriptionMigrationPreviewOptionsSchema: Schema<SubscriptionMigrationPreviewOptions> =
  s.object<SubscriptionMigrationPreviewOptions>({
    productId: s.optional(s.number()),
    productPricePointId: s.optional(s.number()),
    includeTrial: s.optional(s.boolean()),
    includeInitialCharge: s.optional(s.boolean()),
    includeCoupons: s.optional(s.boolean()),
    preservePeriod: s.optional(s.boolean()),
    productHandle: s.optional(s.string()),
    productPricePointHandle: s.optional(s.string()),
    proration: s.optional(s.lazy(() => prorationSchema)),
    prorationDate: s.optional(s.dateTime()),
    _keysMap: {
      productId: "product_id",
      productPricePointId: "product_price_point_id",
      includeTrial: "include_trial",
      includeInitialCharge: "include_initial_charge",
      includeCoupons: "include_coupons",
      preservePeriod: "preserve_period",
      productHandle: "product_handle",
      productPricePointHandle: "product_price_point_handle",
      prorationDate: "proration_date",
    },
  });
