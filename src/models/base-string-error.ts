import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BaseStringError = {
  base?: string[];
};

export const baseStringErrorSchema: Schema<BaseStringError> = s.object<BaseStringError>({
  base: s.optional(s.array(s.string())),
});
