import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { calendarBillingSchema, type CalendarBilling } from "./calendar-billing.js";
import { subscriptionCustomPriceSchema, type SubscriptionCustomPrice } from "./subscription-custom-price.js";
import {
  subscriptionGroupSignupComponentSchema,
  type SubscriptionGroupSignupComponent,
} from "./subscription-group-signup-component.js";

export type SubscriptionGroupSignupItem = {
  productHandle?: string;
  productId?: number;
  productPricePointId?: number;
  productPricePointHandle?: string;
  offerId?: number;
  reference?: string;
  primary?: boolean;
  currency?: string;
  couponCodes?: string[];
  components?: SubscriptionGroupSignupComponent[];
  customPrice?: SubscriptionCustomPrice;
  calendarBilling?: CalendarBilling;
  metafields?: Record<string, string>;
};

export const subscriptionGroupSignupItemSchema: Schema<SubscriptionGroupSignupItem> =
  s.object<SubscriptionGroupSignupItem>({
    productHandle: s.optional(s.string()),
    productId: s.optional(s.number()),
    productPricePointId: s.optional(s.number()),
    productPricePointHandle: s.optional(s.string()),
    offerId: s.optional(s.number()),
    reference: s.optional(s.string()),
    primary: s.optional(s.boolean()),
    currency: s.optional(s.string()),
    couponCodes: s.optional(s.array(s.string())),
    components: s.optional(s.array(s.lazy(() => subscriptionGroupSignupComponentSchema))),
    customPrice: s.optional(s.lazy(() => subscriptionCustomPriceSchema)),
    calendarBilling: s.optional(s.lazy(() => calendarBillingSchema)),
    metafields: s.optional(s.record(s.string(), s.string())),
    _keysMap: {
      productHandle: "product_handle",
      productId: "product_id",
      productPricePointId: "product_price_point_id",
      productPricePointHandle: "product_price_point_handle",
      offerId: "offer_id",
      couponCodes: "coupon_codes",
      customPrice: "custom_price",
      calendarBilling: "calendar_billing",
    },
  });
