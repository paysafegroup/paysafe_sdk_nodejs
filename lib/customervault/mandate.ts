import { GenericObject } from '../generic'
import { BACSBankAccount } from './BACSBankAccount'
import { Profile } from './profile'
import { SEPABankAccount } from './SEPABankAccount'

export class Mandate extends GenericObject {
  reference: string
  bankAccountId: string
  statusChangeDate: string
  statusReasonCode: string
  statusReason: string
  paymentToken: string
  status: string
  profiles: Profile
  sepabankaccounts: SEPABankAccount
  bacsbankaccounts: BACSBankAccount

  constructor(resp) {
    super(resp)

    if (resp) {
      if (resp.reference) {
        this.reference = resp.reference
      }
      if (resp.bankAccountId) {
        this.bankAccountId = resp.bankAccountId
      }
      if (resp.statusChangeDate) {
        this.statusChangeDate = resp.statusChangeDate
      }
      if (resp.statusReasonCode) {
        this.statusReasonCode = resp.statusReasonCode
      }
      if (resp.statusReason) {
        this.statusReason = resp.statusReason
      }
      if (resp.paymentToken) {
        this.paymentToken = resp.paymentToken
      }
      if (resp.status) {
        this.status = resp.status
      }
      if (resp.profiles) {
        this.profiles = new Profile(resp.profiles)
      }
      if (resp.sepabankaccounts) {
        this.sepabankaccounts = new SEPABankAccount(resp.sepabankaccounts)
      }
      if (resp.bacsbankaccounts) {
        this.bacsbankaccounts = new BACSBankAccount(resp.bacsbankaccounts)
      }
    }
  }

  setReference(reference) {
    this.reference = reference
  }

  getReference() {
    return this.reference
  }

  setBankAccountId(bankAccountId) {
    this.bankAccountId = bankAccountId
  }

  getBankAccountId() {
    return this.bankAccountId
  }

  setStatus(status) {
    this.status = status
  }

  getStatus() {
    return this.status
  }

  setStatusChangeDate(statusChangeDate) {
    this.statusChangeDate = statusChangeDate
  }

  getStatusChangeDate() {
    return this.statusChangeDate
  }

  setStatusReasonCode(statusReasonCode) {
    this.statusReasonCode = statusReasonCode
  }

  getStatusReasonCode() {
    return this.statusReasonCode
  }

  setStatusReason(statusReason) {
    this.statusReason = statusReason
  }

  getStatusReason() {
    return this.statusReason
  }

  setPaymentToken(paymentToken) {
    this.paymentToken = paymentToken
  }

  getPaymentToken() {
    return this.paymentToken
  }

  setProfiles(profile: Profile) {
    this.profiles = profile
  }

  getProfiles() {
    return this.profiles
  }

  setSEPABankAccounts(sepabankaccounts) {
    this.sepabankaccounts = sepabankaccounts
  }

  getSEPABankAccounts() {
    return this.sepabankaccounts
  }

  setBACSBankAccounts(bacsbankaccounts) {
    this.bacsbankaccounts = bacsbankaccounts
  }

  getBACSBankAccounts() {
    return this.bacsbankaccounts
  }
}
