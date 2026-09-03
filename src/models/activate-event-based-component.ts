import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { billingScheduleSchema, type BillingSchedule } from "./billing-schedule.js";
import { componentCustomPriceSchema, type ComponentCustomPrice } from "./component-custom-price.js";

export type ActivateEventBasedComponent = {
  pricePointId?: number;
  billingSchedule?: BillingSchedule;
  customPrice?: ComponentCustomPrice;
};

export const activateEventBasedComponentSchema: Schema<ActivateEventBasedComponent> =
  s.object<ActivateEventBasedComponent>({
    pricePointId: s.optional(s.number()),
    billingSchedule: s.optional(s.lazy(() => billingScheduleSchema)),
    customPrice: s.optional(s.lazy(() => componentCustomPriceSchema)),
    _keysMap: {
      pricePointId: "price_point_id",
      billingSchedule: "billing_schedule",
      customPrice: "custom_price",
    },
  });
