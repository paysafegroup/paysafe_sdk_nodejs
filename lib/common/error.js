var link = require("./link");
var fieldErrors = require("./fieldErrors");
var createArray = require("./createArray");
var error = function(resp) {
	if (resp) {
		if (resp.code) {
			this.code = resp.code;
		}
		if (resp.message) {
			this.message = resp.message;
		}
		if (resp.links) {
				this.links = new createArray(resp.links, link);
		}
		if (resp.fieldErrors) {
				this.fieldErrors = new createArray(resp.fieldErrors, fieldErrors);
		}
		if (resp.details) {
			this.details = resp.details;
	}
	}
};

error.prototype.setDetails = function(details) {
	this.details = details;
};

error.prototype.getDetails = function() {
	return this.details;
};

error.prototype.setFieldErrors = function(fieldErrors) {
	this.fieldErrors = fieldErrors;
};

error.prototype.getFieldErrors = function() {
	return this.fieldErrors;
};

error.prototype.setCode = function(code) {
	this.code = code;
};

error.prototype.getCode = function() {
	return this.code;
};

error.prototype.setMessage = function(message) {
	this.message = message;
};

error.prototype.getMessage = function() {
	return this.message;
};

error.prototype.setLinks = function(links) {
	this.links = links;
};

error.prototype.getLinks = function() {
	return this.links;
};

module.exports = error;