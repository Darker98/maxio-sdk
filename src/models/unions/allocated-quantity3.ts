import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type AllocatedQuantity3 = number | string;

export const allocatedQuantity3Schema: Schema<AllocatedQuantity3> = s.of<AllocatedQuantity3>(
  s.union([s.number(), s.string()]),
);
