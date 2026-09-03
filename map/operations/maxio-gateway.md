<!-- Generated file — do not edit; regenerated with the SDK. -->

# MaxioGateway — operations

Accessor: `client.maxioGateway` · Source: `src/resources/maxio-gateway.ts` · 1 operation · Request and error types: namespace `MaxioGateway`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `maxio-advanced-billing`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### requestAccessToken

- **Server**: `oauth` — not the `production` group; see Servers & auth in sdk-map.md
- **Signature**: `requestAccessToken(request: MaxioGateway.RequestAccessTokenRequest, options?: RequestOptions): ApiPromise<MaxioGatewayOAuthAccessToken, MaxioGateway.RequestAccessTokenError>`
- **Wire**: `POST /oauth/token`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `MaxioGatewayOAuthAccessToken`
- **Error**: `MaxioGateway.RequestAccessTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"maxioGatewayOAuthError"` [400] `MaxioGatewayOAuthError` · `"maxioGatewayOAuthError2"` [401] `MaxioGatewayOAuthError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MaxioGateway.RequestAccessTokenRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `MaxioGatewayOAuthTokenRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MaxioGatewayOAuthTokenRequest` | `maxioGatewayOAuthTokenRequestSchema` | `src/models/maxio-gateway-oauth-token-request.ts` |
| `MaxioGatewayOAuthAccessToken` | `maxioGatewayOAuthAccessTokenSchema` | `src/models/maxio-gateway-oauth-access-token.ts` |
| `MaxioGatewayOAuthError` | `maxioGatewayOAuthErrorSchema` | `src/models/maxio-gateway-oauth-error.ts` |

