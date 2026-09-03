import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AchAgreement = {
  agreementTerms?: string;
  authorizerFirstName?: string;
  authorizerLastName?: string;
  ipAddress?: string;
};

export const achAgreementSchema: Schema<AchAgreement> = s.object<AchAgreement>({
  agreementTerms: s.optional(s.string()),
  authorizerFirstName: s.optional(s.string()),
  authorizerLastName: s.optional(s.string()),
  ipAddress: s.optional(s.string()),
  _keysMap: {
    agreementTerms: "agreement_terms",
    authorizerFirstName: "authorizer_first_name",
    authorizerLastName: "authorizer_last_name",
    ipAddress: "ip_address",
  },
});
