import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type PricePointId3 = string | number;

export const pricePointId3Schema: Schema<PricePointId3> = s.of<PricePointId3>(
  s.union([s.string(), s.number()]),
);
