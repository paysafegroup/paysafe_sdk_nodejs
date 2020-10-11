import { GenericObject } from '../generic'

export class MerchantACHBankAccount extends GenericObject {
  type: string
  status: string
  statusReason: string
  accountNumber: string
  routingNumber: string

  constructor(resp) {
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

  setType(type) {
    this.type = type
  }

  getType() {
    return this.type
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

  setRoutingNumber(routingNumber) {
    this.routingNumber = routingNumber
  }

  getRoutingNumber() {
    return this.routingNumber
  }
}
