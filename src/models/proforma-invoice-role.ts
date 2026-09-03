import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProformaInvoiceRole = {
  Unset: "unset",
  Proforma: "proforma",
  ProformaAdhoc: "proforma_adhoc",
  ProformaAutomatic: "proforma_automatic",
} as const;
export type ProformaInvoiceRole =
  | (typeof ProformaInvoiceRole)[keyof typeof ProformaInvoiceRole]
  | (string & {});

export const proformaInvoiceRoleSchema: EnumSchema<ProformaInvoiceRole> =
  s.enumOf<ProformaInvoiceRole>(ProformaInvoiceRole);
