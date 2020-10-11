import { GenericLinkedObject } from '../generic-linked-object'
import { AcquirerResponse } from './acquirerResponse'
import { Authorization } from './authorization'

export type SettlementStatus = 'RECEIVED' | 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'CANCELLED'

export class Settlement extends GenericLinkedObject {
  /**
   * This is the merchant reference number created by the merchant and submitted as part of the request. It must be unique for each request.
   */
  merchantRefNum: string

  /**
   * This is the amount of the request, in minor units.For example, to process US $10.99, this value should be 1099.
   * To process 1000 Japanese yen, this value should be 1000. To process 10.139 Tunisian dinar, this value should be 10139.
   */
  amount: number

  availableToRefund: string
  childAccountNum: string
  txnTime: string
  dupCheck: boolean

  authorization?: Authorization

  /**
   * This is the status of the transaction request. Possible values are:
   * RECEIVED – Our system has received the request and is waiting for the downstream processor’s response.
   * PENDING – Our system has received the request but it has not yet been batched.
   * PROCESSING – The Settlement batch has started.
   * COMPLETED – The transaction has been completed.
   * FAILED – The transaction failed, due to either an error or being declined.
   * CANCELLED – The transaction request has been cancelled.
   */
  status: SettlementStatus

  riskReasonCode: number[]
  acquirerResponse: AcquirerResponse
  settlements: Settlement[]
  originalMerchantRefNum: string
  mode: string
  currencyCode: string
  confirmationNumber: string
  authType: string

  constructor(resp?: any) {
    super(resp)

    if (resp) {
      if (resp.merchantRefNum) {
        this.merchantRefNum = resp.merchantRefNum
      }
      if (resp.amount) {
        this.amount = resp.amount
      }
      if (resp.availableToRefund) {
        this.availableToRefund = resp.availableToRefund
      }
      if (resp.childAccountNum) {
        this.childAccountNum = resp.childAccountNum
      }
      if (resp.txnTime) {
        this.txnTime = resp.txnTime
      }
      if (resp.error) {
        this.error = resp.error
      }
      if (typeof resp.dupCheck !== 'undefined') {
        this.dupCheck = resp.dupCheck
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
      if (resp.authorization) {
        this.authorization =  new Authorization(resp.authorization)
      }
      if (resp.settlements) {
        this.settlements = resp.settlements.map((settlement) => new Settlement(settlement))
      }
      if (resp.originalMerchantRefNum) {
        this.originalMerchantRefNum = resp.originalMerchantRefNum
      }
      if (resp.mode) {
        this.mode = resp.mode
      }
      if (resp.currencyCode) {
        this.currencyCode = resp.currencyCode
      }
      if (resp.confirmationNumber) {
        this.confirmationNumber = resp.confirmationNumber
      }
      if (resp.authType) {
        this.authType = resp.authType
      }
    }
  }

  setOriginalMerchantRefNum(originalMerchantRefNum) {
    this.originalMerchantRefNum = originalMerchantRefNum
  }

  getOriginalMerchantRefNum() {
    return this.originalMerchantRefNum
  }

  setAuthType(authType) {
    this.authType = authType
  }

  getAuthType() {
    return this.authType
  }

  setConfirmationNumber(confirmationNumber) {
    this.confirmationNumber = confirmationNumber
  }

  getConfirmationNumber() {
    return this.confirmationNumber
  }

  setCurrencyCode(currencyCode) {
    this.currencyCode = currencyCode
  }

  getCurrencyCode() {
    return this.currencyCode
  }

  setMode(mode) {
    this.mode = mode
  }

  getMode() {
    return this.mode
  }

  setSettlements(settlements) {
    this.settlements = settlements
  }

  getSettlements() {
    return this.settlements
  }

  setStatus(status: SettlementStatus) {
    this.status = status
  }

  getStatus() {
    return this.status
  }

  setAuthorization(authorization) {
    this.authorization = authorization
  }

  getAuthorization() {
    return this.authorization
  }

  setAvailableToRefund(availableToRefund) {
    this.availableToRefund = availableToRefund
  }

  getAvailableToRefund() {
    return this.availableToRefund
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
}
