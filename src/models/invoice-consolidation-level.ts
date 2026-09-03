import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InvoiceConsolidationLevel = {
  None: "none",
  Child: "child",
  Parent: "parent",
} as const;
export type InvoiceConsolidationLevel =
  | (typeof InvoiceConsolidationLevel)[keyof typeof InvoiceConsolidationLevel]
  | (string & {});

export const invoiceConsolidationLevelSchema: EnumSchema<InvoiceConsolidationLevel> =
  s.enumOf<InvoiceConsolidationLevel>(InvoiceConsolidationLevel);
