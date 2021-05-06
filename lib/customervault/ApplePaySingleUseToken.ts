import { Card, ICard } from '..'
import { GenericObject, IGenericObject } from '../generic'
import { ApplePayPaymentToken, IApplePayPaymentToken } from './ApplePayPaymentToken'

export interface IApplePaySingleUseToken extends IGenericObject {
  paymentToken?: string
  applePayPaymentToken?: IApplePayPaymentToken
  timeToLiveSeconds?: number
  card?: ICard
  transaction?: any
}

export class ApplePaySingleUseToken extends GenericObject implements IApplePaySingleUseToken {
  paymentToken?: string
  applePayPaymentToken?: ApplePayPaymentToken
  timeToLiveSeconds?: number
  card?: Card
  transaction?: any

  constructor(data?: IApplePaySingleUseToken) {
    super(data)

    if (data) {
      if (data.paymentToken) {
        this.paymentToken = data.paymentToken
      }
      if (data.applePayPaymentToken) {
        this.applePayPaymentToken = new ApplePayPaymentToken(data.applePayPaymentToken)
      }
      if (data.timeToLiveSeconds) {
        this.timeToLiveSeconds = data.timeToLiveSeconds
      }
      if (data.card) {
        this.card = new Card(data.card)
      }
      if (data.transaction) {
        this.transaction = data.transaction
      }
    }
  }

  setPaymentToken(paymentToken: string) {
    this.paymentToken = paymentToken
  }

  getPaymentToken() {
    return this.paymentToken
  }

  setTimeToLiveSeconds(timeToLiveSeconds: number) {
    this.timeToLiveSeconds = timeToLiveSeconds
  }

  getTimeToLiveSeconds() {
    return this.timeToLiveSeconds
  }

  setCard(card: Card) {
    this.card = card
  }

  getCard() {
    return this.card
  }

  setApplePayPaymenToken(applePayPaymentToken: ApplePayPaymentToken) {
    this.applePayPaymentToken = applePayPaymentToken
  }

  getApplePayPaymenToken() {
    return this.applePayPaymentToken
  }

  setTransaction(transaction: any) {
    this.transaction = transaction
  }

  getTransaction() {
    return this.transaction
  }
}
