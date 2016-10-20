var error = require("../common/error");
var addresses = function(resp) {
	if (resp) {
		if (resp.id) {
			this.id = resp.id;
		}
		if (resp.nickName) {
			this.nickName = resp.nickName;
		}
		if (resp.street) {
			this.street = resp.street;
		}
		if (resp.street2) {
			this.street2 = resp.street2;
		}
		if (resp.city) {
			this.city = resp.city;
		}
		if (resp.country) {
			this.country = resp.country;
		}
		if (resp.state) {
			this.state = resp.state;
		}
		if (resp.zip) {
			this.zip = resp.zip;
		}
		if (resp.recipientName) {
			this.recipientName = resp.recipientName;
		}
		if (resp.phone) {
			this.phone = resp.phone;
		}
		if (resp.profile) {
			this.profile = resp.profile;
		}
		if (resp.error) {
			this.error = new error(resp.error);
		}
		if (resp.status) {
			this.status = resp.status;
		}
		if (resp.defaultShippingAddressIndicator !== undefined) {
			this.defaultShippingAddressIndicator = resp.defaultShippingAddressIndicator;
		}
	}
};

addresses.prototype.setDefaultShippingAddressIndicator = function(
		defaultShippingAddressIndicator) {
	this.defaultShippingAddressIndicator = defaultShippingAddressIndicator;
};

addresses.prototype.getDefaultShippingAddressIndicator = function() {
	return this.defaultShippingAddressIndicator;
};

addresses.prototype.setStatus = function(status) {
	this.status = status;
};

addresses.prototype.getStatus = function() {
	return this.status;
};

addresses.prototype.setError = function(error) {
	this.error = error;
};

addresses.prototype.getError = function() {
	return this.error;
};

addresses.prototype.setPhone = function(phone) {
	this.phone = phone;
};

addresses.prototype.getPhone = function() {
	return this.phone;
};

addresses.prototype.setProfile = function(profile) {
	this.profile = profile;
};

addresses.prototype.getProfile = function() {
	return this.profile;
};

addresses.prototype.setRecipientName = function(recipientName) {
	this.recipientName = recipientName;
};

addresses.prototype.getRecipientName = function() {
	return this.recipientName;
};

addresses.prototype.setZip = function(zip) {
	this.zip = zip;
};

addresses.prototype.getZip = function() {
	return this.zip;
};

addresses.prototype.setState = function(state) {
	this.state = state;
};

addresses.prototype.getState = function() {
	return this.state;
};

addresses.prototype.setCountry = function(country) {
	this.country = country;
};

addresses.prototype.getCountry = function() {
	return this.country;
};

addresses.prototype.setCity = function(city) {
	this.city = city;
};

addresses.prototype.getCity = function() {
	return this.city;
};

addresses.prototype.setStreet2 = function(street2) {
	this.street2 = street2;
};

addresses.prototype.getStreet2 = function() {
	return this.street2;
};

addresses.prototype.setStreet = function(street) {
	this.street = street;
};

addresses.prototype.getStreet = function() {
	return this.street;
};

addresses.prototype.setNickName = function(nickName) {
	this.nickName = nickName;
};

addresses.prototype.getNickName = function() {
	return this.nickName;
};

addresses.prototype.setId = function(id) {
	this.id = id;
};

addresses.prototype.getId = function() {
	return this.id;
};

module.exports = addresses;
