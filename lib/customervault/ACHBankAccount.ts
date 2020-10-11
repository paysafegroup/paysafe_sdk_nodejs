import { GenericObject } from '../generic'
import { Profile } from './profile'

export class ACHBankAccount extends GenericObject {
  nickName: string
  merchantRefNum: string
  status: string
  statusReason: string
  accountNumber: string
  accountHolderName: string
  routingNumber: string
  accountType: string
  lastDigits: string
  billingAddressId: string
  paymentToken: string
  payMethod: string
  paymentDescriptor: string
  profile: Profile

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
      if (resp.routingNumber) {
        this.routingNumber = resp.routingNumber
      }
      if (resp.accountType) {
        this.accountType = resp.accountType
      }
      if (resp.lastDigits) {
        this.lastDigits = resp.lastDigits
      }
      if (resp.billingAddressId) {
        this.billingAddressId = resp.billingAddressId
      }
      if (resp.paymentToken) {
        this.paymentToken = resp.paymentToken
      }
      if (resp.payMethod) {
        this.payMethod = resp.payMethod
      }
      if (resp.paymentDescriptor) {
        this.paymentDescriptor = resp.paymentDescriptor
      }
      if (resp.profile) {
        this.profile = new Profile(resp.profile)
      }
    }
  }

  setNickName(nickName) {
    this.nickName = nickName
  }

  getNickName() {
    return this.nickName
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

  setstatusReason(statusReason) {
    this.statusReason = statusReason
  }

  getstatusReason() {
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

  setRoutingNumber(routingNumber) {
    this.routingNumber = routingNumber
  }

  getRoutingNumber() {
    return this.routingNumber
  }

  setAccountType(accountType) {
    this.accountType = accountType
  }

  getAccountType() {
    return this.accountType
  }

  setLastDigits(lastDigits) {
    this.lastDigits = lastDigits
  }

  getLastDigits() {
    return this.lastDigits
  }

  setBillingAddressId(billingAddressId) {
    this.billingAddressId = billingAddressId
  }

  getBillingAddressId() {
    return this.billingAddressId
  }

  setPaymentToken(paymentToken) {
    this.paymentToken = paymentToken
  }

  getPaymentToken() {
    return this.paymentToken
  }

  setPayMethod(payMethod) {
    this.payMethod = payMethod
  }

  getPayMethod() {
    return this.payMethod
  }

  setPaymentDescriptor(paymentDescriptor) {
    this.paymentDescriptor = paymentDescriptor
  }

  getPaymentDescriptor() {
    return this.paymentDescriptor
  }

  setProfile(profile) {
    this.profile = profile
  }
}
