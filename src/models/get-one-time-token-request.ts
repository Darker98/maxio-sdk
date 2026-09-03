import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  getOneTimeTokenPaymentProfileSchema,
  type GetOneTimeTokenPaymentProfile,
} from "./get-one-time-token-payment-profile.js";

export type GetOneTimeTokenRequest = {
  paymentProfile: GetOneTimeTokenPaymentProfile;
};

export const getOneTimeTokenRequestSchema: Schema<GetOneTimeTokenRequest> = s.object<GetOneTimeTokenRequest>({
  paymentProfile: getOneTimeTokenPaymentProfileSchema,
  _keysMap: {
    paymentProfile: "payment_profile",
  },
});
