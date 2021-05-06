export interface IApplePayPaymentTokenHeader {
  transactionId: string
  publicKeyHash: string
  ephemeralPublicKey: string
}

export interface IApplePayPaymentToken {
  version: string
  data: string
  signature: string
  header: IApplePayPaymentTokenHeader
}

export class ApplePayPaymentToken implements IApplePayPaymentToken {
  version: string
  data: string
  signature: string
  header: IApplePayPaymentTokenHeader

  constructor(data?: IApplePayPaymentToken) {
    if (data) {
      if (data.version) {
        this.version = data.version
      }
      if (data.data) {
        this.data = data.data
      }
      if (data.signature) {
        this.signature = data.signature
      }
      if (data.header) {
        this.header = data.header
      }
    }
  }

  setVersion(version: string) {
    this.version = version
  }

  getVersion() {
    return this.version
  }

  setData(data: string) {
    this.data = data
  }

  getData() {
    return this.data
  }

  setSignature(signature: string) {
    this.signature = signature
  }

  getSignature() {
    return this.signature
  }

  setHeader(header: IApplePayPaymentTokenHeader) {
    this.header = header
  }

  getHeader() {
    return this.header
  }
}
