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
var card = require("../cardpayments/card");
var link = require("../common/link");

var enrollmentchecks = function(resp) {
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
		if (resp.currency) {
			this.currency = resp.currency;
		}
		if (resp.card) {
			if (resp.card instanceof Array) {
				this.card = new createArray(resp.card, card);
			} else {
				this.card = resp.card;
			}
		}
		if (resp.customerIp) {
			this.customerIp = resp.customerIp;
		}
		if (resp.userAgent) {
			this.userAgent = resp.userAgent;
		}
		if (resp.acceptHeader) {
			this.acceptHeader = resp.acceptHeader;
		}
		if (resp.merchantUrl) {
			this.merchantUrl = resp.merchantUrl;
		}
		if (resp.txnTime) {
			this.txnTime = resp.txnTime;
		}
		if (resp.acsURL) {
			this.acsURL = resp.acsURL;
		}
		if (resp.paReq) {
			this.paReq = resp.paReq;
		}
		if (resp.eci) {
			this.eci = resp.eci;
		}
		if (resp.threeDEnrollment) {
			this.threeDEnrollment = resp.threeDEnrollment;
		}
		if (resp.error) {
			this.error = new error(resp.error);
		}
		if (resp.status) {
			this.status = resp.status;
		}
		if (resp.links) {
			this.links = new createArray(resp.links, link);
		}
	}
};

enrollmentchecks.prototype.setId = function(id) {
	this.id = id;
};

enrollmentchecks.prototype.getId = function() {
	return this.id;
};

enrollmentchecks.prototype.setmerchantRefNum = function(merchantRefNum) {
	this.merchantRefNum = merchantRefNum;
};

enrollmentchecks.prototype.getmerchantRefNum = function() {
	return this.merchantRefNum;
};

enrollmentchecks.prototype.setamount = function(amount) {
	this.amount = amount;
};

enrollmentchecks.prototype.getamount = function() {
	return this.amount;
};

enrollmentchecks.prototype.setcurrency = function(currency) {
	this.currency = currency;
};

enrollmentchecks.prototype.getcurrency = function() {
	return this.currency;
};

enrollmentchecks.prototype.setcard = function(card) {
	this.card = card;
};

enrollmentchecks.prototype.getcard = function() {
	return this.card;
};

enrollmentchecks.prototype.setcustomerIp = function(customerIp) {
	this.customerIp = customerIp;
};

enrollmentchecks.prototype.getcustomerIp = function() {
	return this.customerIp;
};

enrollmentchecks.prototype.setuserAgent = function(userAgent) {
	this.userAgent = userAgent;
};

enrollmentchecks.prototype.getuserAgent = function() {
	return this.userAgent;
};

enrollmentchecks.prototype.setacceptHeader = function(acceptHeader) {
	this.acceptHeader = acceptHeader;
};

enrollmentchecks.prototype.getacceptHeader = function() {
	return this.acceptHeader;
};

enrollmentchecks.prototype.setmerchantUrl = function(merchantUrl) {
	this.merchantUrl = merchantUrl;
};

enrollmentchecks.prototype.getmerchantUrl = function() {
	return this.merchantUrl;
};

enrollmentchecks.prototype.settxnTime = function(txnTime) {
	this.txnTime = txnTime;
};

enrollmentchecks.prototype.gettxnTime = function() {
	return this.txnTime;
};

enrollmentchecks.prototype.setacsURL = function(acsURL) {
	this.acsURL = acsURL;
};

enrollmentchecks.prototype.getacsURL = function() {
	return this.acsURL;
};

enrollmentchecks.prototype.setpaReq = function(paReq) {
	this.paReq = paReq;
};

enrollmentchecks.prototype.getpaReq = function() {
	return this.paReq;
};

enrollmentchecks.prototype.seteci = function(eci) {
	this.eci = eci;
};

enrollmentchecks.prototype.geteci = function() {
	return this.eci;
};

enrollmentchecks.prototype.setthreeDEnrollment = function(threeDEnrollment) {
	this.threeDEnrollment = threeDEnrollment;
};

enrollmentchecks.prototype.getthreeDEnrollment = function() {
	return this.threeDEnrollment;
};

enrollmentchecks.prototype.setError = function(error) {
	this.error = error;
};

enrollmentchecks.prototype.getError = function() {
	return this.error;
};

enrollmentchecks.prototype.setStatus = function(status) {
	this.status = status;
};

enrollmentchecks.prototype.getStatus = function() {
	return this.status;
};

enrollmentchecks.prototype.setLinks = function(links) {
	this.links = links;
};

enrollmentchecks.prototype.getLinks = function() {
	return this.links;
};

module.exports = enrollmentchecks;