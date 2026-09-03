import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EventBasedBillingSegmentErrors1 = {
  errors?: Record<string, Record<string, unknown>>;
};

export const eventBasedBillingSegmentErrors1Schema: Schema<EventBasedBillingSegmentErrors1> =
  s.object<EventBasedBillingSegmentErrors1>({
    errors: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  });
