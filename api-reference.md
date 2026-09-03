# Reference

> Source: [MaxioAdvancedBillingClient](src/client.ts)

## MaxioGateway

> Source: [MaxioGateway](src/resources/maxio-gateway.ts)

<details>
<summary><code>requestAccessToken(request: MaxioGateway.RequestAccessTokenRequest, options?: RequestOptions): ApiPromise&lt;MaxioGatewayOAuthAccessToken, MaxioGateway.RequestAccessTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exchanges your connector's OAuth 2.0 client credentials for a bearer access token.

Authenticate with HTTP Basic auth (`client_id` as the username, `client_secret` as the password) or send `client_id` and `client_secret` in the form body. Then send the returned `access_token` as `Authorization: Bearer <access_token>` on every gateway request.

The client-credentials grant does not issue a refresh token — when the token expires, request a new one with the same credentials.

This endpoint is available only for connectors configured for OAuth2. It lives at your connector's root host (`https://{connector}.api.maxio.com/oauth/token`), not under the `/api/v1/billing` base path.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.maxioGateway.requestAccessToken({ body });
  // TODO: Handle 'response' of type MaxioGatewayOAuthAccessToken
} catch (err) {
  if (err instanceof MaxioGateway.RequestAccessTokenError && err.payload.kind === "maxioGatewayOAuthError") {
    // TODO: Handle 'err.payload.body' of type MaxioGatewayOAuthError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[MaxioGatewayOAuthTokenRequest](src/models/maxio-gateway-oauth-token-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MaxioGatewayOAuthAccessToken](src/models/maxio-gateway-oauth-access-token.ts)</code>

**OnError**: <code>[MaxioGateway.RequestAccessTokenError](src/resources/maxio-gateway.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ApiExports

> Source: [ApiExports](src/resources/api-exports.ts)

<details>
<summary><code>exportInvoices(options?: RequestOptions): ApiPromise&lt;BatchJobResponse, ApiExports.ExportInvoicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an invoices export and returns a batch job object.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiExports.exportInvoices();
  // TODO: Handle 'response' of type BatchJobResponse
} catch (err) {
  if (err instanceof ApiExports.ExportInvoicesError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchJobResponse](src/models/batch-job-response.ts)</code>

**OnError**: <code>[ApiExports.ExportInvoicesError](src/resources/api-exports.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>exportProformaInvoices(options?: RequestOptions): ApiPromise&lt;BatchJobResponse, ApiExports.ExportProformaInvoicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a proforma invoices export and returns a batch job object.

It is only available for Relationship Invoicing architecture.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiExports.exportProformaInvoices();
  // TODO: Handle 'response' of type BatchJobResponse
} catch (err) {
  if (err instanceof ApiExports.ExportProformaInvoicesError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchJobResponse](src/models/batch-job-response.ts)</code>

**OnError**: <code>[ApiExports.ExportProformaInvoicesError](src/resources/api-exports.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>exportSubscriptions(options?: RequestOptions): ApiPromise&lt;BatchJobResponse, ApiExports.ExportSubscriptionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a subscriptions export and returns a batch job object.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiExports.exportSubscriptions();
  // TODO: Handle 'response' of type BatchJobResponse
} catch (err) {
  if (err instanceof ApiExports.ExportSubscriptionsError && err.payload.kind === "singleErrorResponse1") {
    // TODO: Handle 'err.payload.body' of type SingleErrorResponse1
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchJobResponse](src/models/batch-job-response.ts)</code>

**OnError**: <code>[ApiExports.ExportSubscriptionsError](src/resources/api-exports.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listExportedInvoices(request: ApiExports.ListExportedInvoicesRequest, options?: RequestOptions): ApiPromise&lt;Invoice[], ApiExports.ListExportedInvoicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists exported invoices for a provided `batch_id`. Use pagination to control responses returned from the server.

Example: `GET https://{subdomain}.chargify.com/api_exports/invoices/123/rows?per_page=10000&page=1`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiExports.listExportedInvoices({ batchId });
  // TODO: Handle 'response' of type Invoice[]
} catch (err) {
  if (err instanceof ApiExports.ListExportedInvoicesError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>batchId</code> | <code>string</code> | Id of a Batch Job. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. <br>Default value is 100. <br>The maximum allowed values is 10000; any per_page value over 10000 will be changed to 10000. |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Invoice](src/models/invoice.ts)[]</code>

**OnError**: <code>[ApiExports.ListExportedInvoicesError](src/resources/api-exports.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listExportedProformaInvoices(request: ApiExports.ListExportedProformaInvoicesRequest, options?: RequestOptions): ApiPromise&lt;ProformaInvoice[], ApiExports.ListExportedProformaInvoicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists exported proforma invoices for a provided `batch_id`. Use pagination to control responses returned from the server.

Example: `GET https://{subdomain}.chargify.com/api_exports/proforma_invoices/123/rows?per_page=10000&page=1`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiExports.listExportedProformaInvoices({ batchId });
  // TODO: Handle 'response' of type ProformaInvoice[]
} catch (err) {
  if (err instanceof ApiExports.ListExportedProformaInvoicesError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>batchId</code> | <code>string</code> | Id of a Batch Job. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. <br>Default value is 100. <br>The maximum allowed values is 10000; any per_page value over 10000 will be changed to 10000. |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProformaInvoice](src/models/proforma-invoice.ts)[]</code>

**OnError**: <code>[ApiExports.ListExportedProformaInvoicesError](src/resources/api-exports.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listExportedSubscriptions(request: ApiExports.ListExportedSubscriptionsRequest, options?: RequestOptions): ApiPromise&lt;Subscription[], ApiExports.ListExportedSubscriptionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists exported subscriptions for a provided `batch_id`. Use pagination to control responses returned from the server.

Example: `GET https://{subdomain}.chargify.com/api_exports/subscriptions/123/rows?per_page=200&page=1`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiExports.listExportedSubscriptions({ batchId });
  // TODO: Handle 'response' of type Subscription[]
} catch (err) {
  if (err instanceof ApiExports.ListExportedSubscriptionsError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>batchId</code> | <code>string</code> | Id of a Batch Job. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. <br>Default value is 100. <br>The maximum allowed values is 10000; any per_page value over 10000 will be changed to 10000. |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Subscription](src/models/subscription.ts)[]</code>

**OnError**: <code>[ApiExports.ListExportedSubscriptionsError](src/resources/api-exports.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readInvoicesExport(request: ApiExports.ReadInvoicesExportRequest, options?: RequestOptions): ApiPromise&lt;BatchJobResponse, ApiExports.ReadInvoicesExportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a batch job object for an invoices export.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiExports.readInvoicesExport({ batchId });
  // TODO: Handle 'response' of type BatchJobResponse
} catch (err) {
  if (err instanceof ApiExports.ReadInvoicesExportError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>batchId</code> | <code>string</code> | Id of a Batch Job. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchJobResponse](src/models/batch-job-response.ts)</code>

**OnError**: <code>[ApiExports.ReadInvoicesExportError](src/resources/api-exports.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readProformaInvoicesExport(request: ApiExports.ReadProformaInvoicesExportRequest, options?: RequestOptions): ApiPromise&lt;BatchJobResponse, ApiExports.ReadProformaInvoicesExportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a batch job object for a proforma invoices export.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiExports.readProformaInvoicesExport({ batchId });
  // TODO: Handle 'response' of type BatchJobResponse
} catch (err) {
  if (err instanceof ApiExports.ReadProformaInvoicesExportError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>batchId</code> | <code>string</code> | Id of a Batch Job. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchJobResponse](src/models/batch-job-response.ts)</code>

**OnError**: <code>[ApiExports.ReadProformaInvoicesExportError](src/resources/api-exports.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readSubscriptionsExport(request: ApiExports.ReadSubscriptionsExportRequest, options?: RequestOptions): ApiPromise&lt;BatchJobResponse, ApiExports.ReadSubscriptionsExportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a batch job object for a subscriptions export.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiExports.readSubscriptionsExport({ batchId });
  // TODO: Handle 'response' of type BatchJobResponse
} catch (err) {
  if (err instanceof ApiExports.ReadSubscriptionsExportError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>batchId</code> | <code>string</code> | Id of a Batch Job. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchJobResponse](src/models/batch-job-response.ts)</code>

**OnError**: <code>[ApiExports.ReadSubscriptionsExportError](src/resources/api-exports.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AdvanceInvoice

> Source: [AdvanceInvoice](src/resources/advance-invoice.ts)

<details>
<summary><code>issueAdvanceInvoice(request: AdvanceInvoice.IssueAdvanceInvoiceRequestParams, options?: RequestOptions): ApiPromise&lt;Invoice, AdvanceInvoice.IssueAdvanceInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Issues an invoice in advance for a subscription's next renewal date. [See our docs](https://maxio.zendesk.com/hc/en-us/articles/24252026404749-Issue-Invoice-In-Advance) for more information on advance invoices, including eligibility for generating one; for the most part, they function like any other invoice, except they are issued early and have special behavior upon being voided.
A subscription may only have one advance invoice per billing period. Attempting to issue an advance invoice when one already exists will return an error.
That said, regeneration of the invoice may be forced with the params `force: true`, which will void an advance invoice if one exists and generate a new one. If no advance invoice exists, a new one will be generated.
We recommend using either the create or preview endpoints for proforma invoices to preview this advance invoice before using this endpoint to generate it.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.advanceInvoice.issueAdvanceInvoice({ subscriptionId });
  // TODO: Handle 'response' of type Invoice
} catch (err) {
  if (err instanceof AdvanceInvoice.IssueAdvanceInvoiceError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>body?</code> | <code>[IssueAdvanceInvoiceRequest](src/models/issue-advance-invoice-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Invoice](src/models/invoice.ts)</code>

**OnError**: <code>[AdvanceInvoice.IssueAdvanceInvoiceError](src/resources/advance-invoice.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readAdvanceInvoice(request: AdvanceInvoice.ReadAdvanceInvoiceRequest, options?: RequestOptions): ApiPromise&lt;Invoice, AdvanceInvoice.ReadAdvanceInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the advance invoice generated for a subscription's upcoming renewal. There can only be one advance invoice per subscription per billing cycle.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.advanceInvoice.readAdvanceInvoice({ subscriptionId });
  // TODO: Handle 'response' of type Invoice
} catch (err) {
  if (err instanceof AdvanceInvoice.ReadAdvanceInvoiceError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Invoice](src/models/invoice.ts)</code>

**OnError**: <code>[AdvanceInvoice.ReadAdvanceInvoiceError](src/resources/advance-invoice.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>voidAdvanceInvoice(request: AdvanceInvoice.VoidAdvanceInvoiceRequest, options?: RequestOptions): ApiPromise&lt;Invoice, AdvanceInvoice.VoidAdvanceInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Voids a subscription's existing advance invoice. Once voided, it can later be regenerated if desired.
A `reason` is required in order to void, and the invoice must have an open status. Voiding will cause any prepayments and credits that were applied to the invoice to be returned to the subscription. For a full overview of the impact of voiding, [see our help docs]($m/Invoice).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.advanceInvoice.voidAdvanceInvoice({ subscriptionId });
  // TODO: Handle 'response' of type Invoice
} catch (err) {
  if (err instanceof AdvanceInvoice.VoidAdvanceInvoiceError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>body?</code> | <code>[VoidInvoiceRequest](src/models/void-invoice-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Invoice](src/models/invoice.ts)</code>

**OnError**: <code>[AdvanceInvoice.VoidAdvanceInvoiceError](src/resources/advance-invoice.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BillingPortal

> Source: [BillingPortal](src/resources/billing-portal.ts)

<details>
<summary><code>enableBillingPortalForCustomer(request: BillingPortal.EnableBillingPortalForCustomerRequest, options?: RequestOptions): ApiPromise&lt;CustomerResponse, BillingPortal.EnableBillingPortalForCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enables Billing Portal access for a customer, with an option to send an invitation email at the same time.

## Billing Portal Documentation

Full documentation on how the Billing Portal operates within the Advanced Billing UI can be located [here](https://maxio.zendesk.com/hc/en-us/articles/24252412965133-Billing-Portal-Overview).

This documentation is focused on how to configure the Billing Portal Settings, as well as Subscriber Interaction and Merchant Management of the Billing Portal.

You can use this endpoint to enable Billing Portal access for a Customer, with the option of sending the Customer an Invitation email at the same time.

## Billing Portal Security

If your customer has been invited to the Billing Portal, then they will receive a link to manage their subscription (the “Management URL”) automatically at the bottom of their statements, invoices, and receipts. **This link changes periodically for security and is only valid for 65 days.**

If you need to provide your customer their Management URL through other means, you can retrieve it via the API. Because the URL is cryptographically signed with a timestamp, it is not possible for merchants to generate the URL without requesting it from Advanced Billing.

In order to prevent abuse & overuse, we ask that you request a new URL only when absolutely necessary. Management URLs are good for 65 days, so you should re-use a previously generated one as much as possible. If you use the URL frequently (such as to display on your website), **do not** make an API request to Advanced Billing every time.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.billingPortal.enableBillingPortalForCustomer({ customerId });
  // TODO: Handle 'response' of type CustomerResponse
} catch (err) {
  if (
    err instanceof BillingPortal.EnableBillingPortalForCustomerError &&
      err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customerId</code> | <code>number</code> | The Chargify id of the customer |
| <code>autoInvite?</code> | <code>[AutoInvite](src/models/auto-invite.ts)</code> | When set to 1, an Invitation email will be sent to the Customer.<br>When set to 0, or not sent, an email will not be sent.<br>Use in query: `auto_invite=1`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerResponse](src/models/customer-response.ts)</code>

**OnError**: <code>[BillingPortal.EnableBillingPortalForCustomerError](src/resources/billing-portal.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readBillingPortalLink(request: BillingPortal.ReadBillingPortalLinkRequest, options?: RequestOptions): ApiPromise&lt;PortalManagementLink, BillingPortal.ReadBillingPortalLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the exact URL required for a subscriber to access the Billing Portal.

## Rules for Management Link API

+ When retrieving a management URL, multiple requests for the same customer in a short period will return the **same** URL
+ We will not generate a new URL for 15 days
+ You must cache and remember this URL if you are going to need it again within 15 days
+ Only request a new URL after the `new_link_available_at` date
+ You are limited to 15 requests for the same URL. If you make more than 15 requests before `new_link_available_at`, you will be blocked from further Management URL requests (with a response code `429`).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.billingPortal.readBillingPortalLink({ customerId });
  // TODO: Handle 'response' of type PortalManagementLink
} catch (err) {
  if (err instanceof BillingPortal.ReadBillingPortalLinkError && err.payload.kind === "errorListResponse1") {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customerId</code> | <code>number</code> | The Chargify id of the customer |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PortalManagementLink](src/models/portal-management-link.ts)</code>

**OnError**: <code>[BillingPortal.ReadBillingPortalLinkError](src/resources/billing-portal.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resendBillingPortalInvitation(request: BillingPortal.ResendBillingPortalInvitationRequest, options?: RequestOptions): ApiPromise&lt;ResentInvitation, BillingPortal.ResendBillingPortalInvitationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resends a customer's Billing Portal invitation.

If you attempt to resend an invitation 5 times within 30 minutes, you will receive a `422` response with an `error` message in the body.

If you attempt to resend an invitation when the Billing Portal is already disabled for a Customer, you will receive a `422` error response.

If you attempt to resend an invitation when the Customer does not exist, you will receive a `404` error response.

## Limitations

This endpoint will only return a JSON response.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.billingPortal.resendBillingPortalInvitation({ customerId });
  // TODO: Handle 'response' of type ResentInvitation
} catch (err) {
  if (err instanceof BillingPortal.ResendBillingPortalInvitationError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customerId</code> | <code>number</code> | The Chargify id of the customer |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResentInvitation](src/models/resent-invitation.ts)</code>

**OnError**: <code>[BillingPortal.ResendBillingPortalInvitationError](src/resources/billing-portal.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>revokeBillingPortalAccess(request: BillingPortal.RevokeBillingPortalAccessRequest, options?: RequestOptions): ApiPromise&lt;RevokedInvitation, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revokes a customer's Billing Portal invitation.

If you attempt to revoke an invitation when the Billing Portal is already disabled for a Customer, you will receive a 422 error response.

## Limitations

This endpoint will only return a JSON response.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.billingPortal.revokeBillingPortalAccess({ customerId });
  // TODO: Handle 'response' of type RevokedInvitation
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customerId</code> | <code>number</code> | The Chargify id of the customer |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RevokedInvitation](src/models/revoked-invitation.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Coupons

> Source: [Coupons](src/resources/coupons.ts)

<details>
<summary><code>archiveCoupon(request: Coupons.ArchiveCouponRequest, options?: RequestOptions): ApiPromise&lt;CouponResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archives a coupon, making it unavailable for future use while remaining active on existing subscriptions.
Archiving makes that Coupon unavailable for future use, but allows it to remain attached and functional on existing Subscriptions that are using it.
The `archived_at` date and time will be assigned.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.coupons.archiveCoupon({ productFamilyId, couponId });
  // TODO: Handle 'response' of type CouponResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productFamilyId</code> | <code>number</code> | The Advanced Billing id of the product family to which the coupon belongs |
| <code>couponId</code> | <code>number</code> | The Advanced Billing id of the coupon |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CouponResponse](src/models/coupon-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCoupon(request: Coupons.CreateCouponRequest, options?: RequestOptions): ApiPromise&lt;CouponResponse, Coupons.CreateCouponError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a coupon under the specified product family.

You can create either a flat amount coupon, by specifying `amount_in_cents`, or percentage coupon by specifying `percentage`.

See [Apply Coupons to Subscriptions](https://maxio.zendesk.com/hc/en-us/articles/24261259337101-Coupons-and-Subscriptions) for information on applying a coupon to a subscription in the Advanced Billing UI.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.coupons.createCoupon({ productFamilyId });
  // TODO: Handle 'response' of type CouponResponse
} catch (err) {
  if (err instanceof Coupons.CreateCouponError && err.payload.kind === "errorListResponse1") {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productFamilyId</code> | <code>number</code> | The Advanced Billing id of the product family to which the coupon belongs |
| <code>body?</code> | <code>[CouponRequest](src/models/coupon-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CouponResponse](src/models/coupon-response.ts)</code>

**OnError**: <code>[Coupons.CreateCouponError](src/resources/coupons.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCouponSubcodes(request: Coupons.CreateCouponSubcodesRequest, options?: RequestOptions): ApiPromise&lt;CouponSubcodesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates subcodes for an existing coupon.

## Coupon Subcodes Intro

Coupon Subcodes allow you to create a set of unique codes that allow you to expand the use of one coupon.

For example:

Master Coupon Code:

+ SPRING2020

Coupon Subcodes:

+ SPRING90210
+ DP80302
+ SPRINGBALTIMORE

Coupon subcodes can be administered in the Admin Interface or via the API.

When creating a coupon subcode, you must specify a coupon to attach it to using the coupon_id. Valid coupon subcodes are all capital letters, contain only letters and numbers, and do not have any spaces. Lowercase letters will be capitalized before the subcode is created.

## Coupon Subcodes Documentation

Full documentation on how to create coupon subcodes in the Advanced Billing UI can be located [here](https://maxio.zendesk.com/hc/en-us/articles/24261208729229-Coupon-Codes).

Additionally, for documentation on how to apply a coupon to a Subscription within the Advanced Billing UI, see our documentation [here](https://maxio.zendesk.com/hc/en-us/articles/24261259337101-Coupons-and-Subscriptions).

## Create Coupon Subcode

This request allows you to create specific subcodes underneath an existing coupon code.

*Note*: If you are using any of the allowed special characters ("%", "@", "+", "-", "_", and "."), you must encode them for use in the URL.

    % to %25
    @ to %40
    + to %2B
    - to %2D
    _ to %5F
    . to %2E

So, if the coupon subcode is `20%OFF`, the URL to delete this coupon subcode would be: `https://<subdomain>.chargify.com/coupons/567/codes/20%25OFF.<format>`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.coupons.createCouponSubcodes({ couponId });
  // TODO: Handle 'response' of type CouponSubcodesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>couponId</code> | <code>number</code> | The Advanced Billing id of the coupon |
| <code>body?</code> | <code>[CouponSubcodes](src/models/coupon-subcodes.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CouponSubcodesResponse](src/models/coupon-subcodes-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createOrUpdateCouponCurrencyPrices(request: Coupons.CreateOrUpdateCouponCurrencyPricesRequest, options?: RequestOptions): ApiPromise&lt;CouponCurrencyResponse, Coupons.CreateOrUpdateCouponCurrencyPricesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates and/or updates currency prices for an existing coupon. Multiple prices can be created or updated in a single request but each of the currencies must be defined on the site level already and the coupon must be an amount-based coupon, not percentage.

Currency pricing for coupons must mirror the setup of the primary coupon pricing - if the primary coupon is percentage based, you will not be able to define pricing in non-primary currencies.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.coupons.createOrUpdateCouponCurrencyPrices({ couponId });
  // TODO: Handle 'response' of type CouponCurrencyResponse
} catch (err) {
  if (
    err instanceof Coupons.CreateOrUpdateCouponCurrencyPricesError &&
      err.payload.kind === "errorStringMapResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorStringMapResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>couponId</code> | <code>number</code> | The Advanced Billing id of the coupon |
| <code>body?</code> | <code>[CouponCurrencyRequest](src/models/coupon-currency-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CouponCurrencyResponse](src/models/coupon-currency-response.ts)</code>

**OnError**: <code>[Coupons.CreateOrUpdateCouponCurrencyPricesError](src/resources/coupons.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCouponSubcode(request: Coupons.DeleteCouponSubcodeRequest, options?: RequestOptions): ApiPromise&lt;undefined, Coupons.DeleteCouponSubcodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific subcode from a coupon.

## Example

Given a coupon with an ID of 567, and a coupon subcode of 20OFF, the URL to `DELETE` this coupon subcode would be:

```
http://subdomain.chargify.com/coupons/567/codes/20OFF.<format>
```

Note: If you are using any of the allowed special characters (“%”, “@”, “+”, “-”, “_”, and “.”), you must encode them for use in the URL.

| Special character | Encoding |
|-------------------|----------|
| %                 | %25      |
| @                 | %40      |
| +                 | %2B      |
| –                 | %2D      |
| _                 | %5F      |
| .                 | %2E      |

## Percent Encoding Example

Or if the coupon subcode is 20%OFF, the URL to delete this coupon subcode would be: @https://<subdomain>.chargify.com/coupons/567/codes/20%25OFF.<format>.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.coupons.deleteCouponSubcode({ couponId, subcode });
} catch (err) {
  if (err instanceof Coupons.DeleteCouponSubcodeError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>couponId</code> | <code>number</code> | The Advanced Billing id of the coupon to which the subcode belongs |
| <code>subcode</code> | <code>string</code> | The subcode of the coupon |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Coupons.DeleteCouponSubcodeError](src/resources/coupons.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>findCoupon(request: Coupons.FindCouponRequest, options?: RequestOptions): ApiPromise&lt;CouponResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches for a coupon by code, returning a 404 if no coupon is found. By passing a code parameter, the find will attempt to locate a coupon that matches that code.

If you have more than one product family and if the coupon you are trying to find does not belong to the default product family in your site, then you will need to specify (either in the url or as a query string param) the product family id.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.coupons.findCoupon();
  // TODO: Handle 'response' of type CouponResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productFamilyId?</code> | <code>number</code> | The Advanced Billing id of the product family to which the coupon belongs |
| <code>code?</code> | <code>string</code> | The code of the coupon |
| <code>currencyPrices?</code> | <code>boolean</code> | (Optional) If you have defined multiple currencies at the site level, you can pass `?currency_prices=true` to include an array of currency price data in the response. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CouponResponse](src/models/coupon-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCouponSubcodes(request: Coupons.ListCouponSubcodesRequest, options?: RequestOptions): ApiPromise&lt;CouponSubcodes, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the subcodes attached to a coupon.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.coupons.listCouponSubcodes({ couponId });
  // TODO: Handle 'response' of type CouponSubcodes
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>couponId</code> | <code>number</code> | The Advanced Billing id of the coupon |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CouponSubcodes](src/models/coupon-subcodes.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCoupons(request: Coupons.ListCouponsRequest, options?: RequestOptions): ApiPromise&lt;CouponResponse[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists coupons for a site.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.coupons.listCoupons();
  // TODO: Handle 'response' of type CouponResponse[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 30. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| <code>filter?</code> | <code>[ListCouponsFilter](src/models/list-coupons-filter.ts)</code> | Filter to use for List Coupons operations |
| <code>currencyPrices?</code> | <code>boolean</code> | (Optional) If you have defined multiple currencies at the site level, you can pass `?currency_prices=true` to include an array of currency price data in the response. Use in query `currency_prices=true`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CouponResponse](src/models/coupon-response.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCouponsForProductFamily(request: Coupons.ListCouponsForProductFamilyRequest, options?: RequestOptions): ApiPromise&lt;CouponResponse[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists coupons for a specific product family in a site.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.coupons.listCouponsForProductFamily({ productFamilyId });
  // TODO: Handle 'response' of type CouponResponse[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productFamilyId</code> | <code>number</code> | The Advanced Billing id of the product family to which the coupon belongs |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 30. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| <code>filter?</code> | <code>[ListCouponsFilter](src/models/list-coupons-filter.ts)</code> | Filter to use for List Coupons operations |
| <code>currencyPrices?</code> | <code>boolean</code> | (Optional) If you have defined multiple currencies at the site level, you can pass `?currency_prices=true` to include an array of currency price data in the response. Use in query `currency_prices=true`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CouponResponse](src/models/coupon-response.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readCoupon(request: Coupons.ReadCouponRequest, options?: RequestOptions): ApiPromise&lt;CouponResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a coupon by its Advanced Billing-assigned ID. You must identify the Coupon in this call by the ID parameter that Advanced Billing assigns.
If instead you would like to find a Coupon using a Coupon code, see the Coupon Find method.

If the coupon is set to `use_site_exchange_rate: true`, it will return pricing based on the current exchange rate. If the flag is set to false, it will return all of the defined prices for each currency.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.coupons.readCoupon({ productFamilyId, couponId });
  // TODO: Handle 'response' of type CouponResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productFamilyId</code> | <code>number</code> | The Advanced Billing id of the product family to which the coupon belongs |
| <code>couponId</code> | <code>number</code> | The Advanced Billing id of the coupon |
| <code>currencyPrices?</code> | <code>boolean</code> | (Optional) If you have defined multiple currencies at the site level, you can pass `?currency_prices=true` to include an array of currency price data in the response. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CouponResponse](src/models/coupon-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readCouponUsage(request: Coupons.ReadCouponUsageRequest, options?: RequestOptions): ApiPromise&lt;CouponUsage[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists coupon usage details, one entry per product.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.coupons.readCouponUsage({ productFamilyId, couponId });
  // TODO: Handle 'response' of type CouponUsage[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productFamilyId</code> | <code>number</code> | The Advanced Billing id of the product family to which the coupon belongs. |
| <code>couponId</code> | <code>number</code> | The Advanced Billing id of the coupon. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CouponUsage](src/models/coupon-usage.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCoupon(request: Coupons.UpdateCouponRequest, options?: RequestOptions): ApiPromise&lt;CouponResponse, Coupons.UpdateCouponError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a coupon. 

You can restrict a coupon to only apply to specific products / components by optionally passing in hashes of `restricted_products` and/or `restricted_components` in the format:
`{ "<product/component_id>": boolean_value }`

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.coupons.updateCoupon({ productFamilyId, couponId });
  // TODO: Handle 'response' of type CouponResponse
} catch (err) {
  if (err instanceof Coupons.UpdateCouponError && err.payload.kind === "errorListResponse1") {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productFamilyId</code> | <code>number</code> | The Advanced Billing id of the product family to which the coupon belongs |
| <code>couponId</code> | <code>number</code> | The Advanced Billing id of the coupon |
| <code>body?</code> | <code>[CouponRequest](src/models/coupon-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CouponResponse](src/models/coupon-response.ts)</code>

**OnError**: <code>[Coupons.UpdateCouponError](src/resources/coupons.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCouponSubcodes(request: Coupons.UpdateCouponSubcodesRequest, options?: RequestOptions): ApiPromise&lt;CouponSubcodesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the subcodes for a coupon, replacing all existing subcodes with the new list.
Send an array of new coupon subcodes.

**Note**: All current subcodes for that Coupon will be deleted first, and replaced with the list of subcodes sent to this endpoint.
The response will contain:

+ The created subcodes,

+ Subcodes that were not created because they already exist,

+ Any subcodes not created because they are invalid.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.coupons.updateCouponSubcodes({ couponId });
  // TODO: Handle 'response' of type CouponSubcodesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>couponId</code> | <code>number</code> | The Advanced Billing id of the coupon |
| <code>body?</code> | <code>[CouponSubcodes](src/models/coupon-subcodes.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CouponSubcodesResponse](src/models/coupon-subcodes-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>validateCoupon(request: Coupons.ValidateCouponRequest, options?: RequestOptions): ApiPromise&lt;CouponResponse, Coupons.ValidateCouponError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Verifies whether a specific coupon code is valid. This method is useful for validating coupon codes that are entered by a customer. If the coupon is found and is valid, the coupon will be returned with a 200 status code.

If the coupon is invalid, the status code will be 404 and the response will say why it is invalid. If the coupon is valid, the status code will be 200 and the coupon will be returned. The following reasons for invalidity are supported:

+ Coupon not found
+ Coupon is invalid
+ Coupon expired

If you have more than one product family and if the coupon you are validating does not belong to the first product family in your site, then you will need to specify the product family, either in the url or as a query string param. This can be done by supplying the id or the handle in the `handle:my-family` format.

Eg.

```
https://<subdomain>.chargify.com/product_families/handle:<product_family_handle>/coupons/validate.<format>?code=<coupon_code>
```

Or:

```
https://<subdomain>.chargify.com/coupons/validate.<format>?code=<coupon_code>&product_family_id=<id>
```

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.coupons.validateCoupon({ code });
  // TODO: Handle 'response' of type CouponResponse
} catch (err) {
  if (err instanceof Coupons.ValidateCouponError && err.payload.kind === "singleStringErrorResponse1") {
    // TODO: Handle 'err.payload.body' of type SingleStringErrorResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>code</code> | <code>string</code> | The code of the coupon |
| <code>productFamilyId?</code> | <code>number</code> | The Advanced Billing id of the product family to which the coupon belongs |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CouponResponse](src/models/coupon-response.ts)</code>

**OnError**: <code>[Coupons.ValidateCouponError](src/resources/coupons.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Components

> Source: [Components](src/resources/components.ts)

<details>
<summary><code>archiveComponent(request: Components.ArchiveComponentRequest, options?: RequestOptions): ApiPromise&lt;Component, Components.ArchiveComponentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archives the component; all current subscribers will continue to be charged as usual.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.components.archiveComponent({ productFamilyId, componentId });
  // TODO: Handle 'response' of type Component
} catch (err) {
  if (err instanceof Components.ArchiveComponentError && err.payload.kind === "errorListResponse1") {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productFamilyId</code> | <code>number</code> | The Advanced Billing id of the product family to which the component belongs |
| <code>componentId</code> | <code>string</code> | Either the Advanced Billing id of the component or the handle for the component prefixed with `handle:` |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Component](src/models/component.ts)</code>

**OnError**: <code>[Components.ArchiveComponentError](src/resources/components.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createEventBasedComponent(request: Components.CreateEventBasedComponentRequest, options?: RequestOptions): ApiPromise&lt;ComponentResponse, Components.CreateEventBasedComponentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an event-based component definition under the specified product family. An event-based component can then be added and “allocated” for a subscription.

Event-based components are similar to other component types, in that you define the component parameters (such as name and taxability) and the pricing. A key difference for the event-based component is that it must be attached to a metric. This is because the metric provides the component with the actual quantity used in computing what and how much will be billed each period for each subscription.

So, instead of reporting usage directly for each component (as you would with metered components), the usage is derived from analysis of your events.

For more information on components, see our documentation [here](https://maxio.zendesk.com/hc/en-us/articles/24261141522189-Components-Overview).

If you have the new [Catalog experience](page:help/announcements/2026-announcements#new-catalog-experience-and-terminology) enabled, taxable components must include a non-blank `tax_code`. Sending `"tax_code": ""` returns `422`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.components.createEventBasedComponent({ productFamilyId });
  // TODO: Handle 'response' of type ComponentResponse
} catch (err) {
  if (err instanceof Components.CreateEventBasedComponentError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productFamilyId</code> | <code>string</code> | Either the product family's id or its handle prefixed with `handle:` |
| <code>body?</code> | <code>[CreateEbbComponent](src/models/create-ebb-component.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComponentResponse](src/models/component-response.ts)</code>

**OnError**: <code>[Components.CreateEventBasedComponentError](src/resources/components.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createMeteredComponent(request: Components.CreateMeteredComponentRequest, options?: RequestOptions): ApiPromise&lt;ComponentResponse, Components.CreateMeteredComponentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a metered component definition under the specified product family. A metered component can then be added and “allocated” for a subscription.

Metered components are used to bill for any type of unit that resets to 0 at the end of the billing period (think daily Google Ads clicks or monthly cell phone minutes). This is most commonly associated with usage-based billing and many other pricing schemes.

Note that this is different from recurring quantity-based components, which DO NOT reset to zero at the start of every billing period. If you want to bill for a quantity of something that does not change unless you change it, then you want quantity components, instead.

For more information on components, see our documentation [here](https://maxio.zendesk.com/hc/en-us/articles/24261141522189-Components-Overview).

If you have the new [Catalog experience](page:help/announcements/2026-announcements#new-catalog-experience-and-terminology) enabled, taxable components must include a non-blank `tax_code`. Sending `"tax_code": ""` returns `422`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.components.createMeteredComponent({ productFamilyId });
  // TODO: Handle 'response' of type ComponentResponse
} catch (err) {
  if (err instanceof Components.CreateMeteredComponentError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productFamilyId</code> | <code>string</code> | Either the product family's id or its handle prefixed with `handle:` |
| <code>body?</code> | <code>[CreateMeteredComponent](src/models/create-metered-component.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComponentResponse](src/models/component-response.ts)</code>

**OnError**: <code>[Components.CreateMeteredComponentError](src/resources/components.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createOnOffComponent(request: Components.CreateOnOffComponentRequest, options?: RequestOptions): ApiPromise&lt;ComponentResponse, Components.CreateOnOffComponentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an On/Off component definition under the specified product family. An On/Off component can then be added and “allocated” for a subscription.

On/off components are used for any flat fee, recurring add on (think $99/month for tech support or a flat add on shipping fee).

For more information on components, see our documentation [here](https://maxio.zendesk.com/hc/en-us/articles/24261141522189-Components-Overview).

If you have the new [Catalog experience](page:help/announcements/2026-announcements#new-catalog-experience-and-terminology) enabled, taxable components must include a non-blank `tax_code`. Sending `"tax_code": ""` returns `422`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.components.createOnOffComponent({ productFamilyId });
  // TODO: Handle 'response' of type ComponentResponse
} catch (err) {
  if (err instanceof Components.CreateOnOffComponentError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productFamilyId</code> | <code>string</code> | Either the product family's id or its handle prefixed with `handle:` |
| <code>body?</code> | <code>[CreateOnOffComponent](src/models/create-on-off-component.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComponentResponse](src/models/component-response.ts)</code>

**OnError**: <code>[Components.CreateOnOffComponentError](src/resources/components.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPrepaidUsageComponent(request: Components.CreatePrepaidUsageComponentRequest, options?: RequestOptions): ApiPromise&lt;ComponentResponse, Components.CreatePrepaidUsageComponentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a prepaid usage component definition under the specified product family. A prepaid component can then be added and “allocated” for a subscription.

Prepaid components allow customers to pre-purchase units that can be used up over time on their subscription. In a sense, they are the mirror image of metered components; while metered components charge at the end of the period for the amount of units used, prepaid components are charged for at the time of purchase, and we subsequently keep track of the usage against the amount purchased.

For more information on components, see our documentation [here](https://maxio.zendesk.com/hc/en-us/articles/24261141522189-Components-Overview).

If you have the new [Catalog experience](page:help/announcements/2026-announcements#new-catalog-experience-and-terminology) enabled, taxable components must include a non-blank `tax_code`. Sending `"tax_code": ""` returns `422`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.components.createPrepaidUsageComponent({ productFamilyId });
  // TODO: Handle 'response' of type ComponentResponse
} catch (err) {
  if (err instanceof Components.CreatePrepaidUsageComponentError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productFamilyId</code> | <code>string</code> | Either the product family's id or its handle prefixed with `handle:` |
| <code>body?</code> | <code>[CreatePrepaidComponent](src/models/create-prepaid-component.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComponentResponse](src/models/component-response.ts)</code>

**OnError**: <code>[Components.CreatePrepaidUsageComponentError](src/resources/components.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createQuantityBasedComponent(request: Components.CreateQuantityBasedComponentRequest, options?: RequestOptions): ApiPromise&lt;ComponentResponse, Components.CreateQuantityBasedComponentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Quantity Based component definition under the specified product family. A Quantity Based component can then be added and “allocated” for a subscription.

When defining a Quantity Based component, you can choose one of 2 types:
#### Recurring
Recurring quantity-based components are used to bill for the number of some unit (think monthly software user licenses or the number of pairs of socks in a box-a-month club). This is most commonly associated with billing for user licenses, number of users, number of employees, etc.

#### One-time
One-time quantity-based components are used to create ad hoc usage charges that do not recur. For example, at the time of signup, you might want to charge your customer a one-time fee for onboarding or other services.

The allocated quantity for one-time quantity-based components immediately gets reset back to zero after the allocation is made.

For more information on components, see our documentation [here](https://maxio.zendesk.com/hc/en-us/articles/24261141522189-Components-Overview).

If you have the new [Catalog experience](page:help/announcements/2026-announcements#new-catalog-experience-and-terminology) enabled, taxable components must include a non-blank `tax_code`. Sending `"tax_code": ""` returns `422`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.components.createQuantityBasedComponent({ productFamilyId });
  // TODO: Handle 'response' of type ComponentResponse
} catch (err) {
  if (err instanceof Components.CreateQuantityBasedComponentError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productFamilyId</code> | <code>string</code> | Either the product family's id or its handle prefixed with `handle:` |
| <code>body?</code> | <code>[CreateQuantityBasedComponent](src/models/create-quantity-based-component.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComponentResponse](src/models/component-response.ts)</code>

**OnError**: <code>[Components.CreateQuantityBasedComponentError](src/resources/components.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>findComponent(request: Components.FindComponentRequest, options?: RequestOptions): ApiPromise&lt;ComponentResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information for a component matching the provided handle. You can identify your components with a handle so you don't have to save or reference the IDs we generate.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.components.findComponent({ handle });
  // TODO: Handle 'response' of type ComponentResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>handle</code> | <code>string</code> | The handle of the component to find |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComponentResponse](src/models/component-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listComponents(request: Components.ListComponentsRequest, options?: RequestOptions): ApiPromise&lt;ComponentResponse[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists components for a site.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.components.listComponents();
  // TODO: Handle 'response' of type ComponentResponse[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dateField?</code> | <code>[BasicDateField](src/models/basic-date-field.ts)</code> | The type of filter you would like to apply to your search. |
| <code>startDate?</code> | <code>string</code> | The start date (format YYYY-MM-DD) with which to filter the date_field. Returns components with a timestamp at or after midnight (12:00:00 AM) in your site’s time zone on the date specified. |
| <code>endDate?</code> | <code>string</code> | The end date (format YYYY-MM-DD) with which to filter the date_field. Returns components with a timestamp up to and including 11:59:59PM in your site’s time zone on the date specified. |
| <code>startDatetime?</code> | <code>string</code> | The start date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns components with a timestamp at or after exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of start_date. |
| <code>endDatetime?</code> | <code>string</code> | The end date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns components with a timestamp at or before exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of end_date. |
| <code>includeArchived?</code> | <code>boolean</code> | Include archived items. |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| <code>filter?</code> | <code>[ListComponentsFilter](src/models/list-components-filter.ts)</code> | Filter to use for List Components operations |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComponentResponse](src/models/component-response.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listComponentsForProductFamily(request: Components.ListComponentsForProductFamilyRequest, options?: RequestOptions): ApiPromise&lt;ComponentResponse[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists components for a particular product family.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.components.listComponentsForProductFamily({ productFamilyId });
  // TODO: Handle 'response' of type ComponentResponse[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productFamilyId</code> | <code>number</code> | The Advanced Billing id of the product family |
| <code>includeArchived?</code> | <code>boolean</code> | Include archived items. |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| <code>filter?</code> | <code>[ListComponentsFilter](src/models/list-components-filter.ts)</code> | Filter to use for List Components operations |
| <code>dateField?</code> | <code>[BasicDateField](src/models/basic-date-field.ts)</code> | The type of filter you would like to apply to your search. Use in query `date_field=created_at`. |
| <code>endDate?</code> | <code>string</code> | The end date (format YYYY-MM-DD) with which to filter the date_field. Returns components with a timestamp up to and including 11:59:59PM in your site’s time zone on the date specified. |
| <code>endDatetime?</code> | <code>string</code> | The end date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns components with a timestamp at or before exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of end_date. |
| <code>startDate?</code> | <code>string</code> | The start date (format YYYY-MM-DD) with which to filter the date_field. Returns components with a timestamp at or after midnight (12:00:00 AM) in your site’s time zone on the date specified. |
| <code>startDatetime?</code> | <code>string</code> | The start date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns components with a timestamp at or after exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of start_date. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComponentResponse](src/models/component-response.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readComponent(request: Components.ReadComponentRequest, options?: RequestOptions): ApiPromise&lt;ComponentResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information regarding a component from a specific product family.

You can read the component by either the component's id or handle. When using the handle, it must be prefixed with `handle:`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.components.readComponent({ productFamilyId, componentId });
  // TODO: Handle 'response' of type ComponentResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productFamilyId</code> | <code>number</code> | The Advanced Billing id of the product family to which the component belongs |
| <code>componentId</code> | <code>string</code> | Either the Advanced Billing id of the component or the handle for the component prefixed with `handle:` |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComponentResponse](src/models/component-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateComponent(request: Components.UpdateComponentRequestParams, options?: RequestOptions): ApiPromise&lt;ComponentResponse, Components.UpdateComponentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a component.

You may read the component by either the component's id or handle. When using the handle, it must be prefixed with `handle:`.

If you have the new [Catalog experience](page:help/announcements/2026-announcements#new-catalog-experience-and-terminology) enabled, taxable components must include a non-blank `tax_code`. Sending `"tax_code": ""` returns `422`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.components.updateComponent({ componentId });
  // TODO: Handle 'response' of type ComponentResponse
} catch (err) {
  if (err instanceof Components.UpdateComponentError && err.payload.kind === "errorListResponse1") {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>componentId</code> | <code>string</code> | The id or handle of the component |
| <code>body?</code> | <code>[UpdateComponentRequest](src/models/update-component-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComponentResponse](src/models/component-response.ts)</code>

**OnError**: <code>[Components.UpdateComponentError](src/resources/components.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateProductFamilyComponent(request: Components.UpdateProductFamilyComponentRequest, options?: RequestOptions): ApiPromise&lt;ComponentResponse, Components.UpdateProductFamilyComponentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a component from a specific product family.

You may read the component by either the component's id or handle. When using the handle, it must be prefixed with `handle:`.

If you have the new [Catalog experience](page:help/announcements/2026-announcements#new-catalog-experience-and-terminology) enabled, taxable components must include a non-blank `tax_code`. Sending `"tax_code": ""` returns `422`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.components.updateProductFamilyComponent({ productFamilyId, componentId });
  // TODO: Handle 'response' of type ComponentResponse
} catch (err) {
  if (
    err instanceof Components.UpdateProductFamilyComponentError && err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productFamilyId</code> | <code>number</code> | The Advanced Billing id of the product family to which the component belongs |
| <code>componentId</code> | <code>string</code> | Either the Advanced Billing id of the component or the handle for the component prefixed with `handle:` |
| <code>body?</code> | <code>[UpdateComponentRequest](src/models/update-component-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComponentResponse](src/models/component-response.ts)</code>

**OnError**: <code>[Components.UpdateProductFamilyComponentError](src/resources/components.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ComponentPricePoints

> Source: [ComponentPricePoints](src/resources/component-price-points.ts)

<details>
<summary><code>archiveComponentPricePoint(request: ComponentPricePoints.ArchiveComponentPricePointRequest, options?: RequestOptions): ApiPromise&lt;ComponentPricePointResponse, ComponentPricePoints.ArchiveComponentPricePointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archives a component price point. Subscriptions using a price point that has been archived will continue using it until they're moved to another price point.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.componentPricePoints.archiveComponentPricePoint({
    componentId,
    pricePointId,
  });
  // TODO: Handle 'response' of type ComponentPricePointResponse
} catch (err) {
  if (
    err instanceof ComponentPricePoints.ArchiveComponentPricePointError &&
      err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>componentId</code> | <code>[ComponentIdModel](src/models/unions/component-id-model.ts)</code> | The id or handle of the component. When using the handle, it must be prefixed with `handle:`. Example: `123` for an integer ID, or `handle:example-product-handle` for a string handle. |
| <code>pricePointId</code> | <code>[PricePointIdModel](src/models/unions/price-point-id-model.ts)</code> | The id or handle of the price point. When using the handle, it must be prefixed with `handle:`. Example: `123` for an integer ID, or `handle:example-price_point-handle` for a string handle. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComponentPricePointResponse](src/models/component-price-point-response.ts)</code>

**OnError**: <code>[ComponentPricePoints.ArchiveComponentPricePointError](src/resources/component-price-points.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkCreateComponentPricePoints(request: ComponentPricePoints.BulkCreateComponentPricePointsRequest, options?: RequestOptions): ApiPromise&lt;ComponentPricePointsResponse, ComponentPricePoints.BulkCreateComponentPricePointsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates multiple component price points in one request.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.componentPricePoints.bulkCreateComponentPricePoints({ componentId });
  // TODO: Handle 'response' of type ComponentPricePointsResponse
} catch (err) {
  if (
    err instanceof ComponentPricePoints.BulkCreateComponentPricePointsError &&
      err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>componentId</code> | <code>string</code> | The Advanced Billing id of the component for which you want to fetch price points. |
| <code>body?</code> | <code>[CreateComponentPricePointsRequest](src/models/create-component-price-points-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComponentPricePointsResponse](src/models/component-price-points-response.ts)</code>

**OnError**: <code>[ComponentPricePoints.BulkCreateComponentPricePointsError](src/resources/component-price-points.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloneComponentPricePoint(request: ComponentPricePoints.CloneComponentPricePointRequestParams, options?: RequestOptions): ApiPromise&lt;ComponentPricePointCurrencyOverageResponse, ComponentPricePoints.CloneComponentPricePointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Clones a component price point. Custom price points (tied to a specific subscription) cannot be cloned. The following attributes are copied from the source price point:
- Pricing scheme
- All price tiers (with starting/ending quantities and unit prices)
- Tax included setting
- Currency prices (if definitive pricing is set)
- Overage pricing (for prepaid usage components)
- Interval settings (if multi-frequency is enabled)
- Event-based billing segments (if applicable)

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.componentPricePoints.cloneComponentPricePoint({ componentId, pricePointId });
  // TODO: Handle 'response' of type ComponentPricePointCurrencyOverageResponse
} catch (err) {
  if (err instanceof ComponentPricePoints.CloneComponentPricePointError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>componentId</code> | <code>[ComponentIdModel](src/models/unions/component-id-model.ts)</code> | The id or handle of the component. When using the handle, it must be prefixed with `handle:`. Example: `123` for an integer ID, or `handle:example-product-handle` for a string handle. |
| <code>pricePointId</code> | <code>[PricePointIdModel](src/models/unions/price-point-id-model.ts)</code> | The id or handle of the price point. When using the handle, it must be prefixed with `handle:`. Example: `123` for an integer ID, or `handle:example-price_point-handle` for a string handle. |
| <code>body?</code> | <code>[CloneComponentPricePointRequest](src/models/clone-component-price-point-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComponentPricePointCurrencyOverageResponse](src/models/component-price-point-currency-overage-response.ts)</code>

**OnError**: <code>[ComponentPricePoints.CloneComponentPricePointError](src/resources/component-price-points.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createComponentPricePoint(request: ComponentPricePoints.CreateComponentPricePointRequestParams, options?: RequestOptions): ApiPromise&lt;ComponentPricePointResponse, ComponentPricePoints.CreateComponentPricePointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a price point for an existing component.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.componentPricePoints.createComponentPricePoint({ componentId });
  // TODO: Handle 'response' of type ComponentPricePointResponse
} catch (err) {
  if (
    err instanceof ComponentPricePoints.CreateComponentPricePointError &&
      err.payload.kind === "errorArrayMapResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorArrayMapResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>componentId</code> | <code>number</code> | The Advanced Billing id of the component |
| <code>body?</code> | <code>[CreateComponentPricePointRequest](src/models/create-component-price-point-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComponentPricePointResponse](src/models/component-price-point-response.ts)</code>

**OnError**: <code>[ComponentPricePoints.CreateComponentPricePointError](src/resources/component-price-points.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCurrencyPrices(request: ComponentPricePoints.CreateCurrencyPricesRequestParams, options?: RequestOptions): ApiPromise&lt;ComponentCurrencyPricesResponse, ComponentPricePoints.CreateCurrencyPricesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates currency prices for a given currency defined at the site level.

When creating currency prices, they need to mirror the structure of your primary pricing. For each price level defined on the component price point, there should be a matching price level created in the given currency.

Note: Currency Prices are not able to be created for custom price points.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.componentPricePoints.createCurrencyPrices({ pricePointId });
  // TODO: Handle 'response' of type ComponentCurrencyPricesResponse
} catch (err) {
  if (
    err instanceof ComponentPricePoints.CreateCurrencyPricesError &&
      err.payload.kind === "errorArrayMapResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorArrayMapResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pricePointId</code> | <code>number</code> | The Advanced Billing id of the price point |
| <code>body?</code> | <code>[CreateCurrencyPricesRequest](src/models/create-currency-prices-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComponentCurrencyPricesResponse](src/models/component-currency-prices-response.ts)</code>

**OnError**: <code>[ComponentPricePoints.CreateCurrencyPricesError](src/resources/component-price-points.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAllComponentPricePoints(request: ComponentPricePoints.ListAllComponentPricePointsRequest, options?: RequestOptions): ApiPromise&lt;ListComponentsPricePointsResponse, ComponentPricePoints.ListAllComponentPricePointsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all component price points belonging to a site.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.componentPricePoints.listAllComponentPricePoints();
  // TODO: Handle 'response' of type ListComponentsPricePointsResponse
} catch (err) {
  if (
    err instanceof ComponentPricePoints.ListAllComponentPricePointsError &&
      err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>include?</code> | <code>[ListComponentsPricePointsInclude](src/models/list-components-price-points-include.ts)</code> | Allows including additional data in the response. Use in query: `include=currency_prices`. |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| <code>direction?</code> | <code>[SortingDirection](src/models/sorting-direction.ts)</code> | Controls the order in which results are returned.<br>Use in query `direction=asc`. |
| <code>filter?</code> | <code>[ListPricePointsFilter](src/models/list-price-points-filter.ts)</code> | Filter to use for List PricePoints operations |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListComponentsPricePointsResponse](src/models/list-components-price-points-response.ts)</code>

**OnError**: <code>[ComponentPricePoints.ListAllComponentPricePointsError](src/resources/component-price-points.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listComponentPricePoints(request: ComponentPricePoints.ListComponentPricePointsRequest, options?: RequestOptions): ApiPromise&lt;ComponentPricePointsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the price points associated with a component.

You may specify the component by using either the numeric id or the `handle:gold` syntax.

If the price point is set to `use_site_exchange_rate: true`, it will return pricing based on the current exchange rate. If the flag is set to false, it will return all of the defined prices for each currency.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.componentPricePoints.listComponentPricePoints({ componentId });
  // TODO: Handle 'response' of type ComponentPricePointsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>componentId</code> | <code>number</code> | The Advanced Billing id of the component |
| <code>currencyPrices?</code> | <code>boolean</code> | Include an array of currency price data. |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| <code>filterType?</code> | <code>[PricePointType](src/models/price-point-type.ts)[]</code> | Use in query: `filter[type]=catalog,default`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComponentPricePointsResponse](src/models/component-price-points-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>promoteComponentPricePointToDefault(request: ComponentPricePoints.PromoteComponentPricePointToDefaultRequest, options?: RequestOptions): ApiPromise&lt;ComponentResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets a new default price point for the component. This new default will apply to all new subscriptions going forward - existing subscriptions will remain on their current price point.

See [Price Points Documentation](https://maxio.zendesk.com/hc/en-us/articles/24261191737101-Price-Points-Components) for more information on price points and moving subscriptions between price points.

Note: Custom price points are not able to be set as the default for a component.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.componentPricePoints.promoteComponentPricePointToDefault({
    componentId,
    pricePointId,
  });
  // TODO: Handle 'response' of type ComponentResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>componentId</code> | <code>number</code> | The Advanced Billing id of the component to which the price point belongs |
| <code>pricePointId</code> | <code>number</code> | The Advanced Billing id of the price point |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComponentResponse](src/models/component-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readComponentPricePoint(request: ComponentPricePoints.ReadComponentPricePointRequest, options?: RequestOptions): ApiPromise&lt;ComponentPricePointCurrencyOverageResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details for a specific component price point. You can achieve this by using either the component price point ID or handle.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.componentPricePoints.readComponentPricePoint({ componentId, pricePointId });
  // TODO: Handle 'response' of type ComponentPricePointCurrencyOverageResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>componentId</code> | <code>[ComponentIdModel](src/models/unions/component-id-model.ts)</code> | The id or handle of the component. When using the handle, it must be prefixed with `handle:`. Example: `123` for an integer ID, or `handle:example-product-handle` for a string handle. |
| <code>pricePointId</code> | <code>[PricePointIdModel](src/models/unions/price-point-id-model.ts)</code> | The id or handle of the price point. When using the handle, it must be prefixed with `handle:`. Example: `123` for an integer ID, or `handle:example-price_point-handle` for a string handle. |
| <code>currencyPrices?</code> | <code>boolean</code> | Include an array of currency price data. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComponentPricePointCurrencyOverageResponse](src/models/component-price-point-currency-overage-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unarchiveComponentPricePoint(request: ComponentPricePoints.UnarchiveComponentPricePointRequest, options?: RequestOptions): ApiPromise&lt;ComponentPricePointResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unarchives a component price point.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.componentPricePoints.unarchiveComponentPricePoint({
    componentId,
    pricePointId,
  });
  // TODO: Handle 'response' of type ComponentPricePointResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>componentId</code> | <code>number</code> | The Advanced Billing id of the component to which the price point belongs |
| <code>pricePointId</code> | <code>number</code> | The Advanced Billing id of the price point |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComponentPricePointResponse](src/models/component-price-point-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateComponentPricePoint(request: ComponentPricePoints.UpdateComponentPricePointRequestParams, options?: RequestOptions): ApiPromise&lt;ComponentPricePointResponse, ComponentPricePoints.UpdateComponentPricePointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a component price point and its associated prices.

Passing in a price bracket without an `id` will attempt to create a new price.

Including an `id` will update the corresponding price, and including the `_destroy` flag set to true along with the `id` will remove that price.

Note: Custom price points cannot be updated directly. They must be edited through the Subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.componentPricePoints.updateComponentPricePoint({ componentId, pricePointId });
  // TODO: Handle 'response' of type ComponentPricePointResponse
} catch (err) {
  if (
    err instanceof ComponentPricePoints.UpdateComponentPricePointError &&
      err.payload.kind === "errorArrayMapResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorArrayMapResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>componentId</code> | <code>[ComponentIdModel](src/models/unions/component-id-model.ts)</code> | The id or handle of the component. When using the handle, it must be prefixed with `handle:`. Example: `123` for an integer ID, or `handle:example-product-handle` for a string handle. |
| <code>pricePointId</code> | <code>[PricePointIdModel](src/models/unions/price-point-id-model.ts)</code> | The id or handle of the price point. When using the handle, it must be prefixed with `handle:`. Example: `123` for an integer ID, or `handle:example-price_point-handle` for a string handle. |
| <code>body?</code> | <code>[UpdateComponentPricePointRequest](src/models/update-component-price-point-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComponentPricePointResponse](src/models/component-price-point-response.ts)</code>

**OnError**: <code>[ComponentPricePoints.UpdateComponentPricePointError](src/resources/component-price-points.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCurrencyPrices(request: ComponentPricePoints.UpdateCurrencyPricesRequestParams, options?: RequestOptions): ApiPromise&lt;ComponentCurrencyPricesResponse, ComponentPricePoints.UpdateCurrencyPricesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates currency prices for a given currency defined at the site level.

Note: Currency Prices are not able to be updated for custom price points.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.componentPricePoints.updateCurrencyPrices({ pricePointId });
  // TODO: Handle 'response' of type ComponentCurrencyPricesResponse
} catch (err) {
  if (
    err instanceof ComponentPricePoints.UpdateCurrencyPricesError &&
      err.payload.kind === "errorArrayMapResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorArrayMapResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pricePointId</code> | <code>number</code> | The Advanced Billing id of the price point |
| <code>body?</code> | <code>[UpdateCurrencyPricesRequest](src/models/update-currency-prices-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComponentCurrencyPricesResponse](src/models/component-currency-prices-response.ts)</code>

**OnError**: <code>[ComponentPricePoints.UpdateCurrencyPricesError](src/resources/component-price-points.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Customers

> Source: [Customers](src/resources/customers.ts)

<details>
<summary><code>createCustomer(request: Customers.CreateCustomerRequestParams, options?: RequestOptions): ApiPromise&lt;CustomerResponse, Customers.CreateCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new customer; can also be created alongside a new subscription. The only validation restriction is that you may only create one customer for a given reference value.

If provided, the `reference` value must be unique. It represents a unique identifier for the customer from your own app, i.e. the customer’s ID. This allows you to retrieve a given customer via a piece of shared information. Alternatively, you may choose to leave `reference` blank, and store Advanced Billing’s unique ID for the customer, which is in the `id` attribute.

Full documentation on how to locate, create and edit Customers in the Advanced Billing UI can be located [here](https://maxio.zendesk.com/hc/en-us/articles/24252190590093-Customer-Details).

## Required Country Format

Advanced Billing requires that you use the ISO Standard Country codes when formatting country attribute of the customer.

Countries should be formatted as 2 characters. For more information, see the following wikipedia article on [ISO_3166-1.](http://en.wikipedia.org/wiki/ISO_3166-1#Current_codes)

## Required State Format

Advanced Billing requires that you use the ISO Standard State codes when formatting state attribute of the customer.

+ US States (2 characters): [ISO_3166-2](https://en.wikipedia.org/wiki/ISO_3166-2:US)

+ States Outside the US (2-3 characters): To find the correct state codes outside of the US, go to [ISO_3166-1](http://en.wikipedia.org/wiki/ISO_3166-1#Current_codes) and click on the link in the “ISO 3166-2 codes” column next to country you wish to populate.

## Locale

Advanced Billing allows you to attribute a language/region to your customer to deliver invoices in any required language.
For more: [Customer Locale](https://maxio.zendesk.com/hc/en-us/articles/24286672013709-Customer-Locale)

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.createCustomer();
  // TODO: Handle 'response' of type CustomerResponse
} catch (err) {
  if (err instanceof Customers.CreateCustomerError && err.payload.kind === "customerErrorResponse1") {
    // TODO: Handle 'err.payload.body' of type CustomerErrorResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CreateCustomerRequest](src/models/create-customer-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerResponse](src/models/customer-response.ts)</code>

**OnError**: <code>[Customers.CreateCustomerError](src/resources/customers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCustomer(request: Customers.DeleteCustomerRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the customer.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.customers.deleteCustomer({ id });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | The Advanced Billing id of the customer |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomerSubscriptions(request: Customers.ListCustomerSubscriptionsRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionResponse[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all subscriptions that belong to a customer.

 If you have the new [Catalog experience](page:help/announcements/2026-announcements#new-catalog-experience-and-terminology) enabled, subscriptions no longer require an associated product. For subscriptions without an associated product, 'product', 'product_price_point_id', and 'product_price_point_type' are returned as 'null'.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.listCustomerSubscriptions({ customerId });
  // TODO: Handle 'response' of type SubscriptionResponse[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customerId</code> | <code>number</code> | The Chargify id of the customer |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](src/models/subscription-response.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomers(request: Customers.ListCustomersRequest, options?: RequestOptions): ApiPromise&lt;CustomerResponse[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all customers associated with your site, or filters results using the search parameter.

## Find Customer

Use the search feature with the `q` query parameter to retrieve an array of customers that matches the search query.

Common use cases are:

+ Search by an email
+ Search by an Advanced Billing ID
+ Search by an organization
+ Search by a reference value from your application
+ Search by a first or last name

To retrieve a single, exact match by reference, use the [lookup endpoint](https://developers.chargify.com/docs/api-docs/b710d8fbef104-read-customer-by-reference).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.listCustomers();
  // TODO: Handle 'response' of type CustomerResponse[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>direction?</code> | <code>[SortingDirection](src/models/sorting-direction.ts)</code> | Direction to sort customers by time of creation |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 50. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| <code>dateField?</code> | <code>[BasicDateField](src/models/basic-date-field.ts)</code> | The type of filter you would like to apply to your search.<br>Use in query: `date_field=created_at`. |
| <code>startDate?</code> | <code>string</code> | The start date (format YYYY-MM-DD) with which to filter the date_field. Returns subscriptions with a timestamp at or after midnight (12:00:00 AM) in your site’s time zone on the date specified. |
| <code>endDate?</code> | <code>string</code> | The end date (format YYYY-MM-DD) with which to filter the date_field. Returns subscriptions with a timestamp up to and including 11:59:59PM in your site’s time zone on the date specified. |
| <code>startDatetime?</code> | <code>string</code> | The start date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns subscriptions with a timestamp at or after exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of start_date. |
| <code>endDatetime?</code> | <code>string</code> | The end date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns subscriptions with a timestamp at or before exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of end_date. |
| <code>q?</code> | <code>string</code> | A search query by which to filter customers (can be an email, an ID, a reference, organization) |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerResponse](src/models/customer-response.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readCustomer(request: Customers.ReadCustomerRequest, options?: RequestOptions): ApiPromise&lt;CustomerResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the Customer properties by Advanced Billing-generated Customer ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.readCustomer({ id });
  // TODO: Handle 'response' of type CustomerResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | The Advanced Billing id of the customer |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerResponse](src/models/customer-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readCustomerByReference(request: Customers.ReadCustomerByReferenceRequest, options?: RequestOptions): ApiPromise&lt;CustomerResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a customer by their unique reference ID. It will return a single match.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.readCustomerByReference({ reference });
  // TODO: Handle 'response' of type CustomerResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reference</code> | <code>string</code> | Customer reference |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerResponse](src/models/customer-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCustomer(request: Customers.UpdateCustomerRequestParams, options?: RequestOptions): ApiPromise&lt;CustomerResponse, Customers.UpdateCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the customer.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.updateCustomer({ id });
  // TODO: Handle 'response' of type CustomerResponse
} catch (err) {
  if (err instanceof Customers.UpdateCustomerError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | The Advanced Billing id of the customer |
| <code>body?</code> | <code>[UpdateCustomerRequest](src/models/update-customer-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerResponse](src/models/customer-response.ts)</code>

**OnError**: <code>[Customers.UpdateCustomerError](src/resources/customers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CustomFields

> Source: [CustomFields](src/resources/custom-fields.ts)

<details>
<summary><code>createMetadata(request: CustomFields.CreateMetadataRequestParams, options?: RequestOptions): ApiPromise&lt;Metadata[], CustomFields.CreateMetadataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates metadata and metafields for a specific subscription or customer, or updates metadata values of existing metafields for a subscription or customer. Metadata values are limited to 2 KB in size.

If you create metadata on a subscription or customer with a metafield that does not already exist, the metafield is created with the metadata you specify and it is always added as a text field. You can update the input_type for the metafield with the [Update Metafield]($e/Custom%20Fields/updateMetafield) endpoint. 

>Note: Each site is limited to 100 unique metafields per resource. This means you can have 100 metafields for Subscriptions and another 100 for Customers.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.createMetadata({ resourceType, resourceId });
  // TODO: Handle 'response' of type Metadata[]
} catch (err) {
  if (err instanceof CustomFields.CreateMetadataError && err.payload.kind === "singleErrorResponse1") {
    // TODO: Handle 'err.payload.body' of type SingleErrorResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resourceType</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | The resource type to which the metafields belong. |
| <code>resourceId</code> | <code>number</code> | The Advanced Billing id of the customer or the subscription for which the metadata applies |
| <code>body?</code> | <code>[CreateMetadataRequest](src/models/create-metadata-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Metadata](src/models/metadata.ts)[]</code>

**OnError**: <code>[CustomFields.CreateMetadataError](src/resources/custom-fields.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createMetafields(request: CustomFields.CreateMetafieldsRequestParams, options?: RequestOptions): ApiPromise&lt;Metafield[], CustomFields.CreateMetafieldsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates metafields on a Site for either the Subscriptions or Customers resource. 

Metafields and their metadata are created in the Custom Fields configuration page on your Site. Metafields can be populated with metadata when you create them or later with the [Update Metafield]($e/Custom%20Fields/updateMetafield), [Create Metadata]($e/Custom%20Fields/createMetadata), or [Update Metadata]($e/Custom%20Fields/updateMetadata) endpoints. The Create Metadata and Update Metadata endpoints allow you to add metafields and metadata values to a specific subscription or customer.

Each site is limited to 100 unique metafields per resource. This means you can have 100 metafields for Subscriptions and another 100 for Customers.

> Note: After creating a metafield, the resource type cannot be modified.

In the UI and product documentation, metafields and metadata are called Custom Fields. 

- Metafield is the custom field
- Metadata is the data populating the custom field.

See [Custom Fields Reference](https://docs.maxio.com/hc/en-us/articles/24266140850573-Custom-Fields-Reference) and [Custom Fields Tab](https://maxio.zendesk.com/hc/en-us/articles/24251701302925-Subscription-Summary-Custom-Fields-Tab) for information on using Custom Fields in the Advanced Billing UI.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.createMetafields({ resourceType });
  // TODO: Handle 'response' of type Metafield[]
} catch (err) {
  if (err instanceof CustomFields.CreateMetafieldsError && err.payload.kind === "singleErrorResponse1") {
    // TODO: Handle 'err.payload.body' of type SingleErrorResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resourceType</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | The resource type to which the metafields belong. |
| <code>body?</code> | <code>[CreateMetafieldsRequest](src/models/create-metafields-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Metafield](src/models/metafield.ts)[]</code>

**OnError**: <code>[CustomFields.CreateMetafieldsError](src/resources/custom-fields.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteMetadata(request: CustomFields.DeleteMetadataRequest, options?: RequestOptions): ApiPromise&lt;undefined, CustomFields.DeleteMetadataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes one or more metafields (and associated metadata) from the specified subscription or customer.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.customFields.deleteMetadata({ resourceType, resourceId });
} catch (err) {
  if (err instanceof CustomFields.DeleteMetadataError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resourceType</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | The resource type to which the metafields belong. |
| <code>resourceId</code> | <code>number</code> | The Advanced Billing id of the customer or the subscription for which the metadata applies |
| <code>name?</code> | <code>string</code> | Name of field to be removed. |
| <code>names?</code> | <code>string[]</code> | Names of fields to be removed. Use in query: `names[]=field1&names[]=my-field&names[]=another-field`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[CustomFields.DeleteMetadataError](src/resources/custom-fields.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteMetafield(request: CustomFields.DeleteMetafieldRequest, options?: RequestOptions): ApiPromise&lt;undefined, CustomFields.DeleteMetafieldError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a metafield from your Site. Removes the metafield and associated metadata from all Subscriptions or Customers resources on the Site.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.customFields.deleteMetafield({ resourceType });
} catch (err) {
  if (err instanceof CustomFields.DeleteMetafieldError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resourceType</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | The resource type to which the metafields belong. |
| <code>name?</code> | <code>string</code> | The name of the metafield to be deleted |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[CustomFields.DeleteMetafieldError](src/resources/custom-fields.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMetadata(request: CustomFields.ListMetadataRequest, options?: RequestOptions): ApiPromise&lt;PaginatedMetadata, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists metadata and metafields for a specific customer or subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.listMetadata({ resourceType, resourceId });
  // TODO: Handle 'response' of type PaginatedMetadata
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resourceType</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | The resource type to which the metafields belong. |
| <code>resourceId</code> | <code>number</code> | The Advanced Billing id of the customer or the subscription for which the metadata applies |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedMetadata](src/models/paginated-metadata.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMetadataForResourceType(request: CustomFields.ListMetadataForResourceTypeRequest, options?: RequestOptions): ApiPromise&lt;PaginatedMetadata, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists metadata for a specified array of subscriptions or customers.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.listMetadataForResourceType({ resourceType });
  // TODO: Handle 'response' of type PaginatedMetadata
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resourceType</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | The resource type to which the metafields belong. |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| <code>dateField?</code> | <code>[BasicDateField](src/models/basic-date-field.ts)</code> | The type of filter you would like to apply to your search. |
| <code>startDate?</code> | <code>string</code> (date) | The start date (format YYYY-MM-DD) with which to filter the date_field. Returns metadata with a timestamp at or after midnight (12:00:00 AM) in your site’s time zone on the date specified. |
| <code>endDate?</code> | <code>string</code> (date) | The end date (format YYYY-MM-DD) with which to filter the date_field. Returns metadata with a timestamp up to and including 11:59:59PM in your site’s time zone on the date specified. |
| <code>startDatetime?</code> | <code>Date</code> (date-time) | The start date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns metadata with a timestamp at or after exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of start_date. |
| <code>endDatetime?</code> | <code>Date</code> (date-time) | The end date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns metadata with a timestamp at or before exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of end_date. |
| <code>withDeleted?</code> | <code>boolean</code> | Allow to fetch deleted metadata. |
| <code>resourceIds?</code> | <code>number[]</code> | Allow to fetch metadata for multiple records based on provided ids. Use in query: `resource_ids[]=122&resource_ids[]=123&resource_ids[]=124`. |
| <code>direction?</code> | <code>[SortingDirection](src/models/sorting-direction.ts)</code> | Controls the order in which results are returned.<br>Use in query `direction=asc`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedMetadata](src/models/paginated-metadata.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMetafields(request: CustomFields.ListMetafieldsRequest, options?: RequestOptions): ApiPromise&lt;ListMetafieldsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the metafields and their associated details for a Site and resource type. You can filter the request to a specific metafield.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.listMetafields({ resourceType });
  // TODO: Handle 'response' of type ListMetafieldsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resourceType</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | The resource type to which the metafields belong. |
| <code>name?</code> | <code>string</code> | Filter by the name of the metafield. |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| <code>direction?</code> | <code>[SortingDirection](src/models/sorting-direction.ts)</code> | Controls the order in which results are returned.<br>Use in query `direction=asc`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListMetafieldsResponse](src/models/list-metafields-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateMetadata(request: CustomFields.UpdateMetadataRequestParams, options?: RequestOptions): ApiPromise&lt;Metadata[], CustomFields.UpdateMetadataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates metadata and metafields on the Site and the customer or subscription specified, and updates the metadata value on a subscription or customer.

If you update metadata on a subscription or customer with a metafield that does not already exist, the metafield is created with the metadata you specify and it is always added as a text field to the Site and to the subscription or customer you specify. You can update the input_type for the metafield with the Update Metafield endpoint. 

Each site is limited to 100 unique metafields per resource. This means you can have 100 metafields for the Subscription resource and another 100 for the Customer resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.updateMetadata({ resourceType, resourceId });
  // TODO: Handle 'response' of type Metadata[]
} catch (err) {
  if (err instanceof CustomFields.UpdateMetadataError && err.payload.kind === "singleErrorResponse1") {
    // TODO: Handle 'err.payload.body' of type SingleErrorResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resourceType</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | The resource type to which the metafields belong. |
| <code>resourceId</code> | <code>number</code> | The Advanced Billing id of the customer or the subscription for which the metadata applies |
| <code>body?</code> | <code>[UpdateMetadataRequest](src/models/update-metadata-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Metadata](src/models/metadata.ts)[]</code>

**OnError**: <code>[CustomFields.UpdateMetadataError](src/resources/custom-fields.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateMetafield(request: CustomFields.UpdateMetafieldRequest, options?: RequestOptions): ApiPromise&lt;Metafield[], CustomFields.UpdateMetafieldError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates metafields on your Site for a resource type.  Depending on the request structure, you can update or add metafields and metadata to the Subscriptions or Customers resource.

With this endpoint, you can: 

- Add metafields. If the metafield specified in current_name does not exist, a new metafield is added. 
  >Note: Each site is limited to 100 unique metafields per resource. This means you can have 100 metafields for Subscriptions and another 100 for Customers.

- Change the name of a metafield. 
  >Note: To keep the metafield name the same and only update the metadata for the metafield, you must use the current metafield name in both the `current_name` and `name` parameters.

- Change the input type for the metafield. For example, you can change a metafield input type from text to a dropdown. If you change the input type from text to a dropdown or radio, you must update the specific subscriptions or customers where the metafield was used to reflect the updated metafield and metadata. 

- Add metadata values to the existing metadata for a dropdown or radio metafield. 
  >Note: Updates to metadata overwrite. To add one or more values, you must specify all metadata values including the new value you want to add.

- Add new metadata to a dropdown or radio for a metafield that was created without metadata.

- Remove metadata for a dropdown or radio for a metafield.
  >Note: Updates to metadata overwrite existing values. To remove one or more values, specify all metadata values except those you want to remove.

- Add or update scope settings for a metafield.
  >Note: Scope changes overwrite existing settings. You must specify the complete scope, including the changes you want to make.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.updateMetafield({ resourceType });
  // TODO: Handle 'response' of type Metafield[]
} catch (err) {
  if (err instanceof CustomFields.UpdateMetafieldError && err.payload.kind === "singleErrorResponse1") {
    // TODO: Handle 'err.payload.body' of type SingleErrorResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resourceType</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | The resource type to which the metafields belong. |
| <code>body?</code> | <code>[UpdateMetafieldsRequest](src/models/update-metafields-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Metafield](src/models/metafield.ts)[]</code>

**OnError**: <code>[CustomFields.UpdateMetafieldError](src/resources/custom-fields.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](src/resources/events.ts)

<details>
<summary><code>listEvents(request: Events.ListEventsRequest, options?: RequestOptions): ApiPromise&lt;EventResponse[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists events for a site.

## Events Intro

Advanced Billing Events include various activity that happens around a Site. This information is **especially** useful to track down issues that arise when subscriptions are not created due to errors.

Within the Advanced Billing UI, "Events" are referred to as "Site Activity".  See the [Site Activity](https://maxio.zendesk.com/hc/en-us/articles/24250671733517-Site-Activity) article in the product documentation for details on how to record view Events / Site Activty in the Advanced Billing UI.

If you’re using the [enhanced Catalog experience](page:help/announcements/2026-announcements#new-catalog-experience-and-terminology), you’ll see updated naming in webhook events and messages.

Event name changes:

- subscription_product_change → subscription_plan_change
- component_allocation_change → allocation_change
- component_billing_date_change → product_billing_date_change

Message updates:

- “Plan changed on Subscription from previous plan to new plan”
- “Successful payment for allocation changes to Product on Subscription”
- “Failed payment for allocation changes to Product on Subscription”

## List Events for a Site

This method will retrieve a list of events for a site. Use query string filters to narrow down results. You may use the `key` filter as part of your query string to narrow down results.

### Legacy Filters

The following keys are no longer supported.

+ `payment_failure_recreated`
+ `payment_success_recreated`
+ `renewal_failure_recreated`
+ `renewal_success_recreated`
+ `zferral_revenue_post_failure` - (Specific to the deprecated Zferral integration)
+ `zferral_revenue_post_success` - (Specific to the deprecated Zferral integration)

## Event Key
The event type is identified by the key property. You can check supported keys [here]($m/Event%20Key).

## Event Specific Data

Different event types may include additional data in `event_specific_data` property.
While some events share the same schema for `event_specific_data`, others may not include it at all.
For precise mappings from key to event_specific_data, refer to [Event]($m/Event).

### Example
Here’s an example event for the `subscription_product_change` event:

```
{
    "event": {
        "id": 351,
        "key": "subscription_product_change",
        "message": "Product changed on Mark Alan's subscription from 'Basic' to 'Pro'",
        "subscription_id": 205,
        "event_specific_data": {
            "new_product_id": 3,
            "previous_product_id": 2
        },
        "created_at": "2012-01-30T10:43:31-05:00"
    }
}
```

Here’s an example event for the `subscription_state_change` event:

```
 {
     "event": {
         "id": 353,
         "key": "subscription_state_change",
         "message": "State changed on Mark Alan's subscription to Pro from trialing to active",
         "subscription_id": 205,
         "event_specific_data": {
             "new_subscription_state": "active",
             "previous_subscription_state": "trialing"
         },
         "created_at": "2012-01-30T10:43:33-05:00"
     }
 }
```

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.events.listEvents();
  // TODO: Handle 'response' of type EventResponse[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| <code>sinceId?</code> | <code>number</code> | Returns events with an id greater than or equal to the one specified. |
| <code>maxId?</code> | <code>number</code> | Returns events with an id less than or equal to the one specified. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the returned events. |
| <code>filter?</code> | <code>[EventKey](src/models/event-key.ts)[]</code> | You can pass multiple event keys after comma.<br>Use in query `filter=signup_success,payment_success`. |
| <code>dateField?</code> | <code>[ListEventsDateField](src/models/list-events-date-field.ts)</code> | The type of filter you would like to apply to your search. |
| <code>startDate?</code> | <code>string</code> | The start date (format YYYY-MM-DD) with which to filter the date_field. Returns components with a timestamp at or after midnight (12:00:00 AM) in your site’s time zone on the date specified. |
| <code>endDate?</code> | <code>string</code> | The end date (format YYYY-MM-DD) with which to filter the date_field. Returns components with a timestamp up to and including 11:59:59PM in your site’s time zone on the date specified. |
| <code>startDatetime?</code> | <code>string</code> | The start date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns components with a timestamp at or after exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of start_date. |
| <code>endDatetime?</code> | <code>string</code> | The end date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns components with a timestamp at or before exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of end_date. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventResponse](src/models/event-response.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSubscriptionEvents(request: Events.ListSubscriptionEventsRequest, options?: RequestOptions): ApiPromise&lt;EventResponse[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists events for a subscription.

## Event Key
The event type is identified by the key property. You can check supported keys [here]($m/Event%20Key).

If you’re using the [enhanced Catalog experience](page:help/announcements/2026-announcements#new-catalog-experience-and-terminology), you’ll see updated naming in webhook events and messages.

Event name changes:

- subscription_product_change → subscription_plan_change
- component_allocation_change → allocation_change
- component_billing_date_change → product_billing_date_change

Message updates:

- “Successful payment for allocation changes to Product on Subscription”
- “Failed payment for allocation changes to Product on Subscription”
- “Plan changed on Subscription from previous plan to new plan”

## Event Specific Data

Different event types may include additional data in `event_specific_data` property.
While some events share the same schema for `event_specific_data`, others may not include it at all.
For precise mappings from key to event_specific_data, refer to [Event]($m/Event).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.events.listSubscriptionEvents({ subscriptionId });
  // TODO: Handle 'response' of type EventResponse[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| <code>sinceId?</code> | <code>number</code> | Returns events with an id greater than or equal to the one specified. |
| <code>maxId?</code> | <code>number</code> | Returns events with an id less than or equal to the one specified. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the returned events. |
| <code>filter?</code> | <code>[EventKey](src/models/event-key.ts)[]</code> | You can pass multiple event keys after comma.<br>Use in query `filter=signup_success,payment_success`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventResponse](src/models/event-response.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readEventsCount(request: Events.ReadEventsCountRequest, options?: RequestOptions): ApiPromise&lt;CountResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the total count of events for a given site.

If you’re using the [enhanced Catalog experience](page:help/announcements/2026-announcements#new-catalog-experience-and-terminology), you’ll see updated naming in webhook events and messages.

Event name changes:

- subscription_product_change → subscription_plan_change
- component_allocation_change → allocation_change
- component_billing_date_change → product_billing_date_change

Message updates:

- “Successful payment for allocation changes to Product on Subscription”
- “Failed payment for allocation changes to Product on Subscription”
- “Plan changed on Subscription from previous plan to new plan”

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.events.readEventsCount();
  // TODO: Handle 'response' of type CountResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| <code>sinceId?</code> | <code>number</code> | Returns events with an id greater than or equal to the one specified. |
| <code>maxId?</code> | <code>number</code> | Returns events with an id less than or equal to the one specified. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the returned events. |
| <code>filter?</code> | <code>[EventKey](src/models/event-key.ts)[]</code> | You can pass multiple event keys after comma.<br>Use in query `filter=signup_success,payment_success`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CountResponse](src/models/count-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## EventsBasedBillingSegments

> Source: [EventsBasedBillingSegments](src/resources/events-based-billing-segments.ts)

<details>
<summary><code>bulkCreateSegments(request: EventsBasedBillingSegments.BulkCreateSegmentsRequest, options?: RequestOptions): ApiPromise&lt;ListSegmentsResponse, EventsBasedBillingSegments.BulkCreateSegmentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates multiple segments in one request. The array of segments can contain up to `2000` records.

If any of the records contain an error the whole request would fail and none of the requested segments get created. The error response contains a message for only the one segment that failed validation, with the corresponding index in the array.

You may specify component and/or price point by using either the numeric ID or the `handle:gold` syntax.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventsBasedBillingSegments.bulkCreateSegments({ componentId, pricePointId });
  // TODO: Handle 'response' of type ListSegmentsResponse
} catch (err) {
  if (err instanceof EventsBasedBillingSegments.BulkCreateSegmentsError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>componentId</code> | <code>string</code> | ID or Handle for the Component |
| <code>pricePointId</code> | <code>string</code> | ID or Handle for the Price Point belonging to the Component |
| <code>body?</code> | <code>[BulkCreateSegments](src/models/bulk-create-segments.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListSegmentsResponse](src/models/list-segments-response.ts)</code>

**OnError**: <code>[EventsBasedBillingSegments.BulkCreateSegmentsError](src/resources/events-based-billing-segments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkUpdateSegments(request: EventsBasedBillingSegments.BulkUpdateSegmentsRequest, options?: RequestOptions): ApiPromise&lt;ListSegmentsResponse, EventsBasedBillingSegments.BulkUpdateSegmentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates multiple segments in one request. The array of segments can contain up to `1000` records.

If any of the records contain an error the whole request would fail and none of the requested segments get updated. The error response contains a message for only the one segment that failed validation, with the corresponding index in the array.

You may specify component and/or price point by using either the numeric ID or the `handle:gold` syntax.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventsBasedBillingSegments.bulkUpdateSegments({ componentId, pricePointId });
  // TODO: Handle 'response' of type ListSegmentsResponse
} catch (err) {
  if (err instanceof EventsBasedBillingSegments.BulkUpdateSegmentsError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>componentId</code> | <code>string</code> | ID or Handle for the Component |
| <code>pricePointId</code> | <code>string</code> | ID or Handle for the Price Point belonging to the Component |
| <code>body?</code> | <code>[BulkUpdateSegments](src/models/bulk-update-segments.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListSegmentsResponse](src/models/list-segments-response.ts)</code>

**OnError**: <code>[EventsBasedBillingSegments.BulkUpdateSegmentsError](src/resources/events-based-billing-segments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createSegment(request: EventsBasedBillingSegments.CreateSegmentRequestParams, options?: RequestOptions): ApiPromise&lt;SegmentResponse, EventsBasedBillingSegments.CreateSegmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new segment for a component with a segmented metric. It allows you to specify properties to bill upon and prices for each Segment. You can only pass as many "property_values" as the related Metric has segmenting properties defined.

You may specify component and/or price point by using either the numeric ID or the `handle:gold` syntax.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventsBasedBillingSegments.createSegment({ componentId, pricePointId });
  // TODO: Handle 'response' of type SegmentResponse
} catch (err) {
  if (err instanceof EventsBasedBillingSegments.CreateSegmentError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>componentId</code> | <code>string</code> | ID or Handle for the Component |
| <code>pricePointId</code> | <code>string</code> | ID or Handle for the Price Point belonging to the Component |
| <code>body?</code> | <code>[CreateSegmentRequest](src/models/create-segment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SegmentResponse](src/models/segment-response.ts)</code>

**OnError**: <code>[EventsBasedBillingSegments.CreateSegmentError](src/resources/events-based-billing-segments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSegment(request: EventsBasedBillingSegments.DeleteSegmentRequest, options?: RequestOptions): ApiPromise&lt;undefined, EventsBasedBillingSegments.DeleteSegmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a segment with the specified ID.

You may specify component and/or price point by using either the numeric ID or the `handle:gold` syntax.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.eventsBasedBillingSegments.deleteSegment({ componentId, pricePointId, id });
} catch (err) {
  if (err instanceof EventsBasedBillingSegments.DeleteSegmentError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>componentId</code> | <code>string</code> | ID or Handle of the Component |
| <code>pricePointId</code> | <code>string</code> | ID or Handle of the Price Point belonging to the Component |
| <code>id</code> | <code>number</code> | The ID of the Segment |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[EventsBasedBillingSegments.DeleteSegmentError](src/resources/events-based-billing-segments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSegmentsForPricePoint(request: EventsBasedBillingSegments.ListSegmentsForPricePointRequest, options?: RequestOptions): ApiPromise&lt;ListSegmentsResponse, EventsBasedBillingSegments.ListSegmentsForPricePointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists segments created for a given price point, in order of creation.

You can pass `page` and `per_page` parameters in order to access all of the segments. By default it will return `30` records. You can set `per_page` to `200` at most.

You may specify component and/or price point by using either the numeric ID or the `handle:gold` syntax.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventsBasedBillingSegments.listSegmentsForPricePoint({
    componentId,
    pricePointId,
  });
  // TODO: Handle 'response' of type ListSegmentsResponse
} catch (err) {
  if (
    err instanceof EventsBasedBillingSegments.ListSegmentsForPricePointError &&
      err.payload.kind === "error404"
  ) {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>componentId</code> | <code>string</code> | ID or Handle for the Component |
| <code>pricePointId</code> | <code>string</code> | ID or Handle for the Price Point belonging to the Component |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 30. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| <code>filter?</code> | <code>[ListSegmentsFilter](src/models/list-segments-filter.ts)</code> | Filter to use for List Segments for a Price Point operation |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListSegmentsResponse](src/models/list-segments-response.ts)</code>

**OnError**: <code>[EventsBasedBillingSegments.ListSegmentsForPricePointError](src/resources/events-based-billing-segments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSegment(request: EventsBasedBillingSegments.UpdateSegmentRequestParams, options?: RequestOptions): ApiPromise&lt;SegmentResponse, EventsBasedBillingSegments.UpdateSegmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a single segment for a component with a segmented metric. It allows you to update the pricing for the segment.

You may specify component and/or price point by using either the numeric ID or the `handle:gold` syntax.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventsBasedBillingSegments.updateSegment({ componentId, pricePointId, id });
  // TODO: Handle 'response' of type SegmentResponse
} catch (err) {
  if (err instanceof EventsBasedBillingSegments.UpdateSegmentError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>componentId</code> | <code>string</code> | ID or Handle of the Component |
| <code>pricePointId</code> | <code>string</code> | ID or Handle of the Price Point belonging to the Component |
| <code>id</code> | <code>number</code> | The ID of the Segment |
| <code>body?</code> | <code>[UpdateSegmentRequest](src/models/update-segment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SegmentResponse](src/models/segment-response.ts)</code>

**OnError**: <code>[EventsBasedBillingSegments.UpdateSegmentError](src/resources/events-based-billing-segments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Insights

> Source: [Insights](src/resources/insights.ts)

<details>
<summary><code>listMrrMovements(request: Insights.ListMrrMovementsRequest, options?: RequestOptions): ApiPromise&lt;ListMrrResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists your site's MRR movements.

## Understanding MRR movements

This endpoint will aid in accessing your site's [MRR Report](https://maxio.zendesk.com/hc/en-us/articles/24285894587021-MRR-Analytics) data.

Whenever a subscription event occurs that causes your site's MRR to change (such as a signup or upgrade), we record an MRR movement. These records are accessible via the MRR Movements endpoint.

Each MRR Movement belongs to a subscription and contains a timestamp, category, and an amount. `line_items` represent the subscription's product configuration at the time of the movement.

### Plan & Usage Breakouts

In the MRR Report UI, we support a setting to [include or exclude](https://maxio.zendesk.com/hc/en-us/articles/24285894587021-MRR-Analytics#displaying-component-based-metered-usage-in-mrr) usage revenue. In the MRR APIs, responses include `plan` and `usage` breakouts.

Plan includes revenue from:
* Products
* Quantity-Based Components
* On/Off Components

Usage includes revenue from:
* Metered Components
* Prepaid Usage Components

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.listMrrMovements();
  // TODO: Handle 'response' of type ListMrrResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId?</code> | <code>number</code> | (Optional) Filter results by subscription. |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 10. The maximum allowed values is 50; any per_page value over 50 will be changed to 50.<br>Use in query `per_page=20`. |
| <code>direction?</code> | <code>[SortingDirection](src/models/sorting-direction.ts)</code> | Controls the order in which results are returned.<br>Use in query `direction=asc`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListMrrResponse](src/models/list-mrr-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMrrPerSubscription(request: Insights.ListMrrPerSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionMrrResponse, Insights.ListMrrPerSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists your site's current MRR, including plan and usage breakouts split per subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.listMrrPerSubscription();
  // TODO: Handle 'response' of type SubscriptionMrrResponse
} catch (err) {
  if (
    err instanceof Insights.ListMrrPerSubscriptionError &&
      err.payload.kind === "subscriptionsMrrErrorResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type SubscriptionsMrrErrorResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter?</code> | <code>[ListMrrFilter](src/models/list-mrr-filter.ts)</code> | Filter to use for List MRR per subscription operation |
| <code>atTime?</code> | <code>string</code> | Submit a timestamp in ISO8601 format to request MRR for a historic time. Use in query: `at_time=2022-01-10T10:00:00-05:00`. |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | Controls the order in which results are returned. Records are ordered by subscription_id in ascending order by default. Use in query `direction=desc`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionMrrResponse](src/models/subscription-mrr-response.ts)</code>

**OnError**: <code>[Insights.ListMrrPerSubscriptionError](src/resources/insights.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readMrr(request: Insights.ReadMrrRequest, options?: RequestOptions): ApiPromise&lt;MrrResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns your site's current MRR, including plan and usage breakouts.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.readMrr();
  // TODO: Handle 'response' of type MrrResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>atTime?</code> | <code>Date</code> (date-time) | submit a timestamp in ISO8601 format to request MRR for a historic time. |
| <code>subscriptionId?</code> | <code>number</code> | submit the id of a subscription in order to limit results. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MrrResponse](src/models/mrr-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readSiteStats(options?: RequestOptions): ApiPromise&lt;SiteSummary, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns basic site-level stats. This API call only answers with JSON responses. An XML version is not provided.

## Stats Documentation

There currently is not a complimentary matching set of documentation that compliments this endpoint. However, each Site's dashboard will reflect the summary of information provided in the Stats response.

```
https://subdomain.chargify.com/dashboard
```

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.readSiteStats();
  // TODO: Handle 'response' of type SiteSummary
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SiteSummary](src/models/site-summary.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Invoices

> Source: [Invoices](src/resources/invoices.ts)

<details>
<summary><code>createInvoice(request: Invoices.CreateInvoiceRequestParams, options?: RequestOptions): ApiPromise&lt;InvoiceResponse, Invoices.CreateInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an ad hoc invoice.

### Basic Behavior

You can create a basic invoice by sending an array of line items to this endpoint. Each line item, at a minimum, must include a title, a quantity and a unit price. Example:

```json
{
  "invoice": {
    "line_items": [
      {
        "title": "A Product",
        "quantity": 12,
        "unit_price": "150.00"
      }
    ]
  }
}
```

### Catalog items
Instead of creating custom products like in above example, You can pass existing items like products, components.

```json
{
  "invoice": {
    "line_items": [
      {
        "product_id": "handle:gold-product",
        "quantity": 2,
      }
    ]
  }
}
```


The price for each line item will be calculated as well as a total due amount for the invoice. Multiple line items can be sent.

### Line item types
When defining a line item, You can choose one of 3 types for a line item:
#### Custom item
As shown in the basic behavior example, You can pass `title` and `unit_price` for custom item.
#### Product id
Product handle (with handle: prefix) or id from the scope of current subscription's site can be provided with `product_id`. By default `unit_price` is taken from product's default price point, but can be overwritten by passing `unit_price` or `product_price_point_id`. If `product_id` is used, following fields cannot be used: `title`, `component_id`.
#### Component id
Component handle (with handle: prefix) or id from the scope of current subscription's site can be provided with `component_id`. If `component_id` is used, following fields cannot be used: `title`, `product_id`. By default `unit_price` is taken from product's default price point, but can be overwritten by passing `unit_price` or `price_point_id`. At this moment price points are supported only for quantity based, on/off and metered components. For prepaid and event based billing components `unit_price` is required.

### Coupons
When creating ad hoc invoice, new discounts can be applied in following way:

```json
{
  "invoice": {
    "line_items": [
      {
        "product_id": "handle:gold-product",
        "quantity": 1
      }
    ],
    "coupons": [
      {
        "code": "COUPONCODE",
        "percentage": 50.0
      }
    ]
  }
}
```
If You want to use existing coupon for discount creation, only `code` and optional `product_family_id` is needed

```json
...
 "coupons": [
      {
        "code": "FREESETUP",
        "product_family_id": 1
      }
  ]
...
```

#### Using Coupon Subcodes
You can also use coupon subcodes to apply existing coupons with specific subcodes:

```json
...
 "coupons": [
      {
        "subcode": "SUB1",
        "product_family_id": 1
      }
  ]
...
```
**Important:** You cannot specify both `code` and `subcode` for the same coupon. Use either:
- `code` to apply a main coupon
- `subcode` to apply a specific coupon subcode

The API response will include both the main coupon code and the subcode used:

```json
...
 "coupons": [
      {
        "code": "MAIN123",
        "subcode": "SUB1",
        "product_family_id": 1,
        "percentage": 10,
        "description": "Special discount"
      }
  ]
...
```

### Coupon options
#### Code
Coupon `code` will be displayed on invoice discount section.
Coupon code can only contain uppercase letters, numbers, and allowed special characters.
Lowercase letters will be converted to uppercase. It can be used to select an existing coupon from the catalog, or as an ad hoc coupon when passed with `percentage` or `amount`.
#### Subcode
Coupon `subcode` allows you to apply existing coupons using their subcodes. When a subcode is used, the API response will include both the main coupon code and the specific subcode that was applied. Subcodes are case-insensitive and will be converted to uppercase automatically.
#### Percentage
Coupon `percentage` can take values from 0 to 100 and up to 4 decimal places. It cannot be used with `amount`. Only for ad hoc coupons, will be ignored if `code` is used to select an existing coupon from the catalog.
#### Amount
Coupon `amount` takes number value. It cannot be used with `percentage`. Used only when not matching existing coupon by `code`.
#### Description
Optional `description` will be displayed with coupon `code`. Used only when not matching existing coupon by `code`.
#### Product Family id
Optional `product_family_id` handle (with handle: prefix) or id is used to match existing coupon within site, when codes are not unique.
#### Compounding Strategy
Optional `compounding_strategy` for percentage coupons, can take values `compound` or `full-price`.

For amount coupons, discounts will be always calculated against the original item price, before other discounts are applied.

`compound` strategy:
Percentage-based discounts will be calculated against the remaining price, after prior discounts have been calculated. It is set by default.

`full-price` strategy:
Percentage-based discounts will always be calculated against the original item price, before other discounts are applied.

### Line Item Options

#### Period Date Range

A custom period date range can be defined for each line item with the `period_range_start` and `period_range_end` parameters. Dates must be sent in the `YYYY-MM-DD` format.
`period_range_end` must be greater or equal `period_range_start`.

#### Taxes

The `taxable` parameter can be sent as `true` if taxes should be calculated for a specific line item. For this to work, the site should be configured to use and calculate taxes. Further, if the site uses Avalara for tax calculations, a `tax_code` parameter should also be sent. For existing catalog items: products/components taxes cannot be overwritten.

#### Price Point
Price point handle (with handle: prefix) or id from the scope of current subscription's site can be provided with `price_point_id` for components with `component_id` or `product_price_point_id` for products with `product_id` parameter. If price point is passed `unit_price` cannot be used. It can be used only with catalog items products and components.

#### Description
Optional `description` parameter, it will overwrite default generated description for line item.

### Invoice Options

#### Issue Date

By default, invoices will be created with a issue date set to today in your site's time zone. The `issue_date` parameter can be sent to alter the default. Only today or dates in the past are accepted. This date is interpreted and validated in your site's time zone. The format for `issue_date` is `YYYY-MM-DD`.

#### Net Terms

By default, invoices will be created with a due date matching the date of invoice creation. If a different due date is desired, the `net_terms` parameter can be sent indicating the number of days in advance the due date should be.

#### Addresses

The seller, shipping and billing addresses can be sent to override the site's defaults. Each address requires to send a `first_name` at a minimum in order to work. See below for the details on which parameters can be sent for each address object.

#### Memo and Payment Instructions

A custom memo can be sent with the `memo` parameter to override the site's default. Likewise, custom payment instructions can be sent with the `payment_instructions` parameter.

#### Status

By default, invoices will be created with open status. Possible alternative is `draft`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.createInvoice({ subscriptionId });
  // TODO: Handle 'response' of type InvoiceResponse
} catch (err) {
  if (err instanceof Invoices.CreateInvoiceError && err.payload.kind === "errorArrayMapResponse1") {
    // TODO: Handle 'err.payload.body' of type ErrorArrayMapResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>body?</code> | <code>[CreateInvoiceRequest](src/models/create-invoice-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InvoiceResponse](src/models/invoice-response.ts)</code>

**OnError**: <code>[Invoices.CreateInvoiceError](src/resources/invoices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteInvoice(request: Invoices.DeleteInvoiceRequest, options?: RequestOptions): ApiPromise&lt;undefined, Invoices.DeleteInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an ad hoc invoice while it is in the `draft` state.

**Important: only invoices with the `adhoc` role and `draft` status can be deleted.** Any other invoice — issued, or with a different role (e.g. `renewal`, `signup`) — cannot be deleted through this endpoint and the request returns a `422` error. Issued invoices should be voided instead. If the invoice does not belong to the provided subscription, a `404` error is returned.

A successful deletion returns a `204 No Content` response and the invoice is permanently removed.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.invoices.deleteInvoice({ subscriptionId, uid });
} catch (err) {
  if (err instanceof Invoices.DeleteInvoiceError && err.payload.kind === "errorListResponse1") {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>uid</code> | <code>string</code> | The unique identifier for the invoice, this does not refer to the public facing invoice number. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Invoices.DeleteInvoiceError](src/resources/invoices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>issueInvoice(request: Invoices.IssueInvoiceRequestParams, options?: RequestOptions): ApiPromise&lt;Invoice, Invoices.IssueInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Issues an invoice that is in "pending" or "draft" status. For example, you can issue an invoice that was created when allocating new quantity on a component and using "accrue charges" option.

You cannot issue a pending child invoice that was created for a member subscription in a group.

For Remittance subscriptions, the invoice will go into "open" status and payment won't be attempted. The value for `on_failed_payment` would be rejected if sent. Any prepayments or service credits that exist on the subscription will be automatically applied. Additionally, if the setting is enabled, an email will be sent for the issued invoice.

For Automatic subscriptions, prepayments and service credits will apply to the invoice before payment is attempted. On successful payment, the invoice will go into "paid" status and email will be sent to the customer (if setting applies). When payment fails, the next event depends on the `on_failed_payment` value:
- `leave_open_invoice` - prepayments and credits applied to invoice; invoice status set to "open"; email sent to the customer for the issued invoice (if setting applies); payment failure recorded in the invoice history. This is the default option.
- `rollback_to_pending` - prepayments and credits not applied; invoice remains in "pending" status; no email sent to the customer; payment failure recorded in the invoice history.
- `initiate_dunning` - prepayments and credits applied to the invoice; invoice status set to "open"; email sent to the customer for the issued invoice (if setting applies); payment failure recorded in the invoice history; subscription will  most likely go into "past_due" or "canceled" state (depending upon net terms and dunning settings).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.issueInvoice({ uid });
  // TODO: Handle 'response' of type Invoice
} catch (err) {
  if (err instanceof Invoices.IssueInvoiceError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>string</code> | The unique identifier for the invoice, this does not refer to the public facing invoice number. |
| <code>body?</code> | <code>[IssueInvoiceRequest](src/models/issue-invoice-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Invoice](src/models/invoice.ts)</code>

**OnError**: <code>[Invoices.IssueInvoiceError](src/resources/invoices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listConsolidatedInvoiceSegments(request: Invoices.ListConsolidatedInvoiceSegmentsRequest, options?: RequestOptions): ApiPromise&lt;ConsolidatedInvoice, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists segments for a consolidated invoice. Invoice segments returned on the index will only include totals, not detailed breakdowns for `line_items`, `discounts`, `taxes`, `credits`, `payments`, or `custom_fields`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.listConsolidatedInvoiceSegments({ invoiceUid });
  // TODO: Handle 'response' of type ConsolidatedInvoice
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>invoiceUid</code> | <code>string</code> | The unique identifier of the consolidated invoice |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | Sort direction of the returned segments. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConsolidatedInvoice](src/models/consolidated-invoice.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCreditNotes(request: Invoices.ListCreditNotesRequest, options?: RequestOptions): ApiPromise&lt;ListCreditNotesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists credit notes for a site. Credit Notes are like inverse invoices. They reduce the amount a customer owes.

By default, the credit notes returned by this endpoint will exclude the arrays of `line_items`, `discounts`, `taxes`, `applications`, or `refunds`. To include these arrays, pass the specific field as a key in the query with a value set to `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.listCreditNotes();
  // TODO: Handle 'response' of type ListCreditNotesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId?</code> | <code>number</code> | The subscription's Advanced Billing id |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| <code>lineItems?</code> | <code>boolean</code> | Include line items data. |
| <code>discounts?</code> | <code>boolean</code> | Include discounts data. |
| <code>taxes?</code> | <code>boolean</code> | Include taxes data. |
| <code>refunds?</code> | <code>boolean</code> | Include refunds data. |
| <code>applications?</code> | <code>boolean</code> | Include applications data. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListCreditNotesResponse](src/models/list-credit-notes-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listInvoiceEvents(request: Invoices.ListInvoiceEventsRequest, options?: RequestOptions): ApiPromise&lt;ListInvoiceEventsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists invoice events for a site. Each event contains event "data" (such as an applied payment) as well as a snapshot of the `invoice` at the time of event completion.

Exposed event types are:

+ issue_invoice
+ apply_credit_note
+ apply_payment
+ refund_invoice
+ void_invoice
+ void_remainder
+ backport_invoice
+ change_invoice_status
+ change_invoice_collection_method
+ remove_payment
+ failed_payment
+ apply_debit_note
+ create_debit_note
+ change_chargeback_status

Invoice events are returned in ascending order.

If both a `since_date` and `since_id` are provided in request parameters, the `since_date` will be used.

Note - invoice events that occurred prior to 09/05/2018 __will not__ contain an `invoice` snapshot.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.listInvoiceEvents();
  // TODO: Handle 'response' of type ListInvoiceEventsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sinceDate?</code> | <code>string</code> | The timestamp in a format `YYYY-MM-DD T HH:MM:SS Z`, or `YYYY-MM-DD`(in this case, it returns data from the beginning of the day). of the event from which you want to start the search. All the events before the `since_date` timestamp are not returned in the response. |
| <code>sinceId?</code> | <code>number</code> | The ID of the event from which you want to start the search(ID is not included. e.g. if ID is set to 2, then all events with ID 3 and more will be shown) This parameter is not used if since_date is defined. |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 100. The maximum allowed values is 200; any per_page value over 200 will be changed to 200. |
| <code>invoiceUid?</code> | <code>string</code> | Providing an invoice_uid allows for scoping of the invoice events to a single invoice or credit note. |
| <code>withChangeInvoiceStatus?</code> | <code>string</code> | Use this parameter if you want to fetch also invoice events with change_invoice_status type. |
| <code>eventTypes?</code> | <code>[InvoiceEventType](src/models/invoice-event-type.ts)[]</code> | Filter results by event_type. Supply a comma separated list of event types (listed above). Use in query: `event_types=void_invoice,void_remainder`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListInvoiceEventsResponse](src/models/list-invoice-events-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listInvoices(request: Invoices.ListInvoicesRequest, options?: RequestOptions): ApiPromise&lt;ListInvoicesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists invoices for a site. By default, invoices returned on the index will only include totals, not detailed breakdowns for `line_items`, `discounts`, `taxes`, `credits`, `payments`, `custom_fields`, or `refunds`. To include breakdowns, pass the specific field as a key in the query with a value set to `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.listInvoices();
  // TODO: Handle 'response' of type ListInvoicesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>startDate?</code> | <code>string</code> | The start date (format YYYY-MM-DD) with which to filter the date_field. Returns invoices with a timestamp at or after midnight (12:00:00 AM) in your site’s time zone on the date specified. |
| <code>endDate?</code> | <code>string</code> | The end date (format YYYY-MM-DD) with which to filter the date_field. Returns invoices with a timestamp up to and including 11:59:59PM in your site’s time zone on the date specified. |
| <code>status?</code> | <code>[InvoiceStatus](src/models/invoice-status.ts)</code> | The current status of the invoice.  Allowed Values: draft, open, paid, pending, voided |
| <code>subscriptionId?</code> | <code>number</code> | The subscription's ID. |
| <code>subscriptionGroupUid?</code> | <code>string</code> | The UID of the subscription group you want to fetch consolidated invoices for. This will return a paginated list of consolidated invoices for the specified group. |
| <code>consolidationLevel?</code> | <code>string</code> | The consolidation level of the invoice. Allowed Values: none, parent, child or comma-separated lists of thereof, e.g. none,parent. |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the returned invoices. |
| <code>lineItems?</code> | <code>boolean</code> | Include line items data. |
| <code>discounts?</code> | <code>boolean</code> | Include discounts data. |
| <code>taxes?</code> | <code>boolean</code> | Include taxes data. |
| <code>credits?</code> | <code>boolean</code> | Include credits data. |
| <code>payments?</code> | <code>boolean</code> | Include payments data. |
| <code>customFields?</code> | <code>boolean</code> | Include custom fields data. |
| <code>refunds?</code> | <code>boolean</code> | Include refunds data. |
| <code>dateField?</code> | <code>[InvoiceDateField](src/models/invoice-date-field.ts)</code> | The type of filter you would like to apply to your search. Use in query `date_field=issue_date`. |
| <code>startDatetime?</code> | <code>string</code> | The start date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns invoices with a timestamp at or after exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of start_date. Allowed to be used only along with date_field set to created_at or updated_at. |
| <code>endDatetime?</code> | <code>string</code> | The end date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns invoices with a timestamp at or before exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of end_date. Allowed to be used only along with date_field set to created_at or updated_at. |
| <code>customerIds?</code> | <code>number[]</code> | Allows fetching invoices with matching customer id based on provided values. Use in query `customer_ids=1,2,3`. |
| <code>number?</code> | <code>string[]</code> | Allows fetching invoices with matching invoice number based on provided values. Use in query `number=1234,1235`. |
| <code>productIds?</code> | <code>number[]</code> | Allows fetching invoices with matching line items product ids based on provided values. Use in query `product_ids=23,34`. |
| <code>sort?</code> | <code>[InvoiceSortField](src/models/invoice-sort-field.ts)</code> | Allows specification of the order of the returned list. Use in query `sort=total_amount`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListInvoicesResponse](src/models/list-invoices-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>previewCustomerInformationChanges(request: Invoices.PreviewCustomerInformationChangesRequest, options?: RequestOptions): ApiPromise&lt;CustomerChangesPreviewResponse, Invoices.PreviewCustomerInformationChangesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Previews the effect of customer information changes on an open invoice. Customer information may change after an invoice is issued, which may lead to a mismatch between customer information that is present on an open invoice and actual customer information. This endpoint allows you to preview these differences, if any.

The endpoint doesn't accept a request body. Customer information differences are calculated on the application side.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.previewCustomerInformationChanges({ uid });
  // TODO: Handle 'response' of type CustomerChangesPreviewResponse
} catch (err) {
  if (
    err instanceof Invoices.PreviewCustomerInformationChangesError &&
      err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>string</code> | The unique identifier for the invoice, this does not refer to the public facing invoice number. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerChangesPreviewResponse](src/models/customer-changes-preview-response.ts)</code>

**OnError**: <code>[Invoices.PreviewCustomerInformationChangesError](src/resources/invoices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readCreditNote(request: Invoices.ReadCreditNoteRequest, options?: RequestOptions): ApiPromise&lt;CreditNote, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details for a credit note.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.readCreditNote({ uid });
  // TODO: Handle 'response' of type CreditNote
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>string</code> | The unique identifier of the credit note |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditNote](src/models/credit-note.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readInvoice(request: Invoices.ReadInvoiceRequest, options?: RequestOptions): ApiPromise&lt;Invoice, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details for an invoice.

## PDF Invoice retrieval

Individual PDF Invoices can be retrieved by using the "Accept" header application/pdf or appending .pdf as the format portion of the URL:
```curl -u <api_key>:x -H
Accept:application/pdf -H
https://acme.chargify.com/invoices/inv_8gd8tdhtd3hgr.pdf > output_file.pdf
URL: `https://<subdomain>.chargify.com/invoices/<uid>.<format>`
Method: GET
Required parameters: `uid`
Response: A single Invoice.
```

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.readInvoice({ uid });
  // TODO: Handle 'response' of type Invoice
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>string</code> | The unique identifier for the invoice, this does not refer to the public facing invoice number. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Invoice](src/models/invoice.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>recordPaymentForInvoice(request: Invoices.RecordPaymentForInvoiceRequest, options?: RequestOptions): ApiPromise&lt;Invoice, Invoices.RecordPaymentForInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Applies a payment of a given type against a specific invoice. If you would like to apply a payment across multiple invoices, you can use the Bulk Payment endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.recordPaymentForInvoice({ uid });
  // TODO: Handle 'response' of type Invoice
} catch (err) {
  if (err instanceof Invoices.RecordPaymentForInvoiceError && err.payload.kind === "errorListResponse1") {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>string</code> | The unique identifier for the invoice, this does not refer to the public facing invoice number. |
| <code>body?</code> | <code>[CreateInvoicePaymentRequest](src/models/create-invoice-payment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Invoice](src/models/invoice.ts)</code>

**OnError**: <code>[Invoices.RecordPaymentForInvoiceError](src/resources/invoices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>recordPaymentForMultipleInvoices(request: Invoices.RecordPaymentForMultipleInvoicesRequest, options?: RequestOptions): ApiPromise&lt;MultiInvoicePaymentResponse, Invoices.RecordPaymentForMultipleInvoicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Records an external payment against multiple invoices.

 To apply a payment to multiple invoices, at minimum, specify the `amount` and `applications` (i.e., `invoice_uid` and `amount`) details.

```
{
  "payment": {
    "memo": "to pay the bills",
    "details": "check number 8675309",
    "method": "check",
    "amount": "250.00",
    "applications": [
      {
        "invoice_uid": "inv_8gk5bwkct3gqt",
        "amount": "100.00"
      },
      {
        "invoice_uid": "inv_7bc6bwkct3lyt",
        "amount": "150.00"
      }
    ]
  }
}
```

Note that the invoice payment amounts must be greater than 0. Total amount must be greater or equal to invoices payment amount sum.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.recordPaymentForMultipleInvoices();
  // TODO: Handle 'response' of type MultiInvoicePaymentResponse
} catch (err) {
  if (
    err instanceof Invoices.RecordPaymentForMultipleInvoicesError && err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CreateMultiInvoicePaymentRequest](src/models/create-multi-invoice-payment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MultiInvoicePaymentResponse](src/models/multi-invoice-payment-response.ts)</code>

**OnError**: <code>[Invoices.RecordPaymentForMultipleInvoicesError](src/resources/invoices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>recordPaymentForSubscription(request: Invoices.RecordPaymentForSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;RecordPaymentResponse, Invoices.RecordPaymentForSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Records an external payment made against a subscription that will pay partially or in full one or more invoices.

Payment will be applied starting with the oldest open invoice and then next oldest, and so on until the amount of the payment is fully consumed.

Excess payment will result in the creation of a prepayment on the Invoice Account.

Only ungrouped or primary subscriptions may be paid using the "bulk" payment request.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.recordPaymentForSubscription({ subscriptionId });
  // TODO: Handle 'response' of type RecordPaymentResponse
} catch (err) {
  if (
    err instanceof Invoices.RecordPaymentForSubscriptionError && err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>body?</code> | <code>[RecordPaymentRequest](src/models/record-payment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecordPaymentResponse](src/models/record-payment-response.ts)</code>

**OnError**: <code>[Invoices.RecordPaymentForSubscriptionError](src/resources/invoices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>refundInvoice(request: Invoices.RefundInvoiceRequestParams, options?: RequestOptions): ApiPromise&lt;Invoice, Invoices.RefundInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Refunds an invoice, segment, or consolidated invoice.

## Partial Refund for Consolidated Invoice

A refund less than the total of a consolidated invoice will be split across its segments.

For a $50.00 refund on a $100.00 consolidated invoice with one $60.00 segment and one $40.00 segment, the refunded amount will be applied as 50% of each ($30.00 and $20.00, respectively).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.refundInvoice({ uid });
  // TODO: Handle 'response' of type Invoice
} catch (err) {
  if (err instanceof Invoices.RefundInvoiceError && err.payload.kind === "errorListResponse1") {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>string</code> | The unique identifier for the invoice, this does not refer to the public facing invoice number. |
| <code>body?</code> | <code>[RefundInvoiceRequest](src/models/refund-invoice-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Invoice](src/models/invoice.ts)</code>

**OnError**: <code>[Invoices.RefundInvoiceError](src/resources/invoices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reopenInvoice(request: Invoices.ReopenInvoiceRequest, options?: RequestOptions): ApiPromise&lt;Invoice, Invoices.ReopenInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reopens any invoice with the "canceled" status. Invoices enter "canceled" status if they were open at the time the subscription was canceled (whether through dunning or an intentional cancellation).

Invoices with "canceled" status are no longer considered to be due. Once reopened, they are considered due for payment. Payment may then be captured in one of the following ways:

- Reactivating the subscription, which will capture all open invoices (See note below about automatic reopening of invoices.)
- Recording a payment directly against the invoice

A note about reactivations: any canceled invoices from the most recent active period are automatically opened as a part of the reactivation process. Reactivating via this endpoint prior to reactivation is only necessary when you wish to capture older invoices from previous periods during the reactivation.

### Reopening Consolidated Invoices

When reopening a consolidated invoice, all of its canceled segments will also be reopened.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.reopenInvoice({ uid });
  // TODO: Handle 'response' of type Invoice
} catch (err) {
  if (err instanceof Invoices.ReopenInvoiceError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload.body' of type unknown
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>string</code> | The unique identifier for the invoice, this does not refer to the public facing invoice number. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Invoice](src/models/invoice.ts)</code>

**OnError**: <code>[Invoices.ReopenInvoiceError](src/resources/invoices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sendInvoice(request: Invoices.SendInvoiceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Invoices.SendInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends an invoice to the customer via email. This endpoint supports the delivery of both ad-hoc and automatically generated invoices. Additionally, this endpoint supports email delivery to direct recipients, carbon-copy (cc) recipients, and blind carbon-copy (bcc) recipients.

**File Attachments**: You can attach files to invoice emails using `attachment_urls[]` parameter by providing URLs to the files you want to attach. When using attachments, the request must use `multipart/form-data` content type. Max 10 files, 10MB per file.

If no recipient email addresses are specified in the request, then the subscription's default email configuration will be used. For example, if `recipient_emails` is left blank, then the invoice will be delivered to the subscription's customer email address.

On success, a 204 no-content response will be returned. The response does not indicate that email(s) have been delivered, but instead indicates that emails have been successfully queued for delivery. If _any_ invalid or malformed email address is found in the request body, the entire request will be rejected and a 422 response will be returned.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.invoices.sendInvoice({ uid });
} catch (err) {
  if (err instanceof Invoices.SendInvoiceError && err.payload.kind === "errorListResponse1") {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>string</code> | The unique identifier for the invoice, this does not refer to the public facing invoice number. |
| <code>body?</code> | <code>[SendInvoiceRequest](src/models/send-invoice-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Invoices.SendInvoiceError](src/resources/invoices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCustomerInformation(request: Invoices.UpdateCustomerInformationRequest, options?: RequestOptions): ApiPromise&lt;Invoice, Invoices.UpdateCustomerInformationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates customer information on an open invoice and returns the updated invoice. If you would like to preview changes that will be applied, use the `/invoices/{uid}/customer_information/preview.json` endpoint first.

The endpoint doesn't accept a request body. Customer information differences are calculated on the application side.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.updateCustomerInformation({ uid });
  // TODO: Handle 'response' of type Invoice
} catch (err) {
  if (err instanceof Invoices.UpdateCustomerInformationError && err.payload.kind === "errorListResponse1") {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>string</code> | The unique identifier for the invoice, this does not refer to the public facing invoice number. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Invoice](src/models/invoice.ts)</code>

**OnError**: <code>[Invoices.UpdateCustomerInformationError](src/resources/invoices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateInvoice(request: Invoices.UpdateInvoiceRequestParams, options?: RequestOptions): ApiPromise&lt;InvoiceResponse, Invoices.UpdateInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an ad hoc invoice while it is in the `draft` state.

**Important: only invoices with the `adhoc` role and `draft` status can be updated.** Any other invoice — issued, or with a different role (e.g. `renewal`, `signup`) — cannot be updated through this endpoint and the request returns a `422` error. If the invoice does not belong to the provided subscription, a `404` error is returned.

Only the attributes submitted in the request are changed — omitted attributes keep their current values.

### Line Items

The `line_items` array describes changes to the invoice's line items. Line items not referenced in the array remain unchanged.

#### Adding a line item

A line item without a `uid` is added to the invoice. The same line item types and options as on invoice creation are supported (custom items, `product_id`, `component_id`, price points, period date ranges, taxes).

#### Updating a line item

A line item with the `uid` of an existing line item updates that line item with the submitted attributes. Amounts and taxes are recalculated.

#### Removing a line item

A line item with a `uid` and `"_destroy": true` is removed from the invoice. Other line items remain unchanged.

Referencing a `uid` which does not exist on the invoice returns a `422` error.

### Coupons

When the `coupons` key is present, the submitted coupons replace all discounts currently applied to the invoice. Send an empty array to remove all discounts. Coupon options are the same as on invoice creation.

### Invoice Options

#### Issue Date and Net Terms

The `issue_date` parameter can be sent to change the invoice's issue date. Only today or dates in the past are accepted. The date is interpreted and validated in your site's time zone, using the `YYYY-MM-DD` format. The `net_terms` parameter indicates the number of days after the issue date on which the invoice is due. The due date is recalculated whenever the issue date or net terms change.

#### Addresses

The seller, shipping and billing addresses can be sent to replace the addresses on the invoice. Each address requires to send a `first_name` at a minimum in order to work. Taxes are recalculated after an address change.

#### Memo and Payment Instructions

A custom memo can be sent with the `memo` parameter. Likewise, custom payment instructions can be sent with the `payment_instructions` parameter.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.updateInvoice({ subscriptionId, uid });
  // TODO: Handle 'response' of type InvoiceResponse
} catch (err) {
  if (err instanceof Invoices.UpdateInvoiceError && err.payload.kind === "errorListResponse1") {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>uid</code> | <code>string</code> | The unique identifier for the invoice, this does not refer to the public facing invoice number. |
| <code>body?</code> | <code>[UpdateInvoiceRequest](src/models/update-invoice-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InvoiceResponse](src/models/invoice-response.ts)</code>

**OnError**: <code>[Invoices.UpdateInvoiceError](src/resources/invoices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>voidInvoice(request: Invoices.VoidInvoiceRequestParams, options?: RequestOptions): ApiPromise&lt;Invoice, Invoices.VoidInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Voids any invoice with the "open" or "canceled" status.  It will also allow voiding of an invoice with the "pending" status if it is not a consolidated invoice.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.voidInvoice({ uid });
  // TODO: Handle 'response' of type Invoice
} catch (err) {
  if (err instanceof Invoices.VoidInvoiceError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload.body' of type unknown
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>string</code> | The unique identifier for the invoice, this does not refer to the public facing invoice number. |
| <code>body?</code> | <code>[VoidInvoiceRequest](src/models/void-invoice-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Invoice](src/models/invoice.ts)</code>

**OnError**: <code>[Invoices.VoidInvoiceError](src/resources/invoices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Offers

> Source: [Offers](src/resources/offers.ts)

<details>
<summary><code>archiveOffer(request: Offers.ArchiveOfferRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archives an existing offer. Please provide an `offer_id` in order to archive the correct item.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.offers.archiveOffer({ offerId });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>offerId</code> | <code>number</code> | The Chargify id of the offer |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createOffer(request: Offers.CreateOfferRequestParams, options?: RequestOptions): ApiPromise&lt;OfferResponse, Offers.CreateOfferError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an offer within your Advanced Billing site.

## Documentation

Offers allow you to package complicated combinations of products, components and coupons into a convenient package which can then be subscribed to just like products.

Once an offer is defined it can be used as an alternative to the product when creating subscriptions.

Full documentation on how to use offers in the Advanced Billing UI can be located [here](https://maxio.zendesk.com/hc/en-us/articles/24261295098637-Offers-Overview).

## Using a Product Price Point

You can optionally pass in a `product_price_point_id` that corresponds with the `product_id` and the offer will use that price point. If a `product_price_point_id` is not passed in, the product's default price point will be used.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.offers.createOffer();
  // TODO: Handle 'response' of type OfferResponse
} catch (err) {
  if (err instanceof Offers.CreateOfferError && err.payload.kind === "errorArrayMapResponse1") {
    // TODO: Handle 'err.payload.body' of type ErrorArrayMapResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CreateOfferRequest](src/models/create-offer-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OfferResponse](src/models/offer-response.ts)</code>

**OnError**: <code>[Offers.CreateOfferError](src/resources/offers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listOffers(request: Offers.ListOffersRequest, options?: RequestOptions): ApiPromise&lt;ListOffersResponse, Offers.ListOffersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists offers for a site.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.offers.listOffers();
  // TODO: Handle 'response' of type ListOffersResponse
} catch (err) {
  if (err instanceof Offers.ListOffersError && err.payload.kind === "errorListResponse1") {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| <code>includeArchived?</code> | <code>boolean</code> | Include archived products. Use in query: `include_archived=true`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListOffersResponse](src/models/list-offers-response.ts)</code>

**OnError**: <code>[Offers.ListOffersError](src/resources/offers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readOffer(request: Offers.ReadOfferRequest, options?: RequestOptions): ApiPromise&lt;OfferResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a specific offer's attributes. This is different from listing all offers for a site, as it requires an `offer_id`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.offers.readOffer({ offerId });
  // TODO: Handle 'response' of type OfferResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>offerId</code> | <code>number</code> | The Chargify id of the offer |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OfferResponse](src/models/offer-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unarchiveOffer(request: Offers.UnarchiveOfferRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unarchives a previously archived offer. Please provide an `offer_id` in order to unarchive the correct item.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.offers.unarchiveOffer({ offerId });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>offerId</code> | <code>number</code> | The Chargify id of the offer |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentProfiles

> Source: [PaymentProfiles](src/resources/payment-profiles.ts)

<details>
<summary><code>changeSubscriptionDefaultPaymentProfile(request: PaymentProfiles.ChangeSubscriptionDefaultPaymentProfileRequest, options?: RequestOptions): ApiPromise&lt;PaymentProfileResponse, PaymentProfiles.ChangeSubscriptionDefaultPaymentProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the default payment profile on the subscription to the existing payment profile with the specified ID.

You must elect to change the existing payment profile to a new payment profile ID in order to receive a satisfactory response from this endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentProfiles.changeSubscriptionDefaultPaymentProfile({
    subscriptionId,
    paymentProfileId,
  });
  // TODO: Handle 'response' of type PaymentProfileResponse
} catch (err) {
  if (
    err instanceof PaymentProfiles.ChangeSubscriptionDefaultPaymentProfileError &&
      err.payload.kind === "error404"
  ) {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>paymentProfileId</code> | <code>number</code> | The Chargify id of the payment profile |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentProfileResponse](src/models/payment-profile-response.ts)</code>

**OnError**: <code>[PaymentProfiles.ChangeSubscriptionDefaultPaymentProfileError](src/resources/payment-profiles.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>changeSubscriptionGroupDefaultPaymentProfile(request: PaymentProfiles.ChangeSubscriptionGroupDefaultPaymentProfileRequest, options?: RequestOptions): ApiPromise&lt;PaymentProfileResponse, PaymentProfiles.ChangeSubscriptionGroupDefaultPaymentProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the default payment profile on the subscription group to the existing payment profile with the specified ID.

You must elect to change the existing payment profile to a new payment profile ID in order to receive a satisfactory response from this endpoint.

The new payment profile must belong to the subscription group's customer, otherwise you will receive an error.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentProfiles.changeSubscriptionGroupDefaultPaymentProfile({
    uid,
    paymentProfileId,
  });
  // TODO: Handle 'response' of type PaymentProfileResponse
} catch (err) {
  if (
    err instanceof PaymentProfiles.ChangeSubscriptionGroupDefaultPaymentProfileError &&
      err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>string</code> | The uid of the subscription group |
| <code>paymentProfileId</code> | <code>number</code> | The Chargify id of the payment profile |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentProfileResponse](src/models/payment-profile-response.ts)</code>

**OnError**: <code>[PaymentProfiles.ChangeSubscriptionGroupDefaultPaymentProfileError](src/resources/payment-profiles.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPaymentProfile(request: PaymentProfiles.CreatePaymentProfileRequestParams, options?: RequestOptions): ApiPromise&lt;PaymentProfileResponse, PaymentProfiles.CreatePaymentProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a payment profile for a customer.

When you create a new payment profile for a customer via the API, it does not automatically make the profile current for any of the customer’s subscriptions. To use the payment profile as the default, you must set it explicitly for the subscription or subscription group.

Select an option from the **Request Examples** drop-down on the right side of the portal to see examples of common scenarios for creating payment profiles. 

Do not use real card information for testing. See the Sites articles that cover [testing your site setup](https://docs.maxio.com/hc/en-us/articles/24250712113165-Testing-Overview#testing-overview-0-0) for more details on testing in your sandbox.

Note that collecting and sending raw card details in production requires [PCI compliance](https://docs.maxio.com/hc/en-us/articles/24183956938381-PCI-Compliance#pci-compliance-0-0) on your end. If your business is not PCI compliant, use [Maxio.js (formerly Chargify.js)](https://docs.maxio.com/hc/en-us/articles/38163190843789-Chargify-js-Overview#chargify-js-overview-0-0) to collect credit card or bank account information.

See the following articles to learn more about subscriptions and payments:

+ [Subscriber Payment Details](https://maxio.zendesk.com/hc/en-us/articles/24251599929613-Subscription-Summary-Payment-Details-Tab)
+ [Self Service Pages](https://maxio.zendesk.com/hc/en-us/articles/24261425318541-Self-Service-Pages) (Allows credit card updates by Subscriber)
+ [Public Signup Pages payment settings](https://maxio.zendesk.com/hc/en-us/articles/24261368332557-Individual-Page-Settings)
+ [Taxes](https://developers.chargify.com/docs/developer-docs/d2e9e34db740e-signups#taxes)
+ [Maxio.js (formerly Chargify.js)](https://docs.maxio.com/hc/en-us/articles/38163190843789-Chargify-js-Overview)
    + [Maxio.js with GoCardless - minimal example](https://docs.maxio.com/hc/en-us/articles/38206331271693-Examples#h_01K0PJ15QQZKCER8CFK40MR6XJ)
    + [Maxio.js with GoCardless - full example](https://docs.maxio.com/hc/en-us/articles/38206331271693-Examples#h_01K0PJ15QR09JVHWW0MCA7HVJV)
    + [Maxio.js with Stripe Direct Debit - minimal example](https://docs.maxio.com/hc/en-us/articles/38206331271693-Examples#h_01K0PJ15QQFKKN8Z7B7DZ9AJS5)
    + [Maxio.js with Stripe Direct Debit - full example](https://docs.maxio.com/hc/en-us/articles/38206331271693-Examples#h_01K0PJ15QRECQQ4ECS3ZA55GY7)
    + [Maxio.js with Stripe BECS Direct Debit - minimal example](https://developers.chargify.com/docs/developer-docs/ZG9jOjE0NjAzNDIy-examples#minimal-example-with-sepa-or-becs-direct-debit-stripe-gateway)
    + [Maxio.js with Stripe BECS Direct Debit - full example](https://developers.chargify.com/docs/developer-docs/ZG9jOjE0NjAzNDIy-examples#full-example-with-sepa-direct-debit-stripe-gateway)
+ [Full documentation on GoCardless](https://maxio.zendesk.com/hc/en-us/articles/24176159136909-GoCardless)
+ [Full documentation on Stripe SEPA Direct Debit](https://maxio.zendesk.com/hc/en-us/articles/24176170430093-Stripe-SEPA-and-BECS-Direct-Debit)
+ [Full documentation on Stripe BECS Direct Debit](https://maxio.zendesk.com/hc/en-us/articles/24176170430093-Stripe-SEPA-and-BECS-Direct-Debit)
+ [Full documentation on Stripe BACS Direct Debit](https://maxio.zendesk.com/hc/en-us/articles/24176170430093-Stripe-SEPA-and-BECS-Direct-Debit)

## 3D Secure (3DS) Authentication post-authentication flow

When a payment requires 3DS Authentication to adhere to Strong Customer Authentication (SCA), the request enters a post-authentication flow where a 422 Unprocessable Entity status is returned with an action_link that will direct the customer through 3DS Authentication. 

See the [3D Secure Post-Authentication Flow](https://docs.maxio.com/hc/en-us/articles/44277749524365-3D-Secure-Post-Authentication-Flow) article in the product documentation to learn how to manage the redirect flow.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentProfiles.createPaymentProfile();
  // TODO: Handle 'response' of type PaymentProfileResponse
} catch (err) {
  if (err instanceof PaymentProfiles.CreatePaymentProfileError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CreatePaymentProfileRequest](src/models/create-payment-profile-request.ts)</code> | When following the IBAN or the Local Bank details examples, a customer, bank account and mandate will be created in your current vault. If the customer, bank account, and mandate already exist in your vault, follow the Import example to link the payment profile into Advanced Billing. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentProfileResponse](src/models/payment-profile-response.ts)</code>

**OnError**: <code>[PaymentProfiles.CreatePaymentProfileError](src/resources/payment-profiles.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSubscriptionGroupPaymentProfile(request: PaymentProfiles.DeleteSubscriptionGroupPaymentProfileRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a Payment Profile belonging to a Subscription Group.

**Note**: If the Payment Profile belongs to multiple Subscription Groups and/or Subscriptions, it will be removed from all of them.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.paymentProfiles.deleteSubscriptionGroupPaymentProfile({ uid, paymentProfileId });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>string</code> | The uid of the subscription group |
| <code>paymentProfileId</code> | <code>number</code> | The Chargify id of the payment profile |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSubscriptionsPaymentProfile(request: PaymentProfiles.DeleteSubscriptionsPaymentProfileRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a payment profile belonging to the customer on the subscription.

+ If the customer has multiple subscriptions, the payment profile will be removed from all of them.

+ If you delete the default payment profile for a subscription, you will need to specify another payment profile to be the default through the api, or either prompt the user to enter a card in the billing portal or on the self-service page, or visit the Payment Details tab on the subscription in the Admin UI and use the “Add New Credit Card” or “Make Active Payment Method” link, (depending on whether there are other cards present).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.paymentProfiles.deleteSubscriptionsPaymentProfile({ subscriptionId, paymentProfileId });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>paymentProfileId</code> | <code>number</code> | The Chargify id of the payment profile |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteUnusedPaymentProfile(request: PaymentProfiles.DeleteUnusedPaymentProfileRequest, options?: RequestOptions): ApiPromise&lt;undefined, PaymentProfiles.DeleteUnusedPaymentProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an unused payment profile.

If the payment profile is in use by one or more subscriptions or groups, a 422 and error message will be returned.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.paymentProfiles.deleteUnusedPaymentProfile({ paymentProfileId });
} catch (err) {
  if (err instanceof PaymentProfiles.DeleteUnusedPaymentProfileError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentProfileId</code> | <code>number</code> | The Chargify id of the payment profile |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[PaymentProfiles.DeleteUnusedPaymentProfileError](src/resources/payment-profiles.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPaymentProfiles(request: PaymentProfiles.ListPaymentProfilesRequest, options?: RequestOptions): ApiPromise&lt;PaymentProfileResponse[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all active payment profiles for a site, or for one customer within a site. If no payment profiles are found, this endpoint will return an empty array, not a 404.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentProfiles.listPaymentProfiles();
  // TODO: Handle 'response' of type PaymentProfileResponse[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| <code>customerId?</code> | <code>number</code> | The ID of the customer for which you wish to list payment profiles |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentProfileResponse](src/models/payment-profile-response.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readOneTimeToken(request: PaymentProfiles.ReadOneTimeTokenRequest, options?: RequestOptions): ApiPromise&lt;GetOneTimeTokenRequest, PaymentProfiles.ReadOneTimeTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the one-time token data, including credit card or ACH details, associated with the provided token ID. One Time Tokens aka Advanced Billing Tokens house the credit card or ACH (Authorize.Net or Stripe only) data for a customer.

You can use One Time Tokens while creating a subscription or payment profile instead of passing all bank account or credit card data directly to a given API endpoint.

To obtain a One Time Token you have to use [Chargify.js](https://docs.maxio.com/hc/en-us/articles/38163190843789-Chargify-js-Overview#chargify-js-overview-0-0).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentProfiles.readOneTimeToken({ chargifyToken });
  // TODO: Handle 'response' of type GetOneTimeTokenRequest
} catch (err) {
  if (err instanceof PaymentProfiles.ReadOneTimeTokenError && err.payload.kind === "errorListResponse1") {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>chargifyToken</code> | <code>string</code> | Advanced Billing Token |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetOneTimeTokenRequest](src/models/get-one-time-token-request.ts)</code>

**OnError**: <code>[PaymentProfiles.ReadOneTimeTokenError](src/resources/payment-profiles.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readPaymentProfile(request: PaymentProfiles.ReadPaymentProfileRequest, options?: RequestOptions): ApiPromise&lt;PaymentProfileResponse, PaymentProfiles.ReadPaymentProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a payment profile identified by its unique ID.

Note that a different JSON object will be returned if the card method on file is a bank account.

### Response for Bank Account

Example response for Bank Account:

```
{
  "payment_profile": {
    "id": 10089892,
    "first_name": "Chester",
    "last_name": "Tester",
    "created_at": "2025-01-01T00:00:00-05:00",
    "updated_at": "2025-01-01T00:00:00-05:00",
    "customer_id": 14543792,
    "current_vault": "bogus",
    "vault_token": "0011223344",
    "billing_address": "456 Juniper Court",
    "billing_city": "Boulder",
    "billing_state": "CO",
    "billing_zip": "80302",
    "billing_country": "US",
    "customer_vault_token": null,
    "billing_address_2": "",
    "bank_name": "Bank of Kansas City",
    "masked_bank_routing_number": "XXXX6789",
    "masked_bank_account_number": "XXXX3344",
    "bank_account_type": "checking",
    "bank_account_holder_type": "personal",
    "payment_type": "bank_account",
    "site_gateway_setting_id": 1,
    "gateway_handle": null
  }
}
```

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentProfiles.readPaymentProfile({ paymentProfileId });
  // TODO: Handle 'response' of type PaymentProfileResponse
} catch (err) {
  if (err instanceof PaymentProfiles.ReadPaymentProfileError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentProfileId</code> | <code>number</code> | The Chargify id of the payment profile |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentProfileResponse](src/models/payment-profile-response.ts)</code>

**OnError**: <code>[PaymentProfiles.ReadPaymentProfileError](src/resources/payment-profiles.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sendRequestUpdatePaymentEmail(request: PaymentProfiles.SendRequestUpdatePaymentEmailRequest, options?: RequestOptions): ApiPromise&lt;undefined, PaymentProfiles.SendRequestUpdatePaymentEmailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends a "request payment update" email to the customer associated with the subscription.

If you attempt to send a "request payment update" email more than five times within a 30-minute period, you will receive a `422` response with an error message in the body. This error message will indicate that the request has been rejected due to excessive attempts, and will provide instructions on how to resubmit the request.

Additionally, if you attempt to send a "request payment update" email for a subscription that does not exist, you will receive a `404` error response. This error message will indicate that the subscription could not be found, and will provide instructions on how to correct the error and resubmit the request.

These error responses are designed to prevent excessive or invalid requests, and to provide clear and helpful information to users who encounter errors during the request process.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.paymentProfiles.sendRequestUpdatePaymentEmail({ subscriptionId });
} catch (err) {
  if (err instanceof PaymentProfiles.SendRequestUpdatePaymentEmailError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[PaymentProfiles.SendRequestUpdatePaymentEmailError](src/resources/payment-profiles.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePaymentProfile(request: PaymentProfiles.UpdatePaymentProfileRequestParams, options?: RequestOptions): ApiPromise&lt;PaymentProfileResponse, PaymentProfiles.UpdatePaymentProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a payment profile.

## Partial Card Updates

In the event that you are using the Authorize.net, Stripe, Cybersource, Forte or Braintree Blue payment gateways, you can update just the billing and contact information for a payment method. Note the lack of credit-card related data contained in the JSON payload.

In this case, the following JSON is acceptable:

```
{
  "payment_profile": {
    "first_name": "Kelly",
    "last_name": "Test",
    "billing_address": "789 Juniper Court",
    "billing_city": "Boulder",
    "billing_state": "CO",
    "billing_zip": "80302",
    "billing_country": "US",
    "billing_address_2": null
  }
}
```

The result will be that you have updated the billing information for the card, yet retained the original card number data.

## Specific notes on updating payment profiles

- Merchants with **Authorize.net**, **Cybersource**, **Forte**, **Braintree Blue** or **Stripe** as their payment gateway can update their Customer’s credit cards without passing in the full credit card number and CVV.

- If you are using **Authorize.net**, **Cybersource**, **Forte**, **Braintree Blue** or **Stripe**, Advanced Billing will ignore the credit card number and CVV when processing an update via the API, and attempt a partial update instead. If you wish to change the card number on a payment profile, you will need to create a new payment profile for the given customer.

- A Payment Profile cannot be updated with the attributes of another type of Payment Profile. For example, if the payment profile you are attempting to update is a credit card, you cannot pass in bank account attributes (like `bank_account_number`), and vice versa.

- Updating a payment profile directly will not trigger an attempt to capture a past-due balance. If this is the intent, update the card details via the Subscription instead.

- If you are using Authorize.net or Stripe, you may elect to manually trigger a retry for a past due subscription after a partial update.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentProfiles.updatePaymentProfile({ paymentProfileId });
  // TODO: Handle 'response' of type PaymentProfileResponse
} catch (err) {
  if (err instanceof PaymentProfiles.UpdatePaymentProfileError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentProfileId</code> | <code>number</code> | The Chargify id of the payment profile |
| <code>body?</code> | <code>[UpdatePaymentProfileRequest](src/models/update-payment-profile-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentProfileResponse](src/models/payment-profile-response.ts)</code>

**OnError**: <code>[PaymentProfiles.UpdatePaymentProfileError](src/resources/payment-profiles.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>verifyBankAccount(request: PaymentProfiles.VerifyBankAccountRequest, options?: RequestOptions): ApiPromise&lt;BankAccountResponse, PaymentProfiles.VerifyBankAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Verifies a bank account. Submit the two small deposit amounts the customer received in their bank account to verify the bank account. (Stripe only)

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentProfiles.verifyBankAccount({ bankAccountId });
  // TODO: Handle 'response' of type BankAccountResponse
} catch (err) {
  if (err instanceof PaymentProfiles.VerifyBankAccountError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bankAccountId</code> | <code>number</code> | Identifier of the bank account in the system. |
| <code>body?</code> | <code>[BankAccountVerificationRequest](src/models/bank-account-verification-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BankAccountResponse](src/models/bank-account-response.ts)</code>

**OnError**: <code>[PaymentProfiles.VerifyBankAccountError](src/resources/payment-profiles.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ProductFamilies

> Source: [ProductFamilies](src/resources/product-families.ts)

<details>
<summary><code>createProductFamily(request: ProductFamilies.CreateProductFamilyRequestParams, options?: RequestOptions): ApiPromise&lt;ProductFamilyResponse, ProductFamilies.CreateProductFamilyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Product Family within your Advanced Billing site. Create a Product Family to act as a container for your products, components, and coupons.

Full documentation on how Product Families operate within the Advanced Billing UI can be located [here](https://maxio.zendesk.com/hc/en-us/articles/24261098936205-Product-Families).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.productFamilies.createProductFamily();
  // TODO: Handle 'response' of type ProductFamilyResponse
} catch (err) {
  if (err instanceof ProductFamilies.CreateProductFamilyError && err.payload.kind === "errorListResponse1") {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CreateProductFamilyRequest](src/models/create-product-family-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProductFamilyResponse](src/models/product-family-response.ts)</code>

**OnError**: <code>[ProductFamilies.CreateProductFamilyError](src/resources/product-families.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listProductFamilies(request: ProductFamilies.ListProductFamiliesRequest, options?: RequestOptions): ApiPromise&lt;ProductFamilyResponse[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists Product Families for a site.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.productFamilies.listProductFamilies();
  // TODO: Handle 'response' of type ProductFamilyResponse[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dateField?</code> | <code>[BasicDateField](src/models/basic-date-field.ts)</code> | The type of filter you would like to apply to your search.<br>Use in query: `date_field=created_at`. |
| <code>startDate?</code> | <code>string</code> (date) | The start date (format YYYY-MM-DD) with which to filter the date_field. Returns products with a timestamp at or after midnight (12:00:00 AM) in your site’s time zone on the date specified. |
| <code>endDate?</code> | <code>string</code> (date) | The end date (format YYYY-MM-DD) with which to filter the date_field. Returns products with a timestamp up to and including 11:59:59PM in your site’s time zone on the date specified. |
| <code>startDatetime?</code> | <code>Date</code> (date-time) | The start date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns products with a timestamp at or after exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of start_date. |
| <code>endDatetime?</code> | <code>Date</code> (date-time) | The end date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns products with a timestamp at or before exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of end_date. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProductFamilyResponse](src/models/product-family-response.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listProductsForProductFamily(request: ProductFamilies.ListProductsForProductFamilyRequest, options?: RequestOptions): ApiPromise&lt;ProductResponse[], ProductFamilies.ListProductsForProductFamilyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of Products belonging to a Product Family.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.productFamilies.listProductsForProductFamily({ productFamilyId });
  // TODO: Handle 'response' of type ProductResponse[]
} catch (err) {
  if (err instanceof ProductFamilies.ListProductsForProductFamilyError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload.body' of type string
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productFamilyId</code> | <code>string</code> | Either the product family's id or its handle prefixed with `handle:` |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| <code>dateField?</code> | <code>[BasicDateField](src/models/basic-date-field.ts)</code> | The type of filter you would like to apply to your search.<br>Use in query: `date_field=created_at`. |
| <code>filter?</code> | <code>[ListProductsFilter](src/models/list-products-filter.ts)</code> | Filter to use for List Products operations |
| <code>startDate?</code> | <code>string</code> (date) | The start date (format YYYY-MM-DD) with which to filter the date_field. Returns products with a timestamp at or after midnight (12:00:00 AM) in your site’s time zone on the date specified. |
| <code>endDate?</code> | <code>string</code> (date) | The end date (format YYYY-MM-DD) with which to filter the date_field. Returns products with a timestamp up to and including 11:59:59PM in your site’s time zone on the date specified. |
| <code>startDatetime?</code> | <code>Date</code> (date-time) | The start date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns products with a timestamp at or after exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of start_date. |
| <code>endDatetime?</code> | <code>Date</code> (date-time) | The end date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns products with a timestamp at or before exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of end_date. |
| <code>includeArchived?</code> | <code>boolean</code> | Include archived products. |
| <code>include?</code> | <code>[ListProductsInclude](src/models/list-products-include.ts)</code> | Allows including additional data in the response. Use in query `include=prepaid_product_price_point`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProductResponse](src/models/product-response.ts)[]</code>

**OnError**: <code>[ProductFamilies.ListProductsForProductFamilyError](src/resources/product-families.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readProductFamily(request: ProductFamilies.ReadProductFamilyRequest, options?: RequestOptions): ApiPromise&lt;ProductFamilyResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a Product Family via the `product_family_id`. The response will contain a Product Family object.

The product family can be specified either with the id number, or with the `handle:my-family` format.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.productFamilies.readProductFamily({ id });
  // TODO: Handle 'response' of type ProductFamilyResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | The Advanced Billing id of the product family |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProductFamilyResponse](src/models/product-family-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Products

> Source: [Products](src/resources/products.ts)

<details>
<summary><code>archiveProduct(request: Products.ArchiveProductRequest, options?: RequestOptions): ApiPromise&lt;ProductResponse, Products.ArchiveProductError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archives the product. All current subscribers will be unaffected; their subscription/purchase will continue to be charged monthly.

This will restrict the option to chose the product for purchase via the Billing Portal, as well as disable Public Signup Pages for the product.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.products.archiveProduct({ productId });
  // TODO: Handle 'response' of type ProductResponse
} catch (err) {
  if (err instanceof Products.ArchiveProductError && err.payload.kind === "errorListResponse1") {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productId</code> | <code>number</code> | The Advanced Billing id of the product |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProductResponse](src/models/product-response.ts)</code>

**OnError**: <code>[Products.ArchiveProductError](src/resources/products.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createProduct(request: Products.CreateProductRequest, options?: RequestOptions): ApiPromise&lt;ProductResponse, Products.CreateProductError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a product in your Advanced Billing site.

If you have the new [Catalog experience](page:help/announcements/2026-announcements#new-catalog-experience-and-terminology) enabled, the `auto_create_signup_page` parameter is not supported. If `auto_create_signup_page` is included (with any value) an error is returned. 

See the following product documentation for more information:

+ [Products Documentation](https://maxio.zendesk.com/hc/en-us/articles/24261090117645-Products-Overview)
+ [Changing a Subscription's Product](https://maxio.zendesk.com/hc/en-us/articles/24252069837581-Product-Changes-and-Migrations)

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.products.createProduct({ productFamilyId });
  // TODO: Handle 'response' of type ProductResponse
} catch (err) {
  if (err instanceof Products.CreateProductError && err.payload.kind === "errorListResponse1") {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productFamilyId</code> | <code>string</code> | Either the product family's id or its handle prefixed with `handle:` |
| <code>body?</code> | <code>[CreateOrUpdateProductRequest](src/models/create-or-update-product-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProductResponse](src/models/product-response.ts)</code>

**OnError**: <code>[Products.CreateProductError](src/resources/products.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listProducts(request: Products.ListProductsRequest, options?: RequestOptions): ApiPromise&lt;ProductResponse[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists products belonging to a site.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.products.listProducts();
  // TODO: Handle 'response' of type ProductResponse[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dateField?</code> | <code>[BasicDateField](src/models/basic-date-field.ts)</code> | The type of filter you would like to apply to your search.<br>Use in query: `date_field=created_at`. |
| <code>filter?</code> | <code>[ListProductsFilter](src/models/list-products-filter.ts)</code> | Filter to use for List Products operations |
| <code>endDate?</code> | <code>string</code> (date) | The end date (format YYYY-MM-DD) with which to filter the date_field. Returns products with a timestamp up to and including 11:59:59PM in your site’s time zone on the date specified. |
| <code>endDatetime?</code> | <code>Date</code> (date-time) | The end date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns products with a timestamp at or before exact time provided in query. You can specify timezone in query - otherwise your site''s time zone will be used. If provided, this parameter will be used instead of end_date. |
| <code>startDate?</code> | <code>string</code> (date) | The start date (format YYYY-MM-DD) with which to filter the date_field. Returns products with a timestamp at or after midnight (12:00:00 AM) in your site’s time zone on the date specified. |
| <code>startDatetime?</code> | <code>Date</code> (date-time) | The start date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns products with a timestamp at or after exact time provided in query. You can specify timezone in query - otherwise your site''s time zone will be used. If provided, this parameter will be used instead of start_date. |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| <code>includeArchived?</code> | <code>boolean</code> | Include archived products. Use in query: `include_archived=true`. |
| <code>include?</code> | <code>[ListProductsInclude](src/models/list-products-include.ts)</code> | Allows including additional data in the response. Use in query `include=prepaid_product_price_point`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProductResponse](src/models/product-response.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readProduct(request: Products.ReadProductRequest, options?: RequestOptions): ApiPromise&lt;ProductResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reads the current details of a product.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.products.readProduct({ productId });
  // TODO: Handle 'response' of type ProductResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productId</code> | <code>number</code> | The Advanced Billing id of the product |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProductResponse](src/models/product-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readProductByHandle(request: Products.ReadProductByHandleRequest, options?: RequestOptions): ApiPromise&lt;ProductResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a Product object by its `api_handle`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.products.readProductByHandle({ apiHandle });
  // TODO: Handle 'response' of type ProductResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiHandle</code> | <code>string</code> | The handle of the product |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProductResponse](src/models/product-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateProduct(request: Products.UpdateProductRequest, options?: RequestOptions): ApiPromise&lt;ProductResponse, Products.UpdateProductError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates aspects of an existing product.

### Input Attributes Update Notes

+ `update_return_params` The parameters we will append to your `update_return_url`. See Return URLs and Parameters

### Product Price Point

Updating a product using this endpoint will create a new price point and set it as the default price point for this product. If you should like to update an existing product price point, that must be done separately.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.products.updateProduct({ productId });
  // TODO: Handle 'response' of type ProductResponse
} catch (err) {
  if (err instanceof Products.UpdateProductError && err.payload.kind === "errorListResponse1") {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productId</code> | <code>number</code> | The Advanced Billing id of the product |
| <code>body?</code> | <code>[CreateOrUpdateProductRequest](src/models/create-or-update-product-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProductResponse](src/models/product-response.ts)</code>

**OnError**: <code>[Products.UpdateProductError](src/resources/products.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ProductPricePoints

> Source: [ProductPricePoints](src/resources/product-price-points.ts)

<details>
<summary><code>archiveProductPricePoint(request: ProductPricePoints.ArchiveProductPricePointRequest, options?: RequestOptions): ApiPromise&lt;ProductPricePointResponse, ProductPricePoints.ArchiveProductPricePointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archives a product price point.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.productPricePoints.archiveProductPricePoint({ productId, pricePointId });
  // TODO: Handle 'response' of type ProductPricePointResponse
} catch (err) {
  if (
    err instanceof ProductPricePoints.ArchiveProductPricePointError &&
      err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productId</code> | <code>[ProductIdModel](src/models/unions/product-id-model.ts)</code> | The id or handle of the product. When using the handle, it must be prefixed with `handle:`. Example: `123` for an integer ID, or `handle:example-product-handle` for a string handle. |
| <code>pricePointId</code> | <code>[PricePointIdModel](src/models/unions/price-point-id-model.ts)</code> | The id or handle of the price point. When using the handle, it must be prefixed with `handle:`. Example: `123` for an integer ID, or `handle:example-product-price-point-handle` for a string handle. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProductPricePointResponse](src/models/product-price-point-response.ts)</code>

**OnError**: <code>[ProductPricePoints.ArchiveProductPricePointError](src/resources/product-price-points.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkCreateProductPricePoints(request: ProductPricePoints.BulkCreateProductPricePointsRequestParams, options?: RequestOptions): ApiPromise&lt;BulkCreateProductPricePointsResponse, ProductPricePoints.BulkCreateProductPricePointsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates multiple product price points in one request.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.productPricePoints.bulkCreateProductPricePoints({ productId });
  // TODO: Handle 'response' of type BulkCreateProductPricePointsResponse
} catch (err) {
  if (
    err instanceof ProductPricePoints.BulkCreateProductPricePointsError && err.payload.kind === "error422"
  ) {
    // TODO: Handle 'err.payload.body' of type Record<string, unknown>
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productId</code> | <code>number</code> | The Advanced Billing id of the product to which the price points belong |
| <code>body?</code> | <code>[BulkCreateProductPricePointsRequest](src/models/bulk-create-product-price-points-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkCreateProductPricePointsResponse](src/models/bulk-create-product-price-points-response.ts)</code>

**OnError**: <code>[ProductPricePoints.BulkCreateProductPricePointsError](src/resources/product-price-points.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createProductCurrencyPrices(request: ProductPricePoints.CreateProductCurrencyPricesRequestParams, options?: RequestOptions): ApiPromise&lt;CurrencyPricesResponse, ProductPricePoints.CreateProductCurrencyPricesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates currency prices for a given currency that has been defined on the site level in your settings.

When creating currency prices, they need to mirror the structure of your primary pricing. If the product price point defines a trial and/or setup fee, each currency must also define a trial and/or setup fee.

Note: Currency Prices are not able to be created for custom product price points.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.productPricePoints.createProductCurrencyPrices({ productPricePointId });
  // TODO: Handle 'response' of type CurrencyPricesResponse
} catch (err) {
  if (
    err instanceof ProductPricePoints.CreateProductCurrencyPricesError &&
      err.payload.kind === "errorArrayMapResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorArrayMapResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productPricePointId</code> | <code>number</code> | The Advanced Billing id of the product price point |
| <code>body?</code> | <code>[CreateProductCurrencyPricesRequest](src/models/create-product-currency-prices-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CurrencyPricesResponse](src/models/currency-prices-response.ts)</code>

**OnError**: <code>[ProductPricePoints.CreateProductCurrencyPricesError](src/resources/product-price-points.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createProductPricePoint(request: ProductPricePoints.CreateProductPricePointRequestParams, options?: RequestOptions): ApiPromise&lt;ProductPricePointResponse, ProductPricePoints.CreateProductPricePointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Product Price Point. See the [Product Price Point](https://maxio.zendesk.com/hc/en-us/articles/24261111947789-Product-Price-Points) documentation for details.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.productPricePoints.createProductPricePoint({ productId });
  // TODO: Handle 'response' of type ProductPricePointResponse
} catch (err) {
  if (
    err instanceof ProductPricePoints.CreateProductPricePointError &&
      err.payload.kind === "productPricePointErrorResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ProductPricePointErrorResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productId</code> | <code>[ProductIdModel](src/models/unions/product-id-model.ts)</code> | The id or handle of the product. When using the handle, it must be prefixed with `handle:` |
| <code>body?</code> | <code>[CreateProductPricePointRequest](src/models/create-product-price-point-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProductPricePointResponse](src/models/product-price-point-response.ts)</code>

**OnError**: <code>[ProductPricePoints.CreateProductPricePointError](src/resources/product-price-points.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAllProductPricePoints(request: ProductPricePoints.ListAllProductPricePointsRequest, options?: RequestOptions): ApiPromise&lt;ListProductPricePointsResponse, ProductPricePoints.ListAllProductPricePointsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists Product Price Points belonging to a site.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.productPricePoints.listAllProductPricePoints();
  // TODO: Handle 'response' of type ListProductPricePointsResponse
} catch (err) {
  if (
    err instanceof ProductPricePoints.ListAllProductPricePointsError &&
      err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>direction?</code> | <code>[SortingDirection](src/models/sorting-direction.ts)</code> | Controls the order in which results are returned.<br>Use in query `direction=asc`. |
| <code>filter?</code> | <code>[ListPricePointsFilter](src/models/list-price-points-filter.ts)</code> | Filter to use for List PricePoints operations |
| <code>include?</code> | <code>[ListProductsPricePointsInclude](src/models/list-products-price-points-include.ts)</code> | Allows including additional data in the response. Use in query: `include=currency_prices`. |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListProductPricePointsResponse](src/models/list-product-price-points-response.ts)</code>

**OnError**: <code>[ProductPricePoints.ListAllProductPricePointsError](src/resources/product-price-points.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listProductPricePoints(request: ProductPricePoints.ListProductPricePointsRequest, options?: RequestOptions): ApiPromise&lt;ListProductPricePointsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of product price points.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.productPricePoints.listProductPricePoints({ productId });
  // TODO: Handle 'response' of type ListProductPricePointsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productId</code> | <code>[ProductIdModel](src/models/unions/product-id-model.ts)</code> | The id or handle of the product. When using the handle, it must be prefixed with `handle:` |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 10. The maximum allowed values is 200; any per_page value over 200 will be changed to 200. |
| <code>currencyPrices?</code> | <code>boolean</code> | (Optional) If you have defined multiple currencies at the site level, you can pass ?currency_prices=true to include an array of currency price data in the response. If the product price point is set to use_site_exchange_rate: true, it will return pricing based on the current exchange rate. If the flag is set to false, it will return all of the defined prices for each currency. |
| <code>filterType?</code> | <code>[PricePointType](src/models/price-point-type.ts)[]</code> | Use in query: `filter[type]=catalog,default`. |
| <code>archived?</code> | <code>boolean</code> | Set to include archived price points in the response. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListProductPricePointsResponse](src/models/list-product-price-points-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>promoteProductPricePointToDefault(request: ProductPricePoints.PromoteProductPricePointToDefaultRequest, options?: RequestOptions): ApiPromise&lt;ProductResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets a product price point as the default for the product.

Note: Custom product price points cannot be set as the default for a product.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.productPricePoints.promoteProductPricePointToDefault({
    productId,
    pricePointId,
  });
  // TODO: Handle 'response' of type ProductResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productId</code> | <code>number</code> | The Advanced Billing id of the product to which the price point belongs |
| <code>pricePointId</code> | <code>number</code> | The Advanced Billing id of the product price point |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProductResponse](src/models/product-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readProductPricePoint(request: ProductPricePoints.ReadProductPricePointRequest, options?: RequestOptions): ApiPromise&lt;ProductPricePointResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details for a specific product price point. You can achieve this by using either the product price point ID or handle.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.productPricePoints.readProductPricePoint({ productId, pricePointId });
  // TODO: Handle 'response' of type ProductPricePointResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productId</code> | <code>[ProductIdModel](src/models/unions/product-id-model.ts)</code> | The id or handle of the product. When using the handle, it must be prefixed with `handle:`. Example: `123` for an integer ID, or `handle:example-product-handle` for a string handle. |
| <code>pricePointId</code> | <code>[PricePointIdModel](src/models/unions/price-point-id-model.ts)</code> | The id or handle of the price point. When using the handle, it must be prefixed with `handle:`. Example: `123` for an integer ID, or `handle:example-product-price-point-handle` for a string handle. |
| <code>currencyPrices?</code> | <code>boolean</code> | (Optional) If you have defined multiple currencies at the site level, you can pass ?currency_prices=true to include an array of currency price data in the response. If the product price point is set to use_site_exchange_rate: true, it will return pricing based on the current exchange rate. If the flag is set to false, it will return all of the defined prices for each currency. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProductPricePointResponse](src/models/product-price-point-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unarchiveProductPricePoint(request: ProductPricePoints.UnarchiveProductPricePointRequest, options?: RequestOptions): ApiPromise&lt;ProductPricePointResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unarchives an archived product price point.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.productPricePoints.unarchiveProductPricePoint({ productId, pricePointId });
  // TODO: Handle 'response' of type ProductPricePointResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productId</code> | <code>number</code> | The Advanced Billing id of the product to which the price point belongs |
| <code>pricePointId</code> | <code>number</code> | The Advanced Billing id of the product price point |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProductPricePointResponse](src/models/product-price-point-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateProductCurrencyPrices(request: ProductPricePoints.UpdateProductCurrencyPricesRequest, options?: RequestOptions): ApiPromise&lt;CurrencyPricesResponse, ProductPricePoints.UpdateProductCurrencyPricesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the `price`s of currency prices for a given currency that exists on the product price point.

When updating the pricing, it needs to mirror the structure of your primary pricing. If the product price point defines a trial and/or setup fee, each currency must also define a trial and/or setup fee.

Note: Currency Prices cannot be updated for custom product price points.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.productPricePoints.updateProductCurrencyPrices({ productPricePointId });
  // TODO: Handle 'response' of type CurrencyPricesResponse
} catch (err) {
  if (
    err instanceof ProductPricePoints.UpdateProductCurrencyPricesError &&
      err.payload.kind === "errorArrayMapResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorArrayMapResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productPricePointId</code> | <code>number</code> | The Advanced Billing id of the product price point |
| <code>body?</code> | <code>[UpdateCurrencyPricesRequest](src/models/update-currency-prices-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CurrencyPricesResponse](src/models/currency-prices-response.ts)</code>

**OnError**: <code>[ProductPricePoints.UpdateProductCurrencyPricesError](src/resources/product-price-points.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateProductPricePoint(request: ProductPricePoints.UpdateProductPricePointRequestParams, options?: RequestOptions): ApiPromise&lt;ProductPricePointResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a product price point.

Note: Custom product price points cannot be updated.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.productPricePoints.updateProductPricePoint({ productId, pricePointId });
  // TODO: Handle 'response' of type ProductPricePointResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productId</code> | <code>[ProductIdModel](src/models/unions/product-id-model.ts)</code> | The id or handle of the product. When using the handle, it must be prefixed with `handle:`. Example: `123` for an integer ID, or `handle:example-product-handle` for a string handle. |
| <code>pricePointId</code> | <code>[PricePointIdModel](src/models/unions/price-point-id-model.ts)</code> | The id or handle of the price point. When using the handle, it must be prefixed with `handle:`. Example: `123` for an integer ID, or `handle:example-product-price-point-handle` for a string handle. |
| <code>body?</code> | <code>[UpdateProductPricePointRequest](src/models/update-product-price-point-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProductPricePointResponse](src/models/product-price-point-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ProformaInvoices

> Source: [ProformaInvoices](src/resources/proforma-invoices.ts)

<details>
<summary><code>createConsolidatedProformaInvoice(request: ProformaInvoices.CreateConsolidatedProformaInvoiceRequest, options?: RequestOptions): ApiPromise&lt;undefined, ProformaInvoices.CreateConsolidatedProformaInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a consolidated proforma invoice asynchronously. It will return a 201 with no message, or a 422 with any errors. To find and view the new consolidated proforma invoice, you may poll the subscription group listing for proforma invoices; only one consolidated proforma invoice may be created per group at a time.

If the information becomes outdated, simply void the old consolidated proforma invoice and generate a new one.

## Restrictions

Proforma invoices are only available on Relationship Invoicing sites. To create a proforma invoice, the subscription must not be prepaid, and must be in a live state.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.proformaInvoices.createConsolidatedProformaInvoice({ uid });
} catch (err) {
  if (
    err instanceof ProformaInvoices.CreateConsolidatedProformaInvoiceError &&
      err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>string</code> | The uid of the subscription group |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ProformaInvoices.CreateConsolidatedProformaInvoiceError](src/resources/proforma-invoices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createProformaInvoice(request: ProformaInvoices.CreateProformaInvoiceRequest, options?: RequestOptions): ApiPromise&lt;ProformaInvoice, ProformaInvoices.CreateProformaInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a proforma invoice and returns it as a response. If the information becomes outdated, simply void the old proforma invoice and generate a new one.

If you would like to preview the next billing amounts without generating a full proforma invoice, use the renewal preview endpoint.

## Restrictions

Proforma invoices are only available on Relationship Invoicing sites. To create a proforma invoice, the subscription must not be in a group, must not be prepaid, and must be in a live state.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.proformaInvoices.createProformaInvoice({ subscriptionId });
  // TODO: Handle 'response' of type ProformaInvoice
} catch (err) {
  if (
    err instanceof ProformaInvoices.CreateProformaInvoiceError && err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProformaInvoice](src/models/proforma-invoice.ts)</code>

**OnError**: <code>[ProformaInvoices.CreateProformaInvoiceError](src/resources/proforma-invoices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createSignupProformaInvoice(request: ProformaInvoices.CreateSignupProformaInvoiceRequest, options?: RequestOptions): ApiPromise&lt;ProformaInvoice, ProformaInvoices.CreateSignupProformaInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a proforma invoice to preview costs before a subscription's signup. This endpoint is only available for Relationship Invoicing sites and cannot be used to create consolidated proforma invoices or preview prepaid subscriptions. Like other proforma invoices, it can be emailed to the customer, voided, and publicly viewed on the chargifypay domain.

Pass a payload that resembles a subscription create or signup preview request. For example, you can specify components, coupons/a referral, offers, custom pricing, and an existing customer or payment profile to populate a shipping or billing address.

A product and customer first name, last name, and email are the minimum requirements. We recommend associating the proforma invoice with a customer_id to easily find their proforma invoices, since the subscription_id will always be blank.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.proformaInvoices.createSignupProformaInvoice();
  // TODO: Handle 'response' of type ProformaInvoice
} catch (err) {
  if (
    err instanceof ProformaInvoices.CreateSignupProformaInvoiceError &&
      err.payload.kind === "proformaBadRequestErrorResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ProformaBadRequestErrorResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CreateSubscriptionRequest](src/models/create-subscription-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProformaInvoice](src/models/proforma-invoice.ts)</code>

**OnError**: <code>[ProformaInvoices.CreateSignupProformaInvoiceError](src/resources/proforma-invoices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deliverProformaInvoice(request: ProformaInvoices.DeliverProformaInvoiceRequestParams, options?: RequestOptions): ApiPromise&lt;ProformaInvoice, ProformaInvoices.DeliverProformaInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delivers a proforma invoice programmatically via email. Supports email
delivery to direct recipients, carbon-copy (cc) recipients, and blind carbon-copy (bcc) recipients.

If `recipient_emails` is omitted, the system will fall back to the primary recipient derived from the invoice or
subscription. At least one recipient must be present, either via the request body or via this default behavior, so an
empty body may still succeed when defaults are available.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.proformaInvoices.deliverProformaInvoice({ proformaInvoiceUid });
  // TODO: Handle 'response' of type ProformaInvoice
} catch (err) {
  if (err instanceof ProformaInvoices.DeliverProformaInvoiceError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>proformaInvoiceUid</code> | <code>string</code> | The uid of the proforma invoice |
| <code>body?</code> | <code>[DeliverProformaInvoiceRequest](src/models/deliver-proforma-invoice-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProformaInvoice](src/models/proforma-invoice.ts)</code>

**OnError**: <code>[ProformaInvoices.DeliverProformaInvoiceError](src/resources/proforma-invoices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listProformaInvoices(request: ProformaInvoices.ListProformaInvoicesRequest, options?: RequestOptions): ApiPromise&lt;ListProformaInvoicesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists proforma invoices for a subscription. By default, results only include totals, not detailed breakdowns for `line_items`, `discounts`, `taxes`, `credits`, `payments`, or `custom_fields`. To include breakdowns, pass the specific field as a key in the query with a value set to `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.proformaInvoices.listProformaInvoices({ subscriptionId });
  // TODO: Handle 'response' of type ListProformaInvoicesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>startDate?</code> | <code>string</code> | The beginning date range for the invoice's Due Date, in the YYYY-MM-DD format. |
| <code>endDate?</code> | <code>string</code> | The ending date range for the invoice's Due Date, in the YYYY-MM-DD format. |
| <code>status?</code> | <code>[ProformaInvoiceStatus](src/models/proforma-invoice-status.ts)</code> | The current status of the invoice.  Allowed Values: draft, open, paid, pending, voided |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | The sort direction of the returned invoices. |
| <code>lineItems?</code> | <code>boolean</code> | Include line items data. |
| <code>discounts?</code> | <code>boolean</code> | Include discounts data. |
| <code>taxes?</code> | <code>boolean</code> | Include taxes data. |
| <code>credits?</code> | <code>boolean</code> | Include credits data. |
| <code>payments?</code> | <code>boolean</code> | Include payments data. |
| <code>customFields?</code> | <code>boolean</code> | Include custom fields data. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListProformaInvoicesResponse](src/models/list-proforma-invoices-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSubscriptionGroupProformaInvoices(request: ProformaInvoices.ListSubscriptionGroupProformaInvoicesRequest, options?: RequestOptions): ApiPromise&lt;ListProformaInvoicesResponse, ProformaInvoices.ListSubscriptionGroupProformaInvoicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists proforma invoices with a `consolidation_level` of parent for the subscription group.

By default, proforma invoices returned on the index will only include totals, not detailed breakdowns for `line_items`, `discounts`, `taxes`, `credits`, `payments`, `custom_fields`. To include breakdowns, pass the specific field as a key in the query with a value set to true.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.proformaInvoices.listSubscriptionGroupProformaInvoices({ uid });
  // TODO: Handle 'response' of type ListProformaInvoicesResponse
} catch (err) {
  if (
    err instanceof ProformaInvoices.ListSubscriptionGroupProformaInvoicesError &&
      err.payload.kind === "error404"
  ) {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>string</code> | The uid of the subscription group |
| <code>lineItems?</code> | <code>boolean</code> | Include line items data. |
| <code>discounts?</code> | <code>boolean</code> | Include discounts data. |
| <code>taxes?</code> | <code>boolean</code> | Include taxes data. |
| <code>credits?</code> | <code>boolean</code> | Include credits data. |
| <code>payments?</code> | <code>boolean</code> | Include payments data. |
| <code>customFields?</code> | <code>boolean</code> | Include custom fields data. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListProformaInvoicesResponse](src/models/list-proforma-invoices-response.ts)</code>

**OnError**: <code>[ProformaInvoices.ListSubscriptionGroupProformaInvoicesError](src/resources/proforma-invoices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>previewProformaInvoice(request: ProformaInvoices.PreviewProformaInvoiceRequest, options?: RequestOptions): ApiPromise&lt;ProformaInvoice, ProformaInvoices.PreviewProformaInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Previews the data that will be included on a given subscription's proforma invoice if one were to be generated. It will have similar line items and totals as a renewal preview, but the response will be presented in the format of a proforma invoice. Consequently it will include additional information such as the name and addresses that will appear on the proforma invoice.

The preview endpoint is subject to all the same conditions as the proforma invoice endpoint. For example, previews are only available on the Relationship Invoicing architecture, and previews cannot be made for end-of-life subscriptions.

If all the data returned in the preview is as expected, you may then create a static proforma invoice and send it to your customer. The data within a preview will not be saved and will not be accessible after the call is made.

Alternatively, if you have some proforma invoices already, you may make a preview call to determine whether any billing information for the subscription's upcoming renewal has changed.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.proformaInvoices.previewProformaInvoice({ subscriptionId });
  // TODO: Handle 'response' of type ProformaInvoice
} catch (err) {
  if (err instanceof ProformaInvoices.PreviewProformaInvoiceError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProformaInvoice](src/models/proforma-invoice.ts)</code>

**OnError**: <code>[ProformaInvoices.PreviewProformaInvoiceError](src/resources/proforma-invoices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>previewSignupProformaInvoice(request: ProformaInvoices.PreviewSignupProformaInvoiceRequest, options?: RequestOptions): ApiPromise&lt;SignupProformaPreviewResponse, ProformaInvoices.PreviewSignupProformaInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a signup preview in the format of a proforma invoice to preview costs before a subscription's signup. This endpoint is only available for Relationship Invoicing sites and cannot be used to create consolidated proforma invoice previews or preview prepaid subscriptions. You have the option of previewing the first renewal's costs as well. The proforma invoice preview will not be persisted.

Pass a payload that resembles a subscription create or signup preview request. For example, you can specify components, coupons/a referral, offers, custom pricing, and an existing customer or payment profile to populate a shipping or billing address.

A product and customer first name, last name, and email are the minimum requirements.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.proformaInvoices.previewSignupProformaInvoice();
  // TODO: Handle 'response' of type SignupProformaPreviewResponse
} catch (err) {
  if (
    err instanceof ProformaInvoices.PreviewSignupProformaInvoiceError &&
      err.payload.kind === "proformaBadRequestErrorResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ProformaBadRequestErrorResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>include?</code> | <code>[CreateSignupProformaPreviewInclude](src/models/create-signup-proforma-preview-include.ts)</code> | Choose to include a proforma invoice preview for the first renewal. Use in query `include=next_proforma_invoice`. |
| <code>body?</code> | <code>[CreateSubscriptionRequest](src/models/create-subscription-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SignupProformaPreviewResponse](src/models/signup-proforma-preview-response.ts)</code>

**OnError**: <code>[ProformaInvoices.PreviewSignupProformaInvoiceError](src/resources/proforma-invoices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readProformaInvoice(request: ProformaInvoices.ReadProformaInvoiceRequest, options?: RequestOptions): ApiPromise&lt;ProformaInvoice, ProformaInvoices.ReadProformaInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of an existing proforma invoice.

## Restrictions

Proforma invoices are only available on Relationship Invoicing sites.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.proformaInvoices.readProformaInvoice({ proformaInvoiceUid });
  // TODO: Handle 'response' of type ProformaInvoice
} catch (err) {
  if (err instanceof ProformaInvoices.ReadProformaInvoiceError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>proformaInvoiceUid</code> | <code>string</code> | The uid of the proforma invoice |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProformaInvoice](src/models/proforma-invoice.ts)</code>

**OnError**: <code>[ProformaInvoices.ReadProformaInvoiceError](src/resources/proforma-invoices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>voidProformaInvoice(request: ProformaInvoices.VoidProformaInvoiceRequest, options?: RequestOptions): ApiPromise&lt;ProformaInvoice, ProformaInvoices.VoidProformaInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Voids a proforma invoice that has the status "draft".

## Restrictions

Proforma invoices are only available on Relationship Invoicing sites.

Only proforma invoices that have the appropriate status may be reopened. If the invoice identified by {uid} does not have the appropriate status, the response will have HTTP status code 422 and an error message.

A reason for the void operation is required to be included in the request body. If one is not provided, the response will have HTTP status code 422 and an error message.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.proformaInvoices.voidProformaInvoice({ proformaInvoiceUid });
  // TODO: Handle 'response' of type ProformaInvoice
} catch (err) {
  if (err instanceof ProformaInvoices.VoidProformaInvoiceError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>proformaInvoiceUid</code> | <code>string</code> | The uid of the proforma invoice |
| <code>body?</code> | <code>[VoidInvoiceRequest](src/models/void-invoice-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProformaInvoice](src/models/proforma-invoice.ts)</code>

**OnError**: <code>[ProformaInvoices.VoidProformaInvoiceError](src/resources/proforma-invoices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ReasonCodes

> Source: [ReasonCodes](src/resources/reason-codes.ts)

<details>
<summary><code>createReasonCode(request: ReasonCodes.CreateReasonCodeRequestParams, options?: RequestOptions): ApiPromise&lt;ReasonCodeResponse, ReasonCodes.CreateReasonCodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a reason code for a given site.

# Reason Codes Intro

Reason Codes are a way to gain a high-level view of why your customers are cancelling the subscription to your product or service.

Add a set of churn reason codes to be displayed in-app and/or the Maxio Billing Portal. As your subscribers decide to cancel their subscription, learn why they decided to cancel.

## Reason Code Documentation

Full documentation on how Reason Codes operate within Advanced Billing can be located under the following links.

[Churn Reason Codes](https://maxio.zendesk.com/hc/en-us/articles/24286647554701-Churn-Reason-Codes)

## Create Reason Code

This method gives a merchant the option to create reason codes for a given site.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.reasonCodes.createReasonCode();
  // TODO: Handle 'response' of type ReasonCodeResponse
} catch (err) {
  if (err instanceof ReasonCodes.CreateReasonCodeError && err.payload.kind === "errorListResponse1") {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CreateReasonCodeRequest](src/models/create-reason-code-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReasonCodeResponse](src/models/reason-code-response.ts)</code>

**OnError**: <code>[ReasonCodes.CreateReasonCodeError](src/resources/reason-codes.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteReasonCode(request: ReasonCodes.DeleteReasonCodeRequest, options?: RequestOptions): ApiPromise&lt;OkResponse, ReasonCodes.DeleteReasonCodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a reason code from the Churn Reason Codes. This code will be immediately removed. This action is not reversible.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.reasonCodes.deleteReasonCode({ reasonCodeId });
  // TODO: Handle 'response' of type OkResponse
} catch (err) {
  if (err instanceof ReasonCodes.DeleteReasonCodeError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reasonCodeId</code> | <code>number</code> | The Advanced Billing id of the reason code |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OkResponse](src/models/ok-response.ts)</code>

**OnError**: <code>[ReasonCodes.DeleteReasonCodeError](src/resources/reason-codes.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listReasonCodes(request: ReasonCodes.ListReasonCodesRequest, options?: RequestOptions): ApiPromise&lt;ReasonCodeResponse[], ReasonCodes.ListReasonCodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all current churn codes for a given site.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.reasonCodes.listReasonCodes();
  // TODO: Handle 'response' of type ReasonCodeResponse[]
} catch (err) {
  if (err instanceof ReasonCodes.ListReasonCodesError && err.payload.kind === "errorListResponse1") {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReasonCodeResponse](src/models/reason-code-response.ts)[]</code>

**OnError**: <code>[ReasonCodes.ListReasonCodesError](src/resources/reason-codes.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readReasonCode(request: ReasonCodes.ReadReasonCodeRequest, options?: RequestOptions): ApiPromise&lt;ReasonCodeResponse, ReasonCodes.ReadReasonCodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a particular churn reason code for a given site by its unique ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.reasonCodes.readReasonCode({ reasonCodeId });
  // TODO: Handle 'response' of type ReasonCodeResponse
} catch (err) {
  if (err instanceof ReasonCodes.ReadReasonCodeError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reasonCodeId</code> | <code>number</code> | The Advanced Billing id of the reason code |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReasonCodeResponse](src/models/reason-code-response.ts)</code>

**OnError**: <code>[ReasonCodes.ReadReasonCodeError](src/resources/reason-codes.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateReasonCode(request: ReasonCodes.UpdateReasonCodeRequestParams, options?: RequestOptions): ApiPromise&lt;ReasonCodeResponse, ReasonCodes.UpdateReasonCodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing reason code for a given site.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.reasonCodes.updateReasonCode({ reasonCodeId });
  // TODO: Handle 'response' of type ReasonCodeResponse
} catch (err) {
  if (err instanceof ReasonCodes.UpdateReasonCodeError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reasonCodeId</code> | <code>number</code> | The Advanced Billing id of the reason code |
| <code>body?</code> | <code>[UpdateReasonCodeRequest](src/models/update-reason-code-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReasonCodeResponse](src/models/reason-code-response.ts)</code>

**OnError**: <code>[ReasonCodes.UpdateReasonCodeError](src/resources/reason-codes.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ReferralCodes

> Source: [ReferralCodes](src/resources/referral-codes.ts)

<details>
<summary><code>validateReferralCode(request: ReferralCodes.ValidateReferralCodeRequest, options?: RequestOptions): ApiPromise&lt;ReferralValidationResponse, ReferralCodes.ValidateReferralCodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validates whether a referral code is valid and applicable within your site. This method is useful for validating referral codes that are entered by a customer.

## Referrals Documentation

Full documentation on how to use the referrals feature in the Advanced Billing UI can be located [here](https://maxio.zendesk.com/hc/en-us/sections/24286965611405-Referrals).

## Server Response

If the referral code is valid the status code will be `200` and the referral code will be returned. If the referral code is invalid, a `404` response will be returned.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.referralCodes.validateReferralCode({ code });
  // TODO: Handle 'response' of type ReferralValidationResponse
} catch (err) {
  if (
    err instanceof ReferralCodes.ValidateReferralCodeError &&
      err.payload.kind === "singleStringErrorResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type SingleStringErrorResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>code</code> | <code>string</code> | The referral code you are trying to validate |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReferralValidationResponse](src/models/referral-validation-response.ts)</code>

**OnError**: <code>[ReferralCodes.ValidateReferralCodeError](src/resources/referral-codes.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SalesCommissions

> Source: [SalesCommissions](src/resources/sales-commissions.ts)

<details>
<summary><code>listSalesCommissionSettings(request: SalesCommissions.ListSalesCommissionSettingsRequest, options?: RequestOptions): ApiPromise&lt;SaleRepSettings[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists subscriptions with associated sales reps.

## Modified Authentication Process

The Sales Commission API differs from other Chargify API endpoints. This resource is associated with the seller itself. Up to now all available resources were at the level of the site, therefore creating the API Key per site was a sufficient solution. To share resources at the seller level, a new authentication method was introduced, which is user authentication. Creating an API Key for a user is a required step to correctly use the Sales Commission API, more details [here](https://developers.chargify.com/docs/developer-docs/ZG9jOjMyNzk5NTg0-2020-04-20-new-api-authentication).

Access to the Sales Commission API endpoints is available to users with financial access, where the seller has the Advanced Analytics component enabled. For further information on getting access to Advanced Analytics contact Maxio support.

> Note: The request is at seller level, it means `<<subdomain>>` variable will be replaced by `app`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.salesCommissions.listSalesCommissionSettings({ sellerId });
  // TODO: Handle 'response' of type SaleRepSettings[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sellerId</code> | <code>string</code> | The Chargify id of your seller account |
| <code>liveMode?</code> | <code>boolean</code> | This parameter indicates if records should be fetched from live mode sites. Default value is true. |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 100. |
| <code>authorization?</code> | <code>string</code> | For authorization use user API key. See details [here](https://developers.chargify.com/docs/developer-docs/ZG9jOjMyNzk5NTg0-2020-04-20-new-api-authentication). |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SaleRepSettings](src/models/sale-rep-settings.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSalesReps(request: SalesCommissions.ListSalesRepsRequest, options?: RequestOptions): ApiPromise&lt;ListSaleRepItem[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists sales reps with details.

## Modified Authentication Process

The Sales Commission API differs from other Chargify API endpoints. This resource is associated with the seller itself. Up to now all available resources were at the level of the site, therefore creating the API Key per site was a sufficient solution. To share resources at the seller level, a new authentication method was introduced, which is user authentication. Creating an API Key for a user is a required step to correctly use the Sales Commission API, more details [here](https://developers.chargify.com/docs/developer-docs/ZG9jOjMyNzk5NTg0-2020-04-20-new-api-authentication).

Access to the Sales Commission API endpoints is available to users with financial access, where the seller has the Advanced Analytics component enabled. For further information on getting access to Advanced Analytics contact Maxio support.

> Note: The request is at seller level, it means `<<subdomain>>` variable will be replaced by `app`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.salesCommissions.listSalesReps({ sellerId });
  // TODO: Handle 'response' of type ListSaleRepItem[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sellerId</code> | <code>string</code> | The Chargify id of your seller account |
| <code>liveMode?</code> | <code>boolean</code> | This parameter indicates if records should be fetched from live mode sites. Default value is true. |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 100. |
| <code>authorization?</code> | <code>string</code> | For authorization use user API key. See details [here](https://developers.chargify.com/docs/developer-docs/ZG9jOjMyNzk5NTg0-2020-04-20-new-api-authentication). |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListSaleRepItem](src/models/list-sale-rep-item.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readSalesRep(request: SalesCommissions.ReadSalesRepRequest, options?: RequestOptions): ApiPromise&lt;SaleRep, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a sales rep and attached subscription details.

## Modified Authentication Process

The Sales Commission API differs from other Chargify API endpoints. This resource is associated with the seller itself. Up to now all available resources were at the level of the site, therefore creating the API Key per site was a sufficient solution. To share resources at the seller level, a new authentication method was introduced, which is user authentication. Creating an API Key for a user is a required step to correctly use the Sales Commission API, more details [here](https://developers.chargify.com/docs/developer-docs/ZG9jOjMyNzk5NTg0-2020-04-20-new-api-authentication).

Access to the Sales Commission API endpoints is available to users with financial access, where the seller has the Advanced Analytics component enabled. For further information on getting access to Advanced Analytics contact Maxio support.

> Note: The request is at seller level, it means `<<subdomain>>` variable will be replaced by `app`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.salesCommissions.readSalesRep({ sellerId, salesRepId });
  // TODO: Handle 'response' of type SaleRep
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sellerId</code> | <code>string</code> | The Chargify id of your seller account |
| <code>salesRepId</code> | <code>string</code> | The Advanced Billing id of sales rep. |
| <code>liveMode?</code> | <code>boolean</code> | This parameter indicates if records should be fetched from live mode sites. Default value is true. |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 100. |
| <code>authorization?</code> | <code>string</code> | For authorization use user API key. See details [here](https://developers.chargify.com/docs/developer-docs/ZG9jOjMyNzk5NTg0-2020-04-20-new-api-authentication). |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SaleRep](src/models/sale-rep.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Sites

> Source: [Sites](src/resources/sites.ts)

<details>
<summary><code>clearSite(request: Sites.ClearSiteRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Clears all data from a test site asynchronously. This call is asynchronous and there may be a delay before the site data is fully deleted. If you are clearing site data for an automated test, you will need to build in a delay and/or check that there are no products, etc., in the site before proceeding.

**This functionality will only work on sites in TEST mode. Attempts to perform this on sites in “live” mode will result in a response of 403 FORBIDDEN.**


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.sites.clearSite();
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cleanupScope?</code> | <code>[CleanupScope](src/models/cleanup-scope.ts)</code> | `all`: Will clear all products, customers, and related subscriptions from the site. <br>`customers`: Will clear only customers and related subscriptions (leaving the products untouched) for the site. <br>Revenue will also be reset to 0.<br>Use in query `cleanup_scope=all`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listChargifyJsPublicKeys(request: Sites.ListChargifyJsPublicKeysRequest, options?: RequestOptions): ApiPromise&lt;ListPublicKeysResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists public keys used for Maxio.js (formerly Chargify.js).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sites.listChargifyJsPublicKeys();
  // TODO: Handle 'response' of type ListPublicKeysResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListPublicKeysResponse](src/models/list-public-keys-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readSite(options?: RequestOptions): ApiPromise&lt;SiteResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves site data.

Full documentation on Sites in the Advanced Billing UI can be located [here](https://maxio.zendesk.com/hc/en-us/sections/24250550707085-Sites).

Specifically, the [Clearing Site Data](https://maxio.zendesk.com/hc/en-us/articles/24250617028365-Clearing-Site-Data) section is relevant to this endpoint documentation.

#### Relationship invoicing enabled
If the site has RI enabled then you will see more settings like:

    "customer_hierarchy_enabled": true,
    "whopays_enabled": true,
    "whopays_default_payer": "self"
You can read more about these settings here:
 [Who Pays & Customer Hierarchy](https://maxio.zendesk.com/hc/en-us/articles/24252185211533-Customer-Hierarchies-WhoPays).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sites.readSite();
  // TODO: Handle 'response' of type SiteResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SiteResponse](src/models/site-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Subscriptions

> Source: [Subscriptions](src/resources/subscriptions.ts)

<details>
<summary><code>activateSubscription(request: Subscriptions.ActivateSubscriptionRequestParams, options?: RequestOptions): ApiPromise&lt;SubscriptionResponse, Subscriptions.ActivateSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Activates awaiting signup and trialing subscriptions. This feature is only available on the Relationship Invoicing architecture. Subscriptions in a group may not be activated immediately.

For details on how the activation works, and how to activate subscriptions through the application, see [activation](#).

The `revert_on_failure` parameter controls the behavior upon activation failure.
- If set to `true` and something goes wrong i.e. payment fails, then Advanced Billing will not change the subscription's state. The subscription’s billing period will also remain the same.
- If set to `false` and something goes wrong i.e. payment fails, then Advanced Billing will continue through with the activation and enter an end of life state. For trialing subscriptions, that will either be trial ended (if the trial is no obligation), past due (if the trial has an obligation), or canceled (if the site has no dunning strategy, or has a strategy that says to cancel immediately). For awaiting signup subscriptions, that will always be canceled.

The default activation failure behavior can be configured per activation attempt, or you may set a default value under Config > Settings > Subscription Activation Settings.

## Activation Scenarios

### Activate Awaiting Signup subscription

- Given you have a product without trial
- Given you have a site without dunning strategy

```mermaid
  flowchart LR
    AS[Awaiting Signup] --> A{Activate}
    A -->|Success| Active
    A -->|Failure| ROF{revert_on_failure}
    ROF -->|true| AS
    ROF -->|false| Canceled
```

- Given you have a product with trial
- Given you have a site with dunning strategy

```mermaid
  flowchart LR
    AS[Awaiting Signup] --> A{Activate}
    A -->|Success| Trialing
    A -->|Failure| ROF{revert_on_failure}
    ROF -->|true| AS
    ROF -->|false| PD[Past Due]
```

### Activate Trialing subscription

You can read more about the behavior of trialing subscriptions [here](https://maxio.zendesk.com/hc/en-us/articles/24252155721869-Trialing-Subscriptions).
When the `revert_on_failure` parameter is set to `true`, the subscription's state will remain as Trialing, we will void the invoice from activation and return any prepayments and credits applied to the invoice back to the subscription.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.activateSubscription({ subscriptionId });
  // TODO: Handle 'response' of type SubscriptionResponse
} catch (err) {
  if (
    err instanceof Subscriptions.ActivateSubscriptionError && err.payload.kind === "errorArrayMapResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorArrayMapResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>body?</code> | <code>[ActivateSubscriptionRequest](src/models/activate-subscription-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>

**OnError**: <code>[Subscriptions.ActivateSubscriptionError](src/resources/subscriptions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>applyCouponsToSubscription(request: Subscriptions.ApplyCouponsToSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionResponse, Subscriptions.ApplyCouponsToSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Applies one or more coupon codes to an existing subscription.

An existing subscription can accommodate multiple discounts/coupon codes. This is only applicable if each coupon is stackable. For more information on stackable coupons, we recommend reviewing our [coupon documentation.](https://maxio.zendesk.com/hc/en-us/articles/24261259337101-Coupons-and-Subscriptions#stackability-rules)

## Query Parameters vs Request Body Parameters

Passing in a coupon code as a query parameter will add the code to the subscription, completely replacing all existing coupon codes on the subscription.

For this reason, using this query parameter on this endpoint has been deprecated in favor of using the request body parameters as described below. When passing in request body parameters, the list of coupon codes will simply be added to any existing list of codes on the subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.applyCouponsToSubscription({ subscriptionId });
  // TODO: Handle 'response' of type SubscriptionResponse
} catch (err) {
  if (
    err instanceof Subscriptions.ApplyCouponsToSubscriptionError &&
      err.payload.kind === "subscriptionAddCouponError1"
  ) {
    // TODO: Handle 'err.payload.body' of type SubscriptionAddCouponError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>code?</code> | <code>string</code> | A code for the coupon that would be applied to a subscription |
| <code>body?</code> | <code>[AddCouponsRequest](src/models/add-coupons-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>

**OnError**: <code>[Subscriptions.ApplyCouponsToSubscriptionError](src/resources/subscriptions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createSubscription(request: Subscriptions.CreateSubscriptionRequestParams, options?: RequestOptions): ApiPromise&lt;SubscriptionResponse, Subscriptions.CreateSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>


Creates a Subscription for a customer and product.

Specify the product with `product_id` or `product_handle`. To set a specific product price point, use `product_price_point_handle` or `product_price_point_id`.

Identify an existing customer with `customer_id` or `customer_reference`. Optionally, include an existing payment profile using `payment_profile_id`. To create a new customer, pass customer_attributes. 

Select an option from the **Request Examples** drop-down on the right side of the portal to see examples of common scenarios for creating subscriptions. 

## List vs Sales Pricing

When a subscription uses custom pricing as the sales price, you can optionally provide a list price for any item. If omitted, the list price defaults to the sales price. The difference between the list price and sales price is used to calculate implicit discounts, which appear on Invoices and in reporting. List price can also support revenue allocations in [Advanced Revenue](https://docs.maxio.com/hc/en-us/articles/24177001342861-Create-and-Configure-RevenueBooks).

If your site has list pricing enabled, the API accepts `custom_price.list_price_point_id` for custom pricing, validates and persists it, and returns list price metadata in subscription responses. If list pricing is disabled, this input is ignored and related response fields are omitted.

When list pricing is enabled:

- Subscription → Product `product_price_point_list_price_point_id` (integer)
- `product_price_point_list_price_point_handle` (string)
- Subscription Components (when components are included in the response, such as with subscriptions built from components or component serialization paths) `component_id` (integer)
- `price_point_id` (integer)
- `list_price_point_id` (integer)

When list pricing is disabled:

- Subscription → Product `product_price_point_list_price_point_id`: omitted
- `product_price_point_list_price_point_handle`: omitted
- Subscription Components `list_price_point_id`: omitted

This functionality is supported in the API, but is not currently supported in SDKs.

## Subscriptions can now work independently from the catalog

 If you have the new [Catalog experience](page:help/announcements/2026-announcements#new-catalog-experience-and-terminology) enabled, you can create subscriptions without a `product_id` or `product_handle` using POST /subscriptions, building them entirely from components.

A valid subscription must include at least one active component with:
- a positive `allocated_quantity`,
- a positive `unit_balance`, or
- 'enabled: true' (for on/off components)
- a configured metered component

`component_id` can be provided as a numeric ID or in handle: format. If `trial_interval` and `trial_interval_unit` are included, they are applied at creation.

In the response, product and product price point fields are null, and component details are returned instead.

This functionality is supported in the API, but is not currently supported in SDKs.

## Payment information

Payment information may be required to create a subscription, depending on the options for the Product being subscribed. See [product options](https://docs.maxio.com/hc/en-us/articles/24261076617869-Edit-Products) for more information. See the [Payments Profile]($e/Payment%20Profiles/createPaymentProfile) endpoint for details on payment parameters.
See the [Subscription Signups](page:introduction/basic-concepts/subscription-signup) article for more information on working with subscriptions in Advanced Billing.

## Payment information  

Payment information may be required to create a subscription, depending on the options for the Product being subscribed. See [product options](https://docs.maxio.com/hc/en-us/articles/24261076617869-Edit-Products) for more information. See the [Payments Profile]($e/Payment%20Profiles/createPaymentProfile) endpoint for details on payment parameters. 

Do not use real card information for testing. See the Sites articles that cover [testing your site setup](https://docs.maxio.com/hc/en-us/articles/24250712113165-Testing-Overview#testing-overview-0-0) for more details on testing in your sandbox.

Note that collecting and sending raw card details in production requires [PCI compliance](https://docs.maxio.com/hc/en-us/articles/24183956938381-PCI-Compliance#pci-compliance-0-0) on your end. If your business is not PCI compliant, use [Maxio.js (formerly Chargify.js)](https://docs.maxio.com/hc/en-us/articles/38163190843789-Chargify-js-Overview#chargify-js-overview-0-0) to collect credit card or bank account information.

## 3D Secure (3DS) Authentication post-authentication flow

When a payment requires 3DS Authentication to adhere to Strong Customer Authentication (SCA), the request enters a post-authentication flow where a 422 Unprocessable Entity status is returned with an action_link that will direct the customer through 3DS Authentication. 

See the [3D Secure Post-Authentication Flow](https://docs.maxio.com/hc/en-us/articles/44277749524365-3D-Secure-Post-Authentication-Flow) article in the product documentation to learn how to manage the redirect flow.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.createSubscription();
  // TODO: Handle 'response' of type SubscriptionResponse
} catch (err) {
  if (err instanceof Subscriptions.CreateSubscriptionError && err.payload.kind === "errorListResponse1") {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CreateSubscriptionRequest](src/models/create-subscription-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>

**OnError**: <code>[Subscriptions.CreateSubscriptionError](src/resources/subscriptions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>findSubscription(request: Subscriptions.FindSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionResponse, Subscriptions.FindSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Finds a subscription by its reference.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.findSubscription();
  // TODO: Handle 'response' of type SubscriptionResponse
} catch (err) {
  if (err instanceof Subscriptions.FindSubscriptionError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reference?</code> | <code>string</code> | Subscription reference |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>

**OnError**: <code>[Subscriptions.FindSubscriptionError](src/resources/subscriptions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSubscriptions(request: Subscriptions.ListSubscriptionsRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionResponse[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists subscriptions for a site. Pay close attention to query string filters and pagination in order to control responses from the server.

If you have the new [Catalog experience](page:help/announcements/2026-announcements#new-catalog-experience-and-terminology) enabled, some subscriptions may not have an associated product. For subscriptions without an associated product, 'product', 'product_price_point_id', and 'product_price_point_type' are returned as 'null'.

## Search for a subscription

Use the query strings below to search for a subscription using the criteria available. The return value will be an array.

## Self-Service Page token

Self-Service Page token for the subscriptions is not returned by default. If this information is desired, the include[]=self_service_page_token parameter must be provided with the request.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.listSubscriptions();
  // TODO: Handle 'response' of type SubscriptionResponse[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| <code>state?</code> | <code>[SubscriptionStateFilter](src/models/subscription-state-filter.ts)</code> | The current state of the subscription |
| <code>product?</code> | <code>number</code> | The product id of the subscription. (Note that the product handle cannot be used.) |
| <code>productPricePointId?</code> | <code>number</code> | The ID of the product price point. If supplied, product is required. |
| <code>coupon?</code> | <code>number</code> | The numeric id of the coupon currently applied to the subscription. (This can be found in the URL when editing a coupon. Note that the coupon code cannot be used.) |
| <code>couponCode?</code> | <code>string</code> | The coupon code currently applied to the subscription |
| <code>brandingThemeId?</code> | <code>number</code> | Filter subscriptions by the ID of an assigned Branding Theme. Branding Themes is a beta feature. See [Understand Branding Themes](https://docs.maxio.com/hc/en-us/articles/43796895662093-Understand-Branding-Themes#understand-branding-themes-0-0) for more information. |
| <code>dateField?</code> | <code>[SubscriptionDateField](src/models/subscription-date-field.ts)</code> | The type of filter you'd like to apply to your search.  Allowed Values: , current_period_ends_at, current_period_starts_at, created_at, activated_at, canceled_at, expires_at, trial_started_at, trial_ended_at, updated_at |
| <code>startDate?</code> | <code>string</code> (date) | The start date (format YYYY-MM-DD) with which to filter the date_field. Returns subscriptions with a timestamp at or after midnight (12:00:00 AM) in your site’s time zone on the date specified. Use in query `start_date=2022-07-01`. |
| <code>endDate?</code> | <code>string</code> (date) | The end date (format YYYY-MM-DD) with which to filter the date_field. Returns subscriptions with a timestamp up to and including 11:59:59PM in your site’s time zone on the date specified. Use in query `end_date=2022-08-01`. |
| <code>startDatetime?</code> | <code>Date</code> (date-time) | The start date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns subscriptions with a timestamp at or after exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of start_date. Use in query `start_datetime=2022-07-01 09:00:05`. |
| <code>endDatetime?</code> | <code>Date</code> (date-time) | The end date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns subscriptions with a timestamp at or before exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of end_date. Use in query `end_datetime=2022-08-01 10:00:05`. |
| <code>metadata?</code> | <code>Record&lt;string, string&gt;</code> | The value of the metadata field specified in the parameter. Use in query `metadata[my-field]=value&metadata[other-field]=another_value`. |
| <code>direction?</code> | <code>[SortingDirection](src/models/sorting-direction.ts)</code> | Controls the order in which results are returned.<br>Use in query `direction=asc`. |
| <code>sort?</code> | <code>[SubscriptionSort](src/models/subscription-sort.ts)</code> | The attribute by which to sort |
| <code>include?</code> | <code>[SubscriptionListInclude](src/models/subscription-list-include.ts)[]</code> | Allows including additional data in the response. Use in query: `include[]=self_service_page_token`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](src/models/subscription-response.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>overrideSubscription(request: Subscriptions.OverrideSubscriptionRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Subscriptions.OverrideSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets certain subscription fields that are usually managed automatically. Some of the fields can be set via the normal Subscriptions Update API, but others can only be set using this endpoint.

This endpoint is provided for cases where you need to “align” Advanced Billing data with data that happened in your system, perhaps before you started using Advanced Billing. For example, you may choose to import your historical subscription data, and would like the activation and cancellation dates in Advanced Billing to match your existing historical dates. Advanced Billing does not backfill historical events (i.e. from the Events API), but some static data can be changed via this API.

Why are some fields only settable from this endpoint, and not the normal subscription create and update endpoints? Because we want users of this endpoint to be aware that these fields are usually managed by Advanced Billing, and using this API means **you are stepping out on your own.**

Changing these fields will not affect any other attributes. For example, adding an expiration date will not affect the next assessment date on the subscription.

If you regularly need to override the current_period_starts_at for new subscriptions, this can also be accomplished by setting both `previous_billing_at` and `next_billing_at` at subscription creation. See the documentation on [Importing Subscriptions](./b3A6MTQxMDgzODg-create-subscription#subscriptions-import) for more information.

## Limitations

When passing `current_period_starts_at` some validations are made:

1. The subscription needs to be unbilled (no statements or invoices).
2. The value passed must be a valid date/time. We recommend using the iso 8601 format.
3. The value passed must be before the current date/time.

If unpermitted parameters are sent, a 400 HTTP response is sent along with a string giving the reason for the problem.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.subscriptions.overrideSubscription({ subscriptionId });
} catch (err) {
  if (err instanceof Subscriptions.OverrideSubscriptionError && err.payload.kind === "singleErrorResponse1") {
    // TODO: Handle 'err.payload.body' of type SingleErrorResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>body?</code> | <code>[OverrideSubscriptionRequest](src/models/override-subscription-request.ts)</code> | Only these fields are available to be set. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Subscriptions.OverrideSubscriptionError](src/resources/subscriptions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>previewSubscription(request: Subscriptions.PreviewSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionPreviewResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Previews a subscription by POSTing the same JSON or XML as for a subscription creation.

The "Next Billing" amount and "Next Billing" date are represented in each Subscriber's Summary.

A subscription will not be created by utilizing this endpoint; it is meant to serve as a prediction.

For more information, see our documentation [here](https://maxio.zendesk.com/hc/en-us/articles/24252493695757-Subscriber-Interface-Overview).

## Subscriptions can now work independently from the catalog

 If you have the new [Catalog experience](page:help/announcements/2026-announcements#new-catalog-experience-and-terminology) enabled, you can create subscriptions without a `product_id` or `product_handle` using POST /subscriptions, building them entirely from components.

A valid subscription must include at least one active component with:
- a positive `allocated_quantity`,
- a positive `unit_balance`, or
- 'enabled: true' (for on/off components)

`component_id` can be provided as a numeric ID or in handle: format. If `trial_interval` and `trial_interval_unit` are included, they are applied at creation.

In the response, product and product price point fields are null, and component details are returned instead.

This functionality is supported in the API, but is not currently supported in SDKs.

## Taxable Subscriptions

This endpoint will preview taxes applicable to a purchase. In order for taxes to be previewed, the following conditions must be met:

+ Taxes must be configured on the subscription
+ The preview must be for the purchase of a taxable product or component, or combination of the two.
+ The subscription payload must contain a full billing or shipping address in order to calculate tax

For more information about creating taxable previews, see our documentation guide on how to create [taxable subscriptions.](https://maxio.zendesk.com/hc/en-us/sections/24287012349325-Taxes)

You do **not** need to include a card number to generate tax information when you are previewing a subscription. However, when you actually want to create the subscription, you must include the credit card information if you want the billing address to be stored in Advanced Billing. The billing address and the credit card information are stored together within the payment profile object. Also, you may not send a billing address to Advanced Billing without payment profile information, as the address is stored on the card.

You can pass shipping and billing addresses and still decide not to calculate taxes. To do that, pass `skip_billing_manifest_taxes: true` attribute.

## Non-taxable Subscriptions

If you'd like to calculate subscriptions that do not include tax you may leave off the billing information.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.previewSubscription();
  // TODO: Handle 'response' of type SubscriptionPreviewResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CreateSubscriptionRequest](src/models/create-subscription-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionPreviewResponse](src/models/subscription-preview-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>purgeSubscription(request: Subscriptions.PurgeSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionResponse, Subscriptions.PurgeSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Purges an individual subscription for sites in test mode.

Provide the subscription ID in the url.  To confirm, supply the customer ID in the query string `ack` parameter. You may also delete the customer record and/or payment profiles by passing `cascade` parameters. For example, to delete just the customer record, the query params would be: `?ack={customer_id}&cascade[]=customer`

If you need to remove subscriptions from a live site, contact support to discuss your use case.

### Delete customer and payment profile

The query params will be: `?ack={customer_id}&cascade[]=customer&cascade[]=payment_profile`

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.purgeSubscription({ subscriptionId, ack });
  // TODO: Handle 'response' of type SubscriptionResponse
} catch (err) {
  if (err instanceof Subscriptions.PurgeSubscriptionError && err.payload.kind === "subscriptionResponse") {
    // TODO: Handle 'err.payload.body' of type SubscriptionResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>ack</code> | <code>number</code> | id of the customer. |
| <code>cascade?</code> | <code>[SubscriptionPurgeType](src/models/subscription-purge-type.ts)[]</code> | Options are "customer" or "payment_profile".<br>Use in query: `cascade[]=customer&cascade[]=payment_profile`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>

**OnError**: <code>[Subscriptions.PurgeSubscriptionError](src/resources/subscriptions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readSubscription(request: Subscriptions.ReadSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves subscription details.

If you have the new [Catalog experience](page:help/announcements/2026-announcements#new-catalog-experience-and-terminology) enabled, some subscriptions may not have an associated product. For subscriptions without an associated product, 'product', 'product_price_point_id', and 'product_price_point_type' are returned as 'null'.

## Self-Service Page token

Self-Service Page token for the subscription is not returned by default. If this information is desired, the include[]=self_service_page_token parameter must be provided with the request.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.readSubscription({ subscriptionId });
  // TODO: Handle 'response' of type SubscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>include?</code> | <code>[SubscriptionInclude](src/models/subscription-include.ts)[]</code> | Allows including additional data in the response. Use in query: `include[]=coupons&include[]=self_service_page_token`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeCouponFromSubscription(request: Subscriptions.RemoveCouponFromSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;string, Subscriptions.RemoveCouponFromSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a coupon from an existing subscription.

For more information on the expected behavior of removing a coupon from a subscription, see our documentation [here.](https://maxio.zendesk.com/hc/en-us/articles/24261259337101-Coupons-and-Subscriptions#removing-a-coupon)

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.removeCouponFromSubscription({ subscriptionId });
  // TODO: Handle 'response' of type string
} catch (err) {
  if (
    err instanceof Subscriptions.RemoveCouponFromSubscriptionError &&
      err.payload.kind === "subscriptionRemoveCouponErrors1"
  ) {
    // TODO: Handle 'err.payload.body' of type SubscriptionRemoveCouponErrors1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>couponCode?</code> | <code>string</code> | The coupon code |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[Subscriptions.RemoveCouponFromSubscriptionError](src/resources/subscriptions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePrepaidSubscriptionConfiguration(request: Subscriptions.UpdatePrepaidSubscriptionConfigurationRequest, options?: RequestOptions): ApiPromise&lt;PrepaidConfigurationResponse, Subscriptions.UpdatePrepaidSubscriptionConfigurationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a subscription's prepaid configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.updatePrepaidSubscriptionConfiguration({ subscriptionId });
  // TODO: Handle 'response' of type PrepaidConfigurationResponse
} catch (err) {
  if (
    err instanceof Subscriptions.UpdatePrepaidSubscriptionConfigurationError &&
      err.payload.kind === "prepaidConfigurationErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type PrepaidConfigurationErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>body?</code> | <code>[UpsertPrepaidConfigurationRequest](src/models/upsert-prepaid-configuration-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PrepaidConfigurationResponse](src/models/prepaid-configuration-response.ts)</code>

**OnError**: <code>[Subscriptions.UpdatePrepaidSubscriptionConfigurationError](src/resources/subscriptions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSubscription(request: Subscriptions.UpdateSubscriptionRequestParams, options?: RequestOptions): ApiPromise&lt;SubscriptionResponse, Subscriptions.UpdateSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates one or more attributes of a subscription.

## Update Subscription Payment Method

Change the card that your subscriber uses for their subscription. You can also use this method to change the expiration date of the card **if your gateway allows**.

Do not use real card information for testing. See the Sites articles that cover [testing your site setup](https://docs.maxio.com/hc/en-us/articles/24250712113165-Testing-Overview#testing-overview-0-0) for more details on testing in your sandbox.

Note that collecting and sending raw card details in production requires [PCI compliance](https://docs.maxio.com/hc/en-us/articles/24183956938381-PCI-Compliance#pci-compliance-0-0) on your end. If your business is not PCI compliant, use [Chargify.js](https://docs.maxio.com/hc/en-us/articles/38163190843789-Chargify-js-Overview#chargify-js-overview-0-0) to collect credit card or bank account information.

> Note: Partial card updates for **Authorize.Net** are not allowed via this endpoint. The existing Payment Profile must be directly updated instead.

## Update Product

You also use this method to change the subscription to a different product by setting a new value for product_handle. A product change can be done in two different ways, **product change** or **delayed product change**.

### Product Change

You can change a subscription's product. The new payment amount is calculated and charged at the normal start of the next period. If you require complex product changes or prorated upgrades and downgrades instead, please see the documentation on [Migrating Subscription Products](https://docs.maxio.com/hc/en-us/articles/24252069837581-Product-Changes-and-Migrations#product-changes-and-migrations-0-0).

To perform a product change, set either the `product_handle` or `product_id` attribute to that of a different product from the same site as the subscription. You can also change the price point by passing in either `product_price_point_id` or `product_price_point_handle` - otherwise the new product's default price point is used.

### Delayed Product Change

This method also changes the product and/or price point, and the new payment amount is calculated and charged at the normal start of the next period.

This method schedules the product change to happen automatically at the subscription’s next renewal date. To perform a delayed product change, set the `product_handle` attribute as you would in a regular product change, but also set the `product_change_delayed` attribute to `true`. No proration applies in this case.

You can also perform a delayed change to the price point by passing in either `product_price_point_id` or `product_price_point_handle`

> **Note:** To cancel a delayed product change, set `next_product_id` to an empty string.

## Billing Date Changes

You can update dates for a subscription.

### Regular Billing Date Changes

Send the `next_billing_at` to set the next billing date for the subscription. After that date passes and the subscription is processed, the following billing date will be set according to the subscription's product period.

> Note: If you pass an invalid date, the correct date is automatically set to the correct date. For example, if February 30 is passed, the next billing would be set to March 2nd in a non-leap year.

The server response will not return data under the key/value pair of `next_billing_at`. View the key/value pair of `current_period_ends_at` to verify that the `next_billing_at` date has been changed successfully.

### Calendar Billing and Snap Day Changes

For a subscription using Calendar Billing, setting the next billing date is a bit different. Send the `snap_day` attribute to change the calendar billing date for **a subscription using a product eligible for calendar billing**.

> Note: If you change the product associated with a subscription that contains a `snap_day` and immediately READ/GET the subscription data, it will still contain the original `snap_day`. The `snap_day` will be reset to `null` on the next billing cycle. This is because a product change is instantaneous and only affects the product associated with a subscription.

If you have the new [Catalog experience](page:help/announcements/2026-announcements#new-catalog-experience-and-terminology) enabled, some subscriptions may not have an associated product. For subscriptions without an associated product, `product`, `product_price_point_id`, and `product_price_point_type` are returned as `null`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.updateSubscription({ subscriptionId });
  // TODO: Handle 'response' of type SubscriptionResponse
} catch (err) {
  if (err instanceof Subscriptions.UpdateSubscriptionError && err.payload.kind === "errorListResponse1") {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>body?</code> | <code>[UpdateSubscriptionRequest](src/models/update-subscription-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>

**OnError**: <code>[Subscriptions.UpdateSubscriptionError](src/resources/subscriptions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SubscriptionComponents

> Source: [SubscriptionComponents](src/resources/subscription-components.ts)

<details>
<summary><code>activateEventBasedComponent(request: SubscriptionComponents.ActivateEventBasedComponentRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Activates an event-based component for a single subscription.

In order to bill your subscribers on your Events data under the Events-Based Billing feature, the components must be activated for the subscriber.

Learn more about the role of activation in the [Events-Based Billing docs](https://maxio.zendesk.com/hc/en-us/articles/24260323329805-Events-Based-Billing-Overview).

Use this endpoint to activate an event-based component for a single subscription. Activating an event-based component causes Advanced Billing to bill for events when the subscription is renewed.

*Note: it is possible to stream events for a subscription at any time, regardless of component activation status. The activation status only determines if the subscription should be billed for event-based component usage at renewal.*

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.subscriptionComponents.activateEventBasedComponent({ subscriptionId, componentId });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Advanced Billing id of the subscription |
| <code>componentId</code> | <code>number</code> | The Advanced Billing id of the component |
| <code>body?</code> | <code>[ActivateEventBasedComponent](src/models/activate-event-based-component.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>allocateComponent(request: SubscriptionComponents.AllocateComponentRequest, options?: RequestOptions): ApiPromise&lt;AllocationResponse, SubscriptionComponents.AllocateComponentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an allocation, sets the current allocated quantity for the component, and records a memo. Allocations can only be updated for Quantity, On/Off, and Prepaid Components.

When creating an allocation via the API, you can pass the `upgrade_charge`, `downgrade_credit`, and `accrue_charge` to be applied.

> **Note:** These proration and accrual fields are ignored for Prepaid Components since this component type always generates charges immediately without proration.

For information on prorated components and upgrade/downgrade schemes, see [Setting Component Allocations.](https://maxio.zendesk.com/hc/en-us/articles/24251906165133-Component-Allocations-Proration)

### Order of Resolution for upgrade_charge and downgrade_credit

1. Per allocation in API call (within a single allocation of the `allocations` array)
2. [Component-level default value](https://maxio.zendesk.com/hc/en-us/articles/24251883961485-Component-Allocations-Overview)
3. Allocation API call top level (outside of the `allocations` array)
4. [Site-level default value](https://maxio.zendesk.com/hc/en-us/articles/24251906165133-Component-Allocations-Proration#proration-schemes)

### Order of Resolution for accrue charge

1. Allocation API call top level (outside of the `allocations` array)
2. [Site-level default value](https://maxio.zendesk.com/hc/en-us/articles/24251906165133-Component-Allocations-Proration#proration-schemes)

> **Note:** Proration uses the current price of the component as well as the current tax rates. Changes to either may cause the prorated charge/credit to be wrong.

For more information, see the [Component Allocations](https://maxio.zendesk.com/hc/en-us/articles/24251883961485-Component-Allocations-Overview) product Documentation.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionComponents.allocateComponent({ subscriptionId, componentId });
  // TODO: Handle 'response' of type AllocationResponse
} catch (err) {
  if (
    err instanceof SubscriptionComponents.AllocateComponentError && err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>componentId</code> | <code>number</code> | The Advanced Billing id of the component |
| <code>body?</code> | <code>[CreateAllocationRequest](src/models/create-allocation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AllocationResponse](src/models/allocation-response.ts)</code>

**OnError**: <code>[SubscriptionComponents.AllocateComponentError](src/resources/subscription-components.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>allocateComponents(request: SubscriptionComponents.AllocateComponentsRequest, options?: RequestOptions): ApiPromise&lt;AllocationResponse[], SubscriptionComponents.AllocateComponentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates multiple allocations, sets the current allocated quantity for each of the components, and records a memo.   A `component_id` is required for each allocation.

The charges and/or credits that are created will be rolled up into a single total which is used to determine whether this is an upgrade or a downgrade.

### Order of Resolution for upgrade_charge and downgrade_credit

1. Per allocation in API call (within a single allocation of the `allocations` array)
2. [Component-level default value](https://maxio.zendesk.com/hc/en-us/articles/24251883961485-Component-Allocations-Overview)
3. Allocation API call top level (outside of the `allocations` array)
4. [Site-level default value](https://maxio.zendesk.com/hc/en-us/articles/24251906165133-Component-Allocations-Proration#proration-schemes)

### Order of Resolution for accrue charge

1. Allocation API call top level (outside of the `allocations` array)
2. [Site-level default value](https://maxio.zendesk.com/hc/en-us/articles/24251906165133-Component-Allocations-Proration#proration-schemes)

> **Note:** Proration uses the current price of the component as well as the current tax rates. Changes to either may cause the prorated charge/credit to be wrong.

For more information, see the [Component Allocations](https://maxio.zendesk.com/hc/en-us/articles/24251883961485-Component-Allocations-Overview) product documentation.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionComponents.allocateComponents({ subscriptionId });
  // TODO: Handle 'response' of type AllocationResponse[]
} catch (err) {
  if (err instanceof SubscriptionComponents.AllocateComponentsError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>body?</code> | <code>[AllocateComponents](src/models/allocate-components.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AllocationResponse](src/models/allocation-response.ts)[]</code>

**OnError**: <code>[SubscriptionComponents.AllocateComponentsError](src/resources/subscription-components.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkRecordEvents(request: SubscriptionComponents.BulkRecordEventsRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Records a collection of events.

*Note: this endpoint differs from the standard Chargify API endpoints in that the subdomain will be `events` and your site subdomain will be included in the URL path.*

A maximum of 1000 events can be published in a single request. A 422 will be returned if this limit is exceeded.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.subscriptionComponents.bulkRecordEvents({ apiHandle });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiHandle</code> | <code>string</code> | Identifies the Stream for which the events should be published. |
| <code>storeUid?</code> | <code>string</code> | If you've attached your own Keen project as an Advanced Billing event data-store, use this parameter to indicate the data-store. |
| <code>body?</code> | <code>[EbbEvent](src/models/ebb-event.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkResetSubscriptionComponentsPricePoints(request: SubscriptionComponents.BulkResetSubscriptionComponentsPricePointsRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resets all of a subscription's components to use the current default.

**Note**: this will update the price point for all of the subscription's components, even ones that have not been allocated yet.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionComponents.bulkResetSubscriptionComponentsPricePoints({
    subscriptionId,
  });
  // TODO: Handle 'response' of type SubscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkUpdateSubscriptionComponentsPricePoints(request: SubscriptionComponents.BulkUpdateSubscriptionComponentsPricePointsRequest, options?: RequestOptions): ApiPromise&lt;BulkComponentsPricePointAssignment, SubscriptionComponents.BulkUpdateSubscriptionComponentsPricePointsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the price points on one or more of a subscription's components.

The `price_point` key can take either a:
1. Price point id (integer)
2. Price point handle (string)
3. `"_default"` string, which will reset the price point to the component's current default price point.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionComponents.bulkUpdateSubscriptionComponentsPricePoints({
    subscriptionId,
  });
  // TODO: Handle 'response' of type BulkComponentsPricePointAssignment
} catch (err) {
  if (
    err instanceof SubscriptionComponents.BulkUpdateSubscriptionComponentsPricePointsError &&
      err.payload.kind === "componentPricePointError1"
  ) {
    // TODO: Handle 'err.payload.body' of type ComponentPricePointError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>body?</code> | <code>[BulkComponentsPricePointAssignment](src/models/bulk-components-price-point-assignment.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkComponentsPricePointAssignment](src/models/bulk-components-price-point-assignment.ts)</code>

**OnError**: <code>[SubscriptionComponents.BulkUpdateSubscriptionComponentsPricePointsError](src/resources/subscription-components.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createUsage(request: SubscriptionComponents.CreateUsageRequestParams, options?: RequestOptions): ApiPromise&lt;UsageResponse, SubscriptionComponents.CreateUsageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Records an instance of metered or prepaid usage for a subscription.

You can report metered or prepaid usage to Advanced Billing as often as you wish. You can report usage as it happens or periodically, such as each night or once per billing period. 

Full documentation on how to create Components in the Advanced Billing UI can be located [here](https://maxio.zendesk.com/hc/en-us/articles/24261149711501-Create-Edit-and-Archive-Components). Additionally, for information on how to record component usage against a subscription, see the following resources:

It is not possible to record metered usage for more than one component at a time. Usage should be reported as one API call per component on a single subscription. For example, to record that a subscriber has sent both an SMS Message and an Email, send an API call for each.        

See the following product documentation articles for more information:

- [Create and Manage Components](https://maxio.zendesk.com/hc/en-us/articles/24261149711501-Create-Edit-and-Archive-Components)
- [Recording Metered Component Usage](https://maxio.zendesk.com/hc/en-us/articles/24251890500109-Reporting-Component-Allocations#reporting-metered-component-usage)
- [Reporting Prepaid Component Status](https://maxio.zendesk.com/hc/en-us/articles/24251890500109-Reporting-Component-Allocations#reporting-prepaid-component-status)

The `quantity` from usage for each component is accumulated to the `unit_balance` on the [Component Line Item]($e/Subscription%20Components/readSubscriptionComponent) for the subscription.

## Price Point ID usage

If you are using price points, for metered and prepaid usage components Advanced Billing gives you the option to specify a price point in your request.

You do not need to specify a price point ID. If a price point is not included, the default price point for the component will be used when the usage is recorded.

## Deducting Usage

If you need to reverse a previous usage report or otherwise deduct from the current usage balance, you can provide a negative quantity.

Example:

Previously recorded quantity was 5000:

```json
{
  "usage": {
    "quantity": 5000,
    "memo": "Recording 5000 units"
  }
}
```

To reduce the quantity to `0`, POST the following payload:

```json
{
  "usage": {
    "quantity": -5000,
    "memo": "Deducting 5000 units"
  }
}
```
The `unit_balance` has a floor of `0`; negative unit balances are never allowed. For example, if the usage balance is 100 and you deduct 200 units, the unit balance would then be `0`, not `-100`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionComponents.createUsage({
    subscriptionIdOrReference,
    componentId,
  });
  // TODO: Handle 'response' of type UsageResponse
} catch (err) {
  if (err instanceof SubscriptionComponents.CreateUsageError && err.payload.kind === "errorListResponse1") {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionIdOrReference</code> | <code>[SubscriptionIdOrReference](src/models/unions/subscription-id-or-reference.ts)</code> | Either the Advanced Billing subscription ID (integer) or the subscription reference (string). Important: In cases where a numeric string value matches both an existing subscription ID and an existing subscription reference, the system will prioritize the subscription ID lookup. For example, if both subscription ID 123 and subscription reference "123" exist, passing "123" will return the subscription with ID 123. |
| <code>componentId</code> | <code>[ComponentIdModel](src/models/unions/component-id-model.ts)</code> | Either the Advanced Billing id for the component or the component's handle prefixed by `handle:` |
| <code>body?</code> | <code>[CreateUsageRequest](src/models/create-usage-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsageResponse](src/models/usage-response.ts)</code>

**OnError**: <code>[SubscriptionComponents.CreateUsageError](src/resources/subscription-components.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deactivateEventBasedComponent(request: SubscriptionComponents.DeactivateEventBasedComponentRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deactivates an event-based component for a single subscription. Deactivating the event-based component causes Advanced Billing to ignore related events at subscription renewal.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.subscriptionComponents.deactivateEventBasedComponent({ subscriptionId, componentId });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Advanced Billing id of the subscription |
| <code>componentId</code> | <code>number</code> | The Advanced Billing id of the component |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletePrepaidUsageAllocation(request: SubscriptionComponents.DeletePrepaidUsageAllocationRequest, options?: RequestOptions): ApiPromise&lt;undefined, SubscriptionComponents.DeletePrepaidUsageAllocationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a prepaid usage allocation.

Prepaid Usage components are unique in that their allocations are always additive. In order to reduce a subscription's allocated quantity for a prepaid usage component, each allocation must be destroyed individually via this endpoint.

## Credit Scheme

By default, destroying an allocation will generate a service credit on the subscription. This behavior can be modified with the optional `credit_scheme` parameter on this endpoint. The accepted values are:

1. `none`: The allocation will be destroyed and the balances will be updated but no service credit or refund will be created.
2. `credit`: The allocation will be destroyed and the balances will be updated and a service credit will be generated. This is also the default behavior if the `credit_scheme` param is not passed.
3. `refund`: The allocation will be destroyed and the balances will be updated and a refund will be issued along with a Credit Note.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.subscriptionComponents.deletePrepaidUsageAllocation({
    subscriptionId,
    componentId,
    allocationId,
  });
} catch (err) {
  if (
    err instanceof SubscriptionComponents.DeletePrepaidUsageAllocationError && err.payload.kind === "error404"
  ) {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>componentId</code> | <code>number</code> | The Advanced Billing id of the component |
| <code>allocationId</code> | <code>number</code> | The Advanced Billing id of the allocation |
| <code>body?</code> | <code>[CreditSchemeRequest](src/models/credit-scheme-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[SubscriptionComponents.DeletePrepaidUsageAllocationError](src/resources/subscription-components.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAllocations(request: SubscriptionComponents.ListAllocationsRequest, options?: RequestOptions): ApiPromise&lt;AllocationResponse[], SubscriptionComponents.ListAllocationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the 50 most recent Allocations, ordered by most recent first.

## On/Off Components

When a subscription's on/off component has been toggled to on (`1`) or off (`0`), usage will be logged in this response.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionComponents.listAllocations({ subscriptionId, componentId });
  // TODO: Handle 'response' of type AllocationResponse[]
} catch (err) {
  if (err instanceof SubscriptionComponents.ListAllocationsError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>componentId</code> | <code>number</code> | The Advanced Billing id of the component |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AllocationResponse](src/models/allocation-response.ts)[]</code>

**OnError**: <code>[SubscriptionComponents.ListAllocationsError](src/resources/subscription-components.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSubscriptionComponents(request: SubscriptionComponents.ListSubscriptionComponentsRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionComponentResponse[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists a subscription's applied components.

## Archived Components

When requesting to list components for a given subscription, if the subscription contains **archived** components they will be listed in the server response.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionComponents.listSubscriptionComponents({ subscriptionId });
  // TODO: Handle 'response' of type SubscriptionComponentResponse[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>dateField?</code> | <code>[SubscriptionListDateField](src/models/subscription-list-date-field.ts)</code> | The type of filter you'd like to apply to your search. Use in query `date_field=updated_at`. |
| <code>direction?</code> | <code>[SortingDirection](src/models/sorting-direction.ts)</code> | Controls the order in which results are returned.<br>Use in query `direction=asc`. |
| <code>filter?</code> | <code>[ListSubscriptionComponentsFilter](src/models/list-subscription-components-filter.ts)</code> | Filter to use for List Subscription Components operation |
| <code>endDate?</code> | <code>string</code> | The end date (format YYYY-MM-DD) with which to filter the date_field. Returns components with a timestamp up to and including 11:59:59PM in your site’s time zone on the date specified. |
| <code>endDatetime?</code> | <code>string</code> | The end date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns components with a timestamp at or before exact time provided in query. You can specify timezone in query - otherwise your site''s time zone will be used. If provided, this parameter will be used instead of end_date. |
| <code>pricePointIds?</code> | <code>[IncludeNotNull](src/models/include-not-null.ts)</code> | Allows fetching components allocation only if price point id is present. Use in query `price_point_ids=not_null`. |
| <code>productFamilyIds?</code> | <code>number[]</code> | Allows fetching components allocation with matching product family id based on provided ids. Use in query `product_family_ids=1,2,3`. |
| <code>sort?</code> | <code>[ListSubscriptionComponentsSort](src/models/list-subscription-components-sort.ts)</code> | The attribute by which to sort. Use in query `sort=updated_at`. |
| <code>startDate?</code> | <code>string</code> | The start date (format YYYY-MM-DD) with which to filter the date_field. Returns components with a timestamp at or after midnight (12:00:00 AM) in your site’s time zone on the date specified. |
| <code>startDatetime?</code> | <code>string</code> | The start date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns components with a timestamp at or after exact time provided in query. You can specify timezone in query - otherwise your site''s time zone will be used. If provided, this parameter will be used instead of start_date. |
| <code>include?</code> | <code>[ListSubscriptionComponentsInclude](src/models/list-subscription-components-include.ts)[]</code> | Allows including additional data in the response. Use in query `include=subscription,historic_usages`. |
| <code>inUse?</code> | <code>boolean</code> | If in_use is set to true, it returns only components that are currently in use. However, if it's set to false or not provided, it returns all components connected with the subscription. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionComponentResponse](src/models/subscription-component-response.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSubscriptionComponentsForSite(request: SubscriptionComponents.ListSubscriptionComponentsForSiteRequest, options?: RequestOptions): ApiPromise&lt;ListSubscriptionComponentsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists components applied to each subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionComponents.listSubscriptionComponentsForSite();
  // TODO: Handle 'response' of type ListSubscriptionComponentsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| <code>sort?</code> | <code>[ListSubscriptionComponentsSort](src/models/list-subscription-components-sort.ts)</code> | The attribute by which to sort. Use in query: `sort=updated_at`. |
| <code>direction?</code> | <code>[SortingDirection](src/models/sorting-direction.ts)</code> | Controls the order in which results are returned.<br>Use in query `direction=asc`. |
| <code>filter?</code> | <code>[ListSubscriptionComponentsForSiteFilter](src/models/list-subscription-components-for-site-filter.ts)</code> | Filter to use for List Subscription Components For Site operation |
| <code>dateField?</code> | <code>[SubscriptionListDateField](src/models/subscription-list-date-field.ts)</code> | The type of filter you'd like to apply to your search. Use in query: `date_field=updated_at`. |
| <code>startDate?</code> | <code>string</code> | The start date (format YYYY-MM-DD) with which to filter the date_field. Returns components with a timestamp at or after midnight (12:00:00 AM) in your site’s time zone on the date specified. Use in query `start_date=2011-12-15`. |
| <code>startDatetime?</code> | <code>string</code> | The start date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns components with a timestamp at or after exact time provided in query. You can specify timezone in query - otherwise your site''s time zone will be used. If provided, this parameter will be used instead of start_date. Use in query `start_datetime=2022-07-01 09:00:05`. |
| <code>endDate?</code> | <code>string</code> | The end date (format YYYY-MM-DD) with which to filter the date_field. Returns components with a timestamp up to and including 11:59:59PM in your site’s time zone on the date specified. Use in query `end_date=2011-12-16`. |
| <code>endDatetime?</code> | <code>string</code> | The end date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns components with a timestamp at or before exact time provided in query. You can specify timezone in query - otherwise your site''s time zone will be used. If provided, this parameter will be used instead of end_date. Use in query `end_datetime=2022-07-01 09:00:05`. |
| <code>subscriptionIds?</code> | <code>number[]</code> | Allows fetching components allocation with matching subscription id based on provided ids. Use in query `subscription_ids=1,2,3`. |
| <code>pricePointIds?</code> | <code>[IncludeNotNull](src/models/include-not-null.ts)</code> | Allows fetching components allocation only if price point id is present. Use in query `price_point_ids=not_null`. |
| <code>productFamilyIds?</code> | <code>number[]</code> | Allows fetching components allocation with matching product family id based on provided ids. Use in query `product_family_ids=1,2,3`. |
| <code>include?</code> | <code>[ListSubscriptionComponentsInclude](src/models/list-subscription-components-include.ts)</code> | Allows including additional data in the response. Use in query `include=subscription,historic_usages`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListSubscriptionComponentsResponse](src/models/list-subscription-components-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listUsages(request: SubscriptionComponents.ListUsagesRequest, options?: RequestOptions): ApiPromise&lt;UsageResponse[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists usages associated with a subscription for a particular metered component. This will display the previously recorded components for a subscription.

This endpoint is not compatible with quantity-based components.

## Since Date and Until Date Usage

Note: The `since_date` and `until_date` attributes each default to midnight on the date specified. For example, in order to list usages for January 20th, you would need to append the following to the URL.

```
?since_date=2016-01-20&until_date=2016-01-21
```

## Read Usage by Handle

Use this endpoint to read the previously recorded components for a subscription.  You can now specify either the component id (integer) or the component handle prefixed by "handle:" to specify the unique identifier for the component you are working with.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionComponents.listUsages({ subscriptionIdOrReference, componentId });
  // TODO: Handle 'response' of type UsageResponse[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionIdOrReference</code> | <code>[SubscriptionIdOrReference](src/models/unions/subscription-id-or-reference.ts)</code> | Either the Advanced Billing subscription ID (integer) or the subscription reference (string). Important: In cases where a numeric string value matches both an existing subscription ID and an existing subscription reference, the system will prioritize the subscription ID lookup. For example, if both subscription ID 123 and subscription reference "123" exist, passing "123" will return the subscription with ID 123. |
| <code>componentId</code> | <code>[ComponentIdModel](src/models/unions/component-id-model.ts)</code> | Either the Advanced Billing id for the component or the component's handle prefixed by `handle:` |
| <code>sinceId?</code> | <code>number</code> | Returns usages with an id greater than or equal to the one specified. |
| <code>maxId?</code> | <code>number</code> | Returns usages with an id less than or equal to the one specified. |
| <code>sinceDate?</code> | <code>string</code> (date) | Returns usages with a created_at date greater than or equal to midnight (12:00 AM) on the date specified. |
| <code>untilDate?</code> | <code>string</code> (date) | Returns usages with a created_at date less than or equal to midnight (12:00 AM) on the date specified. |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsageResponse](src/models/usage-response.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>previewAllocations(request: SubscriptionComponents.PreviewAllocationsRequestParams, options?: RequestOptions): ApiPromise&lt;AllocationPreviewResponse, SubscriptionComponents.PreviewAllocationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Previews a potential subscription's **quantity-based** or **on/off** component allocation in the middle of the current billing period.  This is useful if you want users to be able to see the effect of a component operation before actually doing it.

## Fine-grained Component Control: Use with multiple `upgrade_charge`s or `downgrade_credits`

When the allocation uses multiple different types of `upgrade_charge`s or `downgrade_credit`s, the Allocation is viewed as an Allocation which uses "Fine-Grained Component Control". As a result, the response will not include `direction` and `proration` within the `allocation_preview`, but at the `line_items` and `allocations` level respectfully.

See example below for Fine-Grained Component Control response.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionComponents.previewAllocations({ subscriptionId });
  // TODO: Handle 'response' of type AllocationPreviewResponse
} catch (err) {
  if (
    err instanceof SubscriptionComponents.PreviewAllocationsError &&
      err.payload.kind === "componentAllocationError1"
  ) {
    // TODO: Handle 'err.payload.body' of type ComponentAllocationError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>body?</code> | <code>[PreviewAllocationsRequest](src/models/preview-allocations-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AllocationPreviewResponse](src/models/allocation-preview-response.ts)</code>

**OnError**: <code>[SubscriptionComponents.PreviewAllocationsError](src/resources/subscription-components.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readSubscriptionComponent(request: SubscriptionComponents.ReadSubscriptionComponentRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionComponentResponse, SubscriptionComponents.ReadSubscriptionComponentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information for a specific component on a subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionComponents.readSubscriptionComponent({
    subscriptionId,
    componentId,
  });
  // TODO: Handle 'response' of type SubscriptionComponentResponse
} catch (err) {
  if (
    err instanceof SubscriptionComponents.ReadSubscriptionComponentError && err.payload.kind === "error404"
  ) {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>componentId</code> | <code>number</code> | The Advanced Billing id of the component. Alternatively, the component's handle prefixed by `handle:` |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionComponentResponse](src/models/subscription-component-response.ts)</code>

**OnError**: <code>[SubscriptionComponents.ReadSubscriptionComponentError](src/resources/subscription-components.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>recordEvent(request: SubscriptionComponents.RecordEventRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Records a single event for Events-Based Billing.

## Documentation

Events-Based Billing is an evolved form of metered billing that is based on data-rich events streamed in real-time from your system to Advanced Billing.

These events can then be transformed, enriched, or analyzed to form the computed totals of usage charges billed to your customers.

This API allows you to stream events into the Advanced Billing data ingestion engine.

Learn more about the feature in general in the [Events-Based Billing help docs](https://maxio.zendesk.com/hc/en-us/articles/24260323329805-Events-Based-Billing-Overview).

## Record Event

Use this endpoint to record a single event.

*Note: this endpoint differs from the standard Chargify API endpoints in that the URL subdomain will be `events` and your site subdomain will be included in the URL path. For example:*

```
https://events.chargify.com/my-site-subdomain/events/my-stream-api-handle
```

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.subscriptionComponents.recordEvent({ apiHandle });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiHandle</code> | <code>string</code> | Identifies the Stream for which the event should be published. |
| <code>storeUid?</code> | <code>string</code> | If you've attached your own Keen project as an Advanced Billing event data-store, use this parameter to indicate the data-store. |
| <code>body?</code> | <code>[EbbEvent](src/models/ebb-event.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePrepaidUsageAllocationExpirationDate(request: SubscriptionComponents.UpdatePrepaidUsageAllocationExpirationDateRequest, options?: RequestOptions): ApiPromise&lt;undefined, SubscriptionComponents.UpdatePrepaidUsageAllocationExpirationDateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the expiration date for a prepaid usage allocation. This expiration date can be changed after the fact to allow for extending or shortening the allocation's active window.

In order to change a prepaid usage allocation's expiration date, a PUT call must be made to the allocation's endpoint with a new expiration date.

## Limitations

A few limitations exist when changing an allocation's expiration date:

- An expiration date can only be changed for an allocation that belongs to a price point with expiration interval options explicitly set.
- An expiration date can be changed towards the future with no limitations.
- An expiration date can be changed towards the past (essentially expiring it) up to the subscription's current period beginning date.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.subscriptionComponents.updatePrepaidUsageAllocationExpirationDate({
    subscriptionId,
    componentId,
    allocationId,
  });
} catch (err) {
  if (
    err instanceof SubscriptionComponents.UpdatePrepaidUsageAllocationExpirationDateError &&
      err.payload.kind === "error404"
  ) {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>componentId</code> | <code>number</code> | The Advanced Billing id of the component |
| <code>allocationId</code> | <code>number</code> | The Advanced Billing id of the allocation |
| <code>body?</code> | <code>[UpdateAllocationExpirationDate](src/models/update-allocation-expiration-date.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[SubscriptionComponents.UpdatePrepaidUsageAllocationExpirationDateError](src/resources/subscription-components.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SubscriptionGroups

> Source: [SubscriptionGroups](src/resources/subscription-groups.ts)

<details>
<summary><code>addSubscriptionToGroup(request: SubscriptionGroups.AddSubscriptionToGroupRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionGroupResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds an existing subscription to a subscription group. For sites making use of the [Relationship Billing](https://maxio.zendesk.com/hc/en-us/articles/24252287829645-Advanced-Billing-Invoices-Overview) and [Customer Hierarchy](https://maxio.zendesk.com/hc/en-us/articles/24252185211533-Customer-Hierarchies-WhoPays#customer-hierarchies) features, it is possible to add existing subscriptions to subscription groups.

Passing `group` parameters with a `target` containing a `type` and optional `id` is all that's needed. When the `target` parameter specifies a `"customer"` or `"subscription"` that is already part of a hierarchy, the subscription will become a member of the customer's subscription group.  If the target customer or subscription is not part of a subscription group, a new group will be created and the subscription will become part of the group with the specified target customer set as the responsible payer for the group's subscriptions.

**Note:** In order to add an existing subscription to a subscription group, it must belong to either the same customer record as the target, or be within the same customer hierarchy.

Rather than specifying a customer, the `target` parameter could instead simply have a value of
* `"self"` which indicates the subscription will be paid for not by some other customer, but by the subscribing customer,
* `"parent"` which indicates the subscription will be paid for by the subscribing customer's parent within a customer hierarchy, or
* `"eldest"` which indicates the subscription will be paid for by the root-level customer in the subscribing customer's hierarchy.

To create a new subscription into a subscription group, reference the following:
[Create Subscription in a Subscription Group](https://developers.chargify.com/docs/api-docs/d571659cf0f24-create-subscription#subscription-in-a-subscription-group)


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionGroups.addSubscriptionToGroup({ subscriptionId });
  // TODO: Handle 'response' of type SubscriptionGroupResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>body?</code> | <code>[AddSubscriptionToAGroup](src/models/add-subscription-to-agroup.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionGroupResponse](src/models/subscription-group-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createSubscriptionGroup(request: SubscriptionGroups.CreateSubscriptionGroupRequestParams, options?: RequestOptions): ApiPromise&lt;SubscriptionGroupResponse, SubscriptionGroups.CreateSubscriptionGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a subscription group with given members.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionGroups.createSubscriptionGroup();
  // TODO: Handle 'response' of type SubscriptionGroupResponse
} catch (err) {
  if (
    err instanceof SubscriptionGroups.CreateSubscriptionGroupError &&
      err.payload.kind === "subscriptionGroupCreateErrorResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type SubscriptionGroupCreateErrorResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CreateSubscriptionGroupRequest](src/models/create-subscription-group-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionGroupResponse](src/models/subscription-group-response.ts)</code>

**OnError**: <code>[SubscriptionGroups.CreateSubscriptionGroupError](src/resources/subscription-groups.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSubscriptionGroup(request: SubscriptionGroups.DeleteSubscriptionGroupRequest, options?: RequestOptions): ApiPromise&lt;DeleteSubscriptionGroupResponse, SubscriptionGroups.DeleteSubscriptionGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a subscription group.
 Only groups without members can be deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionGroups.deleteSubscriptionGroup({ uid });
  // TODO: Handle 'response' of type DeleteSubscriptionGroupResponse
} catch (err) {
  if (err instanceof SubscriptionGroups.DeleteSubscriptionGroupError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>string</code> | The uid of the subscription group |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteSubscriptionGroupResponse](src/models/delete-subscription-group-response.ts)</code>

**OnError**: <code>[SubscriptionGroups.DeleteSubscriptionGroupError](src/resources/subscription-groups.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>findSubscriptionGroup(request: SubscriptionGroups.FindSubscriptionGroupRequest, options?: RequestOptions): ApiPromise&lt;FullSubscriptionGroupResponse, SubscriptionGroups.FindSubscriptionGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Finds the subscription group associated with a subscription.

If the subscription is not in a group, the endpoint will return a 404 code.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionGroups.findSubscriptionGroup({ subscriptionId });
  // TODO: Handle 'response' of type FullSubscriptionGroupResponse
} catch (err) {
  if (err instanceof SubscriptionGroups.FindSubscriptionGroupError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | The Advanced Billing id of the subscription associated with the subscription group |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FullSubscriptionGroupResponse](src/models/full-subscription-group-response.ts)</code>

**OnError**: <code>[SubscriptionGroups.FindSubscriptionGroupError](src/resources/subscription-groups.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSubscriptionGroups(request: SubscriptionGroups.ListSubscriptionGroupsRequest, options?: RequestOptions): ApiPromise&lt;ListSubscriptionGroupsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists subscription groups for the site. The response is paginated and will return a `meta` key with pagination information.

#### Account Balance Information

Account balance information for the subscription groups is not returned by default. If this information is desired, the `include[]=account_balances` parameter must be provided with the request.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionGroups.listSubscriptionGroups();
  // TODO: Handle 'response' of type ListSubscriptionGroupsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| <code>include?</code> | <code>[SubscriptionGroupsListInclude](src/models/subscription-groups-list-include.ts)[]</code> | A list of additional information to include in the response. The following values are supported:<br><br>- `account_balances`: Account balance information for the subscription groups. Use in query: `include[]=account_balances` |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListSubscriptionGroupsResponse](src/models/list-subscription-groups-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readSubscriptionGroup(request: SubscriptionGroups.ReadSubscriptionGroupRequest, options?: RequestOptions): ApiPromise&lt;FullSubscriptionGroupResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns subscription group details.

#### Current Billing Amount in Cents

Current billing amount for the subscription group is not returned by default. If this information is desired, the `include[]=current_billing_amount_in_cents` parameter must be provided with the request.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionGroups.readSubscriptionGroup({ uid });
  // TODO: Handle 'response' of type FullSubscriptionGroupResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>string</code> | The uid of the subscription group |
| <code>include?</code> | <code>[SubscriptionGroupInclude](src/models/subscription-group-include.ts)[]</code> | Allows including additional data in the response. Use in query: `include[]=current_billing_amount_in_cents`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FullSubscriptionGroupResponse](src/models/full-subscription-group-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeSubscriptionFromGroup(request: SubscriptionGroups.RemoveSubscriptionFromGroupRequest, options?: RequestOptions): ApiPromise&lt;undefined, SubscriptionGroups.RemoveSubscriptionFromGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes an existing subscription from a subscription group. For sites making use of the [Relationship Billing](https://maxio.zendesk.com/hc/en-us/articles/24252287829645-Advanced-Billing-Invoices-Overview) and [Customer Hierarchy](https://maxio.zendesk.com/hc/en-us/articles/24252185211533-Customer-Hierarchies-WhoPays#customer-hierarchies) features, it is possible to remove an existing subscription from a subscription group.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.subscriptionGroups.removeSubscriptionFromGroup({ subscriptionId });
} catch (err) {
  if (err instanceof SubscriptionGroups.RemoveSubscriptionFromGroupError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[SubscriptionGroups.RemoveSubscriptionFromGroupError](src/resources/subscription-groups.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>signupWithSubscriptionGroup(request: SubscriptionGroups.SignupWithSubscriptionGroupRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionGroupSignupResponse, SubscriptionGroups.SignupWithSubscriptionGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates multiple subscriptions at once under the same customer and consolidates them into a subscription group.

You must provide one and only one of the `payer_id`/`payer_reference`/`payer_attributes` for the customer attached to the group.

You must provide one and only one of the `payment_profile_id`/`credit_card_attributes`/`bank_account_attributes` for the payment profile attached to the group.

Only one of the `subscriptions` can have `"primary": true` attribute set.

When passing a product to a subscription you can use either `product_id` or `product_handle` or `offer_id`. You can also use `custom_price` instead.
The subscription request examples below will be split into two sections.
The first section, "Subscription Customization", will focus on passing different information with a subscription, such as components, calendar billing, and custom fields. These examples will presume you are using a secure chargify_token generated by Maxio.js (formerly Chargify.js).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionGroups.signupWithSubscriptionGroup();
  // TODO: Handle 'response' of type SubscriptionGroupSignupResponse
} catch (err) {
  if (
    err instanceof SubscriptionGroups.SignupWithSubscriptionGroupError &&
      err.payload.kind === "subscriptionGroupSignupErrorResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type SubscriptionGroupSignupErrorResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[SubscriptionGroupSignupRequest](src/models/subscription-group-signup-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionGroupSignupResponse](src/models/subscription-group-signup-response.ts)</code>

**OnError**: <code>[SubscriptionGroups.SignupWithSubscriptionGroupError](src/resources/subscription-groups.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSubscriptionGroupMembers(request: SubscriptionGroups.UpdateSubscriptionGroupMembersRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionGroupResponse, SubscriptionGroups.UpdateSubscriptionGroupMembersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates subscription group members.
`"member_ids"` should contain an array of both subscription IDs to set as group members and subscription IDs already present in the groups. Not including them will result in removing them from the subscription group. To clean up members, just leave the array empty.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionGroups.updateSubscriptionGroupMembers({ uid });
  // TODO: Handle 'response' of type SubscriptionGroupResponse
} catch (err) {
  if (
    err instanceof SubscriptionGroups.UpdateSubscriptionGroupMembersError &&
      err.payload.kind === "subscriptionGroupUpdateErrorResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type SubscriptionGroupUpdateErrorResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>string</code> | The uid of the subscription group |
| <code>body?</code> | <code>[UpdateSubscriptionGroupRequest](src/models/update-subscription-group-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionGroupResponse](src/models/subscription-group-response.ts)</code>

**OnError**: <code>[SubscriptionGroups.UpdateSubscriptionGroupMembersError](src/resources/subscription-groups.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SubscriptionGroupInvoiceAccount

> Source: [SubscriptionGroupInvoiceAccount](src/resources/subscription-group-invoice-account.ts)

<details>
<summary><code>createSubscriptionGroupPrepayment(request: SubscriptionGroupInvoiceAccount.CreateSubscriptionGroupPrepaymentRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionGroupPrepaymentResponse, SubscriptionGroupInvoiceAccount.CreateSubscriptionGroupPrepaymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a prepayment for a subscription group. This endpoint requires an `amount`, `details`, `method`, and `memo`. On success, the prepayment will be added to the group's prepayment balance.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionGroupInvoiceAccount.createSubscriptionGroupPrepayment({ uid });
  // TODO: Handle 'response' of type SubscriptionGroupPrepaymentResponse
} catch (err) {
  if (
    err instanceof SubscriptionGroupInvoiceAccount.CreateSubscriptionGroupPrepaymentError &&
      err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>string</code> | The uid of the subscription group |
| <code>body?</code> | <code>[SubscriptionGroupPrepaymentRequest](src/models/subscription-group-prepayment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionGroupPrepaymentResponse](src/models/subscription-group-prepayment-response.ts)</code>

**OnError**: <code>[SubscriptionGroupInvoiceAccount.CreateSubscriptionGroupPrepaymentError](src/resources/subscription-group-invoice-account.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deductSubscriptionGroupServiceCredit(request: SubscriptionGroupInvoiceAccount.DeductSubscriptionGroupServiceCreditRequest, options?: RequestOptions): ApiPromise&lt;ServiceCredit, SubscriptionGroupInvoiceAccount.DeductSubscriptionGroupServiceCreditError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deducts service credit for a subscription group. Credit will be deducted from the group in the amount specified in the request body.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionGroupInvoiceAccount.deductSubscriptionGroupServiceCredit({ uid });
  // TODO: Handle 'response' of type ServiceCredit
} catch (err) {
  if (
    err instanceof SubscriptionGroupInvoiceAccount.DeductSubscriptionGroupServiceCreditError &&
      err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>string</code> | The uid of the subscription group |
| <code>body?</code> | <code>[DeductServiceCreditRequest](src/models/deduct-service-credit-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ServiceCredit](src/models/service-credit.ts)</code>

**OnError**: <code>[SubscriptionGroupInvoiceAccount.DeductSubscriptionGroupServiceCreditError](src/resources/subscription-group-invoice-account.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>issueSubscriptionGroupServiceCredit(request: SubscriptionGroupInvoiceAccount.IssueSubscriptionGroupServiceCreditRequest, options?: RequestOptions): ApiPromise&lt;ServiceCreditResponse, SubscriptionGroupInvoiceAccount.IssueSubscriptionGroupServiceCreditError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Issues service credit for a subscription group. Credit will be added to the group in the amount specified in the request body. The credit will be applied to group member invoices as they are generated.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionGroupInvoiceAccount.issueSubscriptionGroupServiceCredit({ uid });
  // TODO: Handle 'response' of type ServiceCreditResponse
} catch (err) {
  if (
    err instanceof SubscriptionGroupInvoiceAccount.IssueSubscriptionGroupServiceCreditError &&
      err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>string</code> | The uid of the subscription group |
| <code>body?</code> | <code>[IssueServiceCreditRequest](src/models/issue-service-credit-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ServiceCreditResponse](src/models/service-credit-response.ts)</code>

**OnError**: <code>[SubscriptionGroupInvoiceAccount.IssueSubscriptionGroupServiceCreditError](src/resources/subscription-group-invoice-account.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPrepaymentsForSubscriptionGroup(request: SubscriptionGroupInvoiceAccount.ListPrepaymentsForSubscriptionGroupRequest, options?: RequestOptions): ApiPromise&lt;ListSubscriptionGroupPrepaymentResponse, SubscriptionGroupInvoiceAccount.ListPrepaymentsForSubscriptionGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists a subscription group's prepayments.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionGroupInvoiceAccount.listPrepaymentsForSubscriptionGroup({ uid });
  // TODO: Handle 'response' of type ListSubscriptionGroupPrepaymentResponse
} catch (err) {
  if (
    err instanceof SubscriptionGroupInvoiceAccount.ListPrepaymentsForSubscriptionGroupError &&
      err.payload.kind === "error404"
  ) {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>string</code> | The uid of the subscription group |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| <code>filter?</code> | <code>[ListPrepaymentsFilter](src/models/list-prepayments-filter.ts)</code> | Filter to use for List Prepayments operations |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListSubscriptionGroupPrepaymentResponse](src/models/list-subscription-group-prepayment-response.ts)</code>

**OnError**: <code>[SubscriptionGroupInvoiceAccount.ListPrepaymentsForSubscriptionGroupError](src/resources/subscription-group-invoice-account.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SubscriptionGroupStatus

> Source: [SubscriptionGroupStatus](src/resources/subscription-group-status.ts)

<details>
<summary><code>cancelDelayedCancellationForGroup(request: SubscriptionGroupStatus.CancelDelayedCancellationForGroupRequest, options?: RequestOptions): ApiPromise&lt;undefined, SubscriptionGroupStatus.CancelDelayedCancellationForGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the delayed cancellation on a subscription group.

Removing the delayed cancellation on a subscription group will ensure that the subscriptions do not get canceled at the end of the period. The request will reset the `cancel_at_end_of_period` flag to false on each member in the group.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.subscriptionGroupStatus.cancelDelayedCancellationForGroup({ uid });
} catch (err) {
  if (
    err instanceof SubscriptionGroupStatus.CancelDelayedCancellationForGroupError &&
      err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>string</code> | The uid of the subscription group |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[SubscriptionGroupStatus.CancelDelayedCancellationForGroupError](src/resources/subscription-group-status.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelSubscriptionsInGroup(request: SubscriptionGroupStatus.CancelSubscriptionsInGroupRequest, options?: RequestOptions): ApiPromise&lt;undefined, SubscriptionGroupStatus.CancelSubscriptionsInGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels all subscriptions within the specified group immediately. The group is identified by the `uid` that is passed in the URL. To successfully cancel the group, the primary subscription must be on automatic billing. The group members must be on automatic billing or prepaid.

To cancel a subscription group while also charging for any unbilled usage on metered or prepaid components, the `charge_unbilled_usage=true` parameter must be included in the request.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.subscriptionGroupStatus.cancelSubscriptionsInGroup({ uid });
} catch (err) {
  if (
    err instanceof SubscriptionGroupStatus.CancelSubscriptionsInGroupError &&
      err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>string</code> | The uid of the subscription group |
| <code>body?</code> | <code>[CancelGroupedSubscriptionsRequest](src/models/cancel-grouped-subscriptions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[SubscriptionGroupStatus.CancelSubscriptionsInGroupError](src/resources/subscription-group-status.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>initiateDelayedCancellationForGroup(request: SubscriptionGroupStatus.InitiateDelayedCancellationForGroupRequest, options?: RequestOptions): ApiPromise&lt;undefined, SubscriptionGroupStatus.InitiateDelayedCancellationForGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedules all subscriptions within the specified group to be canceled at the end of their billing period. The group is identified by its uid passed in the URL.

All subscriptions in the group must be on automatic billing in order to successfully cancel them, and the group must not be in a "past_due" state.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.subscriptionGroupStatus.initiateDelayedCancellationForGroup({ uid });
} catch (err) {
  if (
    err instanceof SubscriptionGroupStatus.InitiateDelayedCancellationForGroupError &&
      err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>string</code> | The uid of the subscription group |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[SubscriptionGroupStatus.InitiateDelayedCancellationForGroupError](src/resources/subscription-group-status.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reactivateSubscriptionGroup(request: SubscriptionGroupStatus.ReactivateSubscriptionGroupRequestParams, options?: RequestOptions): ApiPromise&lt;ReactivateSubscriptionGroupResponse, SubscriptionGroupStatus.ReactivateSubscriptionGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reactivates or resumes a cancelled subscription group. Upon reactivation, any canceled invoices created after the beginning of the primary subscription's billing period will be reopened and payment will be attempted on them. If the subscription group is being reactivated (as opposed to resumed), new charges will also be assessed for the new billing period.

Whether a subscription group is reactivated (a new billing period is created) or resumed (the current billing period is respected) will depend on the parameters that are sent with the request as well as the date of the request relative to the primary subscription's period.

## Reactivating within the current period

If a subscription group is cancelled and reactivated within the primary subscription's current period, we can choose to either start a new billing period or maintain the existing one. If we want to maintain the existing billing period, the `resume=true` option must be passed in request parameters.

An exception to the above are subscriptions that are on calendar billing. These subscriptions cannot be reactivated within the current period. If the `resume=true` option is not passed, the request will return an error.

The `resume_members` option is ignored in this case. All eligible group members will be automatically resumed.


## Reactivating beyond the current period

In this case, a subscription group can only be reactivated with a new billing period. If the `resume=true` option is passed it will be ignored.

Member subscriptions can have billing periods that are longer than the primary (e.g. a monthly primary with annual group members). If the primary subscription in a group cannot be reactivated within the current period, but other group members can be, passing `resume_members=true` will resume the existing billing period for eligible group members. The primary subscription will begin a new billing period.

For calendar billing subscriptions, the new billing period created will be a partial one, spanning from the date of reactivation to the next corresponding calendar renewal date.

## 3D Secure (3DS) Authentication post-authentication flow

When a payment requires 3DS Authentication to adhere to Strong Customer Authentication (SCA), the request enters a post-authentication flow where a 422 Unprocessable Entity status is returned with an action_link that will direct the customer through 3DS Authentication. 

See the [3D Secure Post-Authentication Flow](https://docs.maxio.com/hc/en-us/articles/44277749524365-3D-Secure-Post-Authentication-Flow) article in the product documentation to learn how to manage the redirect flow.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionGroupStatus.reactivateSubscriptionGroup({ uid });
  // TODO: Handle 'response' of type ReactivateSubscriptionGroupResponse
} catch (err) {
  if (
    err instanceof SubscriptionGroupStatus.ReactivateSubscriptionGroupError &&
      err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>string</code> | The uid of the subscription group |
| <code>body?</code> | <code>[ReactivateSubscriptionGroupRequest](src/models/reactivate-subscription-group-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReactivateSubscriptionGroupResponse](src/models/reactivate-subscription-group-response.ts)</code>

**OnError**: <code>[SubscriptionGroupStatus.ReactivateSubscriptionGroupError](src/resources/subscription-group-status.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SubscriptionInvoiceAccount

> Source: [SubscriptionInvoiceAccount](src/resources/subscription-invoice-account.ts)

<details>
<summary><code>createPrepayment(request: SubscriptionInvoiceAccount.CreatePrepaymentRequestParams, options?: RequestOptions): ApiPromise&lt;CreatePrepaymentResponse, SubscriptionInvoiceAccount.CreatePrepaymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a prepayment for a subscription.

In order to specify a prepayment made against a subscription, specify the `amount, memo, details, method`.

When the `method` specified is `"credit_card_on_file"`, the prepayment amount will be collected using the default credit card payment profile and applied to the prepayment account balance.  This is especially useful for manual replenishment of prepaid subscriptions.

Note that passing `amount_in_cents` is now allowed.

## 3D Secure (3DS) Authentication post-authentication flow

When a payment requires 3DS Authentication to adhere to Strong Customer Authentication (SCA), the request enters a post-authentication flow where a 422 Unprocessable Entity status is returned with an action_link that will direct the customer through 3DS Authentication. 

See the [3D Secure Post-Authentication Flow](https://docs.maxio.com/hc/en-us/articles/44277749524365-3D-Secure-Post-Authentication-Flow) article in the product documentation to learn how to manage the redirect flow.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionInvoiceAccount.createPrepayment({ subscriptionId });
  // TODO: Handle 'response' of type CreatePrepaymentResponse
} catch (err) {
  if (
    err instanceof SubscriptionInvoiceAccount.CreatePrepaymentError &&
      err.payload.kind === "createPrepaymentErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type CreatePrepaymentErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>body?</code> | <code>[CreatePrepaymentRequest](src/models/create-prepayment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreatePrepaymentResponse](src/models/create-prepayment-response.ts)</code>

**OnError**: <code>[SubscriptionInvoiceAccount.CreatePrepaymentError](src/resources/subscription-invoice-account.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deductServiceCredit(request: SubscriptionInvoiceAccount.DeductServiceCreditRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, SubscriptionInvoiceAccount.DeductServiceCreditError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deducts a service credit from the subscription in the specified amount. The credit amount being deducted must be equal to or less than the current credit balance.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.subscriptionInvoiceAccount.deductServiceCredit({ subscriptionId });
} catch (err) {
  if (
    err instanceof SubscriptionInvoiceAccount.DeductServiceCreditError &&
      err.payload.kind === "deductServiceCreditErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type DeductServiceCreditErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>body?</code> | <code>[DeductServiceCreditRequest](src/models/deduct-service-credit-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[SubscriptionInvoiceAccount.DeductServiceCreditError](src/resources/subscription-invoice-account.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>issueServiceCredit(request: SubscriptionInvoiceAccount.IssueServiceCreditRequestParams, options?: RequestOptions): ApiPromise&lt;ServiceCredit, SubscriptionInvoiceAccount.IssueServiceCreditError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a service credit to the subscription in the specified amount. The credit is subsequently applied to the next generated invoice.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionInvoiceAccount.issueServiceCredit({ subscriptionId });
  // TODO: Handle 'response' of type ServiceCredit
} catch (err) {
  if (
    err instanceof SubscriptionInvoiceAccount.IssueServiceCreditError &&
      err.payload.kind === "issueServiceCreditErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type IssueServiceCreditErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>body?</code> | <code>[IssueServiceCreditRequest](src/models/issue-service-credit-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ServiceCredit](src/models/service-credit.ts)</code>

**OnError**: <code>[SubscriptionInvoiceAccount.IssueServiceCreditError](src/resources/subscription-invoice-account.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPrepayments(request: SubscriptionInvoiceAccount.ListPrepaymentsRequest, options?: RequestOptions): ApiPromise&lt;PrepaymentsResponse, SubscriptionInvoiceAccount.ListPrepaymentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists a subscription's prepayments.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionInvoiceAccount.listPrepayments({ subscriptionId });
  // TODO: Handle 'response' of type PrepaymentsResponse
} catch (err) {
  if (err instanceof SubscriptionInvoiceAccount.ListPrepaymentsError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| <code>filter?</code> | <code>[ListPrepaymentsFilter](src/models/list-prepayments-filter.ts)</code> | Filter to use for List Prepayments operations |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PrepaymentsResponse](src/models/prepayments-response.ts)</code>

**OnError**: <code>[SubscriptionInvoiceAccount.ListPrepaymentsError](src/resources/subscription-invoice-account.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listServiceCredits(request: SubscriptionInvoiceAccount.ListServiceCreditsRequest, options?: RequestOptions): ApiPromise&lt;ListServiceCreditsResponse, SubscriptionInvoiceAccount.ListServiceCreditsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists a subscription's service credits.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionInvoiceAccount.listServiceCredits({ subscriptionId });
  // TODO: Handle 'response' of type ListServiceCreditsResponse
} catch (err) {
  if (err instanceof SubscriptionInvoiceAccount.ListServiceCreditsError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| <code>direction?</code> | <code>[SortingDirection](src/models/sorting-direction.ts)</code> | Controls the order in which results are returned.<br>Use in query `direction=asc`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListServiceCreditsResponse](src/models/list-service-credits-response.ts)</code>

**OnError**: <code>[SubscriptionInvoiceAccount.ListServiceCreditsError](src/resources/subscription-invoice-account.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readAccountBalances(request: SubscriptionInvoiceAccount.ReadAccountBalancesRequest, options?: RequestOptions): ApiPromise&lt;AccountBalances, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the `balance_in_cents` of the Subscription's Pending Discount, Service Credit, and Prepayment accounts, as well as the sum of the Subscription's open, payable invoices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionInvoiceAccount.readAccountBalances({ subscriptionId });
  // TODO: Handle 'response' of type AccountBalances
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountBalances](src/models/account-balances.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>refundPrepayment(request: SubscriptionInvoiceAccount.RefundPrepaymentRequestParams, options?: RequestOptions): ApiPromise&lt;PrepaymentResponse, SubscriptionInvoiceAccount.RefundPrepaymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Refunds a prepayment applied to a subscription, either fully or partially. The `prepayment_id` will be the account transaction ID of the original payment. The prepayment must have some amount remaining in order to be refunded.

The amount may be passed either as a decimal, with `amount`, or an integer in cents, with `amount_in_cents`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionInvoiceAccount.refundPrepayment({ subscriptionId, prepaymentId });
  // TODO: Handle 'response' of type PrepaymentResponse
} catch (err) {
  if (
    err instanceof SubscriptionInvoiceAccount.RefundPrepaymentError &&
      err.payload.kind === "refundPrepaymentBaseErrorsResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type RefundPrepaymentBaseErrorsResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>prepaymentId</code> | <code>number</code> | id of prepayment |
| <code>body?</code> | <code>[RefundPrepaymentRequest](src/models/refund-prepayment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PrepaymentResponse](src/models/prepayment-response.ts)</code>

**OnError**: <code>[SubscriptionInvoiceAccount.RefundPrepaymentError](src/resources/subscription-invoice-account.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SubscriptionNotes

> Source: [SubscriptionNotes](src/resources/subscription-notes.ts)

<details>
<summary><code>createSubscriptionNote(request: SubscriptionNotes.CreateSubscriptionNoteRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionNoteResponse, SubscriptionNotes.CreateSubscriptionNoteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a note for a subscription.

## How to Use Subscription Notes

Notes allow you to record information about a particular Subscription in a free text format.

If you have structured data such as birth date, color, etc., consider using Metadata instead.

Full documentation on how to use Notes in the Advanced Billing UI can be located [here](https://maxio.zendesk.com/hc/en-us/articles/24251712214413-Subscription-Summary-Overview).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionNotes.createSubscriptionNote({ subscriptionId });
  // TODO: Handle 'response' of type SubscriptionNoteResponse
} catch (err) {
  if (
    err instanceof SubscriptionNotes.CreateSubscriptionNoteError && err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>body?</code> | <code>[UpdateSubscriptionNoteRequest](src/models/update-subscription-note-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionNoteResponse](src/models/subscription-note-response.ts)</code>

**OnError**: <code>[SubscriptionNotes.CreateSubscriptionNoteError](src/resources/subscription-notes.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSubscriptionNote(request: SubscriptionNotes.DeleteSubscriptionNoteRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a note for a Subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.subscriptionNotes.deleteSubscriptionNote({ subscriptionId, noteId });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>noteId</code> | <code>number</code> | The Advanced Billing id of the note |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSubscriptionNotes(request: SubscriptionNotes.ListSubscriptionNotesRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionNoteResponse[], SubscriptionNotes.ListSubscriptionNotesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of notes associated with a subscription. The response will be an array of Notes.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionNotes.listSubscriptionNotes({ subscriptionId });
  // TODO: Handle 'response' of type SubscriptionNoteResponse[]
} catch (err) {
  if (
    err instanceof SubscriptionNotes.ListSubscriptionNotesError && err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionNoteResponse](src/models/subscription-note-response.ts)[]</code>

**OnError**: <code>[SubscriptionNotes.ListSubscriptionNotesError](src/resources/subscription-notes.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readSubscriptionNote(request: SubscriptionNotes.ReadSubscriptionNoteRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionNoteResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific note attached to a subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionNotes.readSubscriptionNote({ subscriptionId, noteId });
  // TODO: Handle 'response' of type SubscriptionNoteResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>noteId</code> | <code>number</code> | The Advanced Billing id of the note |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionNoteResponse](src/models/subscription-note-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSubscriptionNote(request: SubscriptionNotes.UpdateSubscriptionNoteRequestParams, options?: RequestOptions): ApiPromise&lt;SubscriptionNoteResponse, SubscriptionNotes.UpdateSubscriptionNoteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a note for a subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionNotes.updateSubscriptionNote({ subscriptionId, noteId });
  // TODO: Handle 'response' of type SubscriptionNoteResponse
} catch (err) {
  if (
    err instanceof SubscriptionNotes.UpdateSubscriptionNoteError && err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>noteId</code> | <code>number</code> | The Advanced Billing id of the note |
| <code>body?</code> | <code>[UpdateSubscriptionNoteRequest](src/models/update-subscription-note-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionNoteResponse](src/models/subscription-note-response.ts)</code>

**OnError**: <code>[SubscriptionNotes.UpdateSubscriptionNoteError](src/resources/subscription-notes.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SubscriptionProducts

> Source: [SubscriptionProducts](src/resources/subscription-products.ts)

<details>
<summary><code>migrateSubscriptionProduct(request: SubscriptionProducts.MigrateSubscriptionProductRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionResponse, SubscriptionProducts.MigrateSubscriptionProductError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Migrates a subscription to a different product.

In order to create a migration, you must pass the `product_id` or `product_handle` in the object when you send a POST request. You may also pass either a `product_price_point_id` or `product_price_point_handle` to choose which price point the subscription is moved to. If no price point identifier is passed the subscription will be moved to the products default price point. The response will be the updated subscription.

## Valid Subscriptions

Subscriptions should be in the `active` or `trialing` state in order to be migrated.

(For backwards compatibility reasons, it is possible to migrate a subscription that is in the `trial_ended` state via the API, however this is not recommended.  Since `trial_ended` is an end-of-life state, the subscription should be canceled, the product changed, and then the subscription can be reactivated.)

## Migrations Documentation

Full documentation on how to record Migrations in the Advanced Billing UI can be located [here](https://maxio.zendesk.com/hc/en-us/articles/24181589372429-Data-Migration-to-Advanced-Billing).

## Failed Migrations

Important note: One of the most common ways that a migration can fail is when the attempt is made to migrate a subscription to its current product. 

## 3D Secure (3DS) Authentication post-authentication flow

When a payment requires 3DS Authentication to adhere to Strong Customer Authentication (SCA), the request enters a post-authentication flow where a 422 Unprocessable Entity status is returned with an action_link that will direct the customer through 3DS Authentication. 

See the [3D Secure Post-Authentication Flow](https://docs.maxio.com/hc/en-us/articles/44277749524365-3D-Secure-Post-Authentication-Flow) article in the product documentation to learn how to manage the redirect flow.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionProducts.migrateSubscriptionProduct({ subscriptionId });
  // TODO: Handle 'response' of type SubscriptionResponse
} catch (err) {
  if (
    err instanceof SubscriptionProducts.MigrateSubscriptionProductError &&
      err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>body?</code> | <code>[SubscriptionProductMigrationRequest](src/models/subscription-product-migration-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>

**OnError**: <code>[SubscriptionProducts.MigrateSubscriptionProductError](src/resources/subscription-products.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>previewSubscriptionProductMigration(request: SubscriptionProducts.PreviewSubscriptionProductMigrationRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionMigrationPreviewResponse, SubscriptionProducts.PreviewSubscriptionProductMigrationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Previews the charges resulting from migrating a subscription to a different product.

## Previewing a future date
It is also possible to preview the migration for a date in the future, as long as it's still within the subscription's current billing period, by passing a `proration_date` along with the request (e.g., `"proration_date": "2020-12-18T18:25:43.511Z"`).

This will calculate the prorated adjustment, charge, payment and credit applied values assuming the migration is done at that date in the future as opposed to right now.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionProducts.previewSubscriptionProductMigration({ subscriptionId });
  // TODO: Handle 'response' of type SubscriptionMigrationPreviewResponse
} catch (err) {
  if (
    err instanceof SubscriptionProducts.PreviewSubscriptionProductMigrationError &&
      err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>body?</code> | <code>[SubscriptionMigrationPreviewRequest](src/models/subscription-migration-preview-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionMigrationPreviewResponse](src/models/subscription-migration-preview-response.ts)</code>

**OnError**: <code>[SubscriptionProducts.PreviewSubscriptionProductMigrationError](src/resources/subscription-products.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SubscriptionRenewals

> Source: [SubscriptionRenewals](src/resources/subscription-renewals.ts)

<details>
<summary><code>cancelScheduledRenewalConfiguration(request: SubscriptionRenewals.CancelScheduledRenewalConfigurationRequest, options?: RequestOptions): ApiPromise&lt;ScheduledRenewalConfigurationResponse, SubscriptionRenewals.CancelScheduledRenewalConfigurationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels a scheduled renewal configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionRenewals.cancelScheduledRenewalConfiguration({
    subscriptionId,
    id,
  });
  // TODO: Handle 'response' of type ScheduledRenewalConfigurationResponse
} catch (err) {
  if (
    err instanceof SubscriptionRenewals.CancelScheduledRenewalConfigurationError &&
      err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>id</code> | <code>number</code> | The renewal id. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScheduledRenewalConfigurationResponse](src/models/scheduled-renewal-configuration-response.ts)</code>

**OnError**: <code>[SubscriptionRenewals.CancelScheduledRenewalConfigurationError](src/resources/subscription-renewals.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createScheduledRenewalConfiguration(request: SubscriptionRenewals.CreateScheduledRenewalConfigurationRequest, options?: RequestOptions): ApiPromise&lt;ScheduledRenewalConfigurationResponse, SubscriptionRenewals.CreateScheduledRenewalConfigurationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a scheduled renewal configuration for a subscription. The scheduled renewal is based on the subscription’s current product and component setup.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionRenewals.createScheduledRenewalConfiguration({ subscriptionId });
  // TODO: Handle 'response' of type ScheduledRenewalConfigurationResponse
} catch (err) {
  if (
    err instanceof SubscriptionRenewals.CreateScheduledRenewalConfigurationError &&
      err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>body?</code> | <code>[ScheduledRenewalConfigurationRequest](src/models/scheduled-renewal-configuration-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScheduledRenewalConfigurationResponse](src/models/scheduled-renewal-configuration-response.ts)</code>

**OnError**: <code>[SubscriptionRenewals.CreateScheduledRenewalConfigurationError](src/resources/subscription-renewals.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createScheduledRenewalConfigurationItem(request: SubscriptionRenewals.CreateScheduledRenewalConfigurationItemRequest, options?: RequestOptions): ApiPromise&lt;ScheduledRenewalConfigurationItemResponse, SubscriptionRenewals.CreateScheduledRenewalConfigurationItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds product and component line items to the scheduled renewal.

If your site has list vs sales pricing enabled, accepts renewal_configuration_item.custom_price.list_price_point_id, validates and persists it; omitted value follows existing/default behavior; with list vs sales pricing disabled, parameter is ignored (no validation/behavioral impact). This functionality is supported in the API, but is not currently supported in SDKs.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionRenewals.createScheduledRenewalConfigurationItem({
    subscriptionId,
    scheduledRenewalsConfigurationId,
  });
  // TODO: Handle 'response' of type ScheduledRenewalConfigurationItemResponse
} catch (err) {
  if (
    err instanceof SubscriptionRenewals.CreateScheduledRenewalConfigurationItemError &&
      err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>scheduledRenewalsConfigurationId</code> | <code>number</code> | The scheduled renewal configuration id. |
| <code>body?</code> | <code>[ScheduledRenewalConfigurationItemRequest](src/models/scheduled-renewal-configuration-item-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScheduledRenewalConfigurationItemResponse](src/models/scheduled-renewal-configuration-item-response.ts)</code>

**OnError**: <code>[SubscriptionRenewals.CreateScheduledRenewalConfigurationItemError](src/resources/subscription-renewals.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteScheduledRenewalConfigurationItem(request: SubscriptionRenewals.DeleteScheduledRenewalConfigurationItemRequest, options?: RequestOptions): ApiPromise&lt;undefined, SubscriptionRenewals.DeleteScheduledRenewalConfigurationItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes an item from the pending renewal configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.subscriptionRenewals.deleteScheduledRenewalConfigurationItem({
    subscriptionId,
    scheduledRenewalsConfigurationId,
    id,
  });
} catch (err) {
  if (
    err instanceof SubscriptionRenewals.DeleteScheduledRenewalConfigurationItemError &&
      err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>scheduledRenewalsConfigurationId</code> | <code>number</code> | The scheduled renewal configuration id. |
| <code>id</code> | <code>number</code> | The scheduled renewal configuration item id. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[SubscriptionRenewals.DeleteScheduledRenewalConfigurationItemError](src/resources/subscription-renewals.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listScheduledRenewalConfigurations(request: SubscriptionRenewals.ListScheduledRenewalConfigurationsRequest, options?: RequestOptions): ApiPromise&lt;ScheduledRenewalConfigurationsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists scheduled renewal configurations for the subscription and permits an optional status query filter.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionRenewals.listScheduledRenewalConfigurations({ subscriptionId });
  // TODO: Handle 'response' of type ScheduledRenewalConfigurationsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>status?</code> | <code>[Status](src/models/status.ts)</code> | (Optional) Status filter for scheduled renewal configurations. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScheduledRenewalConfigurationsResponse](src/models/scheduled-renewal-configurations-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>lockInScheduledRenewalImmediately(request: SubscriptionRenewals.LockInScheduledRenewalImmediatelyRequest, options?: RequestOptions): ApiPromise&lt;ScheduledRenewalConfigurationResponse, SubscriptionRenewals.LockInScheduledRenewalImmediatelyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Locks in the renewal immediately.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionRenewals.lockInScheduledRenewalImmediately({
    subscriptionId,
    id,
  });
  // TODO: Handle 'response' of type ScheduledRenewalConfigurationResponse
} catch (err) {
  if (
    err instanceof SubscriptionRenewals.LockInScheduledRenewalImmediatelyError &&
      err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>id</code> | <code>number</code> | The renewal id. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScheduledRenewalConfigurationResponse](src/models/scheduled-renewal-configuration-response.ts)</code>

**OnError**: <code>[SubscriptionRenewals.LockInScheduledRenewalImmediatelyError](src/resources/subscription-renewals.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readScheduledRenewalConfiguration(request: SubscriptionRenewals.ReadScheduledRenewalConfigurationRequest, options?: RequestOptions): ApiPromise&lt;ScheduledRenewalConfigurationResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the configuration settings for the scheduled renewal.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionRenewals.readScheduledRenewalConfiguration({
    subscriptionId,
    id,
  });
  // TODO: Handle 'response' of type ScheduledRenewalConfigurationResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>id</code> | <code>number</code> | The renewal id. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScheduledRenewalConfigurationResponse](src/models/scheduled-renewal-configuration-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>scheduleScheduledRenewalLockIn(request: SubscriptionRenewals.ScheduleScheduledRenewalLockInRequest, options?: RequestOptions): ApiPromise&lt;ScheduledRenewalConfigurationResponse, SubscriptionRenewals.ScheduleScheduledRenewalLockInError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedules a future lock-in date for the renewal.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionRenewals.scheduleScheduledRenewalLockIn({ subscriptionId, id });
  // TODO: Handle 'response' of type ScheduledRenewalConfigurationResponse
} catch (err) {
  if (
    err instanceof SubscriptionRenewals.ScheduleScheduledRenewalLockInError &&
      err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>id</code> | <code>number</code> | The renewal id. |
| <code>body?</code> | <code>[ScheduledRenewalLockInRequest](src/models/scheduled-renewal-lock-in-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScheduledRenewalConfigurationResponse](src/models/scheduled-renewal-configuration-response.ts)</code>

**OnError**: <code>[SubscriptionRenewals.ScheduleScheduledRenewalLockInError](src/resources/subscription-renewals.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unpublishScheduledRenewalConfiguration(request: SubscriptionRenewals.UnpublishScheduledRenewalConfigurationRequest, options?: RequestOptions): ApiPromise&lt;ScheduledRenewalConfigurationResponse, SubscriptionRenewals.UnpublishScheduledRenewalConfigurationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restores a scheduled renewal configuration to an editable state.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionRenewals.unpublishScheduledRenewalConfiguration({
    subscriptionId,
    id,
  });
  // TODO: Handle 'response' of type ScheduledRenewalConfigurationResponse
} catch (err) {
  if (
    err instanceof SubscriptionRenewals.UnpublishScheduledRenewalConfigurationError &&
      err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>id</code> | <code>number</code> | The renewal id. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScheduledRenewalConfigurationResponse](src/models/scheduled-renewal-configuration-response.ts)</code>

**OnError**: <code>[SubscriptionRenewals.UnpublishScheduledRenewalConfigurationError](src/resources/subscription-renewals.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateScheduledRenewalConfiguration(request: SubscriptionRenewals.UpdateScheduledRenewalConfigurationRequest, options?: RequestOptions): ApiPromise&lt;ScheduledRenewalConfigurationResponse, SubscriptionRenewals.UpdateScheduledRenewalConfigurationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionRenewals.updateScheduledRenewalConfiguration({
    subscriptionId,
    id,
  });
  // TODO: Handle 'response' of type ScheduledRenewalConfigurationResponse
} catch (err) {
  if (
    err instanceof SubscriptionRenewals.UpdateScheduledRenewalConfigurationError &&
      err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>id</code> | <code>number</code> | The renewal id. |
| <code>body?</code> | <code>[ScheduledRenewalConfigurationRequest](src/models/scheduled-renewal-configuration-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScheduledRenewalConfigurationResponse](src/models/scheduled-renewal-configuration-response.ts)</code>

**OnError**: <code>[SubscriptionRenewals.UpdateScheduledRenewalConfigurationError](src/resources/subscription-renewals.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateScheduledRenewalConfigurationItem(request: SubscriptionRenewals.UpdateScheduledRenewalConfigurationItemRequest, options?: RequestOptions): ApiPromise&lt;ScheduledRenewalConfigurationItemResponse, SubscriptionRenewals.UpdateScheduledRenewalConfigurationItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing configuration item’s pricing and quantity.

If you site has list vs sales pricing enabled, accepts renewal_configuration_item.custom_price.list_price_point_id, validates and persists it; omitted value follows existing/default behavior; with list vs sales pricing disabled, parameter is ignored (no validation/behavioral impact). This functionality is supported in the API, but is not currently supported in SDKs.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionRenewals.updateScheduledRenewalConfigurationItem({
    subscriptionId,
    scheduledRenewalsConfigurationId,
    id,
  });
  // TODO: Handle 'response' of type ScheduledRenewalConfigurationItemResponse
} catch (err) {
  if (
    err instanceof SubscriptionRenewals.UpdateScheduledRenewalConfigurationItemError &&
      err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>scheduledRenewalsConfigurationId</code> | <code>number</code> | The scheduled renewal configuration id. |
| <code>id</code> | <code>number</code> | The scheduled renewal configuration item id. |
| <code>body?</code> | <code>[ScheduledRenewalUpdateRequest](src/models/scheduled-renewal-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScheduledRenewalConfigurationItemResponse](src/models/scheduled-renewal-configuration-item-response.ts)</code>

**OnError**: <code>[SubscriptionRenewals.UpdateScheduledRenewalConfigurationItemError](src/resources/subscription-renewals.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SubscriptionStatus

> Source: [SubscriptionStatus](src/resources/subscription-status.ts)

<details>
<summary><code>cancelDelayedCancellation(request: SubscriptionStatus.CancelDelayedCancellationRequest, options?: RequestOptions): ApiPromise&lt;DelayedCancellationResponse, SubscriptionStatus.CancelDelayedCancellationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the delayed cancellation from a subscription, ensuring it is not canceled at the end of the current period. The request will reset the `cancel_at_end_of_period` flag to `false`.

This endpoint is idempotent. If the subscription was not set to cancel in the future, removing the delayed cancellation has no effect and the call will be successful.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionStatus.cancelDelayedCancellation({ subscriptionId });
  // TODO: Handle 'response' of type DelayedCancellationResponse
} catch (err) {
  if (err instanceof SubscriptionStatus.CancelDelayedCancellationError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DelayedCancellationResponse](src/models/delayed-cancellation-response.ts)</code>

**OnError**: <code>[SubscriptionStatus.CancelDelayedCancellationError](src/resources/subscription-status.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelDunning(request: SubscriptionStatus.CancelDunningRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionResponse, SubscriptionStatus.CancelDunningError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels the active dunning process for a subscription and sets it to active.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionStatus.cancelDunning({ subscriptionId });
  // TODO: Handle 'response' of type SubscriptionResponse
} catch (err) {
  if (err instanceof SubscriptionStatus.CancelDunningError && err.payload.kind === "errorListResponse1") {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>

**OnError**: <code>[SubscriptionStatus.CancelDunningError](src/resources/subscription-status.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelSubscription(request: SubscriptionStatus.CancelSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionResponse, SubscriptionStatus.CancelSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels the Subscription. The Delete method sets the Subscription state to `canceled`.
To cancel the subscription immediately, omit any schedule parameters from the request. To use the schedule options, the Schedule Subscription Cancellation feature must be enabled on your site.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionStatus.cancelSubscription({ subscriptionId });
  // TODO: Handle 'response' of type SubscriptionResponse
} catch (err) {
  if (err instanceof SubscriptionStatus.CancelSubscriptionError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>body?</code> | <code>[CancellationRequest](src/models/cancellation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>

**OnError**: <code>[SubscriptionStatus.CancelSubscriptionError](src/resources/subscription-status.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>initiateDelayedCancellation(request: SubscriptionStatus.InitiateDelayedCancellationRequest, options?: RequestOptions): ApiPromise&lt;DelayedCancellationResponse, SubscriptionStatus.InitiateDelayedCancellationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels a subscription at the end of the current billing period based on the subscription's current product. You cannot set `cancel_at_end_of_period` at subscription creation, or if the subscription is past due.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionStatus.initiateDelayedCancellation({ subscriptionId });
  // TODO: Handle 'response' of type DelayedCancellationResponse
} catch (err) {
  if (err instanceof SubscriptionStatus.InitiateDelayedCancellationError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>body?</code> | <code>[CancellationRequest](src/models/cancellation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DelayedCancellationResponse](src/models/delayed-cancellation-response.ts)</code>

**OnError**: <code>[SubscriptionStatus.InitiateDelayedCancellationError](src/resources/subscription-status.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>pauseSubscription(request: SubscriptionStatus.PauseSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionResponse, SubscriptionStatus.PauseSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Places the subscription on hold, preventing it from renewing.

## Limitations

You may not place a subscription on hold if the `next_billing_at` date is within 24 hours.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionStatus.pauseSubscription({ subscriptionId });
  // TODO: Handle 'response' of type SubscriptionResponse
} catch (err) {
  if (err instanceof SubscriptionStatus.PauseSubscriptionError && err.payload.kind === "errorListResponse1") {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>body?</code> | <code>[PauseRequest](src/models/pause-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>

**OnError**: <code>[SubscriptionStatus.PauseSubscriptionError](src/resources/subscription-status.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>previewRenewal(request: SubscriptionStatus.PreviewRenewalRequest, options?: RequestOptions): ApiPromise&lt;RenewalPreviewResponse, SubscriptionStatus.PreviewRenewalError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Previews a subscription’s next renewal assessment. Renewal Preview is an object representing a subscription’s next assessment. You can retrieve it to see a snapshot of how much your customer will be charged on their next renewal.

The "Next Billing" amount and "Next Billing" date are already represented in the UI on each Subscriber's Summary. For more information, see our documentation [here](https://maxio.zendesk.com/hc/en-us/articles/24252493695757-Subscriber-Interface-Overview).

## Optional Component Fields

This endpoint is particularly useful due to the fact that it will return the computed billing amount for the base product and the components which are in use by a subscriber.

By default, the preview will include billing details for all components _at their **current** quantities_. This means:

* Current `allocated_quantity` for quantity-based components
* Current enabled/disabled status for on/off components
* Current metered usage `unit_balance` for metered components
* Current metric quantity value for events recorded thus far for events-based components

In the above statements, "current" means the quantity or value as of the call to the renewal preview endpoint. We do not predict end-of-period values for components, so metered or events-based usage may be less than it will eventually be at the end of the period.

Optionally, **you may provide your own custom quantities** for any component to see a billing preview for non-current quantities. This is accomplished by sending a request body with data under the `components` key. See the request body documentation below.

## Subscription Side Effects

You can request a `POST` to obtain this data from the endpoint without any side effects. This method allows you to preview data, but does not log any changes against a subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionStatus.previewRenewal({ subscriptionId });
  // TODO: Handle 'response' of type RenewalPreviewResponse
} catch (err) {
  if (err instanceof SubscriptionStatus.PreviewRenewalError && err.payload.kind === "errorListResponse1") {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>body?</code> | <code>[RenewalPreviewRequest](src/models/renewal-preview-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RenewalPreviewResponse](src/models/renewal-preview-response.ts)</code>

**OnError**: <code>[SubscriptionStatus.PreviewRenewalError](src/resources/subscription-status.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reactivateSubscription(request: SubscriptionStatus.ReactivateSubscriptionRequestParams, options?: RequestOptions): ApiPromise&lt;SubscriptionResponse, SubscriptionStatus.ReactivateSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reactivates a previously canceled subscription. For details on how the reactivation works, and how to reactivate subscriptions through the application, see [reactivation](https://maxio.zendesk.com/hc/en-us/articles/24252109503629-Reactivating-and-Resuming).

**Note: The term "resume" is used also during another process in Advanced Billing. This occurs when an on-hold subscription is "resumed". This returns the subscription to an active state.**

+ The response returns the subscription object in the `active` or `trialing` state.
+ The `canceled_at` and `cancellation_message` fields do not have values.
+ The method works for "Canceled" or "Trial Ended" subscriptions.
+ It will not work for items not marked as "Canceled", "Unpaid", or "Trial Ended".

## Resume the current billing period for a subscription

A subscription is considered "resumable" if you are attempting to reactivate within the billing period the subscription was canceled in.

A resumed subscription's billing date remains the same as before it was canceled. In other words, it does not start a new billing period. Payment may or may not be collected for a resumed subscription, depending on whether or not the subscription had a balance when it was canceled (for example, if it was canceled because of dunning).

Consider a subscription which was created on June 1st, and would renew on July 1st. The subscription is then canceled on June 15.

If a reactivation with `resume: true` were attempted _before_ what would have been the next billing date of July 1st, then Advanced Billing would resume the subscription.

If a reactivation with `resume: true` were attempted _after_ what would have been the next billing date of July 1st, then Advanced Billing would not resume the subscription, and instead it would be reactivated with a new billing period.

If a reactivation with `resume: false`, or where 'resume' is omitted were attempted, then Advanced Billing would reactivate the subscription with a new billing period regardless of whether or not resuming the previous billing period was possible.

| Canceled | Reactivation | Resumable? |
|---|---|---|
| Jun 15 | June 28 | Yes |
| Jun 15 | July 2 | No |

## Reactivation Scenarios

### Reactivating Canceled Subscription While Preserving Balance

+ Given you have a product that costs $20
+ Given you have a canceled subscription to the $20 product
    + 1 charge should exist for $20
    + 1 payment should exist for $20
+ When the subscription has canceled due to dunning, it retained a negative balance of $20

#### Results

The resulting charges upon reactivation will be:
+ 1 charge for $20 for the new product
+ 1 charge for $20 for the balance due
+ Total charges = $40

+ The subscription will transition to active
+ The subscription balance will be zero

### Reactivating a Canceled Subscription With Coupon

+ Given you have a canceled subscription
+ It has no current period defined
+ You have a coupon code "EARLYBIRD"
+ The coupon is set to recur for 6 periods

PUT request sent to:
`https://acme.chargify.com/subscriptions/{subscription_id}/reactivate.json?coupon_code=EARLYBIRD`

#### Results

+ The subscription will transition to active
+ The subscription should have applied a coupon with code "EARLYBIRD"

### Reactivating Canceled Subscription With a Trial, Without the include_trial Flag

+ Given you have a canceled subscription
+ The product associated with the subscription has a trial

+ PUT request to
`https://acme.chargify.com/subscriptions/{subscription_id}/reactivate.json`


#### Results
+ The subscription will transition to active

### Reactivating Canceled Subscription With Trial, With the include_trial Flag

+ Given you have a canceled subscription
+ The product associated with the subscription has a trial

+ Send a PUT request to `https://acme.chargify.com/subscriptions/{subscription_id}/reactivate.json?include_trial=1`


#### Results

+ The subscription will transition to trialing

### Reactivating Trial Ended Subscription

+ Given you have a trial_ended subscription
+ Send a PUT request to `https://acme.chargify.com/subscriptions/{subscription_id}/reactivate.json`

#### Results

+ The subscription will transition to active

### Resuming a Canceled Subscription

+ Given you have a `canceled` subscription and it is resumable
+ Send a PUT request to `https://acme.chargify.com/subscriptions/{subscription_id}/reactivate.json?resume=true`

#### Results

+ The subscription will transition to active
+ The next billing date should not have changed

### Attempting to resume a subscription which is not resumable

+ Given you have a `canceled` subscription, and it is not resumable
+ Send a PUT request to `https://acme.chargify.com/subscriptions/{subscription_id}/reactivate.json?resume=true`

#### Results

+ The subscription will transition to active, with a new billing period.

### Attempting to resume but not reactivate a subscription which is not resumable

+ Given you have a `canceled` subscription, and it is not resumable
+ Send a PUT request to `https://acme.chargify.com/subscriptions/{subscription_id}/reactivate.json?resume[require_resume]=true`
+ The response status should be "422 UNPROCESSABLE ENTITY"
+ The subscription should be canceled with the following response
```
  {
    "errors": ["Request was 'resume only', but this subscription cannot be resumed."]
  }
```

#### Results

+ The subscription should remain `canceled`
+ The next billing date should not have changed

### Resuming Subscription Which Was Trialing

+ Given you have a `trial_ended` subscription, and it is resumable
+ And the subscription was canceled in the middle of a trial
+ And there is still time left on the trial
+ Send a PUT request to `https://acme.chargify.com/subscriptions/{subscription_id}/reactivate.json?resume=true`

#### Results

+ The subscription will transition to trialing
+ The next billing date should not have changed

### Resuming Subscription Which Was trial_ended

+ Given you have a `trial_ended` subscription, and it is resumable
+ Send a PUT request to `https://acme.chargify.com/subscriptions/{subscription_id}/reactivate.json?resume=true`

#### Results

+ The subscription will transition to active
+ The next billing date should not have changed
+ Any product-related charges should have been collected

## 3D Secure (3DS) Authentication post-authentication flow

When a payment requires 3DS Authentication to adhere to Strong Customer Authentication (SCA), the request enters a post-authentication flow where a 422 Unprocessable Entity status is returned with an action_link that will direct the customer through 3DS Authentication. 

See the [3D Secure Post-Authentication Flow](https://docs.maxio.com/hc/en-us/articles/44277749524365-3D-Secure-Post-Authentication-Flow) article in the product documentation to learn how to manage the redirect flow.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionStatus.reactivateSubscription({ subscriptionId });
  // TODO: Handle 'response' of type SubscriptionResponse
} catch (err) {
  if (
    err instanceof SubscriptionStatus.ReactivateSubscriptionError && err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>body?</code> | <code>[ReactivateSubscriptionRequest](src/models/reactivate-subscription-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>

**OnError**: <code>[SubscriptionStatus.ReactivateSubscriptionError](src/resources/subscription-status.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resumeSubscription(request: SubscriptionStatus.ResumeSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionResponse, SubscriptionStatus.ResumeSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resumes a paused (on-hold) subscription. If the normal next renewal date has not passed, the subscription will return to active and will renew on that date.  Otherwise, it will behave like a reactivation, setting the billing date to 'now' and charging the subscriber.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionStatus.resumeSubscription({ subscriptionId });
  // TODO: Handle 'response' of type SubscriptionResponse
} catch (err) {
  if (
    err instanceof SubscriptionStatus.ResumeSubscriptionError && err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>calendarBillingResumptionCharge?</code> | <code>[ResumptionCharge](src/models/resumption-charge.ts)</code> | (For calendar billing subscriptions only) The way that the resumed subscription's charge should be handled. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>

**OnError**: <code>[SubscriptionStatus.ResumeSubscriptionError](src/resources/subscription-status.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrySubscription(request: SubscriptionStatus.RetrySubscriptionRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionResponse, SubscriptionStatus.RetrySubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retries collecting the balance due on a past-due subscription without waiting for the next scheduled attempt.

## 3D Secure (3DS) Authentication post-authentication flow

When a payment requires 3DS Authentication to adhere to Strong Customer Authentication (SCA), the request enters a post-authentication flow where a 422 Unprocessable Entity status is returned with an action_link that will direct the customer through 3DS Authentication. 

See the [3D Secure Post-Authentication Flow](https://docs.maxio.com/hc/en-us/articles/44277749524365-3D-Secure-Post-Authentication-Flow) article in the product documentation to learn how to manage the redirect flow.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionStatus.retrySubscription({ subscriptionId });
  // TODO: Handle 'response' of type SubscriptionResponse
} catch (err) {
  if (err instanceof SubscriptionStatus.RetrySubscriptionError && err.payload.kind === "errorListResponse1") {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>

**OnError**: <code>[SubscriptionStatus.RetrySubscriptionError](src/resources/subscription-status.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateAutomaticSubscriptionResumption(request: SubscriptionStatus.UpdateAutomaticSubscriptionResumptionRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionResponse, SubscriptionStatus.UpdateAutomaticSubscriptionResumptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the date on which a paused subscription will automatically resume.

To update a subscription's resume date, use this method to change or update the `automatically_resume_at` date.

### Remove the resume date

Alternatively, you can change the `automatically_resume_at` to `null` if you would like the subscription to not have a resume date.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionStatus.updateAutomaticSubscriptionResumption({ subscriptionId });
  // TODO: Handle 'response' of type SubscriptionResponse
} catch (err) {
  if (
    err instanceof SubscriptionStatus.UpdateAutomaticSubscriptionResumptionError &&
      err.payload.kind === "errorListResponse1"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>number</code> | The Chargify id of the subscription. |
| <code>body?</code> | <code>[PauseRequest](src/models/pause-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>

**OnError**: <code>[SubscriptionStatus.UpdateAutomaticSubscriptionResumptionError](src/resources/subscription-status.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Webhooks

> Source: [Webhooks](src/resources/webhooks.ts)

<details>
<summary><code>createEndpoint(request: Webhooks.CreateEndpointRequest, options?: RequestOptions): ApiPromise&lt;EndpointResponse, Webhooks.CreateEndpointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an endpoint and assigns a list of webhook subscriptions (events) to it.
See the [Webhooks Reference](page:introduction/webhooks/webhooks-reference#events) page for available events.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.createEndpoint();
  // TODO: Handle 'response' of type EndpointResponse
} catch (err) {
  if (err instanceof Webhooks.CreateEndpointError && err.payload.kind === "errorListResponse1") {
    // TODO: Handle 'err.payload.body' of type ErrorListResponse1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CreateOrUpdateEndpointRequest](src/models/create-or-update-endpoint-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EndpointResponse](src/models/endpoint-response.ts)</code>

**OnError**: <code>[Webhooks.CreateEndpointError](src/resources/webhooks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>enableWebhooks(request: Webhooks.EnableWebhooksRequestParams, options?: RequestOptions): ApiPromise&lt;EnableWebhooksResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enables webhooks for your site.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.enableWebhooks();
  // TODO: Handle 'response' of type EnableWebhooksResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[EnableWebhooksRequest](src/models/enable-webhooks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnableWebhooksResponse](src/models/enable-webhooks-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEndpoints(options?: RequestOptions): ApiPromise&lt;Endpoint[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists endpoints configured for a site.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.listEndpoints();
  // TODO: Handle 'response' of type Endpoint[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Endpoint](src/models/endpoint.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWebhooks(request: Webhooks.ListWebhooksRequest, options?: RequestOptions): ApiPromise&lt;WebhookResponse[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of webhooks.  You can pass query parameters if you want to filter webhooks. See the [Webhooks](page:introduction/webhooks/webhooks) documentation for more information.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.listWebhooks();
  // TODO: Handle 'response' of type WebhookResponse[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>status?</code> | <code>[WebhookStatus](src/models/webhook-status.ts)</code> | Webhooks with matching status would be returned. |
| <code>sinceDate?</code> | <code>string</code> | Format YYYY-MM-DD. Returns Webhooks with the created_at date greater than or equal to the one specified. |
| <code>untilDate?</code> | <code>string</code> | Format YYYY-MM-DD. Returns Webhooks with the created_at date less than or equal to the one specified. |
| <code>page?</code> | <code>number</code> | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| <code>perPage?</code> | <code>number</code> | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| <code>order?</code> | <code>[WebhookOrder](src/models/webhook-order.ts)</code> | The order in which the Webhooks are returned. |
| <code>subscription?</code> | <code>number</code> | The Advanced Billing id of a subscription you'd like to filter for |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookResponse](src/models/webhook-response.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>replayWebhooks(request: Webhooks.ReplayWebhooksRequestParams, options?: RequestOptions): ApiPromise&lt;ReplayWebhooksResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replays webhooks. Posting to this endpoint does not immediately resend the webhooks. They are added to a queue and sent as soon as possible, depending on available system resources. You can submit an array of up to 1000 webhook IDs in the replay request.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.replayWebhooks();
  // TODO: Handle 'response' of type ReplayWebhooksResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ReplayWebhooksRequest](src/models/replay-webhooks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReplayWebhooksResponse](src/models/replay-webhooks-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateEndpoint(request: Webhooks.UpdateEndpointRequest, options?: RequestOptions): ApiPromise&lt;EndpointResponse, Webhooks.UpdateEndpointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an Endpoint. You can change the `url` of your endpoint or the list of `webhook_subscriptions` to which you are subscribed. See the [Webhooks Reference](page:introduction/webhooks/webhooks-reference#events) page for available events.

Always send a complete list of events to which you want to subscribe. Sending a PUT request for an existing endpoint with an empty list of `webhook_subscriptions` will unsubscribe all events.

If you want to unsubscribe from a specific event, send a list of `webhook_subscriptions` without the specific event key.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.updateEndpoint({ endpointId });
  // TODO: Handle 'response' of type EndpointResponse
} catch (err) {
  if (err instanceof Webhooks.UpdateEndpointError && err.payload.kind === "error404") {
    // TODO: Handle 'err.payload' — the "error404" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>endpointId</code> | <code>number</code> | The Advanced Billing id for the endpoint that should be updated |
| <code>body?</code> | <code>[CreateOrUpdateEndpointRequest](src/models/create-or-update-endpoint-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EndpointResponse](src/models/endpoint-response.ts)</code>

**OnError**: <code>[Webhooks.UpdateEndpointError](src/resources/webhooks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

