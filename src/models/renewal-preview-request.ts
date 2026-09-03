import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { renewalPreviewComponentSchema, type RenewalPreviewComponent } from "./renewal-preview-component.js";

export type RenewalPreviewRequest = {
  components?: RenewalPreviewComponent[];
};

export const renewalPreviewRequestSchema: Schema<RenewalPreviewRequest> = s.object<RenewalPreviewRequest>({
  components: s.optional(s.array(s.lazy(() => renewalPreviewComponentSchema))),
});
