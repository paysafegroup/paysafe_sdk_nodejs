var error = require("../common/error");
var link = require("../common/link");
var createArray = require("../common/createArray");
var card = require("./card");
var authentication = require("./authentication");
var profile = require("../customervault/profiles");
var billingdetails = require("./billingDetails");
var shippingDetails = require("./shippingDetails");
var accordD = require("./accordD");
var masterPass = require("./masterPass");
var acquirerResponse = require("./acquirerResponse");
var visaAdditionalAuthData = require("./visaAdditionalAuthData");
var merchantDescriptor = require("./merchantDescriptor");
var settlements = require("./settlements");
function authorization(resp) {
	if (resp) {
		if (resp.id) {
			this.id = resp.id;
		}
		if (resp.merchantRefNum) {
			this.merchantRefNum = resp.merchantRefNum;
		}
		if (resp.amount) {
			this.amount = resp.amount;
		}
		if (resp.settleWithAuth !== undefined) {
			this.settleWithAuth = resp.settleWithAuth;
		}
		if (resp.availableToSettle) {
			this.availableToSettle = resp.availableToSettle;
		}
		if (resp.childAccountNum) {
			this.childAccountNum = resp.childAccountNum;
		}
		if (resp.card) {
			this.card = new card(resp.card);
		}
		if (resp.authentication) {
			this.authentication = new authentication(resp.authentication);
		}
		if (resp.authCode) {
			this.authCode = resp.authCode;
		}
		if (resp.profile) {
			this.profile = new profile(resp.profile);
		}
		if (resp.billingDetails) {
			this.billingDetails = new billingdetails(resp.billingDetails);
		}
		if (resp.shippingDetails) {
			this.shippingDetails = new shippingDetails(resp.shippingDetails);
		}
		if (resp.recurring) {
			this.recurring = resp.recurring;
		}
		if (resp.customerIp) {
			this.customerIp = resp.customerIp;
		}
		if (resp.dupCheck !== undefined) {
			this.dupCheck = resp.dupCheck;
		}
		if (resp.keywords) {
			this.keywords = resp.keywords;
		}
		if (resp.merchantDescriptor) {
			this.merchantDescriptor = new merchantDescriptor(resp.merchantDescriptor);
		}
		if (resp.accordD) {
			this.accordD = new accordD(resp.accordD);
		}
		if (resp.description) {
			this.description = resp.description;
		}
		if (resp.masterPass) {
			this.masterPass = new masterPass(resp.masterPass);
		}
		if (resp.txnTime) {
			this.txnTime = resp.txnTime;
		}
		if (resp.currencyCode) {
			this.currencyCode = resp.currencyCode;
		}
		if (resp.avsResponse) {
			this.avsResponse = resp.avsResponse;
		}
		if (resp.cvvVerification) {
			this.cvvVerification = resp.cvvVerification;
		}
		if (resp.error) {
			this.error = new error(resp.error);
		}
		if (resp.status) {
			this.status = resp.status;
		}
		if (resp.riskReasonCode) {
			this.riskReasonCode = resp.riskReasonCode;
		}
		if (resp.acquirerResponse) {
			this.acquirerResponse = new acquirerResponse(resp.acquirerResponse);
		}
		if (resp.visaAdditionalAuthData) {
			this.visaAdditionalAuthData = new visaAdditionalAuthData(resp.visaAdditionalAuthData);
		}
		if (resp.links) {
			this.links = new createArray(resp.links, link);
		}
		if (resp.auths) {
			this.auths = new createArray(resp.auths, authorization);
		}
		if(resp.settlements){
			this.settlements = new createArray(resp.settlements, settlements);
		}
	}
}

authorization.prototype.setSettlements = function(
		settlements) {
	this.settlements = settlements;
};

authorization.prototype.getSettlements = function() {
	return this.settlements;
};

authorization.prototype.setAuths = function(
		auths) {
	this.auths = auths;
};

authorization.prototype.getAuths = function() {
	return this.auths;
};

authorization.prototype.setLinks = function(
		links) {
	this.links = links;
};

authorization.prototype.getLinks = function() {
	return this.links;
};

authorization.prototype.setShippingDetails = function(
		shippingDetails) {
	this.shippingDetails = shippingDetails;
};

authorization.prototype.getShippingDetails = function() {
	return this.shippingDetails;
};

authorization.prototype.setVisaAdditionalAuthData = function(
		visaAdditionalAuthData) {
	this.visaAdditionalAuthData = visaAdditionalAuthData;
};

authorization.prototype.getVisaAdditionalAuthData = function() {
	return this.visaAdditionalAuthData;
};

authorization.prototype.setAcquirerResponse = function(acquirerResponse) {
	this.acquirerResponse = acquirerResponse;
};
authorization.prototype.getAcquirerResponse = function() {
	return this.acquirerResponse;
};

authorization.prototype.setRiskReasonCode = function(riskReasonCode) {
	this.riskReasonCode = riskReasonCode;
};

authorization.prototype.getRiskReasonCode = function() {
	return this.riskReasonCode;
};

authorization.prototype.setError = function(error) {
	this.error = error;
};
authorization.prototype.getError = function() {
	return this.error;
};

authorization.prototype.setCvvVerification = function(cvvVerification) {
	this.cvvVerification = cvvVerification;
};

authorization.prototype.getCvvVerification = function() {
	return this.cvvVerification;
};

authorization.prototype.setAvsResponse = function(avsResponse) {
	this.avsResponse = avsResponse;
};
authorization.prototype.getAvsResponse = function() {
	return this.avsResponse;
};

authorization.prototype.setCurrencyCode = function(currencyCode) {
	this.currencyCode = currencyCode;
};

authorization.prototype.getCurrencyCode = function() {
	return this.currencyCode;
};

authorization.prototype.setTxnTime = function(txnTime) {
	this.txnTime = txnTime;
};

authorization.prototype.getTxnTime = function() {
	return this.txnTime;
};

authorization.prototype.setMasterPass = function(masterPass) {
	this.masterPass = masterPass;
};
authorization.prototype.getMasterPass = function() {
	return this.masterPass;
};

authorization.prototype.setDescription = function(description) {
	this.description = description;
};

authorization.prototype.getDescription = function() {
	return this.description;
};

authorization.prototype.setAccordD = function(accordD) {
	this.accordD = accordD;
};
authorization.prototype.getAccordD = function() {
	return this.accordD;
};

authorization.prototype.setMerchantDescriptor = function(
		merchantDescriptor) {
	this.merchantDescriptor = merchantDescriptor;
};

authorization.prototype.getMerchantDescriptor = function() {
	return this.merchantDescriptor;
};

authorization.prototype.setCard = function(card) {
	this.card = card;
};
authorization.prototype.getCard = function() {
	return this.card;
};

authorization.prototype.setKeywords = function(keywords) {
	this.keywords = keywords;
};

authorization.prototype.getKeywords = function() {
	return this.keywords;
};

authorization.prototype.setDupCheck = function(dupCheck) {
	this.dupCheck = dupCheck;
};

authorization.prototype.getDupCheck = function() {
	return this.dupCheck;
};

authorization.prototype.setRecurring = function(recurring) {
	this.recurring = recurring;
};
authorization.prototype.getRecurring = function() {
	return this.recurring;
};

authorization.prototype.setBillingDetails = function(billingDetails) {
	this.billingDetails = billingDetails;
};
authorization.prototype.getBillingDetails = function() {
	return this.billingDetails;
};

authorization.prototype.setProfile = function(profile) {
	this.profile = profile;
};

authorization.prototype.getProfile = function() {
	return this.profile;
};

authorization.prototype.setAuthCode = function(authCode) {
	this.authCode = authCode;
};
authorization.prototype.getAuthCode = function() {
	return this.authCode;
};

authorization.prototype.setCustomerIp = function(customerIp) {
	this.customerIp = customerIp;
};

authorization.prototype.getCustomerIp = function() {
	return this.customerIp;
};

authorization.prototype.setAuthentication = function(authentication) {
	this.authentication = authentication;
};

authorization.prototype.getAuthentication = function() {
	return this.authentication;
};

authorization.prototype.setChildAccountNum = function(childAccountNum) {
	this.childAccountNum = childAccountNum;
};
authorization.prototype.getChildAccountNum = function() {
	return this.childAccountNum;
};

authorization.prototype.setAvailableToSettle = function(availableToSettle) {
	this.availableToSettle = availableToSettle;
};

authorization.prototype.getAvailableToSettle = function() {
	return this.availableToSettle;
};

authorization.prototype.setSettleWithAuth = function(settleWithAuth) {
	this.settleWithAuth = settleWithAuth;
};
authorization.prototype.getSettleWithAuth = function() {
	return this.settleWithAuth;
};

authorization.prototype.setAmount = function(amount) {
	this.amount = amount;
};

authorization.prototype.getAmount = function() {
	return this.amount;
};

authorization.prototype.setMerchantRefNum = function(merchantRefNum) {
	this.merchantRefNum = merchantRefNum;
};
authorization.prototype.getMerchantRefNum = function() {
	return this.merchantRefNum;
};

authorization.prototype.setStatus = function(status) {
	this.status = status;
};

authorization.prototype.getStatus = function() {
	return this.status;
};

authorization.prototype.setId = function(id) {
	this.id = id;
};
authorization.prototype.getId = function() {
	return this.id;
};

module.exports = authorization;