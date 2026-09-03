import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type UnitPrice7 = number | string;

export const unitPrice7Schema: Schema<UnitPrice7> = s.of<UnitPrice7>(s.union([s.number(), s.string()]));
