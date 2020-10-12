import { IProfile, Profile } from '../customervault/profile'
import { GenericObject, IGenericObject } from '../generic'
import { BillingDetails, IBillingDetails } from './billingDetails'
import { CardExpiry, ICardExpiry } from './cardExpiry'

export type CardStatus = 'ACTIVE' | string
export type CardType = 'AM' | 'DI' | 'JC' | 'MC' | 'MD' | 'SO' | 'VI' | 'VD' | 'VE'
export type CardCategory = 'CREDIT' | 'DEBIT' | 'PREPAID' | 'UNKNOWN'
export type CardStoredCredentialTokenStatus = 'UNVERIFIED' | string

export interface ICard extends IGenericObject {
  // cardBin is sometimes given
  singleUseToken?: string
  nickName?: string
  merchantRefNum?: string
  holderName?: string
  billingAddressId?: string
  billingDetails?: BillingDetails | IBillingDetails
  defaultCardIndicator?: boolean
  paymentToken?: string
  storedCredentialTokenStatus?: CardStoredCredentialTokenStatus
  cardNum?: string
  cardCategory?: CardCategory
  type?: CardType
  lastDigits?: string
  cardExpiry?: CardExpiry | ICardExpiry
  cvv?: string
  track1?: string
  track2?: string
  profile?: Profile | IProfile
  status?: CardStatus
}

/**
 * To use a saved card, you must specify paymentToken and the cvv again.
 */
export class Card extends GenericObject {
  singleUseToken: string
  nickName: string
  merchantRefNum: string
  holderName: string
  billingAddressId: string
  billingDetails: BillingDetails
  defaultCardIndicator: boolean
  paymentToken: string
  storedCredentialTokenStatus?: CardStoredCredentialTokenStatus
  cardNum: string
  cardCategory?: CardCategory
  type: CardType
  lastDigits: string
  cardExpiry: CardExpiry
  cvv: string
  track1: string
  track2: string
  profile?: Profile
  status: CardStatus

  constructor(resp?: ICard) {
    super(resp)
    if (resp) {
      if (resp.singleUseToken) {
        this.singleUseToken = resp.singleUseToken
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
      if (resp.billingAddressId) {
        this.billingAddressId = resp.billingAddressId
      }
      if (resp.billingDetails) {
        // if (resp.billingDetails instanceof Array) {
        //   this.billingDetails = resp.billingDetails.map((bd) => new BillingDetails(bd))
        // } else {
        this.billingDetails = new BillingDetails(resp.billingDetails)
        // }
      }
      if (typeof resp.defaultCardIndicator !== 'undefined') {
        this.defaultCardIndicator = resp.defaultCardIndicator
      }
      if (resp.paymentToken) {
        this.paymentToken = resp.paymentToken
      }
      if (resp.paymentToken) {
        this.storedCredentialTokenStatus = resp.storedCredentialTokenStatus
      }
      if (resp.cardNum) {
        this.cardNum = resp.cardNum
      }
      if (resp.cardCategory) {
        this.cardCategory = resp.cardCategory
      }
      if (resp.type) {
        this.type = resp.type
      } else if ((resp as any).cardType) {
        /**
         * the card object given back from the Vault uses cardType instead of type
         * @see https://developer.paysafe.com/en/rest-apis/vault/typical-api-calls/add-a-card-to-a-profile/
         */
        this.type = (resp as any).cardType
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

  setSingleUseToken(singleUseToken: string) {
    this.singleUseToken = singleUseToken
  }

  getSingleUseToken() {
    return this.singleUseToken
  }

  setStatus(status: CardStatus) {
    this.status = status
  }

  getStatus() {
    return this.status
  }

  setProfile(profile: Profile | IProfile) {
    this.profile = new Profile(profile)
  }

  getProfile() {
    return this.profile
  }

  setDefaultCardIndicator(defaultCardIndicator: boolean) {
    this.defaultCardIndicator = defaultCardIndicator
  }

  getDefaultCardIndicator() {
    return this.defaultCardIndicator
  }

  setBillingAddressId(billingAddressId: string) {
    this.billingAddressId = billingAddressId
  }

  getBillingAddressId() {
    return this.billingAddressId
  }

  setBillingDetails(billingDetails: BillingDetails | IBillingDetails) {
    this.billingDetails = new BillingDetails(billingDetails)
  }

  getBillingDetails() {
    return this.billingDetails
  }

  setNickName(nickName: string) {
    this.nickName = nickName
  }

  getNickName() {
    return this.nickName
  }

  setMerchantRefNum(merchantRefNum: string) {
    this.merchantRefNum = merchantRefNum
  }

  getMerchantRefNum() {
    return this.merchantRefNum
  }

  setHolderName(holderName: string) {
    this.holderName = holderName
  }

  getHolderName() {
    return this.holderName
  }

  setPaymentToken(paymentToken: string) {
    this.paymentToken = paymentToken
  }

  getPaymentToken() {
    return this.paymentToken
  }

  setStoredCredentialTokenStatus(storedCredentialTokenStatus: string) {
    this.storedCredentialTokenStatus = storedCredentialTokenStatus
  }

  getStoredCredentialTokenStatus() {
    return this.storedCredentialTokenStatus
  }

  setCardNum(cardNum: string) {
    this.cardNum = cardNum
  }

  getCardNum() {
    return this.cardNum
  }

  setCardCategory(cardCategory: CardCategory) {
    this.cardCategory = cardCategory
  }

  getCardCategory() {
    return this.cardCategory
  }

  setType(type: CardType) {
    this.type = type
  }

  getType() {
    return this.type
  }

  setLastDigits(lastDigits: string) {
    this.lastDigits = lastDigits
  }

  getLastDigits() {
    return this.lastDigits
  }

  setCardExpiry(cardExpiry: CardExpiry | ICardExpiry) {
    this.cardExpiry = new CardExpiry(cardExpiry)
  }

  getCardExpiry() {
    return this.cardExpiry
  }

  setCvv(cvv: string) {
    this.cvv = cvv
  }

  getCvv() {
    return this.cvv
  }

  setTrack1(track1: string) {
    this.track1 = track1
  }

  getTrack1() {
    return this.track1
  }

  setTrack2(track2: string) {
    this.track2 = track2
  }

  getTrack2() {
    return this.track2
  }
}
