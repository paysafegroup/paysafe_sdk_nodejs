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
var profiles = require("./profiles");
var bacsbankaccounts = require("./BACSBankAccounts");
//var sepabankaccounts = require("./SEPABankAccounts");
var mandates = function(resp) {
	if (resp) {
		
		if (resp.id) {
			this.id = resp.id;
		}
		if (resp.reference) {
			this.reference = resp.reference;
		}
		if (resp.bankAccountId) {
			this.bankAccountId = resp.bankAccountId;
		}
		if (resp.statusChangeDate) {
			this.statusChangeDate = resp.statusChangeDate;
		}
		if (resp.statusReasonCode) {
			this.statusReasonCode = resp.statusReasonCode;
		}
		if (resp.statusReason) {
			this.statusReason = resp.statusReason;
		}
		if (resp.paymentToken) {
			this.paymentToken = resp.paymentToken;
		}
		if (resp.error) {
			this.error = new error(resp.error);
		}
		if (resp.status) {
			this.status = resp.status;
		}	
		if (resp.profiles) {
			this.profiles = new profiles(resp.profiles);
		}
		if (resp.sepabankaccounts) {
			this.sepabankaccounts = new sepabankaccounts(resp.sepabankaccounts);
		}
		if (resp.bacsbankaccounts) {
			this.bacsbankaccounts = new bacsbankaccounts(resp.bacsbankaccounts);
		}
	}
};

mandates.prototype.setId = function(id) {
	this.id = id;
};

mandates.prototype.getId = function() {
	return this.id;
};

mandates.prototype.setreference = function(reference) {
	this.reference = reference;
};

mandates.prototype.getreference = function() {
	return this.reference;
};

mandates.prototype.setbankAccountId = function(bankAccountId) {
	this.bankAccountId = bankAccountId;
};

mandates.prototype.getbankAccountId = function() {
	return this.bankAccountId;
};

mandates.prototype.setStatus = function(status) {
	this.status = status;
};

mandates.prototype.getStatus = function() {
	return this.status;
};

mandates.prototype.setstatusChangeDate = function(statusChangeDate) {
	this.statusChangeDate = statusChangeDate;
};

mandates.prototype.getstatusChangeDate = function() {
	return this.statusChangeDate;
};

mandates.prototype.setstatusReasonCode = function(statusReasonCode) {
	this.statusReasonCode = statusReasonCode;
};

mandates.prototype.getstatusReasonCode = function() {
	return this.statusReasonCode;
};

mandates.prototype.setstatusReason = function(statusReason) {
	this.statusReason = statusReason;
};

mandates.prototype.getstatusReason = function() {
	return this.statusReason;
};

mandates.prototype.setpaymentToken = function(paymentToken) {
	this.paymentToken = paymentToken;
};

mandates.prototype.getpaymentToken = function() {
	return this.paymentToken;
};

mandates.prototype.setError = function(error) {
	this.error = error;
};

mandates.prototype.getError = function() {
	return this.error;
};
mandates.prototype.setprofiles = function(profiles) {
	this.profiles = profiles;
};

mandates.prototype.getprofiles = function() {
	return this.profiles;
};

mandates.prototype.setsepabankaccounts = function(sepabankaccounts) {
	this.sepabankaccounts = sepabankaccounts;
};

mandates.prototype.getsepabankaccounts = function() {
	return this.sepabankaccounts;
};

mandates.prototype.setbacsbankaccounts = function(bacsbankaccounts) {
	this.bacsbankaccounts = bacsbankaccounts;
};

mandates.prototype.getbacsbankaccounts = function() {
	return this.bacsbankaccounts;
};


module.exports = mandates;