import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const UpgradeChargeCreditType = {
  Full: "full",
  Prorated: "prorated",
  None: "none",
} as const;
export type UpgradeChargeCreditType =
  | (typeof UpgradeChargeCreditType)[keyof typeof UpgradeChargeCreditType]
  | (string & {});

export const upgradeChargeCreditTypeSchema: EnumSchema<UpgradeChargeCreditType> =
  s.enumOf<UpgradeChargeCreditType>(UpgradeChargeCreditType);
