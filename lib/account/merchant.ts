import { GenericLinkedObject, IGenericLinkedObject } from '../generic-linked-object'

export interface IMerchant extends IGenericLinkedObject {
  name?: string
}

/**
 * Merchant
 *
 * Once the merchant is created, you can add more objects to it, such as a merchant account,
 * a business owner of that account, addresses, and bank account information.
 */
export class Merchant extends GenericLinkedObject {
  name: string

  constructor(resp?: IMerchant) {
    super(resp)

    if (resp) {
      if (resp.name) {
        this.name = resp.name
      }
    }
  }

  setName(name) {
    this.name = name
  }

  getName() {
    return this.name
  }
}
