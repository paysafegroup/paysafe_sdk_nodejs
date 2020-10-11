import { Card } from '../cardpayments/card'
import { GenericLinkedObject } from '../generic-linked-object'

export class EnrollmentCheck extends GenericLinkedObject {
  merchantRefNum: string
  amount: number
  currency: string
  card: Card
  customerIp: string
  userAgent: string
  acceptHeader: string
  merchantUrl: string
  txnTime: string
  acsURL: string
  paReq: string
  eci: string
  threeDEnrollment: string
  status: string

  constructor(resp) {
    super(resp)
    if (resp) {
      if (resp.merchantRefNum) {
        this.merchantRefNum = resp.merchantRefNum
      }
      if (resp.amount) {
        this.amount = resp.amount
      }
      if (resp.currency) {
        this.currency = resp.currency
      }
      if (resp.card) {
        if (resp.card instanceof Array) {
          this.card = resp.card.map((card) => new Card(card))
        } else {
          this.card = resp.card
        }
      }
      if (resp.customerIp) {
        this.customerIp = resp.customerIp
      }
      if (resp.userAgent) {
        this.userAgent = resp.userAgent
      }
      if (resp.acceptHeader) {
        this.acceptHeader = resp.acceptHeader
      }
      if (resp.merchantUrl) {
        this.merchantUrl = resp.merchantUrl
      }
      if (resp.txnTime) {
        this.txnTime = resp.txnTime
      }
      if (resp.acsURL) {
        this.acsURL = resp.acsURL
      }
      if (resp.paReq) {
        this.paReq = resp.paReq
      }
      if (resp.eci) {
        this.eci = resp.eci
      }
      if (resp.threeDEnrollment) {
        this.threeDEnrollment = resp.threeDEnrollment
      }
      if (resp.status) {
        this.status = resp.status
      }
    }
  }

  setMerchantRefNum(merchantRefNum) {
    this.merchantRefNum = merchantRefNum
  }

  getMerchantRefNum() {
    return this.merchantRefNum
  }

  setAmount(amount) {
    this.amount = amount
  }

  getAmount() {
    return this.amount
  }

  setCurrency(currency) {
    this.currency = currency
  }

  getCurrency() {
    return this.currency
  }

  setCard(card) {
    this.card = card
  }

  getCard() {
    return this.card
  }

  setCustomerIp(customerIp) {
    this.customerIp = customerIp
  }

  getCustomerIp() {
    return this.customerIp
  }

  setUserAgent(userAgent) {
    this.userAgent = userAgent
  }

  getUserAgent() {
    return this.userAgent
  }

  setAcceptHeader(acceptHeader) {
    this.acceptHeader = acceptHeader
  }

  getAcceptHeader() {
    return this.acceptHeader
  }

  setMerchantUrl(merchantUrl) {
    this.merchantUrl = merchantUrl
  }

  getMerchantUrl() {
    return this.merchantUrl
  }

  setTxnTime(txnTime) {
    this.txnTime = txnTime
  }

  getTxnTime() {
    return this.txnTime
  }

  setAcsURL(acsURL) {
    this.acsURL = acsURL
  }

  getAcsURL() {
    return this.acsURL
  }

  setPaReq(paReq) {
    this.paReq = paReq
  }

  getPaReq() {
    return this.paReq
  }

  setEci(eci) {
    this.eci = eci
  }

  getEci() {
    return this.eci
  }

  setThreeDEnrollment(threeDEnrollment) {
    this.threeDEnrollment = threeDEnrollment
  }

  getThreeDEnrollment() {
    return this.threeDEnrollment
  }

  setStatus(status) {
    this.status = status
  }

  getStatus() {
    return this.status
  }
}
