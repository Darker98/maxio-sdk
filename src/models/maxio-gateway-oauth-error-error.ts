import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MaxioGatewayOAuthErrorError = {
  error: string;
  errorDescription?: string;
};

export const maxioGatewayOAuthErrorErrorSchema: Schema<MaxioGatewayOAuthErrorError> =
  s.object<MaxioGatewayOAuthErrorError>({
    error: s.string(),
    errorDescription: s.optional(s.string()),
    _keysMap: {
      errorDescription: "error_description",
    },
  });
