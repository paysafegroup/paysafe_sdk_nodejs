import { Card, ICard } from '../cardpayments/card'
import { GenericObject, IGenericObject } from '../generic'
import { Address, IAddress } from './address'

export interface ICardSingleUseToken extends IGenericObject {
  paymentToken: string
  timeToLiveSeconds?: number // This is the period of time the single-use token is valid before expiration, in seconds.
  isFromMultiUseToken?: boolean
  card: ICard
  billingAddress?: IAddress
}

export class CardSingleUseToken extends GenericObject implements ICardSingleUseToken {
  paymentToken: string
  timeToLiveSeconds?: number
  isFromMultiUseToken?: boolean
  card: Card
  billingAddress?: Address

  constructor(data?: ICardSingleUseToken) {
    super(data)

    if (data) {
      if (data.paymentToken) {
        this.paymentToken = data.paymentToken
      }
      if (data.timeToLiveSeconds) {
        this.timeToLiveSeconds = data.timeToLiveSeconds
      }
      if (data.isFromMultiUseToken) {
        this.isFromMultiUseToken = data.isFromMultiUseToken
      }
      if (data.card) {
        this.card = new Card(data.card)
      }
      if (data.billingAddress) {
        this.billingAddress = new Address(data.billingAddress)
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

  setIsFromMultiUseToken(isFromMultiUseToken: boolean) {
    this.isFromMultiUseToken = isFromMultiUseToken
  }

  getIsFromMultiUseToken() {
    return this.isFromMultiUseToken
  }

  setCard(card: Card) {
    this.card = card
  }

  getCard() {
    return this.card
  }

  setBillingAddress(billingAddress: Address) {
    this.billingAddress = billingAddress
  }
  getBillingAddress() {
    return this.billingAddress
  }
}
