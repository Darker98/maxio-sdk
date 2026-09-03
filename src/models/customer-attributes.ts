import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomerAttributes = {
  firstName?: string;
  lastName?: string;
  email?: string;
  ccEmails?: string;
  organization?: string;
  reference?: string;
  address?: string;
  address2?: string | null;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  phone?: string;
  verified?: boolean;
  taxExempt?: boolean;
  surcharging?: boolean;
  vatNumber?: string;
  metafields?: Record<string, string>;
  parentId?: number | null;
  salesforceId?: string | null;
  defaultAutoRenewalProfileId?: number | null;
};

export const customerAttributesSchema: Schema<CustomerAttributes> = s.object<CustomerAttributes>({
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  email: s.optional(s.string()),
  ccEmails: s.optional(s.string()),
  organization: s.optional(s.string()),
  reference: s.optional(s.string()),
  address: s.optional(s.string()),
  address2: s.optionalNullable(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  zip: s.optional(s.string()),
  country: s.optional(s.string()),
  phone: s.optional(s.string()),
  verified: s.optional(s.boolean()),
  taxExempt: s.optional(s.boolean()),
  surcharging: s.optional(s.boolean()),
  vatNumber: s.optional(s.string()),
  metafields: s.optional(s.record(s.string(), s.string())),
  parentId: s.optionalNullable(s.number()),
  salesforceId: s.optionalNullable(s.string()),
  defaultAutoRenewalProfileId: s.optionalNullable(s.number()),
  _keysMap: {
    firstName: "first_name",
    lastName: "last_name",
    ccEmails: "cc_emails",
    address2: "address_2",
    taxExempt: "tax_exempt",
    vatNumber: "vat_number",
    parentId: "parent_id",
    salesforceId: "salesforce_id",
    defaultAutoRenewalProfileId: "default_auto_renewal_profile_id",
  },
});
