import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateReasonCode = {
  code: string;
  description: string;
  position?: number;
};

export const createReasonCodeSchema: Schema<CreateReasonCode> = s.object<CreateReasonCode>({
  code: s.string(),
  description: s.string(),
  position: s.optional(s.number()),
});
