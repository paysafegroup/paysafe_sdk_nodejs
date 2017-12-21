
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
/**
 * author: Anup W.
 */
var cardServiceHandler = require("./CardServiceHandler");
var CustomerServiceHandler = require("./CustomerServiceHandler");
var DirectDebitServiceHandler = require("./DirectDebitServiceHandler");
var ThreeDsecureServiceHandler = require("./ThreeDsecureServiceHandler");
var Environment = require("../bin/Environment");
var errorClass = require("./common/error");
var request = require('request');

var PaysafeApiClient = function(apiKey, apiPassword, environment, accountNumber) {
	try {
		var env = Environment[environment];
		if (apiKey && apiPassword && environment && accountNumber && env) {
			this._apiKey = apiKey;
			this._apiPassword = apiPassword;
			this._environment = Environment[environment];
			this._accountNumber = accountNumber;
			this.Card = require("./cardpayments/card");
			this.AccordD = require("./cardpayments/accordD");
			this.Authentication = require("./cardpayments/authentication");
			this.Authorization = require("./cardpayments/authorization");
			this.AuthorizationReversal = require("./cardpayments/authorizationreversal");
			this.BillingDetails = require("./cardpayments/billingDetails");
			this.CardExpiry = require("./cardpayments/cardExpiry");
			this.MasterPass = require("./cardpayments/masterPass");
			this.MerchantDescriptor = require("./cardpayments/merchantDescriptor");
			this.Pagination = require("./cardpayments/pagination");
			this.RecipientDateOfBirth = require("./cardpayments/recipientDateOfBirth");
			this.Refund = require("./cardpayments/refund");
			this.Settlements = require("./cardpayments/settlements");
			this.ShippingDetails = require("./cardpayments/shippingDetails");
			this.Verification = require("./cardpayments/verification");
			this.VisaAdditionalAuthData = require("./cardpayments/visaAdditionalAuthData");
			this.Address = require("./customervault/addresses");
			this.Dateofbirth = require("./customervault/dateofbirth");
			this.Profiles = require("./customervault/profiles");
			this.ACHBankAccounts = require("./customervault/ACHBankAccounts");
			this.BACSBankAccounts = require("./customervault/BACSBankAccounts");
			this.EFTBankAccounts = require("./customervault/EFTBankAccounts");
			this.SEPABankAccounts = require("./customervault/SEPABankAccounts");
			this.Mandates = require("./customervault/mandates");
			this.Purchases = require("./directdebit/purchases");
			this.Standalonecredits = require("./directdebit/standalonecredits");
			this.Enrollmentchecks = require("./threedsecure/enrollmentchecks");
			this.authentication = require("./threedsecure/authentications");
			this.error = function(code, message) {
				return (new errorClass({
					"code" : code,
					"message" : message,
				}));
			};
		} else if (!apiKey) {
			throw "Please provide API key!";
		} else if (!apiPassword) {
			throw "Please provide API password!";
		} else if (!environment) {
			throw "Please provide Environment string i.e 'TEST' or 'LIVE'!";
		} else if (!Environment[environment]) {
			throw "Environment string must be 'TEST' or 'LIVE'!";
		} else if (!accountNumber) {
			throw "Please provide Merchant Account Number!";
		}
	} catch (error) {
		console.error(error);
	}
};

var serializeObject = function(obj) {
	if (obj === null) {
		return "";
	} else {
		return JSON.stringify(obj);
	}
};

var deSerializeObject = function(obj) {
	if (obj === null) {
		return "";
	} else {
		return JSON.parse(obj);
	}
};

var prepareApiCredential = function(apiKey, apiPassword) {
	var apiCredential = apiKey + ":" + apiPassword;
	var apiCredBuffer = new Buffer(apiCredential);
	return apiCredBuffer.toString("Base64");
};

var prepareRequestParameter = function(requestObject) {
	if (requestObject !== null) {
		return serializeObject(requestObject);
	} else {
		return '';
	}
};

PaysafeApiClient.prototype.cardServiceHandler = function(paysafeApiClient) {
	if (!this.cardService)
	{
		this.cardService = new cardServiceHandler(paysafeApiClient);
	}
	return this.cardService;
};

PaysafeApiClient.prototype.CustomerServiceHandler = function(paysafeApiClient) {
	if (!this.customerService)
	{
		this.customerService = new CustomerServiceHandler(paysafeApiClient);
	}
	return this.customerService;
};

PaysafeApiClient.prototype.DirectDebitServiceHandler = function(paysafeApiClient) {
	if (!this.directDebitService)
	{
		this.directDebitService = new DirectDebitServiceHandler(paysafeApiClient);
	}
	return this.directDebitService;
};

PaysafeApiClient.prototype.ThreeDsecureServiceHandler = function(paysafeApiClient) {
	if (!this.threeDsecureService)
	{
		this.threeDsecureService = new ThreeDsecureServiceHandler(paysafeApiClient);
	}
	return this.threeDsecureService;
};

PaysafeApiClient.prototype.processRequest = function(PaysafeRequest,
		requestObject, responseCallBack) {
	var self = this;
	var requestJson = prepareRequestParameter(requestObject);
	var reqHeaders = {
		'Content-Type' : 'application/json; charset=utf-8',
		// 'Content-Length': requestJson.length,
		'Authorization' : 'Basic '
				+ prepareApiCredential(self._apiKey, self._apiPassword)
	};
	var strRegObject = serializeObject(requestObject);
	var options = {
		headers : reqHeaders,
		uri : PaysafeRequest.buildUrl(self._environment._host),
		method : PaysafeRequest._method,
		body : strRegObject,
		pool : {
			maxSockets : self._environment.maxSockets
		},
		timeout : self._environment.timeout
	};
	//console.log(options);
	request(options, function(error, response, body) {
		//console.log(error);
		//console.log("body request"+body);
		if (!error && response.statusCode !== 503) {
			// in case of delete method the response is empty string
			if (body) {
				try {
				   body = typeof (body) === "string" ? deSerializeObject(body) : body;
				   responseCallBack(null, body);
				} catch (e) {
				   responseCallBack(self.error(e.code, 'Failed to parse body'), null);
				}
			} else {
				var delResp = {
					"status" : response.statusCode
				};
				responseCallBack(null, delResp);
			}
		} else {
			if (error) {
				responseCallBack(self.error(error.code,
						"Connection error : No internet Connection available : "
								+ error.syscall), null);
			} else {
				responseCallBack(self.error(response.statusCode, body), null);
			}
		}
	});
};

PaysafeApiClient.prototype.updateConfig = function(host, maxSockets, timeout) {
	var self = this;
	self._environment = Environment.createEnv(host, maxSockets, timeout);
};

module.exports = PaysafeApiClient;
