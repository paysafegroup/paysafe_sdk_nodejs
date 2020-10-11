import { GenericLinkedObject } from '../generic-linked-object'
import { AcquirerResponse } from './acquirerResponse'
import { Authorization } from './authorization'

export class AuthorizationReversal extends GenericLinkedObject {
  merchantRefNum: string
  amount: string
  childAccountNum: string
  dupCheck: boolean
  txnTime: string
  status: string
  riskReasonCode: string
  acquirerResponse: AcquirerResponse
  voidAuths: AuthorizationReversal[]
  authorization?: Authorization

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
      if (resp.voidAuths) {
        this.voidAuths = resp.voidAuths.map((voidAuth) => new AuthorizationReversal(voidAuth))
      }
      if (resp.authorization) {
        this.authorization = new Authorization(resp.authorization)
      }
    }
  }

  setAuthorization(authorization: Authorization) {
    this.authorization = authorization
  }

  getAuthorization() {
    return this.authorization
  }

  setVoidAuths(voidAuths: AuthorizationReversal[]) {
    this.voidAuths = voidAuths
  }

  getVoidAuths() {
    return this.voidAuths
  }

  setTxnTime(txnTime) {
    this.txnTime = txnTime
  }

  getTxnTime() {
    return this.txnTime
  }

  setDupCheck(dupCheck: boolean) {
    this.dupCheck = dupCheck
  }

  getDupCheck() {
    return this.dupCheck
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

  setChildAccountNum(childAccountNum) {
    this.childAccountNum = childAccountNum
  }

  getChildAccountNum() {
    return this.childAccountNum
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
