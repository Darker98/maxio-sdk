<!-- Generated file — do not edit; regenerated with the SDK. -->

# Offers — operations

Accessor: `client.offers` · Source: `src/resources/offers.ts` · 5 operations · Request and error types: namespace `Offers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `maxio-advanced-billing`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### archiveOffer

- **Signature**: `archiveOffer(request: Offers.ArchiveOfferRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `PUT /offers/{offer_id}/archive.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Offers.ArchiveOfferRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `offerId` | `path` | `offer_id` | `number` | yes |

### createOffer

- **Signature**: `createOffer(request: Offers.CreateOfferRequestParams, options?: RequestOptions): ApiPromise<OfferResponse, Offers.CreateOfferError>`
- **Wire**: `POST /offers.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `OfferResponse`
- **Error**: `Offers.CreateOfferError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorArrayMapResponse1"` [422] `ErrorArrayMapResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Offers.CreateOfferRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateOfferRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateOfferRequest` | `createOfferRequestSchema` | `src/models/create-offer-request.ts` |
| `OfferResponse` | `offerResponseSchema` | `src/models/offer-response.ts` |
| `ErrorArrayMapResponse1` | `errorArrayMapResponse1Schema` | `src/models/error-array-map-response1.ts` |

### listOffers

- **Signature**: `listOffers(request: Offers.ListOffersRequest, options?: RequestOptions): ApiPromise<ListOffersResponse, Offers.ListOffersError>`
- **Wire**: `GET /offers.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListOffersResponse`
- **Error**: `Offers.ListOffersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorListResponse1"` [422] `ErrorListResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Offers.ListOffersRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `number` | no | `1` |
| `perPage` | `query` | `per_page` | `number` | no | `20` |
| `includeArchived` | `query` | `include_archived` | `boolean` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListOffersResponse` | `listOffersResponseSchema` | `src/models/list-offers-response.ts` |
| `ErrorListResponse1` | `errorListResponse1Schema` | `src/models/error-list-response1.ts` |

### readOffer

- **Signature**: `readOffer(request: Offers.ReadOfferRequest, options?: RequestOptions): ApiPromise<OfferResponse, ResponseError>`
- **Wire**: `GET /offers/{offer_id}.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OfferResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Offers.ReadOfferRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `offerId` | `path` | `offer_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OfferResponse` | `offerResponseSchema` | `src/models/offer-response.ts` |

### unarchiveOffer

- **Signature**: `unarchiveOffer(request: Offers.UnarchiveOfferRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `PUT /offers/{offer_id}/unarchive.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Offers.UnarchiveOfferRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `offerId` | `path` | `offer_id` | `number` | yes |

