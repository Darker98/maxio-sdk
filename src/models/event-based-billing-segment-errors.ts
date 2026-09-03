import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EventBasedBillingSegmentErrors = {
  errors?: Record<string, Record<string, unknown>>;
};

export const eventBasedBillingSegmentErrorsSchema: Schema<EventBasedBillingSegmentErrors> =
  s.object<EventBasedBillingSegmentErrors>({
    errors: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  });
