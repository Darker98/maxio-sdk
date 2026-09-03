<!-- Generated file — do not edit; regenerated with the SDK. -->

# SDK map — Maxio Advanced Billing (TypeScript)

> A generated table of contents for this SDK. Consult this map and its sub-pages to learn signatures, request-field placement, error types and server wiring **by lookup**. Model shapes are *not* duplicated here — the map names the file declaring each type and the schema value exported beside it; read the shape there. The compiler is the backstop: a wrong name fails to build.

|  |  |
| --- | --- |
| SDK display name | Maxio Advanced Billing |
| Package | `maxio-advanced-billing` |
| Package version | `1.0` |
| API spec version | `1.0` |
| Import specifier | `maxio-advanced-billing` — the package root is the **only** entry. Deep imports (`maxio-advanced-billing/models/...`) do not resolve; the `exports` map exposes `.` and `./package.json` and nothing else |
| Module format | dual ESM + CommonJS, as folder dialects (`dist/esm`, `dist/commonjs`), each with its own `package.json` marker. No `.mjs`, `.cjs`, `.d.mts` or `.d.cts` files exist |
| Node floor | `>=20` (`engines.node`) |
| TypeScript floor | a resolver that reads `exports` (4.7+), plus whatever the pinned `zod` requires — `zod@4` needs 5.5 or later. The public `.d.ts` chain reaches `zod/v4-mini`, so this is a real constraint rather than a build-tool version |
| Runtime dependency | `zod` (`^3.25.0 \|\| ^4.0.0`), imported as `zod/v4-mini`. The only runtime dependency |
| Generator | APIMatic |

Staleness check: the API spec version above changes when the SDK is regenerated from a new spec. If a lookup here fails to compile, trust the compiler and re-read the source file named in the row.

All `Source` paths on this map and its sub-pages are relative to the **SDK root** — the directory holding this file and `package.json` — never to the page that carries them: a page two directories deep writes exactly what a page at the root would. The package ships its `src/` tree, so the same paths resolve inside `node_modules/maxio-advanced-billing/` too. An import specifier ending `.js` inside that source is the NodeNext spelling of the sibling `.ts` file.

---

## Getting a client

```ts
import { MaxioAdvancedBillingClient, ServerEnvironment } from "maxio-advanced-billing";

const client = new MaxioAdvancedBillingClient({
  serverEnvironment: ServerEnvironment.Us,
  basicAuth: { username: "YOUR_USERNAME", password: "YOUR_PASSWORD" },
  bearerAuth: "YOUR_BEARER_TOKEN",
});
```

The only constructor is `new MaxioAdvancedBillingClient(clientOptions: Partial<ClientOptions> = {})`, so `new MaxioAdvancedBillingClient()` is valid. Resources are memoized lazy getters on the client — `client.maxioGateway`, `client.apiExports`, `client.advanceInvoice`, `client.billingPortal`, `client.coupons`, `client.components`, `client.componentPricePoints`, `client.customers`, `client.customFields`, `client.events`, `client.eventsBasedBillingSegments`, `client.insights`, `client.invoices`, `client.offers`, `client.paymentProfiles`, `client.productFamilies`, `client.products`, `client.productPricePoints`, `client.proformaInvoices`, `client.reasonCodes`, `client.referralCodes`, `client.salesCommissions`, `client.sites`, `client.subscriptions`, `client.subscriptionComponents`, `client.subscriptionGroups`, `client.subscriptionGroupInvoiceAccount`, `client.subscriptionGroupStatus`, `client.subscriptionInvoiceAccount`, `client.subscriptionNotes`, `client.subscriptionProducts`, `client.subscriptionRenewals`, `client.subscriptionStatus`, `client.webhooks` — and their classes are exported only for their merged namespaces and for `instanceof`; their constructors take engine internals that are not exported, so reach a resource only through its getter.

All `ClientOptions` fields (source: `src/client-options.ts`; every field is `readonly`):

| Field | Type | Default |
| --- | --- | --- |
| `serverEnvironment` | `ServerEnvironment` | `ServerEnvironment.Us` |
| `serverOptions` | `ServerOptions` | `{}` — each resolver merges its own per-environment defaults in |
| `timeout` | `number` (ms) | `60_000` |
| `fetch` | `FetchLike \| undefined` | the global `fetch`, resolved by the transport |
| `basicAuth` | `BasicAuthCredentials \| undefined` | unset |
| `bearerAuth` | `TokenProvider \| undefined` | unset |

The 2 auth fields are all optional, and an unset one is not an error — the operation that wanted it simply sends no credential. What each one puts on the wire, and which operations require it, are under Servers & auth.

Two engine behaviours the table cannot show. A non-finite or non-positive `timeout` is **not** "no timeout" — the transport (`src/core/raw-client.ts`) falls back to its own ceiling and clamps anything above it. And when no `fetch` is reachable the **constructor** throws `SdkError`, not the first call.

**`ClientOptions.fetch` is the one extension point** — there are no hooks, no middleware and no interceptors, so a proxy, a custom agent, extra headers, retries or request logging all go here. A replacement **must forward `init.signal`** to whatever actually performs the request; spreading `...init` does it. Drop it and both the per-call signal and `timeout` go inert — the call neither aborts nor times out.

**Cancellation.** The `signal` on `RequestOptions` is the whole per-request surface. An already-aborted signal rejects immediately, `err.cause` is whatever was passed to `abort()`, and the client-level `timeout` surfaces through the same branch with `err.kind === "timeout"`. There is no per-request timeout.

The entire per-request surface is the optional second argument of every operation:

| Type | Members | Source |
| --- | --- | --- |
| `RequestOptions` | `signal?: AbortSignal` | `src/core/api-request.ts` |

**Not on this SDK.** These are absent by design, not undocumented. This table ships with `src/core/` and is versioned with it.

| You might reach for | Reality |
| --- | --- |
| `maxRetries`, backoff, `Retry-After` handling | no retries. A failed call rejects once |
| a logger, `logLevel`, request/response logging | none. `src/core/` contains no `console` call |
| hooks, middleware, interceptors, `onRequest`/`onResponse` | none. `fetch` is the one extension point |
| pagination, `for await`, auto-paging helpers | no operation is paginated and nothing is async-iterable |
| SSE, `text/event-stream`, `ReadableStream` | no streaming. Every decoder reads the body to completion |
| `FormData`, `Blob`, `File`, multipart, binary bodies | none. The only body kinds are empty, JSON, form-urlencoded and text |
| per-request `headers`, `timeout`, `baseUrl`, idempotency key | none. `RequestOptions` is `{ signal }` |
| the raw `fetch` `Response` | deliberately unreachable. `status` and `headers` are on `asApiResult()` and on a thrown `ResponseError` |

---

## Error-handling model (read once — applies to every operation)

Operations are **throw-based**, and failures fall into **two disjoint families**. Neither is `instanceof` the other, so the two branches can never overlap and a complete `catch` needs both. `instanceof` is reliable **within one dialect**: a process that loads both — `import` in one file, `require` in another — gets two independent copies of every error class, and `instanceof` across that boundary is `false`. Narrow on `err.kind` or on `err.payload.kind` there, or on `err.name`, which is stable across copies.

- **Family A — the API answered with an error status.** The call rejects with `ResponseError`, or with a subclass of it where the spec declared error bodies for that operation. `err.payload` is a discriminated union whose `kind` names the **response schema the spec declared**, *not* the status code — so two statuses sharing one schema share one arm, and `"undeclared"` is an always-present arm carrying the raw bytes.
- **Family B — no usable response was produced.** The call rejects with a member of the `MaxioAdvancedBillingError` set. `MaxioAdvancedBillingError` is **abstract**: use it for `instanceof`, never construct it.

Core types (public members with their declared types; all are `readonly`):

| Type | Public members | Source |
| --- | --- | --- |
| `ResponseError<P>` | `status: number` · `headers: Headers` · `payload: ErrorPayload<P>`, and a `message` of the form `<status> <statusText>` | `src/core/response-error.ts` |
| `Declared<K, B>` | `kind: K` · `body: B` | `src/core/response-error.ts` |
| `ErrorPayload<P>` | `P` or `{ kind: "undeclared"; rawBody: ArrayBuffer }` | `src/core/response-error.ts` |
| `MaxioAdvancedBillingError` (abstract; declared as `CoreError`) | `kind: ErrorKind` · `message` · `cause` | `src/core/errors.ts` |
| `SchemaError` | `kind: "schema"` · `rawBody: unknown` | `src/core/validation/schema-error.ts` |
| `AuthError` | `kind: "auth"` · `failures: readonly unknown[]` | `src/core/errors.ts` |
| `ApiResult<T, E>` | on success `{ ok: true; status; headers; value: T }`, on failure `{ ok: false; status; headers; errorMessage: string; error }` — `error` carries the **payload**, not the error object | `src/core/api-promise.ts` |

`ErrorKind` is one value per Family B class: `connection` (the `fetch` call rejected, or the body read failed mid-stream), `timeout` (the client-level timeout elapsed), `abort` (the per-call signal aborted, including one that was already aborted), `sdk` (a defect on the SDK side), `schema` (a value failed its schema in **either** direction — inbound the response body was malformed, outbound nothing was sent at all), and `auth` (a credential could not be **obtained**).

**`AuthError` is about obtaining a credential, never about being refused one.** A 401 *from the API* is a Family A `ResponseError` like any other status, so the two are disjoint and one `catch` arm cannot absorb the other. A 401 does have one auth consequence: it invalidates whatever that operation's scheme had cached, so the **next** call re-acquires. The current request is not retried — see Servers & auth.

```ts
try {
  const response = await client.maxioGateway.requestAccessToken({ body });
} catch (err) {
  if (err instanceof ResponseError) {
    // TODO: the API answered with an error status — read err.status and err.payload
  }
  if (err instanceof MaxioAdvancedBillingError) {
    // TODO: no usable response was produced — err.kind says which
  }
}
```

A typed subclass narrows further, on `err.payload.kind`. Which arms an operation declares, with the status each covers, is the **Error arms** bullet on its page below.

**Matcher precedence** for a subclass with several arms: an exact numeric status is looked up across the whole table **first**; only then does the first covering wildcard or range win.

**The non-throwing form exists on every operation.** `.asApiResult()` returns `ApiResult<T, E>` and does **not** reject for an HTTP error status — it still rejects for Family B. It must be called on the value the operation returned: `ApiPromise` overrides `Symbol.species`, so `.then()`, `.catch()` and `.finally()` hand back a plain `Promise` and the method is gone.

Of **250 operations**, **166** declare typed error bodies and **84** reject with the base `ResponseError`, whose payload is always the `"undeclared"` arm.

---

## Operations — by resource (34 groups, 250 operations)

Each page below carries one block per operation, with bullets in the fixed order **Server**, **Signature**, **Wire**, **Auth**, **Request body**, **SDK-sent**, **Returns**, **Error**, **Error arms**, then a **Fields** table mapping every request field to the channel it travels on, and a **Type sources** table naming the declaring file and schema value of every type the operation mentions. With `api-reference.md` documenting operations only, that table is the route from an operation to the file declaring what it takes.

**Each block states what is specific to its operation. Everything in the table below holds for EVERY operation unless that operation says otherwise, so a block silent on one of these points is telling you the default here applies — take it and move on rather than opening the source to confirm it.**

| Applies to every operation | Stated where | A block departs from it only by |
| --- | --- | --- |
| **Call shape `op(request, options?)`** — one flat request object first, the per-call options second. There is no positional overload, and no per-call base URL, header, timeout, retry or auth override | here, Getting a client | never — it always holds |
| **The request object is flat and channel-blind.** A field named `body` *is* the whole request body; every other field is fanned out to path, query, header or form by the SDK. Nothing in the object is nested by channel | here | never — the **Fields** table `Channel` column always resolves it |
| **Throw-based, returning `ApiPromise<T, E>`.** `await` it for `T`; call `.asApiResult()` on the returned value for the non-throwing `ApiResult<T, E>`. No operation is result-only | here, Error-handling model | never |
| **`E` is the base `ResponseError`** and the payload is always the `"undeclared"` arm | Error-handling model | the spec declared error bodies — the **Error** bullet names a subclass and an **Error arms** bullet gives each arm's tag, status and body |
| **The request body and its media type are stated on every block**, by a **Request body** bullet that is never omitted. `none` means no body **and no `Content-Type` header** | here | never — the bullet is always present |
| **Resolves once, to one whole value.** No pagination, no streaming, no SSE, no async iterables, no partial results, no multipart and no binary anywhere | here, Not on this SDK | never at this SDK version |
| **Server group `production`** | here, Servers & auth | the operation is on another group — its block carries a **Server** bullet |
| **Every operation states its auth requirement**, by an **Auth** bullet that is never omitted — one scheme, a composition over schemes, or `none` for a public operation | here, Servers & auth | never — the bullet is always present |
| **Every value is schema-encoded before the request is built** — a wrong type or format rejects and nothing is sent. **An omitted field that has a default is still sent, with that default**, filled by the SDK rather than by the server | here, Models | the field has a default — it appears in the **Fields** table `Default` column |
| **Field names are TypeScript camelCase and the wire name is the same** | here | some field differs — the **Fields** table gains a `Wire` column, where an em dash means "same as the field name" |
| **Arrays repeat their key and objects bracket-expand** | the serialization block below | never — this SDK declares no per-field serialization style, so every array takes this one |

**Wire serialization, once, for every channel** (source: `src/core/param-value.ts`, `src/core/url.ts`, `src/core/headers.ts`, `src/core/params.ts`). This block ships with `src/core/` and is versioned with it:

- **`path`** takes no style. An array is comma-joined with each element percent-encoded **separately**; an object becomes one percent-encoded JSON document inside the segment. A field whose encoded value is `undefined` throws `SdkError` naming the unfilled placeholder; `null` collapses the segment.
- **`header`** takes no style. An array is comma-joined un-encoded (OpenAPI `simple`). `undefined` says nothing, while `null` and an empty array are tombstones that remove the header. Later layers win by **lowercased** name, in the order body content type, then client defaults, then operation.
- **`query`** and **`form`** repeat an array's key and bracket-expand an object at any depth (`filter[status]=open`, `ranges[amount][min]=10`). An array of *objects* bracket-expands per element with **no index**, so element boundaries collapse.
- Nullish **fields** are dropped from every channel except `path`, where `null` collapses the segment. A nullish array **element** is dropped, so an all-nullish array emits no key at all.
- `form` bodies use RFC 1866 encoding (space becomes `+`); `query` uses `%20`. On the wire both key and value go through `encodeURIComponent`, plus a further escape of `!`, `'`, `(`, `)` and `*`.

**The verb and route are on the pages below**, where a map for a language whose method names are derived from the route can leave them to the source. A TypeScript method name carries none of it, and a `path` field row is unreadable without the route template it fills.

**Endpoint prose is not on this map.** Where the *semantics* of an operation decide what you must pass — a field whose value changes server-side behaviour, an ordering or exclusivity rule between fields — read `api-reference.md`, whose entries are keyed by the same signature these pages print. Blocks here give you the contract: names, channels, types, defaults, errors.

| Resource (`client.X`) | Ops | Page |
| --- | --- | --- |
| `maxioGateway` | 1 | [map/operations/maxio-gateway.md](map/operations/maxio-gateway.md) |
| `apiExports` | 9 | [map/operations/api-exports.md](map/operations/api-exports.md) |
| `advanceInvoice` | 3 | [map/operations/advance-invoice.md](map/operations/advance-invoice.md) |
| `billingPortal` | 4 | [map/operations/billing-portal.md](map/operations/billing-portal.md) |
| `coupons` | 14 | [map/operations/coupons.md](map/operations/coupons.md) |
| `components` | 12 | [map/operations/components.md](map/operations/components.md) |
| `componentPricePoints` | 12 | [map/operations/component-price-points.md](map/operations/component-price-points.md) |
| `customers` | 7 | [map/operations/customers.md](map/operations/customers.md) |
| `customFields` | 9 | [map/operations/custom-fields.md](map/operations/custom-fields.md) |
| `events` | 3 | [map/operations/events.md](map/operations/events.md) |
| `eventsBasedBillingSegments` | 6 | [map/operations/events-based-billing-segments.md](map/operations/events-based-billing-segments.md) |
| `insights` | 4 | [map/operations/insights.md](map/operations/insights.md) |
| `invoices` | 19 | [map/operations/invoices.md](map/operations/invoices.md) |
| `offers` | 5 | [map/operations/offers.md](map/operations/offers.md) |
| `paymentProfiles` | 12 | [map/operations/payment-profiles.md](map/operations/payment-profiles.md) |
| `productFamilies` | 4 | [map/operations/product-families.md](map/operations/product-families.md) |
| `products` | 6 | [map/operations/products.md](map/operations/products.md) |
| `productPricePoints` | 11 | [map/operations/product-price-points.md](map/operations/product-price-points.md) |
| `proformaInvoices` | 10 | [map/operations/proforma-invoices.md](map/operations/proforma-invoices.md) |
| `reasonCodes` | 5 | [map/operations/reason-codes.md](map/operations/reason-codes.md) |
| `referralCodes` | 1 | [map/operations/referral-codes.md](map/operations/referral-codes.md) |
| `salesCommissions` | 3 | [map/operations/sales-commissions.md](map/operations/sales-commissions.md) |
| `sites` | 3 | [map/operations/sites.md](map/operations/sites.md) |
| `subscriptions` | 12 | [map/operations/subscriptions.md](map/operations/subscriptions.md) |
| `subscriptionComponents` | 17 | [map/operations/subscription-components.md](map/operations/subscription-components.md) |
| `subscriptionGroups` | 9 | [map/operations/subscription-groups.md](map/operations/subscription-groups.md) |
| `subscriptionGroupInvoiceAccount` | 4 | [map/operations/subscription-group-invoice-account.md](map/operations/subscription-group-invoice-account.md) |
| `subscriptionGroupStatus` | 4 | [map/operations/subscription-group-status.md](map/operations/subscription-group-status.md) |
| `subscriptionInvoiceAccount` | 7 | [map/operations/subscription-invoice-account.md](map/operations/subscription-invoice-account.md) |
| `subscriptionNotes` | 5 | [map/operations/subscription-notes.md](map/operations/subscription-notes.md) |
| `subscriptionProducts` | 2 | [map/operations/subscription-products.md](map/operations/subscription-products.md) |
| `subscriptionRenewals` | 11 | [map/operations/subscription-renewals.md](map/operations/subscription-renewals.md) |
| `subscriptionStatus` | 10 | [map/operations/subscription-status.md](map/operations/subscription-status.md) |
| `webhooks` | 6 | [map/operations/webhooks.md](map/operations/webhooks.md) |

---

## Models — where they live, how to build them

**Shapes live only in the source.** Every module under `src/models/` declares exactly one model type and the schema value beside it, and both are re-exported from the package root. So there are two facts per type, and the map gives both: the **names you import** and the **file you read**.

```ts
import { type AchAgreement, achAgreementSchema } from "maxio-advanced-billing";
```

Take the pair from an operation's **Type sources** table. **Do not derive the path from the type name** — the transform is not reversible in general, and the table is the authority. There is no default export.

| Group | Count | Directory |
| --- | --- | --- |
| Objects | 563 | `src/models/` |
| Enums (open; const companion plus schema) | 98 | `src/models/` |
| Unions without a discriminant | 90 | `src/models/unions/` |

**Conventions.** Every model is a plain `type`, not a class — build one with an object literal; there is no constructor and no builder. `f: T` is required, `f?: T` is optional (omit the key), and `f: T | null` is a **required, nullable** field where `null` is a value distinct from an omitted key. Optional properties are declared `f?: T`, not `f?: T | undefined`, so under `exactOptionalPropertyTypes` you must **omit or spread** an absent field rather than assign `undefined` to it.

**Schema companions.** `Schema<T, W = Encoded<T>>` is `{ decode(v: unknown): T; encode(v: unknown): W }`, so a schema value is directly usable both ways. `Encoded<T>` is the wire projection — a `Date` becomes `string | number`, a `Uint8Array` becomes a base64 `string`, recursing through arrays and objects. `EnumSchema<T>` adds `readonly values: readonly T[]`, so an enum's known set is testable at run time.

**Enums are open, and are not TypeScript `enum`s.** Each is a `const` companion object plus a union that includes `(string & {})` or `(number & {})`, so **any** value of the right base type is assignable and the schema validates the base type only, never membership. That is deliberate: an unrecognized server value round-trips instead of throwing. Use `.values` to test membership yourself.

| Enum | Members (member to wire value) | Schema value |
| --- | --- | --- |
| `AllVaults` | `Adyen` to `"adyen"` · `Authorizenet` to `"authorizenet"` · `Beanstream` to `"beanstream"` · `BlueSnap` to `"blue_snap"` · `Bogus` to `"bogus"` · `Braintree1` to `"braintree1"` · `BraintreeBlue` to `"braintree_blue"` · `Checkout` to `"checkout"` · `Cybersource` to `"cybersource"` · `Elavon` to `"elavon"` · `Eway` to `"eway"` · `EwayRapid` to `"eway_rapid"` · `EwayRapidStd` to `"eway_rapid_std"` · `Firstdata` to `"firstdata"` · `Forte` to `"forte"` · `Gocardless` to `"gocardless"` · `Litle` to `"litle"` · `MaxioPayments` to `"maxio_payments"` · `Maxp` to `"maxp"` · `Moduslink` to `"moduslink"` · `Moneris` to `"moneris"` · `Nmi` to `"nmi"` · `Orbital` to `"orbital"` · `PaymentExpress` to `"payment_express"` · `Paymill` to `"paymill"` · `Paypal` to `"paypal"` · `PaypalComplete` to `"paypal_complete"` · `Pin` to `"pin"` · `Square` to `"square"` · `Stripe` to `"stripe"` · `StripeConnect` to `"stripe_connect"` · `TrustCommerce` to `"trust_commerce"` · `Unipaas` to `"unipaas"` · `Wirecard` to `"wirecard"` | `allVaultsSchema` |
| `AllocationPreviewDirection` | `Upgrade` to `"upgrade"` · `Downgrade` to `"downgrade"` | `allocationPreviewDirectionSchema` |
| `AllocationPreviewLineItemKind` | `QuantityBasedComponent` to `"quantity_based_component"` · `OnOffComponent` to `"on_off_component"` · `Coupon` to `"coupon"` · `Tax` to `"tax"` | `allocationPreviewLineItemKindSchema` |
| `ApplePayVault` | `BraintreeBlue` to `"braintree_blue"` | `applePayVaultSchema` |
| `AutoInvite` | `_0` to `0` · `_1` to `1` | `autoInviteSchema` |
| `BankAccountHolderType` | `Personal` to `"personal"` · `Business` to `"business"` | `bankAccountHolderTypeSchema` |
| `BankAccountType` | `Checking` to `"checking"` · `Savings` to `"savings"` | `bankAccountTypeSchema` |
| `BankAccountVault` | `Authorizenet` to `"authorizenet"` · `BlueSnap` to `"blue_snap"` · `Bogus` to `"bogus"` · `Forte` to `"forte"` · `Gocardless` to `"gocardless"` · `MaxioPayments` to `"maxio_payments"` · `Maxp` to `"maxp"` · `StripeConnect` to `"stripe_connect"` | `bankAccountVaultSchema` |
| `BasicDateField` | `UpdatedAt` to `"updated_at"` · `CreatedAt` to `"created_at"` | `basicDateFieldSchema` |
| `BillingManifestLineItemKind` | `Baseline` to `"baseline"` · `Initial` to `"initial"` · `Trial` to `"trial"` · `Coupon` to `"coupon"` · `Component` to `"component"` · `Tax` to `"tax"` | `billingManifestLineItemKindSchema` |
| `CancellationMethod` | `MerchantUi` to `"merchant_ui"` · `MerchantApi` to `"merchant_api"` · `Dunning` to `"dunning"` · `BillingPortal` to `"billing_portal"` · `Unknown` to `"unknown"` · `Imported` to `"imported"` | `cancellationMethodSchema` |
| `CardType` | `Visa` to `"visa"` · `Master` to `"master"` · `Elo` to `"elo"` · `Cabal` to `"cabal"` · `Alelo` to `"alelo"` · `Discover` to `"discover"` · `AmericanExpress` to `"american_express"` · `Naranja` to `"naranja"` · `DinersClub` to `"diners_club"` · `Jcb` to `"jcb"` · `Dankort` to `"dankort"` · `Maestro` to `"maestro"` · `MaestroNoLuhn` to `"maestro_no_luhn"` · `Forbrugsforeningen` to `"forbrugsforeningen"` · `Sodexo` to `"sodexo"` · `Alia` to `"alia"` · `Vr` to `"vr"` · `Unionpay` to `"unionpay"` · `Carnet` to `"carnet"` · `CartesBancaires` to `"cartes_bancaires"` · `Olimpica` to `"olimpica"` · `Creditel` to `"creditel"` · `Confiable` to `"confiable"` · `Synchrony` to `"synchrony"` · `Routex` to `"routex"` · `Mada` to `"mada"` · `BpPlus` to `"bp_plus"` · `Passcard` to `"passcard"` · `Edenred` to `"edenred"` · `Anda` to `"anda"` · `TarjetaD` to `"tarjeta-d"` · `Hipercard` to `"hipercard"` · `Bogus` to `"bogus"` · `Switch` to `"switch"` · `Solo` to `"solo"` · `Laser` to `"laser"` | `cardTypeSchema` |
| `ChargebackStatus` | `Open` to `"open"` · `Lost` to `"lost"` · `Won` to `"won"` · `Closed` to `"closed"` | `chargebackStatusSchema` |
| `CleanupScope` | `All` to `"all"` · `Customers` to `"customers"` | `cleanupScopeSchema` |
| `CollectionMethod` | `Automatic` to `"automatic"` · `Remittance` to `"remittance"` · `Prepaid` to `"prepaid"` · `Invoice` to `"invoice"` | `collectionMethodSchema` |
| `ComponentKind` | `MeteredComponent` to `"metered_component"` · `QuantityBasedComponent` to `"quantity_based_component"` · `OnOffComponent` to `"on_off_component"` · `PrepaidUsageComponent` to `"prepaid_usage_component"` · `EventBasedComponent` to `"event_based_component"` | `componentKindSchema` |
| `CompoundingStrategy` | `Compound` to `"compound"` · `FullPrice` to `"full-price"` | `compoundingStrategySchema` |
| `CreateInvoiceStatus` | `Draft` to `"draft"` · `Open` to `"open"` | `createInvoiceStatusSchema` |
| `CreatePrepaymentMethod` | `Check` to `"check"` · `Cash` to `"cash"` · `MoneyOrder` to `"money_order"` · `Ach` to `"ach"` · `PaypalAccount` to `"paypal_account"` · `CreditCard` to `"credit_card"` · `CreditCardOnFile` to `"credit_card_on_file"` · `Other` to `"other"` | `createPrepaymentMethodSchema` |
| `CreateSignupProformaPreviewInclude` | `NextProformaInvoice` to `"next_proforma_invoice"` | `createSignupProformaPreviewIncludeSchema` |
| `CreditCardVault` | `Adyen` to `"adyen"` · `Authorizenet` to `"authorizenet"` · `Beanstream` to `"beanstream"` · `BlueSnap` to `"blue_snap"` · `Bogus` to `"bogus"` · `Braintree1` to `"braintree1"` · `BraintreeBlue` to `"braintree_blue"` · `Checkout` to `"checkout"` · `Cybersource` to `"cybersource"` · `Elavon` to `"elavon"` · `Eway` to `"eway"` · `EwayRapid` to `"eway_rapid"` · `EwayRapidStd` to `"eway_rapid_std"` · `Firstdata` to `"firstdata"` · `Forte` to `"forte"` · `Litle` to `"litle"` · `MaxioPayments` to `"maxio_payments"` · `Maxp` to `"maxp"` · `Moduslink` to `"moduslink"` · `Moneris` to `"moneris"` · `Nmi` to `"nmi"` · `Orbital` to `"orbital"` · `PaymentExpress` to `"payment_express"` · `Paymill` to `"paymill"` · `Paypal` to `"paypal"` · `PaypalComplete` to `"paypal_complete"` · `Pin` to `"pin"` · `Square` to `"square"` · `Stripe` to `"stripe"` · `StripeConnect` to `"stripe_connect"` · `TrustCommerce` to `"trust_commerce"` · `Unipaas` to `"unipaas"` · `Wirecard` to `"wirecard"` | `creditCardVaultSchema` |
| `CreditNoteStatus` | `Open` to `"open"` · `Applied` to `"applied"` | `creditNoteStatusSchema` |
| `CreditScheme` | `None` to `"none"` · `Credit` to `"credit"` · `Refund` to `"refund"` | `creditSchemeSchema` |
| `CreditType` | `Full` to `"full"` · `Prorated` to `"prorated"` · `None` to `"none"` | `creditTypeSchema` |
| `CurrencyPriceRole` | `Baseline` to `"baseline"` · `Trial` to `"trial"` · `Initial` to `"initial"` | `currencyPriceRoleSchema` |
| `CustomFieldOwner` | `Customer` to `"Customer"` · `Subscription` to `"Subscription"` | `customFieldOwnerSchema` |
| `DebitNoteRole` | `Chargeback` to `"chargeback"` · `Refund` to `"refund"` | `debitNoteRoleSchema` |
| `DebitNoteStatus` | `Open` to `"open"` · `Applied` to `"applied"` · `Banished` to `"banished"` · `Paid` to `"paid"` | `debitNoteStatusSchema` |
| `DiscountType` | `Amount` to `"amount"` · `Percent` to `"percent"` | `discountTypeSchema` |
| `DowngradeCreditCreditType` | `Full` to `"full"` · `Prorated` to `"prorated"` · `None` to `"none"` | `downgradeCreditCreditTypeSchema` |
| `EventKey` | `PaymentSuccess` to `"payment_success"` · `PaymentFailure` to `"payment_failure"` · `SignupSuccess` to `"signup_success"` · `SignupFailure` to `"signup_failure"` · `DelayedSignupCreationSuccess` to `"delayed_signup_creation_success"` · `DelayedSignupCreationFailure` to `"delayed_signup_creation_failure"` · `BillingDateChange` to `"billing_date_change"` · `ExpirationDateChange` to `"expiration_date_change"` · `RenewalSuccess` to `"renewal_success"` · `RenewalFailure` to `"renewal_failure"` · `SubscriptionStateChange` to `"subscription_state_change"` · `SubscriptionProductChange` to `"subscription_product_change"` · `SubscriptionProductChangeScheduled` to `"subscription_product_change_scheduled"` · `PendingCancellationChange` to `"pending_cancellation_change"` · `ExpiringCard` to `"expiring_card"` · `CustomerUpdate` to `"customer_update"` · `CustomerCreate` to `"customer_create"` · `CustomerDelete` to `"customer_delete"` · `ComponentAllocationChange` to `"component_allocation_change"` · `MeteredUsage` to `"metered_usage"` · `PrepaidUsage` to `"prepaid_usage"` · `UpgradeDowngradeSuccess` to `"upgrade_downgrade_success"` · `UpgradeDowngradeFailure` to `"upgrade_downgrade_failure"` · `StatementClosed` to `"statement_closed"` · `StatementSettled` to `"statement_settled"` · `SubscriptionCardUpdate` to `"subscription_card_update"` · `SubscriptionGroupCardUpdate` to `"subscription_group_card_update"` · `SubscriptionBankAccountUpdate` to `"subscription_bank_account_update"` · `RefundSuccess` to `"refund_success"` · `RefundFailure` to `"refund_failure"` · `UpcomingRenewalNotice` to `"upcoming_renewal_notice"` · `TrialEndNotice` to `"trial_end_notice"` · `DunningStepReached` to `"dunning_step_reached"` · `InvoiceIssued` to `"invoice_issued"` · `InvoicePending` to `"invoice_pending"` · `PrepaidSubscriptionBalanceChanged` to `"prepaid_subscription_balance_changed"` · `SubscriptionGroupSignupSuccess` to `"subscription_group_signup_success"` · `SubscriptionGroupSignupFailure` to `"subscription_group_signup_failure"` · `DirectDebitPaymentPaidOut` to `"direct_debit_payment_paid_out"` · `DirectDebitPaymentRejected` to `"direct_debit_payment_rejected"` · `DirectDebitPaymentPending` to `"direct_debit_payment_pending"` · `PendingPaymentCreated` to `"pending_payment_created"` · `PendingPaymentFailed` to `"pending_payment_failed"` · `PendingPaymentCompleted` to `"pending_payment_completed"` · `ProformaInvoiceIssued` to `"proforma_invoice_issued"` · `SubscriptionPrepaymentAccountBalanceChanged` to `"subscription_prepayment_account_balance_changed"` · `SubscriptionServiceCreditAccountBalanceChanged` to `"subscription_service_credit_account_balance_changed"` · `CustomFieldValueChange` to `"custom_field_value_change"` · `ItemPricePointChanged` to `"item_price_point_changed"` · `RenewalSuccessRecreated` to `"renewal_success_recreated"` · `RenewalFailureRecreated` to `"renewal_failure_recreated"` · `PaymentSuccessRecreated` to `"payment_success_recreated"` · `PaymentFailureRecreated` to `"payment_failure_recreated"` · `SubscriptionDeletion` to `"subscription_deletion"` · `SubscriptionGroupBankAccountUpdate` to `"subscription_group_bank_account_update"` · `SubscriptionPaypalAccountUpdate` to `"subscription_paypal_account_update"` · `SubscriptionGroupPaypalAccountUpdate` to `"subscription_group_paypal_account_update"` · `SubscriptionCustomerChange` to `"subscription_customer_change"` · `AccountTransactionChanged` to `"account_transaction_changed"` · `GoCardlessPaymentPaidOut` to `"go_cardless_payment_paid_out"` · `GoCardlessPaymentRejected` to `"go_cardless_payment_rejected"` · `GoCardlessPaymentPending` to `"go_cardless_payment_pending"` · `StripeDirectDebitPaymentPaidOut` to `"stripe_direct_debit_payment_paid_out"` · `StripeDirectDebitPaymentRejected` to `"stripe_direct_debit_payment_rejected"` · `StripeDirectDebitPaymentPending` to `"stripe_direct_debit_payment_pending"` · `MaxioPaymentsDirectDebitPaymentPaidOut` to `"maxio_payments_direct_debit_payment_paid_out"` · `MaxioPaymentsDirectDebitPaymentRejected` to `"maxio_payments_direct_debit_payment_rejected"` · `MaxioPaymentsDirectDebitPaymentPending` to `"maxio_payments_direct_debit_payment_pending"` · `InvoiceInCollectionsCanceled` to `"invoice_in_collections_canceled"` · `SubscriptionAddedToGroup` to `"subscription_added_to_group"` · `SubscriptionRemovedFromGroup` to `"subscription_removed_from_group"` · `ChargebackOpened` to `"chargeback_opened"` · `ChargebackLost` to `"chargeback_lost"` · `ChargebackAccepted` to `"chargeback_accepted"` · `ChargebackClosed` to `"chargeback_closed"` · `ChargebackWon` to `"chargeback_won"` · `PaymentCollectionMethodChanged` to `"payment_collection_method_changed"` · `ComponentBillingDateChanged` to `"component_billing_date_changed"` · `ChjsTokenizationFailure` to `"chjs_tokenization_failure"` · `ChjsTokenizationSuccess` to `"chjs_tokenization_success"` · `SubscriptionTermRenewalScheduled` to `"subscription_term_renewal_scheduled"` · `SubscriptionTermRenewalPending` to `"subscription_term_renewal_pending"` · `SubscriptionTermRenewalActivated` to `"subscription_term_renewal_activated"` · `SubscriptionTermRenewalRemoved` to `"subscription_term_renewal_removed"` | `eventKeySchema` |
| `ExpirationIntervalUnit` | `Day` to `"day"` · `Month` to `"month"` · `Never` to `"never"` | `expirationIntervalUnitSchema` |
| `FailedPaymentAction` | `LeaveOpenInvoice` to `"leave_open_invoice"` · `RollbackToPending` to `"rollback_to_pending"` · `InitiateDunning` to `"initiate_dunning"` | `failedPaymentActionSchema` |
| `FirstChargeType` | `Prorated` to `"prorated"` · `Immediate` to `"immediate"` · `Delayed` to `"delayed"` | `firstChargeTypeSchema` |
| `GroupTargetType` | `Customer` to `"customer"` · `Subscription` to `"subscription"` · `Self` to `"self"` · `Parent` to `"parent"` · `Eldest` to `"eldest"` | `groupTargetTypeSchema` |
| `GroupType` | `SingleCustomer` to `"single_customer"` · `MultipleCustomers` to `"multiple_customers"` | `groupTypeSchema` |
| `IncludeNotNull` | `NotNull` to `"not_null"` | `includeNotNullSchema` |
| `IncludeNullOrNotNull` | `NotNull` to `"not_null"` · `Null` to `"null"` | `includeNullOrNotNullSchema` |
| `IncludeOption` | `_0` to `"0"` · `_1` to `"1"` | `includeOptionSchema` |
| `IntervalUnit` | `Day` to `"day"` · `Month` to `"month"` | `intervalUnitSchema` |
| `InvoiceConsolidationLevel` | `None` to `"none"` · `Child` to `"child"` · `Parent` to `"parent"` | `invoiceConsolidationLevelSchema` |
| `InvoiceDateField` | `CreatedAt` to `"created_at"` · `DueDate` to `"due_date"` · `IssueDate` to `"issue_date"` · `UpdatedAt` to `"updated_at"` · `PaidDate` to `"paid_date"` | `invoiceDateFieldSchema` |
| `InvoiceDiscountSourceType` | `Coupon` to `"Coupon"` · `Referral` to `"Referral"` · `AdHocCoupon` to `"Ad Hoc Coupon"` | `invoiceDiscountSourceTypeSchema` |
| `InvoiceDiscountType` | `Percentage` to `"percentage"` · `FlatAmount` to `"flat_amount"` · `Rollover` to `"rollover"` | `invoiceDiscountTypeSchema` |
| `InvoiceEventPaymentMethod` | `ApplePay` to `"apple_pay"` · `BankAccount` to `"bank_account"` · `CreditCard` to `"credit_card"` · `External` to `"external"` · `PaypalAccount` to `"paypal_account"` | `invoiceEventPaymentMethodSchema` |
| `InvoiceEventType` | `IssueInvoice` to `"issue_invoice"` · `ApplyCreditNote` to `"apply_credit_note"` · `CreateCreditNote` to `"create_credit_note"` · `ApplyPayment` to `"apply_payment"` · `ApplyDebitNote` to `"apply_debit_note"` · `CreateDebitNote` to `"create_debit_note"` · `RefundInvoice` to `"refund_invoice"` · `VoidInvoice` to `"void_invoice"` · `VoidRemainder` to `"void_remainder"` · `BackportInvoice` to `"backport_invoice"` · `ChangeInvoiceStatus` to `"change_invoice_status"` · `ChangeInvoiceCollectionMethod` to `"change_invoice_collection_method"` · `RemovePayment` to `"remove_payment"` · `FailedPayment` to `"failed_payment"` · `ChangeChargebackStatus` to `"change_chargeback_status"` | `invoiceEventTypeSchema` |
| `InvoicePaymentMethodType` | `CreditCard` to `"credit_card"` · `Check` to `"check"` · `Cash` to `"cash"` · `MoneyOrder` to `"money_order"` · `Ach` to `"ach"` · `Other` to `"other"` | `invoicePaymentMethodTypeSchema` |
| `InvoicePaymentType` | `External` to `"external"` · `Prepayment` to `"prepayment"` · `ServiceCredit` to `"service_credit"` · `Payment` to `"payment"` | `invoicePaymentTypeSchema` |
| `InvoiceRole` | `Unset` to `"unset"` · `Signup` to `"signup"` · `Renewal` to `"renewal"` · `Usage` to `"usage"` · `Reactivation` to `"reactivation"` · `Proration` to `"proration"` · `Migration` to `"migration"` · `Adhoc` to `"adhoc"` · `Backport` to `"backport"` · `BackportBalanceReconciliation` to `"backport-balance-reconciliation"` | `invoiceRoleSchema` |
| `InvoiceSortField` | `Status` to `"status"` · `TotalAmount` to `"total_amount"` · `DueAmount` to `"due_amount"` · `CreatedAt` to `"created_at"` · `UpdatedAt` to `"updated_at"` · `IssueDate` to `"issue_date"` · `DueDate` to `"due_date"` · `Number` to `"number"` | `invoiceSortFieldSchema` |
| `InvoiceStatus` | `Draft` to `"draft"` · `Open` to `"open"` · `Paid` to `"paid"` · `Pending` to `"pending"` · `Voided` to `"voided"` · `Canceled` to `"canceled"` · `Processing` to `"processing"` | `invoiceStatusSchema` |
| `ItemCategory` | `BusinessSoftware` to `"Business Software"` · `ConsumerSoftware` to `"Consumer Software"` · `DigitalServices` to `"Digital Services"` · `PhysicalGoods` to `"Physical Goods"` · `Other` to `"Other"` | `itemCategorySchema` |
| `LineItemKind` | `Baseline` to `"baseline"` · `Initial` to `"initial"` · `Trial` to `"trial"` · `QuantityBasedComponent` to `"quantity_based_component"` · `PrepaidUsageComponent` to `"prepaid_usage_component"` · `OnOffComponent` to `"on_off_component"` · `MeteredComponent` to `"metered_component"` · `EventBasedComponent` to `"event_based_component"` · `Coupon` to `"coupon"` · `Tax` to `"tax"` | `lineItemKindSchema` |
| `LineItemTransactionType` | `Charge` to `"charge"` · `Credit` to `"credit"` · `Adjustment` to `"adjustment"` · `Payment` to `"payment"` · `Refund` to `"refund"` · `InfoTransaction` to `"info_transaction"` · `PaymentAuthorization` to `"payment_authorization"` | `lineItemTransactionTypeSchema` |
| `ListComponentsPricePointsInclude` | `CurrencyPrices` to `"currency_prices"` | `listComponentsPricePointsIncludeSchema` |
| `ListEventsDateField` | `CreatedAt` to `"created_at"` | `listEventsDateFieldSchema` |
| `ListPrepaymentDateField` | `CreatedAt` to `"created_at"` · `ApplicationAt` to `"application_at"` | `listPrepaymentDateFieldSchema` |
| `ListProductsInclude` | `PrepaidProductPricePoint` to `"prepaid_product_price_point"` | `listProductsIncludeSchema` |
| `ListProductsPricePointsInclude` | `CurrencyPrices` to `"currency_prices"` | `listProductsPricePointsIncludeSchema` |
| `ListSubscriptionComponentsInclude` | `Subscription` to `"subscription"` · `HistoricUsages` to `"historic_usages"` | `listSubscriptionComponentsIncludeSchema` |
| `ListSubscriptionComponentsSort` | `Id` to `"id"` · `UpdatedAt` to `"updated_at"` | `listSubscriptionComponentsSortSchema` |
| `MetafieldInput` | `BalanceTracker` to `"balance_tracker"` · `Text` to `"text"` · `Radio` to `"radio"` · `Dropdown` to `"dropdown"` | `metafieldInputSchema` |
| `PayPalVault` | `BraintreeBlue` to `"braintree_blue"` · `Paypal` to `"paypal"` · `Moduslink` to `"moduslink"` · `PaypalComplete` to `"paypal_complete"` | `payPalVaultSchema` |
| `PaymentType` | `CreditCard` to `"credit_card"` · `BankAccount` to `"bank_account"` · `PaypalAccount` to `"paypal_account"` · `ApplePay` to `"apple_pay"` | `paymentTypeSchema` |
| `PrepaymentMethod` | `Check` to `"check"` · `Cash` to `"cash"` · `MoneyOrder` to `"money_order"` · `Ach` to `"ach"` · `PaypalAccount` to `"paypal_account"` · `CreditCard` to `"credit_card"` · `Other` to `"other"` | `prepaymentMethodSchema` |
| `PricePointType` | `Catalog` to `"catalog"` · `Default` to `"default"` · `Custom` to `"custom"` | `pricePointTypeSchema` |
| `PricingScheme` | `Stairstep` to `"stairstep"` · `Volume` to `"volume"` · `PerUnit` to `"per_unit"` · `Tiered` to `"tiered"` | `pricingSchemeSchema` |
| `ProformaInvoiceDiscountSourceType` | `Coupon` to `"Coupon"` · `Referral` to `"Referral"` | `proformaInvoiceDiscountSourceTypeSchema` |
| `ProformaInvoiceRole` | `Unset` to `"unset"` · `Proforma` to `"proforma"` · `ProformaAdhoc` to `"proforma_adhoc"` · `ProformaAutomatic` to `"proforma_automatic"` | `proformaInvoiceRoleSchema` |
| `ProformaInvoiceStatus` | `Draft` to `"draft"` · `Voided` to `"voided"` · `Archived` to `"archived"` | `proformaInvoiceStatusSchema` |
| `ProformaInvoiceTaxSourceType` | `Tax` to `"Tax"` · `Avalara` to `"Avalara"` | `proformaInvoiceTaxSourceTypeSchema` |
| `ReactivationCharge` | `Prorated` to `"prorated"` · `Immediate` to `"immediate"` · `Delayed` to `"delayed"` | `reactivationChargeSchema` |
| `RecurringScheme` | `DoNotRecur` to `"do_not_recur"` · `RecurIndefinitely` to `"recur_indefinitely"` · `RecurWithDuration` to `"recur_with_duration"` | `recurringSchemeSchema` |
| `ResourceType` | `Subscriptions` to `"subscriptions"` · `Customers` to `"customers"` | `resourceTypeSchema` |
| `RestrictionType` | `Component` to `"Component"` · `Product` to `"Product"` | `restrictionTypeSchema` |
| `ResumptionCharge` | `Prorated` to `"prorated"` · `Immediate` to `"immediate"` · `Delayed` to `"delayed"` | `resumptionChargeSchema` |
| `ServiceCreditType` | `Credit` to `"Credit"` · `Debit` to `"Debit"` | `serviceCreditTypeSchema` |
| `SortingDirection` | `Asc` to `"asc"` · `Desc` to `"desc"` | `sortingDirectionSchema` |
| `SubscriptionDateField` | `CurrentPeriodEndsAt` to `"current_period_ends_at"` · `CurrentPeriodStartsAt` to `"current_period_starts_at"` · `CreatedAt` to `"created_at"` · `ActivatedAt` to `"activated_at"` · `CanceledAt` to `"canceled_at"` · `ExpiresAt` to `"expires_at"` · `TrialStartedAt` to `"trial_started_at"` · `TrialEndedAt` to `"trial_ended_at"` · `UpdatedAt` to `"updated_at"` | `subscriptionDateFieldSchema` |
| `SubscriptionGroupInclude` | `CurrentBillingAmountInCents` to `"current_billing_amount_in_cents"` | `subscriptionGroupIncludeSchema` |
| `SubscriptionGroupPrepaymentMethod` | `Check` to `"check"` · `Cash` to `"cash"` · `MoneyOrder` to `"money_order"` · `Ach` to `"ach"` · `PaypalAccount` to `"paypal_account"` · `Other` to `"other"` | `subscriptionGroupPrepaymentMethodSchema` |
| `SubscriptionGroupsListInclude` | `AccountBalances` to `"account_balances"` | `subscriptionGroupsListIncludeSchema` |
| `SubscriptionInclude` | `Coupons` to `"coupons"` · `SelfServicePageToken` to `"self_service_page_token"` | `subscriptionIncludeSchema` |
| `SubscriptionListDateField` | `UpdatedAt` to `"updated_at"` | `subscriptionListDateFieldSchema` |
| `SubscriptionListInclude` | `SelfServicePageToken` to `"self_service_page_token"` | `subscriptionListIncludeSchema` |
| `SubscriptionPurgeType` | `Customer` to `"customer"` · `PaymentProfile` to `"payment_profile"` | `subscriptionPurgeTypeSchema` |
| `SubscriptionSort` | `SignupDate` to `"signup_date"` · `PeriodStart` to `"period_start"` · `PeriodEnd` to `"period_end"` · `NextAssessment` to `"next_assessment"` · `UpdatedAt` to `"updated_at"` · `CreatedAt` to `"created_at"` · `TotalPayments` to `"total_payments"` · `Id` to `"id"` · `OpenBalance` to `"open_balance"` · `ExpiresAt` to `"expires_at"` | `subscriptionSortSchema` |
| `SubscriptionState` | `Pending` to `"pending"` · `FailedToCreate` to `"failed_to_create"` · `Trialing` to `"trialing"` · `Assessing` to `"assessing"` · `Active` to `"active"` · `SoftFailure` to `"soft_failure"` · `PastDue` to `"past_due"` · `Suspended` to `"suspended"` · `Canceled` to `"canceled"` · `Expired` to `"expired"` · `Paused` to `"paused"` · `Unpaid` to `"unpaid"` · `TrialEnded` to `"trial_ended"` · `OnHold` to `"on_hold"` · `AwaitingSignup` to `"awaiting_signup"` | `subscriptionStateSchema` |
| `SubscriptionStateFilter` | `Active` to `"active"` · `Canceled` to `"canceled"` · `Expired` to `"expired"` · `ExpiredCards` to `"expired_cards"` · `OnHold` to `"on_hold"` · `PastDue` to `"past_due"` · `PendingCancellation` to `"pending_cancellation"` · `PendingRenewal` to `"pending_renewal"` · `Suspended` to `"suspended"` · `TrialEnded` to `"trial_ended"` · `Trialing` to `"trialing"` · `Unpaid` to `"unpaid"` | `subscriptionStateFilterSchema` |
| `TaxConfigurationKind` | `Custom` to `"custom"` · `ManagedAvalara` to `"managed avalara"` · `LinkedAvalara` to `"linked avalara"` · `DigitalRiver` to `"digital river"` | `taxConfigurationKindSchema` |
| `TaxDestinationAddress` | `ShippingThenBilling` to `"shipping_then_billing"` · `BillingThenShipping` to `"billing_then_shipping"` · `ShippingOnly` to `"shipping_only"` · `BillingOnly` to `"billing_only"` | `taxDestinationAddressSchema` |
| `TrialType` | `NoObligation` to `"no_obligation"` · `PaymentExpected` to `"payment_expected"` | `trialTypeSchema` |
| `UpgradeChargeCreditType` | `Full` to `"full"` · `Prorated` to `"prorated"` · `None` to `"none"` | `upgradeChargeCreditTypeSchema` |
| `WebhookOrder` | `NewestFirst` to `"newest_first"` · `OldestFirst` to `"oldest_first"` | `webhookOrderSchema` |
| `WebhookStatus` | `Successful` to `"successful"` · `Failed` to `"failed"` · `Pending` to `"pending"` · `Paused` to `"paused"` | `webhookStatusSchema` |
| `WebhookSubscription` | `BillingDateChange` to `"billing_date_change"` · `ComponentAllocationChange` to `"component_allocation_change"` · `ChjsTokenizationFailure` to `"chjs_tokenization_failure"` · `ChjsTokenizationSuccess` to `"chjs_tokenization_success"` · `CustomerCreate` to `"customer_create"` · `CustomerUpdate` to `"customer_update"` · `DunningStepReached` to `"dunning_step_reached"` · `ExpiringCard` to `"expiring_card"` · `ExpirationDateChange` to `"expiration_date_change"` · `InvoiceIssued` to `"invoice_issued"` · `InvoicePending` to `"invoice_pending"` · `MeteredUsage` to `"metered_usage"` · `PaymentFailure` to `"payment_failure"` · `PaymentSuccess` to `"payment_success"` · `DirectDebitPaymentPending` to `"direct_debit_payment_pending"` · `DirectDebitPaymentPaidOut` to `"direct_debit_payment_paid_out"` · `DirectDebitPaymentRejected` to `"direct_debit_payment_rejected"` · `PrepaidSubscriptionBalanceChanged` to `"prepaid_subscription_balance_changed"` · `PrepaidUsage` to `"prepaid_usage"` · `RefundFailure` to `"refund_failure"` · `RefundSuccess` to `"refund_success"` · `RenewalFailure` to `"renewal_failure"` · `RenewalSuccess` to `"renewal_success"` · `SignupFailure` to `"signup_failure"` · `SignupSuccess` to `"signup_success"` · `StatementClosed` to `"statement_closed"` · `StatementSettled` to `"statement_settled"` · `SubscriptionCardUpdate` to `"subscription_card_update"` · `SubscriptionGroupCardUpdate` to `"subscription_group_card_update"` · `SubscriptionProductChange` to `"subscription_product_change"` · `SubscriptionProductChangeScheduled` to `"subscription_product_change_scheduled"` · `SubscriptionStateChange` to `"subscription_state_change"` · `TrialEndNotice` to `"trial_end_notice"` · `UpcomingRenewalNotice` to `"upcoming_renewal_notice"` · `UpgradeDowngradeFailure` to `"upgrade_downgrade_failure"` · `UpgradeDowngradeSuccess` to `"upgrade_downgrade_success"` · `PendingCancellationChange` to `"pending_cancellation_change"` · `SubscriptionPrepaymentAccountBalanceChanged` to `"subscription_prepayment_account_balance_changed"` · `SubscriptionServiceCreditAccountBalanceChanged` to `"subscription_service_credit_account_balance_changed"` | `webhookSubscriptionSchema` |
| `Direction` | `Asc` to `"asc"` · `Desc` to `"desc"` | `directionSchema` |
| `Status` | `Draft` to `"draft"` · `Scheduled` to `"scheduled"` · `Pending` to `"pending"` · `Canceled` to `"canceled"` · `Active` to `"active"` · `Fulfilled` to `"fulfilled"` | `statusSchema` |

**Unions.** A discriminated union is narrowed with an exhaustive `switch` on its tag, with no fallback arm and no type guard to import. One without a discriminant is narrowed on the shape of its arms.

| Union | Variants | Narrow with | Source |
| --- | --- | --- | --- |
| `AllocatedQuantity` | no discriminant | `typeof`, or an `in` check | `src/models/unions/allocated-quantity.ts` |
| `AllocatedQuantity1` | no discriminant | `typeof`, or an `in` check | `src/models/unions/allocated-quantity1.ts` |
| `AllocatedQuantity2` | no discriminant | `typeof`, or an `in` check | `src/models/unions/allocated-quantity2.ts` |
| `AllocatedQuantity3` | no discriminant | `typeof`, or an `in` check | `src/models/unions/allocated-quantity3.ts` |
| `Amount` | no discriminant | `typeof`, or an `in` check | `src/models/unions/amount.ts` |
| `Amount1` | no discriminant | `typeof`, or an `in` check | `src/models/unions/amount1.ts` |
| `Amount2` | no discriminant | `typeof`, or an `in` check | `src/models/unions/amount2.ts` |
| `Amount3` | no discriminant | `typeof`, or an `in` check | `src/models/unions/amount3.ts` |
| `Amount5` | no discriminant | `typeof`, or an `in` check | `src/models/unions/amount5.ts` |
| `CancelSubscriptionErrorResponse` | no discriminant | `typeof`, or an `in` check | `src/models/unions/cancel-subscription-error-response.ts` |
| `ComponentId` | no discriminant | `typeof`, or an `in` check | `src/models/unions/component-id.ts` |
| `ComponentId1` | no discriminant | `typeof`, or an `in` check | `src/models/unions/component-id1.ts` |
| `ComponentId2` | no discriminant | `typeof`, or an `in` check | `src/models/unions/component-id2.ts` |
| `ComponentId3` | no discriminant | `typeof`, or an `in` check | `src/models/unions/component-id3.ts` |
| `CreatePrepaymentErrorResponse` | no discriminant | `typeof`, or an `in` check | `src/models/unions/create-prepayment-error-response.ts` |
| `DeductServiceCreditErrorResponse` | no discriminant | `typeof`, or an `in` check | `src/models/unions/deduct-service-credit-error-response.ts` |
| `EndingQuantity` | no discriminant | `typeof`, or an `in` check | `src/models/unions/ending-quantity.ts` |
| `Enum` | no discriminant | `typeof`, or an `in` check | `src/models/unions/enum.ts` |
| `Errors1` | no discriminant | `typeof`, or an `in` check | `src/models/unions/errors1.ts` |
| `Errors11` | no discriminant | `typeof`, or an `in` check | `src/models/unions/errors11.ts` |
| `EventSpecificData` | no discriminant | `typeof`, or an `in` check | `src/models/unions/event-specific-data.ts` |
| `ExpirationInterval` | no discriminant | `typeof`, or an `in` check | `src/models/unions/expiration-interval.ts` |
| `ExpirationMonth` | no discriminant | `typeof`, or an `in` check | `src/models/unions/expiration-month.ts` |
| `ExpirationMonth1` | no discriminant | `typeof`, or an `in` check | `src/models/unions/expiration-month1.ts` |
| `ExpirationMonth2` | no discriminant | `typeof`, or an `in` check | `src/models/unions/expiration-month2.ts` |
| `ExpirationYear` | no discriminant | `typeof`, or an `in` check | `src/models/unions/expiration-year.ts` |
| `ExpirationYear1` | no discriminant | `typeof`, or an `in` check | `src/models/unions/expiration-year1.ts` |
| `ExpirationYear2` | no discriminant | `typeof`, or an `in` check | `src/models/unions/expiration-year2.ts` |
| `FullNumber` | no discriminant | `typeof`, or an `in` check | `src/models/unions/full-number.ts` |
| `InitialChargeInCents` | no discriminant | `typeof`, or an `in` check | `src/models/unions/initial-charge-in-cents.ts` |
| `Interval` | no discriminant | `typeof`, or an `in` check | `src/models/unions/interval.ts` |
| `InvoiceEvent` | no discriminant | `typeof`, or an `in` check | `src/models/unions/invoice-event.ts` |
| `InvoiceEventPayment` | no discriminant | `typeof`, or an `in` check | `src/models/unions/invoice-event-payment.ts` |
| `InvoiceEventPayment1` | no discriminant | `typeof`, or an `in` check | `src/models/unions/invoice-event-payment1.ts` |
| `InvoiceEvent1` | no discriminant | `typeof`, or an `in` check | `src/models/unions/invoice-event1.ts` |
| `IssueServiceCreditErrorResponse` | no discriminant | `typeof`, or an `in` check | `src/models/unions/issue-service-credit-error-response.ts` |
| `Metafields` | no discriminant | `typeof`, or an `in` check | `src/models/unions/metafields.ts` |
| `Metafields1` | no discriminant | `typeof`, or an `in` check | `src/models/unions/metafields1.ts` |
| `NetTerms1` | no discriminant | `typeof`, or an `in` check | `src/models/unions/net-terms1.ts` |
| `OfferId` | no discriminant | `typeof`, or an `in` check | `src/models/unions/offer-id.ts` |
| `PaymentProfile` | no discriminant | `typeof`, or an `in` check | `src/models/unions/payment-profile.ts` |
| `PaymentProfile1` | no discriminant | `typeof`, or an `in` check | `src/models/unions/payment-profile1.ts` |
| `Percentage` | no discriminant | `typeof`, or an `in` check | `src/models/unions/percentage.ts` |
| `Percentage1` | no discriminant | `typeof`, or an `in` check | `src/models/unions/percentage1.ts` |
| `PrepaidConfigurationErrorResponse` | no discriminant | `typeof`, or an `in` check | `src/models/unions/prepaid-configuration-error-response.ts` |
| `PreviousQuantity` | no discriminant | `typeof`, or an `in` check | `src/models/unions/previous-quantity.ts` |
| `PreviousQuantity1` | no discriminant | `typeof`, or an `in` check | `src/models/unions/previous-quantity1.ts` |
| `PriceInCents` | no discriminant | `typeof`, or an `in` check | `src/models/unions/price-in-cents.ts` |
| `PricePoint` | no discriminant | `typeof`, or an `in` check | `src/models/unions/price-point.ts` |
| `PricePoint2` | no discriminant | `typeof`, or an `in` check | `src/models/unions/price-point2.ts` |
| `PricePointId` | no discriminant | `typeof`, or an `in` check | `src/models/unions/price-point-id.ts` |
| `PricePointId1` | no discriminant | `typeof`, or an `in` check | `src/models/unions/price-point-id1.ts` |
| `PricePointId2` | no discriminant | `typeof`, or an `in` check | `src/models/unions/price-point-id2.ts` |
| `PricePointId3` | no discriminant | `typeof`, or an `in` check | `src/models/unions/price-point-id3.ts` |
| `PricePointId4` | no discriminant | `typeof`, or an `in` check | `src/models/unions/price-point-id4.ts` |
| `ProductFamilyId` | no discriminant | `typeof`, or an `in` check | `src/models/unions/product-family-id.ts` |
| `ProductId` | no discriminant | `typeof`, or an `in` check | `src/models/unions/product-id.ts` |
| `ProductPricePointId` | no discriminant | `typeof`, or an `in` check | `src/models/unions/product-price-point-id.ts` |
| `Quantity` | no discriminant | `typeof`, or an `in` check | `src/models/unions/quantity.ts` |
| `Quantity1` | no discriminant | `typeof`, or an `in` check | `src/models/unions/quantity1.ts` |
| `Quantity3` | no discriminant | `typeof`, or an `in` check | `src/models/unions/quantity3.ts` |
| `Refund` | no discriminant | `typeof`, or an `in` check | `src/models/unions/refund.ts` |
| `RefundPrepaymentErrorResponse` | no discriminant | `typeof`, or an `in` check | `src/models/unions/refund-prepayment-error-response.ts` |
| `RenewalConfigurationItem` | no discriminant | `typeof`, or an `in` check | `src/models/unions/renewal-configuration-item.ts` |
| `Resume` | no discriminant | `typeof`, or an `in` check | `src/models/unions/resume.ts` |
| `SegmentProperty1Value` | no discriminant | `typeof`, or an `in` check | `src/models/unions/segment-property1-value.ts` |
| `SegmentProperty1Value1` | no discriminant | `typeof`, or an `in` check | `src/models/unions/segment-property1-value1.ts` |
| `SegmentProperty2Value` | no discriminant | `typeof`, or an `in` check | `src/models/unions/segment-property2-value.ts` |
| `SegmentProperty2Value1` | no discriminant | `typeof`, or an `in` check | `src/models/unions/segment-property2-value1.ts` |
| `SegmentProperty3Value` | no discriminant | `typeof`, or an `in` check | `src/models/unions/segment-property3-value.ts` |
| `SegmentProperty3Value1` | no discriminant | `typeof`, or an `in` check | `src/models/unions/segment-property3-value1.ts` |
| `SegmentProperty4Value` | no discriminant | `typeof`, or an `in` check | `src/models/unions/segment-property4-value.ts` |
| `SegmentProperty4Value1` | no discriminant | `typeof`, or an `in` check | `src/models/unions/segment-property4-value1.ts` |
| `SegmentUids` | no discriminant | `typeof`, or an `in` check | `src/models/unions/segment-uids.ts` |
| `SnapDay` | no discriminant | `typeof`, or an `in` check | `src/models/unions/snap-day.ts` |
| `SnapDay1` | no discriminant | `typeof`, or an `in` check | `src/models/unions/snap-day1.ts` |
| `StartingQuantity` | no discriminant | `typeof`, or an `in` check | `src/models/unions/starting-quantity.ts` |
| `TrialInterval` | no discriminant | `typeof`, or an `in` check | `src/models/unions/trial-interval.ts` |
| `TrialPriceInCents` | no discriminant | `typeof`, or an `in` check | `src/models/unions/trial-price-in-cents.ts` |
| `UnitBalance` | no discriminant | `typeof`, or an `in` check | `src/models/unions/unit-balance.ts` |
| `UnitPrice` | no discriminant | `typeof`, or an `in` check | `src/models/unions/unit-price.ts` |
| `UnitPrice1` | no discriminant | `typeof`, or an `in` check | `src/models/unions/unit-price1.ts` |
| `UnitPrice3` | no discriminant | `typeof`, or an `in` check | `src/models/unions/unit-price3.ts` |
| `UnitPrice5` | no discriminant | `typeof`, or an `in` check | `src/models/unions/unit-price5.ts` |
| `UnitPrice7` | no discriminant | `typeof`, or an `in` check | `src/models/unions/unit-price7.ts` |
| `UnitPrice8` | no discriminant | `typeof`, or an `in` check | `src/models/unions/unit-price8.ts` |
| `ComponentIdModel` | no discriminant | `typeof`, or an `in` check | `src/models/unions/component-id-model.ts` |
| `PricePointIdModel` | no discriminant | `typeof`, or an `in` check | `src/models/unions/price-point-id-model.ts` |
| `ProductIdModel` | no discriminant | `typeof`, or an `in` check | `src/models/unions/product-id-model.ts` |
| `SubscriptionIdOrReference` | no discriminant | `typeof`, or an `in` check | `src/models/unions/subscription-id-or-reference.ts` |

**Wire-name divergences.** Only these model properties are sent and received under a different name; every other property uses its TypeScript name verbatim.

| Type | Property | Wire key |
| --- | --- | --- |
| `AchAgreement` | `agreementTerms` | `agreement_terms` |
| `AchAgreement` | `authorizerFirstName` | `authorizer_first_name` |
| `AchAgreement` | `authorizerLastName` | `authorizer_last_name` |
| `AchAgreement` | `ipAddress` | `ip_address` |
| `AccountBalance` | `balanceInCents` | `balance_in_cents` |
| `AccountBalance` | `automaticBalanceInCents` | `automatic_balance_in_cents` |
| `AccountBalance` | `remittanceBalanceInCents` | `remittance_balance_in_cents` |
| `AccountBalances` | `openInvoices` | `open_invoices` |
| `AccountBalances` | `pendingInvoices` | `pending_invoices` |
| `AccountBalances` | `pendingDiscounts` | `pending_discounts` |
| `AccountBalances` | `serviceCredits` | `service_credits` |
| `ActivateEventBasedComponent` | `pricePointId` | `price_point_id` |
| `ActivateEventBasedComponent` | `billingSchedule` | `billing_schedule` |
| `ActivateEventBasedComponent` | `customPrice` | `custom_price` |
| `ActivateSubscriptionRequest` | `revertOnFailure` | `revert_on_failure` |
| `AgreementAcceptance` | `ipAddress` | `ip_address` |
| `AgreementAcceptance` | `termsUrl` | `terms_url` |
| `AgreementAcceptance` | `privacyPolicyUrl` | `privacy_policy_url` |
| `AgreementAcceptance` | `returnRefundPolicyUrl` | `return_refund_policy_url` |
| `AgreementAcceptance` | `deliveryPolicyUrl` | `delivery_policy_url` |
| `AgreementAcceptance` | `secureCheckoutPolicyUrl` | `secure_checkout_policy_url` |
| `AllocateComponents` | `prorationUpgradeScheme` | `proration_upgrade_scheme` |
| `AllocateComponents` | `prorationDowngradeScheme` | `proration_downgrade_scheme` |
| `AllocateComponents` | `accrueCharge` | `accrue_charge` |
| `AllocateComponents` | `upgradeCharge` | `upgrade_charge` |
| `AllocateComponents` | `downgradeCredit` | `downgrade_credit` |
| `AllocateComponents` | `paymentCollectionMethod` | `payment_collection_method` |
| `AllocateComponents` | `initiateDunning` | `initiate_dunning` |
| `Allocation` | `allocationId` | `allocation_id` |
| `Allocation` | `componentId` | `component_id` |
| `Allocation` | `componentHandle` | `component_handle` |
| `Allocation` | `subscriptionId` | `subscription_id` |
| `Allocation` | `previousQuantity` | `previous_quantity` |
| `Allocation` | `createdAt` | `created_at` |
| `Allocation` | `prorationUpgradeScheme` | `proration_upgrade_scheme` |
| `Allocation` | `prorationDowngradeScheme` | `proration_downgrade_scheme` |
| `Allocation` | `pricePointId` | `price_point_id` |
| `Allocation` | `pricePointName` | `price_point_name` |
| `Allocation` | `pricePointHandle` | `price_point_handle` |
| `Allocation` | `intervalUnit` | `interval_unit` |
| `Allocation` | `previousPricePointId` | `previous_price_point_id` |
| `Allocation` | `accrueCharge` | `accrue_charge` |
| `Allocation` | `initiateDunning` | `initiate_dunning` |
| `Allocation` | `upgradeCharge` | `upgrade_charge` |
| `Allocation` | `downgradeCredit` | `downgrade_credit` |
| `Allocation` | `expiresAt` | `expires_at` |
| `Allocation` | `usedQuantity` | `used_quantity` |
| `Allocation` | `chargeId` | `charge_id` |
| `AllocationExpirationDate` | `expiresAt` | `expires_at` |
| `AllocationPreview` | `startDate` | `start_date` |
| `AllocationPreview` | `endDate` | `end_date` |
| `AllocationPreview` | `subtotalInCents` | `subtotal_in_cents` |
| `AllocationPreview` | `totalTaxInCents` | `total_tax_in_cents` |
| `AllocationPreview` | `totalDiscountInCents` | `total_discount_in_cents` |
| `AllocationPreview` | `totalInCents` | `total_in_cents` |
| `AllocationPreview` | `prorationScheme` | `proration_scheme` |
| `AllocationPreview` | `lineItems` | `line_items` |
| `AllocationPreview` | `accrueCharge` | `accrue_charge` |
| `AllocationPreview` | `periodType` | `period_type` |
| `AllocationPreview` | `existingBalanceInCents` | `existing_balance_in_cents` |
| `AllocationPreviewItem` | `componentId` | `component_id` |
| `AllocationPreviewItem` | `subscriptionId` | `subscription_id` |
| `AllocationPreviewItem` | `previousQuantity` | `previous_quantity` |
| `AllocationPreviewItem` | `prorationUpgradeScheme` | `proration_upgrade_scheme` |
| `AllocationPreviewItem` | `prorationDowngradeScheme` | `proration_downgrade_scheme` |
| `AllocationPreviewItem` | `accrueCharge` | `accrue_charge` |
| `AllocationPreviewItem` | `upgradeCharge` | `upgrade_charge` |
| `AllocationPreviewItem` | `downgradeCredit` | `downgrade_credit` |
| `AllocationPreviewItem` | `pricePointId` | `price_point_id` |
| `AllocationPreviewItem` | `intervalUnit` | `interval_unit` |
| `AllocationPreviewItem` | `previousPricePointId` | `previous_price_point_id` |
| `AllocationPreviewItem` | `pricePointHandle` | `price_point_handle` |
| `AllocationPreviewItem` | `pricePointName` | `price_point_name` |
| `AllocationPreviewItem` | `componentHandle` | `component_handle` |
| `AllocationPreviewLineItem` | `transactionType` | `transaction_type` |
| `AllocationPreviewLineItem` | `amountInCents` | `amount_in_cents` |
| `AllocationPreviewLineItem` | `discountAmountInCents` | `discount_amount_in_cents` |
| `AllocationPreviewLineItem` | `taxableAmountInCents` | `taxable_amount_in_cents` |
| `AllocationPreviewLineItem` | `componentId` | `component_id` |
| `AllocationPreviewLineItem` | `componentHandle` | `component_handle` |
| `AllocationPreviewResponse` | `allocationPreview` | `allocation_preview` |
| `AllocationSettings` | `upgradeCharge` | `upgrade_charge` |
| `AllocationSettings` | `downgradeCredit` | `downgrade_credit` |
| `AllocationSettings` | `accrueCharge` | `accrue_charge` |
| `ApplePayPaymentProfile` | `firstName` | `first_name` |
| `ApplePayPaymentProfile` | `lastName` | `last_name` |
| `ApplePayPaymentProfile` | `customerId` | `customer_id` |
| `ApplePayPaymentProfile` | `currentVault` | `current_vault` |
| `ApplePayPaymentProfile` | `vaultToken` | `vault_token` |
| `ApplePayPaymentProfile` | `billingAddress` | `billing_address` |
| `ApplePayPaymentProfile` | `billingCity` | `billing_city` |
| `ApplePayPaymentProfile` | `billingState` | `billing_state` |
| `ApplePayPaymentProfile` | `billingZip` | `billing_zip` |
| `ApplePayPaymentProfile` | `billingCountry` | `billing_country` |
| `ApplePayPaymentProfile` | `customerVaultToken` | `customer_vault_token` |
| `ApplePayPaymentProfile` | `billingAddress2` | `billing_address_2` |
| `ApplePayPaymentProfile` | `paymentType` | `payment_type` |
| `ApplePayPaymentProfile` | `siteGatewaySettingId` | `site_gateway_setting_id` |
| `ApplePayPaymentProfile` | `gatewayHandle` | `gateway_handle` |
| `ApplePayPaymentProfile` | `createdAt` | `created_at` |
| `ApplePayPaymentProfile` | `updatedAt` | `updated_at` |
| `ApplyCreditNoteEvent` | `eventType` | `event_type` |
| `ApplyCreditNoteEvent` | `eventData` | `event_data` |
| `ApplyCreditNoteEventData` | `creditNoteNumber` | `credit_note_number` |
| `ApplyCreditNoteEventData` | `creditNoteUid` | `credit_note_uid` |
| `ApplyCreditNoteEventData` | `originalAmount` | `original_amount` |
| `ApplyCreditNoteEventData` | `appliedAmount` | `applied_amount` |
| `ApplyCreditNoteEventData` | `transactionTime` | `transaction_time` |
| `ApplyCreditNoteEventData` | `consolidatedInvoice` | `consolidated_invoice` |
| `ApplyCreditNoteEventData` | `appliedCreditNotes` | `applied_credit_notes` |
| `ApplyDebitNoteEvent` | `eventType` | `event_type` |
| `ApplyDebitNoteEvent` | `eventData` | `event_data` |
| `ApplyDebitNoteEventData` | `debitNoteNumber` | `debit_note_number` |
| `ApplyDebitNoteEventData` | `debitNoteUid` | `debit_note_uid` |
| `ApplyDebitNoteEventData` | `originalAmount` | `original_amount` |
| `ApplyDebitNoteEventData` | `appliedAmount` | `applied_amount` |
| `ApplyDebitNoteEventData` | `transactionTime` | `transaction_time` |
| `ApplyPaymentEvent` | `eventType` | `event_type` |
| `ApplyPaymentEvent` | `eventData` | `event_data` |
| `ApplyPaymentEventData` | `consolidationLevel` | `consolidation_level` |
| `ApplyPaymentEventData` | `originalAmount` | `original_amount` |
| `ApplyPaymentEventData` | `appliedAmount` | `applied_amount` |
| `ApplyPaymentEventData` | `transactionTime` | `transaction_time` |
| `ApplyPaymentEventData` | `paymentMethod` | `payment_method` |
| `ApplyPaymentEventData` | `transactionId` | `transaction_id` |
| `ApplyPaymentEventData` | `parentInvoiceNumber` | `parent_invoice_number` |
| `ApplyPaymentEventData` | `remainingPrepaymentAmount` | `remaining_prepayment_amount` |
| `AutoResume` | `automaticallyResumeAt` | `automatically_resume_at` |
| `AvailableActions` | `sendEmail` | `send_email` |
| `BackportInvoiceEvent` | `eventType` | `event_type` |
| `BackportInvoiceEvent` | `eventData` | `event_data` |
| `BankAccountAttributes` | `chargifyToken` | `chargify_token` |
| `BankAccountAttributes` | `bankName` | `bank_name` |
| `BankAccountAttributes` | `bankRoutingNumber` | `bank_routing_number` |
| `BankAccountAttributes` | `bankAccountNumber` | `bank_account_number` |
| `BankAccountAttributes` | `bankAccountType` | `bank_account_type` |
| `BankAccountAttributes` | `bankBranchCode` | `bank_branch_code` |
| `BankAccountAttributes` | `bankIban` | `bank_iban` |
| `BankAccountAttributes` | `bankAccountHolderType` | `bank_account_holder_type` |
| `BankAccountAttributes` | `paymentType` | `payment_type` |
| `BankAccountAttributes` | `currentVault` | `current_vault` |
| `BankAccountAttributes` | `vaultToken` | `vault_token` |
| `BankAccountAttributes` | `customerVaultToken` | `customer_vault_token` |
| `BankAccountPaymentProfile` | `firstName` | `first_name` |
| `BankAccountPaymentProfile` | `lastName` | `last_name` |
| `BankAccountPaymentProfile` | `customerId` | `customer_id` |
| `BankAccountPaymentProfile` | `currentVault` | `current_vault` |
| `BankAccountPaymentProfile` | `vaultToken` | `vault_token` |
| `BankAccountPaymentProfile` | `billingAddress` | `billing_address` |
| `BankAccountPaymentProfile` | `billingCity` | `billing_city` |
| `BankAccountPaymentProfile` | `billingState` | `billing_state` |
| `BankAccountPaymentProfile` | `billingZip` | `billing_zip` |
| `BankAccountPaymentProfile` | `billingCountry` | `billing_country` |
| `BankAccountPaymentProfile` | `customerVaultToken` | `customer_vault_token` |
| `BankAccountPaymentProfile` | `billingAddress2` | `billing_address_2` |
| `BankAccountPaymentProfile` | `bankName` | `bank_name` |
| `BankAccountPaymentProfile` | `maskedBankRoutingNumber` | `masked_bank_routing_number` |
| `BankAccountPaymentProfile` | `bankAccountType` | `bank_account_type` |
| `BankAccountPaymentProfile` | `bankAccountHolderType` | `bank_account_holder_type` |
| `BankAccountPaymentProfile` | `paymentType` | `payment_type` |
| `BankAccountPaymentProfile` | `siteGatewaySettingId` | `site_gateway_setting_id` |
| `BankAccountPaymentProfile` | `gatewayHandle` | `gateway_handle` |
| `BankAccountPaymentProfile` | `createdAt` | `created_at` |
| `BankAccountPaymentProfile` | `updatedAt` | `updated_at` |
| `BankAccountResponse` | `paymentProfile` | `payment_profile` |
| `BankAccountVerification` | `deposit1InCents` | `deposit_1_in_cents` |
| `BankAccountVerification` | `deposit2InCents` | `deposit_2_in_cents` |
| `BankAccountVerificationRequest` | `bankAccountVerification` | `bank_account_verification` |
| `BatchJob` | `finishedAt` | `finished_at` |
| `BatchJob` | `rowCount` | `row_count` |
| `BatchJob` | `createdAt` | `created_at` |
| `BillingManifest` | `lineItems` | `line_items` |
| `BillingManifest` | `totalInCents` | `total_in_cents` |
| `BillingManifest` | `totalDiscountInCents` | `total_discount_in_cents` |
| `BillingManifest` | `totalTaxInCents` | `total_tax_in_cents` |
| `BillingManifest` | `subtotalInCents` | `subtotal_in_cents` |
| `BillingManifest` | `startDate` | `start_date` |
| `BillingManifest` | `endDate` | `end_date` |
| `BillingManifest` | `periodType` | `period_type` |
| `BillingManifest` | `existingBalanceInCents` | `existing_balance_in_cents` |
| `BillingManifestItem` | `transactionType` | `transaction_type` |
| `BillingManifestItem` | `amountInCents` | `amount_in_cents` |
| `BillingManifestItem` | `discountAmountInCents` | `discount_amount_in_cents` |
| `BillingManifestItem` | `taxableAmountInCents` | `taxable_amount_in_cents` |
| `BillingManifestItem` | `componentId` | `component_id` |
| `BillingManifestItem` | `componentHandle` | `component_handle` |
| `BillingManifestItem` | `componentName` | `component_name` |
| `BillingManifestItem` | `productId` | `product_id` |
| `BillingManifestItem` | `productHandle` | `product_handle` |
| `BillingManifestItem` | `productName` | `product_name` |
| `BillingManifestItem` | `periodRangeStart` | `period_range_start` |
| `BillingManifestItem` | `periodRangeEnd` | `period_range_end` |
| `BillingSchedule` | `initialBillingAt` | `initial_billing_at` |
| `Breakouts` | `planAmountInCents` | `plan_amount_in_cents` |
| `Breakouts` | `planAmountFormatted` | `plan_amount_formatted` |
| `Breakouts` | `usageAmountInCents` | `usage_amount_in_cents` |
| `Breakouts` | `usageAmountFormatted` | `usage_amount_formatted` |
| `BulkCreateProductPricePointsRequest` | `pricePoints` | `price_points` |
| `BulkCreateProductPricePointsResponse` | `pricePoints` | `price_points` |
| `BulkUpdateSegmentsItem` | `pricingScheme` | `pricing_scheme` |
| `CalendarBilling` | `snapDay` | `snap_day` |
| `CalendarBilling` | `calendarBillingFirstCharge` | `calendar_billing_first_charge` |
| `CancelGroupedSubscriptionsRequest` | `chargeUnbilledUsage` | `charge_unbilled_usage` |
| `CancellationOptions` | `cancellationMessage` | `cancellation_message` |
| `CancellationOptions` | `reasonCode` | `reason_code` |
| `CancellationOptions` | `cancelAtEndOfPeriod` | `cancel_at_end_of_period` |
| `CancellationOptions` | `scheduledCancellationAt` | `scheduled_cancellation_at` |
| `CancellationOptions` | `refundPrepaymentAccountBalance` | `refund_prepayment_account_balance` |
| `ChangeChargebackStatusEvent` | `eventType` | `event_type` |
| `ChangeChargebackStatusEvent` | `eventData` | `event_data` |
| `ChangeChargebackStatusEventData` | `chargebackStatus` | `chargeback_status` |
| `ChangeInvoiceCollectionMethodEvent` | `eventType` | `event_type` |
| `ChangeInvoiceCollectionMethodEvent` | `eventData` | `event_data` |
| `ChangeInvoiceCollectionMethodEventData` | `fromCollectionMethod` | `from_collection_method` |
| `ChangeInvoiceCollectionMethodEventData` | `toCollectionMethod` | `to_collection_method` |
| `ChangeInvoiceStatusEvent` | `eventType` | `event_type` |
| `ChangeInvoiceStatusEvent` | `eventData` | `event_data` |
| `ChangeInvoiceStatusEventData` | `gatewayTransId` | `gateway_trans_id` |
| `ChangeInvoiceStatusEventData` | `fromStatus` | `from_status` |
| `ChangeInvoiceStatusEventData` | `toStatus` | `to_status` |
| `ChangeInvoiceStatusEventData` | `consolidationLevel` | `consolidation_level` |
| `ChargifyEbb` | `createdAt` | `created_at` |
| `ChargifyEbb` | `uniquenessToken` | `uniqueness_token` |
| `ChargifyEbb` | `subscriptionId` | `subscription_id` |
| `ChargifyEbb` | `subscriptionReference` | `subscription_reference` |
| `ChjsTokenizationFailure` | `paymentProfileParams` | `payment_profile_params` |
| `ChjsTokenizationSuccess` | `paymentProfile` | `payment_profile` |
| `ChjsTokenizationSuccess` | `gatewayCustomerId` | `gateway_customer_id` |
| `CloneComponentPricePointRequest` | `pricePoint` | `price_point` |
| `Component` | `pricingScheme` | `pricing_scheme` |
| `Component` | `unitName` | `unit_name` |
| `Component` | `unitPrice` | `unit_price` |
| `Component` | `productFamilyId` | `product_family_id` |
| `Component` | `productFamilyName` | `product_family_name` |
| `Component` | `productFamilyHandle` | `product_family_handle` |
| `Component` | `pricePerUnitInCents` | `price_per_unit_in_cents` |
| `Component` | `defaultPricePointId` | `default_price_point_id` |
| `Component` | `overagePrices` | `overage_prices` |
| `Component` | `pricePointCount` | `price_point_count` |
| `Component` | `pricePointsUrl` | `price_points_url` |
| `Component` | `defaultPricePointName` | `default_price_point_name` |
| `Component` | `taxCode` | `tax_code` |
| `Component` | `upgradeCharge` | `upgrade_charge` |
| `Component` | `downgradeCredit` | `downgrade_credit` |
| `Component` | `createdAt` | `created_at` |
| `Component` | `updatedAt` | `updated_at` |
| `Component` | `archivedAt` | `archived_at` |
| `Component` | `hideDateRangeOnInvoice` | `hide_date_range_on_invoice` |
| `Component` | `allowFractionalQuantities` | `allow_fractional_quantities` |
| `Component` | `itemCategory` | `item_category` |
| `Component` | `useSiteExchangeRate` | `use_site_exchange_rate` |
| `Component` | `accountingCode` | `accounting_code` |
| `Component` | `eventBasedBillingMetricId` | `event_based_billing_metric_id` |
| `Component` | `intervalUnit` | `interval_unit` |
| `ComponentAllocationChange` | `previousAllocation` | `previous_allocation` |
| `ComponentAllocationChange` | `newAllocation` | `new_allocation` |
| `ComponentAllocationChange` | `componentId` | `component_id` |
| `ComponentAllocationChange` | `componentHandle` | `component_handle` |
| `ComponentAllocationChange` | `allocationId` | `allocation_id` |
| `ComponentAllocationChange` | `allocatedQuantity` | `allocated_quantity` |
| `ComponentAllocationErrorItem` | `componentId` | `component_id` |
| `ComponentCostData` | `componentCodeId` | `component_code_id` |
| `ComponentCostData` | `pricePointId` | `price_point_id` |
| `ComponentCostData` | `productId` | `product_id` |
| `ComponentCostData` | `pricingScheme` | `pricing_scheme` |
| `ComponentCostDataRateTier` | `startingQuantity` | `starting_quantity` |
| `ComponentCostDataRateTier` | `endingQuantity` | `ending_quantity` |
| `ComponentCostDataRateTier` | `unitPrice` | `unit_price` |
| `ComponentCurrencyPrice` | `formattedPrice` | `formatted_price` |
| `ComponentCurrencyPrice` | `priceId` | `price_id` |
| `ComponentCurrencyPrice` | `pricePointId` | `price_point_id` |
| `ComponentCurrencyPricesResponse` | `currencyPrices` | `currency_prices` |
| `ComponentCustomPrice` | `taxIncluded` | `tax_included` |
| `ComponentCustomPrice` | `pricingScheme` | `pricing_scheme` |
| `ComponentCustomPrice` | `intervalUnit` | `interval_unit` |
| `ComponentCustomPrice` | `listPricePointId` | `list_price_point_id` |
| `ComponentCustomPrice` | `useDefaultListPrice` | `use_default_list_price` |
| `ComponentCustomPrice` | `renewPrepaidAllocation` | `renew_prepaid_allocation` |
| `ComponentCustomPrice` | `rolloverPrepaidRemainder` | `rollover_prepaid_remainder` |
| `ComponentCustomPrice` | `expirationInterval` | `expiration_interval` |
| `ComponentCustomPrice` | `expirationIntervalUnit` | `expiration_interval_unit` |
| `ComponentPrice` | `componentId` | `component_id` |
| `ComponentPrice` | `startingQuantity` | `starting_quantity` |
| `ComponentPrice` | `endingQuantity` | `ending_quantity` |
| `ComponentPrice` | `unitPrice` | `unit_price` |
| `ComponentPrice` | `pricePointId` | `price_point_id` |
| `ComponentPrice` | `formattedUnitPrice` | `formatted_unit_price` |
| `ComponentPrice` | `segmentId` | `segment_id` |
| `ComponentPricePoint` | `pricingScheme` | `pricing_scheme` |
| `ComponentPricePoint` | `componentId` | `component_id` |
| `ComponentPricePoint` | `archivedAt` | `archived_at` |
| `ComponentPricePoint` | `createdAt` | `created_at` |
| `ComponentPricePoint` | `updatedAt` | `updated_at` |
| `ComponentPricePoint` | `useSiteExchangeRate` | `use_site_exchange_rate` |
| `ComponentPricePoint` | `subscriptionId` | `subscription_id` |
| `ComponentPricePoint` | `taxIncluded` | `tax_included` |
| `ComponentPricePoint` | `intervalUnit` | `interval_unit` |
| `ComponentPricePoint` | `currencyPrices` | `currency_prices` |
| `ComponentPricePoint` | `overagePrices` | `overage_prices` |
| `ComponentPricePoint` | `overagePricingScheme` | `overage_pricing_scheme` |
| `ComponentPricePoint` | `renewPrepaidAllocation` | `renew_prepaid_allocation` |
| `ComponentPricePoint` | `rolloverPrepaidRemainder` | `rollover_prepaid_remainder` |
| `ComponentPricePoint` | `expirationInterval` | `expiration_interval` |
| `ComponentPricePoint` | `expirationIntervalUnit` | `expiration_interval_unit` |
| `ComponentPricePointAssignment` | `componentId` | `component_id` |
| `ComponentPricePointAssignment` | `pricePoint` | `price_point` |
| `ComponentPricePointCurrencyOverageResponse` | `pricePoint` | `price_point` |
| `ComponentPricePointItem` | `pricingScheme` | `pricing_scheme` |
| `ComponentPricePointItem` | `intervalUnit` | `interval_unit` |
| `ComponentPricePointResponse` | `pricePoint` | `price_point` |
| `ComponentPricePointsResponse` | `pricePoints` | `price_points` |
| `ComponentPricePointErrorItem` | `componentId` | `component_id` |
| `ComponentPricePointErrorItem` | `pricePoint` | `price_point` |
| `Contract` | `maxioId` | `maxio_id` |
| `Coupon` | `amountInCents` | `amount_in_cents` |
| `Coupon` | `productFamilyId` | `product_family_id` |
| `Coupon` | `productFamilyName` | `product_family_name` |
| `Coupon` | `startDate` | `start_date` |
| `Coupon` | `endDate` | `end_date` |
| `Coupon` | `recurringScheme` | `recurring_scheme` |
| `Coupon` | `durationPeriodCount` | `duration_period_count` |
| `Coupon` | `durationInterval` | `duration_interval` |
| `Coupon` | `durationIntervalUnit` | `duration_interval_unit` |
| `Coupon` | `durationIntervalSpan` | `duration_interval_span` |
| `Coupon` | `allowNegativeBalance` | `allow_negative_balance` |
| `Coupon` | `archivedAt` | `archived_at` |
| `Coupon` | `conversionLimit` | `conversion_limit` |
| `Coupon` | `compoundingStrategy` | `compounding_strategy` |
| `Coupon` | `useSiteExchangeRate` | `use_site_exchange_rate` |
| `Coupon` | `createdAt` | `created_at` |
| `Coupon` | `updatedAt` | `updated_at` |
| `Coupon` | `discountType` | `discount_type` |
| `Coupon` | `excludeMidPeriodAllocations` | `exclude_mid_period_allocations` |
| `Coupon` | `applyOnCancelAtEndOfPeriod` | `apply_on_cancel_at_end_of_period` |
| `Coupon` | `applyOnSubscriptionExpiration` | `apply_on_subscription_expiration` |
| `Coupon` | `couponRestrictions` | `coupon_restrictions` |
| `Coupon` | `currencyPrices` | `currency_prices` |
| `CouponCurrency` | `couponId` | `coupon_id` |
| `CouponCurrencyRequest` | `currencyPrices` | `currency_prices` |
| `CouponCurrencyResponse` | `currencyPrices` | `currency_prices` |
| `CouponPayload` | `amountInCents` | `amount_in_cents` |
| `CouponPayload` | `allowNegativeBalance` | `allow_negative_balance` |
| `CouponPayload` | `endDate` | `end_date` |
| `CouponPayload` | `productFamilyId` | `product_family_id` |
| `CouponPayload` | `compoundingStrategy` | `compounding_strategy` |
| `CouponPayload` | `excludeMidPeriodAllocations` | `exclude_mid_period_allocations` |
| `CouponPayload` | `applyOnCancelAtEndOfPeriod` | `apply_on_cancel_at_end_of_period` |
| `CouponPayload` | `applyOnSubscriptionExpiration` | `apply_on_subscription_expiration` |
| `CouponRequest` | `restrictedProducts` | `restricted_products` |
| `CouponRequest` | `restrictedComponents` | `restricted_components` |
| `CouponRestriction` | `itemType` | `item_type` |
| `CouponRestriction` | `itemId` | `item_id` |
| `CouponSubcodesResponse` | `createdCodes` | `created_codes` |
| `CouponSubcodesResponse` | `duplicateCodes` | `duplicate_codes` |
| `CouponSubcodesResponse` | `invalidCodes` | `invalid_codes` |
| `CouponUsage` | `savingsInCents` | `savings_in_cents` |
| `CouponUsage` | `revenueInCents` | `revenue_in_cents` |
| `CreateAllocation` | `decimalQuantity` | `decimal_quantity` |
| `CreateAllocation` | `previousQuantity` | `previous_quantity` |
| `CreateAllocation` | `decimalPreviousQuantity` | `decimal_previous_quantity` |
| `CreateAllocation` | `componentId` | `component_id` |
| `CreateAllocation` | `prorationDowngradeScheme` | `proration_downgrade_scheme` |
| `CreateAllocation` | `prorationUpgradeScheme` | `proration_upgrade_scheme` |
| `CreateAllocation` | `downgradeCredit` | `downgrade_credit` |
| `CreateAllocation` | `upgradeCharge` | `upgrade_charge` |
| `CreateAllocation` | `accrueCharge` | `accrue_charge` |
| `CreateAllocation` | `initiateDunning` | `initiate_dunning` |
| `CreateAllocation` | `pricePointId` | `price_point_id` |
| `CreateAllocation` | `billingSchedule` | `billing_schedule` |
| `CreateAllocation` | `customPrice` | `custom_price` |
| `CreateComponentPricePoint` | `pricingScheme` | `pricing_scheme` |
| `CreateComponentPricePoint` | `useSiteExchangeRate` | `use_site_exchange_rate` |
| `CreateComponentPricePoint` | `taxIncluded` | `tax_included` |
| `CreateComponentPricePoint` | `intervalUnit` | `interval_unit` |
| `CreateComponentPricePointRequest` | `pricePoint` | `price_point` |
| `CreateComponentPricePointsRequest` | `pricePoints` | `price_points` |
| `CreateCreditNoteEvent` | `eventType` | `event_type` |
| `CreateCreditNoteEvent` | `eventData` | `event_data` |
| `CreateCurrencyPrice` | `priceId` | `price_id` |
| `CreateCurrencyPricesRequest` | `currencyPrices` | `currency_prices` |
| `CreateCustomer` | `firstName` | `first_name` |
| `CreateCustomer` | `lastName` | `last_name` |
| `CreateCustomer` | `ccEmails` | `cc_emails` |
| `CreateCustomer` | `address2` | `address_2` |
| `CreateCustomer` | `vatNumber` | `vat_number` |
| `CreateCustomer` | `taxExempt` | `tax_exempt` |
| `CreateCustomer` | `taxExemptReason` | `tax_exempt_reason` |
| `CreateCustomer` | `parentId` | `parent_id` |
| `CreateCustomer` | `salesforceId` | `salesforce_id` |
| `CreateCustomer` | `brandingThemeId` | `branding_theme_id` |
| `CreateDebitNoteEvent` | `eventType` | `event_type` |
| `CreateDebitNoteEvent` | `eventData` | `event_data` |
| `CreateEbbComponent` | `eventBasedComponent` | `event_based_component` |
| `CreateInvoice` | `lineItems` | `line_items` |
| `CreateInvoice` | `issueDate` | `issue_date` |
| `CreateInvoice` | `netTerms` | `net_terms` |
| `CreateInvoice` | `paymentInstructions` | `payment_instructions` |
| `CreateInvoice` | `sellerAddress` | `seller_address` |
| `CreateInvoice` | `billingAddress` | `billing_address` |
| `CreateInvoice` | `shippingAddress` | `shipping_address` |
| `CreateInvoiceAddress` | `firstName` | `first_name` |
| `CreateInvoiceAddress` | `lastName` | `last_name` |
| `CreateInvoiceAddress` | `address2` | `address_2` |
| `CreateInvoiceCoupon` | `productFamilyId` | `product_family_id` |
| `CreateInvoiceCoupon` | `compoundingStrategy` | `compounding_strategy` |
| `CreateInvoiceItem` | `unitPrice` | `unit_price` |
| `CreateInvoiceItem` | `taxCode` | `tax_code` |
| `CreateInvoiceItem` | `periodRangeStart` | `period_range_start` |
| `CreateInvoiceItem` | `periodRangeEnd` | `period_range_end` |
| `CreateInvoiceItem` | `productId` | `product_id` |
| `CreateInvoiceItem` | `componentId` | `component_id` |
| `CreateInvoiceItem` | `pricePointId` | `price_point_id` |
| `CreateInvoiceItem` | `productPricePointId` | `product_price_point_id` |
| `CreateInvoicePayment` | `paymentProfileId` | `payment_profile_id` |
| `CreateInvoicePayment` | `receivedOn` | `received_on` |
| `CreateInvoicePaymentApplication` | `invoiceUid` | `invoice_uid` |
| `CreateMetafield` | `inputType` | `input_type` |
| `CreateMeteredComponent` | `meteredComponent` | `metered_component` |
| `CreateMultiInvoicePayment` | `receivedOn` | `received_on` |
| `CreateOffer` | `productId` | `product_id` |
| `CreateOffer` | `productPricePointId` | `product_price_point_id` |
| `CreateOfferComponent` | `componentId` | `component_id` |
| `CreateOfferComponent` | `pricePointId` | `price_point_id` |
| `CreateOfferComponent` | `startingQuantity` | `starting_quantity` |
| `CreateOnOffComponent` | `onOffComponent` | `on_off_component` |
| `CreatePayment` | `paymentDetails` | `payment_details` |
| `CreatePayment` | `paymentMethod` | `payment_method` |
| `CreatePaymentProfile` | `chargifyToken` | `chargify_token` |
| `CreatePaymentProfile` | `paymentType` | `payment_type` |
| `CreatePaymentProfile` | `firstName` | `first_name` |
| `CreatePaymentProfile` | `lastName` | `last_name` |
| `CreatePaymentProfile` | `maskedCardNumber` | `masked_card_number` |
| `CreatePaymentProfile` | `fullNumber` | `full_number` |
| `CreatePaymentProfile` | `cardType` | `card_type` |
| `CreatePaymentProfile` | `expirationMonth` | `expiration_month` |
| `CreatePaymentProfile` | `expirationYear` | `expiration_year` |
| `CreatePaymentProfile` | `billingAddress` | `billing_address` |
| `CreatePaymentProfile` | `billingAddress2` | `billing_address_2` |
| `CreatePaymentProfile` | `billingCity` | `billing_city` |
| `CreatePaymentProfile` | `billingState` | `billing_state` |
| `CreatePaymentProfile` | `billingCountry` | `billing_country` |
| `CreatePaymentProfile` | `billingZip` | `billing_zip` |
| `CreatePaymentProfile` | `currentVault` | `current_vault` |
| `CreatePaymentProfile` | `vaultToken` | `vault_token` |
| `CreatePaymentProfile` | `customerVaultToken` | `customer_vault_token` |
| `CreatePaymentProfile` | `customerId` | `customer_id` |
| `CreatePaymentProfile` | `paypalEmail` | `paypal_email` |
| `CreatePaymentProfile` | `paymentMethodNonce` | `payment_method_nonce` |
| `CreatePaymentProfile` | `gatewayHandle` | `gateway_handle` |
| `CreatePaymentProfile` | `bankName` | `bank_name` |
| `CreatePaymentProfile` | `bankIban` | `bank_iban` |
| `CreatePaymentProfile` | `bankRoutingNumber` | `bank_routing_number` |
| `CreatePaymentProfile` | `bankAccountNumber` | `bank_account_number` |
| `CreatePaymentProfile` | `bankBranchCode` | `bank_branch_code` |
| `CreatePaymentProfile` | `bankAccountType` | `bank_account_type` |
| `CreatePaymentProfile` | `bankAccountHolderType` | `bank_account_holder_type` |
| `CreatePaymentProfile` | `lastFour` | `last_four` |
| `CreatePaymentProfileRequest` | `paymentProfile` | `payment_profile` |
| `CreatePrepaidComponent` | `prepaidUsageComponent` | `prepaid_usage_component` |
| `CreatePrepaidUsageComponentPricePoint` | `pricingScheme` | `pricing_scheme` |
| `CreatePrepaidUsageComponentPricePoint` | `overagePricing` | `overage_pricing` |
| `CreatePrepaidUsageComponentPricePoint` | `useSiteExchangeRate` | `use_site_exchange_rate` |
| `CreatePrepaidUsageComponentPricePoint` | `rolloverPrepaidRemainder` | `rollover_prepaid_remainder` |
| `CreatePrepaidUsageComponentPricePoint` | `renewPrepaidAllocation` | `renew_prepaid_allocation` |
| `CreatePrepaidUsageComponentPricePoint` | `expirationInterval` | `expiration_interval` |
| `CreatePrepaidUsageComponentPricePoint` | `expirationIntervalUnit` | `expiration_interval_unit` |
| `CreatePrepayment` | `paymentProfileId` | `payment_profile_id` |
| `CreateProductCurrencyPricesRequest` | `currencyPrices` | `currency_prices` |
| `CreateProductFamilyRequest` | `productFamily` | `product_family` |
| `CreateProductPricePoint` | `priceInCents` | `price_in_cents` |
| `CreateProductPricePoint` | `intervalUnit` | `interval_unit` |
| `CreateProductPricePoint` | `trialPriceInCents` | `trial_price_in_cents` |
| `CreateProductPricePoint` | `trialInterval` | `trial_interval` |
| `CreateProductPricePoint` | `trialIntervalUnit` | `trial_interval_unit` |
| `CreateProductPricePoint` | `trialType` | `trial_type` |
| `CreateProductPricePoint` | `initialChargeInCents` | `initial_charge_in_cents` |
| `CreateProductPricePoint` | `initialChargeAfterTrial` | `initial_charge_after_trial` |
| `CreateProductPricePoint` | `expirationInterval` | `expiration_interval` |
| `CreateProductPricePoint` | `expirationIntervalUnit` | `expiration_interval_unit` |
| `CreateProductPricePoint` | `useSiteExchangeRate` | `use_site_exchange_rate` |
| `CreateProductPricePointRequest` | `pricePoint` | `price_point` |
| `CreateQuantityBasedComponent` | `quantityBasedComponent` | `quantity_based_component` |
| `CreateReasonCodeRequest` | `reasonCode` | `reason_code` |
| `CreateSegment` | `segmentProperty1Value` | `segment_property_1_value` |
| `CreateSegment` | `segmentProperty2Value` | `segment_property_2_value` |
| `CreateSegment` | `segmentProperty3Value` | `segment_property_3_value` |
| `CreateSegment` | `segmentProperty4Value` | `segment_property_4_value` |
| `CreateSegment` | `pricingScheme` | `pricing_scheme` |
| `CreateSubscription` | `productHandle` | `product_handle` |
| `CreateSubscription` | `productId` | `product_id` |
| `CreateSubscription` | `productPricePointHandle` | `product_price_point_handle` |
| `CreateSubscription` | `productPricePointId` | `product_price_point_id` |
| `CreateSubscription` | `customPrice` | `custom_price` |
| `CreateSubscription` | `couponCode` | `coupon_code` |
| `CreateSubscription` | `couponCodes` | `coupon_codes` |
| `CreateSubscription` | `paymentCollectionMethod` | `payment_collection_method` |
| `CreateSubscription` | `receivesInvoiceEmails` | `receives_invoice_emails` |
| `CreateSubscription` | `netTerms` | `net_terms` |
| `CreateSubscription` | `customerId` | `customer_id` |
| `CreateSubscription` | `brandingThemeId` | `branding_theme_id` |
| `CreateSubscription` | `nextBillingAt` | `next_billing_at` |
| `CreateSubscription` | `initialBillingAt` | `initial_billing_at` |
| `CreateSubscription` | `deferSignup` | `defer_signup` |
| `CreateSubscription` | `storedCredentialTransactionId` | `stored_credential_transaction_id` |
| `CreateSubscription` | `salesRepId` | `sales_rep_id` |
| `CreateSubscription` | `paymentProfileId` | `payment_profile_id` |
| `CreateSubscription` | `customerAttributes` | `customer_attributes` |
| `CreateSubscription` | `paymentProfileAttributes` | `payment_profile_attributes` |
| `CreateSubscription` | `creditCardAttributes` | `credit_card_attributes` |
| `CreateSubscription` | `bankAccountAttributes` | `bank_account_attributes` |
| `CreateSubscription` | `calendarBilling` | `calendar_billing` |
| `CreateSubscription` | `customerReference` | `customer_reference` |
| `CreateSubscription` | `cancellationMessage` | `cancellation_message` |
| `CreateSubscription` | `cancellationMethod` | `cancellation_method` |
| `CreateSubscription` | `expiresAt` | `expires_at` |
| `CreateSubscription` | `expirationTracksNextBillingChange` | `expiration_tracks_next_billing_change` |
| `CreateSubscription` | `agreementTerms` | `agreement_terms` |
| `CreateSubscription` | `authorizerFirstName` | `authorizer_first_name` |
| `CreateSubscription` | `authorizerLastName` | `authorizer_last_name` |
| `CreateSubscription` | `calendarBillingFirstCharge` | `calendar_billing_first_charge` |
| `CreateSubscription` | `reasonCode` | `reason_code` |
| `CreateSubscription` | `productChangeDelayed` | `product_change_delayed` |
| `CreateSubscription` | `offerId` | `offer_id` |
| `CreateSubscription` | `prepaidConfiguration` | `prepaid_configuration` |
| `CreateSubscription` | `previousBillingAt` | `previous_billing_at` |
| `CreateSubscription` | `importMrr` | `import_mrr` |
| `CreateSubscription` | `canceledAt` | `canceled_at` |
| `CreateSubscription` | `activatedAt` | `activated_at` |
| `CreateSubscription` | `agreementAcceptance` | `agreement_acceptance` |
| `CreateSubscription` | `achAgreement` | `ach_agreement` |
| `CreateSubscription` | `dunningCommunicationDelayEnabled` | `dunning_communication_delay_enabled` |
| `CreateSubscription` | `dunningCommunicationDelayTimeZone` | `dunning_communication_delay_time_zone` |
| `CreateSubscription` | `skipBillingManifestTaxes` | `skip_billing_manifest_taxes` |
| `CreateSubscriptionComponent` | `componentId` | `component_id` |
| `CreateSubscriptionComponent` | `unitBalance` | `unit_balance` |
| `CreateSubscriptionComponent` | `allocatedQuantity` | `allocated_quantity` |
| `CreateSubscriptionComponent` | `pricePointId` | `price_point_id` |
| `CreateSubscriptionComponent` | `customPrice` | `custom_price` |
| `CreateSubscriptionGroup` | `subscriptionId` | `subscription_id` |
| `CreateSubscriptionGroup` | `memberIds` | `member_ids` |
| `CreateSubscriptionGroupRequest` | `subscriptionGroup` | `subscription_group` |
| `CreateUsage` | `pricePointId` | `price_point_id` |
| `CreateUsage` | `billingSchedule` | `billing_schedule` |
| `CreateUsage` | `customPrice` | `custom_price` |
| `CreateOrUpdateEndpoint` | `webhookSubscriptions` | `webhook_subscriptions` |
| `CreateOrUpdateProduct` | `accountingCode` | `accounting_code` |
| `CreateOrUpdateProduct` | `requireCreditCard` | `require_credit_card` |
| `CreateOrUpdateProduct` | `priceInCents` | `price_in_cents` |
| `CreateOrUpdateProduct` | `intervalUnit` | `interval_unit` |
| `CreateOrUpdateProduct` | `trialPriceInCents` | `trial_price_in_cents` |
| `CreateOrUpdateProduct` | `trialInterval` | `trial_interval` |
| `CreateOrUpdateProduct` | `trialIntervalUnit` | `trial_interval_unit` |
| `CreateOrUpdateProduct` | `trialType` | `trial_type` |
| `CreateOrUpdateProduct` | `expirationInterval` | `expiration_interval` |
| `CreateOrUpdateProduct` | `expirationIntervalUnit` | `expiration_interval_unit` |
| `CreateOrUpdateProduct` | `autoCreateSignupPage` | `auto_create_signup_page` |
| `CreateOrUpdateProduct` | `taxCode` | `tax_code` |
| `CreateOrUpdateSegmentPrice` | `startingQuantity` | `starting_quantity` |
| `CreateOrUpdateSegmentPrice` | `endingQuantity` | `ending_quantity` |
| `CreateOrUpdateSegmentPrice` | `unitPrice` | `unit_price` |
| `CreatedPrepayment` | `subscriptionId` | `subscription_id` |
| `CreatedPrepayment` | `amountInCents` | `amount_in_cents` |
| `CreatedPrepayment` | `createdAt` | `created_at` |
| `CreatedPrepayment` | `startingBalanceInCents` | `starting_balance_in_cents` |
| `CreatedPrepayment` | `endingBalanceInCents` | `ending_balance_in_cents` |
| `CreditAccountBalanceChanged` | `serviceCreditAccountBalanceInCents` | `service_credit_account_balance_in_cents` |
| `CreditAccountBalanceChanged` | `serviceCreditBalanceChangeInCents` | `service_credit_balance_change_in_cents` |
| `CreditAccountBalanceChanged` | `currencyCode` | `currency_code` |
| `CreditAccountBalanceChanged` | `atTime` | `at_time` |
| `CreditCardAttributes` | `fullNumber` | `full_number` |
| `CreditCardAttributes` | `expirationMonth` | `expiration_month` |
| `CreditCardAttributes` | `expirationYear` | `expiration_year` |
| `CreditCardPaymentProfile` | `firstName` | `first_name` |
| `CreditCardPaymentProfile` | `lastName` | `last_name` |
| `CreditCardPaymentProfile` | `maskedCardNumber` | `masked_card_number` |
| `CreditCardPaymentProfile` | `cardType` | `card_type` |
| `CreditCardPaymentProfile` | `expirationMonth` | `expiration_month` |
| `CreditCardPaymentProfile` | `expirationYear` | `expiration_year` |
| `CreditCardPaymentProfile` | `customerId` | `customer_id` |
| `CreditCardPaymentProfile` | `currentVault` | `current_vault` |
| `CreditCardPaymentProfile` | `vaultToken` | `vault_token` |
| `CreditCardPaymentProfile` | `billingAddress` | `billing_address` |
| `CreditCardPaymentProfile` | `billingCity` | `billing_city` |
| `CreditCardPaymentProfile` | `billingState` | `billing_state` |
| `CreditCardPaymentProfile` | `billingZip` | `billing_zip` |
| `CreditCardPaymentProfile` | `billingCountry` | `billing_country` |
| `CreditCardPaymentProfile` | `customerVaultToken` | `customer_vault_token` |
| `CreditCardPaymentProfile` | `billingAddress2` | `billing_address_2` |
| `CreditCardPaymentProfile` | `paymentType` | `payment_type` |
| `CreditCardPaymentProfile` | `chargifyToken` | `chargify_token` |
| `CreditCardPaymentProfile` | `siteGatewaySettingId` | `site_gateway_setting_id` |
| `CreditCardPaymentProfile` | `gatewayHandle` | `gateway_handle` |
| `CreditCardPaymentProfile` | `createdAt` | `created_at` |
| `CreditCardPaymentProfile` | `updatedAt` | `updated_at` |
| `CreditNote` | `siteId` | `site_id` |
| `CreditNote` | `customerId` | `customer_id` |
| `CreditNote` | `subscriptionId` | `subscription_id` |
| `CreditNote` | `sequenceNumber` | `sequence_number` |
| `CreditNote` | `issueDate` | `issue_date` |
| `CreditNote` | `appliedDate` | `applied_date` |
| `CreditNote` | `billingAddress` | `billing_address` |
| `CreditNote` | `shippingAddress` | `shipping_address` |
| `CreditNote` | `subtotalAmount` | `subtotal_amount` |
| `CreditNote` | `discountAmount` | `discount_amount` |
| `CreditNote` | `taxAmount` | `tax_amount` |
| `CreditNote` | `totalAmount` | `total_amount` |
| `CreditNote` | `appliedAmount` | `applied_amount` |
| `CreditNote` | `remainingAmount` | `remaining_amount` |
| `CreditNote` | `lineItems` | `line_items` |
| `CreditNote` | `originInvoices` | `origin_invoices` |
| `CreditNoteApplication` | `transactionTime` | `transaction_time` |
| `CreditNoteApplication` | `invoiceUid` | `invoice_uid` |
| `CreditNoteApplication` | `appliedAmount` | `applied_amount` |
| `CreditNoteLineItem` | `unitPrice` | `unit_price` |
| `CreditNoteLineItem` | `subtotalAmount` | `subtotal_amount` |
| `CreditNoteLineItem` | `discountAmount` | `discount_amount` |
| `CreditNoteLineItem` | `taxAmount` | `tax_amount` |
| `CreditNoteLineItem` | `taxIncluded` | `tax_included` |
| `CreditNoteLineItem` | `totalAmount` | `total_amount` |
| `CreditNoteLineItem` | `tieredUnitPrice` | `tiered_unit_price` |
| `CreditNoteLineItem` | `periodRangeStart` | `period_range_start` |
| `CreditNoteLineItem` | `periodRangeEnd` | `period_range_end` |
| `CreditNoteLineItem` | `productId` | `product_id` |
| `CreditNoteLineItem` | `productVersion` | `product_version` |
| `CreditNoteLineItem` | `componentId` | `component_id` |
| `CreditNoteLineItem` | `pricePointId` | `price_point_id` |
| `CreditNoteLineItem` | `billingScheduleItemId` | `billing_schedule_item_id` |
| `CreditNoteLineItem` | `customItem` | `custom_item` |
| `CreditNoteLineItem` | `prepaidAllocationExpiresAt` | `prepaid_allocation_expires_at` |
| `CreditSchemeRequest` | `creditScheme` | `credit_scheme` |
| `CurrencyOveragePrices` | `pricingScheme` | `pricing_scheme` |
| `CurrencyOveragePrices` | `componentId` | `component_id` |
| `CurrencyOveragePrices` | `archivedAt` | `archived_at` |
| `CurrencyOveragePrices` | `createdAt` | `created_at` |
| `CurrencyOveragePrices` | `updatedAt` | `updated_at` |
| `CurrencyOveragePrices` | `useSiteExchangeRate` | `use_site_exchange_rate` |
| `CurrencyOveragePrices` | `subscriptionId` | `subscription_id` |
| `CurrencyOveragePrices` | `taxIncluded` | `tax_included` |
| `CurrencyOveragePrices` | `intervalUnit` | `interval_unit` |
| `CurrencyOveragePrices` | `currencyPrices` | `currency_prices` |
| `CurrencyOveragePrices` | `overagePrices` | `overage_prices` |
| `CurrencyOveragePrices` | `overagePricingScheme` | `overage_pricing_scheme` |
| `CurrencyOveragePrices` | `renewPrepaidAllocation` | `renew_prepaid_allocation` |
| `CurrencyOveragePrices` | `rolloverPrepaidRemainder` | `rollover_prepaid_remainder` |
| `CurrencyOveragePrices` | `expirationInterval` | `expiration_interval` |
| `CurrencyOveragePrices` | `expirationIntervalUnit` | `expiration_interval_unit` |
| `CurrencyOveragePrices` | `currencyOveragePrices` | `currency_overage_prices` |
| `CurrencyPrice` | `formattedPrice` | `formatted_price` |
| `CurrencyPrice` | `priceId` | `price_id` |
| `CurrencyPrice` | `pricePointId` | `price_point_id` |
| `CurrencyPrice` | `productPricePointId` | `product_price_point_id` |
| `CurrencyPricesResponse` | `currencyPrices` | `currency_prices` |
| `CustomFieldValueChange` | `eventType` | `event_type` |
| `CustomFieldValueChange` | `metafieldName` | `metafield_name` |
| `CustomFieldValueChange` | `metafieldId` | `metafield_id` |
| `CustomFieldValueChange` | `oldValue` | `old_value` |
| `CustomFieldValueChange` | `newValue` | `new_value` |
| `CustomFieldValueChange` | `resourceType` | `resource_type` |
| `CustomFieldValueChange` | `resourceId` | `resource_id` |
| `Customer` | `firstName` | `first_name` |
| `Customer` | `lastName` | `last_name` |
| `Customer` | `ccEmails` | `cc_emails` |
| `Customer` | `createdAt` | `created_at` |
| `Customer` | `updatedAt` | `updated_at` |
| `Customer` | `address2` | `address_2` |
| `Customer` | `stateName` | `state_name` |
| `Customer` | `countryName` | `country_name` |
| `Customer` | `portalCustomerCreatedAt` | `portal_customer_created_at` |
| `Customer` | `portalInviteLastSentAt` | `portal_invite_last_sent_at` |
| `Customer` | `portalInviteLastAcceptedAt` | `portal_invite_last_accepted_at` |
| `Customer` | `taxExempt` | `tax_exempt` |
| `Customer` | `vatNumber` | `vat_number` |
| `Customer` | `parentId` | `parent_id` |
| `Customer` | `defaultSubscriptionGroupUid` | `default_subscription_group_uid` |
| `Customer` | `salesforceId` | `salesforce_id` |
| `Customer` | `taxExemptReason` | `tax_exempt_reason` |
| `Customer` | `defaultAutoRenewalProfileId` | `default_auto_renewal_profile_id` |
| `Customer` | `brandingThemeId` | `branding_theme_id` |
| `CustomerAttributes` | `firstName` | `first_name` |
| `CustomerAttributes` | `lastName` | `last_name` |
| `CustomerAttributes` | `ccEmails` | `cc_emails` |
| `CustomerAttributes` | `address2` | `address_2` |
| `CustomerAttributes` | `taxExempt` | `tax_exempt` |
| `CustomerAttributes` | `vatNumber` | `vat_number` |
| `CustomerAttributes` | `parentId` | `parent_id` |
| `CustomerAttributes` | `salesforceId` | `salesforce_id` |
| `CustomerAttributes` | `defaultAutoRenewalProfileId` | `default_auto_renewal_profile_id` |
| `CustomerChange` | `shippingAddress` | `shipping_address` |
| `CustomerChange` | `billingAddress` | `billing_address` |
| `CustomerChange` | `customFields` | `custom_fields` |
| `DebitNote` | `siteId` | `site_id` |
| `DebitNote` | `customerId` | `customer_id` |
| `DebitNote` | `subscriptionId` | `subscription_id` |
| `DebitNote` | `sequenceNumber` | `sequence_number` |
| `DebitNote` | `originCreditNoteUid` | `origin_credit_note_uid` |
| `DebitNote` | `originCreditNoteNumber` | `origin_credit_note_number` |
| `DebitNote` | `issueDate` | `issue_date` |
| `DebitNote` | `appliedDate` | `applied_date` |
| `DebitNote` | `dueDate` | `due_date` |
| `DebitNote` | `billingAddress` | `billing_address` |
| `DebitNote` | `shippingAddress` | `shipping_address` |
| `DebitNote` | `lineItems` | `line_items` |
| `DeliverProformaInvoiceRequest` | `recipientEmails` | `recipient_emails` |
| `DeliverProformaInvoiceRequest` | `ccRecipientEmails` | `cc_recipient_emails` |
| `DeliverProformaInvoiceRequest` | `bccRecipientEmails` | `bcc_recipient_emails` |
| `DunnerData` | `subscriptionId` | `subscription_id` |
| `DunnerData` | `revenueAtRiskInCents` | `revenue_at_risk_in_cents` |
| `DunnerData` | `createdAt` | `created_at` |
| `DunnerData` | `lastAttemptedAt` | `last_attempted_at` |
| `DunningStepData` | `dayThreshold` | `day_threshold` |
| `DunningStepData` | `emailBody` | `email_body` |
| `DunningStepData` | `emailSubject` | `email_subject` |
| `DunningStepData` | `sendEmail` | `send_email` |
| `DunningStepData` | `sendBccEmail` | `send_bcc_email` |
| `DunningStepData` | `sendSms` | `send_sms` |
| `DunningStepData` | `smsBody` | `sms_body` |
| `DunningStepReached` | `currentStep` | `current_step` |
| `DunningStepReached` | `nextStep` | `next_step` |
| `EbbComponent` | `unitName` | `unit_name` |
| `EbbComponent` | `pricingScheme` | `pricing_scheme` |
| `EbbComponent` | `pricePoints` | `price_points` |
| `EbbComponent` | `unitPrice` | `unit_price` |
| `EbbComponent` | `taxCode` | `tax_code` |
| `EbbComponent` | `hideDateRangeOnInvoice` | `hide_date_range_on_invoice` |
| `EbbComponent` | `eventBasedBillingMetricId` | `event_based_billing_metric_id` |
| `EbbComponent` | `intervalUnit` | `interval_unit` |
| `EnableWebhooksRequest` | `webhooksEnabled` | `webhooks_enabled` |
| `EnableWebhooksResponse` | `webhooksEnabled` | `webhooks_enabled` |
| `Endpoint` | `siteId` | `site_id` |
| `Endpoint` | `webhookSubscriptions` | `webhook_subscriptions` |
| `Errors` | `perPage` | `per_page` |
| `Errors` | `pricePoint` | `price_point` |
| `Event` | `subscriptionId` | `subscription_id` |
| `Event` | `customerId` | `customer_id` |
| `Event` | `createdAt` | `created_at` |
| `Event` | `eventSpecificData` | `event_specific_data` |
| `FailedPaymentEvent` | `eventType` | `event_type` |
| `FailedPaymentEvent` | `eventData` | `event_data` |
| `FailedPaymentEventData` | `amountInCents` | `amount_in_cents` |
| `FailedPaymentEventData` | `appliedAmount` | `applied_amount` |
| `FailedPaymentEventData` | `paymentMethod` | `payment_method` |
| `FailedPaymentEventData` | `transactionId` | `transaction_id` |
| `FullSubscriptionGroupResponse` | `customerId` | `customer_id` |
| `FullSubscriptionGroupResponse` | `paymentProfileId` | `payment_profile_id` |
| `FullSubscriptionGroupResponse` | `subscriptionIds` | `subscription_ids` |
| `FullSubscriptionGroupResponse` | `primarySubscriptionId` | `primary_subscription_id` |
| `FullSubscriptionGroupResponse` | `nextAssessmentAt` | `next_assessment_at` |
| `FullSubscriptionGroupResponse` | `cancelAtEndOfPeriod` | `cancel_at_end_of_period` |
| `FullSubscriptionGroupResponse` | `currentBillingAmountInCents` | `current_billing_amount_in_cents` |
| `FullSubscriptionGroupResponse` | `accountBalances` | `account_balances` |
| `GetOneTimeTokenPaymentProfile` | `firstName` | `first_name` |
| `GetOneTimeTokenPaymentProfile` | `lastName` | `last_name` |
| `GetOneTimeTokenPaymentProfile` | `maskedCardNumber` | `masked_card_number` |
| `GetOneTimeTokenPaymentProfile` | `cardType` | `card_type` |
| `GetOneTimeTokenPaymentProfile` | `expirationMonth` | `expiration_month` |
| `GetOneTimeTokenPaymentProfile` | `expirationYear` | `expiration_year` |
| `GetOneTimeTokenPaymentProfile` | `customerId` | `customer_id` |
| `GetOneTimeTokenPaymentProfile` | `currentVault` | `current_vault` |
| `GetOneTimeTokenPaymentProfile` | `vaultToken` | `vault_token` |
| `GetOneTimeTokenPaymentProfile` | `billingAddress` | `billing_address` |
| `GetOneTimeTokenPaymentProfile` | `billingAddress2` | `billing_address_2` |
| `GetOneTimeTokenPaymentProfile` | `billingCity` | `billing_city` |
| `GetOneTimeTokenPaymentProfile` | `billingCountry` | `billing_country` |
| `GetOneTimeTokenPaymentProfile` | `billingState` | `billing_state` |
| `GetOneTimeTokenPaymentProfile` | `billingZip` | `billing_zip` |
| `GetOneTimeTokenPaymentProfile` | `paymentType` | `payment_type` |
| `GetOneTimeTokenPaymentProfile` | `siteGatewaySettingId` | `site_gateway_setting_id` |
| `GetOneTimeTokenPaymentProfile` | `customerVaultToken` | `customer_vault_token` |
| `GetOneTimeTokenPaymentProfile` | `gatewayHandle` | `gateway_handle` |
| `GetOneTimeTokenRequest` | `paymentProfile` | `payment_profile` |
| `GroupBilling` | `alignDate` | `align_date` |
| `HistoricUsage` | `totalUsageQuantity` | `total_usage_quantity` |
| `HistoricUsage` | `billingPeriodStartsAt` | `billing_period_starts_at` |
| `HistoricUsage` | `billingPeriodEndsAt` | `billing_period_ends_at` |
| `Invoice` | `siteId` | `site_id` |
| `Invoice` | `customerId` | `customer_id` |
| `Invoice` | `subscriptionId` | `subscription_id` |
| `Invoice` | `sequenceNumber` | `sequence_number` |
| `Invoice` | `transactionTime` | `transaction_time` |
| `Invoice` | `createdAt` | `created_at` |
| `Invoice` | `updatedAt` | `updated_at` |
| `Invoice` | `issueDate` | `issue_date` |
| `Invoice` | `dueDate` | `due_date` |
| `Invoice` | `paidDate` | `paid_date` |
| `Invoice` | `parentInvoiceId` | `parent_invoice_id` |
| `Invoice` | `collectionMethod` | `collection_method` |
| `Invoice` | `paymentInstructions` | `payment_instructions` |
| `Invoice` | `consolidationLevel` | `consolidation_level` |
| `Invoice` | `parentInvoiceUid` | `parent_invoice_uid` |
| `Invoice` | `subscriptionGroupId` | `subscription_group_id` |
| `Invoice` | `parentInvoiceNumber` | `parent_invoice_number` |
| `Invoice` | `groupPrimarySubscriptionId` | `group_primary_subscription_id` |
| `Invoice` | `productName` | `product_name` |
| `Invoice` | `productFamilyName` | `product_family_name` |
| `Invoice` | `recipientEmails` | `recipient_emails` |
| `Invoice` | `netTerms` | `net_terms` |
| `Invoice` | `billingAddress` | `billing_address` |
| `Invoice` | `shippingAddress` | `shipping_address` |
| `Invoice` | `subtotalAmount` | `subtotal_amount` |
| `Invoice` | `discountAmount` | `discount_amount` |
| `Invoice` | `taxAmount` | `tax_amount` |
| `Invoice` | `totalAmount` | `total_amount` |
| `Invoice` | `creditAmount` | `credit_amount` |
| `Invoice` | `debitAmount` | `debit_amount` |
| `Invoice` | `refundAmount` | `refund_amount` |
| `Invoice` | `paidAmount` | `paid_amount` |
| `Invoice` | `dueAmount` | `due_amount` |
| `Invoice` | `lineItems` | `line_items` |
| `Invoice` | `customFields` | `custom_fields` |
| `Invoice` | `displaySettings` | `display_settings` |
| `Invoice` | `avataxDetails` | `avatax_details` |
| `Invoice` | `publicUrl` | `public_url` |
| `Invoice` | `previousBalanceData` | `previous_balance_data` |
| `Invoice` | `publicUrlExpiresOn` | `public_url_expires_on` |
| `Invoice` | `brandingThemeId` | `branding_theme_id` |
| `InvoiceAvataxDetails` | `documentCode` | `document_code` |
| `InvoiceAvataxDetails` | `commitDate` | `commit_date` |
| `InvoiceAvataxDetails` | `modifyDate` | `modify_date` |
| `InvoiceBalanceItem` | `outstandingAmount` | `outstanding_amount` |
| `InvoiceCredit` | `creditNoteNumber` | `credit_note_number` |
| `InvoiceCredit` | `creditNoteUid` | `credit_note_uid` |
| `InvoiceCredit` | `transactionTime` | `transaction_time` |
| `InvoiceCredit` | `originalAmount` | `original_amount` |
| `InvoiceCredit` | `appliedAmount` | `applied_amount` |
| `InvoiceCustomField` | `ownerId` | `owner_id` |
| `InvoiceCustomField` | `ownerType` | `owner_type` |
| `InvoiceCustomField` | `metadatumId` | `metadatum_id` |
| `InvoiceCustomer` | `chargifyId` | `chargify_id` |
| `InvoiceCustomer` | `firstName` | `first_name` |
| `InvoiceCustomer` | `lastName` | `last_name` |
| `InvoiceCustomer` | `vatNumber` | `vat_number` |
| `InvoiceDebit` | `debitNoteNumber` | `debit_note_number` |
| `InvoiceDebit` | `debitNoteUid` | `debit_note_uid` |
| `InvoiceDebit` | `transactionTime` | `transaction_time` |
| `InvoiceDebit` | `originalAmount` | `original_amount` |
| `InvoiceDebit` | `appliedAmount` | `applied_amount` |
| `InvoiceDiscount` | `sourceType` | `source_type` |
| `InvoiceDiscount` | `sourceId` | `source_id` |
| `InvoiceDiscount` | `discountType` | `discount_type` |
| `InvoiceDiscount` | `eligibleAmount` | `eligible_amount` |
| `InvoiceDiscount` | `discountAmount` | `discount_amount` |
| `InvoiceDiscount` | `transactionId` | `transaction_id` |
| `InvoiceDiscount` | `lineItemBreakouts` | `line_item_breakouts` |
| `InvoiceDiscountBreakout` | `eligibleAmount` | `eligible_amount` |
| `InvoiceDiscountBreakout` | `discountAmount` | `discount_amount` |
| `InvoiceDisplaySettings` | `hideZeroSubtotalLines` | `hide_zero_subtotal_lines` |
| `InvoiceDisplaySettings` | `includeDiscountsOnLines` | `include_discounts_on_lines` |
| `InvoiceIssued` | `dueDate` | `due_date` |
| `InvoiceIssued` | `issueDate` | `issue_date` |
| `InvoiceIssued` | `paidDate` | `paid_date` |
| `InvoiceIssued` | `dueAmount` | `due_amount` |
| `InvoiceIssued` | `paidAmount` | `paid_amount` |
| `InvoiceIssued` | `taxAmount` | `tax_amount` |
| `InvoiceIssued` | `refundAmount` | `refund_amount` |
| `InvoiceIssued` | `totalAmount` | `total_amount` |
| `InvoiceIssued` | `statusAmount` | `status_amount` |
| `InvoiceIssued` | `productName` | `product_name` |
| `InvoiceIssued` | `consolidationLevel` | `consolidation_level` |
| `InvoiceIssued` | `lineItems` | `line_items` |
| `InvoiceLineItem` | `unitPrice` | `unit_price` |
| `InvoiceLineItem` | `subtotalAmount` | `subtotal_amount` |
| `InvoiceLineItem` | `discountAmount` | `discount_amount` |
| `InvoiceLineItem` | `taxAmount` | `tax_amount` |
| `InvoiceLineItem` | `taxIncluded` | `tax_included` |
| `InvoiceLineItem` | `totalAmount` | `total_amount` |
| `InvoiceLineItem` | `tieredUnitPrice` | `tiered_unit_price` |
| `InvoiceLineItem` | `periodRangeStart` | `period_range_start` |
| `InvoiceLineItem` | `periodRangeEnd` | `period_range_end` |
| `InvoiceLineItem` | `transactionId` | `transaction_id` |
| `InvoiceLineItem` | `productId` | `product_id` |
| `InvoiceLineItem` | `productVersion` | `product_version` |
| `InvoiceLineItem` | `componentId` | `component_id` |
| `InvoiceLineItem` | `pricePointId` | `price_point_id` |
| `InvoiceLineItem` | `billingScheduleItemId` | `billing_schedule_item_id` |
| `InvoiceLineItem` | `componentCostData` | `component_cost_data` |
| `InvoiceLineItem` | `productPricePointId` | `product_price_point_id` |
| `InvoiceLineItem` | `customItem` | `custom_item` |
| `InvoiceLineItem` | `prepaidAllocationExpiresAt` | `prepaid_allocation_expires_at` |
| `InvoiceLineItemEventData` | `quantityDelta` | `quantity_delta` |
| `InvoiceLineItemEventData` | `unitPrice` | `unit_price` |
| `InvoiceLineItemEventData` | `periodRangeStart` | `period_range_start` |
| `InvoiceLineItemEventData` | `periodRangeEnd` | `period_range_end` |
| `InvoiceLineItemEventData` | `lineReferences` | `line_references` |
| `InvoiceLineItemEventData` | `pricingDetailsIndex` | `pricing_details_index` |
| `InvoiceLineItemEventData` | `pricingDetails` | `pricing_details` |
| `InvoiceLineItemEventData` | `taxCode` | `tax_code` |
| `InvoiceLineItemEventData` | `taxAmount` | `tax_amount` |
| `InvoiceLineItemEventData` | `productId` | `product_id` |
| `InvoiceLineItemEventData` | `productPricePointId` | `product_price_point_id` |
| `InvoiceLineItemEventData` | `pricePointId` | `price_point_id` |
| `InvoiceLineItemEventData` | `componentId` | `component_id` |
| `InvoiceLineItemEventData` | `billingScheduleItemId` | `billing_schedule_item_id` |
| `InvoiceLineItemEventData` | `customItem` | `custom_item` |
| `InvoicePayer` | `chargifyId` | `chargify_id` |
| `InvoicePayer` | `firstName` | `first_name` |
| `InvoicePayer` | `lastName` | `last_name` |
| `InvoicePayer` | `vatNumber` | `vat_number` |
| `InvoicePayerChange` | `firstName` | `first_name` |
| `InvoicePayerChange` | `lastName` | `last_name` |
| `InvoicePayment` | `transactionTime` | `transaction_time` |
| `InvoicePayment` | `originalAmount` | `original_amount` |
| `InvoicePayment` | `appliedAmount` | `applied_amount` |
| `InvoicePayment` | `paymentMethod` | `payment_method` |
| `InvoicePayment` | `transactionId` | `transaction_id` |
| `InvoicePayment` | `gatewayHandle` | `gateway_handle` |
| `InvoicePayment` | `gatewayUsed` | `gateway_used` |
| `InvoicePayment` | `gatewayTransactionId` | `gateway_transaction_id` |
| `InvoicePayment` | `receivedOn` | `received_on` |
| `InvoicePaymentApplication` | `invoiceUid` | `invoice_uid` |
| `InvoicePaymentApplication` | `applicationUid` | `application_uid` |
| `InvoicePaymentApplication` | `appliedAmount` | `applied_amount` |
| `InvoicePaymentMethod` | `cardBrand` | `card_brand` |
| `InvoicePaymentMethod` | `cardExpiration` | `card_expiration` |
| `InvoicePaymentMethod` | `lastFour` | `last_four` |
| `InvoicePaymentMethod` | `maskedCardNumber` | `masked_card_number` |
| `InvoicePrePayment` | `subscriptionId` | `subscription_id` |
| `InvoicePrePayment` | `amountInCents` | `amount_in_cents` |
| `InvoicePrePayment` | `endingBalanceInCents` | `ending_balance_in_cents` |
| `InvoicePreviousBalance` | `capturedAt` | `captured_at` |
| `InvoiceRefund` | `transactionId` | `transaction_id` |
| `InvoiceRefund` | `paymentId` | `payment_id` |
| `InvoiceRefund` | `originalAmount` | `original_amount` |
| `InvoiceRefund` | `appliedAmount` | `applied_amount` |
| `InvoiceRefund` | `gatewayTransactionId` | `gateway_transaction_id` |
| `InvoiceRefund` | `gatewayUsed` | `gateway_used` |
| `InvoiceRefund` | `gatewayHandle` | `gateway_handle` |
| `InvoiceRefund` | `achLateReject` | `ach_late_reject` |
| `InvoiceSeller` | `logoUrl` | `logo_url` |
| `InvoiceTax` | `sourceType` | `source_type` |
| `InvoiceTax` | `sourceId` | `source_id` |
| `InvoiceTax` | `taxableAmount` | `taxable_amount` |
| `InvoiceTax` | `taxAmount` | `tax_amount` |
| `InvoiceTax` | `transactionId` | `transaction_id` |
| `InvoiceTax` | `lineItemBreakouts` | `line_item_breakouts` |
| `InvoiceTax` | `taxComponentBreakouts` | `tax_component_breakouts` |
| `InvoiceTax` | `euVat` | `eu_vat` |
| `InvoiceTax` | `taxExemptAmount` | `tax_exempt_amount` |
| `InvoiceTaxBreakout` | `taxableAmount` | `taxable_amount` |
| `InvoiceTaxBreakout` | `taxAmount` | `tax_amount` |
| `InvoiceTaxBreakout` | `taxExemptAmount` | `tax_exempt_amount` |
| `InvoiceTaxComponentBreakout` | `taxRuleId` | `tax_rule_id` |
| `InvoiceTaxComponentBreakout` | `countryCode` | `country_code` |
| `InvoiceTaxComponentBreakout` | `subdivisionCode` | `subdivision_code` |
| `InvoiceTaxComponentBreakout` | `taxAmount` | `tax_amount` |
| `InvoiceTaxComponentBreakout` | `taxableAmount` | `taxable_amount` |
| `InvoiceTaxComponentBreakout` | `taxExemptAmount` | `tax_exempt_amount` |
| `InvoiceTaxComponentBreakout` | `nonTaxableAmount` | `non_taxable_amount` |
| `InvoiceTaxComponentBreakout` | `taxName` | `tax_name` |
| `InvoiceTaxComponentBreakout` | `taxType` | `tax_type` |
| `InvoiceTaxComponentBreakout` | `rateType` | `rate_type` |
| `InvoiceTaxComponentBreakout` | `taxAuthorityType` | `tax_authority_type` |
| `InvoiceTaxComponentBreakout` | `stateAssignedNo` | `state_assigned_no` |
| `InvoiceTaxComponentBreakout` | `taxSubType` | `tax_sub_type` |
| `IssueInvoiceEvent` | `eventType` | `event_type` |
| `IssueInvoiceEvent` | `eventData` | `event_data` |
| `IssueInvoiceEventData` | `consolidationLevel` | `consolidation_level` |
| `IssueInvoiceEventData` | `fromStatus` | `from_status` |
| `IssueInvoiceEventData` | `toStatus` | `to_status` |
| `IssueInvoiceEventData` | `dueAmount` | `due_amount` |
| `IssueInvoiceEventData` | `totalAmount` | `total_amount` |
| `IssueInvoiceRequest` | `onFailedPayment` | `on_failed_payment` |
| `IssueServiceCreditRequest` | `serviceCredit` | `service_credit` |
| `ItemPricePointChanged` | `itemId` | `item_id` |
| `ItemPricePointChanged` | `itemType` | `item_type` |
| `ItemPricePointChanged` | `itemHandle` | `item_handle` |
| `ItemPricePointChanged` | `itemName` | `item_name` |
| `ItemPricePointChanged` | `previousPricePoint` | `previous_price_point` |
| `ItemPricePointChanged` | `currentPricePoint` | `current_price_point` |
| `ListComponentsFilter` | `useSiteExchangeRate` | `use_site_exchange_rate` |
| `ListComponentsPricePointsResponse` | `pricePoints` | `price_points` |
| `ListCouponsFilter` | `dateField` | `date_field` |
| `ListCouponsFilter` | `startDate` | `start_date` |
| `ListCouponsFilter` | `endDate` | `end_date` |
| `ListCouponsFilter` | `startDatetime` | `start_datetime` |
| `ListCouponsFilter` | `endDatetime` | `end_datetime` |
| `ListCouponsFilter` | `useSiteExchangeRate` | `use_site_exchange_rate` |
| `ListCouponsFilter` | `includeArchived` | `include_archived` |
| `ListCreditNotesResponse` | `creditNotes` | `credit_notes` |
| `ListInvoiceEventsResponse` | `perPage` | `per_page` |
| `ListInvoiceEventsResponse` | `totalPages` | `total_pages` |
| `ListMrrResponseResult` | `perPage` | `per_page` |
| `ListMrrResponseResult` | `totalPages` | `total_pages` |
| `ListMrrResponseResult` | `totalEntries` | `total_entries` |
| `ListMrrResponseResult` | `currencySymbol` | `currency_symbol` |
| `ListMetafieldsResponse` | `totalCount` | `total_count` |
| `ListMetafieldsResponse` | `currentPage` | `current_page` |
| `ListMetafieldsResponse` | `totalPages` | `total_pages` |
| `ListMetafieldsResponse` | `perPage` | `per_page` |
| `ListMrrFilter` | `subscriptionIds` | `subscription_ids` |
| `ListPrepaymentsFilter` | `dateField` | `date_field` |
| `ListPrepaymentsFilter` | `startDate` | `start_date` |
| `ListPrepaymentsFilter` | `endDate` | `end_date` |
| `ListPricePointsFilter` | `dateField` | `date_field` |
| `ListPricePointsFilter` | `startDate` | `start_date` |
| `ListPricePointsFilter` | `endDate` | `end_date` |
| `ListPricePointsFilter` | `startDatetime` | `start_datetime` |
| `ListPricePointsFilter` | `endDatetime` | `end_datetime` |
| `ListPricePointsFilter` | `archivedAt` | `archived_at` |
| `ListProductPricePointsResponse` | `pricePoints` | `price_points` |
| `ListProductsFilter` | `prepaidProductPricePoint` | `prepaid_product_price_point` |
| `ListProductsFilter` | `useSiteExchangeRate` | `use_site_exchange_rate` |
| `ListProformaInvoicesMeta` | `totalCount` | `total_count` |
| `ListProformaInvoicesMeta` | `currentPage` | `current_page` |
| `ListProformaInvoicesMeta` | `totalPages` | `total_pages` |
| `ListProformaInvoicesMeta` | `statusCode` | `status_code` |
| `ListProformaInvoicesResponse` | `proformaInvoices` | `proforma_invoices` |
| `ListPublicKeysMeta` | `totalCount` | `total_count` |
| `ListPublicKeysMeta` | `currentPage` | `current_page` |
| `ListPublicKeysMeta` | `totalPages` | `total_pages` |
| `ListPublicKeysMeta` | `perPage` | `per_page` |
| `ListPublicKeysResponse` | `chargifyJsKeys` | `chargify_js_keys` |
| `ListSaleRepItem` | `fullName` | `full_name` |
| `ListSaleRepItem` | `subscriptionsCount` | `subscriptions_count` |
| `ListSaleRepItem` | `mrrData` | `mrr_data` |
| `ListSaleRepItem` | `testMode` | `test_mode` |
| `ListSegmentsFilter` | `segmentProperty1Value` | `segment_property_1_value` |
| `ListSegmentsFilter` | `segmentProperty2Value` | `segment_property_2_value` |
| `ListSegmentsFilter` | `segmentProperty3Value` | `segment_property_3_value` |
| `ListSegmentsFilter` | `segmentProperty4Value` | `segment_property_4_value` |
| `ListServiceCreditsResponse` | `serviceCredits` | `service_credits` |
| `ListSubscriptionComponentsFilter` | `useSiteExchangeRate` | `use_site_exchange_rate` |
| `ListSubscriptionComponentsForSiteFilter` | `useSiteExchangeRate` | `use_site_exchange_rate` |
| `ListSubscriptionComponentsResponse` | `subscriptionsComponents` | `subscriptions_components` |
| `ListSubscriptionGroupPrepaymentItem` | `subscriptionGroupUid` | `subscription_group_uid` |
| `ListSubscriptionGroupPrepaymentItem` | `amountInCents` | `amount_in_cents` |
| `ListSubscriptionGroupPrepaymentItem` | `remainingAmountInCents` | `remaining_amount_in_cents` |
| `ListSubscriptionGroupPrepaymentItem` | `paymentType` | `payment_type` |
| `ListSubscriptionGroupPrepaymentItem` | `createdAt` | `created_at` |
| `ListSubscriptionGroupsItem` | `customerId` | `customer_id` |
| `ListSubscriptionGroupsItem` | `paymentProfileId` | `payment_profile_id` |
| `ListSubscriptionGroupsItem` | `subscriptionIds` | `subscription_ids` |
| `ListSubscriptionGroupsItem` | `primarySubscriptionId` | `primary_subscription_id` |
| `ListSubscriptionGroupsItem` | `nextAssessmentAt` | `next_assessment_at` |
| `ListSubscriptionGroupsItem` | `cancelAtEndOfPeriod` | `cancel_at_end_of_period` |
| `ListSubscriptionGroupsItem` | `accountBalances` | `account_balances` |
| `ListSubscriptionGroupsItem` | `groupType` | `group_type` |
| `ListSubscriptionGroupsMeta` | `currentPage` | `current_page` |
| `ListSubscriptionGroupsMeta` | `totalCount` | `total_count` |
| `ListSubscriptionGroupsResponse` | `subscriptionGroups` | `subscription_groups` |
| `Mrr` | `amountInCents` | `amount_in_cents` |
| `Mrr` | `amountFormatted` | `amount_formatted` |
| `Mrr` | `currencySymbol` | `currency_symbol` |
| `Mrr` | `atTime` | `at_time` |
| `MrrMovement` | `subscriberDelta` | `subscriber_delta` |
| `MrrMovement` | `leadDelta` | `lead_delta` |
| `MaxioGatewayOAuthAccessToken` | `accessToken` | `access_token` |
| `MaxioGatewayOAuthAccessToken` | `tokenType` | `token_type` |
| `MaxioGatewayOAuthAccessToken` | `expiresIn` | `expires_in` |
| `MaxioGatewayOAuthAccessToken` | `createdAt` | `created_at` |
| `MaxioGatewayOAuthError` | `errorDescription` | `error_description` |
| `MaxioGatewayOAuthErrorError` | `errorDescription` | `error_description` |
| `MaxioGatewayOAuthTokenRequest` | `grantType` | `grant_type` |
| `MaxioGatewayOAuthTokenRequest` | `clientId` | `client_id` |
| `MaxioGatewayOAuthTokenRequest` | `clientSecret` | `client_secret` |
| `Metadata` | `resourceId` | `resource_id` |
| `Metadata` | `deletedAt` | `deleted_at` |
| `Metadata` | `metafieldId` | `metafield_id` |
| `Metafield` | `dataCount` | `data_count` |
| `Metafield` | `inputType` | `input_type` |
| `MetafieldScope` | `publicShow` | `public_show` |
| `MetafieldScope` | `publicEdit` | `public_edit` |
| `MeteredComponent` | `unitName` | `unit_name` |
| `MeteredComponent` | `pricingScheme` | `pricing_scheme` |
| `MeteredComponent` | `pricePoints` | `price_points` |
| `MeteredComponent` | `unitPrice` | `unit_price` |
| `MeteredComponent` | `taxCode` | `tax_code` |
| `MeteredComponent` | `hideDateRangeOnInvoice` | `hide_date_range_on_invoice` |
| `MeteredComponent` | `displayOnHostedPage` | `display_on_hosted_page` |
| `MeteredComponent` | `allowFractionalQuantities` | `allow_fractional_quantities` |
| `MeteredComponent` | `publicSignupPageIds` | `public_signup_page_ids` |
| `MeteredComponent` | `intervalUnit` | `interval_unit` |
| `MeteredUsage` | `previousUnitBalance` | `previous_unit_balance` |
| `MeteredUsage` | `newUnitBalance` | `new_unit_balance` |
| `MeteredUsage` | `usageQuantity` | `usage_quantity` |
| `MeteredUsage` | `componentId` | `component_id` |
| `MeteredUsage` | `componentHandle` | `component_handle` |
| `Movement` | `amountInCents` | `amount_in_cents` |
| `Movement` | `amountFormatted` | `amount_formatted` |
| `Movement` | `lineItems` | `line_items` |
| `Movement` | `subscriptionId` | `subscription_id` |
| `Movement` | `subscriberName` | `subscriber_name` |
| `MovementLineItem` | `productId` | `product_id` |
| `MovementLineItem` | `componentId` | `component_id` |
| `MovementLineItem` | `pricePointId` | `price_point_id` |
| `MovementLineItem` | `mrrMovements` | `mrr_movements` |
| `MovementLineItem` | `prevQuantity` | `prev_quantity` |
| `MultiInvoicePayment` | `transactionId` | `transaction_id` |
| `MultiInvoicePayment` | `totalAmount` | `total_amount` |
| `MultiInvoicePayment` | `currencyCode` | `currency_code` |
| `NestedSubscriptionGroup` | `primarySubscriptionId` | `primary_subscription_id` |
| `NetTerms` | `defaultNetTerms` | `default_net_terms` |
| `NetTerms` | `automaticNetTerms` | `automatic_net_terms` |
| `NetTerms` | `remittanceNetTerms` | `remittance_net_terms` |
| `NetTerms` | `netTermsOnRemittanceSignupsEnabled` | `net_terms_on_remittance_signups_enabled` |
| `NetTerms` | `customNetTermsEnabled` | `custom_net_terms_enabled` |
| `Offer` | `siteId` | `site_id` |
| `Offer` | `productFamilyId` | `product_family_id` |
| `Offer` | `productId` | `product_id` |
| `Offer` | `productPricePointId` | `product_price_point_id` |
| `Offer` | `productRevisableNumber` | `product_revisable_number` |
| `Offer` | `createdAt` | `created_at` |
| `Offer` | `updatedAt` | `updated_at` |
| `Offer` | `archivedAt` | `archived_at` |
| `Offer` | `offerItems` | `offer_items` |
| `Offer` | `offerDiscounts` | `offer_discounts` |
| `Offer` | `productFamilyName` | `product_family_name` |
| `Offer` | `productName` | `product_name` |
| `Offer` | `productPricePointName` | `product_price_point_name` |
| `Offer` | `productPriceInCents` | `product_price_in_cents` |
| `Offer` | `offerSignupPages` | `offer_signup_pages` |
| `OfferDiscount` | `couponCode` | `coupon_code` |
| `OfferDiscount` | `couponId` | `coupon_id` |
| `OfferDiscount` | `couponName` | `coupon_name` |
| `OfferItem` | `componentId` | `component_id` |
| `OfferItem` | `pricePointId` | `price_point_id` |
| `OfferItem` | `startingQuantity` | `starting_quantity` |
| `OfferItem` | `componentUnitPrice` | `component_unit_price` |
| `OfferItem` | `componentName` | `component_name` |
| `OfferItem` | `pricePointName` | `price_point_name` |
| `OfferItem` | `currencyPrices` | `currency_prices` |
| `OfferItem` | `intervalUnit` | `interval_unit` |
| `OfferSignupPage` | `returnUrl` | `return_url` |
| `OfferSignupPage` | `returnParams` | `return_params` |
| `OnOffComponent` | `upgradeCharge` | `upgrade_charge` |
| `OnOffComponent` | `downgradeCredit` | `downgrade_credit` |
| `OnOffComponent` | `pricePoints` | `price_points` |
| `OnOffComponent` | `unitPrice` | `unit_price` |
| `OnOffComponent` | `taxCode` | `tax_code` |
| `OnOffComponent` | `hideDateRangeOnInvoice` | `hide_date_range_on_invoice` |
| `OnOffComponent` | `displayOnHostedPage` | `display_on_hosted_page` |
| `OnOffComponent` | `allowFractionalQuantities` | `allow_fractional_quantities` |
| `OnOffComponent` | `publicSignupPageIds` | `public_signup_page_ids` |
| `OnOffComponent` | `intervalUnit` | `interval_unit` |
| `OveragePricing` | `pricingScheme` | `pricing_scheme` |
| `OverrideSubscription` | `activatedAt` | `activated_at` |
| `OverrideSubscription` | `canceledAt` | `canceled_at` |
| `OverrideSubscription` | `cancellationMessage` | `cancellation_message` |
| `OverrideSubscription` | `expiresAt` | `expires_at` |
| `OverrideSubscription` | `currentPeriodStartsAt` | `current_period_starts_at` |
| `PaginatedMetadata` | `totalCount` | `total_count` |
| `PaginatedMetadata` | `currentPage` | `current_page` |
| `PaginatedMetadata` | `totalPages` | `total_pages` |
| `PaginatedMetadata` | `perPage` | `per_page` |
| `PaidInvoice` | `invoiceId` | `invoice_id` |
| `PaidInvoice` | `dueAmount` | `due_amount` |
| `PaidInvoice` | `paidAmount` | `paid_amount` |
| `PayerAttributes` | `firstName` | `first_name` |
| `PayerAttributes` | `lastName` | `last_name` |
| `PayerAttributes` | `ccEmails` | `cc_emails` |
| `PayerAttributes` | `address2` | `address_2` |
| `PayerAttributes` | `vatNumber` | `vat_number` |
| `PayerAttributes` | `taxExempt` | `tax_exempt` |
| `PayerAttributes` | `taxExemptReason` | `tax_exempt_reason` |
| `PayerError` | `lastName` | `last_name` |
| `PayerError` | `firstName` | `first_name` |
| `PaymentCollectionMethodChanged` | `previousValue` | `previous_value` |
| `PaymentCollectionMethodChanged` | `currentValue` | `current_value` |
| `PaymentMethodBankAccount` | `maskedAccountNumber` | `masked_account_number` |
| `PaymentMethodBankAccount` | `maskedRoutingNumber` | `masked_routing_number` |
| `PaymentMethodCreditCard` | `cardBrand` | `card_brand` |
| `PaymentMethodCreditCard` | `cardExpiration` | `card_expiration` |
| `PaymentMethodCreditCard` | `lastFour` | `last_four` |
| `PaymentMethodCreditCard` | `maskedCardNumber` | `masked_card_number` |
| `PaymentProfileAttributes` | `chargifyToken` | `chargify_token` |
| `PaymentProfileAttributes` | `paymentType` | `payment_type` |
| `PaymentProfileAttributes` | `firstName` | `first_name` |
| `PaymentProfileAttributes` | `lastName` | `last_name` |
| `PaymentProfileAttributes` | `maskedCardNumber` | `masked_card_number` |
| `PaymentProfileAttributes` | `fullNumber` | `full_number` |
| `PaymentProfileAttributes` | `cardType` | `card_type` |
| `PaymentProfileAttributes` | `expirationMonth` | `expiration_month` |
| `PaymentProfileAttributes` | `expirationYear` | `expiration_year` |
| `PaymentProfileAttributes` | `billingAddress` | `billing_address` |
| `PaymentProfileAttributes` | `billingAddress2` | `billing_address_2` |
| `PaymentProfileAttributes` | `billingCity` | `billing_city` |
| `PaymentProfileAttributes` | `billingState` | `billing_state` |
| `PaymentProfileAttributes` | `billingCountry` | `billing_country` |
| `PaymentProfileAttributes` | `billingZip` | `billing_zip` |
| `PaymentProfileAttributes` | `currentVault` | `current_vault` |
| `PaymentProfileAttributes` | `vaultToken` | `vault_token` |
| `PaymentProfileAttributes` | `customerVaultToken` | `customer_vault_token` |
| `PaymentProfileAttributes` | `customerId` | `customer_id` |
| `PaymentProfileAttributes` | `paypalEmail` | `paypal_email` |
| `PaymentProfileAttributes` | `paymentMethodNonce` | `payment_method_nonce` |
| `PaymentProfileAttributes` | `gatewayHandle` | `gateway_handle` |
| `PaymentProfileAttributes` | `lastFour` | `last_four` |
| `PaymentProfileResponse` | `paymentProfile` | `payment_profile` |
| `PaymentRelatedEvents` | `productId` | `product_id` |
| `PaymentRelatedEvents` | `accountTransactionId` | `account_transaction_id` |
| `PaymentForAllocation` | `amountInCents` | `amount_in_cents` |
| `PaymentProfileParams` | `firstName` | `first_name` |
| `PaymentProfileParams` | `lastName` | `last_name` |
| `PaymentProfileParams` | `cardType` | `card_type` |
| `PaypalPaymentProfile` | `firstName` | `first_name` |
| `PaypalPaymentProfile` | `lastName` | `last_name` |
| `PaypalPaymentProfile` | `customerId` | `customer_id` |
| `PaypalPaymentProfile` | `currentVault` | `current_vault` |
| `PaypalPaymentProfile` | `vaultToken` | `vault_token` |
| `PaypalPaymentProfile` | `billingAddress` | `billing_address` |
| `PaypalPaymentProfile` | `billingCity` | `billing_city` |
| `PaypalPaymentProfile` | `billingState` | `billing_state` |
| `PaypalPaymentProfile` | `billingZip` | `billing_zip` |
| `PaypalPaymentProfile` | `billingCountry` | `billing_country` |
| `PaypalPaymentProfile` | `customerVaultToken` | `customer_vault_token` |
| `PaypalPaymentProfile` | `billingAddress2` | `billing_address_2` |
| `PaypalPaymentProfile` | `paymentType` | `payment_type` |
| `PaypalPaymentProfile` | `siteGatewaySettingId` | `site_gateway_setting_id` |
| `PaypalPaymentProfile` | `gatewayHandle` | `gateway_handle` |
| `PaypalPaymentProfile` | `paypalEmail` | `paypal_email` |
| `PaypalPaymentProfile` | `createdAt` | `created_at` |
| `PaypalPaymentProfile` | `updatedAt` | `updated_at` |
| `PendingCancellationChange` | `cancellationState` | `cancellation_state` |
| `PendingCancellationChange` | `cancelsAt` | `cancels_at` |
| `PortalManagementLink` | `fetchCount` | `fetch_count` |
| `PortalManagementLink` | `createdAt` | `created_at` |
| `PortalManagementLink` | `newLinkAvailableAt` | `new_link_available_at` |
| `PortalManagementLink` | `expiresAt` | `expires_at` |
| `PortalManagementLink` | `lastInviteSentAt` | `last_invite_sent_at` |
| `PrepaidConfiguration` | `initialFundingAmountInCents` | `initial_funding_amount_in_cents` |
| `PrepaidConfiguration` | `replenishToAmountInCents` | `replenish_to_amount_in_cents` |
| `PrepaidConfiguration` | `autoReplenish` | `auto_replenish` |
| `PrepaidConfiguration` | `replenishThresholdAmountInCents` | `replenish_threshold_amount_in_cents` |
| `PrepaidConfigurationResponse` | `prepaidConfiguration` | `prepaid_configuration` |
| `PrepaidProductPricePointFilter` | `productPricePointId` | `product_price_point_id` |
| `PrepaidSubscriptionBalanceChanged` | `currentAccountBalanceInCents` | `current_account_balance_in_cents` |
| `PrepaidSubscriptionBalanceChanged` | `prepaymentAccountBalanceInCents` | `prepayment_account_balance_in_cents` |
| `PrepaidSubscriptionBalanceChanged` | `currentUsageAmountInCents` | `current_usage_amount_in_cents` |
| `PrepaidUsage` | `previousUnitBalance` | `previous_unit_balance` |
| `PrepaidUsage` | `previousOverageUnitBalance` | `previous_overage_unit_balance` |
| `PrepaidUsage` | `newUnitBalance` | `new_unit_balance` |
| `PrepaidUsage` | `newOverageUnitBalance` | `new_overage_unit_balance` |
| `PrepaidUsage` | `usageQuantity` | `usage_quantity` |
| `PrepaidUsage` | `overageUsageQuantity` | `overage_usage_quantity` |
| `PrepaidUsage` | `componentId` | `component_id` |
| `PrepaidUsage` | `componentHandle` | `component_handle` |
| `PrepaidUsage` | `allocationDetails` | `allocation_details` |
| `PrepaidUsageAllocationDetail` | `allocationId` | `allocation_id` |
| `PrepaidUsageAllocationDetail` | `chargeId` | `charge_id` |
| `PrepaidUsageAllocationDetail` | `usageQuantity` | `usage_quantity` |
| `PrepaidUsageComponent` | `unitName` | `unit_name` |
| `PrepaidUsageComponent` | `pricingScheme` | `pricing_scheme` |
| `PrepaidUsageComponent` | `upgradeCharge` | `upgrade_charge` |
| `PrepaidUsageComponent` | `downgradeCredit` | `downgrade_credit` |
| `PrepaidUsageComponent` | `pricePoints` | `price_points` |
| `PrepaidUsageComponent` | `unitPrice` | `unit_price` |
| `PrepaidUsageComponent` | `taxCode` | `tax_code` |
| `PrepaidUsageComponent` | `hideDateRangeOnInvoice` | `hide_date_range_on_invoice` |
| `PrepaidUsageComponent` | `overagePricing` | `overage_pricing` |
| `PrepaidUsageComponent` | `rolloverPrepaidRemainder` | `rollover_prepaid_remainder` |
| `PrepaidUsageComponent` | `renewPrepaidAllocation` | `renew_prepaid_allocation` |
| `PrepaidUsageComponent` | `expirationInterval` | `expiration_interval` |
| `PrepaidUsageComponent` | `expirationIntervalUnit` | `expiration_interval_unit` |
| `PrepaidUsageComponent` | `displayOnHostedPage` | `display_on_hosted_page` |
| `PrepaidUsageComponent` | `allowFractionalQuantities` | `allow_fractional_quantities` |
| `PrepaidUsageComponent` | `publicSignupPageIds` | `public_signup_page_ids` |
| `Prepayment` | `subscriptionId` | `subscription_id` |
| `Prepayment` | `amountInCents` | `amount_in_cents` |
| `Prepayment` | `remainingAmountInCents` | `remaining_amount_in_cents` |
| `Prepayment` | `refundedAmountInCents` | `refunded_amount_in_cents` |
| `Prepayment` | `paymentType` | `payment_type` |
| `Prepayment` | `createdAt` | `created_at` |
| `PrepaymentAccountBalanceChanged` | `prepaymentAccountBalanceInCents` | `prepayment_account_balance_in_cents` |
| `PrepaymentAccountBalanceChanged` | `prepaymentBalanceChangeInCents` | `prepayment_balance_change_in_cents` |
| `PrepaymentAccountBalanceChanged` | `currencyCode` | `currency_code` |
| `PrepaymentAggregatedError` | `amountInCents` | `amount_in_cents` |
| `PreviewAllocationsRequest` | `effectiveProrationDate` | `effective_proration_date` |
| `PreviewAllocationsRequest` | `upgradeCharge` | `upgrade_charge` |
| `PreviewAllocationsRequest` | `downgradeCredit` | `downgrade_credit` |
| `Price` | `startingQuantity` | `starting_quantity` |
| `Price` | `endingQuantity` | `ending_quantity` |
| `Price` | `unitPrice` | `unit_price` |
| `Product` | `accountingCode` | `accounting_code` |
| `Product` | `requestCreditCard` | `request_credit_card` |
| `Product` | `expirationInterval` | `expiration_interval` |
| `Product` | `expirationIntervalUnit` | `expiration_interval_unit` |
| `Product` | `createdAt` | `created_at` |
| `Product` | `updatedAt` | `updated_at` |
| `Product` | `priceInCents` | `price_in_cents` |
| `Product` | `intervalUnit` | `interval_unit` |
| `Product` | `initialChargeInCents` | `initial_charge_in_cents` |
| `Product` | `trialPriceInCents` | `trial_price_in_cents` |
| `Product` | `trialInterval` | `trial_interval` |
| `Product` | `trialIntervalUnit` | `trial_interval_unit` |
| `Product` | `archivedAt` | `archived_at` |
| `Product` | `requireCreditCard` | `require_credit_card` |
| `Product` | `returnParams` | `return_params` |
| `Product` | `updateReturnUrl` | `update_return_url` |
| `Product` | `initialChargeAfterTrial` | `initial_charge_after_trial` |
| `Product` | `versionNumber` | `version_number` |
| `Product` | `updateReturnParams` | `update_return_params` |
| `Product` | `productFamily` | `product_family` |
| `Product` | `publicSignupPages` | `public_signup_pages` |
| `Product` | `productPricePointName` | `product_price_point_name` |
| `Product` | `requestBillingAddress` | `request_billing_address` |
| `Product` | `requireBillingAddress` | `require_billing_address` |
| `Product` | `requireShippingAddress` | `require_shipping_address` |
| `Product` | `taxCode` | `tax_code` |
| `Product` | `defaultProductPricePointId` | `default_product_price_point_id` |
| `Product` | `useSiteExchangeRate` | `use_site_exchange_rate` |
| `Product` | `itemCategory` | `item_category` |
| `Product` | `productPricePointId` | `product_price_point_id` |
| `Product` | `productPricePointHandle` | `product_price_point_handle` |
| `ProductFamily` | `accountingCode` | `accounting_code` |
| `ProductFamily` | `createdAt` | `created_at` |
| `ProductFamily` | `updatedAt` | `updated_at` |
| `ProductFamily` | `archivedAt` | `archived_at` |
| `ProductFamilyResponse` | `productFamily` | `product_family` |
| `ProductPricePoint` | `priceInCents` | `price_in_cents` |
| `ProductPricePoint` | `intervalUnit` | `interval_unit` |
| `ProductPricePoint` | `trialPriceInCents` | `trial_price_in_cents` |
| `ProductPricePoint` | `trialInterval` | `trial_interval` |
| `ProductPricePoint` | `trialIntervalUnit` | `trial_interval_unit` |
| `ProductPricePoint` | `trialType` | `trial_type` |
| `ProductPricePoint` | `introductoryOffer` | `introductory_offer` |
| `ProductPricePoint` | `initialChargeInCents` | `initial_charge_in_cents` |
| `ProductPricePoint` | `initialChargeAfterTrial` | `initial_charge_after_trial` |
| `ProductPricePoint` | `expirationInterval` | `expiration_interval` |
| `ProductPricePoint` | `expirationIntervalUnit` | `expiration_interval_unit` |
| `ProductPricePoint` | `productId` | `product_id` |
| `ProductPricePoint` | `archivedAt` | `archived_at` |
| `ProductPricePoint` | `createdAt` | `created_at` |
| `ProductPricePoint` | `updatedAt` | `updated_at` |
| `ProductPricePoint` | `useSiteExchangeRate` | `use_site_exchange_rate` |
| `ProductPricePoint` | `taxIncluded` | `tax_included` |
| `ProductPricePoint` | `subscriptionId` | `subscription_id` |
| `ProductPricePoint` | `currencyPrices` | `currency_prices` |
| `ProductPricePointErrors` | `pricePoint` | `price_point` |
| `ProductPricePointErrors` | `intervalUnit` | `interval_unit` |
| `ProductPricePointErrors` | `priceInCents` | `price_in_cents` |
| `ProductPricePointResponse` | `pricePoint` | `price_point` |
| `ProformaInvoice` | `siteId` | `site_id` |
| `ProformaInvoice` | `customerId` | `customer_id` |
| `ProformaInvoice` | `subscriptionId` | `subscription_id` |
| `ProformaInvoice` | `sequenceNumber` | `sequence_number` |
| `ProformaInvoice` | `createdAt` | `created_at` |
| `ProformaInvoice` | `deliveryDate` | `delivery_date` |
| `ProformaInvoice` | `collectionMethod` | `collection_method` |
| `ProformaInvoice` | `paymentInstructions` | `payment_instructions` |
| `ProformaInvoice` | `consolidationLevel` | `consolidation_level` |
| `ProformaInvoice` | `productName` | `product_name` |
| `ProformaInvoice` | `productFamilyName` | `product_family_name` |
| `ProformaInvoice` | `billingAddress` | `billing_address` |
| `ProformaInvoice` | `shippingAddress` | `shipping_address` |
| `ProformaInvoice` | `subtotalAmount` | `subtotal_amount` |
| `ProformaInvoice` | `discountAmount` | `discount_amount` |
| `ProformaInvoice` | `taxAmount` | `tax_amount` |
| `ProformaInvoice` | `totalAmount` | `total_amount` |
| `ProformaInvoice` | `creditAmount` | `credit_amount` |
| `ProformaInvoice` | `paidAmount` | `paid_amount` |
| `ProformaInvoice` | `refundAmount` | `refund_amount` |
| `ProformaInvoice` | `dueAmount` | `due_amount` |
| `ProformaInvoice` | `lineItems` | `line_items` |
| `ProformaInvoice` | `customFields` | `custom_fields` |
| `ProformaInvoice` | `publicUrl` | `public_url` |
| `ProformaInvoice` | `availableActions` | `available_actions` |
| `ProformaInvoiceCredit` | `originalAmount` | `original_amount` |
| `ProformaInvoiceCredit` | `appliedAmount` | `applied_amount` |
| `ProformaInvoiceDiscount` | `sourceType` | `source_type` |
| `ProformaInvoiceDiscount` | `discountType` | `discount_type` |
| `ProformaInvoiceDiscount` | `eligibleAmount` | `eligible_amount` |
| `ProformaInvoiceDiscount` | `discountAmount` | `discount_amount` |
| `ProformaInvoiceDiscount` | `lineItemBreakouts` | `line_item_breakouts` |
| `ProformaInvoiceIssued` | `deliveryDate` | `delivery_date` |
| `ProformaInvoiceIssued` | `createdAt` | `created_at` |
| `ProformaInvoiceIssued` | `dueAmount` | `due_amount` |
| `ProformaInvoiceIssued` | `paidAmount` | `paid_amount` |
| `ProformaInvoiceIssued` | `taxAmount` | `tax_amount` |
| `ProformaInvoiceIssued` | `totalAmount` | `total_amount` |
| `ProformaInvoiceIssued` | `productName` | `product_name` |
| `ProformaInvoiceIssued` | `lineItems` | `line_items` |
| `ProformaInvoicePayment` | `originalAmount` | `original_amount` |
| `ProformaInvoicePayment` | `appliedAmount` | `applied_amount` |
| `ProformaInvoiceTax` | `sourceType` | `source_type` |
| `ProformaInvoiceTax` | `taxableAmount` | `taxable_amount` |
| `ProformaInvoiceTax` | `taxAmount` | `tax_amount` |
| `ProformaInvoiceTax` | `lineItemBreakouts` | `line_item_breakouts` |
| `Proration` | `preservePeriod` | `preserve_period` |
| `PublicKey` | `publicKey` | `public_key` |
| `PublicKey` | `requiresSecurityToken` | `requires_security_token` |
| `PublicKey` | `createdAt` | `created_at` |
| `PublicSignupPage` | `returnUrl` | `return_url` |
| `PublicSignupPage` | `returnParams` | `return_params` |
| `QuantityBasedComponent` | `unitName` | `unit_name` |
| `QuantityBasedComponent` | `pricingScheme` | `pricing_scheme` |
| `QuantityBasedComponent` | `upgradeCharge` | `upgrade_charge` |
| `QuantityBasedComponent` | `downgradeCredit` | `downgrade_credit` |
| `QuantityBasedComponent` | `pricePoints` | `price_points` |
| `QuantityBasedComponent` | `unitPrice` | `unit_price` |
| `QuantityBasedComponent` | `taxCode` | `tax_code` |
| `QuantityBasedComponent` | `hideDateRangeOnInvoice` | `hide_date_range_on_invoice` |
| `QuantityBasedComponent` | `displayOnHostedPage` | `display_on_hosted_page` |
| `QuantityBasedComponent` | `allowFractionalQuantities` | `allow_fractional_quantities` |
| `QuantityBasedComponent` | `publicSignupPageIds` | `public_signup_page_ids` |
| `QuantityBasedComponent` | `intervalUnit` | `interval_unit` |
| `ReactivateSubscriptionGroupRequest` | `resumeMembers` | `resume_members` |
| `ReactivateSubscriptionGroupResponse` | `customerId` | `customer_id` |
| `ReactivateSubscriptionGroupResponse` | `paymentProfileId` | `payment_profile_id` |
| `ReactivateSubscriptionGroupResponse` | `subscriptionIds` | `subscription_ids` |
| `ReactivateSubscriptionGroupResponse` | `primarySubscriptionId` | `primary_subscription_id` |
| `ReactivateSubscriptionGroupResponse` | `nextAssessmentAt` | `next_assessment_at` |
| `ReactivateSubscriptionGroupResponse` | `cancelAtEndOfPeriod` | `cancel_at_end_of_period` |
| `ReactivateSubscriptionRequest` | `calendarBilling` | `calendar_billing` |
| `ReactivateSubscriptionRequest` | `includeTrial` | `include_trial` |
| `ReactivateSubscriptionRequest` | `preserveBalance` | `preserve_balance` |
| `ReactivateSubscriptionRequest` | `couponCode` | `coupon_code` |
| `ReactivateSubscriptionRequest` | `useCreditsAndPrepayments` | `use_credits_and_prepayments` |
| `ReactivationBilling` | `reactivationCharge` | `reactivation_charge` |
| `ReasonCode` | `siteId` | `site_id` |
| `ReasonCode` | `createdAt` | `created_at` |
| `ReasonCode` | `updatedAt` | `updated_at` |
| `ReasonCodeResponse` | `reasonCode` | `reason_code` |
| `RecordPaymentResponse` | `paidInvoices` | `paid_invoices` |
| `ReferralCode` | `siteId` | `site_id` |
| `ReferralCode` | `subscriptionId` | `subscription_id` |
| `ReferralValidationResponse` | `referralCode` | `referral_code` |
| `RefundConsolidatedInvoice` | `paymentId` | `payment_id` |
| `RefundConsolidatedInvoice` | `segmentUids` | `segment_uids` |
| `RefundConsolidatedInvoice` | `applyCredit` | `apply_credit` |
| `RefundInvoice` | `paymentId` | `payment_id` |
| `RefundInvoice` | `applyCredit` | `apply_credit` |
| `RefundInvoice` | `voidInvoice` | `void_invoice` |
| `RefundInvoiceEvent` | `eventType` | `event_type` |
| `RefundInvoiceEvent` | `eventData` | `event_data` |
| `RefundInvoiceEventData` | `applyCredit` | `apply_credit` |
| `RefundInvoiceEventData` | `consolidationLevel` | `consolidation_level` |
| `RefundInvoiceEventData` | `creditNoteAttributes` | `credit_note_attributes` |
| `RefundInvoiceEventData` | `originalAmount` | `original_amount` |
| `RefundInvoiceEventData` | `paymentId` | `payment_id` |
| `RefundInvoiceEventData` | `refundAmount` | `refund_amount` |
| `RefundInvoiceEventData` | `refundId` | `refund_id` |
| `RefundInvoiceEventData` | `transactionTime` | `transaction_time` |
| `RefundPrepayment` | `amountInCents` | `amount_in_cents` |
| `RefundSuccess` | `refundId` | `refund_id` |
| `RefundSuccess` | `gatewayTransactionId` | `gateway_transaction_id` |
| `RefundSuccess` | `productId` | `product_id` |
| `Register` | `maxioId` | `maxio_id` |
| `Register` | `currencyCode` | `currency_code` |
| `RemovePaymentEvent` | `eventType` | `event_type` |
| `RemovePaymentEvent` | `eventData` | `event_data` |
| `RemovePaymentEventData` | `transactionId` | `transaction_id` |
| `RemovePaymentEventData` | `originalAmount` | `original_amount` |
| `RemovePaymentEventData` | `appliedAmount` | `applied_amount` |
| `RemovePaymentEventData` | `transactionTime` | `transaction_time` |
| `RemovePaymentEventData` | `paymentMethod` | `payment_method` |
| `RenewalPreview` | `nextAssessmentAt` | `next_assessment_at` |
| `RenewalPreview` | `subtotalInCents` | `subtotal_in_cents` |
| `RenewalPreview` | `totalTaxInCents` | `total_tax_in_cents` |
| `RenewalPreview` | `totalDiscountInCents` | `total_discount_in_cents` |
| `RenewalPreview` | `totalInCents` | `total_in_cents` |
| `RenewalPreview` | `existingBalanceInCents` | `existing_balance_in_cents` |
| `RenewalPreview` | `totalAmountDueInCents` | `total_amount_due_in_cents` |
| `RenewalPreview` | `uncalculatedTaxes` | `uncalculated_taxes` |
| `RenewalPreview` | `lineItems` | `line_items` |
| `RenewalPreviewComponent` | `componentId` | `component_id` |
| `RenewalPreviewComponent` | `pricePointId` | `price_point_id` |
| `RenewalPreviewLineItem` | `transactionType` | `transaction_type` |
| `RenewalPreviewLineItem` | `amountInCents` | `amount_in_cents` |
| `RenewalPreviewLineItem` | `discountAmountInCents` | `discount_amount_in_cents` |
| `RenewalPreviewLineItem` | `taxableAmountInCents` | `taxable_amount_in_cents` |
| `RenewalPreviewLineItem` | `productId` | `product_id` |
| `RenewalPreviewLineItem` | `productName` | `product_name` |
| `RenewalPreviewLineItem` | `componentId` | `component_id` |
| `RenewalPreviewLineItem` | `componentHandle` | `component_handle` |
| `RenewalPreviewLineItem` | `componentName` | `component_name` |
| `RenewalPreviewLineItem` | `productHandle` | `product_handle` |
| `RenewalPreviewLineItem` | `periodRangeStart` | `period_range_start` |
| `RenewalPreviewLineItem` | `periodRangeEnd` | `period_range_end` |
| `RenewalPreviewResponse` | `renewalPreview` | `renewal_preview` |
| `ResentInvitation` | `lastSentAt` | `last_sent_at` |
| `ResentInvitation` | `lastAcceptedAt` | `last_accepted_at` |
| `ResentInvitation` | `sendInviteLinkText` | `send_invite_link_text` |
| `ResentInvitation` | `uninvitedCount` | `uninvited_count` |
| `ResentInvitation` | `lastInviteSentAt` | `last_invite_sent_at` |
| `ResentInvitation` | `lastInviteAcceptedAt` | `last_invite_accepted_at` |
| `ResumeOptions` | `requireResume` | `require_resume` |
| `ResumeOptions` | `forgiveBalance` | `forgive_balance` |
| `RevokedInvitation` | `lastSentAt` | `last_sent_at` |
| `RevokedInvitation` | `lastAcceptedAt` | `last_accepted_at` |
| `RevokedInvitation` | `uninvitedCount` | `uninvited_count` |
| `SaleRep` | `fullName` | `full_name` |
| `SaleRep` | `subscriptionsCount` | `subscriptions_count` |
| `SaleRep` | `testMode` | `test_mode` |
| `SaleRepSettings` | `customerName` | `customer_name` |
| `SaleRepSettings` | `subscriptionId` | `subscription_id` |
| `SaleRepSettings` | `siteLink` | `site_link` |
| `SaleRepSettings` | `siteName` | `site_name` |
| `SaleRepSettings` | `subscriptionMrr` | `subscription_mrr` |
| `SaleRepSettings` | `salesRepId` | `sales_rep_id` |
| `SaleRepSettings` | `salesRepName` | `sales_rep_name` |
| `SaleRepSubscription` | `siteName` | `site_name` |
| `SaleRepSubscription` | `subscriptionUrl` | `subscription_url` |
| `SaleRepSubscription` | `customerName` | `customer_name` |
| `SaleRepSubscription` | `createdAt` | `created_at` |
| `SaleRepSubscription` | `lastPayment` | `last_payment` |
| `SaleRepSubscription` | `churnDate` | `churn_date` |
| `ScheduledRenewalComponentCustomPrice` | `taxIncluded` | `tax_included` |
| `ScheduledRenewalComponentCustomPrice` | `pricingScheme` | `pricing_scheme` |
| `ScheduledRenewalConfiguration` | `siteId` | `site_id` |
| `ScheduledRenewalConfiguration` | `subscriptionId` | `subscription_id` |
| `ScheduledRenewalConfiguration` | `startsAt` | `starts_at` |
| `ScheduledRenewalConfiguration` | `endsAt` | `ends_at` |
| `ScheduledRenewalConfiguration` | `lockInAt` | `lock_in_at` |
| `ScheduledRenewalConfiguration` | `createdAt` | `created_at` |
| `ScheduledRenewalConfiguration` | `scheduledRenewalConfigurationItems` | `scheduled_renewal_configuration_items` |
| `ScheduledRenewalConfigurationItem` | `subscriptionId` | `subscription_id` |
| `ScheduledRenewalConfigurationItem` | `subscriptionRenewalConfigurationId` | `subscription_renewal_configuration_id` |
| `ScheduledRenewalConfigurationItem` | `itemId` | `item_id` |
| `ScheduledRenewalConfigurationItem` | `itemType` | `item_type` |
| `ScheduledRenewalConfigurationItem` | `itemSubclass` | `item_subclass` |
| `ScheduledRenewalConfigurationItem` | `pricePointId` | `price_point_id` |
| `ScheduledRenewalConfigurationItem` | `pricePointType` | `price_point_type` |
| `ScheduledRenewalConfigurationItem` | `decimalQuantity` | `decimal_quantity` |
| `ScheduledRenewalConfigurationItem` | `createdAt` | `created_at` |
| `ScheduledRenewalConfigurationItemRequest` | `renewalConfigurationItem` | `renewal_configuration_item` |
| `ScheduledRenewalConfigurationItemResponse` | `scheduledRenewalConfigurationItem` | `scheduled_renewal_configuration_item` |
| `ScheduledRenewalConfigurationRequest` | `renewalConfiguration` | `renewal_configuration` |
| `ScheduledRenewalConfigurationRequestBody` | `startsAt` | `starts_at` |
| `ScheduledRenewalConfigurationRequestBody` | `endsAt` | `ends_at` |
| `ScheduledRenewalConfigurationRequestBody` | `lockInAt` | `lock_in_at` |
| `ScheduledRenewalConfigurationRequestBody` | `contractId` | `contract_id` |
| `ScheduledRenewalConfigurationRequestBody` | `createNewContract` | `create_new_contract` |
| `ScheduledRenewalConfigurationResponse` | `scheduledRenewalConfiguration` | `scheduled_renewal_configuration` |
| `ScheduledRenewalConfigurationsResponse` | `scheduledRenewalConfigurations` | `scheduled_renewal_configurations` |
| `ScheduledRenewalItemRequestBodyComponent` | `itemType` | `item_type` |
| `ScheduledRenewalItemRequestBodyComponent` | `itemId` | `item_id` |
| `ScheduledRenewalItemRequestBodyComponent` | `pricePointId` | `price_point_id` |
| `ScheduledRenewalItemRequestBodyComponent` | `customPrice` | `custom_price` |
| `ScheduledRenewalItemRequestBodyProduct` | `itemType` | `item_type` |
| `ScheduledRenewalItemRequestBodyProduct` | `itemId` | `item_id` |
| `ScheduledRenewalItemRequestBodyProduct` | `pricePointId` | `price_point_id` |
| `ScheduledRenewalItemRequestBodyProduct` | `customPrice` | `custom_price` |
| `ScheduledRenewalLockInRequest` | `lockInAt` | `lock_in_at` |
| `ScheduledRenewalProductPricePoint` | `priceInCents` | `price_in_cents` |
| `ScheduledRenewalProductPricePoint` | `intervalUnit` | `interval_unit` |
| `ScheduledRenewalProductPricePoint` | `taxIncluded` | `tax_included` |
| `ScheduledRenewalProductPricePoint` | `initialChargeInCents` | `initial_charge_in_cents` |
| `ScheduledRenewalProductPricePoint` | `expirationInterval` | `expiration_interval` |
| `ScheduledRenewalProductPricePoint` | `expirationIntervalUnit` | `expiration_interval_unit` |
| `ScheduledRenewalUpdateRequest` | `renewalConfigurationItem` | `renewal_configuration_item` |
| `Segment` | `componentId` | `component_id` |
| `Segment` | `pricePointId` | `price_point_id` |
| `Segment` | `eventBasedBillingMetricId` | `event_based_billing_metric_id` |
| `Segment` | `pricingScheme` | `pricing_scheme` |
| `Segment` | `segmentProperty1Value` | `segment_property_1_value` |
| `Segment` | `segmentProperty2Value` | `segment_property_2_value` |
| `Segment` | `segmentProperty3Value` | `segment_property_3_value` |
| `Segment` | `segmentProperty4Value` | `segment_property_4_value` |
| `Segment` | `createdAt` | `created_at` |
| `Segment` | `updatedAt` | `updated_at` |
| `SegmentPrice` | `componentId` | `component_id` |
| `SegmentPrice` | `startingQuantity` | `starting_quantity` |
| `SegmentPrice` | `endingQuantity` | `ending_quantity` |
| `SegmentPrice` | `unitPrice` | `unit_price` |
| `SegmentPrice` | `pricePointId` | `price_point_id` |
| `SegmentPrice` | `formattedUnitPrice` | `formatted_unit_price` |
| `SegmentPrice` | `segmentId` | `segment_id` |
| `SendInvoiceRequest` | `recipientEmails` | `recipient_emails` |
| `SendInvoiceRequest` | `ccRecipientEmails` | `cc_recipient_emails` |
| `SendInvoiceRequest` | `bccRecipientEmails` | `bcc_recipient_emails` |
| `SendInvoiceRequest` | `attachmentUrls` | `attachment_urls` |
| `SendEmail` | `canExecute` | `can_execute` |
| `ServiceCredit` | `amountInCents` | `amount_in_cents` |
| `ServiceCredit` | `endingBalanceInCents` | `ending_balance_in_cents` |
| `ServiceCredit` | `entryType` | `entry_type` |
| `ServiceCreditResponse` | `serviceCredit` | `service_credit` |
| `ServiceCredit1` | `amountInCents` | `amount_in_cents` |
| `ServiceCredit1` | `endingBalanceInCents` | `ending_balance_in_cents` |
| `ServiceCredit1` | `entryType` | `entry_type` |
| `ServiceCredit1` | `invoiceUid` | `invoice_uid` |
| `ServiceCredit1` | `remainingBalanceInCents` | `remaining_balance_in_cents` |
| `ServiceCredit1` | `createdAt` | `created_at` |
| `SignupProformaPreview` | `currentProformaInvoice` | `current_proforma_invoice` |
| `SignupProformaPreview` | `nextProformaInvoice` | `next_proforma_invoice` |
| `SignupProformaPreviewResponse` | `proformaInvoicePreview` | `proforma_invoice_preview` |
| `Site` | `sellerId` | `seller_id` |
| `Site` | `nonPrimaryCurrencies` | `non_primary_currencies` |
| `Site` | `relationshipInvoicingEnabled` | `relationship_invoicing_enabled` |
| `Site` | `scheduleSubscriptionCancellationEnabled` | `schedule_subscription_cancellation_enabled` |
| `Site` | `customerHierarchyEnabled` | `customer_hierarchy_enabled` |
| `Site` | `whopaysEnabled` | `whopays_enabled` |
| `Site` | `whopaysDefaultPayer` | `whopays_default_payer` |
| `Site` | `allocationSettings` | `allocation_settings` |
| `Site` | `defaultPaymentCollectionMethod` | `default_payment_collection_method` |
| `Site` | `organizationAddress` | `organization_address` |
| `Site` | `taxConfiguration` | `tax_configuration` |
| `Site` | `netTerms` | `net_terms` |
| `Site` | `multiFrequencyEnabled` | `multi_frequency_enabled` |
| `Site` | `autoRenewalsEnabled` | `auto_renewals_enabled` |
| `Site` | `portalEnabled` | `portal_enabled` |
| `SiteStatistics` | `totalSubscriptions` | `total_subscriptions` |
| `SiteStatistics` | `subscriptionsToday` | `subscriptions_today` |
| `SiteStatistics` | `totalRevenue` | `total_revenue` |
| `SiteStatistics` | `revenueToday` | `revenue_today` |
| `SiteStatistics` | `revenueThisMonth` | `revenue_this_month` |
| `SiteStatistics` | `revenueThisYear` | `revenue_this_year` |
| `SiteStatistics` | `totalCanceledSubscriptions` | `total_canceled_subscriptions` |
| `SiteStatistics` | `totalActiveSubscriptions` | `total_active_subscriptions` |
| `SiteStatistics` | `totalPastDueSubscriptions` | `total_past_due_subscriptions` |
| `SiteStatistics` | `totalUnpaidSubscriptions` | `total_unpaid_subscriptions` |
| `SiteStatistics` | `totalDunningSubscriptions` | `total_dunning_subscriptions` |
| `SiteSummary` | `sellerName` | `seller_name` |
| `SiteSummary` | `siteName` | `site_name` |
| `SiteSummary` | `siteId` | `site_id` |
| `SiteSummary` | `siteCurrency` | `site_currency` |
| `Subscription` | `balanceInCents` | `balance_in_cents` |
| `Subscription` | `totalRevenueInCents` | `total_revenue_in_cents` |
| `Subscription` | `productPriceInCents` | `product_price_in_cents` |
| `Subscription` | `productVersionNumber` | `product_version_number` |
| `Subscription` | `currentPeriodEndsAt` | `current_period_ends_at` |
| `Subscription` | `nextAssessmentAt` | `next_assessment_at` |
| `Subscription` | `trialStartedAt` | `trial_started_at` |
| `Subscription` | `trialEndedAt` | `trial_ended_at` |
| `Subscription` | `activatedAt` | `activated_at` |
| `Subscription` | `expiresAt` | `expires_at` |
| `Subscription` | `createdAt` | `created_at` |
| `Subscription` | `updatedAt` | `updated_at` |
| `Subscription` | `cancellationMessage` | `cancellation_message` |
| `Subscription` | `cancellationMethod` | `cancellation_method` |
| `Subscription` | `cancelAtEndOfPeriod` | `cancel_at_end_of_period` |
| `Subscription` | `canceledAt` | `canceled_at` |
| `Subscription` | `currentPeriodStartedAt` | `current_period_started_at` |
| `Subscription` | `previousState` | `previous_state` |
| `Subscription` | `signupPaymentId` | `signup_payment_id` |
| `Subscription` | `signupRevenue` | `signup_revenue` |
| `Subscription` | `delayedCancelAt` | `delayed_cancel_at` |
| `Subscription` | `couponCode` | `coupon_code` |
| `Subscription` | `snapDay` | `snap_day` |
| `Subscription` | `paymentCollectionMethod` | `payment_collection_method` |
| `Subscription` | `creditCard` | `credit_card` |
| `Subscription` | `bankAccount` | `bank_account` |
| `Subscription` | `paymentType` | `payment_type` |
| `Subscription` | `referralCode` | `referral_code` |
| `Subscription` | `nextProductId` | `next_product_id` |
| `Subscription` | `nextProductHandle` | `next_product_handle` |
| `Subscription` | `couponUseCount` | `coupon_use_count` |
| `Subscription` | `couponUsesAllowed` | `coupon_uses_allowed` |
| `Subscription` | `reasonCode` | `reason_code` |
| `Subscription` | `automaticallyResumeAt` | `automatically_resume_at` |
| `Subscription` | `couponCodes` | `coupon_codes` |
| `Subscription` | `offerId` | `offer_id` |
| `Subscription` | `payerId` | `payer_id` |
| `Subscription` | `currentBillingAmountInCents` | `current_billing_amount_in_cents` |
| `Subscription` | `productPricePointId` | `product_price_point_id` |
| `Subscription` | `productPricePointType` | `product_price_point_type` |
| `Subscription` | `nextProductPricePointId` | `next_product_price_point_id` |
| `Subscription` | `netTerms` | `net_terms` |
| `Subscription` | `storedCredentialTransactionId` | `stored_credential_transaction_id` |
| `Subscription` | `onHoldAt` | `on_hold_at` |
| `Subscription` | `prepaidDunning` | `prepaid_dunning` |
| `Subscription` | `dunningCommunicationDelayEnabled` | `dunning_communication_delay_enabled` |
| `Subscription` | `dunningCommunicationDelayTimeZone` | `dunning_communication_delay_time_zone` |
| `Subscription` | `receivesInvoiceEmails` | `receives_invoice_emails` |
| `Subscription` | `scheduledCancellationAt` | `scheduled_cancellation_at` |
| `Subscription` | `creditBalanceInCents` | `credit_balance_in_cents` |
| `Subscription` | `prepaymentBalanceInCents` | `prepayment_balance_in_cents` |
| `Subscription` | `prepaidConfiguration` | `prepaid_configuration` |
| `Subscription` | `selfServicePageToken` | `self_service_page_token` |
| `SubscriptionAddCouponError` | `couponCode` | `coupon_code` |
| `SubscriptionAddCouponError` | `couponCodes` | `coupon_codes` |
| `SubscriptionAddCouponError1` | `couponCode` | `coupon_code` |
| `SubscriptionAddCouponError1` | `couponCodes` | `coupon_codes` |
| `SubscriptionComponent` | `unitName` | `unit_name` |
| `SubscriptionComponent` | `unitBalance` | `unit_balance` |
| `SubscriptionComponent` | `allocatedQuantity` | `allocated_quantity` |
| `SubscriptionComponent` | `pricingScheme` | `pricing_scheme` |
| `SubscriptionComponent` | `componentId` | `component_id` |
| `SubscriptionComponent` | `componentHandle` | `component_handle` |
| `SubscriptionComponent` | `subscriptionId` | `subscription_id` |
| `SubscriptionComponent` | `upgradeCharge` | `upgrade_charge` |
| `SubscriptionComponent` | `downgradeCredit` | `downgrade_credit` |
| `SubscriptionComponent` | `archivedAt` | `archived_at` |
| `SubscriptionComponent` | `pricePointId` | `price_point_id` |
| `SubscriptionComponent` | `pricePointHandle` | `price_point_handle` |
| `SubscriptionComponent` | `pricePointType` | `price_point_type` |
| `SubscriptionComponent` | `pricePointName` | `price_point_name` |
| `SubscriptionComponent` | `productFamilyId` | `product_family_id` |
| `SubscriptionComponent` | `productFamilyHandle` | `product_family_handle` |
| `SubscriptionComponent` | `createdAt` | `created_at` |
| `SubscriptionComponent` | `updatedAt` | `updated_at` |
| `SubscriptionComponent` | `useSiteExchangeRate` | `use_site_exchange_rate` |
| `SubscriptionComponent` | `allowFractionalQuantities` | `allow_fractional_quantities` |
| `SubscriptionComponent` | `historicUsages` | `historic_usages` |
| `SubscriptionComponent` | `displayOnHostedPage` | `display_on_hosted_page` |
| `SubscriptionComponent` | `intervalUnit` | `interval_unit` |
| `SubscriptionComponentSubscription` | `updatedAt` | `updated_at` |
| `SubscriptionCustomPrice` | `priceInCents` | `price_in_cents` |
| `SubscriptionCustomPrice` | `intervalUnit` | `interval_unit` |
| `SubscriptionCustomPrice` | `trialPriceInCents` | `trial_price_in_cents` |
| `SubscriptionCustomPrice` | `trialInterval` | `trial_interval` |
| `SubscriptionCustomPrice` | `trialIntervalUnit` | `trial_interval_unit` |
| `SubscriptionCustomPrice` | `trialType` | `trial_type` |
| `SubscriptionCustomPrice` | `initialChargeInCents` | `initial_charge_in_cents` |
| `SubscriptionCustomPrice` | `initialChargeAfterTrial` | `initial_charge_after_trial` |
| `SubscriptionCustomPrice` | `expirationInterval` | `expiration_interval` |
| `SubscriptionCustomPrice` | `expirationIntervalUnit` | `expiration_interval_unit` |
| `SubscriptionCustomPrice` | `taxIncluded` | `tax_included` |
| `SubscriptionFilter` | `dateField` | `date_field` |
| `SubscriptionFilter` | `startDate` | `start_date` |
| `SubscriptionFilter` | `endDate` | `end_date` |
| `SubscriptionFilter` | `startDatetime` | `start_datetime` |
| `SubscriptionFilter` | `endDatetime` | `end_datetime` |
| `SubscriptionGroup` | `customerId` | `customer_id` |
| `SubscriptionGroup` | `paymentProfile` | `payment_profile` |
| `SubscriptionGroup` | `paymentCollectionMethod` | `payment_collection_method` |
| `SubscriptionGroup` | `subscriptionIds` | `subscription_ids` |
| `SubscriptionGroup` | `createdAt` | `created_at` |
| `SubscriptionGroupBalances` | `serviceCredits` | `service_credits` |
| `SubscriptionGroupBalances` | `openInvoices` | `open_invoices` |
| `SubscriptionGroupBalances` | `pendingDiscounts` | `pending_discounts` |
| `SubscriptionGroupBankAccount` | `bankName` | `bank_name` |
| `SubscriptionGroupBankAccount` | `bankAccountNumber` | `bank_account_number` |
| `SubscriptionGroupBankAccount` | `bankRoutingNumber` | `bank_routing_number` |
| `SubscriptionGroupBankAccount` | `bankIban` | `bank_iban` |
| `SubscriptionGroupBankAccount` | `bankBranchCode` | `bank_branch_code` |
| `SubscriptionGroupBankAccount` | `bankAccountType` | `bank_account_type` |
| `SubscriptionGroupBankAccount` | `bankAccountHolderType` | `bank_account_holder_type` |
| `SubscriptionGroupBankAccount` | `paymentType` | `payment_type` |
| `SubscriptionGroupBankAccount` | `billingAddress` | `billing_address` |
| `SubscriptionGroupBankAccount` | `billingCity` | `billing_city` |
| `SubscriptionGroupBankAccount` | `billingState` | `billing_state` |
| `SubscriptionGroupBankAccount` | `billingZip` | `billing_zip` |
| `SubscriptionGroupBankAccount` | `billingCountry` | `billing_country` |
| `SubscriptionGroupBankAccount` | `chargifyToken` | `chargify_token` |
| `SubscriptionGroupBankAccount` | `currentVault` | `current_vault` |
| `SubscriptionGroupBankAccount` | `gatewayHandle` | `gateway_handle` |
| `SubscriptionGroupComponentCustomPrice` | `pricingScheme` | `pricing_scheme` |
| `SubscriptionGroupComponentCustomPrice` | `overagePricing` | `overage_pricing` |
| `SubscriptionGroupCreditCard` | `chargifyToken` | `chargify_token` |
| `SubscriptionGroupCreditCard` | `vaultToken` | `vault_token` |
| `SubscriptionGroupCreditCard` | `currentVault` | `current_vault` |
| `SubscriptionGroupCreditCard` | `gatewayHandle` | `gateway_handle` |
| `SubscriptionGroupCreditCard` | `firstName` | `first_name` |
| `SubscriptionGroupCreditCard` | `lastName` | `last_name` |
| `SubscriptionGroupCreditCard` | `billingAddress` | `billing_address` |
| `SubscriptionGroupCreditCard` | `billingAddress2` | `billing_address_2` |
| `SubscriptionGroupCreditCard` | `billingCity` | `billing_city` |
| `SubscriptionGroupCreditCard` | `billingState` | `billing_state` |
| `SubscriptionGroupCreditCard` | `billingZip` | `billing_zip` |
| `SubscriptionGroupCreditCard` | `billingCountry` | `billing_country` |
| `SubscriptionGroupCreditCard` | `fullNumber` | `full_number` |
| `SubscriptionGroupCreditCard` | `expirationMonth` | `expiration_month` |
| `SubscriptionGroupCreditCard` | `expirationYear` | `expiration_year` |
| `SubscriptionGroupCreditCard` | `lastFour` | `last_four` |
| `SubscriptionGroupCreditCard` | `cardType` | `card_type` |
| `SubscriptionGroupCreditCard` | `customerVaultToken` | `customer_vault_token` |
| `SubscriptionGroupCreditCard` | `paymentType` | `payment_type` |
| `SubscriptionGroupCustomer` | `firstName` | `first_name` |
| `SubscriptionGroupCustomer` | `lastName` | `last_name` |
| `SubscriptionGroupItem` | `productId` | `product_id` |
| `SubscriptionGroupItem` | `productHandle` | `product_handle` |
| `SubscriptionGroupItem` | `productPricePointId` | `product_price_point_id` |
| `SubscriptionGroupItem` | `productPricePointHandle` | `product_price_point_handle` |
| `SubscriptionGroupItem` | `couponCode` | `coupon_code` |
| `SubscriptionGroupItem` | `totalRevenueInCents` | `total_revenue_in_cents` |
| `SubscriptionGroupItem` | `balanceInCents` | `balance_in_cents` |
| `SubscriptionGroupPaymentProfile` | `firstName` | `first_name` |
| `SubscriptionGroupPaymentProfile` | `lastName` | `last_name` |
| `SubscriptionGroupPaymentProfile` | `maskedCardNumber` | `masked_card_number` |
| `SubscriptionGroupPrepaymentResponse` | `amountInCents` | `amount_in_cents` |
| `SubscriptionGroupPrepaymentResponse` | `endingBalanceInCents` | `ending_balance_in_cents` |
| `SubscriptionGroupPrepaymentResponse` | `entryType` | `entry_type` |
| `SubscriptionGroupResponse` | `subscriptionGroup` | `subscription_group` |
| `SubscriptionGroupSignup` | `paymentProfileId` | `payment_profile_id` |
| `SubscriptionGroupSignup` | `payerId` | `payer_id` |
| `SubscriptionGroupSignup` | `payerReference` | `payer_reference` |
| `SubscriptionGroupSignup` | `paymentCollectionMethod` | `payment_collection_method` |
| `SubscriptionGroupSignup` | `payerAttributes` | `payer_attributes` |
| `SubscriptionGroupSignup` | `creditCardAttributes` | `credit_card_attributes` |
| `SubscriptionGroupSignup` | `bankAccountAttributes` | `bank_account_attributes` |
| `SubscriptionGroupSignupComponent` | `componentId` | `component_id` |
| `SubscriptionGroupSignupComponent` | `allocatedQuantity` | `allocated_quantity` |
| `SubscriptionGroupSignupComponent` | `unitBalance` | `unit_balance` |
| `SubscriptionGroupSignupComponent` | `pricePointId` | `price_point_id` |
| `SubscriptionGroupSignupComponent` | `customPrice` | `custom_price` |
| `SubscriptionGroupSignupError` | `payerReference` | `payer_reference` |
| `SubscriptionGroupSignupError` | `subscriptionGroup` | `subscription_group` |
| `SubscriptionGroupSignupError` | `paymentProfileId` | `payment_profile_id` |
| `SubscriptionGroupSignupError` | `payerId` | `payer_id` |
| `SubscriptionGroupSignupEventData` | `subscriptionGroup` | `subscription_group` |
| `SubscriptionGroupSignupFailureData` | `payerId` | `payer_id` |
| `SubscriptionGroupSignupFailureData` | `payerReference` | `payer_reference` |
| `SubscriptionGroupSignupFailureData` | `paymentProfileId` | `payment_profile_id` |
| `SubscriptionGroupSignupFailureData` | `paymentCollectionMethod` | `payment_collection_method` |
| `SubscriptionGroupSignupFailureData` | `payerAttributes` | `payer_attributes` |
| `SubscriptionGroupSignupFailureData` | `creditCardAttributes` | `credit_card_attributes` |
| `SubscriptionGroupSignupFailureData` | `bankAccountAttributes` | `bank_account_attributes` |
| `SubscriptionGroupSignupItem` | `productHandle` | `product_handle` |
| `SubscriptionGroupSignupItem` | `productId` | `product_id` |
| `SubscriptionGroupSignupItem` | `productPricePointId` | `product_price_point_id` |
| `SubscriptionGroupSignupItem` | `productPricePointHandle` | `product_price_point_handle` |
| `SubscriptionGroupSignupItem` | `offerId` | `offer_id` |
| `SubscriptionGroupSignupItem` | `couponCodes` | `coupon_codes` |
| `SubscriptionGroupSignupItem` | `customPrice` | `custom_price` |
| `SubscriptionGroupSignupItem` | `calendarBilling` | `calendar_billing` |
| `SubscriptionGroupSignupRequest` | `subscriptionGroup` | `subscription_group` |
| `SubscriptionGroupSignupResponse` | `customerId` | `customer_id` |
| `SubscriptionGroupSignupResponse` | `paymentProfileId` | `payment_profile_id` |
| `SubscriptionGroupSignupResponse` | `subscriptionIds` | `subscription_ids` |
| `SubscriptionGroupSignupResponse` | `primarySubscriptionId` | `primary_subscription_id` |
| `SubscriptionGroupSignupResponse` | `nextAssessmentAt` | `next_assessment_at` |
| `SubscriptionGroupSignupResponse` | `cancelAtEndOfPeriod` | `cancel_at_end_of_period` |
| `SubscriptionGroupSignupResponse` | `paymentCollectionMethod` | `payment_collection_method` |
| `SubscriptionGroupSingleError` | `subscriptionGroup` | `subscription_group` |
| `SubscriptionGroupSubscriptionError` | `productPricePointId` | `product_price_point_id` |
| `SubscriptionGroupSubscriptionError` | `paymentProfile` | `payment_profile` |
| `SubscriptionGroupSubscriptionError` | `paymentProfileChargifyToken` | `payment_profile.chargify_token` |
| `SubscriptionGroupSubscriptionError` | `paymentProfileExpirationMonth` | `payment_profile.expiration_month` |
| `SubscriptionGroupSubscriptionError` | `paymentProfileExpirationYear` | `payment_profile.expiration_year` |
| `SubscriptionGroupSubscriptionError` | `paymentProfileFullNumber` | `payment_profile.full_number` |
| `SubscriptionIncludedCoupon` | `useCount` | `use_count` |
| `SubscriptionIncludedCoupon` | `usesAllowed` | `uses_allowed` |
| `SubscriptionIncludedCoupon` | `expiresAt` | `expires_at` |
| `SubscriptionIncludedCoupon` | `amountInCents` | `amount_in_cents` |
| `SubscriptionMrr` | `subscriptionId` | `subscription_id` |
| `SubscriptionMrr` | `mrrAmountInCents` | `mrr_amount_in_cents` |
| `SubscriptionMrrBreakout` | `planAmountInCents` | `plan_amount_in_cents` |
| `SubscriptionMrrBreakout` | `usageAmountInCents` | `usage_amount_in_cents` |
| `SubscriptionMrrResponse` | `subscriptionsMrr` | `subscriptions_mrr` |
| `SubscriptionMigrationPreview` | `proratedAdjustmentInCents` | `prorated_adjustment_in_cents` |
| `SubscriptionMigrationPreview` | `chargeInCents` | `charge_in_cents` |
| `SubscriptionMigrationPreview` | `paymentDueInCents` | `payment_due_in_cents` |
| `SubscriptionMigrationPreview` | `creditAppliedInCents` | `credit_applied_in_cents` |
| `SubscriptionMigrationPreviewOptions` | `productId` | `product_id` |
| `SubscriptionMigrationPreviewOptions` | `productPricePointId` | `product_price_point_id` |
| `SubscriptionMigrationPreviewOptions` | `includeTrial` | `include_trial` |
| `SubscriptionMigrationPreviewOptions` | `includeInitialCharge` | `include_initial_charge` |
| `SubscriptionMigrationPreviewOptions` | `includeCoupons` | `include_coupons` |
| `SubscriptionMigrationPreviewOptions` | `preservePeriod` | `preserve_period` |
| `SubscriptionMigrationPreviewOptions` | `productHandle` | `product_handle` |
| `SubscriptionMigrationPreviewOptions` | `productPricePointHandle` | `product_price_point_handle` |
| `SubscriptionMigrationPreviewOptions` | `prorationDate` | `proration_date` |
| `SubscriptionNote` | `subscriptionId` | `subscription_id` |
| `SubscriptionNote` | `createdAt` | `created_at` |
| `SubscriptionNote` | `updatedAt` | `updated_at` |
| `SubscriptionPreview` | `currentBillingManifest` | `current_billing_manifest` |
| `SubscriptionPreview` | `nextBillingManifest` | `next_billing_manifest` |
| `SubscriptionPreviewResponse` | `subscriptionPreview` | `subscription_preview` |
| `SubscriptionProductChange` | `previousProductId` | `previous_product_id` |
| `SubscriptionProductChange` | `newProductId` | `new_product_id` |
| `SubscriptionProductChangeScheduled` | `previousProductId` | `previous_product_id` |
| `SubscriptionProductChangeScheduled` | `newProductId` | `new_product_id` |
| `SubscriptionProductChangeScheduled` | `previousProductPricePointId` | `previous_product_price_point_id` |
| `SubscriptionProductChangeScheduled` | `newProductPricePointId` | `new_product_price_point_id` |
| `SubscriptionProductChangeScheduled` | `effectiveAt` | `effective_at` |
| `SubscriptionProductMigration` | `productId` | `product_id` |
| `SubscriptionProductMigration` | `productPricePointId` | `product_price_point_id` |
| `SubscriptionProductMigration` | `includeTrial` | `include_trial` |
| `SubscriptionProductMigration` | `includeInitialCharge` | `include_initial_charge` |
| `SubscriptionProductMigration` | `includeCoupons` | `include_coupons` |
| `SubscriptionProductMigration` | `preservePeriod` | `preserve_period` |
| `SubscriptionProductMigration` | `productHandle` | `product_handle` |
| `SubscriptionProductMigration` | `productPricePointHandle` | `product_price_point_handle` |
| `SubscriptionStateChange` | `previousSubscriptionState` | `previous_subscription_state` |
| `SubscriptionStateChange` | `newSubscriptionState` | `new_subscription_state` |
| `TaxConfiguration` | `destinationAddress` | `destination_address` |
| `TaxConfiguration` | `fullyConfigured` | `fully_configured` |
| `TokenizedPaymentProfile` | `vaultToken` | `vault_token` |
| `TokenizedPaymentProfile` | `gatewayHandle` | `gateway_handle` |
| `TokenizedPaymentProfile` | `customerVaultToken` | `customer_vault_token` |
| `TooManyManagementLinkRequests` | `newLinkAvailableAt` | `new_link_available_at` |
| `UpdateComponent` | `accountingCode` | `accounting_code` |
| `UpdateComponent` | `taxCode` | `tax_code` |
| `UpdateComponent` | `itemCategory` | `item_category` |
| `UpdateComponent` | `displayOnHostedPage` | `display_on_hosted_page` |
| `UpdateComponent` | `upgradeCharge` | `upgrade_charge` |
| `UpdateComponentPricePoint` | `pricingScheme` | `pricing_scheme` |
| `UpdateComponentPricePoint` | `useSiteExchangeRate` | `use_site_exchange_rate` |
| `UpdateComponentPricePoint` | `taxIncluded` | `tax_included` |
| `UpdateComponentPricePoint` | `intervalUnit` | `interval_unit` |
| `UpdateComponentPricePointRequest` | `pricePoint` | `price_point` |
| `UpdateCurrencyPricesRequest` | `currencyPrices` | `currency_prices` |
| `UpdateCustomer` | `firstName` | `first_name` |
| `UpdateCustomer` | `lastName` | `last_name` |
| `UpdateCustomer` | `ccEmails` | `cc_emails` |
| `UpdateCustomer` | `address2` | `address_2` |
| `UpdateCustomer` | `vatNumber` | `vat_number` |
| `UpdateCustomer` | `taxExempt` | `tax_exempt` |
| `UpdateCustomer` | `taxExemptReason` | `tax_exempt_reason` |
| `UpdateCustomer` | `parentId` | `parent_id` |
| `UpdateCustomer` | `salesforceId` | `salesforce_id` |
| `UpdateCustomer` | `brandingThemeId` | `branding_theme_id` |
| `UpdateInvoice` | `lineItems` | `line_items` |
| `UpdateInvoice` | `issueDate` | `issue_date` |
| `UpdateInvoice` | `netTerms` | `net_terms` |
| `UpdateInvoice` | `paymentInstructions` | `payment_instructions` |
| `UpdateInvoice` | `sellerAddress` | `seller_address` |
| `UpdateInvoice` | `billingAddress` | `billing_address` |
| `UpdateInvoice` | `shippingAddress` | `shipping_address` |
| `UpdateInvoiceItem` | `unitPrice` | `unit_price` |
| `UpdateInvoiceItem` | `taxCode` | `tax_code` |
| `UpdateInvoiceItem` | `periodRangeStart` | `period_range_start` |
| `UpdateInvoiceItem` | `periodRangeEnd` | `period_range_end` |
| `UpdateInvoiceItem` | `productId` | `product_id` |
| `UpdateInvoiceItem` | `componentId` | `component_id` |
| `UpdateInvoiceItem` | `pricePointId` | `price_point_id` |
| `UpdateInvoiceItem` | `productPricePointId` | `product_price_point_id` |
| `UpdateInvoiceItem` | `destroy` | `_destroy` |
| `UpdateMetadata` | `currentName` | `current_name` |
| `UpdateMetafield` | `currentName` | `current_name` |
| `UpdateMetafield` | `inputType` | `input_type` |
| `UpdatePaymentProfile` | `firstName` | `first_name` |
| `UpdatePaymentProfile` | `lastName` | `last_name` |
| `UpdatePaymentProfile` | `fullNumber` | `full_number` |
| `UpdatePaymentProfile` | `cardType` | `card_type` |
| `UpdatePaymentProfile` | `expirationMonth` | `expiration_month` |
| `UpdatePaymentProfile` | `expirationYear` | `expiration_year` |
| `UpdatePaymentProfile` | `currentVault` | `current_vault` |
| `UpdatePaymentProfile` | `billingAddress` | `billing_address` |
| `UpdatePaymentProfile` | `billingCity` | `billing_city` |
| `UpdatePaymentProfile` | `billingState` | `billing_state` |
| `UpdatePaymentProfile` | `billingZip` | `billing_zip` |
| `UpdatePaymentProfile` | `billingCountry` | `billing_country` |
| `UpdatePaymentProfile` | `billingAddress2` | `billing_address_2` |
| `UpdatePaymentProfileRequest` | `paymentProfile` | `payment_profile` |
| `UpdatePrice` | `endingQuantity` | `ending_quantity` |
| `UpdatePrice` | `unitPrice` | `unit_price` |
| `UpdatePrice` | `destroy` | `_destroy` |
| `UpdatePrice` | `startingQuantity` | `starting_quantity` |
| `UpdateProductPricePoint` | `priceInCents` | `price_in_cents` |
| `UpdateProductPricePointRequest` | `pricePoint` | `price_point` |
| `UpdateReasonCodeRequest` | `reasonCode` | `reason_code` |
| `UpdateSegment` | `pricingScheme` | `pricing_scheme` |
| `UpdateSubscription` | `creditCardAttributes` | `credit_card_attributes` |
| `UpdateSubscription` | `productHandle` | `product_handle` |
| `UpdateSubscription` | `productId` | `product_id` |
| `UpdateSubscription` | `productChangeDelayed` | `product_change_delayed` |
| `UpdateSubscription` | `nextProductId` | `next_product_id` |
| `UpdateSubscription` | `nextProductPricePointId` | `next_product_price_point_id` |
| `UpdateSubscription` | `snapDay` | `snap_day` |
| `UpdateSubscription` | `initialBillingAt` | `initial_billing_at` |
| `UpdateSubscription` | `deferSignup` | `defer_signup` |
| `UpdateSubscription` | `nextBillingAt` | `next_billing_at` |
| `UpdateSubscription` | `brandingThemeId` | `branding_theme_id` |
| `UpdateSubscription` | `expiresAt` | `expires_at` |
| `UpdateSubscription` | `paymentCollectionMethod` | `payment_collection_method` |
| `UpdateSubscription` | `receivesInvoiceEmails` | `receives_invoice_emails` |
| `UpdateSubscription` | `netTerms` | `net_terms` |
| `UpdateSubscription` | `storedCredentialTransactionId` | `stored_credential_transaction_id` |
| `UpdateSubscription` | `customPrice` | `custom_price` |
| `UpdateSubscription` | `dunningCommunicationDelayEnabled` | `dunning_communication_delay_enabled` |
| `UpdateSubscription` | `dunningCommunicationDelayTimeZone` | `dunning_communication_delay_time_zone` |
| `UpdateSubscription` | `productPricePointId` | `product_price_point_id` |
| `UpdateSubscription` | `productPricePointHandle` | `product_price_point_handle` |
| `UpdateSubscriptionComponent` | `componentId` | `component_id` |
| `UpdateSubscriptionComponent` | `customPrice` | `custom_price` |
| `UpdateSubscriptionGroup` | `memberIds` | `member_ids` |
| `UpdateSubscriptionGroupRequest` | `subscriptionGroup` | `subscription_group` |
| `UpsertPrepaidConfiguration` | `initialFundingAmountInCents` | `initial_funding_amount_in_cents` |
| `UpsertPrepaidConfiguration` | `replenishToAmountInCents` | `replenish_to_amount_in_cents` |
| `UpsertPrepaidConfiguration` | `autoReplenish` | `auto_replenish` |
| `UpsertPrepaidConfiguration` | `replenishThresholdAmountInCents` | `replenish_threshold_amount_in_cents` |
| `UpsertPrepaidConfigurationRequest` | `prepaidConfiguration` | `prepaid_configuration` |
| `Usage` | `createdAt` | `created_at` |
| `Usage` | `pricePointId` | `price_point_id` |
| `Usage` | `overageQuantity` | `overage_quantity` |
| `Usage` | `componentId` | `component_id` |
| `Usage` | `componentHandle` | `component_handle` |
| `Usage` | `subscriptionId` | `subscription_id` |
| `VoidInvoiceEvent` | `eventType` | `event_type` |
| `VoidInvoiceEvent` | `eventData` | `event_data` |
| `VoidInvoiceEventData` | `creditNoteAttributes` | `credit_note_attributes` |
| `VoidInvoiceEventData` | `appliedAmount` | `applied_amount` |
| `VoidInvoiceEventData` | `transactionTime` | `transaction_time` |
| `VoidInvoiceEventData` | `isAdvanceInvoice` | `is_advance_invoice` |
| `VoidRemainderEvent` | `eventType` | `event_type` |
| `VoidRemainderEvent` | `eventData` | `event_data` |
| `VoidRemainderEventData` | `creditNoteAttributes` | `credit_note_attributes` |
| `VoidRemainderEventData` | `appliedAmount` | `applied_amount` |
| `VoidRemainderEventData` | `transactionTime` | `transaction_time` |
| `Webhook` | `createdAt` | `created_at` |
| `Webhook` | `lastError` | `last_error` |
| `Webhook` | `lastErrorAt` | `last_error_at` |
| `Webhook` | `acceptedAt` | `accepted_at` |
| `Webhook` | `lastSentAt` | `last_sent_at` |
| `Webhook` | `lastSentUrl` | `last_sent_url` |
| `Webhook` | `signatureHmacSha256` | `signature_hmac_sha_256` |

---

## Servers & auth

**Authentication is per operation.** Every operation declares the requirement it enforces and the SDK sends exactly that: **249 of the 250 operations** require a credential and **1** is public. Each block on a page above carries an **Auth** bullet naming its requirement, `none` included. There is no client-global switch and no per-call override.

| Scheme (as an **Auth** bullet names it) | Configured with | What the SDK sends |
| --- | --- | --- |
| `basicAuth` | `basicAuth: { username, password }` | `Authorization: Basic <base64 of username:password>`, UTF-8 |
| `bearerAuth` | `bearerAuth` | `Authorization: Bearer <token>` |

A scheme **contributes** headers, query parameters and cookies rather than mutating the request, so a credential is encoded by exactly the code that encodes an operation's own parameters. The auth layer goes on **last**, which means a scheme's `Authorization` wins over one the operation declared.

**Composition is emitted, not configured.** Where the spec puts two schemes in one requirement the SDK sends **both**; where it lists alternatives the SDK sends the **first configured** one, in the order the **Auth** bullet prints them. The combinators that express this (`allAuth`, `anyAuth`, `noneAuth`) live in the generated resource modules and are **not exported**.

**A credential may be a function.** Every field typed `TokenProvider` is re-read on **every** request with no caching, so a key can rotate without rebuilding the client. An empty string counts as absent, and a function is treated as present without being invoked.

**An unconfigured scheme does not throw.** The request goes out without that credential and the server decides. So a 401 on a call you believed was authenticated is usually an unset credential field rather than an SDK failure — check the operation's **Auth** bullet against what the client was given.

**A 401 invalidates, it does not retry.** On a **401** — 401 only, not 403 — the SDK clears whatever that operation's scheme had cached, so the *next* call re-acquires. The current request still rejects with the operation's `ResponseError`. There is no retry loop on this SDK, and the credential fields are on `ClientOptions`.

**Environments.** `ClientOptions.serverEnvironment` selects one for the whole client (source: `src/servers.ts`). `ServerEnvironment` is a `const` object with a derived union type, not a TypeScript `enum` — and unlike the model enums it is **closed**, so only the values below are assignable.

| `ServerEnvironment` member | Value |
| --- | --- |
| `ServerEnvironment.Us` *(default)* | `us` |
| `ServerEnvironment.Eu` | `eu` |
| `ServerEnvironment.MaxioApiGateway` | `maxioApiGateway` |

**Server groups.** 3 logical servers; each operation is bound to one at generation time, and a block carries a **Server** bullet only when its group is not `production`.

| Group | Options type |
| --- | --- |
| `production` | `ProductionServerOptions` |
| `ebb` | `EbbServerOptions` |
| `oauth` | `OauthServerOptions` |

**Base URLs and overrides.** One row per group-and-environment pair, so the table stays four columns wide however many environments a spec declares. Every cell is overridden at `serverOptions.<group>.<environment>.<name>`, where `<name>` is `baseUrl` for the whole template or the variable name for one substitution. An override merges with the built-in defaults **per pair, key by key**.

| Group | Environment | Base URL template | Template variables (default) |
| --- | --- | --- | --- |
| `production` | `us` | `https://{site}.chargify.com` | `site` = `"subdomain"` |
| `production` | `eu` | `https://{site}.ebilling.maxio.com` | `site` = `"subdomain"` |
| `production` | `maxioApiGateway` | `https://{connector}.api.maxio.com/api/v1/billing` | `connector` = `"connector"` |
| `ebb` | `us` | `https://events.chargify.com/{site}` | `site` = `"subdomain"` |
| `ebb` | `eu` | `https://events.chargify.com/{site}` | `site` = `"subdomain"` |
| `ebb` | `maxioApiGateway` | `https://events.chargify.com/{site}` | `site` = `"subdomain"` |
| `oauth` | `us` | `https://{connector}.api.maxio.com` | `connector` = `"connector"` |
| `oauth` | `eu` | `https://{connector}.api.maxio.com` | `connector` = `"connector"` |
| `oauth` | `maxioApiGateway` | `https://{connector}.api.maxio.com` | `connector` = `"connector"` |

A `baseUrl` override replaces the template verbatim; variable values are percent-encoded into it, and templates are expanded per request rather than once at construction. An environment value the SDK does not know throws `SdkError` when a server is resolved — at the first call, not at construction. It is the one failure on this surface that throws **synchronously** out of the operation method, so a `try`/`await` catches it but `.asApiResult()` and `.catch()` never see it.

---

## Runtime & packaging

The facts that change what you type, and the floors that decide whether the package loads at all. This section is the home for all of them.

|  |  |
| --- | --- |
| One entry, two dialects | `import` resolves `dist/esm`, `require` resolves `dist/commonjs`, both through the single `.` export. In a TypeScript CommonJS file the typed spelling is `import sdk = require("maxio-advanced-billing")`; a plain `require` destructure works at run time but yields no types. `instanceof` is reliable **within** one dialect — if your app loads both, the two copies declare separate error classes |
| Consumer compiler settings | Under `exactOptionalPropertyTypes`, **omit or spread** an absent optional rather than assigning `undefined` to it. Under `verbatimModuleSyntax`, names that carry no runtime value (the options types, every model type) must be imported with `import type` |
| Required globals, and only these | Always: `fetch` (or a replacement passed as the `fetch` option), `AbortController`, `Headers`, `URL`, `setTimeout` and `clearTimeout`, `JSON`, `BigInt`. Auth adds more, each reached only once the credential needing it is configured. `TextEncoder` and `btoa` build every `Authorization: Basic` value, sent on every request that authenticates with basic. |
| Values that cross the boundary | `Date` for `date-time`, `string` for `date`, `ArrayBuffer` for an undeclared error body, `Headers` on a result and on a thrown `ResponseError`. The engine also carries a `bigint` int64 path and a base64 `bytes()` codec, reached only where a model uses them |
| Browser distribution | The package ships `dist/esm` and `dist/commonjs` and nothing else — **no bundle, no UMD file, no CDN artifact**. Use it through a bundler, which resolves `zod/v4-mini`, deduplicates it against your own copy and tree-shakes the rest |
| Other runtimes | Deno, Bun, Cloudflare Workers and Vercel Edge are all likely to work — the SDK needs only the globals above and imports no Node built-in — but **none of them is tested for this package**, so nothing here claims support for them |

The browser floor comes from the emitted output rather than the sources: `tshy` builds at `target: ES2022`, so native `#private` fields and methods survive into `dist/`.

| Browser | Minimum | Set by |
| --- | --- | --- |
| Chrome / Edge | **85** | `String.prototype.replaceAll`, logical assignment (`??=`) |
| Firefox | **90** | private class fields and methods |
| Safari / iOS Safari | **15** | private class **methods** |

That table is the **module-load** floor: below it the SDK fails while the module is evaluating, not at the first call. Two things degrade quietly above it. `{ cause }` on the `Error` constructor needs Chrome 93, Firefox 91 or Safari 15, so below that `err.cause` is `undefined`. More consequentially, **cancellation needs `AbortController.abort(reason)` and `AbortSignal.reason`**, which arrived in Chrome 98, Firefox 97 and Safari 15.4 — between the module-load floor and those versions the engine still aborts the request but produces no typed error at all.

