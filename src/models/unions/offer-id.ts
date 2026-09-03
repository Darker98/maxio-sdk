import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type OfferId = string | number;

export const offerIdSchema: Schema<OfferId> = s.of<OfferId>(s.union([s.string(), s.number()]));
