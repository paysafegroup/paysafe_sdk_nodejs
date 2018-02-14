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
var EFTBankAccounts = function(resp) {
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
		if (resp.transitNumber) {
			this.transitNumber = resp.transitNumber;
		}
		if (resp.institutionId) {
			this.institutionId = resp.institutionId;
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
		/*if (resp.mandates) {
			if (resp.mandates instanceof Array) {
				this.mandates = new createArray(resp.mandates, mandates);
			} else {
				this.mandates = resp.mandates;
			}
		}*/
		if (resp.payMethod) {
			this.payMethod = resp.payMethod;
		}
		if (resp.paymentDescriptor) {
			this.paymentDescriptor = resp.paymentDescriptor;
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
	}
};

EFTBankAccounts.prototype.setId = function(id) {
	this.id = id;
};

EFTBankAccounts.prototype.getId = function() {
	return this.id;
};

EFTBankAccounts.prototype.setnickName = function(nickName) {
	this.nickName = nickName;
};

EFTBankAccounts.prototype.getnickName = function() {
	return this.nickName;
};

EFTBankAccounts.prototype.setmerchantRefNum = function(merchantRefNum) {
	this.merchantRefNum = merchantRefNum;
};

EFTBankAccounts.prototype.getmerchantRefNum = function() {
	return this.merchantRefNum;
};

EFTBankAccounts.prototype.setStatus = function(status) {
	this.status = status;
};

EFTBankAccounts.prototype.getStatus = function() {
	return this.status;
};

EFTBankAccounts.prototype.setstatusReason = function(statusReason) {
	this.statusReason = statusReason;
};

EFTBankAccounts.prototype.getstatusReason = function() {
	return this.statusReason;
};

EFTBankAccounts.prototype.setaccountNumber = function(accountNumber) {
	this.accountNumber = accountNumber;
};

EFTBankAccounts.prototype.getaccountNumber = function() {
	return this.accountNumber;
};

EFTBankAccounts.prototype.setaccountHolderName = function(accountHolderName) {
	this.accountHolderName = accountHolderName;
};

EFTBankAccounts.prototype.getaccountHolderName = function() {
	return this.accountHolderName;
};

EFTBankAccounts.prototype.settransitNumber = function(transitNumber) {
	this.transitNumber = transitNumber;
};

EFTBankAccounts.prototype.gettransitNumber = function() {
	return this.transitNumber;
};

EFTBankAccounts.prototype.setinstitutionId = function(institutionId) {
	this.institutionId = institutionId;
};

EFTBankAccounts.prototype.getinstitutionId = function() {
	return this.institutionId;
};

EFTBankAccounts.prototype.setlastDigits = function(lastDigits) {
	this.lastDigits = lastDigits;
};

EFTBankAccounts.prototype.getlastDigits = function() {
	return this.lastDigits;
};

EFTBankAccounts.prototype.setbillingAddressId = function(billingAddressId) {
	this.billingAddressId = billingAddressId;
};

EFTBankAccounts.prototype.getbillingAddressId = function() {
	return this.billingAddressId;
};

EFTBankAccounts.prototype.setpaymentToken = function(paymentToken) {
	this.paymentToken = paymentToken;
};

EFTBankAccounts.prototype.getpaymentToken = function() {
	return this.paymentToken;
};

EFTBankAccounts.prototype.setProfile = function(profile) {
	this.profile = profile;
};

EFTBankAccounts.prototype.getProfile = function() {
	return this.profile;
};

EFTBankAccounts.prototype.setpayMethod = function(payMethod) {
	this.payMethod = payMethod;
};

EFTBankAccounts.prototype.getpayMethod = function() {
	return this.payMethod;
};

EFTBankAccounts.prototype.setpaymentDescriptor = function(paymentDescriptor) {
	this.paymentDescriptor = paymentDescriptor;
};

EFTBankAccounts.prototype.getpaymentDescriptor = function() {
	return this.paymentDescriptor;
};

EFTBankAccounts.prototype.setError = function(error) {
	this.error = error;
};

EFTBankAccounts.prototype.getError = function() {
	return this.error;
};

module.exports = EFTBankAccounts;
