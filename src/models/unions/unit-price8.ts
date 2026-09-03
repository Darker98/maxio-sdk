import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type UnitPrice8 = string | number;

export const unitPrice8Schema: Schema<UnitPrice8> = s.of<UnitPrice8>(s.union([s.string(), s.number()]));
