import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RefundInvoice = {
  amount: string;
  memo: string;
  paymentId: number;
  external?: boolean;
  applyCredit?: boolean;
  voidInvoice?: boolean;
};

export const refundInvoiceSchema: Schema<RefundInvoice> = s.object<RefundInvoice>({
  amount: s.string(),
  memo: s.string(),
  paymentId: s.number(),
  external: s.optional(s.boolean()),
  applyCredit: s.optional(s.boolean()),
  voidInvoice: s.optional(s.boolean()),
  _keysMap: {
    paymentId: "payment_id",
    applyCredit: "apply_credit",
    voidInvoice: "void_invoice",
  },
});
