import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditTypeSchema, type CreditType } from "./credit-type.js";

export type AllocationSettings = {
  upgradeCharge?: CreditType | null;
  downgradeCredit?: CreditType | null;
  accrueCharge?: string;
};

export const allocationSettingsSchema: Schema<AllocationSettings> = s.object<AllocationSettings>({
  upgradeCharge: s.optionalNullable(s.lazy(() => creditTypeSchema)),
  downgradeCredit: s.optionalNullable(s.lazy(() => creditTypeSchema)),
  accrueCharge: s.optional(s.string()),
  _keysMap: {
    upgradeCharge: "upgrade_charge",
    downgradeCredit: "downgrade_credit",
    accrueCharge: "accrue_charge",
  },
});
