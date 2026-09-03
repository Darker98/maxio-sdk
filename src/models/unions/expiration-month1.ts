import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ExpirationMonth1 = number | string;

export const expirationMonth1Schema: Schema<ExpirationMonth1> = s.of<ExpirationMonth1>(
  s.union([s.number(), s.string()]),
);
