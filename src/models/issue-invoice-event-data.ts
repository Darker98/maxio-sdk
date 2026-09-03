import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoiceConsolidationLevelSchema,
  type InvoiceConsolidationLevel,
} from "./invoice-consolidation-level.js";
import { invoiceStatusSchema, type InvoiceStatus } from "./invoice-status.js";

export type IssueInvoiceEventData = {
  consolidationLevel: InvoiceConsolidationLevel;
  fromStatus: InvoiceStatus;
  toStatus: InvoiceStatus;
  dueAmount: string;
  totalAmount: string;
};

export const issueInvoiceEventDataSchema: Schema<IssueInvoiceEventData> = s.object<IssueInvoiceEventData>({
  consolidationLevel: invoiceConsolidationLevelSchema,
  fromStatus: invoiceStatusSchema,
  toStatus: invoiceStatusSchema,
  dueAmount: s.string(),
  totalAmount: s.string(),
  _keysMap: {
    consolidationLevel: "consolidation_level",
    fromStatus: "from_status",
    toStatus: "to_status",
    dueAmount: "due_amount",
    totalAmount: "total_amount",
  },
});
