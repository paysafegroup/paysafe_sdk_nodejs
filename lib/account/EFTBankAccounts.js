var error = require("../common/error");
var MerchantEFTBankAccounts = function(resp) {
	if (resp) {

		if (resp.id) {
			this.id = resp.id;
		}
		if (resp.status) {
			this.status = resp.status;
		}
		if (resp.statusReason) {
			this.statusReason = resp.statusReason;
		}
		if (resp.accountNumber) {
			this.accountNumber = resp.accountNumber;
		}
		if (resp.accountHolderName) {
			this.accountHolderName = resp.accountHolderName;
		}
		if (resp.transitNumber) {
			this.transitNumber = resp.transitNumber;
		}
		if (resp.institutionId) {
			this.institutionId = resp.institutionId;
		}
		if (resp.error) {
			this.error = new error(resp.error);
		}
	}
};

MerchantEFTBankAccounts.prototype.setId = function(id) {
	this.id = id;
};

MerchantEFTBankAccounts.prototype.getId = function() {
	return this.id;
};

MerchantEFTBankAccounts.prototype.setStatus = function(status) {
	this.status = status;
};

MerchantEFTBankAccounts.prototype.getStatus = function() {
	return this.status;
};

MerchantEFTBankAccounts.prototype.setStatusReason = function(statusReason) {
	this.statusReason = statusReason;
};

MerchantEFTBankAccounts.prototype.getStatusReason = function() {
	return this.statusReason;
};

MerchantEFTBankAccounts.prototype.setAccountNumber = function(accountNumber) {
	this.accountNumber = accountNumber;
};

MerchantEFTBankAccounts.prototype.getAccountNumber = function() {
	return this.accountNumber;
};

MerchantEFTBankAccounts.prototype.setAccountHolderName = function(accountHolderName) {
	this.accountHolderName = accountHolderName;
};

MerchantEFTBankAccounts.prototype.getAccountHolderName = function() {
	return this.accountHolderName;
};

MerchantEFTBankAccounts.prototype.setTransitNumber = function(transitNumber) {
	this.transitNumber = transitNumber;
};

MerchantEFTBankAccounts.prototype.getTransitNumber = function() {
	return this.transitNumber;
};

MerchantEFTBankAccounts.prototype.setInstitutionId = function(institutionId) {
	this.institutionId = institutionId;
};

MerchantEFTBankAccounts.prototype.getInstitutionId = function() {
	return this.institutionId;
};

MerchantEFTBankAccounts.prototype.setError = function(error) {
	this.error = error;
};

MerchantEFTBankAccounts.prototype.getError = function() {
	return this.error;
};

module.exports = MerchantEFTBankAccounts;
