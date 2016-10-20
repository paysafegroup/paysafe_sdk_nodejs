var error = require("../common/error");
var link = require("../common/link");
var createArray = require("../common/createArray");
var settlements = require("./settlements");
var acquirerResponse = require("./acquirerResponse");
function refund(resp) {
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
		if (resp.childAccountNum) {
			this.childAccountNum = resp.childAccountNum;
		}
		if (resp.dupCheck) {
			this.dupCheck = resp.dupCheck;
		}
		if (resp.txnTime) {
			this.txnTime = resp.txnTime;
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
		if (resp.settlements) {
			this.settlements = new settlements(resp.settlements);
		}
		if (resp.links) {
			this.links = new createArray(resp.links, link);
		}
		if(resp.refunds){
			this.refunds = new createArray(resp.refunds, refund);
		}
		if(resp.currencyCode){
			this.currencyCode = resp.currencyCode;
		}
		if(resp.originalMerchantRefNum){
			this.originalMerchantRefNum = resp.originalMerchantRefNum;
		}
		if(resp.mode){
			this.mode = resp.mode;
		}
		if(resp.authType){
			this.authType = resp.authType;
		}
		if(resp.confirmationNumber){
			this.confirmationNumber = resp.confirmationNumber;
		}
	}
}

refund.prototype.setConfirmationNumber = function(confirmationNumber) {
	this.confirmationNumber = confirmationNumber;
};

refund.prototype.getConfirmationNumber = function() {
	return this.confirmationNumber;
};

refund.prototype.setAuthType = function(authType) {
	this.authType = authType;
};

refund.prototype.getAuthType = function() {
	return this.authType;
};

refund.prototype.setMode = function(mode) {
	this.mode = mode;
};

refund.prototype.getMode = function() {
	return this.mode;
};

refund.prototype.setOriginalMerchantRefNum = function(originalMerchantRefNum) {
	this.originalMerchantRefNum = originalMerchantRefNum;
};

refund.prototype.getOriginalMerchantRefNum = function() {
	return this.originalMerchantRefNum;
};

refund.prototype.setCurrencyCode = function(currencyCode) {
	this.currencyCode = currencyCode;
};

refund.prototype.getCurrencyCode = function() {
	return this.currencyCode;
};

refund.prototype.setRefunds = function(refunds) {
	this.refunds = refunds;
};

refund.prototype.getRefunds = function() {
	return this.refunds;
};

refund.prototype.setStatus = function(status) {
	this.status = status;
};

refund.prototype.getStatus = function() {
	return this.status;
};

refund.prototype.setLinks = function(links) {
	this.links = links;
};

refund.prototype.getLinks = function() {
	return this.links;
};

refund.prototype.setSettlements = function(settlements) {
	this.settlements = settlements;
};

refund.prototype.getSettlements = function() {
	return this.settlements;
};

refund.prototype.setTxnTime = function(txnTime) {
	this.txnTime = txnTime;
};

refund.prototype.getTxnTime = function() {
	return this.txnTime;
};

refund.prototype.setDupCheck = function(dupCheck) {
	this.dupCheck = dupCheck;
};

refund.prototype.getDupCheck = function() {
	return this.dupCheck;
};

refund.prototype.setChildAccountNum = function(childAccountNum) {
	this.childAccountNum = childAccountNum;
};

refund.prototype.getChildAccountNum = function() {
	return this.childAccountNum;
};

refund.prototype.setAcquirerResponse = function(acquirerResponse) {
	this.acquirerResponse = acquirerResponse;
};
refund.prototype.getAcquirerResponse = function() {
	return this.acquirerResponse;
};

refund.prototype.setRiskReasonCode = function(riskReasonCode) {
	this.riskReasonCode = riskReasonCode;
};

refund.prototype.getRiskReasonCode = function() {
	return this.riskReasonCode;
};

refund.prototype.setError = function(error) {
	this.error = error;
};
refund.prototype.getError = function() {
	return this.error;
};

refund.prototype.setAmount = function(amount) {
	this.amount = amount;
};

refund.prototype.getAmount = function() {
	return this.amount;
};

refund.prototype.setMerchantRefNum = function(merchantRefNum) {
	this.merchantRefNum = merchantRefNum;
};
refund.prototype.getMerchantRefNum = function() {
	return this.merchantRefNum;
};

refund.prototype.setId = function(id) {
	this.id = id;
};

refund.prototype.getId = function() {
	return this.id;
};

module.exports = refund;