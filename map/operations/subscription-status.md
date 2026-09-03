<!-- Generated file — do not edit; regenerated with the SDK. -->

# SubscriptionStatus — operations

Accessor: `client.subscriptionStatus` · Source: `src/resources/subscription-status.ts` · 10 operations · Request and error types: namespace `SubscriptionStatus`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `maxio-advanced-billing`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### cancelDelayedCancellation

- **Signature**: `cancelDelayedCancellation(request: SubscriptionStatus.CancelDelayedCancellationRequest, options?: RequestOptions): ApiPromise<DelayedCancellationResponse, SubscriptionStatus.CancelDelayedCancellationError>`
- **Wire**: `DELETE /subscriptions/{subscription_id}/delayed_cancel.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DelayedCancellationResponse`
- **Error**: `SubscriptionStatus.CancelDelayedCancellationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubscriptionStatus.CancelDelayedCancellationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DelayedCancellationResponse` | `delayedCancellationResponseSchema` | `src/models/delayed-cancellation-response.ts` |

### cancelDunning

- **Signature**: `cancelDunning(request: SubscriptionStatus.CancelDunningRequest, options?: RequestOptions): ApiPromise<SubscriptionResponse, SubscriptionStatus.CancelDunningError>`
- **Wire**: `POST /subscriptions/{subscription_id}/cancel_dunning.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubscriptionResponse`
- **Error**: `SubscriptionStatus.CancelDunningError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorListResponse1"` [422] `ErrorListResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubscriptionStatus.CancelDunningRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionResponse` | `subscriptionResponseSchema` | `src/models/subscription-response.ts` |
| `ErrorListResponse1` | `errorListResponse1Schema` | `src/models/error-list-response1.ts` |

### cancelSubscription

- **Signature**: `cancelSubscription(request: SubscriptionStatus.CancelSubscriptionRequest, options?: RequestOptions): ApiPromise<SubscriptionResponse, SubscriptionStatus.CancelSubscriptionError>`
- **Wire**: `DELETE /subscriptions/{subscription_id}.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `SubscriptionResponse`
- **Error**: `SubscriptionStatus.CancelSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"cancelSubscriptionErrorResponse"` [422] `CancelSubscriptionErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubscriptionStatus.CancelSubscriptionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `number` | yes |
| `body` | `body` | — | `CancellationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancellationRequest` | `cancellationRequestSchema` | `src/models/cancellation-request.ts` |
| `SubscriptionResponse` | `subscriptionResponseSchema` | `src/models/subscription-response.ts` |
| `CancelSubscriptionErrorResponse` | `cancelSubscriptionErrorResponseSchema` | `src/models/unions/cancel-subscription-error-response.ts` |

### initiateDelayedCancellation

- **Signature**: `initiateDelayedCancellation(request: SubscriptionStatus.InitiateDelayedCancellationRequest, options?: RequestOptions): ApiPromise<DelayedCancellationResponse, SubscriptionStatus.InitiateDelayedCancellationError>`
- **Wire**: `POST /subscriptions/{subscription_id}/delayed_cancel.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DelayedCancellationResponse`
- **Error**: `SubscriptionStatus.InitiateDelayedCancellationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"errorListResponse1"` [422] `ErrorListResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubscriptionStatus.InitiateDelayedCancellationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `number` | yes |
| `body` | `body` | — | `CancellationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancellationRequest` | `cancellationRequestSchema` | `src/models/cancellation-request.ts` |
| `DelayedCancellationResponse` | `delayedCancellationResponseSchema` | `src/models/delayed-cancellation-response.ts` |
| `ErrorListResponse1` | `errorListResponse1Schema` | `src/models/error-list-response1.ts` |

### pauseSubscription

- **Signature**: `pauseSubscription(request: SubscriptionStatus.PauseSubscriptionRequest, options?: RequestOptions): ApiPromise<SubscriptionResponse, SubscriptionStatus.PauseSubscriptionError>`
- **Wire**: `POST /subscriptions/{subscription_id}/hold.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `SubscriptionResponse`
- **Error**: `SubscriptionStatus.PauseSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorListResponse1"` [422] `ErrorListResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubscriptionStatus.PauseSubscriptionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `number` | yes |
| `body` | `body` | — | `PauseRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PauseRequest` | `pauseRequestSchema` | `src/models/pause-request.ts` |
| `SubscriptionResponse` | `subscriptionResponseSchema` | `src/models/subscription-response.ts` |
| `ErrorListResponse1` | `errorListResponse1Schema` | `src/models/error-list-response1.ts` |

### previewRenewal

- **Signature**: `previewRenewal(request: SubscriptionStatus.PreviewRenewalRequest, options?: RequestOptions): ApiPromise<RenewalPreviewResponse, SubscriptionStatus.PreviewRenewalError>`
- **Wire**: `POST /subscriptions/{subscription_id}/renewals/preview.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `RenewalPreviewResponse`
- **Error**: `SubscriptionStatus.PreviewRenewalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorListResponse1"` [422] `ErrorListResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubscriptionStatus.PreviewRenewalRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `number` | yes |
| `body` | `body` | — | `RenewalPreviewRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RenewalPreviewRequest` | `renewalPreviewRequestSchema` | `src/models/renewal-preview-request.ts` |
| `RenewalPreviewResponse` | `renewalPreviewResponseSchema` | `src/models/renewal-preview-response.ts` |
| `ErrorListResponse1` | `errorListResponse1Schema` | `src/models/error-list-response1.ts` |

### reactivateSubscription

- **Signature**: `reactivateSubscription(request: SubscriptionStatus.ReactivateSubscriptionRequestParams, options?: RequestOptions): ApiPromise<SubscriptionResponse, SubscriptionStatus.ReactivateSubscriptionError>`
- **Wire**: `PUT /subscriptions/{subscription_id}/reactivate.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `SubscriptionResponse`
- **Error**: `SubscriptionStatus.ReactivateSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorListResponse1"` [422] `ErrorListResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubscriptionStatus.ReactivateSubscriptionRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `number` | yes |
| `body` | `body` | — | `ReactivateSubscriptionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReactivateSubscriptionRequest` | `reactivateSubscriptionRequestSchema` | `src/models/reactivate-subscription-request.ts` |
| `SubscriptionResponse` | `subscriptionResponseSchema` | `src/models/subscription-response.ts` |
| `ErrorListResponse1` | `errorListResponse1Schema` | `src/models/error-list-response1.ts` |

### resumeSubscription

- **Signature**: `resumeSubscription(request: SubscriptionStatus.ResumeSubscriptionRequest, options?: RequestOptions): ApiPromise<SubscriptionResponse, SubscriptionStatus.ResumeSubscriptionError>`
- **Wire**: `POST /subscriptions/{subscription_id}/resume.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubscriptionResponse`
- **Error**: `SubscriptionStatus.ResumeSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorListResponse1"` [422] `ErrorListResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubscriptionStatus.ResumeSubscriptionRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `number` | yes | — |
| `calendarBillingResumptionCharge` | `query` | `calendar_billing['resumption_charge']` | `ResumptionCharge` | no | `ResumptionCharge.Prorated` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResumptionCharge` | `resumptionChargeSchema` | `src/models/resumption-charge.ts` |
| `SubscriptionResponse` | `subscriptionResponseSchema` | `src/models/subscription-response.ts` |
| `ErrorListResponse1` | `errorListResponse1Schema` | `src/models/error-list-response1.ts` |

### retrySubscription

- **Signature**: `retrySubscription(request: SubscriptionStatus.RetrySubscriptionRequest, options?: RequestOptions): ApiPromise<SubscriptionResponse, SubscriptionStatus.RetrySubscriptionError>`
- **Wire**: `PUT /subscriptions/{subscription_id}/retry.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubscriptionResponse`
- **Error**: `SubscriptionStatus.RetrySubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorListResponse1"` [422] `ErrorListResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubscriptionStatus.RetrySubscriptionRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionResponse` | `subscriptionResponseSchema` | `src/models/subscription-response.ts` |
| `ErrorListResponse1` | `errorListResponse1Schema` | `src/models/error-list-response1.ts` |

### updateAutomaticSubscriptionResumption

- **Signature**: `updateAutomaticSubscriptionResumption(request: SubscriptionStatus.UpdateAutomaticSubscriptionResumptionRequest, options?: RequestOptions): ApiPromise<SubscriptionResponse, SubscriptionStatus.UpdateAutomaticSubscriptionResumptionError>`
- **Wire**: `PUT /subscriptions/{subscription_id}/hold.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `SubscriptionResponse`
- **Error**: `SubscriptionStatus.UpdateAutomaticSubscriptionResumptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorListResponse1"` [422] `ErrorListResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubscriptionStatus.UpdateAutomaticSubscriptionResumptionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `number` | yes |
| `body` | `body` | — | `PauseRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PauseRequest` | `pauseRequestSchema` | `src/models/pause-request.ts` |
| `SubscriptionResponse` | `subscriptionResponseSchema` | `src/models/subscription-response.ts` |
| `ErrorListResponse1` | `errorListResponse1Schema` | `src/models/error-list-response1.ts` |

