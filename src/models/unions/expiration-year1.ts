import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ExpirationYear1 = number | string;

export const expirationYear1Schema: Schema<ExpirationYear1> = s.of<ExpirationYear1>(
  s.union([s.number(), s.string()]),
);
