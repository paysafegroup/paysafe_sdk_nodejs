var fieldErrors = function(resp) {
	if (resp) {
		if (resp.field) {
			this.field = resp.field;
		}
		if (resp.error) {
			this.error = resp.error;
		}
	}
};

fieldErrors.prototype.setField = function(field) {
	this.field = field;
};

fieldErrors.prototype.getField = function() {
	return this.field;
};

fieldErrors.prototype.setError = function(error) {
	this.error = error;
};

fieldErrors.prototype.getError = function() {
	return this.error;
};

module.exports = fieldErrors;