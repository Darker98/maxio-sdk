import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { renewalPreviewLineItemSchema, type RenewalPreviewLineItem } from "./renewal-preview-line-item.js";

export type RenewalPreview = {
  nextAssessmentAt?: Date;
  subtotalInCents?: number;
  totalTaxInCents?: number;
  totalDiscountInCents?: number;
  totalInCents?: number;
  existingBalanceInCents?: number;
  totalAmountDueInCents?: number;
  uncalculatedTaxes?: boolean;
  lineItems?: RenewalPreviewLineItem[];
};

export const renewalPreviewSchema: Schema<RenewalPreview> = s.object<RenewalPreview>({
  nextAssessmentAt: s.optional(s.dateTime()),
  subtotalInCents: s.optional(s.number()),
  totalTaxInCents: s.optional(s.number()),
  totalDiscountInCents: s.optional(s.number()),
  totalInCents: s.optional(s.number()),
  existingBalanceInCents: s.optional(s.number()),
  totalAmountDueInCents: s.optional(s.number()),
  uncalculatedTaxes: s.optional(s.boolean()),
  lineItems: s.optional(s.array(s.lazy(() => renewalPreviewLineItemSchema))),
  _keysMap: {
    nextAssessmentAt: "next_assessment_at",
    subtotalInCents: "subtotal_in_cents",
    totalTaxInCents: "total_tax_in_cents",
    totalDiscountInCents: "total_discount_in_cents",
    totalInCents: "total_in_cents",
    existingBalanceInCents: "existing_balance_in_cents",
    totalAmountDueInCents: "total_amount_due_in_cents",
    uncalculatedTaxes: "uncalculated_taxes",
    lineItems: "line_items",
  },
});
