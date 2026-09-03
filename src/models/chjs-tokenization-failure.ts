import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentProfileParamsSchema, type PaymentProfileParams } from "./payment-profile-params.js";

export type ChjsTokenizationFailure = {
  errors: string;
  paymentProfileParams?: PaymentProfileParams;
};

export const chjsTokenizationFailureSchema: Schema<ChjsTokenizationFailure> =
  s.object<ChjsTokenizationFailure>({
    errors: s.string(),
    paymentProfileParams: s.optional(s.lazy(() => paymentProfileParamsSchema)),
    _keysMap: {
      paymentProfileParams: "payment_profile_params",
    },
  });
