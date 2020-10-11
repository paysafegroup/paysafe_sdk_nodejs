export class Pagination {
  limit: number
  offset: number
  startDate: string
  endDate: string

  constructor(resp) {
    if (resp) {
      if (resp.limit) {
        this.limit = resp.limit
      }
      if (resp.offset) {
        this.offset = resp.offset
      }
      if (resp.startDate) {
        this.startDate = resp.startDate
      }
      if (resp.endDate) {
        this.endDate = resp.endDate
      }
    }
  }

  setLimit(limit) {
    this.limit = limit
  }

  getLimit() {
    return this.limit
  }

  setOffset(offset) {
    this.offset = offset
  }

  getOffset() {
    return this.offset
  }

  setStartDate(startDate) {
    this.startDate = startDate
  }

  getStartDate() {
    return this.startDate
  }

  setEndDate(endDate) {
    this.endDate = endDate
  }

  getEndDate() {
    return this.endDate
  }
}
