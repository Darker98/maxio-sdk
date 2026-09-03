import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditTypeSchema, type CreditType } from "./credit-type.js";
import { intervalUnitSchema, type IntervalUnit } from "./interval-unit.js";
import { previousQuantity1Schema, type PreviousQuantity1 } from "./unions/previous-quantity1.js";
import { quantity1Schema, type Quantity1 } from "./unions/quantity1.js";

export type AllocationPreviewItem = {
  componentId?: number;
  subscriptionId?: number;
  quantity?: Quantity1;
  previousQuantity?: PreviousQuantity1;
  memo?: string | null;
  timestamp?: string | null;
  prorationUpgradeScheme?: string;
  prorationDowngradeScheme?: string;
  accrueCharge?: boolean;
  upgradeCharge?: CreditType | null;
  downgradeCredit?: CreditType | null;
  pricePointId?: number;
  interval?: number;
  intervalUnit?: IntervalUnit | null;
  previousPricePointId?: number;
  pricePointHandle?: string;
  pricePointName?: string;
  componentHandle?: string | null;
};

export const allocationPreviewItemSchema: Schema<AllocationPreviewItem> = s.object<AllocationPreviewItem>({
  componentId: s.optional(s.number()),
  subscriptionId: s.optional(s.number()),
  quantity: s.optional(s.lazy(() => quantity1Schema)),
  previousQuantity: s.optional(s.lazy(() => previousQuantity1Schema)),
  memo: s.optionalNullable(s.string()),
  timestamp: s.optionalNullable(s.string()),
  prorationUpgradeScheme: s.optional(s.string()),
  prorationDowngradeScheme: s.optional(s.string()),
  accrueCharge: s.optional(s.boolean()),
  upgradeCharge: s.optionalNullable(s.lazy(() => creditTypeSchema)),
  downgradeCredit: s.optionalNullable(s.lazy(() => creditTypeSchema)),
  pricePointId: s.optional(s.number()),
  interval: s.optional(s.number()),
  intervalUnit: s.optionalNullable(s.lazy(() => intervalUnitSchema)),
  previousPricePointId: s.optional(s.number()),
  pricePointHandle: s.optional(s.string()),
  pricePointName: s.optional(s.string()),
  componentHandle: s.optionalNullable(s.string()),
  _keysMap: {
    componentId: "component_id",
    subscriptionId: "subscription_id",
    previousQuantity: "previous_quantity",
    prorationUpgradeScheme: "proration_upgrade_scheme",
    prorationDowngradeScheme: "proration_downgrade_scheme",
    accrueCharge: "accrue_charge",
    upgradeCharge: "upgrade_charge",
    downgradeCredit: "downgrade_credit",
    pricePointId: "price_point_id",
    intervalUnit: "interval_unit",
    previousPricePointId: "previous_price_point_id",
    pricePointHandle: "price_point_handle",
    pricePointName: "price_point_name",
    componentHandle: "component_handle",
  },
});
