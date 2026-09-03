import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  refundPrepaymentAggregatedErrorSchema,
  type RefundPrepaymentAggregatedError,
} from "./refund-prepayment-aggregated-error.js";

export type RefundPrepaymentAggregatedErrorsResponse = {
  errors?: RefundPrepaymentAggregatedError;
};

export const refundPrepaymentAggregatedErrorsResponseSchema: Schema<RefundPrepaymentAggregatedErrorsResponse> =
  s.object<RefundPrepaymentAggregatedErrorsResponse>({
    errors: s.optional(s.lazy(() => refundPrepaymentAggregatedErrorSchema)),
  });
