import { GenericObject, IGenericObject } from '../generic'
import { ACHBankAccount } from './ACHBankAccount'
import { Address, IAddress } from './address'
import { IProfile, Profile } from './profile'

export interface IACHSingleUseToken extends IGenericObject {
  paymentToken?: string // This is the single-use payment token returned in the response to the request
  timeToLiveSeconds?: number // This is the period of time the single-use token is valid before expiration, in seconds.
  profile?: IProfile // All optional: firstName, lastName, dateOfBirth, email
  achBankAccount: ACHBankAccount // All required: accountNumber, accountHolderName, routingNumber, accountType: CHECKING|LOAN|SAVINGS
  billingAddress?: IAddress // Supposedly optional, but when included these are required: street, city, zip, country
}

export class ACHSingleUseToken extends GenericObject implements IACHSingleUseToken {
  paymentToken?: string
  timeToLiveSeconds?: number
  profile?: Profile
  achBankAccount: ACHBankAccount
  billingAddress: Address

  constructor(data?: IACHSingleUseToken) {
    super(data)

    if (data) {
      if (data.paymentToken) {
        this.paymentToken = data.paymentToken
      }
      if (data.timeToLiveSeconds) {
        this.timeToLiveSeconds = data.timeToLiveSeconds
      }
      if (data.profile) {
        this.profile = new Profile(data.profile)
      }
      if (data.achBankAccount) {
        this.achBankAccount = data.achBankAccount
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

  setProfile(profile: Profile) {
    this.profile = profile
  }

  getProfile() {
    return this.profile
  }

  setAchBankAccount(achBankAccount: ACHBankAccount) {
    this.achBankAccount = achBankAccount
  }

  getAchBankAccount() {
    return this.achBankAccount
  }

  setBillingAddress(billingAddress: Address) {
    this.billingAddress = billingAddress
  }

  getBillingAddress() {
    return this.billingAddress
  }
}
