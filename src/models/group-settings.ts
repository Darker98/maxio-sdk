import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { groupBillingSchema, type GroupBilling } from "./group-billing.js";
import { groupTargetSchema, type GroupTarget } from "./group-target.js";

export type GroupSettings = {
  target: GroupTarget;
  billing?: GroupBilling;
};

export const groupSettingsSchema: Schema<GroupSettings> = s.object<GroupSettings>({
  target: groupTargetSchema,
  billing: s.optional(s.lazy(() => groupBillingSchema)),
});
