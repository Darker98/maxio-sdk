import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Webhook = {
  event?: string;
  id?: number;
  createdAt?: Date;
  lastError?: string;
  lastErrorAt?: Date;
  acceptedAt?: Date | null;
  lastSentAt?: Date;
  lastSentUrl?: string;
  successful?: boolean;
  body?: string;
  signature?: string;
  signatureHmacSha256?: string;
};

export const webhookSchema: Schema<Webhook> = s.object<Webhook>({
  event: s.optional(s.string()),
  id: s.optional(s.number()),
  createdAt: s.optional(s.dateTime()),
  lastError: s.optional(s.string()),
  lastErrorAt: s.optional(s.dateTime()),
  acceptedAt: s.optionalNullable(s.dateTime()),
  lastSentAt: s.optional(s.dateTime()),
  lastSentUrl: s.optional(s.string()),
  successful: s.optional(s.boolean()),
  body: s.optional(s.string()),
  signature: s.optional(s.string()),
  signatureHmacSha256: s.optional(s.string()),
  _keysMap: {
    createdAt: "created_at",
    lastError: "last_error",
    lastErrorAt: "last_error_at",
    acceptedAt: "accepted_at",
    lastSentAt: "last_sent_at",
    lastSentUrl: "last_sent_url",
    signatureHmacSha256: "signature_hmac_sha_256",
  },
});
