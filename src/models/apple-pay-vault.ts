import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ApplePayVault = {
  BraintreeBlue: "braintree_blue",
} as const;
export type ApplePayVault = (typeof ApplePayVault)[keyof typeof ApplePayVault] | (string & {});

export const applePayVaultSchema: EnumSchema<ApplePayVault> = s.enumOf<ApplePayVault>(ApplePayVault);
