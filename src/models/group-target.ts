import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { groupTargetTypeSchema, type GroupTargetType } from "./group-target-type.js";

export type GroupTarget = {
  type: GroupTargetType;
  id?: number;
};

export const groupTargetSchema: Schema<GroupTarget> = s.object<GroupTarget>({
  type: groupTargetTypeSchema,
  id: s.optional(s.number()),
});
