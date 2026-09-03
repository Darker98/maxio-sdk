import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CompoundingStrategy = {
  Compound: "compound",
  FullPrice: "full-price",
} as const;
export type CompoundingStrategy =
  | (typeof CompoundingStrategy)[keyof typeof CompoundingStrategy]
  | (string & {});

export const compoundingStrategySchema: EnumSchema<CompoundingStrategy> =
  s.enumOf<CompoundingStrategy>(CompoundingStrategy);
