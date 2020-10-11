import { GenericLinkedObject } from '../generic-linked-object'
import { EnrollmentCheck } from './enrollmentchecks'

export class Authentication extends GenericLinkedObject {
  merchantRefNum: string
  paRes: string
  customerIp: string
  txnTime: string
  threeDResult: string
  signatureStatus: string
  enrollmentchecks?: EnrollmentCheck
  eci: string
  cavv: string
  xid: string
  status: string

  constructor(resp) {
    super(resp)

    if (resp) {
      if (resp.merchantRefNum) {
        this.merchantRefNum = resp.merchantRefNum
      }
      if (resp.paRes) {
        this.paRes = resp.paRes
      }
      if (resp.customerIp) {
        this.customerIp = resp.customerIp
      }
      if (resp.txnTime) {
        this.txnTime = resp.txnTime
      }
      if (resp.threeDResult) {
        this.threeDResult = resp.threeDResult
      }
      if (resp.signatureStatus) {
        this.signatureStatus = resp.signatureStatus
      }
      if (resp.eci) {
        this.eci = resp.eci
      }
      if (resp.cavv) {
        this.cavv = resp.cavv
      }
      if (resp.xid) {
        this.xid = resp.xid
      }
      if (resp.status) {
        this.status = resp.status
      }
      if (resp.enrollmentchecks) {
        if (resp.enrollmentchecks instanceof Array) {
          this.enrollmentchecks = resp.enrollmentchecks.map((enrollment) => new EnrollmentCheck(enrollment))
        } else {
          this.enrollmentchecks = resp.enrollmentchecks
        }
      }
    }
  }

  setMerchantRefNum(merchantRefNum) {
    this.merchantRefNum = merchantRefNum
  }

  getMerchantRefNum() {
    return this.merchantRefNum
  }

  setPaRes(paRes) {
    this.paRes = paRes
  }

  getPaRes() {
    return this.paRes
  }

  setCustomerIp(customerIp) {
    this.customerIp = customerIp
  }

  getCustomerIp() {
    return this.customerIp
  }

  setTxnTime(txnTime) {
    this.txnTime = txnTime
  }

  getTxnTime() {
    return this.txnTime
  }

  setThreeDResult(threeDResult) {
    this.threeDResult = threeDResult
  }

  getThreeDResult() {
    return this.threeDResult
  }

  setSignatureStatus(signatureStatus) {
    this.signatureStatus = signatureStatus
  }

  getSignatureStatus() {
    return this.signatureStatus
  }

  setEci(eci) {
    this.eci = eci
  }

  getEci() {
    return this.eci
  }

  setCavv(cavv) {
    this.cavv = cavv
  }

  getCavv() {
    return this.cavv
  }

  setXid(xid) {
    this.xid = xid
  }

  getXid() {
    return this.xid
  }

  setStatus(status) {
    this.status = status
  }

  getStatus() {
    return this.status
  }

  setEnrollment(enrollmentCheck: EnrollmentCheck) {
    this.enrollmentchecks = enrollmentCheck
  }

  getEnrollment() {
    return this.enrollmentchecks
  }
}
