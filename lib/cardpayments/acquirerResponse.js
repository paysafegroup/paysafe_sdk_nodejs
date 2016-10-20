var acquirerResponse = function(resp) {
	if (resp) {
		if (resp.code) {
			this.code = resp.code;
		}
		if (resp.responseCode) {
			this.responseCode = resp.responseCode;
		}
		if (resp.avsCode) {
			this.avsCode = resp.avsCode;
		}
		if (resp.balanceResponse) {
			this.balanceResponse = resp.balanceResponse;
		}
	}
};

acquirerResponse.prototype.setBalanceResponse = function(balanceResponse) {
	this.balanceResponse = balanceResponse;
};

acquirerResponse.prototype.getBalanceResponse = function() {
	return this.balanceResponse;
};

acquirerResponse.prototype.setAvsCode = function(avsCode) {
	this.avsCode = avsCode;
};
acquirerResponse.prototype.getAvsCode = function() {
	return this.avsCode;
};

acquirerResponse.prototype.setResponseCode = function(responseCode) {
	this.responseCode = responseCode;
};

acquirerResponse.prototype.getResponseCode = function() {
	return this.responseCode;
};

acquirerResponse.prototype.setCode = function(code) {
	this.code = code;
};
acquirerResponse.prototype.getCode = function() {
	return this.code;
};

module.exports = acquirerResponse;