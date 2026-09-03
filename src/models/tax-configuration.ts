import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { taxConfigurationKindSchema, type TaxConfigurationKind } from "./tax-configuration-kind.js";
import { taxDestinationAddressSchema, type TaxDestinationAddress } from "./tax-destination-address.js";

export type TaxConfiguration = {
  kind?: TaxConfigurationKind;
  destinationAddress?: TaxDestinationAddress;
  fullyConfigured?: boolean;
};

export const taxConfigurationSchema: Schema<TaxConfiguration> = s.object<TaxConfiguration>({
  kind: s.optional(s.lazy(() => taxConfigurationKindSchema)),
  destinationAddress: s.optional(s.lazy(() => taxDestinationAddressSchema)),
  fullyConfigured: s.optional(s.boolean()),
  _keysMap: {
    destinationAddress: "destination_address",
    fullyConfigured: "fully_configured",
  },
});
