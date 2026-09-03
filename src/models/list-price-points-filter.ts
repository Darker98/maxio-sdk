import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { basicDateFieldSchema, type BasicDateField } from "./basic-date-field.js";
import { includeNullOrNotNullSchema, type IncludeNullOrNotNull } from "./include-null-or-not-null.js";
import { pricePointTypeSchema, type PricePointType } from "./price-point-type.js";

export type ListPricePointsFilter = {
  dateField?: BasicDateField;
  startDate?: string;
  endDate?: string;
  startDatetime?: Date;
  endDatetime?: Date;
  type?: PricePointType[];
  ids?: number[];
  archivedAt?: IncludeNullOrNotNull;
};

export const listPricePointsFilterSchema: Schema<ListPricePointsFilter> = s.object<ListPricePointsFilter>({
  dateField: s.optional(s.lazy(() => basicDateFieldSchema)),
  startDate: s.optional(s.dateOnly()),
  endDate: s.optional(s.dateOnly()),
  startDatetime: s.optional(s.dateTime()),
  endDatetime: s.optional(s.dateTime()),
  type: s.optional(s.array(s.lazy(() => pricePointTypeSchema))),
  ids: s.optional(s.array(s.number())),
  archivedAt: s.optional(s.lazy(() => includeNullOrNotNullSchema)),
  _keysMap: {
    dateField: "date_field",
    startDate: "start_date",
    endDate: "end_date",
    startDatetime: "start_datetime",
    endDatetime: "end_datetime",
    archivedAt: "archived_at",
  },
});
