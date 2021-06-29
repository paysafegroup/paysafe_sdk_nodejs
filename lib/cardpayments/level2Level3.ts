import { ILineItem, LineItem } from './lineItem'

export interface ILevel2Level3 {
   exemptLocalTax: boolean
   localTaxAmount: number
   nationalTaxAmount: number
   freightAmount: number
   dutyAmount: number
   destinationZip: string
   destinationCountry: string
   shipFromZip: string
   lineItems: (LineItem[] | ILineItem[])
}

export class Level2Level3 implements ILevel2Level3 {
  /**
   * This indicates whether or not local tax is exempted for the request.
   * If set to true, then the localTaxAmount parameter will be ignored.
   * Note: This value defaults to false.
   */
  exemptLocalTax: boolean

  /**
   * This is the local sales tax applied to the purchase.
   */
  localTaxAmount: number

  /**
   * This is the national tax included in the transaction amount.
   */
  nationalTaxAmount: number

  /**
   * This is the freight or shipping portion of the total transaction amount.
   */
  freightAmount: number

  /**
   * This is the duty associated with the import of the purchased goods.
   */
  dutyAmount: number

  /**
   * This is the postal/zip code of the address to which the purchased goods will be delivered.
   * This field can be identical to the shipFromZip if the customer is present and takes immediate
   * possession of the goods.
   */
  destinationZip: string

  /**
   * This is the country to which the goods are being shipped.
   */
  destinationCountry: string

  /**
   * This is the postal/zip code of the address from which the purchased goods are being shipped.
   */
  shipFromZip: string

  /**
   * This is more detailed information about the items that are being purchased.
   */
  lineItems: LineItem[] | ILineItem[]

  constructor(resp) {
    if (resp) {
      if (resp.exemptLocalTax) {
        this.exemptLocalTax = resp.exemptLocalTax
      }
      if (resp.localTaxAmount) {
        this.localTaxAmount = resp.localTaxAmount
      }
      if (resp.nationalTaxAmount) {
        this.nationalTaxAmount = resp.nationalTaxAmount
      }
      if (resp.freightAmount) {
        this.freightAmount = resp.freightAmount
      }
      if (resp.dutyAmount) {
        this.dutyAmount = resp.dutyAmount
      }
      if (resp.destinationZip) {
        this.destinationZip = resp.destinationZip
      }
      if (resp.destinationCountry) {
        this.destinationCountry = resp.destinationCountry
      }
      if (resp.shipFromZip) {
        this.shipFromZip = resp.shipFromZip
      }
      if (resp.lineItems) {
        this.lineItems = resp.lineItems.map((lineItem) => new LineItem(lineItem))
      }
    }
  }

  setExemptLocalTax(exemptLocalTax: boolean) {
    this.exemptLocalTax = exemptLocalTax
  }

  getExemptLocalTax() {
    return this.exemptLocalTax
  }

  setLocalTaxAmount(localTaxAmount: number) {
    this.localTaxAmount = localTaxAmount
  }

  getLocalTaxAmount() {
    return this.localTaxAmount
  }

  setNationalTaxAmount(nationalTaxAmount: number) {
    this.nationalTaxAmount = nationalTaxAmount
  }

  getNationalTaxAmount() {
    return this.nationalTaxAmount
  }

  setFreightAmount(freightAmount: number) {
    this.freightAmount = freightAmount
  }

  getFreightAmount() {
    return this.freightAmount
  }

  setDutyAmount(dutyAmount: number) {
    this.dutyAmount = dutyAmount
  }

  getDutyAmount() {
    return this.dutyAmount
  }

  setDestinationZip(destinationZip: string) {
    this.destinationZip = destinationZip
  }

  getDestinationZip() {
    return this.destinationZip
  }

  setDestinationCountry(destinationCountry: string) {
    this.destinationCountry = destinationCountry
  }

  getDestinationCountry() {
    return this.destinationCountry
  }

  setShipFromZip(shipFromZip: string) {
    this.shipFromZip = shipFromZip
  }

  getShipFromZip() {
    return this.shipFromZip
  }

  setLineItems(lineItems: LineItem[]) {
    this.lineItems = lineItems
  }

  getLineItems() {
    return this.lineItems
  }

}
