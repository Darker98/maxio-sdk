import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SegmentProperty2Value = string | number | boolean;

export const segmentProperty2ValueSchema: Schema<SegmentProperty2Value> = s.of<SegmentProperty2Value>(
  s.union([s.string(), s.number(), s.boolean()]),
);
