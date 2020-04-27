var PaysafeMethod = function(apiUrl, method) {
  this._apiUrl = apiUrl;
  this._method = method;
};

PaysafeMethod.prototype.method = function() {
  return this._method;
};

PaysafeMethod.prototype.buildUrl = function(_apiEndPoint) {
  return _apiEndPoint + "/" + this._apiUrl;
};

module.exports = PaysafeMethod;
