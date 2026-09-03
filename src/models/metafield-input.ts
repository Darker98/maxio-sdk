import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MetafieldInput = {
  BalanceTracker: "balance_tracker",
  Text: "text",
  Radio: "radio",
  Dropdown: "dropdown",
} as const;
export type MetafieldInput = (typeof MetafieldInput)[keyof typeof MetafieldInput] | (string & {});

export const metafieldInputSchema: EnumSchema<MetafieldInput> = s.enumOf<MetafieldInput>(MetafieldInput);
