import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SegmentProperty4Value = string | number | boolean;

export const segmentProperty4ValueSchema: Schema<SegmentProperty4Value> = s.of<SegmentProperty4Value>(
  s.union([s.string(), s.number(), s.boolean()]),
);
