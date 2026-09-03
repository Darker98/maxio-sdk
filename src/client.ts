import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import { DEFAULT_CLIENT_OPTIONS, type ClientOptions } from "./client-options.js";
import { RawClient } from "./core/raw-client.js";
import { AdvanceInvoice } from "./resources/advance-invoice.js";
import { ApiExports } from "./resources/api-exports.js";
import { BillingPortal } from "./resources/billing-portal.js";
import { ComponentPricePoints } from "./resources/component-price-points.js";
import { Components } from "./resources/components.js";
import { Coupons } from "./resources/coupons.js";
import { CustomFields } from "./resources/custom-fields.js";
import { Customers } from "./resources/customers.js";
import { EventsBasedBillingSegments } from "./resources/events-based-billing-segments.js";
import { Events } from "./resources/events.js";
import { Insights } from "./resources/insights.js";
import { Invoices } from "./resources/invoices.js";
import { MaxioGateway } from "./resources/maxio-gateway.js";
import { Offers } from "./resources/offers.js";
import { PaymentProfiles } from "./resources/payment-profiles.js";
import { ProductFamilies } from "./resources/product-families.js";
import { ProductPricePoints } from "./resources/product-price-points.js";
import { Products } from "./resources/products.js";
import { ProformaInvoices } from "./resources/proforma-invoices.js";
import { ReasonCodes } from "./resources/reason-codes.js";
import { ReferralCodes } from "./resources/referral-codes.js";
import { SalesCommissions } from "./resources/sales-commissions.js";
import { Sites } from "./resources/sites.js";
import { SubscriptionComponents } from "./resources/subscription-components.js";
import { SubscriptionGroupInvoiceAccount } from "./resources/subscription-group-invoice-account.js";
import { SubscriptionGroupStatus } from "./resources/subscription-group-status.js";
import { SubscriptionGroups } from "./resources/subscription-groups.js";
import { SubscriptionInvoiceAccount } from "./resources/subscription-invoice-account.js";
import { SubscriptionNotes } from "./resources/subscription-notes.js";
import { SubscriptionProducts } from "./resources/subscription-products.js";
import { SubscriptionRenewals } from "./resources/subscription-renewals.js";
import { SubscriptionStatus } from "./resources/subscription-status.js";
import { Subscriptions } from "./resources/subscriptions.js";
import { Webhooks } from "./resources/webhooks.js";
import { buildServers, type Servers } from "./servers.js";

export class MaxioAdvancedBillingClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #maxioGateway?: MaxioGateway;
  #apiExports?: ApiExports;
  #advanceInvoice?: AdvanceInvoice;
  #billingPortal?: BillingPortal;
  #coupons?: Coupons;
  #components?: Components;
  #componentPricePoints?: ComponentPricePoints;
  #customers?: Customers;
  #customFields?: CustomFields;
  #events?: Events;
  #eventsBasedBillingSegments?: EventsBasedBillingSegments;
  #insights?: Insights;
  #invoices?: Invoices;
  #offers?: Offers;
  #paymentProfiles?: PaymentProfiles;
  #productFamilies?: ProductFamilies;
  #products?: Products;
  #productPricePoints?: ProductPricePoints;
  #proformaInvoices?: ProformaInvoices;
  #reasonCodes?: ReasonCodes;
  #referralCodes?: ReferralCodes;
  #salesCommissions?: SalesCommissions;
  #sites?: Sites;
  #subscriptions?: Subscriptions;
  #subscriptionComponents?: SubscriptionComponents;
  #subscriptionGroups?: SubscriptionGroups;
  #subscriptionGroupInvoiceAccount?: SubscriptionGroupInvoiceAccount;
  #subscriptionGroupStatus?: SubscriptionGroupStatus;
  #subscriptionInvoiceAccount?: SubscriptionInvoiceAccount;
  #subscriptionNotes?: SubscriptionNotes;
  #subscriptionProducts?: SubscriptionProducts;
  #subscriptionRenewals?: SubscriptionRenewals;
  #subscriptionStatus?: SubscriptionStatus;
  #webhooks?: Webhooks;

  constructor(clientOptions: Partial<ClientOptions> = {}) {
    const options = { ...DEFAULT_CLIENT_OPTIONS, ...clientOptions };

    this.#rawClient = new RawClient({
      timeout: options.timeout,
      defaultHeaders: [],
      defaultQuery: [],
      defaultPathParams: [],
      fetch: options.fetch,
    });

    this.#servers = buildServers(options.serverEnvironment, options.serverOptions);

    this.#auth = buildAuthSchemes(options);
  }

  get maxioGateway(): MaxioGateway {
    return (this.#maxioGateway ??= new MaxioGateway(this.#rawClient, this.#servers));
  }

  get apiExports(): ApiExports {
    return (this.#apiExports ??= new ApiExports(this.#rawClient, this.#servers, this.#auth));
  }

  get advanceInvoice(): AdvanceInvoice {
    return (this.#advanceInvoice ??= new AdvanceInvoice(this.#rawClient, this.#servers, this.#auth));
  }

  get billingPortal(): BillingPortal {
    return (this.#billingPortal ??= new BillingPortal(this.#rawClient, this.#servers, this.#auth));
  }

  get coupons(): Coupons {
    return (this.#coupons ??= new Coupons(this.#rawClient, this.#servers, this.#auth));
  }

  get components(): Components {
    return (this.#components ??= new Components(this.#rawClient, this.#servers, this.#auth));
  }

  get componentPricePoints(): ComponentPricePoints {
    return (this.#componentPricePoints ??= new ComponentPricePoints(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get customers(): Customers {
    return (this.#customers ??= new Customers(this.#rawClient, this.#servers, this.#auth));
  }

  get customFields(): CustomFields {
    return (this.#customFields ??= new CustomFields(this.#rawClient, this.#servers, this.#auth));
  }

  get events(): Events {
    return (this.#events ??= new Events(this.#rawClient, this.#servers, this.#auth));
  }

  get eventsBasedBillingSegments(): EventsBasedBillingSegments {
    return (this.#eventsBasedBillingSegments ??= new EventsBasedBillingSegments(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get insights(): Insights {
    return (this.#insights ??= new Insights(this.#rawClient, this.#servers, this.#auth));
  }

  get invoices(): Invoices {
    return (this.#invoices ??= new Invoices(this.#rawClient, this.#servers, this.#auth));
  }

  get offers(): Offers {
    return (this.#offers ??= new Offers(this.#rawClient, this.#servers, this.#auth));
  }

  get paymentProfiles(): PaymentProfiles {
    return (this.#paymentProfiles ??= new PaymentProfiles(this.#rawClient, this.#servers, this.#auth));
  }

  get productFamilies(): ProductFamilies {
    return (this.#productFamilies ??= new ProductFamilies(this.#rawClient, this.#servers, this.#auth));
  }

  get products(): Products {
    return (this.#products ??= new Products(this.#rawClient, this.#servers, this.#auth));
  }

  get productPricePoints(): ProductPricePoints {
    return (this.#productPricePoints ??= new ProductPricePoints(this.#rawClient, this.#servers, this.#auth));
  }

  get proformaInvoices(): ProformaInvoices {
    return (this.#proformaInvoices ??= new ProformaInvoices(this.#rawClient, this.#servers, this.#auth));
  }

  get reasonCodes(): ReasonCodes {
    return (this.#reasonCodes ??= new ReasonCodes(this.#rawClient, this.#servers, this.#auth));
  }

  get referralCodes(): ReferralCodes {
    return (this.#referralCodes ??= new ReferralCodes(this.#rawClient, this.#servers, this.#auth));
  }

  get salesCommissions(): SalesCommissions {
    return (this.#salesCommissions ??= new SalesCommissions(this.#rawClient, this.#servers, this.#auth));
  }

  get sites(): Sites {
    return (this.#sites ??= new Sites(this.#rawClient, this.#servers, this.#auth));
  }

  get subscriptions(): Subscriptions {
    return (this.#subscriptions ??= new Subscriptions(this.#rawClient, this.#servers, this.#auth));
  }

  get subscriptionComponents(): SubscriptionComponents {
    return (this.#subscriptionComponents ??= new SubscriptionComponents(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get subscriptionGroups(): SubscriptionGroups {
    return (this.#subscriptionGroups ??= new SubscriptionGroups(this.#rawClient, this.#servers, this.#auth));
  }

  get subscriptionGroupInvoiceAccount(): SubscriptionGroupInvoiceAccount {
    return (this.#subscriptionGroupInvoiceAccount ??= new SubscriptionGroupInvoiceAccount(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get subscriptionGroupStatus(): SubscriptionGroupStatus {
    return (this.#subscriptionGroupStatus ??= new SubscriptionGroupStatus(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get subscriptionInvoiceAccount(): SubscriptionInvoiceAccount {
    return (this.#subscriptionInvoiceAccount ??= new SubscriptionInvoiceAccount(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get subscriptionNotes(): SubscriptionNotes {
    return (this.#subscriptionNotes ??= new SubscriptionNotes(this.#rawClient, this.#servers, this.#auth));
  }

  get subscriptionProducts(): SubscriptionProducts {
    return (this.#subscriptionProducts ??= new SubscriptionProducts(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get subscriptionRenewals(): SubscriptionRenewals {
    return (this.#subscriptionRenewals ??= new SubscriptionRenewals(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get subscriptionStatus(): SubscriptionStatus {
    return (this.#subscriptionStatus ??= new SubscriptionStatus(this.#rawClient, this.#servers, this.#auth));
  }

  get webhooks(): Webhooks {
    return (this.#webhooks ??= new Webhooks(this.#rawClient, this.#servers, this.#auth));
  }
}
