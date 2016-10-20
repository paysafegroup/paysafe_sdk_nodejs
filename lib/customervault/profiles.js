var error = require("../common/error");
var dateOfBirth = require("./dateofbirth");
var addresses = require("./addresses");
var card = require("../cardpayments/card");
var createArray = require("../common/createArray");
var achbankaccounts = require("./ACHBankAccounts");
var eftbankaccounts = require("./EFTBankAccounts");
var bacsbankaccounts = require("./BACSBankAccounts");
var sepabankaccounts = require("./SEPABankAccounts");

var profiles = function(resp) {
	if (resp) {
		if (resp.id) {
			this.id = resp.id;
		}
		if (resp.status) {
			this.status = resp.status;
		}
		if (resp.merchantCustomerId) {
			this.merchantCustomerId = resp.merchantCustomerId;
		}
		if (resp.locale) {
			this.locale = resp.locale;
		}
		if (resp.firstName) {
			this.firstName = resp.firstName;
		}
		if (resp.middleName) {
			this.middleName = resp.middleName;
		}
		if (resp.lastName) {
			this.lastName = resp.lastName;
		}
		if (resp.dateOfBirth) {
			this.dateOfBirth = new dateOfBirth(resp.dateOfBirth);
		}
		if (resp.ip) {
			this.ip = resp.ip;
		}
		if (resp.gender) {
			this.gender = resp.gender;
		}
		if (resp.nationality) {
			this.nationality = resp.nationality;
		}
		if (resp.email) {
			this.email = resp.email;
		}
		if (resp.phone) {
			this.phone = resp.phone;
		}
		if (resp.cellPhone) {
			this.cellPhone = resp.cellPhone;
		}
		if (resp.paymentToken) {
			this.paymentToken = resp.paymentToken;
		}
		if (resp.addresses) {
			if (resp.addresses instanceof Array) {
				this.addresses = new createArray(resp.addresses, addresses);
			} else {
				this.addresses = resp.addresses;
			}
		}
		if (resp.cards) {
			if (resp.cards instanceof Array) {
				this.cards = new createArray(resp.cards, card);
			} else {
				this.cards = resp.cards;
			}
		}
		if (resp.achbankaccounts) {
			if (resp.achbankaccounts instanceof Array) {
				this.achbankaccounts = new createArray(resp.achbankaccounts, achbankaccounts);
			} else {
				this.achbankaccounts = resp.achbankaccounts;
			}
		}
		if (resp.eftbankaccounts) {
			if (resp.eftbankaccounts instanceof Array) {
				this.eftbankaccounts = new createArray(resp.eftbankaccounts, eftbankaccounts);
			} else {
				this.eftbankaccounts = resp.eftbankaccounts;
			}
		}
		if (resp.bacsbankaccounts) {
			if (resp.bacsbankaccounts instanceof Array) {
				this.bacsbankaccounts = new createArray(resp.bacsbankaccounts, bacsbankaccounts);
			} else {
				this.bacsbankaccounts = resp.bacsbankaccounts;
			}
		}
		if (resp.sepabankaccounts) {
			if (resp.sepabankaccounts instanceof Array) {
				this.sepabankaccounts = new createArray(resp.sepabankaccounts, sepabankaccounts);
			} else {
				this.sepabankaccounts = resp.sepabankaccounts;
			}
		}
		if (resp.error) {
			this.error = new error(resp.error);
		}
		if (resp.status) {
			this.status = resp.status;
		}
	}
};

profiles.prototype.setStatus = function(status) {
	this.status = status;
};

profiles.prototype.getStatus = function() {
	return this.status;
};

profiles.prototype.setError = function(error) {
	this.error = error;
};

profiles.prototype.getError = function() {
	return this.error;
};

profiles.prototype.setCards = function(cards) {
	this.cards = cards;
};

profiles.prototype.getCards = function() {
	return this.cards;
};

profiles.prototype.setCard = function(card) {
	this.card = card;
};

profiles.prototype.getCard = function() {
	return this.card;
};

profiles.prototype.setACHBankAccounts = function(achbankaccounts) {
	this.achbankaccounts = achbankaccounts;
};

profiles.prototype.getACHBankAccounts = function() {
	return this.achbankaccounts;
};

profiles.prototype.setEFTBankAccounts = function(eftbankaccounts) {
	this.eftbankaccounts = eftbankaccounts;
};

profiles.prototype.getEFTBankAccounts = function() {
	return this.eftbankaccounts;
};

profiles.prototype.setBACSBankAccounts = function(bacsbankaccounts) {
	this.bacsbankaccounts = bacsbankaccounts;
};

profiles.prototype.getBACSBankAccounts = function() {
	return this.bacsbankaccounts;
};

profiles.prototype.setSEPABankAccounts = function(sepabankaccounts) {
	this.sepabankaccounts = sepabankaccounts;
};

profiles.prototype.getSEPABankAccounts = function() {
	return this.sepabankaccounts;
};

profiles.prototype.setAddresses = function(addresses) {
	this.addresses = addresses;
};

profiles.prototype.getAddresses = function() {
	return this.addresses;
};

profiles.prototype.setPaymentToken = function(paymentToken) {
	this.paymentToken = paymentToken;
};

profiles.prototype.getPaymentToken = function() {
	return this.paymentToken;
};

profiles.prototype.setCellPhone = function(cellPhone) {
	this.cellPhone = cellPhone;
};

profiles.prototype.getCellPhone = function() {
	return this.cellPhone;
};

profiles.prototype.setPhone = function(phone) {
	this.phone = phone;
};

profiles.prototype.getPhone = function() {
	return this.phone;
};

profiles.prototype.setEmail = function(email) {
	this.email = email;
};

profiles.prototype.getEmail = function() {
	return this.email;
};

profiles.prototype.setNationality = function(nationality) {
	this.nationality = nationality;
};

profiles.prototype.getNationality = function() {
	return this.nationality;
};

profiles.prototype.setGender = function(gender) {
	this.gender = gender;
};

profiles.prototype.getGender = function() {
	return this.gender;
};

profiles.prototype.setIp = function(ip) {
	this.ip = ip;
};

profiles.prototype.getIp = function() {
	return this.ip;
};

profiles.prototype.setDateOfBirth = function(dateOfBirth) {
	this.dateOfBirth = dateOfBirth;
};

profiles.prototype.getDateOfBirth = function() {
	return this.dateOfBirth;
};

profiles.prototype.setLastName = function(lastName) {
	this.lastName = lastName;
};

profiles.prototype.getLastName = function() {
	return this.lastName;
};

profiles.prototype.setMiddleName = function(middleName) {
	this.middleName = middleName;
};

profiles.prototype.getMiddleName = function() {
	return this.middleName;
};

profiles.prototype.setFirstName = function(firstName) {
	this.firstName = firstName;
};

profiles.prototype.getFirstName = function() {
	return this.firstName;
};

profiles.prototype.setLocale = function(locale) {
	this.locale = locale;
};

profiles.prototype.getLocale = function() {
	return this.locale;
};

profiles.prototype.setMerchantCustomerId = function(merchantCustomerId) {
	this.merchantCustomerId = merchantCustomerId;
};

profiles.prototype.getMerchantCustomerId = function() {
	return this.merchantCustomerId;
};

profiles.prototype.setStatus = function(status) {
	this.status = status;
};

profiles.prototype.getStatus = function() {
	return this.status;
};

profiles.prototype.setId = function(id) {
	this.id = id;
};

profiles.prototype.getId = function() {
	return this.id;
};

module.exports = profiles;