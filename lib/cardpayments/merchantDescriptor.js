var merchantDescriptor = function(resp) {
	if (resp) {
		if (resp.dynamicDescriptor) {
			this.dynamicDescriptor = resp.dynamicDescriptor;
		}
		if (resp.phone) {
			this.phone = resp.phone;
		}
	}
};

merchantDescriptor.prototype.setDynamicDescriptor = function(dynamicDescriptor) {
	this.dynamicDescriptor = dynamicDescriptor;
};

merchantDescriptor.prototype.getDynamicDescriptor = function() {
	return this.dynamicDescriptor;
};

merchantDescriptor.prototype.setPhone = function(phone) {
	this.phone = phone;
};

merchantDescriptor.prototype.getPhone = function() {
	return this.phone;
};

module.exports = merchantDescriptor;
