<!-- Generated file — do not edit; regenerated with the SDK. -->

# Invoices — operations

Accessor: `client.invoices` · Source: `src/resources/invoices.ts` · 19 operations · Request and error types: namespace `Invoices`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `maxio-advanced-billing`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createInvoice

- **Signature**: `createInvoice(request: Invoices.CreateInvoiceRequestParams, options?: RequestOptions): ApiPromise<InvoiceResponse, Invoices.CreateInvoiceError>`
- **Wire**: `POST /subscriptions/{subscription_id}/invoices.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `InvoiceResponse`
- **Error**: `Invoices.CreateInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorArrayMapResponse1"` [422] `ErrorArrayMapResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.CreateInvoiceRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `number` | yes |
| `body` | `body` | — | `CreateInvoiceRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateInvoiceRequest` | `createInvoiceRequestSchema` | `src/models/create-invoice-request.ts` |
| `InvoiceResponse` | `invoiceResponseSchema` | `src/models/invoice-response.ts` |
| `ErrorArrayMapResponse1` | `errorArrayMapResponse1Schema` | `src/models/error-array-map-response1.ts` |

### deleteInvoice

- **Signature**: `deleteInvoice(request: Invoices.DeleteInvoiceRequest, options?: RequestOptions): ApiPromise<undefined, Invoices.DeleteInvoiceError>`
- **Wire**: `DELETE /subscriptions/{subscription_id}/invoices/{uid}.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `Invoices.DeleteInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorListResponse1"` [404] `ErrorListResponse1` · `"errorListResponse12"` [422] `ErrorListResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.DeleteInvoiceRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `number` | yes |
| `uid` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorListResponse1` | `errorListResponse1Schema` | `src/models/error-list-response1.ts` |

### issueInvoice

- **Signature**: `issueInvoice(request: Invoices.IssueInvoiceRequestParams, options?: RequestOptions): ApiPromise<Invoice, Invoices.IssueInvoiceError>`
- **Wire**: `POST /invoices/{uid}/issue.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Invoice`
- **Error**: `Invoices.IssueInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"errorListResponse1"` [422] `ErrorListResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.IssueInvoiceRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `uid` | `path` | `string` | yes |
| `body` | `body` | `IssueInvoiceRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `IssueInvoiceRequest` | `issueInvoiceRequestSchema` | `src/models/issue-invoice-request.ts` |
| `Invoice` | `invoiceSchema` | `src/models/invoice.ts` |
| `ErrorListResponse1` | `errorListResponse1Schema` | `src/models/error-list-response1.ts` |

### listConsolidatedInvoiceSegments

- **Signature**: `listConsolidatedInvoiceSegments(request: Invoices.ListConsolidatedInvoiceSegmentsRequest, options?: RequestOptions): ApiPromise<ConsolidatedInvoice, ResponseError>`
- **Wire**: `GET /invoices/{invoice_uid}/segments.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConsolidatedInvoice`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Invoices.ListConsolidatedInvoiceSegmentsRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `invoiceUid` | `path` | `invoice_uid` | `string` | yes | — |
| `page` | `query` | — | `number` | no | `1` |
| `perPage` | `query` | `per_page` | `number` | no | `20` |
| `direction` | `query` | — | `Direction` | no | `Direction.Asc` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `ConsolidatedInvoice` | `consolidatedInvoiceSchema` | `src/models/consolidated-invoice.ts` |

### listCreditNotes

- **Signature**: `listCreditNotes(request: Invoices.ListCreditNotesRequest, options?: RequestOptions): ApiPromise<ListCreditNotesResponse, ResponseError>`
- **Wire**: `GET /credit_notes.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListCreditNotesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Invoices.ListCreditNotesRequest` (8):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `subscriptionId` | `query` | `subscription_id` | `number` | no | — |
| `page` | `query` | — | `number` | no | `1` |
| `perPage` | `query` | `per_page` | `number` | no | `20` |
| `lineItems` | `query` | `line_items` | `boolean` | no | `false` |
| `discounts` | `query` | — | `boolean` | no | `false` |
| `taxes` | `query` | — | `boolean` | no | `false` |
| `refunds` | `query` | — | `boolean` | no | `false` |
| `applications` | `query` | — | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListCreditNotesResponse` | `listCreditNotesResponseSchema` | `src/models/list-credit-notes-response.ts` |

### listInvoiceEvents

- **Signature**: `listInvoiceEvents(request: Invoices.ListInvoiceEventsRequest, options?: RequestOptions): ApiPromise<ListInvoiceEventsResponse, ResponseError>`
- **Wire**: `GET /invoices/events.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListInvoiceEventsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Invoices.ListInvoiceEventsRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `sinceDate` | `query` | `since_date` | `string` | no | — |
| `sinceId` | `query` | `since_id` | `number` | no | — |
| `page` | `query` | — | `number` | no | `1` |
| `perPage` | `query` | `per_page` | `number` | no | `100` |
| `invoiceUid` | `query` | `invoice_uid` | `string` | no | — |
| `withChangeInvoiceStatus` | `query` | `with_change_invoice_status` | `string` | no | — |
| `eventTypes` | `query` | `event_types` | `InvoiceEventType[]` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoiceEventType` | `invoiceEventTypeSchema` | `src/models/invoice-event-type.ts` |
| `ListInvoiceEventsResponse` | `listInvoiceEventsResponseSchema` | `src/models/list-invoice-events-response.ts` |

### listInvoices

- **Signature**: `listInvoices(request: Invoices.ListInvoicesRequest, options?: RequestOptions): ApiPromise<ListInvoicesResponse, ResponseError>`
- **Wire**: `GET /invoices.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListInvoicesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Invoices.ListInvoicesRequest` (23):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `startDate` | `query` | `start_date` | `string` | no | — |
| `endDate` | `query` | `end_date` | `string` | no | — |
| `status` | `query` | — | `InvoiceStatus` | no | — |
| `subscriptionId` | `query` | `subscription_id` | `number` | no | — |
| `subscriptionGroupUid` | `query` | `subscription_group_uid` | `string` | no | — |
| `consolidationLevel` | `query` | `consolidation_level` | `string` | no | — |
| `page` | `query` | — | `number` | no | `1` |
| `perPage` | `query` | `per_page` | `number` | no | `20` |
| `direction` | `query` | — | `Direction` | no | `Direction.Desc` |
| `lineItems` | `query` | `line_items` | `boolean` | no | `false` |
| `discounts` | `query` | — | `boolean` | no | `false` |
| `taxes` | `query` | — | `boolean` | no | `false` |
| `credits` | `query` | — | `boolean` | no | `false` |
| `payments` | `query` | — | `boolean` | no | `false` |
| `customFields` | `query` | `custom_fields` | `boolean` | no | `false` |
| `refunds` | `query` | — | `boolean` | no | `false` |
| `dateField` | `query` | `date_field` | `InvoiceDateField` | no | `InvoiceDateField.DueDate` |
| `startDatetime` | `query` | `start_datetime` | `string` | no | — |
| `endDatetime` | `query` | `end_datetime` | `string` | no | — |
| `customerIds` | `query` | `customer_ids` | `number[]` | no | — |
| `number` | `query` | — | `string[]` | no | — |
| `productIds` | `query` | `product_ids` | `number[]` | no | — |
| `sort` | `query` | — | `InvoiceSortField` | no | `InvoiceSortField.Number` |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoiceStatus` | `invoiceStatusSchema` | `src/models/invoice-status.ts` |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `InvoiceDateField` | `invoiceDateFieldSchema` | `src/models/invoice-date-field.ts` |
| `InvoiceSortField` | `invoiceSortFieldSchema` | `src/models/invoice-sort-field.ts` |
| `ListInvoicesResponse` | `listInvoicesResponseSchema` | `src/models/list-invoices-response.ts` |

### previewCustomerInformationChanges

- **Signature**: `previewCustomerInformationChanges(request: Invoices.PreviewCustomerInformationChangesRequest, options?: RequestOptions): ApiPromise<CustomerChangesPreviewResponse, Invoices.PreviewCustomerInformationChangesError>`
- **Wire**: `POST /invoices/{uid}/customer_information/preview.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomerChangesPreviewResponse`
- **Error**: `Invoices.PreviewCustomerInformationChangesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorListResponse1"` [404] `ErrorListResponse1` · `"errorListResponse12"` [422] `ErrorListResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.PreviewCustomerInformationChangesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `uid` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerChangesPreviewResponse` | `customerChangesPreviewResponseSchema` | `src/models/customer-changes-preview-response.ts` |
| `ErrorListResponse1` | `errorListResponse1Schema` | `src/models/error-list-response1.ts` |

### readCreditNote

- **Signature**: `readCreditNote(request: Invoices.ReadCreditNoteRequest, options?: RequestOptions): ApiPromise<CreditNote, ResponseError>`
- **Wire**: `GET /credit_notes/{uid}.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CreditNote`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Invoices.ReadCreditNoteRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `uid` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditNote` | `creditNoteSchema` | `src/models/credit-note.ts` |

### readInvoice

- **Signature**: `readInvoice(request: Invoices.ReadInvoiceRequest, options?: RequestOptions): ApiPromise<Invoice, ResponseError>`
- **Wire**: `GET /invoices/{uid}.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Invoice`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Invoices.ReadInvoiceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `uid` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Invoice` | `invoiceSchema` | `src/models/invoice.ts` |

### recordPaymentForInvoice

- **Signature**: `recordPaymentForInvoice(request: Invoices.RecordPaymentForInvoiceRequest, options?: RequestOptions): ApiPromise<Invoice, Invoices.RecordPaymentForInvoiceError>`
- **Wire**: `POST /invoices/{uid}/payments.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Invoice`
- **Error**: `Invoices.RecordPaymentForInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorListResponse1"` [422] `ErrorListResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.RecordPaymentForInvoiceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `uid` | `path` | `string` | yes |
| `body` | `body` | `CreateInvoicePaymentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateInvoicePaymentRequest` | `createInvoicePaymentRequestSchema` | `src/models/create-invoice-payment-request.ts` |
| `Invoice` | `invoiceSchema` | `src/models/invoice.ts` |
| `ErrorListResponse1` | `errorListResponse1Schema` | `src/models/error-list-response1.ts` |

### recordPaymentForMultipleInvoices

- **Signature**: `recordPaymentForMultipleInvoices(request: Invoices.RecordPaymentForMultipleInvoicesRequest, options?: RequestOptions): ApiPromise<MultiInvoicePaymentResponse, Invoices.RecordPaymentForMultipleInvoicesError>`
- **Wire**: `POST /invoices/payments.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `MultiInvoicePaymentResponse`
- **Error**: `Invoices.RecordPaymentForMultipleInvoicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorListResponse1"` [422] `ErrorListResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.RecordPaymentForMultipleInvoicesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateMultiInvoicePaymentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateMultiInvoicePaymentRequest` | `createMultiInvoicePaymentRequestSchema` | `src/models/create-multi-invoice-payment-request.ts` |
| `MultiInvoicePaymentResponse` | `multiInvoicePaymentResponseSchema` | `src/models/multi-invoice-payment-response.ts` |
| `ErrorListResponse1` | `errorListResponse1Schema` | `src/models/error-list-response1.ts` |

### recordPaymentForSubscription

- **Signature**: `recordPaymentForSubscription(request: Invoices.RecordPaymentForSubscriptionRequest, options?: RequestOptions): ApiPromise<RecordPaymentResponse, Invoices.RecordPaymentForSubscriptionError>`
- **Wire**: `POST /subscriptions/{subscription_id}/payments.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `RecordPaymentResponse`
- **Error**: `Invoices.RecordPaymentForSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorListResponse1"` [422] `ErrorListResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.RecordPaymentForSubscriptionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `number` | yes |
| `body` | `body` | — | `RecordPaymentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecordPaymentRequest` | `recordPaymentRequestSchema` | `src/models/record-payment-request.ts` |
| `RecordPaymentResponse` | `recordPaymentResponseSchema` | `src/models/record-payment-response.ts` |
| `ErrorListResponse1` | `errorListResponse1Schema` | `src/models/error-list-response1.ts` |

### refundInvoice

- **Signature**: `refundInvoice(request: Invoices.RefundInvoiceRequestParams, options?: RequestOptions): ApiPromise<Invoice, Invoices.RefundInvoiceError>`
- **Wire**: `POST /invoices/{uid}/refunds.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Invoice`
- **Error**: `Invoices.RefundInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorListResponse1"` [422] `ErrorListResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.RefundInvoiceRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `uid` | `path` | `string` | yes |
| `body` | `body` | `RefundInvoiceRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RefundInvoiceRequest` | `refundInvoiceRequestSchema` | `src/models/refund-invoice-request.ts` |
| `Invoice` | `invoiceSchema` | `src/models/invoice.ts` |
| `ErrorListResponse1` | `errorListResponse1Schema` | `src/models/error-list-response1.ts` |

### reopenInvoice

- **Signature**: `reopenInvoice(request: Invoices.ReopenInvoiceRequest, options?: RequestOptions): ApiPromise<Invoice, Invoices.ReopenInvoiceError>`
- **Wire**: `POST /invoices/{uid}/reopen.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Invoice`
- **Error**: `Invoices.ReopenInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] `unknown` · `"errorListResponse1"` [422] `ErrorListResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.ReopenInvoiceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `uid` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Invoice` | `invoiceSchema` | `src/models/invoice.ts` |
| `ErrorListResponse1` | `errorListResponse1Schema` | `src/models/error-list-response1.ts` |

### sendInvoice

- **Signature**: `sendInvoice(request: Invoices.SendInvoiceRequestParams, options?: RequestOptions): ApiPromise<undefined, Invoices.SendInvoiceError>`
- **Wire**: `POST /invoices/{uid}/deliveries.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `Invoices.SendInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorListResponse1"` [422] `ErrorListResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.SendInvoiceRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `uid` | `path` | `string` | yes |
| `body` | `body` | `SendInvoiceRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SendInvoiceRequest` | `sendInvoiceRequestSchema` | `src/models/send-invoice-request.ts` |
| `ErrorListResponse1` | `errorListResponse1Schema` | `src/models/error-list-response1.ts` |

### updateCustomerInformation

- **Signature**: `updateCustomerInformation(request: Invoices.UpdateCustomerInformationRequest, options?: RequestOptions): ApiPromise<Invoice, Invoices.UpdateCustomerInformationError>`
- **Wire**: `PUT /invoices/{uid}/customer_information.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Invoice`
- **Error**: `Invoices.UpdateCustomerInformationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorListResponse1"` [404] `ErrorListResponse1` · `"errorListResponse12"` [422] `ErrorListResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.UpdateCustomerInformationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `uid` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Invoice` | `invoiceSchema` | `src/models/invoice.ts` |
| `ErrorListResponse1` | `errorListResponse1Schema` | `src/models/error-list-response1.ts` |

### updateInvoice

- **Signature**: `updateInvoice(request: Invoices.UpdateInvoiceRequestParams, options?: RequestOptions): ApiPromise<InvoiceResponse, Invoices.UpdateInvoiceError>`
- **Wire**: `PUT /subscriptions/{subscription_id}/invoices/{uid}.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `InvoiceResponse`
- **Error**: `Invoices.UpdateInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorListResponse1"` [404] `ErrorListResponse1` · `"errorArrayMapResponse1"` [422] `ErrorArrayMapResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.UpdateInvoiceRequestParams` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `number` | yes |
| `uid` | `path` | — | `string` | yes |
| `body` | `body` | — | `UpdateInvoiceRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateInvoiceRequest` | `updateInvoiceRequestSchema` | `src/models/update-invoice-request.ts` |
| `InvoiceResponse` | `invoiceResponseSchema` | `src/models/invoice-response.ts` |
| `ErrorListResponse1` | `errorListResponse1Schema` | `src/models/error-list-response1.ts` |
| `ErrorArrayMapResponse1` | `errorArrayMapResponse1Schema` | `src/models/error-array-map-response1.ts` |

### voidInvoice

- **Signature**: `voidInvoice(request: Invoices.VoidInvoiceRequestParams, options?: RequestOptions): ApiPromise<Invoice, Invoices.VoidInvoiceError>`
- **Wire**: `POST /invoices/{uid}/void.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Invoice`
- **Error**: `Invoices.VoidInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] `unknown` · `"errorListResponse1"` [422] `ErrorListResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.VoidInvoiceRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `uid` | `path` | `string` | yes |
| `body` | `body` | `VoidInvoiceRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VoidInvoiceRequest` | `voidInvoiceRequestSchema` | `src/models/void-invoice-request.ts` |
| `Invoice` | `invoiceSchema` | `src/models/invoice.ts` |
| `ErrorListResponse1` | `errorListResponse1Schema` | `src/models/error-list-response1.ts` |

