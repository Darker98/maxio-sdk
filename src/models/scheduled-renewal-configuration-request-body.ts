import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ScheduledRenewalConfigurationRequestBody = {
  startsAt?: Date;
  endsAt?: Date;
  lockInAt?: Date;
  contractId?: number;
  createNewContract?: boolean;
};

export const scheduledRenewalConfigurationRequestBodySchema: Schema<ScheduledRenewalConfigurationRequestBody> =
  s.object<ScheduledRenewalConfigurationRequestBody>({
    startsAt: s.optional(s.dateTime()),
    endsAt: s.optional(s.dateTime()),
    lockInAt: s.optional(s.dateTime()),
    contractId: s.optional(s.number()),
    createNewContract: s.optional(s.boolean()),
    _keysMap: {
      startsAt: "starts_at",
      endsAt: "ends_at",
      lockInAt: "lock_in_at",
      contractId: "contract_id",
      createNewContract: "create_new_contract",
    },
  });
