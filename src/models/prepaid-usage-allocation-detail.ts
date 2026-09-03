import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PrepaidUsageAllocationDetail = {
  allocationId?: number;
  chargeId?: number;
  usageQuantity?: number;
};

export const prepaidUsageAllocationDetailSchema: Schema<PrepaidUsageAllocationDetail> =
  s.object<PrepaidUsageAllocationDetail>({
    allocationId: s.optional(s.number()),
    chargeId: s.optional(s.number()),
    usageQuantity: s.optional(s.number()),
    _keysMap: {
      allocationId: "allocation_id",
      chargeId: "charge_id",
      usageQuantity: "usage_quantity",
    },
  });
