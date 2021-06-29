export interface ILineItem {
  description: string
  productCode: string
  quantity: number
  unitAmount: number
  taxRate: number
  taxAmount: number
  totalAmount: number
}

export class LineItem {
  /**
   * This is a description of the item(s) being purchased.
   */
  description: string

  /**
   * This is a merchant-defined description code of the item being purchased.
   */
  productCode: string

  /**
   * This is the quantity of the item.
   */
  quantity: number

  /**
   * This is the unit price of the item being purchased, in minor units. The currency will be
   * based on the account setting.
   */
  unitAmount: number

  /**
   * This is the tax rate used to calculate the tax amount. For example, if the tax rate is 10.5%,
   * this value should be 10.5.
   */
  taxRate: number

  /**
   * This is the amount of any value-added taxes that can be associated with the purchased item,
   * in minor units. The currency will be based on the account setting. Note: Our system will not
   * validate the accuracy of this value. The merchant's application must calculate this value
   * correctly.
   */
  taxAmount: number

  /**
   * This is the total amount of the line item, typically calculated as price multiplied by quantity,
   * in minor units. The currency will be based on the account setting. Note: Our system will not
   * validate the accuracy of this value. The merchant's application must calculate this value correctly.
   */
  totalAmount: number

  constructor(resp: ILineItem) {
    if (resp) {
      if (resp.description) {
        this.description = resp.description
      }
      if (resp.productCode) {
        this.productCode = resp.productCode
      }
      if (resp.quantity) {
        this.quantity = resp.quantity
      }
      if (resp.unitAmount) {
        this.unitAmount = resp.unitAmount
      }
      if (resp.taxRate) {
        this.taxRate = resp.taxRate
      }
      if (resp.taxAmount) {
        this.taxAmount = resp.taxAmount
      }
      if (resp.totalAmount) {
        this.totalAmount = resp.totalAmount
      }
    }
  }

  setDescription(description: string) {
    this.description = description
  }

  getDescription() {
    return this.description
  }

  setProductCode(productCode: string) {
    this.productCode = productCode
  }

  getProductCode() {
    return this.productCode
  }

  setQuantity(quantity: number) {
    this.quantity = quantity
  }

  getQuantity() {
    return this.setQuantity
  }

  setUnitAmount(unitAmount: number) {
    this.unitAmount = unitAmount
  }

  getUnitAmount() {
    return this.unitAmount
  }

  setTaxRate(taxRate: number) {
    this.taxRate = taxRate
  }

  getTaxRate() {
    return this.taxRate
  }


}
