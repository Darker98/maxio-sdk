import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chargebackStatusSchema, type ChargebackStatus } from "./chargeback-status.js";

export type ChangeChargebackStatusEventData = {
  chargebackStatus: ChargebackStatus;
};

export const changeChargebackStatusEventDataSchema: Schema<ChangeChargebackStatusEventData> =
  s.object<ChangeChargebackStatusEventData>({
    chargebackStatus: chargebackStatusSchema,
    _keysMap: {
      chargebackStatus: "chargeback_status",
    },
  });
