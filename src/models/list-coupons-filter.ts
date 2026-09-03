import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { basicDateFieldSchema, type BasicDateField } from "./basic-date-field.js";

export type ListCouponsFilter = {
  dateField?: BasicDateField;
  startDate?: string;
  endDate?: string;
  startDatetime?: Date;
  endDatetime?: Date;
  ids?: number[];
  codes?: string[];
  useSiteExchangeRate?: boolean;
  includeArchived?: boolean;
};

export const listCouponsFilterSchema: Schema<ListCouponsFilter> = s.object<ListCouponsFilter>({
  dateField: s.optional(s.lazy(() => basicDateFieldSchema)),
  startDate: s.optional(s.dateOnly()),
  endDate: s.optional(s.dateOnly()),
  startDatetime: s.optional(s.dateTime()),
  endDatetime: s.optional(s.dateTime()),
  ids: s.optional(s.array(s.number())),
  codes: s.optional(s.array(s.string())),
  useSiteExchangeRate: s.optional(s.boolean()),
  includeArchived: s.optional(s.boolean()),
  _keysMap: {
    dateField: "date_field",
    startDate: "start_date",
    endDate: "end_date",
    startDatetime: "start_datetime",
    endDatetime: "end_datetime",
    useSiteExchangeRate: "use_site_exchange_rate",
    includeArchived: "include_archived",
  },
});
