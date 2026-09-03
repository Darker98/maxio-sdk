import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CancellationOptions = {
  cancellationMessage?: string;
  reasonCode?: string;
  cancelAtEndOfPeriod?: boolean;
  scheduledCancellationAt?: Date | null;
  refundPrepaymentAccountBalance?: boolean;
};

export const cancellationOptionsSchema: Schema<CancellationOptions> = s.object<CancellationOptions>({
  cancellationMessage: s.optional(s.string()),
  reasonCode: s.optional(s.string()),
  cancelAtEndOfPeriod: s.optional(s.boolean()),
  scheduledCancellationAt: s.optionalNullable(s.dateTime()),
  refundPrepaymentAccountBalance: s.optional(s.boolean()),
  _keysMap: {
    cancellationMessage: "cancellation_message",
    reasonCode: "reason_code",
    cancelAtEndOfPeriod: "cancel_at_end_of_period",
    scheduledCancellationAt: "scheduled_cancellation_at",
    refundPrepaymentAccountBalance: "refund_prepayment_account_balance",
  },
});
