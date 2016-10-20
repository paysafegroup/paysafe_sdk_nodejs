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
var HEALTH_BEAT_URL = 'threedsecure/monitor';
var URI = 'threedsecure/v1';
var ENROLLMENTCHECKS_PATH = '/enrollmentchecks';
var STANDALONE_PATH = '/standalonecredits';
var SEPERATOR = '/';
var AUTHENTICATION_PATH = '/authentications';
var CARD_PATH = '/cards/';
/**
 * @author Girish.Ahirrao method for initialization of constructor
 *         ThreeDsecureServiceHandler.
 */
var ThreeDsecureServiceHandler = function(PaysafeApiClient) {
	this._PaysafeApiClient = PaysafeApiClient;
};

var prepareURI = function(path, paysafeClient) {
	return URI + "/accounts/" + paysafeClient._accountNumber + path;
};
/**
 * method for monitor ThreeDsecure API
 */
ThreeDsecureServiceHandler.prototype.monitor = function(responseCallBack) {
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
 * method to Submit Enrollment
 * @param enrollmentchecks
 * @returns enrollmentchecks
 */

ThreeDsecureServiceHandler.prototype.submitEnrollment = function(enrollmentchecks,
		responseCallBack) {
	try {
		var clientObj = this._PaysafeApiClient;
		if (typeof (responseCallBack) === "function") {
			var PaysafeReqObj = new PaysafeRequest(prepareURI(ENROLLMENTCHECKS_PATH, clientObj),
					constants.POST);
			clientObj.processRequest(PaysafeReqObj, enrollmentchecks,
					function(error, response) {
						response = response ? new clientObj.Enrollmentchecks(response) : response;
						responseCallBack(error, response);
					});
		} else {
			console.error("Please provide the responseCallBack function "
					+ "in ThreeDsecureServiceHandler : Submit");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};
/**
 * Method to Submit Authentication
 * 
 */
ThreeDsecureServiceHandler.prototype.submitAuthentication = function(authentications, 
		responseCallBack) {
	try {
		
		var clientObj = this._PaysafeApiClient;
		if (typeof (responseCallBack) === "function") {
			if (authentications && authentications.enrollment && authentications.enrollment.id) {
				var enrollment = authentications.enrollment;
				delete authentications.enrollment;
				var PaysafeReqObj = new PaysafeRequest(prepareURI(ENROLLMENTCHECKS_PATH+SEPERATOR+enrollment.getId()+AUTHENTICATION_PATH, clientObj),
						constants.POST);
				clientObj.processRequest(PaysafeReqObj, authentications,
						function(error, response) {
							response = response ? new clientObj.authentication(response) : response;
							responseCallBack(error, response);
						});
			} else {
				throw clientObj.error(400,
						"InvalidRequestException : enrollment id is missing "
								+ "in ThreeDsecureServiceHandler : submit_authentication");
			}
		} else {
			console.error("Please provide the responseCallBack function "
					+ "in ThreeDsecureServiceHandler : lookup");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};
/**
 * Method to Lookup Authentication
 * 
 */
ThreeDsecureServiceHandler.prototype.lookupAuthentication = function(authentications,
		responseCallBack) {
	try {
		var clientObj = this._PaysafeApiClient;
		if (typeof (responseCallBack) === "function") {
			var PaysafeReqObj = new PaysafeRequest(prepareURI(AUTHENTICATION_PATH+SEPERATOR+authentications.getId(), clientObj),
					constants.GET);
			clientObj.processRequest(PaysafeReqObj, authentications,
					function(error, response) {
						response = response ? new clientObj.authentication(response) : response;
						responseCallBack(error, response);
					});
		} else {
			console.error("Please provide the responseCallBack function "
					+ "in ThreeDsecureServiceHandler : lookup");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};
/**
 * Method to Lookup Authentication Enrollment
 * 
 */

ThreeDsecureServiceHandler.prototype.lookupAuthenticationEnrollment = function(authentications,
		responseCallBack) {
	try {
		var clientObj = this._PaysafeApiClient;
		if (typeof (responseCallBack) === "function") {
			var PaysafeReqObj = new PaysafeRequest(prepareURI(AUTHENTICATION_PATH+SEPERATOR+authentications.getId()+"?fields=enrollmentchecks", clientObj),
					constants.GET);
			clientObj.processRequest(PaysafeReqObj, authentications,
					function(error, response) {
						response = response ? new clientObj.authentication(response) : response;
						responseCallBack(error, response);
					});
		} else {
			console.error("Please provide the responseCallBack function "
					+ "in ThreeDsecureServiceHandler : lookup");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};
/**
 * Method to Lookup EnrollmentChecks
 * 
 */

ThreeDsecureServiceHandler.prototype.lookup = function(enrollmentchecks,
		responseCallBack) {
	try {
		var clientObj = this._PaysafeApiClient;
		if (typeof (responseCallBack) === "function") {
			var PaysafeReqObj = new PaysafeRequest(prepareURI(ENROLLMENTCHECKS_PATH+SEPERATOR+enrollmentchecks.getId(), clientObj),
					constants.GET);
			clientObj.processRequest(PaysafeReqObj, enrollmentchecks,
					function(error, response) {
						response = response ? new clientObj.Enrollmentchecks(response) : response;
						responseCallBack(error, response);
					});
		} else {
			console.error("Please provide the responseCallBack function "
					+ "in ThreeDsecureServiceHandler : lookup");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};


module.exports = ThreeDsecureServiceHandler;