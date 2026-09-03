import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { createPrepaymentMethodSchema, type CreatePrepaymentMethod } from "./create-prepayment-method.js";

export type CreatePrepayment = {
  amount: number;
  details: string;
  memo: string;
  method: CreatePrepaymentMethod;
  paymentProfileId?: number;
};

export const createPrepaymentSchema: Schema<CreatePrepayment> = s.object<CreatePrepayment>({
  amount: s.number(),
  details: s.string(),
  memo: s.string(),
  method: createPrepaymentMethodSchema,
  paymentProfileId: s.optional(s.number()),
  _keysMap: {
    paymentProfileId: "payment_profile_id",
  },
});
