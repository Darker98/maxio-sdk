<!-- Generated file — do not edit; regenerated with the SDK. -->

# Subscriptions — operations

Accessor: `client.subscriptions` · Source: `src/resources/subscriptions.ts` · 12 operations · Request and error types: namespace `Subscriptions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `maxio-advanced-billing`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### activateSubscription

- **Signature**: `activateSubscription(request: Subscriptions.ActivateSubscriptionRequestParams, options?: RequestOptions): ApiPromise<SubscriptionResponse, Subscriptions.ActivateSubscriptionError>`
- **Wire**: `PUT /subscriptions/{subscription_id}/activate.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `SubscriptionResponse`
- **Error**: `Subscriptions.ActivateSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorArrayMapResponse1"` [400] `ErrorArrayMapResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.ActivateSubscriptionRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `number` | yes |
| `body` | `body` | — | `ActivateSubscriptionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ActivateSubscriptionRequest` | `activateSubscriptionRequestSchema` | `src/models/activate-subscription-request.ts` |
| `SubscriptionResponse` | `subscriptionResponseSchema` | `src/models/subscription-response.ts` |
| `ErrorArrayMapResponse1` | `errorArrayMapResponse1Schema` | `src/models/error-array-map-response1.ts` |

### applyCouponsToSubscription

- **Signature**: `applyCouponsToSubscription(request: Subscriptions.ApplyCouponsToSubscriptionRequest, options?: RequestOptions): ApiPromise<SubscriptionResponse, Subscriptions.ApplyCouponsToSubscriptionError>`
- **Wire**: `POST /subscriptions/{subscription_id}/add_coupon.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `SubscriptionResponse`
- **Error**: `Subscriptions.ApplyCouponsToSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"subscriptionAddCouponError1"` [422] `SubscriptionAddCouponError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.ApplyCouponsToSubscriptionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `number` | yes |
| `code` | `query` | — | `string` | no |
| `body` | `body` | — | `AddCouponsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AddCouponsRequest` | `addCouponsRequestSchema` | `src/models/add-coupons-request.ts` |
| `SubscriptionResponse` | `subscriptionResponseSchema` | `src/models/subscription-response.ts` |
| `SubscriptionAddCouponError1` | `subscriptionAddCouponError1Schema` | `src/models/subscription-add-coupon-error1.ts` |

### createSubscription

- **Signature**: `createSubscription(request: Subscriptions.CreateSubscriptionRequestParams, options?: RequestOptions): ApiPromise<SubscriptionResponse, Subscriptions.CreateSubscriptionError>`
- **Wire**: `POST /subscriptions.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `SubscriptionResponse`
- **Error**: `Subscriptions.CreateSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorListResponse1"` [422] `ErrorListResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.CreateSubscriptionRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateSubscriptionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateSubscriptionRequest` | `createSubscriptionRequestSchema` | `src/models/create-subscription-request.ts` |
| `SubscriptionResponse` | `subscriptionResponseSchema` | `src/models/subscription-response.ts` |
| `ErrorListResponse1` | `errorListResponse1Schema` | `src/models/error-list-response1.ts` |

### findSubscription

- **Signature**: `findSubscription(request: Subscriptions.FindSubscriptionRequest, options?: RequestOptions): ApiPromise<SubscriptionResponse, Subscriptions.FindSubscriptionError>`
- **Wire**: `GET /subscriptions/lookup.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubscriptionResponse`
- **Error**: `Subscriptions.FindSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.FindSubscriptionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `reference` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionResponse` | `subscriptionResponseSchema` | `src/models/subscription-response.ts` |

### listSubscriptions

- **Signature**: `listSubscriptions(request: Subscriptions.ListSubscriptionsRequest, options?: RequestOptions): ApiPromise<SubscriptionResponse[], ResponseError>`
- **Wire**: `GET /subscriptions.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubscriptionResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Subscriptions.ListSubscriptionsRequest` (17):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `number` | no | `1` |
| `perPage` | `query` | `per_page` | `number` | no | `20` |
| `state` | `query` | — | `SubscriptionStateFilter` | no | — |
| `product` | `query` | — | `number` | no | — |
| `productPricePointId` | `query` | `product_price_point_id` | `number` | no | — |
| `coupon` | `query` | — | `number` | no | — |
| `couponCode` | `query` | `coupon_code` | `string` | no | — |
| `brandingThemeId` | `query` | `branding_theme_id` | `number` | no | — |
| `dateField` | `query` | `date_field` | `SubscriptionDateField` | no | — |
| `startDate` | `query` | `start_date` | `string` (date) | no | — |
| `endDate` | `query` | `end_date` | `string` (date) | no | — |
| `startDatetime` | `query` | `start_datetime` | `Date` (date-time) | no | — |
| `endDatetime` | `query` | `end_datetime` | `Date` (date-time) | no | — |
| `metadata` | `query` | — | `Record<string, string>` | no | — |
| `direction` | `query` | — | `SortingDirection` | no | — |
| `sort` | `query` | — | `SubscriptionSort` | no | `SubscriptionSort.SignupDate` |
| `include` | `query` | — | `SubscriptionListInclude[]` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionStateFilter` | `subscriptionStateFilterSchema` | `src/models/subscription-state-filter.ts` |
| `SubscriptionDateField` | `subscriptionDateFieldSchema` | `src/models/subscription-date-field.ts` |
| `SortingDirection` | `sortingDirectionSchema` | `src/models/sorting-direction.ts` |
| `SubscriptionSort` | `subscriptionSortSchema` | `src/models/subscription-sort.ts` |
| `SubscriptionListInclude` | `subscriptionListIncludeSchema` | `src/models/subscription-list-include.ts` |
| `SubscriptionResponse` | `subscriptionResponseSchema` | `src/models/subscription-response.ts` |

### overrideSubscription

- **Signature**: `overrideSubscription(request: Subscriptions.OverrideSubscriptionRequestParams, options?: RequestOptions): ApiPromise<undefined, Subscriptions.OverrideSubscriptionError>`
- **Wire**: `PUT /subscriptions/{subscription_id}/override.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `Subscriptions.OverrideSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"singleErrorResponse1"` [422] `SingleErrorResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.OverrideSubscriptionRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `number` | yes |
| `body` | `body` | — | `OverrideSubscriptionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OverrideSubscriptionRequest` | `overrideSubscriptionRequestSchema` | `src/models/override-subscription-request.ts` |
| `SingleErrorResponse1` | `singleErrorResponse1Schema` | `src/models/single-error-response1.ts` |

### previewSubscription

- **Signature**: `previewSubscription(request: Subscriptions.PreviewSubscriptionRequest, options?: RequestOptions): ApiPromise<SubscriptionPreviewResponse, ResponseError>`
- **Wire**: `POST /subscriptions/preview.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `SubscriptionPreviewResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Subscriptions.PreviewSubscriptionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateSubscriptionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateSubscriptionRequest` | `createSubscriptionRequestSchema` | `src/models/create-subscription-request.ts` |
| `SubscriptionPreviewResponse` | `subscriptionPreviewResponseSchema` | `src/models/subscription-preview-response.ts` |

### purgeSubscription

- **Signature**: `purgeSubscription(request: Subscriptions.PurgeSubscriptionRequest, options?: RequestOptions): ApiPromise<SubscriptionResponse, Subscriptions.PurgeSubscriptionError>`
- **Wire**: `POST /subscriptions/{subscription_id}/purge.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubscriptionResponse`
- **Error**: `Subscriptions.PurgeSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"subscriptionResponse"` [400] `SubscriptionResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.PurgeSubscriptionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `number` | yes |
| `ack` | `query` | — | `number` | yes |
| `cascade` | `query` | — | `SubscriptionPurgeType[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionPurgeType` | `subscriptionPurgeTypeSchema` | `src/models/subscription-purge-type.ts` |
| `SubscriptionResponse` | `subscriptionResponseSchema` | `src/models/subscription-response.ts` |

### readSubscription

- **Signature**: `readSubscription(request: Subscriptions.ReadSubscriptionRequest, options?: RequestOptions): ApiPromise<SubscriptionResponse, ResponseError>`
- **Wire**: `GET /subscriptions/{subscription_id}.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubscriptionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Subscriptions.ReadSubscriptionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `number` | yes |
| `include` | `query` | — | `SubscriptionInclude[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionInclude` | `subscriptionIncludeSchema` | `src/models/subscription-include.ts` |
| `SubscriptionResponse` | `subscriptionResponseSchema` | `src/models/subscription-response.ts` |

### removeCouponFromSubscription

- **Signature**: `removeCouponFromSubscription(request: Subscriptions.RemoveCouponFromSubscriptionRequest, options?: RequestOptions): ApiPromise<string, Subscriptions.RemoveCouponFromSubscriptionError>`
- **Wire**: `DELETE /subscriptions/{subscription_id}/remove_coupon.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string` — a bare `application/json` string; the success type *is* the string
- **Error**: `Subscriptions.RemoveCouponFromSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"subscriptionRemoveCouponErrors1"` [422] `SubscriptionRemoveCouponErrors1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.RemoveCouponFromSubscriptionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `number` | yes |
| `couponCode` | `query` | `coupon_code` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionRemoveCouponErrors1` | `subscriptionRemoveCouponErrors1Schema` | `src/models/subscription-remove-coupon-errors1.ts` |

### updatePrepaidSubscriptionConfiguration

- **Signature**: `updatePrepaidSubscriptionConfiguration(request: Subscriptions.UpdatePrepaidSubscriptionConfigurationRequest, options?: RequestOptions): ApiPromise<PrepaidConfigurationResponse, Subscriptions.UpdatePrepaidSubscriptionConfigurationError>`
- **Wire**: `POST /subscriptions/{subscription_id}/prepaid_configurations.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `PrepaidConfigurationResponse`
- **Error**: `Subscriptions.UpdatePrepaidSubscriptionConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"prepaidConfigurationErrorResponse"` [422] `PrepaidConfigurationErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.UpdatePrepaidSubscriptionConfigurationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `number` | yes |
| `body` | `body` | — | `UpsertPrepaidConfigurationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpsertPrepaidConfigurationRequest` | `upsertPrepaidConfigurationRequestSchema` | `src/models/upsert-prepaid-configuration-request.ts` |
| `PrepaidConfigurationResponse` | `prepaidConfigurationResponseSchema` | `src/models/prepaid-configuration-response.ts` |
| `PrepaidConfigurationErrorResponse` | `prepaidConfigurationErrorResponseSchema` | `src/models/unions/prepaid-configuration-error-response.ts` |

### updateSubscription

- **Signature**: `updateSubscription(request: Subscriptions.UpdateSubscriptionRequestParams, options?: RequestOptions): ApiPromise<SubscriptionResponse, Subscriptions.UpdateSubscriptionError>`
- **Wire**: `PUT /subscriptions/{subscription_id}.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `SubscriptionResponse`
- **Error**: `Subscriptions.UpdateSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorListResponse1"` [422] `ErrorListResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.UpdateSubscriptionRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `number` | yes |
| `body` | `body` | — | `UpdateSubscriptionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateSubscriptionRequest` | `updateSubscriptionRequestSchema` | `src/models/update-subscription-request.ts` |
| `SubscriptionResponse` | `subscriptionResponseSchema` | `src/models/subscription-response.ts` |
| `ErrorListResponse1` | `errorListResponse1Schema` | `src/models/error-list-response1.ts` |

