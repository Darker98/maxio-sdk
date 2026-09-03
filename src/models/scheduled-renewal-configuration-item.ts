import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ScheduledRenewalConfigurationItem = {
  id?: number;
  subscriptionId?: number;
  subscriptionRenewalConfigurationId?: number;
  itemId?: number;
  itemType?: string;
  itemSubclass?: string;
  pricePointId?: number;
  pricePointType?: string;
  quantity?: number;
  decimalQuantity?: string;
  createdAt?: Date;
};

export const scheduledRenewalConfigurationItemSchema: Schema<ScheduledRenewalConfigurationItem> =
  s.object<ScheduledRenewalConfigurationItem>({
    id: s.optional(s.number()),
    subscriptionId: s.optional(s.number()),
    subscriptionRenewalConfigurationId: s.optional(s.number()),
    itemId: s.optional(s.number()),
    itemType: s.optional(s.string()),
    itemSubclass: s.optional(s.string()),
    pricePointId: s.optional(s.number()),
    pricePointType: s.optional(s.string()),
    quantity: s.optional(s.number()),
    decimalQuantity: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    _keysMap: {
      subscriptionId: "subscription_id",
      subscriptionRenewalConfigurationId: "subscription_renewal_configuration_id",
      itemId: "item_id",
      itemType: "item_type",
      itemSubclass: "item_subclass",
      pricePointId: "price_point_id",
      pricePointType: "price_point_type",
      decimalQuantity: "decimal_quantity",
      createdAt: "created_at",
    },
  });
