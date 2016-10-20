var error = require("../common/error");
var cardExpiry = require("./cardExpiry");
var billingDetails = require("./billingDetails");
var card = function(resp) {
	if (resp) {
		if (resp.id) {
			this.id = resp.id;
		}
		if (resp.singleUseToken) {
			this.singleUseToken = resp.singleUseToken;
		}
		if (resp.brand) {
			this.brand = resp.brand;
		}
		if (resp.nickName) {
			this.nickName = resp.nickName;
		}
		if (resp.merchantRefNum) {
			this.merchantRefNum = resp.merchantRefNum;
		}
		if (resp.holderName) {
			this.holderName = resp.holderName;
		}
		if (resp.cardType) {
			this.cardType = resp.cardType;
		}
		if (resp.billingAddressId) {
			this.billingAddressId = resp.billingAddressId;
		}
		if (resp.billingDetails) {
			if (resp.billingDetails instanceof Array) {
				this.billingDetails = new createArray(resp.billingDetails, billingDetails);
			} else {
				this.billingDetails = resp.billingDetails;
			}
		}
		if (resp.defaultCardIndicator !== undefined) {
			this.defaultCardIndicator = resp.defaultCardIndicator;
		}
		if (resp.paymentToken) {
			this.paymentToken = resp.paymentToken;
		}
		if (resp.cardNum) {
			this.cardNum = resp.cardNum;
		}
		if (resp.type) {
			this.type = resp.type;
		}
		if (resp.lastDigits) {
			this.lastDigits = resp.lastDigits;
		}
		if (resp.cardExpiry) {
			this.cardExpiry = new cardExpiry(resp.cardExpiry);
		}
		if (resp.cvv) {
			this.cvv = resp.cvv;
		}
		if (resp.track1) {
			this.track1 = resp.track1;
		}
		if (resp.track2) {
			this.track2 = resp.track2;
		}
		if (resp.profile) {
			this.profile =resp.profile;
		}
		if (resp.error) {
			this.error = new error(resp.error);
		}
		if (resp.status) {
			this.status = resp.status;
		}
	}
};

card.prototype.setSingleUseToken = function(singleUseToken) {
	this.singleUseToken = singleUseToken;
};

card.prototype.getSingleUseToken = function() {
	return this.singleUseToken;
};

card.prototype.setBrand = function(brand) {
	this.brand = brand;
};

card.prototype.getBrand = function() {
	return this.brand;
};

card.prototype.setStatus = function(status) {
	this.status = status;
};

card.prototype.getStatus = function() {
	return this.status;
};

card.prototype.setError = function(error) {
	this.error = error;
};

card.prototype.getError = function() {
	return this.error;
};

card.prototype.setProfile = function(profile) {
	this.profile = profile;
};

card.prototype.getProfile = function() {
	return this.profile;
};

card.prototype.setDefaultCardIndicator = function(defaultCardIndicator) {
	this.defaultCardIndicator = defaultCardIndicator;
};

card.prototype.getDefaultCardIndicator = function() {
	return this.defaultCardIndicator;
};

card.prototype.setBillingAddressId = function(billingAddressId) {
	this.billingAddressId = billingAddressId;
};

card.prototype.getBillingAddressId = function() {
	return this.billingAddressId;
};

card.prototype.setBillingDetails = function(billingAddress) {
	this.billingAddress = billingAddress;
};

card.prototype.getBillingDetails = function() {
	return this.billingAddress;
};

card.prototype.setCardType = function(cardType) {
	this.cardType = cardType;
};

card.prototype.getCardType = function() {
	return this.cardType;
};

card.prototype.setNickName = function(nickName) {
	this.nickName = nickName;
};

card.prototype.getNickName = function() {
	return this.nickName;
};

card.prototype.setMerchantRefNum = function(merchantRefNum) {
	this.merchantRefNum = merchantRefNum;
};

card.prototype.getMerchantRefNum = function() {
	return this.merchantRefNum;
};

card.prototype.setHolderName = function(holderName) {
	this.holderName = holderName;
};

card.prototype.getHolderName = function() {
	return this.holderName;
};

card.prototype.setPaymentToken = function(paymentToken) {
	this.paymentToken = paymentToken;
};

card.prototype.getPaymentToken = function() {
	return this.paymentToken;
};

card.prototype.setCardNum = function(cardNum) {
	this.cardNum = cardNum;
};

card.prototype.getCardNum = function() {
	return this.cardNum;
};

card.prototype.setType = function(type) {
	this.type = type;
};

card.prototype.getType = function() {
	return this.type;
};

card.prototype.setLastDigits = function(lastDigits) {
	this.lastDigits = lastDigits;
};

card.prototype.getLastDigits = function() {
	return this.lastDigits;
};

card.prototype.setCardExpiry = function(cardExpiry) {
	this.cardExpiry = cardExpiry;
};

card.prototype.getCardExpiry = function() {
	return this.cardExpiry;
};

card.prototype.setCvv = function(cvv) {
	this.cvv = cvv;
};

card.prototype.getCvv = function() {
	return this.cvv;
};

card.prototype.setTrack1 = function(track1) {
	this.track1 = track1;
};

card.prototype.getTrack1 = function() {
	return this.track1;
};

card.prototype.settrack2 = function(track2) {
	this.track2 = track2;
};

card.prototype.gettrack2 = function() {
	return this.track2;
};

card.prototype.setId = function(id) {
	this.id = id;
};

card.prototype.getId = function() {
	return this.id;
};

module.exports = card;