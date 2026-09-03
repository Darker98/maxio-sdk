import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SubscriptionListInclude = {
  SelfServicePageToken: "self_service_page_token",
} as const;
export type SubscriptionListInclude =
  | (typeof SubscriptionListInclude)[keyof typeof SubscriptionListInclude]
  | (string & {});

export const subscriptionListIncludeSchema: EnumSchema<SubscriptionListInclude> =
  s.enumOf<SubscriptionListInclude>(SubscriptionListInclude);
