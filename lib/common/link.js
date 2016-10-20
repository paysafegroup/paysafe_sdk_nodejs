var link = function(resp) {
	if (resp) {
		if (resp.rel) {
			this.rel = resp.rel;
		}
		if (resp.href) {
			this.href = resp.href;
		}
	}
};

link.prototype.setRel = function(rel) {
	this.rel = rel;
};

link.prototype.getRel = function() {
	return this.rel;
};

link.prototype.setHref = function(href) {
	this.href = href;
};

link.prototype.getHref = function() {
	return this.href;
};

module.exports = link;