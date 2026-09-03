import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SnapDay = number | string;

export const snapDaySchema: Schema<SnapDay> = s.of<SnapDay>(s.union([s.number(), s.string()]));
