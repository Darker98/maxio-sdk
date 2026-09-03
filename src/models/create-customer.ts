import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateCustomer = {
  firstName: string;
  lastName: string;
  email: string;
  ccEmails?: string;
  organization?: string;
  reference?: string;
  address?: string;
  address2?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  phone?: string;
  locale?: string;
  vatNumber?: string;
  taxExempt?: boolean;
  surcharging?: boolean;
  taxExemptReason?: string;
  parentId?: number | null;
  salesforceId?: string | null;
  brandingThemeId?: number | null;
};

export const createCustomerSchema: Schema<CreateCustomer> = s.object<CreateCustomer>({
  firstName: s.string(),
  lastName: s.string(),
  email: s.string(),
  ccEmails: s.optional(s.string()),
  organization: s.optional(s.string()),
  reference: s.optional(s.string()),
  address: s.optional(s.string()),
  address2: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  zip: s.optional(s.string()),
  country: s.optional(s.string()),
  phone: s.optional(s.string()),
  locale: s.optional(s.string()),
  vatNumber: s.optional(s.string()),
  taxExempt: s.optional(s.boolean()),
  surcharging: s.optional(s.boolean()),
  taxExemptReason: s.optional(s.string()),
  parentId: s.optionalNullable(s.number()),
  salesforceId: s.optionalNullable(s.string()),
  brandingThemeId: s.optionalNullable(s.number()),
  _keysMap: {
    firstName: "first_name",
    lastName: "last_name",
    ccEmails: "cc_emails",
    address2: "address_2",
    vatNumber: "vat_number",
    taxExempt: "tax_exempt",
    taxExemptReason: "tax_exempt_reason",
    parentId: "parent_id",
    salesforceId: "salesforce_id",
    brandingThemeId: "branding_theme_id",
  },
});
