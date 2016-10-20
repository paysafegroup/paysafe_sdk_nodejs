var recipientDateOfBirth = require("./recipientDateOfBirth");
var visaAdditionalAuthData = function(resp) {
	if (resp) {
		if (resp.recipientDateOfBirth) {
			this.recipientDateOfBirth = new recipientDateOfBirth(
					resp.recipientDateOfBirth);
		}
		if (resp.recipientrecipientZip) {
			this.recipientrecipientZip = resp.recipientrecipientZip;
		}
		if (resp.recipientLastName) {
			this.recipientLastName = resp.recipientLastName;
		}
		if (resp.recipientAccountNumber) {
			this.recipientAccountNumber = resp.recipientAccountNumber;
		}
	}
};

visaAdditionalAuthData.prototype.setrecipientDateOfBirth = function(
		recipientDateOfBirth) {
	this.recipientDateOfBirth = recipientDateOfBirth;
};

visaAdditionalAuthData.prototype.getrecipientDateOfBirth = function() {
	return this.recipientDateOfBirth;
};

visaAdditionalAuthData.prototype.setrecipientZip = function(recipientZip) {
	this.recipientZip = recipientZip;
};

visaAdditionalAuthData.prototype.getrecipientZip = function() {
	return this.recipientZip;
};

visaAdditionalAuthData.prototype.setrecipientLastName = function(
		recipientLastName) {
	this.recipientLastName = recipientLastName;
};

visaAdditionalAuthData.prototype.getrecipientLastName = function() {
	return this.recipientLastName;
};

visaAdditionalAuthData.prototype.setrecipientAccountNumber = function(
		recipientAccountNumber) {
	this.recipientAccountNumber = recipientAccountNumber;
};

visaAdditionalAuthData.prototype.getrecipientAccountNumber = function() {
	return this.recipientAccountNumber;
};

module.exports = visaAdditionalAuthData;