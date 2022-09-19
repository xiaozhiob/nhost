import { GraphQLJSONObject } from 'graphql-scalars'
import Stripe from 'stripe'

import SchemaBuilder from '@pothos/core'

import { Context, StripeInvoice, StripePaymentMethod, StripeSubscription } from './types'

// TODO: Make sure we either use Type or Types (e.g. StripePaymentMethodTypes or StripePaymentMethodType ) everywhere

const builder = new SchemaBuilder<{
  Scalars: {
    JSON: {
      Output: unknown
      Input: JSON
    }
  }
  Objects: {
    Stripe: {}

    // CUSTOMER
    StripeCustomers: Stripe.ApiList<Stripe.Customer>
    StripeCustomer: Stripe.Customer
    StripeCustomerShipping: Stripe.Customer.Shipping
    StripeCustomerTax: Stripe.Customer.Tax
    StripeCustomerTaxAutomaticTax: Stripe.Customer.Tax.AutomaticTax
    StripeCustomerTaxLocation: Stripe.Customer.Tax.Location

    // ADDRESS
    StripeAddress: Stripe.Address

    // PAYMENT METHOD
    StripePaymentMethods: Stripe.ApiList<StripePaymentMethod>
    StripePaymentMethod: StripePaymentMethod
    StripeCustomerListPaymentMethodsParamsType: Stripe.CustomerListPaymentMethodsParams.Type
    StripePaymentMethodBillingDetails: Stripe.PaymentMethod.BillingDetails
    StripePaymentMethodTypes: Stripe.PaymentMethod.Type

    // PAYMENT METHOD CARD
    StripePaymentMethodCard: Stripe.PaymentMethod.Card
    StripePaymentMethodCardChecks: Stripe.PaymentMethod.Card.Checks
    StripePaymentMethodCardNetworks: Stripe.PaymentMethod.Card.Networks
    StripePaymentMethodCardThreeDSecureUsage: Stripe.PaymentMethod.Card.ThreeDSecureUsage
    StripePaymentMethodCardWallet: Stripe.PaymentMethod.Card.Wallet
    StripePaymentMethodCardWalletMasterpass: Stripe.PaymentMethod.Card.Wallet.Masterpass
    StripePaymentMethodCardWalletType: Stripe.PaymentMethod.Card.Wallet.Type
    StripePaymentMethodCardWalletVisaMasterpass: Stripe.PaymentMethod.Card.Wallet.Masterpass
    StripePaymentMethodCardWalletVisaCheckout: Stripe.PaymentMethod.Card.Wallet.VisaCheckout

    // SUBSCRIPTION
    StripeSubscriptions: Stripe.ApiList<StripeSubscription>
    StripeSubscription: StripeSubscription
    StripeSubscriptionStatus: Stripe.Subscription.Status
    StripeSubscriptionItems: Stripe.ApiList<Stripe.SubscriptionItem>
    StripeSubscriptionItem: Stripe.SubscriptionItem
    StripeSubscriptionItemBillingThresholds: Stripe.SubscriptionItem.BillingThresholds

    // INVOICE
    StripeInvoice: StripeInvoice
    StripeInvoices: Stripe.ApiList<StripeInvoice>
    // StripeInvoceAccountTaxIds: Array<string | Stripe.TaxId | Stripe.DeletedTaxId> | null
    StripeInvoiceAutomaticTax: Stripe.Invoice.AutomaticTax
    StripeInvoiceCustomField: Stripe.Invoice.CustomField
    StripeInvoiceCustomerShipping: Stripe.Invoice.CustomerShipping
    StripeInvoiceCustomerTaxId: Stripe.Invoice.CustomerTaxId
    StripeInvoiceLineItem: Stripe.InvoiceLineItem
    StripeInvoiceRenderingOptions: Stripe.Invoice.RenderingOptions
    StripeInvoiceStatusTransitions: Stripe.Invoice.StatusTransitions

    // PRICE
    StripePrice: Stripe.Price
  }
  Context: Context
}>({})

builder.queryType()
// builder.mutationType()

builder.addScalarType('JSON', GraphQLJSONObject, {})

export { builder }
