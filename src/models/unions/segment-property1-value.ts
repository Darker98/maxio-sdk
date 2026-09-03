import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SegmentProperty1Value = string | number | boolean;

export const segmentProperty1ValueSchema: Schema<SegmentProperty1Value> = s.of<SegmentProperty1Value>(
  s.union([s.string(), s.number(), s.boolean()]),
);
