import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateCustomer = {
  firstName?: string;
  lastName?: string;
  email?: string;
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
  /** Set a specific language on a customer record. */
  locale?: string;
  vatNumber?: string;
  taxExempt?: boolean;
  /**
   * Whether surcharging is enabled for the customer. Only applied on sites where surcharging
   * control is enabled.
   */
  surcharging?: boolean;
  taxExemptReason?: string;
  parentId?: number | null;
  /**
   * Is the customer verified to use ACH as a payment method. Available only on the Authorize.Net
   * gateway.
   */
  verified?: boolean | null;
  /** The Salesforce ID of the customer */
  salesforceId?: string | null;
  /**
   * The ID of the Branding Theme assigned to this customer as the customer's default Branding
   * Theme. This customer-level Branding Theme is used when a subscription does not have its own
   * subscription-level Branding Theme. Available only when Branding Themes are enabled for the
   * site.
   */
  brandingThemeId?: number | null;
};

export const updateCustomerSchema: Schema<UpdateCustomer> = s.object<UpdateCustomer>({
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  email: s.optional(s.string()),
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
  verified: s.optionalNullable(s.boolean()),
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
