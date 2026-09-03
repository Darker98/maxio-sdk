import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EventBasedBillingSegmentError = {
  segments: Record<string, Record<string, unknown>>;
};

export const eventBasedBillingSegmentErrorSchema: Schema<EventBasedBillingSegmentError> =
  s.object<EventBasedBillingSegmentError>({
    segments: s.record(s.string(), s.record(s.string(), s.unknown())),
  });
