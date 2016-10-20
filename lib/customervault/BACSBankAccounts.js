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
var BACSBankAccounts = function(resp) {
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
		if (resp.accountNumber) {
			this.accountNumber = resp.accountNumber;
		}
		if (resp.accountHolderName) {
			this.accountHolderName = resp.accountHolderName;
		}
		if (resp.sortCode) {
			this.sortCode = resp.sortCode;
		}
		if (resp.billingAddressId) {
			this.billingAddressId = resp.billingAddressId;
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

BACSBankAccounts.prototype.setId = function(id) {
	this.id = id;
};

BACSBankAccounts.prototype.getId = function() {
	return this.id;
};

BACSBankAccounts.prototype.setnickName = function(nickName) {
	this.nickName = nickName;
};

BACSBankAccounts.prototype.getnickName = function() {
	return this.nickName;
};

BACSBankAccounts.prototype.setmerchantRefNum = function(merchantRefNum) {
	this.merchantRefNum = merchantRefNum;
};

BACSBankAccounts.prototype.getmerchantRefNum = function() {
	return this.merchantRefNum;
};

BACSBankAccounts.prototype.setStatus = function(status) {
	this.status = status;
};

BACSBankAccounts.prototype.getStatus = function() {
	return this.status;
};

BACSBankAccounts.prototype.setstatusReason = function(statusReason) {
	this.statusReason = statusReason;
};

BACSBankAccounts.prototype.getstatusReason = function() {
	return this.statusReason;
};

BACSBankAccounts.prototype.setaccountNumber = function(accountNumber) {
	this.accountNumber = accountNumber;
};

BACSBankAccounts.prototype.getaccountNumber = function() {
	return this.accountNumber;
};

BACSBankAccounts.prototype.setaccountHolderName = function(accountHolderName) {
	this.accountHolderName = accountHolderName;
};

BACSBankAccounts.prototype.getaccountHolderName = function() {
	return this.accountHolderName;
};

BACSBankAccounts.prototype.setsortCode = function(sortCode) {
	this.sortCode = sortCode;
};

BACSBankAccounts.prototype.getsortCode = function() {
	return this.sortCode;
};

BACSBankAccounts.prototype.setmandates = function(mandates) {
	this.mandates = mandates;
};

BACSBankAccounts.prototype.getmandates = function() {
	return this.mandates;
};

BACSBankAccounts.prototype.setlastDigits = function(lastDigits) {
	this.lastDigits = lastDigits;
};

BACSBankAccounts.prototype.getlastDigits = function() {
	return this.lastDigits;
};

BACSBankAccounts.prototype.setpaymentToken = function(paymentToken) {
	this.paymentToken = paymentToken;
};

BACSBankAccounts.prototype.getpaymentToken = function() {
	return this.paymentToken;
};

BACSBankAccounts.prototype.setmandateReference = function(mandateReference) {
	this.mandateReference = mandateReference;
};

BACSBankAccounts.prototype.getmandateReference = function() {
	return this.mandateReference;
};

BACSBankAccounts.prototype.setProfile = function(profile) {
	this.profile = profile;
};

BACSBankAccounts.prototype.getProfile = function() {
	return this.profile;
};

BACSBankAccounts.prototype.setbillingAddressId = function(billingAddressId) {
	this.billingAddressId = billingAddressId;
};

BACSBankAccounts.prototype.getbillingAddressId = function() {
	return this.billingAddressId;
};

BACSBankAccounts.prototype.setError = function(error) {
	this.error = error;
};

BACSBankAccounts.prototype.getError = function() {
	return this.error;
};

BACSBankAccounts.prototype.setLinks = function(links) {
	this.links = links;
};

BACSBankAccounts.prototype.getLinks = function() {
	return this.links;
};

module.exports = BACSBankAccounts;