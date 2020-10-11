import { GenericLinkedObject } from '../generic-linked-object'
import { AcquirerResponse } from './acquirerResponse'
import { Settlement } from './settlement'

export class Refund extends GenericLinkedObject {
  merchantRefNum: string

  /**
   * This is the status of the transaction request. Possible values are:
   * RECEIVED – Our system has received the request and is waiting for the downstream processor’s response.
   * COMPLETED – The transaction has been completed.
   * PENDING – Our system has received the request but it has not yet been batched.
   * FAILED – The transaction failed, due to either an error or being declined.
   * CANCELLED – The request has been fully voided (reversed).
   */
  status: 'RECEIVED' | 'COMPLETED' | 'PENDING' | 'FAILED' | 'CANCELLED'

  amount: number
  childAccountNum: string
  dupCheck: boolean
  txnTime: string
  riskReasonCode: string
  acquirerResponse: AcquirerResponse
  settlements?: Settlement
  refunds: Refund[]
  currencyCode: string
  originalMerchantRefNum: string
  mode: string
  authType: string
  confirmationNumber: string

  constructor(resp) {
    super(resp)

    if (resp) {
      if (resp.merchantRefNum) {
        this.merchantRefNum = resp.merchantRefNum
      }
      if (resp.amount) {
        this.amount = resp.amount
      }
      if (resp.childAccountNum) {
        this.childAccountNum = resp.childAccountNum
      }
      if (typeof resp.dupCheck !== 'undefined') {
        this.dupCheck = resp.dupCheck
      }
      if (resp.txnTime) {
        this.txnTime = resp.txnTime
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
      if (resp.settlements) {
        this.settlements = new Settlement(resp.settlements)
      }
      if (resp.refunds) {
        this.refunds = resp.refunds.map((refund) => new Refund(refund))
      }
      if (resp.currencyCode) {
        this.currencyCode = resp.currencyCode
      }
      if (resp.originalMerchantRefNum) {
        this.originalMerchantRefNum = resp.originalMerchantRefNum
      }
      if (resp.mode) {
        this.mode = resp.mode
      }
      if (resp.authType) {
        this.authType = resp.authType
      }
      if (resp.confirmationNumber) {
        this.confirmationNumber = resp.confirmationNumber
      }
    }
  }

  setConfirmationNumber(confirmationNumber) {
    this.confirmationNumber = confirmationNumber
  }

  getConfirmationNumber() {
    return this.confirmationNumber
  }

  setAuthType(authType) {
    this.authType = authType
  }

  getAuthType() {
    return this.authType
  }

  setMode(mode) {
    this.mode = mode
  }

  getMode() {
    return this.mode
  }

  setOriginalMerchantRefNum(originalMerchantRefNum) {
    this.originalMerchantRefNum = originalMerchantRefNum
  }

  getOriginalMerchantRefNum() {
    return this.originalMerchantRefNum
  }

  setCurrencyCode(currencyCode) {
    this.currencyCode = currencyCode
  }

  getCurrencyCode() {
    return this.currencyCode
  }

  setRefunds(refunds) {
    this.refunds = refunds
  }

  getRefunds() {
    return this.refunds
  }

  setStatus(status) {
    this.status = status
  }

  getStatus() {
    return this.status
  }

  setSettlements(settlements) {
    this.settlements = settlements
  }

  getSettlements() {
    return this.settlements
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
