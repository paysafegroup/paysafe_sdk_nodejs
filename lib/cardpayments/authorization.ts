import { MerchantDescriptor } from '../account/merchantDescriptor'
import { Profile } from '../customervault/profile'
import { GenericLinkedObject } from '../generic-linked-object'
import { AccordD } from './accordD'
import { AcquirerResponse } from './acquirerResponse'
import { Authentication } from './authentication'
import { BillingDetails } from './billingDetails'
import { Card } from './card'
import { MasterPass } from './masterPass'
import { Settlement } from './settlement'
import { ShippingDetails } from './shippingDetails'
import { VisaAdditionalAuthData } from './visaAdditionalAuthData'

export class Authorization extends GenericLinkedObject {
  merchantRefNum: string
  amount: number
  settleWithAuth: boolean
  availableToSettle: number
  childAccountNum: string
  card: Card
  authentication: Authentication
  authCode: string
  profile: Profile
  billingDetails: BillingDetails
  shippingDetails: ShippingDetails
  recurring?: 'INITIAL' | 'RECURRING'
  customerIp: string
  dupCheck: boolean
  keywords: string[]
  merchantDescriptor: MerchantDescriptor
  accordD: AccordD
  description: string
  masterPass: MasterPass
  txnTime: string // Date
  currencyCode: string
  avsResponse: 'MATCH' | 'MATCH_ADDRESS_ONLY' | 'MATCH_ZIP_ONLY' | 'NO_MATCH' | 'NOT_PROCESSED' | 'UNKNOWN'
  cvvVerification: 'MATCH' | 'NO_MATCH' | 'NOT_PROCESSED' | 'UNKNOWN'
  status: 'RECEIVED' | 'COMPLETED' | 'HELD' | 'FAILED' | 'CANCELLED'
  riskReasonCode: number[]
  acquirerResponse: AcquirerResponse
  visaAdditionalAuthData?: VisaAdditionalAuthData
  auths: Authorization[]
  settlements: Settlement[]

  constructor(resp) {
    super(resp)

    if (resp) {
      if (resp.merchantRefNum) {
        this.merchantRefNum = resp.merchantRefNum
      }
      if (resp.amount) {
        this.amount = resp.amount
      }
      if (resp.settleWithAuth !== undefined) {
        this.settleWithAuth = resp.settleWithAuth
      }
      if (resp.availableToSettle) {
        this.availableToSettle = resp.availableToSettle
      }
      if (resp.childAccountNum) {
        this.childAccountNum = resp.childAccountNum
      }
      if (resp.card) {
        this.card = new Card(resp.card)
      }
      if (resp.authentication) {
        this.authentication = new Authentication(resp.authentication)
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
      if (resp.shippingDetails) {
        this.shippingDetails = new ShippingDetails(resp.shippingDetails)
      }
      // TODO: storedCredential
      if (resp.recurring) {
        this.recurring = resp.recurring
      }
      if (resp.customerIp) {
        this.customerIp = resp.customerIp
      }
      if (resp.dupCheck !== undefined) {
        this.dupCheck = resp.dupCheck
      }
      if (resp.keywords) {
        this.keywords = resp.keywords
      }
      if (resp.merchantDescriptor) {
        this.merchantDescriptor = new MerchantDescriptor(resp.merchantDescriptor)
      }
      if (resp.accordD) {
        this.accordD = new AccordD(resp.accordD)
      }
      if (resp.description) {
        this.description = resp.description
      }
      if (resp.masterPass) {
        this.masterPass = new MasterPass(resp.masterPass)
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
      if (resp.visaAdditionalAuthData) {
        this.visaAdditionalAuthData = new VisaAdditionalAuthData(resp.visaAdditionalAuthData)
      }
      if (resp.auths) {
        this.auths = resp.auths.map((auth) => new Authorization(auth))
      }
      if (resp.settlements) {
        this.settlements = resp.settlements.map((settlement) => new Settlement(settlement))
      }
    }
  }

  setSettlements(settlements: Settlement[]) {
    this.settlements = settlements
  }

  getSettlements() {
    return this.settlements
  }

  setAuths(auths: Authorization[]) {
    this.auths = auths
  }

  getAuths() {
    return this.auths
  }

  setShippingDetails(
      shippingDetails) {
    this.shippingDetails = shippingDetails
  }

  getShippingDetails() {
    return this.shippingDetails
  }

  setVisaAdditionalAuthData(
      visaAdditionalAuthData) {
    this.visaAdditionalAuthData = visaAdditionalAuthData
  }

  getVisaAdditionalAuthData() {
    return this.visaAdditionalAuthData
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

  setTxnTime(txnTime) {
    this.txnTime = txnTime
  }

  getTxnTime() {
    return this.txnTime
  }

  setMasterPass(masterPass) {
    this.masterPass = masterPass
  }
  getMasterPass() {
    return this.masterPass
  }

  setDescription(description) {
    this.description = description
  }

  getDescription() {
    return this.description
  }

  setAccordD(accordD) {
    this.accordD = accordD
  }
  getAccordD() {
    return this.accordD
  }

  setMerchantDescriptor(
      merchantDescriptor) {
    this.merchantDescriptor = merchantDescriptor
  }

  getMerchantDescriptor() {
    return this.merchantDescriptor
  }

  setCard(card) {
    this.card = card
  }
  getCard() {
    return this.card
  }

  setKeywords(keywords) {
    this.keywords = keywords
  }

  getKeywords() {
    return this.keywords
  }

  setDupCheck(dupCheck: boolean) {
    this.dupCheck = dupCheck
  }

  getDupCheck() {
    return this.dupCheck
  }

  setRecurring(recurring) {
    this.recurring = recurring
  }
  getRecurring() {
    return this.recurring
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

  setCustomerIp(customerIp) {
    this.customerIp = customerIp
  }

  getCustomerIp() {
    return this.customerIp
  }

  setAuthentication(authentication) {
    this.authentication = authentication
  }

  getAuthentication() {
    return this.authentication
  }

  setChildAccountNum(childAccountNum) {
    this.childAccountNum = childAccountNum
  }
  getChildAccountNum() {
    return this.childAccountNum
  }

  setAvailableToSettle(availableToSettle) {
    this.availableToSettle = availableToSettle
  }

  getAvailableToSettle() {
    return this.availableToSettle
  }

  setSettleWithAuth(settleWithAuth) {
    this.settleWithAuth = settleWithAuth
  }
  getSettleWithAuth() {
    return this.settleWithAuth
  }

  setAmount(amount) {
    this.amount = amount
  }

  getAmount() {
    return this.amount
  }

  setMerchantRefNum(merchantRefNum) {
    this.merchantRefNum = merchantRefNum
  }
  getMerchantRefNum() {
    return this.merchantRefNum
  }

  setStatus(status) {
    this.status = status
  }

  getStatus() {
    return this.status
  }
}
