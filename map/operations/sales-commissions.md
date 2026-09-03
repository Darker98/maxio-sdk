<!-- Generated file — do not edit; regenerated with the SDK. -->

# SalesCommissions — operations

Accessor: `client.salesCommissions` · Source: `src/resources/sales-commissions.ts` · 3 operations · Request types: namespace `SalesCommissions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `maxio-advanced-billing`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### listSalesCommissionSettings

- **Signature**: `listSalesCommissionSettings(request: SalesCommissions.ListSalesCommissionSettingsRequest, options?: RequestOptions): ApiPromise<SaleRepSettings[], ResponseError>`
- **Wire**: `GET /sellers/{seller_id}/sales_commission_settings.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SaleRepSettings[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SalesCommissions.ListSalesCommissionSettingsRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `sellerId` | `path` | `seller_id` | `string` | yes | — |
| `liveMode` | `query` | `live_mode` | `boolean` | no | — |
| `page` | `query` | — | `number` | no | `1` |
| `perPage` | `query` | `per_page` | `number` | no | `100` |
| `authorization` | `header` | `Authorization` | `string` | no | `"Bearer <<apiKey>>"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `SaleRepSettings` | `saleRepSettingsSchema` | `src/models/sale-rep-settings.ts` |

### listSalesReps

- **Signature**: `listSalesReps(request: SalesCommissions.ListSalesRepsRequest, options?: RequestOptions): ApiPromise<ListSaleRepItem[], ResponseError>`
- **Wire**: `GET /sellers/{seller_id}/sales_reps.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSaleRepItem[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SalesCommissions.ListSalesRepsRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `sellerId` | `path` | `seller_id` | `string` | yes | — |
| `liveMode` | `query` | `live_mode` | `boolean` | no | — |
| `page` | `query` | — | `number` | no | `1` |
| `perPage` | `query` | `per_page` | `number` | no | `100` |
| `authorization` | `header` | `Authorization` | `string` | no | `"Bearer <<apiKey>>"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSaleRepItem` | `listSaleRepItemSchema` | `src/models/list-sale-rep-item.ts` |

### readSalesRep

- **Signature**: `readSalesRep(request: SalesCommissions.ReadSalesRepRequest, options?: RequestOptions): ApiPromise<SaleRep, ResponseError>`
- **Wire**: `GET /sellers/{seller_id}/sales_reps/{sales_rep_id}.json`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SaleRep`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SalesCommissions.ReadSalesRepRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `sellerId` | `path` | `seller_id` | `string` | yes | — |
| `salesRepId` | `path` | `sales_rep_id` | `string` | yes | — |
| `liveMode` | `query` | `live_mode` | `boolean` | no | — |
| `page` | `query` | — | `number` | no | `1` |
| `perPage` | `query` | `per_page` | `number` | no | `100` |
| `authorization` | `header` | `Authorization` | `string` | no | `"Bearer <<apiKey>>"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `SaleRep` | `saleRepSchema` | `src/models/sale-rep.ts` |

