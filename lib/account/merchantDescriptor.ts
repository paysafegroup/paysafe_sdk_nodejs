export class MerchantDescriptor {
  dynamicDescriptor: string
  phone: string

  constructor(resp) {
    if (resp) {
      if (resp.dynamicDescriptor) {
        this.dynamicDescriptor = resp.dynamicDescriptor
      }
      if (resp.phone) {
        this.phone = resp.phone
      }
    }
  }

  setDynamicDescriptor(dynamicDescriptor) {
    this.dynamicDescriptor = dynamicDescriptor
  }

  getDynamicDescriptor() {
    return this.dynamicDescriptor
  }

  setPhone(phone) {
    this.phone = phone
  }

  getPhone() {
    return this.phone
  }
}
