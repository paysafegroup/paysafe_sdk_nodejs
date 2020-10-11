export class DateOfBirth {
  year: string
  month: string
  day: string

  constructor(resp) {
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

  setYear(year) {
    this.year = year
  }

  getYear() {
    return this.year
  }

  setMonth(month) {
    this.month = month
  }

  getMonth() {
    return this.month
  }

  setDay(day) {
    this.day = day
  }

  getDay() {
    return this.day
  }
}
