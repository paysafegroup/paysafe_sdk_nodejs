export class AcquirerResponse {
  /**
   * This is acquirer identification code, such as DJN, CRX, etc.
   */
  code: string

  /**
   * This is the raw response returned by the acquirer.
   */
  responseCode: string

  /**
   * This is the raw AVS code returned by the acquirer.
   */
  avsCode: string

  /**
   * This is the balance remaining on a gift card, if a gift card was used for the original transaction.
   */
  balanceResponse: string

  constructor(resp) {
    if (resp) {
      if (resp.code) {
        this.code = resp.code
      }
      if (resp.responseCode) {
        this.responseCode = resp.responseCode
      }
      if (resp.avsCode) {
        this.avsCode = resp.avsCode
      }
      if (resp.balanceResponse) {
        this.balanceResponse = resp.balanceResponse
      }
    }
  }

  setBalanceResponse(balanceResponse: string) {
    this.balanceResponse = balanceResponse
  }

  getBalanceResponse() {
    return this.balanceResponse
  }

  setAvsCode(avsCode: string) {
    this.avsCode = avsCode
  }

  getAvsCode() {
    return this.avsCode
  }

  setResponseCode(responseCode: string) {
    this.responseCode = responseCode
  }

  getResponseCode() {
    return this.responseCode
  }

  setCode(code: string) {
    this.code = code
  }

  getCode() {
    return this.code
  }
}
