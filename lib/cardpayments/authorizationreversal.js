var error = require("../common/error");
var link = require("../common/link");
var createArray = require("../common/createArray");
var acquirerResponse = require("./acquirerResponse");
var authorization = require("./authorization");
function authorizationReversal(resp) {
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
		if (resp.links) {
			this.links = new createArray(resp.links, link);
		}
		if (resp.voidAuths) {
			this.voidAuths = new createArray(resp.voidAuths, authorizationReversal);
		}
		if (resp.authorization) {
			this.auths = new authorization(resp.authorization);
		}
	}
}

authorizationReversal.prototype.setAuthorization = function(
		authorization) {
	this.authorization = authorization;
};

authorizationReversal.prototype.getAuthorization = function() {
	return this.authorization;
};

authorizationReversal.prototype.setVoidAuths = function(
		voidAuths) {
	this.voidAuths = voidAuths;
};

authorizationReversal.prototype.getVoidAuths = function() {
	return this.voidAuths;
};

authorizationReversal.prototype.setLinks = function(
		links) {
	this.links = links;
};

authorizationReversal.prototype.getLinks = function() {
	return this.links;
};

authorizationReversal.prototype.setTxnTime = function(txnTime) {
	this.txnTime = txnTime;
};

authorizationReversal.prototype.getTxnTime = function() {
	return this.txnTime;
};

authorizationReversal.prototype.setDupCheck = function(dupCheck) {
	this.dupCheck = dupCheck;
};

authorizationReversal.prototype.getDupCheck = function() {
	return this.dupCheck;
};

authorizationReversal.prototype.setAcquirerResponse = function(acquirerResponse) {
	this.acquirerResponse = acquirerResponse;
};

authorizationReversal.prototype.getAcquirerResponse = function() {
	return this.acquirerResponse;
};

authorizationReversal.prototype.setRiskReasonCode = function(riskReasonCode) {
	this.riskReasonCode = riskReasonCode;
};

authorizationReversal.prototype.getRiskReasonCode = function() {
	return this.riskReasonCode;
};

authorizationReversal.prototype.setError = function(error) {
	this.error = error;
};

authorizationReversal.prototype.getError = function() {
	return this.error;
};

authorizationReversal.prototype.setChildAccountNum = function(childAccountNum) {
	this.childAccountNum = childAccountNum;
};

authorizationReversal.prototype.getChildAccountNum = function() {
	return this.childAccountNum;
};

authorizationReversal.prototype.setAmount = function(amount) {
	this.amount = amount;
};

authorizationReversal.prototype.getAmount = function() {
	return this.amount;
};

authorizationReversal.prototype.setMerchantRefNum = function(merchantRefNum) {
	this.merchantRefNum = merchantRefNum;
};

authorizationReversal.prototype.getMerchantRefNum = function() {
	return this.merchantRefNum;
};

authorizationReversal.prototype.setStatus = function(status) {
	this.status = status;
};

authorizationReversal.prototype.getStatus = function() {
	return this.status;
};

authorizationReversal.prototype.setId = function(id) {
	this.id = id;
};

authorizationReversal.prototype.getId = function() {
	return this.id;
};

module.exports = authorizationReversal;