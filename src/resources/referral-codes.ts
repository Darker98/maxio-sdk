import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  referralValidationResponseSchema,
  type ReferralValidationResponse,
} from "../models/referral-validation-response.js";
import {
  singleStringErrorResponse1Schema,
  type SingleStringErrorResponse1,
} from "../models/single-string-error-response1.js";
import type { Servers } from "../servers.js";

export class ReferralCodes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  validateReferralCode(
    request: ReferralCodes.ValidateReferralCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<ReferralValidationResponse, ReferralCodes.ValidateReferralCodeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.production("/referral_codes/validate.json"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        query: [{ name: "code", value: request.code, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: referralValidationResponseSchema },
        errorFactory: ReferralCodes.ValidateReferralCodeError,
      },
      options,
    );
  }
}

export namespace ReferralCodes {
  export type ValidateReferralCodeRequest = {
    code: string;
  };

  export class ValidateReferralCodeError extends ResponseError<
    Declared<"singleStringErrorResponse1", SingleStringErrorResponse1>
  > {
    static readonly errors: ErrorDecoders<ValidateReferralCodeError> = [
      {
        on: 404,
        kind: "singleStringErrorResponse1",
        decode: { kind: "json", schema: singleStringErrorResponse1Schema },
      },
    ];
  }
}
