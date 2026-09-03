import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { billingScheduleSchema, type BillingSchedule } from "./billing-schedule.js";
import { componentCustomPriceSchema, type ComponentCustomPrice } from "./component-custom-price.js";
import {
  downgradeCreditCreditTypeSchema,
  type DowngradeCreditCreditType,
} from "./downgrade-credit-credit-type.js";
import { pricePointId1Schema, type PricePointId1 } from "./unions/price-point-id1.js";
import { upgradeChargeCreditTypeSchema, type UpgradeChargeCreditType } from "./upgrade-charge-credit-type.js";

export type CreateAllocation = {
  quantity: number;
  decimalQuantity?: string;
  previousQuantity?: number;
  decimalPreviousQuantity?: string;
  componentId?: number;
  memo?: string;
  prorationDowngradeScheme?: string;
  prorationUpgradeScheme?: string;
  downgradeCredit?: DowngradeCreditCreditType | null;
  upgradeCharge?: UpgradeChargeCreditType | null;
  accrueCharge?: boolean;
  initiateDunning?: boolean;
  pricePointId?: PricePointId1 | null;
  billingSchedule?: BillingSchedule;
  customPrice?: ComponentCustomPrice;
};

export const createAllocationSchema: Schema<CreateAllocation> = s.object<CreateAllocation>({
  quantity: s.number(),
  decimalQuantity: s.optional(s.string()),
  previousQuantity: s.optional(s.number()),
  decimalPreviousQuantity: s.optional(s.string()),
  componentId: s.optional(s.number()),
  memo: s.optional(s.string()),
  prorationDowngradeScheme: s.optional(s.string()),
  prorationUpgradeScheme: s.optional(s.string()),
  downgradeCredit: s.optionalNullable(s.lazy(() => downgradeCreditCreditTypeSchema)),
  upgradeCharge: s.optionalNullable(s.lazy(() => upgradeChargeCreditTypeSchema)),
  accrueCharge: s.optional(s.boolean()),
  initiateDunning: s.optional(s.boolean()),
  pricePointId: s.optionalNullable(s.lazy(() => pricePointId1Schema)),
  billingSchedule: s.optional(s.lazy(() => billingScheduleSchema)),
  customPrice: s.optional(s.lazy(() => componentCustomPriceSchema)),
  _keysMap: {
    decimalQuantity: "decimal_quantity",
    previousQuantity: "previous_quantity",
    decimalPreviousQuantity: "decimal_previous_quantity",
    componentId: "component_id",
    prorationDowngradeScheme: "proration_downgrade_scheme",
    prorationUpgradeScheme: "proration_upgrade_scheme",
    downgradeCredit: "downgrade_credit",
    upgradeCharge: "upgrade_charge",
    accrueCharge: "accrue_charge",
    initiateDunning: "initiate_dunning",
    pricePointId: "price_point_id",
    billingSchedule: "billing_schedule",
    customPrice: "custom_price",
  },
});
