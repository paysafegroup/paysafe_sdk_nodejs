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

var MerchantACHBankAccounts = function(resp) {
	if (resp) {

		if (resp.id) {
			this.id = resp.id;
		}
		if (resp.type) {
			this.type = resp.type;
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
		if (resp.routingNumber) {
			this.routingNumber = resp.routingNumber;
		}
		if (resp.error) {
			this.error = new error(resp.error);
		}
	}
};

MerchantACHBankAccounts.prototype.setId = function(id) {
	this.id = id;
};

MerchantACHBankAccounts.prototype.getId = function() {
	return this.id;
};

MerchantACHBankAccounts.prototype.setType = function(type) {
	this.type = type;
};

MerchantACHBankAccounts.prototype.getType = function() {
	return this.type;
};

MerchantACHBankAccounts.prototype.setStatus = function(status) {
	this.status = status;
};

MerchantACHBankAccounts.prototype.getStatus = function() {
	return this.status;
};

MerchantACHBankAccounts.prototype.setStatusReason = function(statusReason) {
	this.statusReason = statusReason;
};

MerchantACHBankAccounts.prototype.getStatusReason = function() {
	return this.statusReason;
};

MerchantACHBankAccounts.prototype.setAccountNumber = function(accountNumber) {
	this.accountNumber = accountNumber;
};

MerchantACHBankAccounts.prototype.getAccountNumber = function() {
	return this.accountNumber;
};

MerchantACHBankAccounts.prototype.setRoutingNumber = function(routingNumber) {
	this.routingNumber = routingNumber;
};

MerchantACHBankAccounts.prototype.getRoutingNumber = function() {
	return this.routingNumber;
};

MerchantACHBankAccounts.prototype.setError = function(error) {
	this.error = error;
};

MerchantACHBankAccounts.prototype.getError = function() {
	return this.error;
};

module.exports = MerchantACHBankAccounts;
