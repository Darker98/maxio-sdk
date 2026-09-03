import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChangeInvoiceCollectionMethodEventData = {
  fromCollectionMethod: string;
  toCollectionMethod: string;
};

export const changeInvoiceCollectionMethodEventDataSchema: Schema<ChangeInvoiceCollectionMethodEventData> =
  s.object<ChangeInvoiceCollectionMethodEventData>({
    fromCollectionMethod: s.string(),
    toCollectionMethod: s.string(),
    _keysMap: {
      fromCollectionMethod: "from_collection_method",
      toCollectionMethod: "to_collection_method",
    },
  });
