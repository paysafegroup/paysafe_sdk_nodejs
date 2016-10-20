var pagination = function(resp) {
	if (resp) {
		if (resp.limit) {
			this.limit = resp.limit;
		}
		if (resp.offset) {
			this.offset = resp.offset;
		}
		if (resp.startDate) {
			this.startDate = resp.startDate;
		}
		if (resp.endDate) {
			this.endDate = resp.endDate;
		}
	}
};

pagination.prototype.setLimit = function(limit) {
	this.limit = limit;
};

pagination.prototype.getLimit = function() {
	return this.limit;
};

pagination.prototype.setOffset = function(offset) {
	this.offset = offset;
};

pagination.prototype.getOffset = function() {
	return this.offset;
};

pagination.prototype.setStartDate = function(startDate) {
	this.startDate = startDate;
};

pagination.prototype.getStartDate = function() {
	return this.startDate;
};

pagination.prototype.setEndDate = function(endDate) {
	this.endDate = endDate;
};

pagination.prototype.getEndDate = function() {
	return this.endDate;
};

module.exports = pagination;