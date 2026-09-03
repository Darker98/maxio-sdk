import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  prepaidUsageAllocationDetailSchema,
  type PrepaidUsageAllocationDetail,
} from "./prepaid-usage-allocation-detail.js";

export type PrepaidUsage = {
  previousUnitBalance: string;
  previousOverageUnitBalance: string;
  newUnitBalance: number;
  newOverageUnitBalance: number;
  usageQuantity: number;
  overageUsageQuantity: number;
  componentId: number;
  componentHandle: string;
  memo: string;
  allocationDetails: PrepaidUsageAllocationDetail[];
};

export const prepaidUsageSchema: Schema<PrepaidUsage> = s.object<PrepaidUsage>({
  previousUnitBalance: s.string(),
  previousOverageUnitBalance: s.string(),
  newUnitBalance: s.number(),
  newOverageUnitBalance: s.number(),
  usageQuantity: s.number(),
  overageUsageQuantity: s.number(),
  componentId: s.number(),
  componentHandle: s.string(),
  memo: s.string(),
  allocationDetails: s.array(s.lazy(() => prepaidUsageAllocationDetailSchema)),
  _keysMap: {
    previousUnitBalance: "previous_unit_balance",
    previousOverageUnitBalance: "previous_overage_unit_balance",
    newUnitBalance: "new_unit_balance",
    newOverageUnitBalance: "new_overage_unit_balance",
    usageQuantity: "usage_quantity",
    overageUsageQuantity: "overage_usage_quantity",
    componentId: "component_id",
    componentHandle: "component_handle",
    allocationDetails: "allocation_details",
  },
});
