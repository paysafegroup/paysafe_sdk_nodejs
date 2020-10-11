export class CardExpiry {
  month: number
  year: number

  constructor(resp) {
    if (resp) {
      if (resp.month) {
        this.month = resp.month
      }
      if (resp.year) {
        this.year = resp.year
      }
    }
  }

  setMonth(month) {
    this.month = month
  }

  getMonth() {
    return this.month
  }

  setYear(year) {
    this.year = year
  }

  getYear() {
    return this.year
  }
}
