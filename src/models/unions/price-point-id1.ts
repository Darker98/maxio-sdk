import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type PricePointId1 = string | number;

export const pricePointId1Schema: Schema<PricePointId1> = s.of<PricePointId1>(
  s.union([s.string(), s.number()]),
);
