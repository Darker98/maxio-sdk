import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { componentId2Schema, type ComponentId2 } from "./unions/component-id2.js";
import { pricePointId3Schema, type PricePointId3 } from "./unions/price-point-id3.js";

export type RenewalPreviewComponent = {
  componentId?: ComponentId2;
  quantity?: number;
  pricePointId?: PricePointId3;
};

export const renewalPreviewComponentSchema: Schema<RenewalPreviewComponent> =
  s.object<RenewalPreviewComponent>({
    componentId: s.optional(s.lazy(() => componentId2Schema)),
    quantity: s.optional(s.number()),
    pricePointId: s.optional(s.lazy(() => pricePointId3Schema)),
    _keysMap: {
      componentId: "component_id",
      pricePointId: "price_point_id",
    },
  });
