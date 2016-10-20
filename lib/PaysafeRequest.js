/**
 * author: Anup W.
 */
var PaysafeRequest = function(apiUrl, method) {
	this._apiUrl = apiUrl;
	this._method = method;
};

PaysafeRequest.prototype.method = function() {
	return this._method;
};

PaysafeRequest.prototype.buildUrl = function(_apiEndPoint) {
	return _apiEndPoint + "/" + this._apiUrl;
};

module.exports = PaysafeRequest;