var DEFERRED_PAYMENT = "DEFERRED_PAYMENT";
/**
 * New node file
 */
var accordD = function(resp) {
	if (resp) {
		if (resp.financingType) {
			this.financingType = resp.financingType;
		}
		if (resp.plan) {
			this.plan = resp.plan;
		}
		if (resp.gracePeriod) {
			this.gracePeriod = resp.gracePeriod;
		}
		if (resp.term) {
			this.term = resp.term;
		}
	}
};

accordD.prototype.setFinancingType = function(financingType) {
	this.financingType = financingType;
};

accordD.prototype.getFinancingType = function() {
	return this.financingType;
};

accordD.prototype.setPlan = function(plan) {
	this.plan = plan;
};

accordD.prototype.getPlan = function() {
	return this.plan;
};

accordD.prototype.setGracePeriod = function(gracePeriod) {
	this.gracePeriod = gracePeriod;
};

accordD.prototype.getGracePeriod = function() {
	return this.gracePeriod;
};

accordD.prototype.setTerm = function(term) {
	this.term = term;
};

accordD.prototype.getTerm = function() {
	return this.term;
};

module.exports = accordD;