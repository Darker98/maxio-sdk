import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { firstChargeTypeSchema, type FirstChargeType } from "./first-charge-type.js";
import { snapDaySchema, type SnapDay } from "./unions/snap-day.js";

export type CalendarBilling = {
  snapDay?: SnapDay;
  calendarBillingFirstCharge?: FirstChargeType;
};

export const calendarBillingSchema: Schema<CalendarBilling> = s.object<CalendarBilling>({
  snapDay: s.optional(s.lazy(() => snapDaySchema)),
  calendarBillingFirstCharge: s.optional(s.lazy(() => firstChargeTypeSchema)),
  _keysMap: {
    snapDay: "snap_day",
    calendarBillingFirstCharge: "calendar_billing_first_charge",
  },
});
