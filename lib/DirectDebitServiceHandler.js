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

var PaysafeRequest = require("./PaysafeRequest");
var constants = require("./Constants.js");
var HEALTH_BEAT_URL = 'directdebit/monitor';
var URI = 'directdebit/v1';
var PURCHASE_PATH = '/purchases';
var STANDALONE_PATH = '/standalonecredits';
var SEPERATOR = '/';
var ADDRESS_PATH = '/addresses/';
var CARD_PATH = '/cards/';
var ACH_BANK_ACC_PATH = '/achbankaccounts';
var BACS_BANK_ACC_PATH = '/bacsbankaccounts';
var SEPA_BANK_ACC_PATH = '/sepabankaccounts';
var EFT_BANK_ACC_PATH = '/eftbankaccounts';
/**
 * @author Girish.Ahirrao method for initialization of constructor
 *         DirectDebitServiceHandler.
 */

var SEARCHMERACHANTREFERENCE = {
		"PURCHASES" : "/purchases",
		"STANDALONECREDITS" : "/standalonecredits"
	};

var capitaliseFirstLetter = function(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

var DirectDebitServiceHandler = function(PaysafeApiClient) {
	this._PaysafeApiClient = PaysafeApiClient;
};

var prepareURI = function(path, paysafeClient) {
	return URI + "/accounts/" + paysafeClient._accountNumber + path;
};
/**
 * Method to monitor Direct Debit api
 */
DirectDebitServiceHandler.prototype.monitor = function(responseCallBack) {
	try {
		var clientObj = this._PaysafeApiClient;
		var requestObj = new PaysafeRequest(HEALTH_BEAT_URL, constants.GET);
		clientObj.processRequest(requestObj, null, responseCallBack);
	} catch (err) {
		if (typeof (responseCallBack) === "function") {
			responseCallBack(err, null);
		}
	}
};

/**
 * Method to Submit Purchase
 * 
 */

DirectDebitServiceHandler.prototype.submitPurchase = function(purchase,
		responseCallBack) {
	try {
		
		var clientObj = this._PaysafeApiClient;
		if (typeof (responseCallBack) === "function") {
			var PaysafeReqObj = new PaysafeRequest(prepareURI(PURCHASE_PATH, clientObj),
					constants.POST);
			clientObj.processRequest(PaysafeReqObj, purchase,
					function(error, response) {
						response = response ? new clientObj.Purchases(response) : response;
						responseCallBack(error, response);
					});
		} else {
			console.error("Please provide the responseCallBack function "
					+ "in DirectDebitServiceHandler : SubmitPurchase");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};

/**
 * Method to Lookup Purchase
 * 
 */

DirectDebitServiceHandler.prototype.getPurchase = function(purchase,
		responseCallBack) {
	try {
		var clientObj = this._PaysafeApiClient;
		if (typeof (responseCallBack) === "function") {
			var PaysafeReqObj = new PaysafeRequest(prepareURI(PURCHASE_PATH+SEPERATOR+purchase.id, clientObj),
					constants.GET);
			clientObj.processRequest(PaysafeReqObj, purchase,
					function(error, response) {
						response = response ? new clientObj.Purchases(response) : response;
						responseCallBack(error, response);
					});
		} else {
			console.error("Please provide the responseCallBack function "
					+ "in DirectDebitServiceHandler : getPurchase");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};


/**
 * Method to Lookup StandaloneCredits
 * 
 */


DirectDebitServiceHandler.prototype.getStandalone = function(standalonecredits,
		responseCallBack) {
	try {
		var clientObj = this._PaysafeApiClient;
		if (typeof (responseCallBack) === "function") {
			var PaysafeReqObj = new PaysafeRequest(prepareURI(STANDALONE_PATH+SEPERATOR+standalonecredits.id, clientObj),
					constants.GET);
			clientObj.processRequest(PaysafeReqObj, standalonecredits,
					function(error, response) {
						response = response ? new clientObj.Standalonecredits(response) : response;
						responseCallBack(error, response);
					});
		} else {
			console.error("Please provide the responseCallBack function "
					+ "in DirectDebitServiceHandler : getPurchase");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};

/**
 * Method to Submit StandaloneCredits
 * 
 */

DirectDebitServiceHandler.prototype.submitStandalone = function(standalonecredits,
		responseCallBack) {
	try {
		
		var clientObj = this._PaysafeApiClient;
		if (typeof (responseCallBack) === "function") {
			var PaysafeReqObj = new PaysafeRequest(prepareURI(STANDALONE_PATH, clientObj),
					constants.POST);
			clientObj.processRequest(PaysafeReqObj, standalonecredits,
					function(error, response) {
						response = response ? new clientObj.Standalonecredits(response) : response;
						responseCallBack(error, response);
					});
		} else {
			console.error("Please provide the responseCallBack function "
					+ "in DirectDebitServiceHandler : SubmitPurchase");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};

/**
 * Method to cancel Purchases
 * 
 */

DirectDebitServiceHandler.prototype.cancelPurchase = function(purchase,
		responseCallBack) {
	try {
		var clientObj = this._PaysafeApiClient;
		if (typeof (responseCallBack) === "function") {
			var PaysafeReqObj = new PaysafeRequest(prepareURI(PURCHASE_PATH+SEPERATOR+purchase.id, clientObj),
					constants.PUT);
			clientObj.processRequest(PaysafeReqObj, purchase,
					function(error, response) {
						response = response ? new clientObj.Purchases(response) : response;
						responseCallBack(error, response);
					});
		} else {
			console.error("Please provide the responseCallBack function "
					+ "in CustomerServiceHandler : processACHpurchase");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};
/**
 * Method to cancel StandaloneCredits
 * 
 */
DirectDebitServiceHandler.prototype.cancelStandaloneCredits = function(standalonecredits,
		responseCallBack) {
	try {
		var clientObj = this._PaysafeApiClient;
		if (typeof (responseCallBack) === "function") {
			var PaysafeReqObj = new PaysafeRequest(prepareURI(STANDALONE_PATH+SEPERATOR+standalonecredits.id, clientObj),
					constants.PUT);
			clientObj.processRequest(PaysafeReqObj, standalonecredits,
					function(error, response) {
						response = response ? new clientObj.Standalonecredits(response) : response;
						responseCallBack(error, response);
					});
		} else {
			console.error("Please provide the responseCallBack function "
					+ "in CustomerServiceHandler : processACHpurchase");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};

DirectDebitServiceHandler.prototype.searchMerchantRefCommon = function(merchObj,
		pagination) {
	var toInclude = "";
	if (merchObj && merchObj.merchantRefNum) {
		toInclude = "merchantRefNum=" + merchObj.merchantRefNum;
	}
	if (pagination) {
		if (pagination.limit) {
			toInclude += "&limit=" + pagination.limit;
		}
		if (pagination.offset) {
			toInclude += "&offset=" + pagination.offset;
		}
		if (pagination.startDate) {
			toInclude += "&startDate=" + pagination.startDate;
		}
		if (pagination.endDate) {
			toInclude += "&endDate=" + pagination.endDate;
		}
	}
	return toInclude;
};

/**
 * Method for search Purchases, StandAloneCredits using merchant ref number. classObj.constructor.name : get
 *         the name of cunstructor obj : with name of class with initial letter
 *         capital
 */
DirectDebitServiceHandler.prototype.searchByMerchantRef = function(classObj,
		pagination, responseCallBack) {
	try {
		var clientObj = this._PaysafeApiClient;
		var className = capitaliseFirstLetter(classObj.constructor.name);
		if (typeof (responseCallBack) === "function") {
			if (classObj && classObj.merchantRefNum) {
				var upperClassName = SEARCHMERACHANTREFERENCE[className.toUpperCase()];
				if (upperClassName) {
					var toInclude = this.searchMerchantRefCommon(classObj, pagination);
					var requestObj = new PaysafeRequest(prepareURI(upperClassName + "?"
							+ toInclude, clientObj), constants.GET);
					clientObj.processRequest(requestObj, null,
							function(error, response) {
								response = response ? new clientObj[className](response)
										: response;
								responseCallBack(error, response);
							});
				} else {
					throw clientObj.error(400, "InvalidClassException : "
							+ "Please provide valid class name for search");
				}
			} else {
				throw clientObj.error(400, "InvalidRequestException : "
						+ "Please provide merchant ref number for search");
			}
		} else {
			console.error("Please provide the responseCallBack function in"
					+ " CardServiceHandler : searchByMerchantRef");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};

module.exports = DirectDebitServiceHandler;