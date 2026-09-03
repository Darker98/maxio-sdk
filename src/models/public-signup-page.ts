import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PublicSignupPage = {
  id?: number;
  returnUrl?: string | null;
  returnParams?: string | null;
  url?: string;
};

export const publicSignupPageSchema: Schema<PublicSignupPage> = s.object<PublicSignupPage>({
  id: s.optional(s.number()),
  returnUrl: s.optionalNullable(s.string()),
  returnParams: s.optionalNullable(s.string()),
  url: s.optional(s.string()),
  _keysMap: {
    returnUrl: "return_url",
    returnParams: "return_params",
  },
});
