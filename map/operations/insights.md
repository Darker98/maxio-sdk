<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insights — operations

Accessor: `client.insights` · Source: `src/resources/insights.ts` · 4 operations · Request and error types: namespace `Insights`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `maxio-advanced-billing`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### listMrrMovements

- **Signature**: `listMrrMovements(request: Insights.ListMrrMovementsRequest, options?: RequestOptions): ApiPromise<ListMrrResponse, ResponseError>`
- **Wire**: `GET /mrr_movements.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListMrrResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Insights.ListMrrMovementsRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `subscriptionId` | `query` | `subscription_id` | `number` | no | — |
| `page` | `query` | — | `number` | no | `1` |
| `perPage` | `query` | `per_page` | `number` | no | `10` |
| `direction` | `query` | — | `SortingDirection` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortingDirection` | `sortingDirectionSchema` | `src/models/sorting-direction.ts` |
| `ListMrrResponse` | `listMrrResponseSchema` | `src/models/list-mrr-response.ts` |

### listMrrPerSubscription

- **Signature**: `listMrrPerSubscription(request: Insights.ListMrrPerSubscriptionRequest, options?: RequestOptions): ApiPromise<SubscriptionMrrResponse, Insights.ListMrrPerSubscriptionError>`
- **Wire**: `GET /subscriptions_mrr.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubscriptionMrrResponse`
- **Error**: `Insights.ListMrrPerSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"subscriptionsMrrErrorResponse1"` [400] `SubscriptionsMrrErrorResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.ListMrrPerSubscriptionRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `filter` | `query` | — | `ListMrrFilter` | no | — |
| `atTime` | `query` | `at_time` | `string` | no | — |
| `page` | `query` | — | `number` | no | `1` |
| `perPage` | `query` | `per_page` | `number` | no | `20` |
| `direction` | `query` | — | `Direction` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListMrrFilter` | `listMrrFilterSchema` | `src/models/list-mrr-filter.ts` |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `SubscriptionMrrResponse` | `subscriptionMrrResponseSchema` | `src/models/subscription-mrr-response.ts` |
| `SubscriptionsMrrErrorResponse1` | `subscriptionsMrrErrorResponse1Schema` | `src/models/subscriptions-mrr-error-response1.ts` |

### readMrr

- **Signature**: `readMrr(request: Insights.ReadMrrRequest, options?: RequestOptions): ApiPromise<MrrResponse, ResponseError>`
- **Wire**: `GET /mrr.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MrrResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Insights.ReadMrrRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `atTime` | `query` | `at_time` | `Date` (date-time) | no |
| `subscriptionId` | `query` | `subscription_id` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MrrResponse` | `mrrResponseSchema` | `src/models/mrr-response.ts` |

### readSiteStats

- **Signature**: `readSiteStats(options?: RequestOptions): ApiPromise<SiteSummary, ResponseError>`
- **Wire**: `GET /stats.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SiteSummary`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `SiteSummary` | `siteSummarySchema` | `src/models/site-summary.ts` |

