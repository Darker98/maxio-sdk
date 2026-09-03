import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ExpirationYear2 = number | string;

export const expirationYear2Schema: Schema<ExpirationYear2> = s.of<ExpirationYear2>(
  s.union([s.number(), s.string()]),
);
