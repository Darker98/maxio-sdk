import type { FetchLike } from "./core/api-request.js";
import type { BasicAuthCredentials, TokenProvider } from "./core/auth/credentials.js";
import { ServerEnvironment, type ServerOptions } from "./servers.js";

export type ClientOptions = {
  readonly serverEnvironment: ServerEnvironment;
  readonly serverOptions: ServerOptions;
  readonly timeout: number;
  readonly fetch?: FetchLike | undefined;
  readonly basicAuth?: BasicAuthCredentials | undefined;
  readonly bearerAuth?: TokenProvider | undefined;
};

export const DEFAULT_CLIENT_OPTIONS: ClientOptions = {
  serverEnvironment: ServerEnvironment.Us,
  serverOptions: {},
  timeout: 60_000,
};
