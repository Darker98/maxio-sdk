import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateReasonCode = {
  code?: string;
  description?: string;
  position?: number;
};

export const updateReasonCodeSchema: Schema<UpdateReasonCode> = s.object<UpdateReasonCode>({
  code: s.optional(s.string()),
  description: s.optional(s.string()),
  position: s.optional(s.number()),
});
