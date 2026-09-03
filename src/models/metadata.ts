import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Metadata = {
  id?: number | null;
  value?: string | null;
  resourceId?: number | null;
  name?: string;
  deletedAt?: Date | null;
  metafieldId?: number | null;
};

export const metadataSchema: Schema<Metadata> = s.object<Metadata>({
  id: s.optionalNullable(s.number()),
  value: s.optionalNullable(s.string()),
  resourceId: s.optionalNullable(s.number()),
  name: s.optional(s.string()),
  deletedAt: s.optionalNullable(s.dateTime()),
  metafieldId: s.optionalNullable(s.number()),
  _keysMap: {
    resourceId: "resource_id",
    deletedAt: "deleted_at",
    metafieldId: "metafield_id",
  },
});
