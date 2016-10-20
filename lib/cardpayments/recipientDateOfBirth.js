var recipientDateOfBirth = function(resp) {
	if (resp) {
		if (resp.day) {
			this.day = resp.day;
		}
		if (resp.month) {
			this.month = resp.month;
		}
		if (resp.year) {
			this.year = resp.year;
		}
	}
};

recipientDateOfBirth.prototype.setDay = function(day) {
	this.day = day;
};

recipientDateOfBirth.prototype.getDay = function() {
	return this.day;
};

recipientDateOfBirth.prototype.setMonth = function(month) {
	this.month = month;
};

recipientDateOfBirth.prototype.getMonth = function() {
	return this.month;
};

recipientDateOfBirth.prototype.setYear = function(year) {
	this.year = year;
};

recipientDateOfBirth.prototype.getYear = function() {
	return this.year;
};

module.exports = recipientDateOfBirth;
