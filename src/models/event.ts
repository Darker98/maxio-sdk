import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventKeySchema, type EventKey } from "./event-key.js";
import { eventSpecificDataSchema, type EventSpecificData } from "./unions/event-specific-data.js";

export type Event = {
  id: number;
  key: EventKey;
  message: string;
  subscriptionId: number | null;
  customerId: number | null;
  createdAt: Date;
  eventSpecificData: EventSpecificData | null;
};

export const eventSchema: Schema<Event> = s.object<Event>({
  id: s.number(),
  key: eventKeySchema,
  message: s.string(),
  subscriptionId: s.nullable(s.number()),
  customerId: s.nullable(s.number()),
  createdAt: s.dateTime(),
  eventSpecificData: s.nullable(s.lazy(() => eventSpecificDataSchema)),
  _keysMap: {
    subscriptionId: "subscription_id",
    customerId: "customer_id",
    createdAt: "created_at",
    eventSpecificData: "event_specific_data",
  },
});
