import { GenericLinkedObject, IGenericLinkedObject } from '../generic-linked-object'

export type MicroDepositStatus = 'SENT' | 'ERROR' | 'FAILED' | 'VALIDATED' | 'INVALID' | 'TXN_ERROR' | 'TXN_FAILED'

export interface IMicroDeposit extends IGenericLinkedObject {
  amount?: number
  status?: MicroDepositStatus
}

export class MicroDeposit extends GenericLinkedObject {
  public amount?: number
  public status?: MicroDepositStatus

  constructor(resp?: IMicroDeposit) {
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

  setAmount(amount: number) {
    this.amount = amount
  }

  getAmount() {
    return this.amount
  }

  setStatus(status: MicroDepositStatus) {
    this.status = status
  }

  getStatus() {
    return this.status
  }
}
