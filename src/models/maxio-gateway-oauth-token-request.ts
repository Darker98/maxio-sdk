import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MaxioGatewayOAuthTokenRequest = {
  grantType: "client_credentials";
  clientId?: string;
  clientSecret?: string;
};

export const maxioGatewayOAuthTokenRequestSchema: Schema<MaxioGatewayOAuthTokenRequest> =
  s.object<MaxioGatewayOAuthTokenRequest>({
    grantType: s.literal("client_credentials"),
    clientId: s.optional(s.string()),
    clientSecret: s.optional(s.string()),
    _keysMap: {
      grantType: "grant_type",
      clientId: "client_id",
      clientSecret: "client_secret",
    },
  });
