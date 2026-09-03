import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { componentId3Schema, type ComponentId3 } from "./unions/component-id3.js";
import { pricePointId4Schema, type PricePointId4 } from "./unions/price-point-id4.js";
import { productIdSchema, type ProductId } from "./unions/product-id.js";
import { productPricePointIdSchema, type ProductPricePointId } from "./unions/product-price-point-id.js";
import { quantity3Schema, type Quantity3 } from "./unions/quantity3.js";
import { unitPrice7Schema, type UnitPrice7 } from "./unions/unit-price7.js";

export type CreateInvoiceItem = {
  title?: string;
  quantity?: Quantity3;
  unitPrice?: UnitPrice7;
  taxable?: boolean;
  taxCode?: string;
  periodRangeStart?: string;
  periodRangeEnd?: string;
  productId?: ProductId;
  componentId?: ComponentId3;
  pricePointId?: PricePointId4;
  productPricePointId?: ProductPricePointId;
  description?: string;
};

export const createInvoiceItemSchema: Schema<CreateInvoiceItem> = s.object<CreateInvoiceItem>({
  title: s.optional(s.string()),
  quantity: s.optional(s.lazy(() => quantity3Schema)),
  unitPrice: s.optional(s.lazy(() => unitPrice7Schema)),
  taxable: s.optional(s.boolean()),
  taxCode: s.optional(s.string()),
  periodRangeStart: s.optional(s.string()),
  periodRangeEnd: s.optional(s.string()),
  productId: s.optional(s.lazy(() => productIdSchema)),
  componentId: s.optional(s.lazy(() => componentId3Schema)),
  pricePointId: s.optional(s.lazy(() => pricePointId4Schema)),
  productPricePointId: s.optional(s.lazy(() => productPricePointIdSchema)),
  description: s.optional(s.string()),
  _keysMap: {
    unitPrice: "unit_price",
    taxCode: "tax_code",
    periodRangeStart: "period_range_start",
    periodRangeEnd: "period_range_end",
    productId: "product_id",
    componentId: "component_id",
    pricePointId: "price_point_id",
    productPricePointId: "product_price_point_id",
  },
});
