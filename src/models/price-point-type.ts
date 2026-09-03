import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricePointType = {
  Catalog: "catalog",
  Default: "default",
  Custom: "custom",
} as const;
export type PricePointType = (typeof PricePointType)[keyof typeof PricePointType] | (string & {});

export const pricePointTypeSchema: EnumSchema<PricePointType> = s.enumOf<PricePointType>(PricePointType);
