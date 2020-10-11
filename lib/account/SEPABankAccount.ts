import { GenericLinkedObject } from '../generic-linked-object'

export class MerchantSEPABankAccount extends GenericLinkedObject {
  status: string
  statusReason: string
  beneficiaryAccountName: string
  beneficiaryBankCountry: string
  ibanNumber: string
  swiftNumber: string

  constructor(resp) {
    super(resp)

    if (resp) {
      if (resp.status) {
        this.status = resp.status
      }
      if (resp.statusReason) {
        this.statusReason = resp.statusReason
      }
      if (resp.beneficiaryAccountName) {
        this.beneficiaryAccountName = resp.beneficiaryAccountName
      }
      if (resp.beneficiaryBankCountry) {
        this.beneficiaryBankCountry = resp.beneficiaryBankCountry
      }
      if (resp.ibanNumber) {
        this.ibanNumber = resp.ibanNumber
      }
      if (resp.swiftNumber) {
        this.swiftNumber = resp.swiftNumber
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

  setIbanNumber(ibanNumber) {
    this.ibanNumber = ibanNumber
  }

  getIbanNumber() {
    return this.ibanNumber
  }

  setSwiftNumber(swiftNumber) {
    this.swiftNumber = swiftNumber
  }

  getSwiftNumber() {
    return this.swiftNumber
  }
}
