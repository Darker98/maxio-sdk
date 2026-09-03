import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BillingManifestLineItemKind = {
  Baseline: "baseline",
  Initial: "initial",
  Trial: "trial",
  Coupon: "coupon",
  Component: "component",
  Tax: "tax",
} as const;
export type BillingManifestLineItemKind =
  | (typeof BillingManifestLineItemKind)[keyof typeof BillingManifestLineItemKind]
  | (string & {});

export const billingManifestLineItemKindSchema: EnumSchema<BillingManifestLineItemKind> =
  s.enumOf<BillingManifestLineItemKind>(BillingManifestLineItemKind);
