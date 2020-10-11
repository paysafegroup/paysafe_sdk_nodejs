import { Profile } from '../customervault/profile'
import { GenericObject } from '../generic'
import { BillingDetails } from './billingDetails'
import { CardExpiry } from './cardExpiry'

export class Card extends GenericObject {
  singleUseToken: string
  brand: string
  nickName: string
  merchantRefNum: string
  holderName: string
  cardType: string
  billingAddressId: string
  billingDetails: BillingDetails
  defaultCardIndicator: string
  paymentToken: string
  cardNum: string
  type: string
  lastDigits: string
  cardExpiry: CardExpiry
  cvv: string
  track1: string
  track2: string
  profile: Profile
  status: string

  constructor(resp) {
    super(resp)
    if (resp) {
      if (resp.singleUseToken) {
        this.singleUseToken = resp.singleUseToken
      }
      if (resp.brand) {
        this.brand = resp.brand
      }
      if (resp.nickName) {
        this.nickName = resp.nickName
      }
      if (resp.merchantRefNum) {
        this.merchantRefNum = resp.merchantRefNum
      }
      if (resp.holderName) {
        this.holderName = resp.holderName
      }
      if (resp.cardType) {
        this.cardType = resp.cardType
      }
      if (resp.billingAddressId) {
        this.billingAddressId = resp.billingAddressId
      }
      if (resp.billingDetails) {
        if (resp.billingDetails instanceof Array) {
          this.billingDetails = resp.billingDetails.map((bd) => new BillingDetails(bd))
        } else {
          this.billingDetails = resp.billingDetails
        }
      }
      if (resp.defaultCardIndicator !== undefined) {
        this.defaultCardIndicator = resp.defaultCardIndicator
      }
      if (resp.paymentToken) {
        this.paymentToken = resp.paymentToken
      }
      if (resp.cardNum) {
        this.cardNum = resp.cardNum
      }
      if (resp.type) {
        this.type = resp.type
      }
      if (resp.lastDigits) {
        this.lastDigits = resp.lastDigits
      }
      if (resp.cardExpiry) {
        this.cardExpiry = new CardExpiry(resp.cardExpiry)
      }
      if (resp.cvv) {
        this.cvv = resp.cvv
      }
      if (resp.track1) {
        this.track1 = resp.track1
      }
      if (resp.track2) {
        this.track2 = resp.track2
      }
      if (resp.profile) {
        this.profile = new Profile(resp.profile)
      }
      if (resp.status) {
        this.status = resp.status
      }
    }
  }

  setSingleUseToken(singleUseToken) {
    this.singleUseToken = singleUseToken
  }

  getSingleUseToken() {
    return this.singleUseToken
  }

  setBrand(brand) {
    this.brand = brand
  }

  getBrand() {
    return this.brand
  }

  setStatus(status) {
    this.status = status
  }

  getStatus() {
    return this.status
  }

  setProfile(profile) {
    this.profile = profile
  }

  getProfile() {
    return this.profile
  }

  setDefaultCardIndicator(defaultCardIndicator) {
    this.defaultCardIndicator = defaultCardIndicator
  }

  getDefaultCardIndicator() {
    return this.defaultCardIndicator
  }

  setBillingAddressId(billingAddressId) {
    this.billingAddressId = billingAddressId
  }

  getBillingAddressId() {
    return this.billingAddressId
  }

  setBillingDetails(billingDetails: BillingDetails) {
    this.billingDetails = billingDetails
  }

  getBillingDetails() {
    return this.billingDetails
  }

  setCardType(cardType) {
    this.cardType = cardType
  }

  getCardType() {
    return this.cardType
  }

  setNickName(nickName) {
    this.nickName = nickName
  }

  getNickName() {
    return this.nickName
  }

  setMerchantRefNum(merchantRefNum) {
    this.merchantRefNum = merchantRefNum
  }

  getMerchantRefNum() {
    return this.merchantRefNum
  }

  setHolderName(holderName) {
    this.holderName = holderName
  }

  getHolderName() {
    return this.holderName
  }

  setPaymentToken(paymentToken) {
    this.paymentToken = paymentToken
  }

  getPaymentToken() {
    return this.paymentToken
  }

  setCardNum(cardNum) {
    this.cardNum = cardNum
  }

  getCardNum() {
    return this.cardNum
  }

  setType(type) {
    this.type = type
  }

  getType() {
    return this.type
  }

  setLastDigits(lastDigits) {
    this.lastDigits = lastDigits
  }

  getLastDigits() {
    return this.lastDigits
  }

  setCardExpiry(cardExpiry) {
    this.cardExpiry = cardExpiry
  }

  getCardExpiry() {
    return this.cardExpiry
  }

  setCvv(cvv) {
    this.cvv = cvv
  }

  getCvv() {
    return this.cvv
  }

  setTrack1(track1) {
    this.track1 = track1
  }

  getTrack1() {
    return this.track1
  }

  settrack2(track2) {
    this.track2 = track2
  }

  gettrack2() {
    return this.track2
  }
}
