export interface ICardExpiry {
  month: number
  year: number
}

export class CardExpiry implements ICardExpiry {
  month: number
  year: number

  constructor(resp?: ICardExpiry) {
    if (resp) {
      if (resp.month) {
        this.month = resp.month
      }
      if (resp.year) {
        this.year = resp.year
      }
    }
  }

  setMonth(month: number) {
    this.month = month
  }

  getMonth() {
    return this.month
  }

  setYear(year: number) {
    this.year = year
  }

  getYear() {
    return this.year
  }
}
