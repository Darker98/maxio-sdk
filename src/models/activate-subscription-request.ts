import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ActivateSubscriptionRequest = {
  revertOnFailure?: boolean | null;
};

export const activateSubscriptionRequestSchema: Schema<ActivateSubscriptionRequest> =
  s.object<ActivateSubscriptionRequest>({
    revertOnFailure: s.optionalNullable(s.boolean()),
    _keysMap: {
      revertOnFailure: "revert_on_failure",
    },
  });
