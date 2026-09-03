import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MaxioGatewayOAuthError = {
  error: string;
  errorDescription?: string;
};

export const maxioGatewayOAuthErrorSchema: Schema<MaxioGatewayOAuthError> = s.object<MaxioGatewayOAuthError>({
  error: s.string(),
  errorDescription: s.optional(s.string()),
  _keysMap: {
    errorDescription: "error_description",
  },
});
