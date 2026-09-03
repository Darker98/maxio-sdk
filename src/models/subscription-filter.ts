import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subscriptionListDateFieldSchema,
  type SubscriptionListDateField,
} from "./subscription-list-date-field.js";
import { subscriptionStateFilterSchema, type SubscriptionStateFilter } from "./subscription-state-filter.js";

export type SubscriptionFilter = {
  states?: SubscriptionStateFilter[];
  dateField?: SubscriptionListDateField;
  startDate?: string;
  endDate?: string;
  startDatetime?: Date;
  endDatetime?: Date;
};

export const subscriptionFilterSchema: Schema<SubscriptionFilter> = s.object<SubscriptionFilter>({
  states: s.optional(s.array(s.lazy(() => subscriptionStateFilterSchema))),
  dateField: s.optional(s.lazy(() => subscriptionListDateFieldSchema)),
  startDate: s.optional(s.dateOnly()),
  endDate: s.optional(s.dateOnly()),
  startDatetime: s.optional(s.dateTime()),
  endDatetime: s.optional(s.dateTime()),
  _keysMap: {
    dateField: "date_field",
    startDate: "start_date",
    endDate: "end_date",
    startDatetime: "start_datetime",
    endDatetime: "end_datetime",
  },
});
