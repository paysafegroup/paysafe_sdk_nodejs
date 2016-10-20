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
var link = require("../common/link");
var enrollment = require("./enrollmentchecks");
var createArray = require("../common/createArray");

var authentications = function(resp) {
	if (resp) {
		
		if (resp.id) {
			this.id = resp.id;
		}
		if (resp.merchantRefNum) {
			this.merchantRefNum = resp.merchantRefNum;
		}
		if (resp.paRes) {
			this.paRes = resp.paRes;
		}
		if (resp.customerIp) {
			this.customerIp = resp.customerIp;
		}
		if (resp.txnTime) {
			this.txnTime = resp.txnTime;
		}
		if (resp.threeDResult) {
			this.threeDResult = resp.threeDResult;
		}
		if (resp.signatureStatus) {
			this.signatureStatus = resp.signatureStatus;
		}
		if (resp.eci) {
			this.eci = resp.eci;
		}
		if (resp.cavv) {
			this.cavv = resp.cavv;
		}
		if (resp.xid) {
			this.xid = resp.xid;
		}
		if (resp.error) {
			this.error = new error(resp.error);
		}
		if (resp.status) {
			this.status = resp.status;
		}
		if (resp.enrollmentchecks) {
			if (resp.enrollmentchecks instanceof Array) {
				this.enrollmentchecks = new createArray(resp.enrollmentchecks, enrollment);
			} else {
				this.enrollmentchecks = resp.enrollmentchecks;
			}
		}
		
		if (resp.links) {
			this.links = new createArray(resp.links, link);
		}
	}
};

authentications.prototype.setId = function(id) {
	this.id = id;
};

authentications.prototype.getId = function() {
	return this.id;
};

authentications.prototype.setmerchantRefNum = function(merchantRefNum) {
	this.merchantRefNum = merchantRefNum;
};

authentications.prototype.getmerchantRefNum = function() {
	return this.merchantRefNum;
};

authentications.prototype.setpaRes = function(paRes) {
	this.paRes = paRes;
};

authentications.prototype.getpaRes = function() {
	return this.paRes;
};

authentications.prototype.setcustomerIp = function(customerIp) {
	this.customerIp = customerIp;
};

authentications.prototype.getcustomerIp = function() {
	return this.customerIp;
};

authentications.prototype.settxnTime = function(txnTime) {
	this.txnTime = txnTime;
};

authentications.prototype.gettxnTime = function() {
	return this.txnTime;
};

authentications.prototype.setthreeDResult = function(threeDResult) {
	this.threeDResult = threeDResult;
};

authentications.prototype.getthreeDResult = function() {
	return this.threeDResult;
};

authentications.prototype.setsignatureStatus = function(signatureStatus) {
	this.signatureStatus = signatureStatus;
};

authentications.prototype.getsignatureStatus = function() {
	return this.signatureStatus;
};

authentications.prototype.seteci = function(eci) {
	this.eci = eci;
};

authentications.prototype.geteci = function() {
	return this.eci;
};

authentications.prototype.setcavv = function(cavv) {
	this.cavv = cavv;
};

authentications.prototype.getcavv = function() {
	return this.cavv;
};

authentications.prototype.setxid = function(xid) {
	this.xid = xid;
};

authentications.prototype.getxid = function() {
	return this.xid;
};

authentications.prototype.setError = function(error) {
	this.error = error;
};

authentications.prototype.getError = function() {
	return this.error;
};

authentications.prototype.setStatus = function(status) {
	this.status = status;
};

authentications.prototype.getStatus = function() {
	return this.status;
};

authentications.prototype.setenrollment = function(enrollmentchecks) {
	this.enrollment = enrollmentchecks;
};

authentications.prototype.getenrollment = function() {
	return this.enrollmentchecks;
};

authentications.prototype.setLinks = function(links) {
	this.links = links;
};

authentications.prototype.getLinks = function() {
	return this.links;
};

module.exports = authentications;