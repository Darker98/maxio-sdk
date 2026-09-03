import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FailedPaymentAction = {
  LeaveOpenInvoice: "leave_open_invoice",
  RollbackToPending: "rollback_to_pending",
  InitiateDunning: "initiate_dunning",
} as const;
export type FailedPaymentAction =
  | (typeof FailedPaymentAction)[keyof typeof FailedPaymentAction]
  | (string & {});

export const failedPaymentActionSchema: EnumSchema<FailedPaymentAction> =
  s.enumOf<FailedPaymentAction>(FailedPaymentAction);
