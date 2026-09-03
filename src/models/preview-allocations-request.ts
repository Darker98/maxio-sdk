import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { createAllocationSchema, type CreateAllocation } from "./create-allocation.js";
import { creditTypeSchema, type CreditType } from "./credit-type.js";

export type PreviewAllocationsRequest = {
  allocations: CreateAllocation[];
  effectiveProrationDate?: string;
  upgradeCharge?: CreditType | null;
  downgradeCredit?: CreditType | null;
};

export const previewAllocationsRequestSchema: Schema<PreviewAllocationsRequest> =
  s.object<PreviewAllocationsRequest>({
    allocations: s.array(s.lazy(() => createAllocationSchema)),
    effectiveProrationDate: s.optional(s.dateOnly()),
    upgradeCharge: s.optionalNullable(s.lazy(() => creditTypeSchema)),
    downgradeCredit: s.optionalNullable(s.lazy(() => creditTypeSchema)),
    _keysMap: {
      effectiveProrationDate: "effective_proration_date",
      upgradeCharge: "upgrade_charge",
      downgradeCredit: "downgrade_credit",
    },
  });
