var error = require("../common/error");
var link = require("../common/link");
var createArray = require("../common/createArray");
var card = require("./card");
var profile = require("../customervault/profiles");
var billingdetails = require("./billingDetails");
var acquirerResponse = require("./acquirerResponse");
var authentication = require("./authentication");
var shippingDetails = require("./shippingDetails");
var merchantDescriptor = require("./merchantDescriptor");
var accordD = require("./accordD");

function verification(resp) {
	if (resp) {
		if (resp.id) {
			this.id = resp.id;
		}
		if (resp.merchantRefNum) {
			this.merchantRefNum = resp.merchantRefNum;
		}
		if (resp.childAccountNum) {
			this.childAccountNum = resp.childAccountNum;
		}
		if (resp.card) {
			this.card = new card(resp.card);
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
		if (resp.customerIp) {
			this.customerIp = resp.customerIp;
		}
		if (resp.dupCheck) {
			this.dupCheck = resp.dupCheck;
		}
		if (resp.description) {
			this.description = resp.description;
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
		if (resp.links) {
			this.links = new createArray(resp.links, link);
		}
		if (resp.verifications) {
			this.verifications = new createArray(resp.verifications, verification);
		}
		if(resp.accordD){
			this.accordD = new accordD(resp.accordD);
		}
		if(resp.merchantDescriptor){
			this.merchantDescriptor = new merchantDescriptor(resp.merchantDescriptor);
		}
		if(resp.shippingDetails){
			this.shippingDetails = new shippingDetails(resp.shippingDetails);
		}
		if(resp.authentication){
			this.authentication = new authentication(resp.authentication);
		}
	}
}

verification.prototype.setAccordD = function(
		accordD) {
	this.accordD = accordD;
};

verification.prototype.getAccordD= function() {
	return this.accordD;
};

verification.prototype.setMerchantDescriptor = function(
		merchantDescriptor) {
	this.merchantDescriptor = merchantDescriptor;
};

verification.prototype.getMerchantDescriptor= function() {
	return this.merchantDescriptor;
};

verification.prototype.setShippingDetails = function(
		shippingDetails) {
	this.shippingDetails = shippingDetails;
};

verification.prototype.getShippingDetails= function() {
	return this.shippingDetails;
};

verification.prototype.setAuthentication = function(
		authentication) {
	this.authentication = authentication;
};

verification.prototype.getAuthentication= function() {
	return this.authentication;
};

verification.prototype.setVerifications = function(
		verifications) {
	this.verifications = verifications;
};

verification.prototype.getVerifications= function() {
	return this.verifications;
};

verification.prototype.setLinks = function(
		links) {
	this.links = links;
};

verification.prototype.getLinks = function() {
	return this.links;
};

verification.prototype.setCvvVerification = function(cvvVerification) {
	this.cvvVerification = cvvVerification;
};

verification.prototype.getCvvVerification = function() {
	return this.cvvVerification;
};

verification.prototype.setAvsResponse = function(avsResponse) {
	this.avsResponse = avsResponse;
};
verification.prototype.getAvsResponse = function() {
	return this.avsResponse;
};

verification.prototype.setCurrencyCode = function(currencyCode) {
	this.currencyCode = currencyCode;
};

verification.prototype.getCurrencyCode = function() {
	return this.currencyCode;
};

verification.prototype.setDescription = function(description) {
	this.description = description;
};

verification.prototype.getDescription = function() {
	return this.description;
};

verification.prototype.setCustomerIp = function(customerIp) {
	this.customerIp = customerIp;
};
verification.prototype.getCustomerIp = function() {
	return this.customerIp;
};

verification.prototype.setBillingDetails = function(billingDetails) {
	this.billingDetails = billingDetails;
};

verification.prototype.getBillingDetails = function() {
	return this.billingDetails;
};


verification.prototype.setProfile = function(profile) {
	this.profile = profile;
};

verification.prototype.getProfile = function() {
	return this.profile;
};

verification.prototype.setAuthCode = function(authCode) {
	this.authCode = authCode;
};

verification.prototype.getAuthCode = function() {
	return this.authCode;
};

verification.prototype.setCard = function(card) {
	this.card = card;
};

verification.prototype.getCard = function() {
	return this.card;
};

verification.prototype.setTxnTime = function(txnTime) {
	this.txnTime = txnTime;
};

verification.prototype.getTxnTime = function() {
	return this.txnTime;
};

verification.prototype.setDupCheck = function(dupCheck) {
	this.dupCheck = dupCheck;
};

verification.prototype.getDupCheck = function() {
	return this.dupCheck;
};

verification.prototype.setChildAccountNum = function(childAccountNum) {
	this.childAccountNum = childAccountNum;
};

verification.prototype.getChildAccountNum = function() {
	return this.childAccountNum;
};

verification.prototype.setAcquirerResponse = function(acquirerResponse) {
	this.acquirerResponse = acquirerResponse;
};
verification.prototype.getAcquirerResponse = function() {
	return this.acquirerResponse;
};

verification.prototype.setRiskReasonCode = function(riskReasonCode) {
	this.riskReasonCode = riskReasonCode;
};

verification.prototype.getRiskReasonCode = function() {
	return this.riskReasonCode;
};

verification.prototype.setError = function(error) {
	this.error = error;
};
verification.prototype.getError = function() {
	return this.error;
};

verification.prototype.setAmount = function(amount) {
	this.amount = amount;
};

verification.prototype.getAmount = function() {
	return this.amount;
};

verification.prototype.setMerchantRefNum = function(merchantRefNum) {
	this.merchantRefNum = merchantRefNum;
};
verification.prototype.getMerchantRefNum = function() {
	return this.merchantRefNum;
};

verification.prototype.setId = function(id) {
	this.id = id;
};

verification.prototype.getId = function() {
	return this.id;
};

module.exports = verification;