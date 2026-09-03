import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Amount = string | number;

export const amountSchema: Schema<Amount> = s.of<Amount>(s.union([s.string(), s.number()]));
