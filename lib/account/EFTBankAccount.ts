import { GenericLinkedObject, IGenericLinkedObject } from '../generic-linked-object'

export interface IMerchantEFTBankAccount extends IGenericLinkedObject {
  status?: string // Not a response value...
  statusReason?: string // Not a response value...
  accountNumber?: string
  transitNumber?: string
  institutionId?: string
}


export class MerchantEFTBankAccount extends GenericLinkedObject {
  // type: string
  status: string
  statusReason: string
  accountNumber: string
  transitNumber: string
  institutionId: string

  constructor(resp?: IMerchantEFTBankAccount) {
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
      if (resp.transitNumber) {
        this.transitNumber = resp.transitNumber
      }
      if (resp.institutionId) {
        this.institutionId = resp.institutionId
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
}
