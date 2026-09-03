import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { allVaultsSchema, type AllVaults } from "./all-vaults.js";
import { cardTypeSchema, type CardType } from "./card-type.js";

export type UpdatePaymentProfile = {
  firstName?: string;
  lastName?: string;
  fullNumber?: string;
  cardType?: CardType;
  expirationMonth?: string;
  expirationYear?: string;
  currentVault?: AllVaults;
  billingAddress?: string;
  billingCity?: string;
  billingState?: string;
  billingZip?: string;
  billingCountry?: string;
  billingAddress2?: string | null;
};

export const updatePaymentProfileSchema: Schema<UpdatePaymentProfile> = s.object<UpdatePaymentProfile>({
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  fullNumber: s.optional(s.string()),
  cardType: s.optional(s.lazy(() => cardTypeSchema)),
  expirationMonth: s.optional(s.string()),
  expirationYear: s.optional(s.string()),
  currentVault: s.optional(s.lazy(() => allVaultsSchema)),
  billingAddress: s.optional(s.string()),
  billingCity: s.optional(s.string()),
  billingState: s.optional(s.string()),
  billingZip: s.optional(s.string()),
  billingCountry: s.optional(s.string()),
  billingAddress2: s.optionalNullable(s.string()),
  _keysMap: {
    firstName: "first_name",
    lastName: "last_name",
    fullNumber: "full_number",
    cardType: "card_type",
    expirationMonth: "expiration_month",
    expirationYear: "expiration_year",
    currentVault: "current_vault",
    billingAddress: "billing_address",
    billingCity: "billing_city",
    billingState: "billing_state",
    billingZip: "billing_zip",
    billingCountry: "billing_country",
    billingAddress2: "billing_address_2",
  },
});
