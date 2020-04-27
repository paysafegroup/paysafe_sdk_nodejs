/**
 * author: Anup W.
 */
var request = require('request');
var error = require("./common/error");

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
	} else if (isHtml(obj)) {
		return obj;
	} else {
		return JSON.parse(obj);
	}
};

var isHtml = function(obj) {
	// Faster than running regex, if obj starts with `<` and ends with `>`, assume it's HTML
	if (obj.charAt(0) === '<' && obj.charAt(obj.length - 1) === '>' && obj.length >= 3) return true;

	// Run the regex
	var quickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/;
	var match = quickExpr.exec(obj);

	return !!(match && match[1]);
};


function paysafeRequest(self, PaysafeRequest, requestObject, responseCallBack) {
	var requestJson = prepareRequestParameter(requestObject);
	var reqHeaders = {
		'Content-Type' : 'application/json; charset=utf-8',
		// 'Content-Length': requestJson.length,
		// 'X_TERMS_VERSION' : '1.1',
		'Authorization' : 'Basic '
			+ prepareApiCredential(self.key, self.password)
	};
	var strRegObject = serializeObject(requestObject);
	var options = {
		headers : reqHeaders,
		uri : PaysafeRequest.buildUrl(self.environment._host),
		method : PaysafeRequest._method,
		body : strRegObject,
		pool : {
			maxSockets : self.environment.maxSockets
		},
		timeout : self.environment.timeout
	};
	//console.log(options);
	request(options, function(error, response, body) {
		//console.log(error);
		//console.log("body request"+body);
		// to get x_terms_version
		//console.log(response.headers)
		if (!error && response.statusCode !== 503) {

			// in case of delete method the response is empty string
			if (body) {
				try {
					body = typeof (body) === "string" ? deSerializeObject(body) : body;
					responseCallBack(null, body);
				} catch (e) {
					responseCallBack(error.generate(e.code, 'Failed to parse body'), null);
				}
			} else {
				var delResp = {
					"status" : response.statusCode
				};
				responseCallBack(null, delResp);
			}
		} else {
			if (error) {
				responseCallBack(error.generate(error.code,
					"Connection error : No internet Connection available : "
					+ error.syscall), null);
			} else {
				responseCallBack(error.generate(response.statusCode, body), null);
			}
		}
	});
}

module.exports = paysafeRequest;
