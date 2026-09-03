import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type UnitPrice3 = string | number;

export const unitPrice3Schema: Schema<UnitPrice3> = s.of<UnitPrice3>(s.union([s.string(), s.number()]));
