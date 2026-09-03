import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ItemCategory = {
  BusinessSoftware: "Business Software",
  ConsumerSoftware: "Consumer Software",
  DigitalServices: "Digital Services",
  PhysicalGoods: "Physical Goods",
  Other: "Other",
} as const;
export type ItemCategory = (typeof ItemCategory)[keyof typeof ItemCategory] | (string & {});

export const itemCategorySchema: EnumSchema<ItemCategory> = s.enumOf<ItemCategory>(ItemCategory);
