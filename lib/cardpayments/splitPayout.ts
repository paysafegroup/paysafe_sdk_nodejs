
export interface ISplitPayout {
  linkedAccount: string
  // Either percent or amount is required, but not both.
  percent?: number // Up to 2 decimal places. Total percentage to all linked accounts cannot exceed 100%. Ex. '5.31'
  amount?: number // The amount to transfer to the linked account in minor currency units. The total amount to all
  // linked accounts cannot exceed the transaction amount.
}

export class SplitPayout implements ISplitPayout {
  linkedAccount: string
  percent?: number
  amount?: number

  constructor(data?: ISplitPayout) {

    if (data) {
      if (data.linkedAccount) {
        this.linkedAccount = data.linkedAccount
      }
      if (data.percent) {
        this.percent = data.percent
      }
      if (data.amount) {
        this.amount = data.amount
      }
    }
  }

  setLinkedAccount(linkedAccount: string) {
    this.linkedAccount = linkedAccount
  }

  getLinkedAccount() {
    return this.linkedAccount
  }

  setPercent(percent: number) {
    this.percent = percent
  }

  getPercent() {
    return this.percent
  }

  setAmount(amount: number) {
    this.amount = amount
  }

  getAmount() {
    return this.amount
  }
}
