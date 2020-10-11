import { GenericLinkedObject } from '../generic-linked-object'

export class MicroDeposit extends GenericLinkedObject {
  public amount: string
  public status: string

  constructor(resp) {
    super(resp)

    if (resp) {
      if (resp.amount) {
        this.amount = resp.amount
      }
      if (resp.status) {
        this.status = resp.status
      }
    }
  }

  setAmount(amount) {
    this.amount = amount
  }

  getAmount() {
    return this.amount
  }

  setStatus(status) {
    this.status = status
  }

  getStatus() {
    return this.status
  }
}
