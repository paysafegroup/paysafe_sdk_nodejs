import { GenericLinkedObject } from '../generic-linked-object'

export class MerchantBACSBankAccount extends GenericLinkedObject {
  status: string
  statusReason
  accountNumber: string
  beneficiaryAccountName: string
  beneficiaryBankCountry: string
  sortCode: string
  billingAddressId: string

  constructor(resp) {
    super(resp)

    if (resp) {
      if (resp.status) {
        this.status = resp.status
      }
      if (resp.statusReason) {
        this.statusReason = resp.statusReason
      }
      if (resp.accountNumber) {
        this.accountNumber = resp.accountNumber
      }
      if (resp.beneficiaryAccountName) {
        this.beneficiaryAccountName = resp.beneficiaryAccountName
      }
      if (resp.beneficiaryBankCountry) {
        this.beneficiaryBankCountry = resp.beneficiaryBankCountry
      }
      if (resp.sortCode) {
        this.sortCode = resp.sortCode
      }
      if (resp.billingAddressId) {
        this.billingAddressId = resp.billingAddressId
      }
    }
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

  setBeneficiaryAccountName(beneficiaryAccountName) {
    this.beneficiaryAccountName = beneficiaryAccountName
  }

  getBeneficiaryAccountName() {
    return this.beneficiaryAccountName
  }

  setBeneficiaryBankCountry(beneficiaryBankCountry) {
    this.beneficiaryBankCountry = beneficiaryBankCountry
  }

  getBeneficiaryBankCountry() {
    return this.beneficiaryBankCountry
  }

  setSortCode(sortCode) {
    this.sortCode = sortCode
  }

  getSortCode() {
    return this.sortCode
  }
}
