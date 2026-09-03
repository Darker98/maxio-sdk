import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type UnitPrice = number | string;

export const unitPriceSchema: Schema<UnitPrice> = s.of<UnitPrice>(s.union([s.number(), s.string()]));
