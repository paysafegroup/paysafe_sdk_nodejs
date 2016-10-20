var error = require("../common/error");
var link = require("../common/link");
var createArray = require("../common/createArray");
var authorization = require("./authorization");
var acquirerResponse = require("./acquirerResponse");
function settlements(resp) {
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
		if (resp.availableToRefund) {
			this.availableToRefund = resp.availableToRefund;
		}
		if (resp.childAccountNum) {
			this.childAccountNum = resp.childAccountNum;
		}
		if (resp.txnTime) {
			this.txnTime = resp.txnTime;
		}
		if (resp.error) {
			this.error = resp.error;
		}
		if (resp.dupCheck) {
			this.dupCheck = resp.dupCheck;
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
		if(resp.authorization){
			this.authorization =  new authorization(resp.authorization);
		}
		if (resp.links) {
			this.links = new createArray(resp.links, link);
		}
		if (resp.error) {
			this.error = new error(resp.error);
		}
		if (resp.settlements) {
			this.settlements = new createArray(resp.settlements, settlements);
		}
		if(resp.originalMerchantRefNum){
			this.originalMerchantRefNum = resp.originalMerchantRefNum;
		}
		if(resp.mode){
			this.mode = resp.mode;
		}
		if(resp.currencyCode){
			this.currencyCode = resp.currencyCode;
		}
		if(resp.confirmationNumber){
			this.confirmationNumber = resp.confirmationNumber;
		}
		if(resp.authType){
			this.authType = resp.authType;
		}
	}
};

settlements.prototype.setOriginalMerchantRefNum = function(originalMerchantRefNum) {
	this.originalMerchantRefNum = originalMerchantRefNum;
};

settlements.prototype.getOriginalMerchantRefNum = function() {
	return this.originalMerchantRefNum;
};

settlements.prototype.setAuthType = function(authType) {
	this.authType = authType;
};

settlements.prototype.getAuthType = function() {
	return this.authType;
};

settlements.prototype.setConfirmationNumber = function(confirmationNumber) {
	this.confirmationNumber = confirmationNumber;
};

settlements.prototype.getConfirmationNumber = function() {
	return this.confirmationNumber;
};

settlements.prototype.setCurrencyCode = function(currencyCode) {
	this.currencyCode = currencyCode;
};

settlements.prototype.getCurrencyCode = function() {
	return this.currencyCode;
};

settlements.prototype.setMode = function(mode) {
	this.mode = mode;
};

settlements.prototype.getMode = function() {
	return this.mode;
};

settlements.prototype.setSettlements = function(settlements) {
	this.settlements = settlements;
};

settlements.prototype.getSettlements = function() {
	return this.settlements;
};

settlements.prototype.setStatus = function(status) {
	this.status = status;
};

settlements.prototype.getStatus = function() {
	return this.status;
};

settlements.prototype.setLinks = function(links) {
	this.links = links;
};

settlements.prototype.getLinks = function() {
	return this.links;
};

settlements.prototype.setError = function(error) {
	this.error = error;
};

settlements.prototype.getError = function() {
	return this.error;
};

settlements.prototype.setAuthorization = function(authorization) {
	this.authorization = authorization;
};

settlements.prototype.getAuthorization = function() {
	return this.authorization;
};

settlements.prototype.setAvailableToRefund = function(availableToRefund) {
	this.availableToRefund = availableToRefund;
};

settlements.prototype.getAvailableToRefund = function() {
	return this.availableToRefund;
};

settlements.prototype.setTxnTime = function(txnTime) {
	this.txnTime = txnTime;
};

settlements.prototype.getTxnTime = function() {
	return this.txnTime;
};

settlements.prototype.setDupCheck = function(dupCheck) {
	this.dupCheck = dupCheck;
};

settlements.prototype.getDupCheck = function() {
	return this.dupCheck;
};

settlements.prototype.setChildAccountNum = function(childAccountNum) {
	this.childAccountNum = childAccountNum;
};

settlements.prototype.getChildAccountNum = function() {
	return this.childAccountNum;
};

settlements.prototype.setAcquirerResponse = function(acquirerResponse) {
	this.acquirerResponse = acquirerResponse;
};
settlements.prototype.getAcquirerResponse = function() {
	return this.acquirerResponse;
};

settlements.prototype.setRiskReasonCode = function(riskReasonCode) {
	this.riskReasonCode = riskReasonCode;
};

settlements.prototype.getRiskReasonCode = function() {
	return this.riskReasonCode;
};

settlements.prototype.setError = function(error) {
	this.error = error;
};
settlements.prototype.getError = function() {
	return this.error;
};

settlements.prototype.setAmount = function(amount) {
	this.amount = amount;
};

settlements.prototype.getAmount = function() {
	return this.amount;
};

settlements.prototype.setMerchantRefNum = function(merchantRefNum) {
	this.merchantRefNum = merchantRefNum;
};
settlements.prototype.getMerchantRefNum = function() {
	return this.merchantRefNum;
};

settlements.prototype.setId = function(id) {
	this.id = id;
};

settlements.prototype.getId = function() {
	return this.id;
};

module.exports = settlements;