var billingDetails = function(resp) {
	if (resp) {
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
		if(resp.useAsShippingAddress !== undefined){
			this.useAsShippingAddress = resp.useAsShippingAddress;
		}
	}
};

billingDetails.prototype.setUseAsShippingAddress = function(useAsShippingAddress) {
	this.useAsShippingAddress = useAsShippingAddress;
};

billingDetails.prototype.getUseAsShippingAddress = function() {
	return this.useAsShippingAddress;
};

billingDetails.prototype.setPhone = function(phone) {
	this.phone = phone;
};

billingDetails.prototype.getPhone = function() {
	return this.phone;
};

billingDetails.prototype.setZip = function(zip) {
	this.zip = zip;
};

billingDetails.prototype.getZip = function() {
	return this.zip;
};

billingDetails.prototype.setState = function(state) {
	this.state = state;
};

billingDetails.prototype.getState = function() {
	return this.state;
};

billingDetails.prototype.setCountry = function(country) {
	this.country = country;
};

billingDetails.prototype.getCountry = function() {
	return this.country;
};

billingDetails.prototype.setCity = function(city) {
	this.city = city;
};

billingDetails.prototype.getCity = function() {
	return this.city;
};

billingDetails.prototype.getstreet2 = function() {
	return this.street2;
};

billingDetails.prototype.setStreet = function(street) {
	this.street = street;
};

billingDetails.prototype.getStreet = function() {
	return this.street;
};

module.exports = billingDetails;