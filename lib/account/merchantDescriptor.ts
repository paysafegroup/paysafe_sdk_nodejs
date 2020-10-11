export interface IMerchantDescriptor {
  dynamicDescriptor?: string
  phone?: string
}

export class MerchantDescriptor {
  dynamicDescriptor?: string
  phone?: string

  constructor(resp?: IMerchantDescriptor) {
    if (resp) {
      if (resp.dynamicDescriptor) {
        this.dynamicDescriptor = resp.dynamicDescriptor
      }
      if (resp.phone) {
        this.phone = resp.phone
      }
    }
  }

  setDynamicDescriptor(dynamicDescriptor: string) {
    this.dynamicDescriptor = dynamicDescriptor
  }

  getDynamicDescriptor() {
    return this.dynamicDescriptor
  }

  setPhone(phone: string) {
    this.phone = phone
  }

  getPhone() {
    return this.phone
  }
}
