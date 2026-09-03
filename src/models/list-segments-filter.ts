import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListSegmentsFilter = {
  segmentProperty1Value?: string;
  segmentProperty2Value?: string;
  segmentProperty3Value?: string;
  segmentProperty4Value?: string;
};

export const listSegmentsFilterSchema: Schema<ListSegmentsFilter> = s.object<ListSegmentsFilter>({
  segmentProperty1Value: s.optional(s.string()),
  segmentProperty2Value: s.optional(s.string()),
  segmentProperty3Value: s.optional(s.string()),
  segmentProperty4Value: s.optional(s.string()),
  _keysMap: {
    segmentProperty1Value: "segment_property_1_value",
    segmentProperty2Value: "segment_property_2_value",
    segmentProperty3Value: "segment_property_3_value",
    segmentProperty4Value: "segment_property_4_value",
  },
});
