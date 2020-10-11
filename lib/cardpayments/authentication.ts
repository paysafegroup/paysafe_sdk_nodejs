import { GenericObject } from '../generic'

export class Authentication extends GenericObject {
  eci: string
  cavv: string
  xid: string
  threeDEnrollment: string
  threeDResult: string
  signatureStatus: string
  threeDSecureVersion: string
  directoryServerTransactionId: string

  constructor(resp) {
    super(resp)

    if (resp) {
      if (resp.eci) {
        this.eci = resp.eci
      }
      if (resp.cavv) {
        this.cavv = resp.cavv
      }
      if (resp.xid) {
        this.xid = resp.xid
      }
      if (resp.threeDEnrollment) {
        this.threeDEnrollment = resp.threeDEnrollment
      }
      if (resp.threeDResult) {
        this.threeDResult = resp.threeDResult
      }
      if (resp.signatureStatus) {
        this.signatureStatus = resp.signatureStatus
      }
      if (resp.threeDSecureVersion) {
        this.threeDSecureVersion = resp.threeDSecureVersion
      }
      if (resp.directoryServerTransactionId) {
        this.directoryServerTransactionId = resp.directoryServerTransactionId
      }
    }
  }
  setDirectoryServerTransactionId(directoryServerTransactionId) {
    this.directoryServerTransactionId = directoryServerTransactionId
  }
  getDirectoryServerTransactionId() {
    return this.directoryServerTransactionId
  }

  setThreeDSecureVersion(threeDSecureVersion: string) {
    this.threeDSecureVersion = threeDSecureVersion
  }

  getThreeDSecureVersion() {
    return this.threeDSecureVersion
  }
  setSignatureStatus(signatureStatus) {
    this.signatureStatus = signatureStatus
  }

  getSignatureStatus() {
    return this.signatureStatus
  }

  setThreeDResult(threeDResult) {
    this.threeDResult = threeDResult
  }

  getThreeDResult() {
    return this.threeDResult
  }

  setThreeDEnrollment(threeDEnrollment) {
    this.threeDEnrollment = threeDEnrollment
  }

  getThreeDEnrollment() {
    return this.threeDEnrollment
  }

  setXid(xid) {
    this.xid = xid
  }

  getXid() {
    return this.xid
  }

  setCavv(cavv) {
    this.cavv = cavv
  }

  getCavv() {
    return this.cavv
  }

  setEci(eci) {
    this.eci = eci
  }

  getEci() {
    return this.eci
  }
}
