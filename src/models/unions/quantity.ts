import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Quantity = number | string;

export const quantitySchema: Schema<Quantity> = s.of<Quantity>(s.union([s.number(), s.string()]));
