import type { UrlTemplate } from "./core/api-request.js";
import { SdkError } from "./core/errors.js";

export const ServerEnvironment = {
  Us: "us",
  Eu: "eu",
  MaxioApiGateway: "maxioApiGateway",
} as const;
export type ServerEnvironment = (typeof ServerEnvironment)[keyof typeof ServerEnvironment];

export type ProductionServerOptions = {
  us?: { baseUrl?: string; site?: string };
  eu?: { baseUrl?: string; site?: string };
  maxioApiGateway?: { baseUrl?: string; connector?: string };
};

export type EbbServerOptions = {
  us?: { baseUrl?: string; site?: string };
  eu?: { baseUrl?: string; site?: string };
  maxioApiGateway?: { baseUrl?: string; site?: string };
};

export type OauthServerOptions = {
  us?: { baseUrl?: string; connector?: string };
  eu?: { baseUrl?: string; connector?: string };
  maxioApiGateway?: { baseUrl?: string; connector?: string };
};

export type ServerOptions = {
  production?: ProductionServerOptions;
  ebb?: EbbServerOptions;
  oauth?: OauthServerOptions;
};

export type Servers = {
  production: (subPath: string) => UrlTemplate;
  ebb: (subPath: string) => UrlTemplate;
  oauth: (subPath: string) => UrlTemplate;
};

export const DEFAULT_SERVER_OPTIONS = {
  production: {
    us: { baseUrl: "https://{site}.chargify.com", site: "subdomain" },
    eu: { baseUrl: "https://{site}.ebilling.maxio.com", site: "subdomain" },
    maxioApiGateway: { baseUrl: "https://{connector}.api.maxio.com/api/v1/billing", connector: "connector" },
  },
  ebb: {
    us: { baseUrl: "https://events.chargify.com/{site}", site: "subdomain" },
    eu: { baseUrl: "https://events.chargify.com/{site}", site: "subdomain" },
    maxioApiGateway: { baseUrl: "https://events.chargify.com/{site}", site: "subdomain" },
  },
  oauth: {
    us: { baseUrl: "https://{connector}.api.maxio.com", connector: "connector" },
    eu: { baseUrl: "https://{connector}.api.maxio.com", connector: "connector" },
    maxioApiGateway: { baseUrl: "https://{connector}.api.maxio.com", connector: "connector" },
  },
} as const satisfies ServerOptions;

export function buildServers(environment: ServerEnvironment, options: ServerOptions): Servers {
  return {
    production: (s) => productionServer(environment, s, options.production),
    ebb: (s) => ebbServer(environment, s, options.ebb),
    oauth: (s) => oauthServer(environment, s, options.oauth),
  };
}

function productionServer(
  environment: ServerEnvironment,
  subPath: string,
  options?: ProductionServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Us: {
      const us = { ...DEFAULT_SERVER_OPTIONS.production.us, ...options?.us };
      return {
        baseUrl: us.baseUrl,
        subPath,
        variables: { site: us.site },
      };
    }
    case ServerEnvironment.Eu: {
      const eu = { ...DEFAULT_SERVER_OPTIONS.production.eu, ...options?.eu };
      return {
        baseUrl: eu.baseUrl,
        subPath,
        variables: { site: eu.site },
      };
    }
    case ServerEnvironment.MaxioApiGateway: {
      const maxioApiGateway = {
        ...DEFAULT_SERVER_OPTIONS.production.maxioApiGateway,
        ...options?.maxioApiGateway,
      };
      return {
        baseUrl: maxioApiGateway.baseUrl,
        subPath,
        variables: { connector: maxioApiGateway.connector },
      };
    }
    default:
      unknownEnvironment(environment);
  }
}

function ebbServer(environment: ServerEnvironment, subPath: string, options?: EbbServerOptions): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Us: {
      const us = { ...DEFAULT_SERVER_OPTIONS.ebb.us, ...options?.us };
      return {
        baseUrl: us.baseUrl,
        subPath,
        variables: { site: us.site },
      };
    }
    case ServerEnvironment.Eu: {
      const eu = { ...DEFAULT_SERVER_OPTIONS.ebb.eu, ...options?.eu };
      return {
        baseUrl: eu.baseUrl,
        subPath,
        variables: { site: eu.site },
      };
    }
    case ServerEnvironment.MaxioApiGateway: {
      const maxioApiGateway = { ...DEFAULT_SERVER_OPTIONS.ebb.maxioApiGateway, ...options?.maxioApiGateway };
      return {
        baseUrl: maxioApiGateway.baseUrl,
        subPath,
        variables: { site: maxioApiGateway.site },
      };
    }
    default:
      unknownEnvironment(environment);
  }
}

function oauthServer(
  environment: ServerEnvironment,
  subPath: string,
  options?: OauthServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Us: {
      const us = { ...DEFAULT_SERVER_OPTIONS.oauth.us, ...options?.us };
      return {
        baseUrl: us.baseUrl,
        subPath,
        variables: { connector: us.connector },
      };
    }
    case ServerEnvironment.Eu: {
      const eu = { ...DEFAULT_SERVER_OPTIONS.oauth.eu, ...options?.eu };
      return {
        baseUrl: eu.baseUrl,
        subPath,
        variables: { connector: eu.connector },
      };
    }
    case ServerEnvironment.MaxioApiGateway: {
      const maxioApiGateway = {
        ...DEFAULT_SERVER_OPTIONS.oauth.maxioApiGateway,
        ...options?.maxioApiGateway,
      };
      return {
        baseUrl: maxioApiGateway.baseUrl,
        subPath,
        variables: { connector: maxioApiGateway.connector },
      };
    }
    default:
      unknownEnvironment(environment);
  }
}

function unknownEnvironment(environment: never): never {
  throw new SdkError({ message: `Unknown server environment: ${String(environment)}` });
}
