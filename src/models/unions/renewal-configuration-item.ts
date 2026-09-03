import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  scheduledRenewalItemRequestBodyComponentSchema,
  type ScheduledRenewalItemRequestBodyComponent,
} from "../scheduled-renewal-item-request-body-component.js";
import {
  scheduledRenewalItemRequestBodyProductSchema,
  type ScheduledRenewalItemRequestBodyProduct,
} from "../scheduled-renewal-item-request-body-product.js";

export type RenewalConfigurationItem =
  | ScheduledRenewalItemRequestBodyComponent
  | ScheduledRenewalItemRequestBodyProduct;

export const renewalConfigurationItemSchema: Schema<RenewalConfigurationItem> =
  s.of<RenewalConfigurationItem>(
    s.union([
      s.lazy(() => scheduledRenewalItemRequestBodyComponentSchema),
      s.lazy(() => scheduledRenewalItemRequestBodyProductSchema),
    ]),
  );
