import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { resumeOptionsSchema, type ResumeOptions } from "../resume-options.js";

export type Resume = boolean | ResumeOptions;

export const resumeSchema: Schema<Resume> = s.of<Resume>(
  s.union([s.boolean(), s.lazy(() => resumeOptionsSchema)]),
);
