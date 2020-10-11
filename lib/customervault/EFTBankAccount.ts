import { GenericObject } from '../generic'
import { Profile } from './profile'

export class EFTBankAccount extends GenericObject {
  nickName: string
  merchantRefNum: string
  status: string
  statusReason: string
  accountNumber: string
  accountHolderName: string
  transitNumber: string
  institutionId: string
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
      if (resp.transitNumber) {
        this.transitNumber = resp.transitNumber
      }
      if (resp.institutionId) {
        this.institutionId = resp.institutionId
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
      /*if (resp.mandates) {
				if (resp.mandates instanceof Array) {
					this.mandates = new createArray(resp.mandates, mandates);
				} else {
					this.mandates = resp.mandates;
				}
			}*/
      if (resp.payMethod) {
        this.payMethod = resp.payMethod
      }
      if (resp.paymentDescriptor) {
        this.paymentDescriptor = resp.paymentDescriptor
      }
      if (resp.status) {
        this.status = resp.status
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

  setTransitNumber(transitNumber) {
    this.transitNumber = transitNumber
  }

  getTransitNumber() {
    return this.transitNumber
  }

  setInstitutionId(institutionId) {
    this.institutionId = institutionId
  }

  getInstitutionId() {
    return this.institutionId
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

  setProfile(profile) {
    this.profile = profile
  }

  getProfile() {
    return this.profile
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
}
