var masterPass = function(resp) {
	if (resp) {
		if (resp.payPassWalletIndicator) {
			this.payPassWalletIndicator = resp.payPassWalletIndicator;
		}
		if (resp.authenticationMethod) {
			this.authenticationMethod = resp.authenticationMethod;
		}
		if (resp.cardEnrollmentMethod) {
			this.cardEnrollmentMethod = resp.cardEnrollmentMethod;
		}
		if (resp.masterCardAssignedId) {
			this.masterCardAssignedId = resp.masterCardAssignedId;
		}
	}
};

masterPass.prototype.setCardEnrollmentMethod = function(cardEnrollmentMethod) {
	this.cardEnrollmentMethod = cardEnrollmentMethod;
};

masterPass.prototype.getCardEnrollmentMethod = function() {
	return this.cardEnrollmentMethod;
};

masterPass.prototype.setMasterCardAssignedId = function(masterCardAssignedId) {
	this.masterCardAssignedId = masterCardAssignedId;
};

masterPass.prototype.getMasterCardAssignedId = function() {
	return this.masterCardAssignedId;
};

masterPass.prototype.setPayPassWalletIndicator = function(payPassWalletIndicator) {
	this.payPassWalletIndicator = payPassWalletIndicator;
};

masterPass.prototype.getPayPassWalletIndicator = function() {
	return this.payPassWalletIndicator;
};

masterPass.prototype.setAuthenticationMethod = function(authenticationMethod) {
	this.authenticationMethod = authenticationMethod;
};

masterPass.prototype.getAuthenticationMethod = function() {
	return this.authenticationMethod;
};

module.exports = masterPass;