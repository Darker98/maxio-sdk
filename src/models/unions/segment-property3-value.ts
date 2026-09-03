import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SegmentProperty3Value = string | number | boolean;

export const segmentProperty3ValueSchema: Schema<SegmentProperty3Value> = s.of<SegmentProperty3Value>(
  s.union([s.string(), s.number(), s.boolean()]),
);
