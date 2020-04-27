
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

var MerchantServiceHandler = require("./MerchantServiceHandler");

var Paysafe = function(apiKey, apiPassword, environment, accountNumber) {
	try {
		var env = Environment[environment];
		if (apiKey && apiPassword && environment && accountNumber && env) {
			this._api = {
				key: apiKey,
				password: apiPassword,
				environment: Environment[environment],
				accountNumber: accountNumber
			}

			// Models
			this.Merchant = require("./account/merchant");
			this.MerchantAccount = require("./account/merchantAccount");
			this.MerchantACHBankAccounts = require("./account/ACHBankAccounts");
			this.MerchantBACSBankAccounts = require("./account/BACSBankAccounts");
			this.MerchantEFTBankAccounts = require("./account/EFTBankAccounts");
			this.MerchantSEPABankAccounts = require("./account/SEPABankAccounts");
			this.MicroDeposit = require("./account/microdeposit");
			this.User = require("./account/user");
			this.RecoveryQuestion = require("./account/recoveryQuestion");
			this.BusinessOwner = require("./account/businessOwner");
			this.Terms = require("./account/terms");
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

			// Services
			this.merchantService = new MerchantServiceHandler(this._api)
			this.cardService = new cardServiceHandler(this._api)
			this.customerService = new CustomerServiceHandler(this._api)
			this.directDebitService = new DirectDebitServiceHandler(this._api)
			this.threeDsecureService = new ThreeDsecureServiceHandler(this._api)

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

Paysafe.prototype.updateConfig = function(host, maxSockets, timeout) {
	var self = this;
	self._environment = Environment.createEnv(host, maxSockets, timeout);
};

module.exports = Paysafe;
