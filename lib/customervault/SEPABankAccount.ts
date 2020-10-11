import { GenericLinkedObject } from '../generic-linked-object'
import { Mandate } from './mandate'
import { Profile } from './profile'

export class SEPABankAccount extends GenericLinkedObject {
  nickName: string
  merchantRefNum: string
  status: string
  statusReason: string
  iban: string
  accountHolderName: string
  bic: string
  mandates: Mandate[]
  lastDigits: string
  billingAddressId: string
  paymentToken: string
  mandateReference: string
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
      if (resp.iban) {
        this.iban = resp.iban
      }
      if (resp.accountHolderName) {
        this.accountHolderName = resp.accountHolderName
      }
      if (resp.bic) {
        this.bic = resp.bic
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
      if (resp.billingAddressId) {
        this.billingAddressId = resp.billingAddressId
      }
      if (resp.paymentToken) {
        this.paymentToken = resp.paymentToken
      }
      if (resp.mandateReference) {
        this.mandateReference = resp.mandateReference
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

  setIban(iban) {
    this.iban = iban
  }

  getIban() {
    return this.iban
  }

  setAccountHolderName(accountHolderName) {
    this.accountHolderName = accountHolderName
  }

  getAccountHolderName() {
    return this.accountHolderName
  }

  setBic(bic) {
    this.bic = bic
  }

  getBic() {
    return this.bic
  }

  setMandates(mandates: Mandate[]) {
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

  setMandateReference(mandateReference) {
    this.mandateReference = mandateReference
  }

  getMandateReference() {
    return this.mandateReference
  }
}
