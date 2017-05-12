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
var createArray = require("../common/createArray");
var ach_account = require("../customervault/ACHBankAccounts");
var bacs_account = require("../customervault/BACSBankAccounts");
var eft_account = require("../customervault/EFTBankAccounts");
var sepa_account = require("../customervault/SEPABankAccounts");
var profiles = require("../customervault/profiles");
var billing_details = require("../cardpayments/billingDetails");

function purchases(resp) {
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
		if (resp.ach) {
			this.ach = new ach_account(resp.ach);
		}
		if (resp.bacs) {
			this.bacs = new bacs_account(resp.bacs);
		}
		if (resp.sepa) {
			this.sepa = new sepa_account(resp.sepa);
		}
		if (resp.eft) {
			this.eft = new eft_account(resp.eft);
		}
		if (resp.profile) {
			this.profile = new profiles(resp.profile);
		}
		if (resp.billingDetails) {
			this.billingDetails = new billing_details(resp.billingDetails);
		}
		if (resp.customerIp) {
			this.customerIp = resp.customerIp;
		}
		if (resp.dupCheck) {
			this.dupCheck = resp.dupCheck;
		}
		if (resp.txnTime) {
			this.txnTime = resp.txnTime;
		}
		if (resp.currencyCode) {
			this.currencyCode = resp.currencyCode;
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
		if(resp.purchases){
			this.purchases = new createArray(resp.purchases, purchases);
		}
	}
};

purchases.prototype.setId = function(id) {
	this.id = id;
};

purchases.prototype.getId = function() {
	return this.id;
};

purchases.prototype.setmerchantRefNum = function(merchantRefNum) {
	this.merchantRefNum = merchantRefNum;
};

purchases.prototype.getmerchantRefNum = function() {
	return this.merchantRefNum;
};

purchases.prototype.setamount = function(amount) {
	this.amount = amount;
};

purchases.prototype.getamount = function() {
	return this.amount;
};

purchases.prototype.setach = function(ach) {
	this.ach = ach;
};

purchases.prototype.getach = function() {
	return this.ach;
};

purchases.prototype.seteft = function(eft) {
	this.eft = eft;
};

purchases.prototype.geteft = function() {
	return this.eft;
};

purchases.prototype.setbacs = function(bacs) {
	this.bacs = bacs;
};

purchases.prototype.getbacs = function() {
	return this.bacs;
};

purchases.prototype.setsepa = function(sepa) {
	this.sepa = sepa;
};

purchases.prototype.getsepa = function() {
	return this.sepa;
};

purchases.prototype.setprofile = function(profile) {
	this.profile = profile;
};

purchases.prototype.getprofile = function() {
	return this.profile;
};

purchases.prototype.setbillingDetails = function(billingDetails) {
	this.billingDetails = billingDetails;
};

purchases.prototype.getbillingDetails = function() {
	return this.billingDetails;
};

purchases.prototype.setcustomerIp = function(customerIp) {
	this.customerIp = customerIp;
};

purchases.prototype.getcustomerIp = function() {
	return this.customerIp;
};

purchases.prototype.setdupCheck = function(dupCheck) {
	this.dupCheck = dupCheck;
};

purchases.prototype.getdupCheck = function() {
	return this.dupCheck;
};

purchases.prototype.settxnTime = function(txnTime) {
	this.txnTime = txnTime;
};

purchases.prototype.gettxnTime = function() {
	return this.txnTime;
};

purchases.prototype.setcurrencyCode = function(currencyCode) {
	this.currencyCode = currencyCode;
};

purchases.prototype.getcurrencyCode = function() {
	return this.currencyCode;
};

purchases.prototype.setError = function(error) {
	this.error = error;
};

purchases.prototype.getError = function() {
	return this.error;
};

purchases.prototype.setPurchases = function(purchases) {
	this.purchases = purchases;
};

purchases.prototype.getPurchases = function() {
	return this.purchases;
};

purchases.prototype.setStatus = function(status) {
	this.status = status;
};

purchases.prototype.getStatus = function() {
	return this.status;
};

purchases.prototype.setLinks = function(links) {
	this.links = links;
};

purchases.prototype.getLinks = function() {
	return this.links;
};

module.exports = purchases;