import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type UnitPrice1 = string | number;

export const unitPrice1Schema: Schema<UnitPrice1> = s.of<UnitPrice1>(s.union([s.string(), s.number()]));
