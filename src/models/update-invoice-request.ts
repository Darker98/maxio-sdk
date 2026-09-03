import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { updateInvoiceSchema, type UpdateInvoice } from "./update-invoice.js";

export type UpdateInvoiceRequest = {
  invoice: UpdateInvoice;
};

export const updateInvoiceRequestSchema: Schema<UpdateInvoiceRequest> = s.object<UpdateInvoiceRequest>({
  invoice: updateInvoiceSchema,
});
