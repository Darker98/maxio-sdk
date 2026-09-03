import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ExpirationMonth2 = number | string;

export const expirationMonth2Schema: Schema<ExpirationMonth2> = s.of<ExpirationMonth2>(
  s.union([s.number(), s.string()]),
);
