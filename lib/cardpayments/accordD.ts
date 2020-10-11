export class AccordD {
  /**
   * This is the type of financing offered.
   * DEFERRED_PAYMENT – Deferred payment financing
   * EQUAL_PAYMENT – Equal payment financing
   */
  financingType: 'DEFERRED_PAYMENT' | 'EQUAL_PAYMENT'

  /**
   * This is the plan number for this financing transaction.
   * @length <=3
   */
  plan: string

  /**
   * This is the grace period, in months, associated with deferred payment transactions.
   * @max 99
   */
  gracePeriod: number

  /**
   * This is the number of payments, in months, for equal payment transactions.
   * @max 99
   */
  term: number

  constructor(resp) {
    if (resp) {
      if (resp.financingType) {
        this.financingType = resp.financingType
      }
      if (resp.plan) {
        this.plan = resp.plan
      }
      if (resp.gracePeriod) {
        this.gracePeriod = resp.gracePeriod
      }
      if (resp.term) {
        this.term = resp.term
      }
    }
  }

  setFinancingType(financingType) {
    this.financingType = financingType
  }

  getFinancingType() {
    return this.financingType
  }

  setPlan(plan) {
    this.plan = plan
  }

  getPlan() {
    return this.plan
  }

  setGracePeriod(gracePeriod) {
    this.gracePeriod = gracePeriod
  }

  getGracePeriod() {
    return this.gracePeriod
  }

  setTerm(term) {
    this.term = term
  }

  getTerm() {
    return this.term
  }
}
