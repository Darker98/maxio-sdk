import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditTypeSchema, type CreditType } from "./credit-type.js";
import { itemCategorySchema, type ItemCategory } from "./item-category.js";

export type UpdateComponent = {
  handle?: string;
  name?: string;
  description?: string | null;
  accountingCode?: string | null;
  taxable?: boolean;
  taxCode?: string | null;
  itemCategory?: ItemCategory | null;
  displayOnHostedPage?: boolean;
  upgradeCharge?: CreditType | null;
};

export const updateComponentSchema: Schema<UpdateComponent> = s.object<UpdateComponent>({
  handle: s.optional(s.string()),
  name: s.optional(s.string()),
  description: s.optionalNullable(s.string()),
  accountingCode: s.optionalNullable(s.string()),
  taxable: s.optional(s.boolean()),
  taxCode: s.optionalNullable(s.string()),
  itemCategory: s.optionalNullable(s.lazy(() => itemCategorySchema)),
  displayOnHostedPage: s.optional(s.boolean()),
  upgradeCharge: s.optionalNullable(s.lazy(() => creditTypeSchema)),
  _keysMap: {
    accountingCode: "accounting_code",
    taxCode: "tax_code",
    itemCategory: "item_category",
    displayOnHostedPage: "display_on_hosted_page",
    upgradeCharge: "upgrade_charge",
  },
});
