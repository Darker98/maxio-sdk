import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AutoInvite = {
  _0: 0,
  _1: 1,
} as const;
export type AutoInvite = (typeof AutoInvite)[keyof typeof AutoInvite] | (number & {});

export const autoInviteSchema: EnumSchema<AutoInvite> = s.enumOf<AutoInvite>(AutoInvite);
