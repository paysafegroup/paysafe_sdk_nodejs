var error = require("../common/error");
var createArray = require("../common/createArray");
var links = require("../common/link");
var MerchantBACSBankAccounts = function(resp) {
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
		if (resp.beneficiaryAccountName) {
			this.beneficiaryAccountName = resp.beneficiaryAccountName;
		}
		if (resp.beneficiaryBankCountry) {
			this.beneficiaryBankCountry = resp.beneficiaryBankCountry;
		}
		if (resp.sortCode) {
			this.sortCode = resp.sortCode;
		}
		if (resp.billingAddressId) {
			this.billingAddressId = resp.billingAddressId;
		}
		if (resp.links) {
			this.links = new createArray(resp.links, link);
		}
		if (resp.error) {
			this.error = new error(resp.error);
		}
	}
};

MerchantBACSBankAccounts.prototype.setId = function(id) {
	this.id = id;
};

MerchantBACSBankAccounts.prototype.getId = function() {
	return this.id;
};

MerchantBACSBankAccounts.prototype.setStatus = function(status) {
	this.status = status;
};

MerchantBACSBankAccounts.prototype.getStatus = function() {
	return this.status;
};

MerchantBACSBankAccounts.prototype.setstatusReason = function(statusReason) {
	this.statusReason = statusReason;
};

MerchantBACSBankAccounts.prototype.getstatusReason = function() {
	return this.statusReason;
};

MerchantBACSBankAccounts.prototype.setaccountNumber = function(accountNumber) {
	this.accountNumber = accountNumber;
};

MerchantBACSBankAccounts.prototype.getaccountNumber = function() {
	return this.accountNumber;
};

MerchantBACSBankAccounts.prototype.setBeneficiaryAccountName = function(beneficiaryAccountName) {
	this.beneficiaryAccountName = beneficiaryAccountName;
};

MerchantBACSBankAccounts.prototype.getBeneficiaryAccountName = function() {
	return this.beneficiaryAccountName;
};

MerchantBACSBankAccounts.prototype.setBeneficiaryBankCountry = function(beneficiaryBankCountry) {
	this.beneficiaryBankCountry = beneficiaryBankCountry;
};

MerchantBACSBankAccounts.prototype.getBeneficiaryBankCountry= function() {
	return this.beneficiaryBankCountry;
};

MerchantBACSBankAccounts.prototype.setSortCode = function(sortCode) {
	this.sortCode = sortCode;
};

MerchantBACSBankAccounts.prototype.getSortCode = function() {
	return this.sortCode;
};

MerchantBACSBankAccounts.prototype.setLinks = function(links) {
	this.links = links;
};

MerchantBACSBankAccounts.prototype.getLinks = function() {
	return this.links;
};

MerchantBACSBankAccounts.prototype.setError = function(error) {
	this.error = error;
};

MerchantBACSBankAccounts.prototype.getError = function() {
	return this.error;
};

module.exports = MerchantBACSBankAccounts;
