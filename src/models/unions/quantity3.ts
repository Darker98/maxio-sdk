import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Quantity3 = number | string;

export const quantity3Schema: Schema<Quantity3> = s.of<Quantity3>(s.union([s.number(), s.string()]));
