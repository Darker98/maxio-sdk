import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { basicAuth, bearerAuth } from "./core/auth/schemes.js";

export type AuthSchemes = {
  readonly basicAuth: AuthScheme;
  readonly bearerAuth: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    basicAuth: basicAuth(options.basicAuth),
    bearerAuth: bearerAuth(options.bearerAuth),
  };
}
