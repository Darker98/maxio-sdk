import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResumeOptions = {
  requireResume?: boolean;
  forgiveBalance?: boolean;
};

export const resumeOptionsSchema: Schema<ResumeOptions> = s.object<ResumeOptions>({
  requireResume: s.optional(s.boolean()),
  forgiveBalance: s.optional(s.boolean()),
  _keysMap: {
    requireResume: "require_resume",
    forgiveBalance: "forgive_balance",
  },
});
