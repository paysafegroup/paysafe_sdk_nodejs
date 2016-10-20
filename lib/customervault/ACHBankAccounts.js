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

var ACHBankAccounts = function(resp) {
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
		if (resp.routingNumber) {
			this.routingNumber = resp.routingNumber;
		}
		if (resp.accountType) {
			this.accountType = resp.accountType;
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

ACHBankAccounts.prototype.setId = function(id) {
	this.id = id;
};

ACHBankAccounts.prototype.getId = function() {
	return this.id;
};

ACHBankAccounts.prototype.setnickName = function(nickName) {
	this.nickName = nickName;
};

ACHBankAccounts.prototype.getnickName = function() {
	return this.nickName;
};

ACHBankAccounts.prototype.setmerchantRefNum = function(merchantRefNum) {
	this.merchantRefNum = merchantRefNum;
};

ACHBankAccounts.prototype.getmerchantRefNum = function() {
	return this.merchantRefNum;
};

ACHBankAccounts.prototype.setStatus = function(status) {
	this.status = status;
};

ACHBankAccounts.prototype.getStatus = function() {
	return this.status;
};

ACHBankAccounts.prototype.setstatusReason = function(statusReason) {
	this.statusReason = statusReason;
};

ACHBankAccounts.prototype.getstatusReason = function() {
	return this.statusReason;
};

ACHBankAccounts.prototype.setaccountNumber = function(accountNumber) {
	this.accountNumber = accountNumber;
};

ACHBankAccounts.prototype.getaccountNumber = function() {
	return this.accountNumber;
};

ACHBankAccounts.prototype.setaccountHolderName = function(accountHolderName) {
	this.accountHolderName = accountHolderName;
};

ACHBankAccounts.prototype.getaccountHolderName = function() {
	return this.accountHolderName;
};

ACHBankAccounts.prototype.setroutingNumber = function(routingNumber) {
	this.routingNumber = routingNumber;
};

ACHBankAccounts.prototype.getroutingNumber = function() {
	return this.routingNumber;
};

ACHBankAccounts.prototype.setaccountType = function(accountType) {
	this.accountType = accountType;
};

ACHBankAccounts.prototype.getaccountType = function() {
	return this.accountType;
};

ACHBankAccounts.prototype.setlastDigits = function(lastDigits) {
	this.lastDigits = lastDigits;
};

ACHBankAccounts.prototype.getlastDigits = function() {
	return this.lastDigits;
};

ACHBankAccounts.prototype.setbillingAddressId = function(billingAddressId) {
	this.billingAddressId = billingAddressId;
};

ACHBankAccounts.prototype.getbillingAddressId = function() {
	return this.billingAddressId;
};

ACHBankAccounts.prototype.setpaymentToken = function(paymentToken) {
	this.paymentToken = paymentToken;
};

ACHBankAccounts.prototype.getpaymentToken = function() {
	return this.paymentToken;
};

ACHBankAccounts.prototype.setpayMethod = function(payMethod) {
	this.payMethod = payMethod;
};

ACHBankAccounts.prototype.getpayMethod = function() {
	return this.payMethod;
};

ACHBankAccounts.prototype.setpaymentDescriptor = function(paymentDescriptor) {
	this.paymentDescriptor = paymentDescriptor;
};

ACHBankAccounts.prototype.getpaymentDescriptor = function() {
	return this.paymentDescriptor;
};

ACHBankAccounts.prototype.setProfile = function(profile) {
	this.profile = profile;
};

ACHBankAccounts.prototype.setError = function(error) {
	this.error = error;
};

ACHBankAccounts.prototype.getError = function() {
	return this.error;
};

module.exports = ACHBankAccounts;