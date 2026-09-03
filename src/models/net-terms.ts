import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NetTerms = {
  defaultNetTerms?: number;
  automaticNetTerms?: number;
  remittanceNetTerms?: number;
  netTermsOnRemittanceSignupsEnabled?: boolean;
  customNetTermsEnabled?: boolean;
};

export const netTermsSchema: Schema<NetTerms> = s.object<NetTerms>({
  defaultNetTerms: s.optional(s.number()),
  automaticNetTerms: s.optional(s.number()),
  remittanceNetTerms: s.optional(s.number()),
  netTermsOnRemittanceSignupsEnabled: s.optional(s.boolean()),
  customNetTermsEnabled: s.optional(s.boolean()),
  _keysMap: {
    defaultNetTerms: "default_net_terms",
    automaticNetTerms: "automatic_net_terms",
    remittanceNetTerms: "remittance_net_terms",
    netTermsOnRemittanceSignupsEnabled: "net_terms_on_remittance_signups_enabled",
    customNetTermsEnabled: "custom_net_terms_enabled",
  },
});
