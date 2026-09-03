import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CollectionMethod = {
  Automatic: "automatic",
  Remittance: "remittance",
  Prepaid: "prepaid",
  Invoice: "invoice",
} as const;
export type CollectionMethod = (typeof CollectionMethod)[keyof typeof CollectionMethod] | (string & {});

export const collectionMethodSchema: EnumSchema<CollectionMethod> =
  s.enumOf<CollectionMethod>(CollectionMethod);
