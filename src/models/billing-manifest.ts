import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { billingManifestItemSchema, type BillingManifestItem } from "./billing-manifest-item.js";

export type BillingManifest = {
  lineItems?: BillingManifestItem[];
  totalInCents?: number;
  totalDiscountInCents?: number;
  totalTaxInCents?: number;
  subtotalInCents?: number;
  startDate?: Date | null;
  endDate?: Date | null;
  periodType?: string | null;
  existingBalanceInCents?: number;
};

export const billingManifestSchema: Schema<BillingManifest> = s.object<BillingManifest>({
  lineItems: s.optional(s.array(s.lazy(() => billingManifestItemSchema))),
  totalInCents: s.optional(s.number()),
  totalDiscountInCents: s.optional(s.number()),
  totalTaxInCents: s.optional(s.number()),
  subtotalInCents: s.optional(s.number()),
  startDate: s.optionalNullable(s.dateTime()),
  endDate: s.optionalNullable(s.dateTime()),
  periodType: s.optionalNullable(s.string()),
  existingBalanceInCents: s.optional(s.number()),
  _keysMap: {
    lineItems: "line_items",
    totalInCents: "total_in_cents",
    totalDiscountInCents: "total_discount_in_cents",
    totalTaxInCents: "total_tax_in_cents",
    subtotalInCents: "subtotal_in_cents",
    startDate: "start_date",
    endDate: "end_date",
    periodType: "period_type",
    existingBalanceInCents: "existing_balance_in_cents",
  },
});
