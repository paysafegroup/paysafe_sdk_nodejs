var usAccountDetails = function(resp) {
  if (resp) {
    if (resp.type) {
      this.type = resp.type;
    }
    if (resp.description) {
      this.description = resp.description;
    }
    if (resp.isCardPresent) {
      this.isCardPresent = resp.isCardPresent;
    }
    if (resp.hasPreviouslyProcessedCards) {
      this.hasPreviouslyProcessedCards = resp.hasPreviouslyProcessedCards;
    }
    if (resp.shipsGoods) {
      this.shipsGoods = resp.shipsGoods;
    }
    if (resp.deliveryTimeRange) {
      this.deliveryTimeRange = resp.deliveryTimeRange;
    }
    if (resp.refundPolicy) {
      this.refundPolicy = resp.refundPolicy;
    }
    if (resp.refundPolicyDescription) {
      this.refundPolicyDescription = resp.refundPolicyDescription;
    }
    if (resp.federalTaxNumber) {
      this.federalTaxNumber = resp.federalTaxNumber;
    }
  }
};

usAccountDetails.prototype.setType = function(type) {
  this.type = type;
};

usAccountDetails.prototype.getType = function() {
  return this.type;
};

usAccountDetails.prototype.setDescription = function(description) {
  this.description = description;
};

usAccountDetails.prototype.getDescription = function() {
  return this.description;
};

usAccountDetails.prototype.setIsCardPresent = function(isCardPresent) {
  this.isCardPresent = isCardPresent;
};

usAccountDetails.prototype.getIsCardPresent = function() {
  return this.isCardPresent;
};

usAccountDetails.prototype.setHasPreviouslyProcessedCards = function(hasPreviouslyProcessedCards) {
  this.hasPreviouslyProcessedCards = hasPreviouslyProcessedCards;
};

usAccountDetails.prototype.getHasPreviouslyProcessedCards = function() {
  return this.hasPreviouslyProcessedCards;
};

usAccountDetails.prototype.setShipsGoods = function(shipsGoods) {
  this.shipsGoods = shipsGoods;
};

usAccountDetails.prototype.getShipsGoods = function() {
  return this.shipsGoods;
};

usAccountDetails.prototype.setDeliveryTimeRange = function(deliveryTimeRange) {
  this.deliveryTimeRange = deliveryTimeRange;
};

usAccountDetails.prototype.getDeliveryTimeRange = function() {
  return this.deliveryTimeRange;
};

usAccountDetails.prototype.setRefundPolicy = function(refundPolicy) {
  this.refundPolicy = refundPolicy;
};

usAccountDetails.prototype.getRefundPolicy = function() {
  return this.refundPolicy;
};

usAccountDetails.prototype.setRefundPolicyDescription = function(refundPolicyDescription) {
  this.refundPolicyDescription = refundPolicyDescription;
};

usAccountDetails.prototype.getRefundPolicyDescription = function() {
  return this.refundPolicyDescription;
};

usAccountDetails.prototype.setFederalTaxNumber = function(federalTaxNumber) {
  this.federalTaxNumber = federalTaxNumber;
};

usAccountDetails.prototype.getFederalTaxNumber = function() {
  return this.federalTaxNumber;
};

module.exports = usAccountDetails;
