import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type UnitPrice5 = string | number;

export const unitPrice5Schema: Schema<UnitPrice5> = s.of<UnitPrice5>(s.union([s.string(), s.number()]));
