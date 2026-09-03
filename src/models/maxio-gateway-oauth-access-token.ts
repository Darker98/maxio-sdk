import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MaxioGatewayOAuthAccessToken = {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
  createdAt: number;
};

export const maxioGatewayOAuthAccessTokenSchema: Schema<MaxioGatewayOAuthAccessToken> =
  s.object<MaxioGatewayOAuthAccessToken>({
    accessToken: s.string(),
    tokenType: s.string(),
    expiresIn: s.number(),
    createdAt: s.number(),
    _keysMap: {
      accessToken: "access_token",
      tokenType: "token_type",
      expiresIn: "expires_in",
      createdAt: "created_at",
    },
  });
