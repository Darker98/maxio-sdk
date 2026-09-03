import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreatePrepaymentMethod = {
  Check: "check",
  Cash: "cash",
  MoneyOrder: "money_order",
  Ach: "ach",
  PaypalAccount: "paypal_account",
  CreditCard: "credit_card",
  CreditCardOnFile: "credit_card_on_file",
  Other: "other",
} as const;
export type CreatePrepaymentMethod =
  | (typeof CreatePrepaymentMethod)[keyof typeof CreatePrepaymentMethod]
  | (string & {});

export const createPrepaymentMethodSchema: EnumSchema<CreatePrepaymentMethod> =
  s.enumOf<CreatePrepaymentMethod>(CreatePrepaymentMethod);
