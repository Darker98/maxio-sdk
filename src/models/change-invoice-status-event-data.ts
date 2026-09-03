import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoiceConsolidationLevelSchema,
  type InvoiceConsolidationLevel,
} from "./invoice-consolidation-level.js";
import { invoiceStatusSchema, type InvoiceStatus } from "./invoice-status.js";

export type ChangeInvoiceStatusEventData = {
  gatewayTransId?: string;
  amount?: string;
  fromStatus: InvoiceStatus;
  toStatus: InvoiceStatus;
  consolidationLevel?: InvoiceConsolidationLevel;
};

export const changeInvoiceStatusEventDataSchema: Schema<ChangeInvoiceStatusEventData> =
  s.object<ChangeInvoiceStatusEventData>({
    gatewayTransId: s.optional(s.string()),
    amount: s.optional(s.string()),
    fromStatus: invoiceStatusSchema,
    toStatus: invoiceStatusSchema,
    consolidationLevel: s.optional(s.lazy(() => invoiceConsolidationLevelSchema)),
    _keysMap: {
      gatewayTransId: "gateway_trans_id",
      fromStatus: "from_status",
      toStatus: "to_status",
      consolidationLevel: "consolidation_level",
    },
  });
