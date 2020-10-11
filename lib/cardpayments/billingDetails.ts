export interface IBillingDetails {
  street?: string
  street2?: string
  city?: string
  state?: string
  country?: string
  zip?: string
  phone?: string
  useAsShippingAddress?: boolean
}

export class BillingDetails implements IBillingDetails {
  street: string
  street2: string
  city: string
  state: string
  country: string
  zip: string
  phone: string
  useAsShippingAddress: boolean

  constructor(resp?: IBillingDetails) {
    if (resp) {
      if (resp.street) {
        this.street = resp.street
      }
      if (resp.street2) {
        this.street2 = resp.street2
      }
      if (resp.city) {
        this.city = resp.city
      }
      if (resp.state) {
        this.state = resp.state
      }
      if (resp.country) {
        this.country = resp.country
      }
      if (resp.zip) {
        this.zip = resp.zip
      }
      if (resp.phone) {
        this.phone = resp.phone
      }
      if (resp.useAsShippingAddress !== undefined) {
        this.useAsShippingAddress = resp.useAsShippingAddress
      }
    }
  }

  setUseAsShippingAddress(useAsShippingAddress: boolean) {
    this.useAsShippingAddress = useAsShippingAddress
  }

  getUseAsShippingAddress() {
    return this.useAsShippingAddress
  }

  setPhone(phone) {
    this.phone = phone
  }

  getPhone() {
    return this.phone
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

  getstreet2() {
    return this.street2
  }

  setStreet(street) {
    this.street = street
  }

  getStreet() {
    return this.street
  }
}
