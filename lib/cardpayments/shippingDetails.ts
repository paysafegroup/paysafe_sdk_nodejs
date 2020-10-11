export class ShippingDetails {
  carrier: string
  shipMethod: string
  recipientName: string
  street: string
  street2: string
  city: string
  country: string
  state: string
  zip: string
  phone: string

  constructor(resp) {
    if (resp) {
      if (resp.carrier) {
        this.carrier = resp.carrier
      }
      if (resp.shipMethod) {
        this.shipMethod = resp.shipMethod
      }
      if (resp.recipientName) {
        this.recipientName = resp.recipientName
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
    }
  }

  setPhone(phone) {
    this.phone = phone
  }

  getPhone() {
    return this.phone
  }

  setCarrier(carrier) {
    this.carrier = carrier
  }

  getCarrier() {
    return this.carrier
  }

  setZip(zip) {
    this.zip = zip
  }

  getZip() {
    return this.zip
  }

  setStreet2(street2) {
    this.street2 = street2
  }

  getStreet2() {
    return this.street2
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

  setRecipientName(recipientName) {
    this.recipientName = recipientName
  }

  getRecipientName() {
    return this.recipientName
  }

  setStreet(street) {
    this.street = street
  }

  getStreet() {
    return this.street
  }
}
