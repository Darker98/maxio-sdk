import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { failedPaymentActionSchema, type FailedPaymentAction } from "./failed-payment-action.js";

export type IssueInvoiceRequest = {
  onFailedPayment?: FailedPaymentAction;
};

export const issueInvoiceRequestSchema: Schema<IssueInvoiceRequest> = s.object<IssueInvoiceRequest>({
  onFailedPayment: s.optional(s.lazy(() => failedPaymentActionSchema)),
  _keysMap: {
    onFailedPayment: "on_failed_payment",
  },
});
