import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SnapDay1 = string | number;

export const snapDay1Schema: Schema<SnapDay1> = s.of<SnapDay1>(s.union([s.string(), s.number()]));
