import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reactivationChargeSchema, type ReactivationCharge } from "./reactivation-charge.js";

export type ReactivationBilling = {
  reactivationCharge?: ReactivationCharge;
};

export const reactivationBillingSchema: Schema<ReactivationBilling> = s.object<ReactivationBilling>({
  reactivationCharge: s.optional(s.lazy(() => reactivationChargeSchema)),
  _keysMap: {
    reactivationCharge: "reactivation_charge",
  },
});
