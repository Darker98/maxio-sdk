import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SegmentUids = string[] | string;

export const segmentUidsSchema: Schema<SegmentUids> = s.of<SegmentUids>(
  s.union([s.array(s.string()), s.string()]),
);
