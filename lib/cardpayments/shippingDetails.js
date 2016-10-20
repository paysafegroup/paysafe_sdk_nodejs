var shippingDetails = function(resp) {
	if (resp) {
		if (resp.carrier) {
			this.carrier = resp.carrier;
		}
		if (resp.shipMethod) {
			this.shipMethod = resp.shipMethod;
		}
		if (resp.recipientName) {
			this.recipientName = resp.recipientName;
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
		if (resp.state) {
			this.state = resp.state;
		}
		if (resp.country) {
			this.country = resp.country;
		}
		if (resp.zip) {
			this.zip = resp.zip;
		}
		if (resp.phone) {
			this.phone = resp.phone;
		}
	}
};

shippingDetails.prototype.setPhone = function(phone) {
	this.phone = phone;
};

shippingDetails.prototype.getPhone = function() {
	return this.phone;
};

shippingDetails.prototype.setCarrier = function(carrier) {
	this.carrier = carrier;
};

shippingDetails.prototype.getCarrier = function() {
	return this.carrier;
};

shippingDetails.prototype.setZip = function(zip) {
	this.zip = zip;
};

shippingDetails.prototype.getZip = function() {
	return this.zip;
};

shippingDetails.prototype.setStreet2 = function(street2) {
	this.street2 = street2;
};

shippingDetails.prototype.getStreet2 = function() {
	return this.street2;
};

shippingDetails.prototype.setState = function(state) {
	this.state = state;
};

shippingDetails.prototype.getState = function() {
	return this.state;
};

shippingDetails.prototype.setCountry = function(country) {
	this.country = country;
};

shippingDetails.prototype.getCountry = function() {
	return this.country;
};

shippingDetails.prototype.setCity = function(city) {
	this.city = city;
};

shippingDetails.prototype.getCity = function() {
	return this.city;
};

shippingDetails.prototype.setRecipientName = function(recipientName) {
	this.recipientName = recipientName;
};

shippingDetails.prototype.getRecipientName = function() {
	return this.recipientName;
};

shippingDetails.prototype.setStreet = function(street) {
	this.street = street;
};

shippingDetails.prototype.getStreet = function() {
	return this.street;
};

module.exports = shippingDetails;