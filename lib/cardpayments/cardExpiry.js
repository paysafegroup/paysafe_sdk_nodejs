var cardExpiry = function(resp) {
	if (resp) {
		if (resp.month) {
			this.month = resp.month;
		}
		if (resp.year) {
			this.year = resp.year;
		}
	}
};

cardExpiry.prototype.setMonth = function(month) {
	this.month = month;
};

cardExpiry.prototype.getMonth = function() {
	return this.month;
};

cardExpiry.prototype.setYear = function(year) {
	this.year = year;
};

cardExpiry.prototype.getYear = function() {
	return this.year;
};

module.exports = cardExpiry;