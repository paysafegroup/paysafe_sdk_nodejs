import { MerchantDescriptor } from '../account/merchantDescriptor'
import { Profile } from '../customervault/profile'
import { GenericLinkedObject } from '../generic-linked-object'
import { AccordD } from './accordD'
import { AcquirerResponse } from './acquirerResponse'
import { Authentication } from './authentication'
import { BillingDetails } from './billingDetails'
import { Card } from './card'
import { ShippingDetails } from './shippingDetails'

export class Verification extends GenericLinkedObject {
  merchantRefNum: string
  childAccountNum: string
  card: Card
  authCode: string
  profile: Profile
  billingDetails: BillingDetails
  customerIp: string
  dupCheck: boolean
  description: string
  txnTime: string
  currencyCode: string
  avsResponse: 'MATCH' | 'MATCH_ADDRESS_ONLY' | 'MATCH_ZIP_ONLY' | 'NO_MATCH' | 'NOT_PROCESSED' | 'UNKNOWN'
  cvvVerification: 'MATCH' | 'NO_MATCH' | 'NOT_PROCESSED' | 'UNKNOWN'

  /**
   * This is the status of the transaction request. Possible values are:
   * RECEIVED – Our system has received the request and is waiting for the downstream processor’s response.
   * COMPLETED – The transaction has been completed.
   * FAILED – The transaction failed, due to either an error or being declined.
   */
  status: 'RECEIVED' | 'COMPLETED' | 'FAILED'

  riskReasonCode: number[]
  acquirerResponse: AcquirerResponse
  verifications: Verification[]
  accordD: AccordD
  merchantDescriptor: MerchantDescriptor
  shippingDetails: ShippingDetails
  authentication: Authentication

  constructor(resp) {
    super(resp)

    if (resp) {
      if (resp.merchantRefNum) {
        this.merchantRefNum = resp.merchantRefNum
      }
      if (resp.childAccountNum) {
        this.childAccountNum = resp.childAccountNum
      }
      if (resp.card) {
        this.card = new Card(resp.card)
      }
      if (resp.authCode) {
        this.authCode = resp.authCode
      }
      if (resp.profile) {
        this.profile = new Profile(resp.profile)
      }
      if (resp.billingDetails) {
        this.billingDetails = new BillingDetails(resp.billingDetails)
      }
      if (resp.customerIp) {
        this.customerIp = resp.customerIp
      }
      if (typeof resp.dupCheck !== 'undefined') {
        this.dupCheck = resp.dupCheck
      }
      if (resp.description) {
        this.description = resp.description
      }
      if (resp.txnTime) {
        this.txnTime = resp.txnTime
      }
      if (resp.currencyCode) {
        this.currencyCode = resp.currencyCode
      }
      if (resp.avsResponse) {
        this.avsResponse = resp.avsResponse
      }
      if (resp.cvvVerification) {
        this.cvvVerification = resp.cvvVerification
      }
      if (resp.status) {
        this.status = resp.status
      }
      if (resp.riskReasonCode) {
        this.riskReasonCode = resp.riskReasonCode
      }
      if (resp.acquirerResponse) {
        this.acquirerResponse = new AcquirerResponse(resp.acquirerResponse)
      }
      if (resp.verifications) {
        this.verifications = resp.verifications.map((verification) => new Verification(verification))
      }
      if (resp.accordD) {
        this.accordD = new AccordD(resp.accordD)
      }
      if (resp.merchantDescriptor) {
        this.merchantDescriptor = new MerchantDescriptor(resp.merchantDescriptor)
      }
      if (resp.shippingDetails) {
        this.shippingDetails = new ShippingDetails(resp.shippingDetails)
      }
      if (resp.authentication) {
        this.authentication = new Authentication(resp.authentication)
      }
    }
  }

  setAccordD(accordD: AccordD) {
    this.accordD = accordD
  }

  getAccordD() {
    return this.accordD
  }

  setMerchantDescriptor(merchantDescriptor: MerchantDescriptor) {
    this.merchantDescriptor = merchantDescriptor
  }

  getMerchantDescriptor() {
    return this.merchantDescriptor
  }

  setShippingDetails(shippingDetails: ShippingDetails) {
    this.shippingDetails = shippingDetails
  }

  getShippingDetails() {
    return this.shippingDetails
  }

  setAuthentication(authentication: Authentication) {
    this.authentication = authentication
  }

  getAuthentication() {
    return this.authentication
  }

  setVerifications(verifications) {
    this.verifications = verifications
  }

  getVerifications() {
    return this.verifications
  }

  setCvvVerification(cvvVerification) {
    this.cvvVerification = cvvVerification
  }

  getCvvVerification() {
    return this.cvvVerification
  }

  setAvsResponse(avsResponse) {
    this.avsResponse = avsResponse
  }
  getAvsResponse() {
    return this.avsResponse
  }

  setCurrencyCode(currencyCode) {
    this.currencyCode = currencyCode
  }

  getCurrencyCode() {
    return this.currencyCode
  }

  setDescription(description) {
    this.description = description
  }

  getDescription() {
    return this.description
  }

  setCustomerIp(customerIp) {
    this.customerIp = customerIp
  }

  getCustomerIp() {
    return this.customerIp
  }

  setBillingDetails(billingDetails) {
    this.billingDetails = billingDetails
  }

  getBillingDetails() {
    return this.billingDetails
  }

  setProfile(profile) {
    this.profile = profile
  }

  getProfile() {
    return this.profile
  }

  setAuthCode(authCode) {
    this.authCode = authCode
  }

  getAuthCode() {
    return this.authCode
  }

  setCard(card) {
    this.card = card
  }

  getCard() {
    return this.card
  }

  setTxnTime(txnTime) {
    this.txnTime = txnTime
  }

  getTxnTime() {
    return this.txnTime
  }

  setDupCheck(dupCheck) {
    this.dupCheck = dupCheck
  }

  getDupCheck() {
    return this.dupCheck
  }

  setChildAccountNum(childAccountNum) {
    this.childAccountNum = childAccountNum
  }

  getChildAccountNum() {
    return this.childAccountNum
  }

  setAcquirerResponse(acquirerResponse) {
    this.acquirerResponse = acquirerResponse
  }
  getAcquirerResponse() {
    return this.acquirerResponse
  }

  setRiskReasonCode(riskReasonCode) {
    this.riskReasonCode = riskReasonCode
  }

  getRiskReasonCode() {
    return this.riskReasonCode
  }

  setMerchantRefNum(merchantRefNum) {
    this.merchantRefNum = merchantRefNum
  }

  getMerchantRefNum() {
    return this.merchantRefNum
  }
}
