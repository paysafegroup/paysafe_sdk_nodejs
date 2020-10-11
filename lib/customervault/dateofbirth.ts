export interface IDateOfBirth {
  year: string
  month: string
  day: string
}

export class DateOfBirth {
  year: string
  month: string
  day: string

  constructor(resp?: IDateOfBirth) {
    if (resp) {
      if (resp.year) {
        this.year = resp.year
      }
      if (resp.month) {
        this.month = resp.month
      }
      if (resp.day) {
        this.day = resp.day
      }
    }
  }

  setYear(year: string) {
    this.year = year
  }

  getYear() {
    return this.year
  }

  setMonth(month: string) {
    this.month = month
  }

  getMonth() {
    return this.month
  }

  setDay(day: string) {
    this.day = day
  }

  getDay() {
    return this.day
  }
}
