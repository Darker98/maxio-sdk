import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { unitPrice8Schema, type UnitPrice8 } from "./unions/unit-price8.js";

export type CreateOrUpdateSegmentPrice = {
  startingQuantity?: number;
  endingQuantity?: number;
  unitPrice: UnitPrice8;
};

export const createOrUpdateSegmentPriceSchema: Schema<CreateOrUpdateSegmentPrice> =
  s.object<CreateOrUpdateSegmentPrice>({
    startingQuantity: s.optional(s.number()),
    endingQuantity: s.optional(s.number()),
    unitPrice: unitPrice8Schema,
    _keysMap: {
      startingQuantity: "starting_quantity",
      endingQuantity: "ending_quantity",
      unitPrice: "unit_price",
    },
  });
