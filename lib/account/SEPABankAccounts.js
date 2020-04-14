/*
* Copyright (c) 2016 Paysafe
*
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
* associated documentation files (the "Software"), to deal in the Software without restriction,
* including without limitation the rights to use, copy, modify, merge, publish, distribute,
* sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all copies or
* substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
* NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
* DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
var error = require("../common/error");
var createArray = require("../common/createArray");
var links = require("../common/link");
var MerchantSEPABankAccounts = function(resp) {
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
		if (resp.beneficiaryAccountName) {
			this.beneficiaryAccountName = resp.beneficiaryAccountName;
		}
		if (resp.beneficiaryBankCountry) {
			this.beneficiaryBankCountry = resp.beneficiaryBankCountry;
		}
		if (resp.ibanNumber) {
			this.ibanNumber = resp.ibanNumber;
		}
		if (resp.swiftNumber) {
			this.swiftNumber = resp.swiftNumber;
		}
		if (resp.links) {
			this.links = new createArray(resp.links, link);
		}
		if (resp.error) {
			this.error = new error(resp.error);
		}
	}
};

MerchantSEPABankAccounts.prototype.setId = function(id) {
	this.id = id;
};

MerchantSEPABankAccounts.prototype.getId = function() {
	return this.id;
};

MerchantSEPABankAccounts.prototype.setStatus = function(status) {
	this.status = status;
};

MerchantSEPABankAccounts.prototype.getStatus = function() {
	return this.status;
};

MerchantSEPABankAccounts.prototype.setStatusReason = function(statusReason) {
	this.statusReason = statusReason;
};

MerchantSEPABankAccounts.prototype.getStatusReason = function() {
	return this.statusReason;
};

MerchantSEPABankAccounts.prototype.setbeneficiaryAccountName = function(beneficiaryAccountName) {
	this.beneficiaryAccountName = beneficiaryAccountName;
};

MerchantSEPABankAccounts.prototype.getbeneficiaryAccountName = function() {
	return this.beneficiaryAccountName;
};

MerchantSEPABankAccounts.prototype.setbeneficiaryBankCountry = function(beneficiaryBankCountry) {
	this.beneficiaryBankCountry = beneficiaryBankCountry;
};

MerchantSEPABankAccounts.prototype.getbeneficiaryBankCountry= function() {
	return this.beneficiaryBankCountry;
};

MerchantSEPABankAccounts.prototype.setIbanNumber = function(ibanNumber) {
	this.ibanNumber = ibanNumber;
};

MerchantSEPABankAccounts.prototype.getIbanNumber = function() {
	return this.ibanNumber;
};

MerchantSEPABankAccounts.prototype.setSwiftNumber = function(swiftNumber) {
	this.swiftNumber = swiftNumber;
};

MerchantSEPABankAccounts.prototype.getSwiftNumber = function() {
	return this.swiftNumber;
};

MerchantSEPABankAccounts.prototype.setLinks = function(links) {
	this.links = links;
};

MerchantSEPABankAccounts.prototype.getLinks = function() {
	return this.links;
};

MerchantSEPABankAccounts.prototype.setError = function(error) {
	this.error = error;
};

MerchantSEPABankAccounts.prototype.getError = function() {
	return this.error;
};

module.exports = MerchantSEPABankAccounts;
