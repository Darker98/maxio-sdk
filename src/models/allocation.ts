import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditTypeSchema, type CreditType } from "./credit-type.js";
import { intervalUnitSchema, type IntervalUnit } from "./interval-unit.js";
import { paymentForAllocationSchema, type PaymentForAllocation } from "./payment-for-allocation.js";
import { previousQuantitySchema, type PreviousQuantity } from "./unions/previous-quantity.js";
import { quantitySchema, type Quantity } from "./unions/quantity.js";

export type Allocation = {
  allocationId?: number;
  componentId?: number;
  componentHandle?: string | null;
  subscriptionId?: number;
  quantity?: Quantity;
  previousQuantity?: PreviousQuantity;
  memo?: string | null;
  timestamp?: Date;
  createdAt?: Date;
  prorationUpgradeScheme?: string;
  prorationDowngradeScheme?: string;
  pricePointId?: number;
  pricePointName?: string;
  pricePointHandle?: string;
  interval?: number;
  intervalUnit?: IntervalUnit | null;
  previousPricePointId?: number;
  accrueCharge?: boolean;
  initiateDunning?: boolean;
  upgradeCharge?: CreditType | null;
  downgradeCredit?: CreditType | null;
  payment?: PaymentForAllocation | null;
  expiresAt?: Date;
  usedQuantity?: number;
  chargeId?: number;
};

export const allocationSchema: Schema<Allocation> = s.object<Allocation>({
  allocationId: s.optional(s.number()),
  componentId: s.optional(s.number()),
  componentHandle: s.optionalNullable(s.string()),
  subscriptionId: s.optional(s.number()),
  quantity: s.optional(s.lazy(() => quantitySchema)),
  previousQuantity: s.optional(s.lazy(() => previousQuantitySchema)),
  memo: s.optionalNullable(s.string()),
  timestamp: s.optional(s.dateTime()),
  createdAt: s.optional(s.dateTime()),
  prorationUpgradeScheme: s.optional(s.string()),
  prorationDowngradeScheme: s.optional(s.string()),
  pricePointId: s.optional(s.number()),
  pricePointName: s.optional(s.string()),
  pricePointHandle: s.optional(s.string()),
  interval: s.optional(s.number()),
  intervalUnit: s.optionalNullable(s.lazy(() => intervalUnitSchema)),
  previousPricePointId: s.optional(s.number()),
  accrueCharge: s.optional(s.boolean()),
  initiateDunning: s.optional(s.boolean()),
  upgradeCharge: s.optionalNullable(s.lazy(() => creditTypeSchema)),
  downgradeCredit: s.optionalNullable(s.lazy(() => creditTypeSchema)),
  payment: s.optionalNullable(s.lazy(() => paymentForAllocationSchema)),
  expiresAt: s.optional(s.dateTime()),
  usedQuantity: s.optional(s.number()),
  chargeId: s.optional(s.number()),
  _keysMap: {
    allocationId: "allocation_id",
    componentId: "component_id",
    componentHandle: "component_handle",
    subscriptionId: "subscription_id",
    previousQuantity: "previous_quantity",
    createdAt: "created_at",
    prorationUpgradeScheme: "proration_upgrade_scheme",
    prorationDowngradeScheme: "proration_downgrade_scheme",
    pricePointId: "price_point_id",
    pricePointName: "price_point_name",
    pricePointHandle: "price_point_handle",
    intervalUnit: "interval_unit",
    previousPricePointId: "previous_price_point_id",
    accrueCharge: "accrue_charge",
    initiateDunning: "initiate_dunning",
    upgradeCharge: "upgrade_charge",
    downgradeCredit: "downgrade_credit",
    expiresAt: "expires_at",
    usedQuantity: "used_quantity",
    chargeId: "charge_id",
  },
});
