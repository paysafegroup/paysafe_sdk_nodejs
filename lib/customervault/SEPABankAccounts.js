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
var profiles = require("../customervault/profiles");
var createArray = require("../common/createArray");
var links = require("../common/link");
var mandates = require("./mandates");
var SEPABankAccounts = function(resp) {
	if (resp) {
		
		if (resp.id) {
			this.id = resp.id;
		}
		if (resp.nickName) {
			this.nickName = resp.nickName;
		}
		if (resp.merchantRefNum) {
			this.merchantRefNum = resp.merchantRefNum;
		}
		if (resp.status) {
			this.status = resp.status;
		}
		if (resp.statusReason) {
			this.statusReason = resp.statusReason;
		}
		if (resp.iban) {
			this.iban = resp.iban;
		}
		if (resp.accountHolderName) {
			this.accountHolderName = resp.accountHolderName;
		}
		if (resp.bic) {
			this.bic = resp.bic;
		}
		if (resp.mandates) {
			if (resp.mandates instanceof Array) {
				this.mandates = new createArray(resp.mandates, mandates);
			} else {
				this.mandates = resp.mandates;
			}
		}
		if (resp.lastDigits) {
			this.lastDigits = resp.lastDigits;
		}
		if (resp.billingAddressId) {
			this.billingAddressId = resp.billingAddressId;
		}
		if (resp.paymentToken) {
			this.paymentToken = resp.paymentToken;
		}
		if (resp.mandateReference) {
			this.mandateReference = resp.mandateReference;
		}
		if (resp.error) {
			this.error = new error(resp.error);
		}
		if (resp.status) {
			this.status = resp.status;
		}
		if (resp.profile) {
			this.profile = new profiles(resp.profile);
		}
		if (resp.links) {
			this.links = new createArray(resp.links, link);
		}
	}
};

SEPABankAccounts.prototype.setId = function(id) {
	this.id = id;
};

SEPABankAccounts.prototype.getId = function() {
	return this.id;
};

SEPABankAccounts.prototype.setnickName = function(nickName) {
	this.nickName = nickName;
};

SEPABankAccounts.prototype.getnickName = function() {
	return this.nickName;
};

SEPABankAccounts.prototype.setmerchantRefNum = function(merchantRefNum) {
	this.merchantRefNum = merchantRefNum;
};

SEPABankAccounts.prototype.getmerchantRefNum = function() {
	return this.merchantRefNum;
};

SEPABankAccounts.prototype.setStatus = function(status) {
	this.status = status;
};

SEPABankAccounts.prototype.getStatus = function() {
	return this.status;
};

SEPABankAccounts.prototype.setstatusReason = function(statusReason) {
	this.statusReason = statusReason;
};

SEPABankAccounts.prototype.getstatusReason = function() {
	return this.statusReason;
};

SEPABankAccounts.prototype.setiban = function(iban) {
	this.iban = iban;
};

SEPABankAccounts.prototype.getiban = function() {
	return this.iban;
};

SEPABankAccounts.prototype.setaccountHolderName = function(accountHolderName) {
	this.accountHolderName = accountHolderName;
};

SEPABankAccounts.prototype.getaccountHolderName = function() {
	return this.accountHolderName;
};

SEPABankAccounts.prototype.setbic = function(bic) {
	this.bic = bic;
};

SEPABankAccounts.prototype.getbic = function() {
	return this.bic;
};

SEPABankAccounts.prototype.setmandates = function(mandates) {
	this.mandates = mandates;
};

SEPABankAccounts.prototype.getmandates = function() {
	return this.mandates;
};

SEPABankAccounts.prototype.setlastDigits = function(lastDigits) {
	this.lastDigits = lastDigits;
};

SEPABankAccounts.prototype.getlastDigits = function() {
	return this.lastDigits;
};

SEPABankAccounts.prototype.setbillingAddressId = function(billingAddressId) {
	this.billingAddressId = billingAddressId;
};

SEPABankAccounts.prototype.getbillingAddressId = function() {
	return this.billingAddressId;
};

SEPABankAccounts.prototype.setpaymentToken = function(paymentToken) {
	this.paymentToken = paymentToken;
};

SEPABankAccounts.prototype.getpaymentToken = function() {
	return this.paymentToken;
};

SEPABankAccounts.prototype.setProfile = function(profile) {
	this.profile = profile;
};

SEPABankAccounts.prototype.getProfile = function() {
	return this.profile;
};

SEPABankAccounts.prototype.setmandates = function(mandates) {
	this.mandates = mandates;
};

SEPABankAccounts.prototype.getmandates = function() {
	return this.mandates;
};

SEPABankAccounts.prototype.setmandateReference = function(mandateReference) {
	this.mandateReference = mandateReference;
};

SEPABankAccounts.prototype.getmandateReference = function() {
	return this.mandateReference;
};

SEPABankAccounts.prototype.setError = function(error) {
	this.error = error;
};

SEPABankAccounts.prototype.getError = function() {
	return this.error;
};

SEPABankAccounts.prototype.setLinks = function(links) {
	this.links = links;
};

SEPABankAccounts.prototype.getLinks = function() {
	return this.links;
};
module.exports = SEPABankAccounts;