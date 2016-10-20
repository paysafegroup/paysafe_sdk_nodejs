var dateofbirth = function(resp) {
	if (resp) {
		if (resp.year) {
			this.year = resp.year;
		}
		if (resp.month) {
			this.month = resp.month;
		}
		if (resp.day) {
			this.day = resp.day;
		}
	}
};

dateofbirth.prototype.setYear = function(year) {
	this.year = year;
};
dateofbirth.prototype.getYear = function() {
	return this.year;
};

dateofbirth.prototype.setMonth = function(month) {
	this.month = month;
};

dateofbirth.prototype.getMonth = function() {
	return this.month;
};

dateofbirth.prototype.setDay = function(day) {
	this.day = day;
};
dateofbirth.prototype.getDay = function() {
	return this.day;
};

module.exports = dateofbirth;