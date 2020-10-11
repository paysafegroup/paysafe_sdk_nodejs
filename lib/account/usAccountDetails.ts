export class AccountDetails {
  type: string
  description: string
  isCardPresent: string
  hasPreviouslyProcessedCards: string
  shipsGoods: string
  deliveryTimeRange: string
  refundPolicy: string
  refundPolicyDescription: string
  federalTaxNumber: string

  constructor(resp) {
    if (resp) {
      if (resp.type) {
        this.type = resp.type
      }
      if (resp.description) {
        this.description = resp.description
      }
      if (resp.isCardPresent) {
        this.isCardPresent = resp.isCardPresent
      }
      if (resp.hasPreviouslyProcessedCards) {
        this.hasPreviouslyProcessedCards = resp.hasPreviouslyProcessedCards
      }
      if (resp.shipsGoods) {
        this.shipsGoods = resp.shipsGoods
      }
      if (resp.deliveryTimeRange) {
        this.deliveryTimeRange = resp.deliveryTimeRange
      }
      if (resp.refundPolicy) {
        this.refundPolicy = resp.refundPolicy
      }
      if (resp.refundPolicyDescription) {
        this.refundPolicyDescription = resp.refundPolicyDescription
      }
      if (resp.federalTaxNumber) {
        this.federalTaxNumber = resp.federalTaxNumber
      }
    }
  }

  setType(type) {
    this.type = type
  }

  getType() {
    return this.type
  }

  setDescription(description) {
    this.description = description
  }

  getDescription() {
    return this.description
  }

  setIsCardPresent(isCardPresent) {
    this.isCardPresent = isCardPresent
  }

  getIsCardPresent() {
    return this.isCardPresent
  }

  setHasPreviouslyProcessedCards(hasPreviouslyProcessedCards) {
    this.hasPreviouslyProcessedCards = hasPreviouslyProcessedCards
  }

  getHasPreviouslyProcessedCards() {
    return this.hasPreviouslyProcessedCards
  }

  setShipsGoods(shipsGoods) {
    this.shipsGoods = shipsGoods
  }

  getShipsGoods() {
    return this.shipsGoods
  }

  setDeliveryTimeRange(deliveryTimeRange) {
    this.deliveryTimeRange = deliveryTimeRange
  }

  getDeliveryTimeRange() {
    return this.deliveryTimeRange
  }

  setRefundPolicy(refundPolicy) {
    this.refundPolicy = refundPolicy
  }

  getRefundPolicy() {
    return this.refundPolicy
  }

  setRefundPolicyDescription(refundPolicyDescription) {
    this.refundPolicyDescription = refundPolicyDescription
  }

  getRefundPolicyDescription() {
    return this.refundPolicyDescription
  }

  setFederalTaxNumber(federalTaxNumber) {
    this.federalTaxNumber = federalTaxNumber
  }

  getFederalTaxNumber() {
    return this.federalTaxNumber
  }
}
