import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { offerDiscountSchema, type OfferDiscount } from "./offer-discount.js";
import { offerItemSchema, type OfferItem } from "./offer-item.js";
import { offerSignupPageSchema, type OfferSignupPage } from "./offer-signup-page.js";

export type Offer = {
  id?: number;
  siteId?: number;
  productFamilyId?: number;
  productId?: number;
  productPricePointId?: number;
  productRevisableNumber?: number;
  name?: string;
  handle?: string;
  description?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
  archivedAt?: Date | null;
  offerItems?: OfferItem[];
  offerDiscounts?: OfferDiscount[];
  productFamilyName?: string;
  productName?: string;
  productPricePointName?: string;
  productPriceInCents?: number;
  offerSignupPages?: OfferSignupPage[];
};

export const offerSchema: Schema<Offer> = s.object<Offer>({
  id: s.optional(s.number()),
  siteId: s.optional(s.number()),
  productFamilyId: s.optional(s.number()),
  productId: s.optional(s.number()),
  productPricePointId: s.optional(s.number()),
  productRevisableNumber: s.optional(s.number()),
  name: s.optional(s.string()),
  handle: s.optional(s.string()),
  description: s.optionalNullable(s.string()),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  archivedAt: s.optionalNullable(s.dateTime()),
  offerItems: s.optional(s.array(s.lazy(() => offerItemSchema))),
  offerDiscounts: s.optional(s.array(s.lazy(() => offerDiscountSchema))),
  productFamilyName: s.optional(s.string()),
  productName: s.optional(s.string()),
  productPricePointName: s.optional(s.string()),
  productPriceInCents: s.optional(s.number()),
  offerSignupPages: s.optional(s.array(s.lazy(() => offerSignupPageSchema))),
  _keysMap: {
    siteId: "site_id",
    productFamilyId: "product_family_id",
    productId: "product_id",
    productPricePointId: "product_price_point_id",
    productRevisableNumber: "product_revisable_number",
    createdAt: "created_at",
    updatedAt: "updated_at",
    archivedAt: "archived_at",
    offerItems: "offer_items",
    offerDiscounts: "offer_discounts",
    productFamilyName: "product_family_name",
    productName: "product_name",
    productPricePointName: "product_price_point_name",
    productPriceInCents: "product_price_in_cents",
    offerSignupPages: "offer_signup_pages",
  },
});
