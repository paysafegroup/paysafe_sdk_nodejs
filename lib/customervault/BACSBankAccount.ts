import { GenericLinkedObject } from '../generic-linked-object'
import { Mandate } from './mandate'
import { Profile } from './profile'

export class BACSBankAccount extends GenericLinkedObject {
  nickName: string
  merchantRefNum: string
  status: string
  statusReason: string
  accountNumber: string
  accountHolderName: string
  sortCode: string
  billingAddressId: string
  mandates: Mandate[]
  lastDigits: string
  paymentToken: string
  mandateReference: string
  profile?: Profile

  constructor(resp) {
    super(resp)

    if (resp) {
      if (resp.nickName) {
        this.nickName = resp.nickName
      }
      if (resp.merchantRefNum) {
        this.merchantRefNum = resp.merchantRefNum
      }
      if (resp.status) {
        this.status = resp.status
      }
      if (resp.statusReason) {
        this.statusReason = resp.statusReason
      }
      if (resp.accountNumber) {
        this.accountNumber = resp.accountNumber
      }
      if (resp.accountHolderName) {
        this.accountHolderName = resp.accountHolderName
      }
      if (resp.sortCode) {
        this.sortCode = resp.sortCode
      }
      if (resp.billingAddressId) {
        this.billingAddressId = resp.billingAddressId
      }
      if (resp.mandates) {
        if (resp.mandates instanceof Array) {
          this.mandates = resp.mandates.map((mandate) => new Mandate(mandate))
        } else {
          this.mandates = resp.mandates
        }
      }
      if (resp.lastDigits) {
        this.lastDigits = resp.lastDigits
      }
      if (resp.paymentToken) {
        this.paymentToken = resp.paymentToken
      }
      if (resp.mandateReference) {
        this.mandateReference = resp.mandateReference
      }
      if (resp.profile) {
        this.profile = new Profile(resp.profile)
      }
    }
  }
  setNickName(nickName: string) {
    this.nickName = nickName
  }
  getNickName() {
    return this.nickName
  }
  setMerchantRefNum(merchantRefNum: string) {
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
  setStatusReason(statusReason) {
    this.statusReason = statusReason
  }
  getStatusReason() {
    return this.statusReason
  }
  setAccountNumber(accountNumber) {
    this.accountNumber = accountNumber
  }
  getAccountNumber() {
    return this.accountNumber
  }
  setAccountHolderName(accountHolderName) {
    this.accountHolderName = accountHolderName
  }
  getAccountHolderName() {
    return this.accountHolderName
  }
  setSortCode(sortCode) {
    this.sortCode = sortCode
  }
  getSortCode() {
    return this.sortCode
  }
  setMandates(mandates) {
    this.mandates = mandates
  }
  getMandates() {
    return this.mandates
  }
  setLastDigits(lastDigits) {
    this.lastDigits = lastDigits
  }
  getLastDigits() {
    return this.lastDigits
  }
  setPaymentToken(paymentToken) {
    this.paymentToken = paymentToken
  }
  getPaymentToken() {
    return this.paymentToken
  }
  setMandateReference(mandateReference) {
    this.mandateReference = mandateReference
  }
  getMandateReference() {
    return this.mandateReference
  }
  setProfile(profile) {
    this.profile = profile
  }
  getProfile() {
    return this.profile
  }
  setBillingAddressId(billingAddressId) {
    this.billingAddressId = billingAddressId
  }
  getBillingAddressId() {
    return this.billingAddressId
  }
}
