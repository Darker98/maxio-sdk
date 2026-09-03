import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { listPrepaymentDateFieldSchema, type ListPrepaymentDateField } from "./list-prepayment-date-field.js";

export type ListPrepaymentsFilter = {
  dateField?: ListPrepaymentDateField;
  startDate?: string;
  endDate?: string;
};

export const listPrepaymentsFilterSchema: Schema<ListPrepaymentsFilter> = s.object<ListPrepaymentsFilter>({
  dateField: s.optional(s.lazy(() => listPrepaymentDateFieldSchema)),
  startDate: s.optional(s.dateOnly()),
  endDate: s.optional(s.dateOnly()),
  _keysMap: {
    dateField: "date_field",
    startDate: "start_date",
    endDate: "end_date",
  },
});
