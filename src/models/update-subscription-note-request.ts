import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { updateSubscriptionNoteSchema, type UpdateSubscriptionNote } from "./update-subscription-note.js";

export type UpdateSubscriptionNoteRequest = {
  note: UpdateSubscriptionNote;
};

export const updateSubscriptionNoteRequestSchema: Schema<UpdateSubscriptionNoteRequest> =
  s.object<UpdateSubscriptionNoteRequest>({
    note: updateSubscriptionNoteSchema,
  });
