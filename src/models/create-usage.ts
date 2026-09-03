import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { billingScheduleSchema, type BillingSchedule } from "./billing-schedule.js";
import { componentCustomPriceSchema, type ComponentCustomPrice } from "./component-custom-price.js";

export type CreateUsage = {
  quantity?: number;
  pricePointId?: string;
  memo?: string;
  billingSchedule?: BillingSchedule;
  customPrice?: ComponentCustomPrice;
};

export const createUsageSchema: Schema<CreateUsage> = s.object<CreateUsage>({
  quantity: s.optional(s.number()),
  pricePointId: s.optional(s.string()),
  memo: s.optional(s.string()),
  billingSchedule: s.optional(s.lazy(() => billingScheduleSchema)),
  customPrice: s.optional(s.lazy(() => componentCustomPriceSchema)),
  _keysMap: {
    pricePointId: "price_point_id",
    billingSchedule: "billing_schedule",
    customPrice: "custom_price",
  },
});
