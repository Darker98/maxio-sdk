import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type AllocatedQuantity2 = number | string;

export const allocatedQuantity2Schema: Schema<AllocatedQuantity2> = s.of<AllocatedQuantity2>(
  s.union([s.number(), s.string()]),
);
