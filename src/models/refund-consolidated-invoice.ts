import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { segmentUidsSchema, type SegmentUids } from "./unions/segment-uids.js";

export type RefundConsolidatedInvoice = {
  memo: string;
  paymentId: number;
  segmentUids: SegmentUids;
  external?: boolean;
  applyCredit?: boolean;
  amount?: string;
};

export const refundConsolidatedInvoiceSchema: Schema<RefundConsolidatedInvoice> =
  s.object<RefundConsolidatedInvoice>({
    memo: s.string(),
    paymentId: s.number(),
    segmentUids: segmentUidsSchema,
    external: s.optional(s.boolean()),
    applyCredit: s.optional(s.boolean()),
    amount: s.optional(s.string()),
    _keysMap: {
      paymentId: "payment_id",
      segmentUids: "segment_uids",
      applyCredit: "apply_credit",
    },
  });
