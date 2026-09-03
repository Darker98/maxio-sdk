import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { collectionMethodSchema, type CollectionMethod } from "./collection-method.js";
import { createAllocationSchema, type CreateAllocation } from "./create-allocation.js";
import { creditTypeSchema, type CreditType } from "./credit-type.js";

export type AllocateComponents = {
  prorationUpgradeScheme?: string;
  prorationDowngradeScheme?: string;
  allocations?: CreateAllocation[];
  accrueCharge?: boolean;
  upgradeCharge?: CreditType | null;
  downgradeCredit?: CreditType | null;
  paymentCollectionMethod?: CollectionMethod;
  initiateDunning?: boolean;
};

export const allocateComponentsSchema: Schema<AllocateComponents> = s.object<AllocateComponents>({
  prorationUpgradeScheme: s.optional(s.string()),
  prorationDowngradeScheme: s.optional(s.string()),
  allocations: s.optional(s.array(s.lazy(() => createAllocationSchema))),
  accrueCharge: s.optional(s.boolean()),
  upgradeCharge: s.optionalNullable(s.lazy(() => creditTypeSchema)),
  downgradeCredit: s.optionalNullable(s.lazy(() => creditTypeSchema)),
  paymentCollectionMethod: s.optional(s.lazy(() => collectionMethodSchema)),
  initiateDunning: s.optional(s.boolean()),
  _keysMap: {
    prorationUpgradeScheme: "proration_upgrade_scheme",
    prorationDowngradeScheme: "proration_downgrade_scheme",
    accrueCharge: "accrue_charge",
    upgradeCharge: "upgrade_charge",
    downgradeCredit: "downgrade_credit",
    paymentCollectionMethod: "payment_collection_method",
    initiateDunning: "initiate_dunning",
  },
});
