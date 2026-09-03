import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { couponPayloadSchema, type CouponPayload } from "./coupon-payload.js";

export type CouponRequest = {
  coupon?: CouponPayload;
  restrictedProducts?: Record<string, boolean>;
  restrictedComponents?: Record<string, boolean>;
};

export const couponRequestSchema: Schema<CouponRequest> = s.object<CouponRequest>({
  coupon: s.optional(s.lazy(() => couponPayloadSchema)),
  restrictedProducts: s.optional(s.record(s.string(), s.boolean())),
  restrictedComponents: s.optional(s.record(s.string(), s.boolean())),
  _keysMap: {
    restrictedProducts: "restricted_products",
    restrictedComponents: "restricted_components",
  },
});
