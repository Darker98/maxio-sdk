import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type PreviousQuantity = number | string;

export const previousQuantitySchema: Schema<PreviousQuantity> = s.of<PreviousQuantity>(
  s.union([s.number(), s.string()]),
);
