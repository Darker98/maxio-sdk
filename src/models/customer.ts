import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Customer = {
  firstName?: string;
  lastName?: string;
  email?: string;
  ccEmails?: string | null;
  organization?: string | null;
  reference?: string | null;
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  address?: string | null;
  address2?: string | null;
  city?: string | null;
  state?: string | null;
  stateName?: string | null;
  zip?: string | null;
  country?: string | null;
  countryName?: string | null;
  phone?: string | null;
  verified?: boolean | null;
  portalCustomerCreatedAt?: Date | null;
  portalInviteLastSentAt?: Date | null;
  portalInviteLastAcceptedAt?: Date | null;
  taxExempt?: boolean;
  surcharging?: boolean;
  vatNumber?: string | null;
  parentId?: number | null;
  locale?: string | null;
  defaultSubscriptionGroupUid?: string | null;
  salesforceId?: string | null;
  taxExemptReason?: string | null;
  defaultAutoRenewalProfileId?: number | null;
  maxioid?: string | null;
  brandingThemeId?: number | null;
};

export const customerSchema: Schema<Customer> = s.object<Customer>({
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  email: s.optional(s.string()),
  ccEmails: s.optionalNullable(s.string()),
  organization: s.optionalNullable(s.string()),
  reference: s.optionalNullable(s.string()),
  id: s.optional(s.number()),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  address: s.optionalNullable(s.string()),
  address2: s.optionalNullable(s.string()),
  city: s.optionalNullable(s.string()),
  state: s.optionalNullable(s.string()),
  stateName: s.optionalNullable(s.string()),
  zip: s.optionalNullable(s.string()),
  country: s.optionalNullable(s.string()),
  countryName: s.optionalNullable(s.string()),
  phone: s.optionalNullable(s.string()),
  verified: s.optionalNullable(s.boolean()),
  portalCustomerCreatedAt: s.optionalNullable(s.dateTime()),
  portalInviteLastSentAt: s.optionalNullable(s.dateTime()),
  portalInviteLastAcceptedAt: s.optionalNullable(s.dateTime()),
  taxExempt: s.optional(s.boolean()),
  surcharging: s.optional(s.boolean()),
  vatNumber: s.optionalNullable(s.string()),
  parentId: s.optionalNullable(s.number()),
  locale: s.optionalNullable(s.string()),
  defaultSubscriptionGroupUid: s.optionalNullable(s.string()),
  salesforceId: s.optionalNullable(s.string()),
  taxExemptReason: s.optionalNullable(s.string()),
  defaultAutoRenewalProfileId: s.optionalNullable(s.number()),
  maxioid: s.optionalNullable(s.string()),
  brandingThemeId: s.optionalNullable(s.number()),
  _keysMap: {
    firstName: "first_name",
    lastName: "last_name",
    ccEmails: "cc_emails",
    createdAt: "created_at",
    updatedAt: "updated_at",
    address2: "address_2",
    stateName: "state_name",
    countryName: "country_name",
    portalCustomerCreatedAt: "portal_customer_created_at",
    portalInviteLastSentAt: "portal_invite_last_sent_at",
    portalInviteLastAcceptedAt: "portal_invite_last_accepted_at",
    taxExempt: "tax_exempt",
    vatNumber: "vat_number",
    parentId: "parent_id",
    defaultSubscriptionGroupUid: "default_subscription_group_uid",
    salesforceId: "salesforce_id",
    taxExemptReason: "tax_exempt_reason",
    defaultAutoRenewalProfileId: "default_auto_renewal_profile_id",
    brandingThemeId: "branding_theme_id",
  },
});
