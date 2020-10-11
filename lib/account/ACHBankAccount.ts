import { GenericObject, IGenericObject } from '../generic'

export interface IMerchantACHBankAccount extends IGenericObject {
  type?: string
  status?: string
  statusReason?: string
  accountNumber?: string
  routingNumber?: string
}

export class MerchantACHBankAccount extends GenericObject {
  type: string
  status: string
  statusReason: string
  accountNumber: string
  routingNumber: string

  constructor(resp?: IMerchantACHBankAccount) {
    super(resp)

    if (resp) {
      if (resp.type) {
        this.type = resp.type
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
      if (resp.routingNumber) {
        this.routingNumber = resp.routingNumber
      }
    }
  }

  setType(type: string) {
    this.type = type
  }

  getType() {
    return this.type
  }

  setStatus(status: string) {
    this.status = status
  }

  getStatus() {
    return this.status
  }

  setStatusReason(statusReason: string) {
    this.statusReason = statusReason
  }

  getStatusReason() {
    return this.statusReason
  }

  setAccountNumber(accountNumber: string) {
    this.accountNumber = accountNumber
  }

  getAccountNumber() {
    return this.accountNumber
  }

  setRoutingNumber(routingNumber: string) {
    this.routingNumber = routingNumber
  }

  getRoutingNumber() {
    return this.routingNumber
  }
}
