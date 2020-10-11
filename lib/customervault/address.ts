import { GenericObject, IGenericObject } from '../generic'
import { Profile } from './profile'

export interface IAddress extends IGenericObject {
  nickName?: string
  street?: string
  street2?: string
  city?: string
  country?: string
  state?: string
  zip?: string
  recipientName?: string
  phone?: string
  profile?: Profile
  status?: string
  defaultShippingAddressIndicator?: string
}

export class Address extends GenericObject {
  nickName: string
  street: string
  street2: string
  city: string
  country: string
  state: string
  zip: string
  recipientName: string
  phone: string
  profile?: Profile
  status: string
  defaultShippingAddressIndicator: string

  constructor(resp?: IAddress) {
    super(resp)

    if (resp) {
      if (resp.nickName) {
        this.nickName = resp.nickName
      }
      if (resp.street) {
        this.street = resp.street
      }
      if (resp.street2) {
        this.street2 = resp.street2
      }
      if (resp.city) {
        this.city = resp.city
      }
      if (resp.country) {
        this.country = resp.country
      }
      if (resp.state) {
        this.state = resp.state
      }
      if (resp.zip) {
        this.zip = resp.zip
      }
      if (resp.recipientName) {
        this.recipientName = resp.recipientName
      }
      if (resp.phone) {
        this.phone = resp.phone
      }
      if (resp.profile) {
        this.profile = resp.profile
      }
      if (resp.status) {
        this.status = resp.status
      }
      if (resp.defaultShippingAddressIndicator !== undefined) {
        this.defaultShippingAddressIndicator = resp.defaultShippingAddressIndicator
      }
    }
  }

  setDefaultShippingAddressIndicator(defaultShippingAddressIndicator: string) {
    this.defaultShippingAddressIndicator = defaultShippingAddressIndicator
  }

  getDefaultShippingAddressIndicator() {
    return this.defaultShippingAddressIndicator
  }

  setStatus(status) {
    this.status = status
  }

  getStatus() {
    return this.status
  }

  setPhone(phone) {
    this.phone = phone
  }

  getPhone() {
    return this.phone
  }

  setProfile(profile) {
    this.profile = profile
  }

  getProfile() {
    return this.profile
  }

  setRecipientName(recipientName) {
    this.recipientName = recipientName
  }

  getRecipientName() {
    return this.recipientName
  }

  setZip(zip) {
    this.zip = zip
  }

  getZip() {
    return this.zip
  }

  setState(state) {
    this.state = state
  }

  getState() {
    return this.state
  }

  setCountry(country) {
    this.country = country
  }

  getCountry() {
    return this.country
  }

  setCity(city) {
    this.city = city
  }

  getCity() {
    return this.city
  }

  setStreet2(street2) {
    this.street2 = street2
  }

  getStreet2() {
    return this.street2
  }

  setStreet(street) {
    this.street = street
  }

  getStreet() {
    return this.street
  }

  setNickName(nickName) {
    this.nickName = nickName
  }

  getNickName() {
    return this.nickName
  }
}
