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
var ach_account = require("../customervault/ACHBankAccounts");
var createArray = require("../common/createArray");
var bacs_account = require("../customervault/BACSBankAccounts");
var eft_account = require("../customervault/EFTBankAccounts");
var sepa_account = require("../customervault/SEPABankAccounts");
var profiles = require("../customervault/profiles");
var billing_details = require("../cardpayments/billingDetails");
var shipping_Details = require("../cardpayments/shippingDetails");

function standalonecredits(resp) {
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
		if (resp.shippingDetails) {
			this.shippingDetails = new shipping_Details(resp.shippingDetails);
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
		if(resp.standaloneCredits){
			this.standaloneCredits = new createArray(resp.standaloneCredits, standalonecredits);
		}
	}
};

standalonecredits.prototype.setId = function(id) {
	this.id = id;
};

standalonecredits.prototype.getId = function() {
	return this.id;
};

standalonecredits.prototype.setmerchantRefNum = function(merchantRefNum) {
	this.merchantRefNum = merchantRefNum;
};

standalonecredits.prototype.getmerchantRefNum = function() {
	return this.merchantRefNum;
};

standalonecredits.prototype.setamount = function(amount) {
	this.amount = amount;
};

standalonecredits.prototype.getamount = function() {
	return this.amount;
};

standalonecredits.prototype.setach = function(ach) {
	this.ach = ach;
};

standalonecredits.prototype.getach = function() {
	return this.ach;
};

standalonecredits.prototype.seteft = function(eft) {
	this.eft = eft;
};

standalonecredits.prototype.geteft = function() {
	return this.eft;
};

standalonecredits.prototype.setbacs = function(bacs) {
	this.bacs = bacs;
};

standalonecredits.prototype.getbacs = function() {
	return this.bacs;
};

standalonecredits.prototype.setsepa = function(sepa) {
	this.sepa = sepa;
};

standalonecredits.prototype.getsepa = function() {
	return this.sepa;
};

standalonecredits.prototype.setprofile = function(profile) {
	this.profile = profile;
};

standalonecredits.prototype.getprofile = function() {
	return this.profile;
};

standalonecredits.prototype.setbillingDetails = function(billingDetails) {
	this.billingDetails = billingDetails;
};

standalonecredits.prototype.getbillingDetails = function() {
	return this.billingDetails;
};

standalonecredits.prototype.setshippingDetails = function(shippingDetails) {
	this.shippingDetails = shippingDetails;
};

standalonecredits.prototype.getshippingDetails = function() {
	return this.shippingDetails;
};

standalonecredits.prototype.setcustomerIp = function(customerIp) {
	this.customerIp = customerIp;
};

standalonecredits.prototype.getcustomerIp = function() {
	return this.customerIp;
};

standalonecredits.prototype.setdupCheck = function(dupCheck) {
	this.dupCheck = dupCheck;
};

standalonecredits.prototype.getdupCheck = function() {
	return this.dupCheck;
};

standalonecredits.prototype.settxnTime = function(txnTime) {
	this.txnTime = txnTime;
};

standalonecredits.prototype.gettxnTime = function() {
	return this.txnTime;
};

standalonecredits.prototype.setcurrencyCode = function(currencyCode) {
	this.currencyCode = currencyCode;
};

standalonecredits.prototype.getcurrencyCode = function() {
	return this.currencyCode;
};

standalonecredits.prototype.setError = function(error) {
	this.error = error;
};

standalonecredits.prototype.getError = function() {
	return this.error;
};

standalonecredits.prototype.setStandalonecredits = function(standaloneCredits) {
	this.standaloneCredits = standaloneCredits;
};

standalonecredits.prototype.getStandalonecredits = function() {
	return this.standaloneCredits;
};

standalonecredits.prototype.setLinks = function(links) {
	this.links = links;
};

standalonecredits.prototype.getLinks = function() {
	return this.links;
};

standalonecredits.prototype.setStatus = function(status) {
	this.status = status;
};

standalonecredits.prototype.getStatus = function() {
	return this.status;
};

module.exports = standalonecredits;