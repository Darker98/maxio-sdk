import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reactivationBillingSchema, type ReactivationBilling } from "./reactivation-billing.js";
import { resumeSchema, type Resume } from "./unions/resume.js";

export type ReactivateSubscriptionRequest = {
  calendarBilling?: ReactivationBilling;
  includeTrial?: boolean;
  preserveBalance?: boolean;
  couponCode?: string;
  useCreditsAndPrepayments?: boolean;
  resume?: Resume;
};

export const reactivateSubscriptionRequestSchema: Schema<ReactivateSubscriptionRequest> =
  s.object<ReactivateSubscriptionRequest>({
    calendarBilling: s.optional(s.lazy(() => reactivationBillingSchema)),
    includeTrial: s.optional(s.boolean()),
    preserveBalance: s.optional(s.boolean()),
    couponCode: s.optional(s.string()),
    useCreditsAndPrepayments: s.optional(s.boolean()),
    resume: s.optional(s.lazy(() => resumeSchema)),
    _keysMap: {
      calendarBilling: "calendar_billing",
      includeTrial: "include_trial",
      preserveBalance: "preserve_balance",
      couponCode: "coupon_code",
      useCreditsAndPrepayments: "use_credits_and_prepayments",
    },
  });
