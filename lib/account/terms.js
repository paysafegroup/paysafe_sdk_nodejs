var error = require("../common/error");
var createArray = require("../common/createArray");
var links = require("../common/link");

var terms = function(resp) {
  if (resp) {
    if (resp.id) {
      this.id = resp.id;
    }
    if (resp.version) {
      this.version = resp.version;
    }
    if (resp.acceptanceDate) {
      this.acceptanceDate = resp.acceptanceDate;
    }
    if (resp.links) {
      if (resp.links instanceof Array) {
        this.links = new createArray(resp.links, links);
      } else {
        this.links = resp.links;
      }
    }
    if (resp.error) {
      this.error = new error(resp.error);
    }
  }
};

terms.prototype.setId = function(id) {
  this.id = id;
};

terms.prototype.getId = function() {
  return this.id;
};

terms.prototype.setVersion = function(version) {
  this.version = version;
};

terms.prototype.getVersion = function() {
  return this.version;
};

terms.prototype.setAcceptanceDate = function(acceptanceDate) {
  this.acceptanceDate = acceptanceDate;
};

terms.prototype.getAcceptanceDate = function() {
  return this.acceptanceDate;
};

terms.prototype.setLinks = function(links) {
  this.links = links;
};

terms.prototype.getLinks = function() {
  return this.links;
};

terms.prototype.setError = function(error) {
  this.error = error;
};

terms.prototype.getError = function() {
  return this.error;
};

module.exports = terms;
