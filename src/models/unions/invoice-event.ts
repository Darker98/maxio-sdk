import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { applyCreditNoteEventSchema, type ApplyCreditNoteEvent } from "../apply-credit-note-event.js";
import { applyDebitNoteEventSchema, type ApplyDebitNoteEvent } from "../apply-debit-note-event.js";
import { applyPaymentEventSchema, type ApplyPaymentEvent } from "../apply-payment-event.js";
import { backportInvoiceEventSchema, type BackportInvoiceEvent } from "../backport-invoice-event.js";
import {
  changeChargebackStatusEventSchema,
  type ChangeChargebackStatusEvent,
} from "../change-chargeback-status-event.js";
import {
  changeInvoiceCollectionMethodEventSchema,
  type ChangeInvoiceCollectionMethodEvent,
} from "../change-invoice-collection-method-event.js";
import {
  changeInvoiceStatusEventSchema,
  type ChangeInvoiceStatusEvent,
} from "../change-invoice-status-event.js";
import { createCreditNoteEventSchema, type CreateCreditNoteEvent } from "../create-credit-note-event.js";
import { createDebitNoteEventSchema, type CreateDebitNoteEvent } from "../create-debit-note-event.js";
import { failedPaymentEventSchema, type FailedPaymentEvent } from "../failed-payment-event.js";
import { issueInvoiceEventSchema, type IssueInvoiceEvent } from "../issue-invoice-event.js";
import { refundInvoiceEventSchema, type RefundInvoiceEvent } from "../refund-invoice-event.js";
import { removePaymentEventSchema, type RemovePaymentEvent } from "../remove-payment-event.js";
import { voidInvoiceEventSchema, type VoidInvoiceEvent } from "../void-invoice-event.js";
import { voidRemainderEventSchema, type VoidRemainderEvent } from "../void-remainder-event.js";

export type InvoiceEvent =
  | ApplyCreditNoteEvent
  | ApplyDebitNoteEvent
  | ApplyPaymentEvent
  | BackportInvoiceEvent
  | ChangeChargebackStatusEvent
  | ChangeInvoiceCollectionMethodEvent
  | ChangeInvoiceStatusEvent
  | CreateCreditNoteEvent
  | CreateDebitNoteEvent
  | FailedPaymentEvent
  | IssueInvoiceEvent
  | RefundInvoiceEvent
  | RemovePaymentEvent
  | VoidInvoiceEvent
  | VoidRemainderEvent;

export const invoiceEventSchema: Schema<InvoiceEvent> = s.of<InvoiceEvent>(
  s.union([
    s.lazy(() => applyCreditNoteEventSchema),
    s.lazy(() => applyDebitNoteEventSchema),
    s.lazy(() => applyPaymentEventSchema),
    s.lazy(() => backportInvoiceEventSchema),
    s.lazy(() => changeChargebackStatusEventSchema),
    s.lazy(() => changeInvoiceCollectionMethodEventSchema),
    s.lazy(() => changeInvoiceStatusEventSchema),
    s.lazy(() => createCreditNoteEventSchema),
    s.lazy(() => createDebitNoteEventSchema),
    s.lazy(() => failedPaymentEventSchema),
    s.lazy(() => issueInvoiceEventSchema),
    s.lazy(() => refundInvoiceEventSchema),
    s.lazy(() => removePaymentEventSchema),
    s.lazy(() => voidInvoiceEventSchema),
    s.lazy(() => voidRemainderEventSchema),
  ]),
);
