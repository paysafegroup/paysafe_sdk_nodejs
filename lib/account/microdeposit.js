var error = require("../common/error");
var createArray = require("../common/createArray");
var links = require("../common/link");

var microdeposit = function(resp) {
  if (resp) {
    if (resp.id) {
      this.id = resp.id;
    }
    if (resp.amount) {
      this.amount = resp.amount;
    }
    if (resp.status) {
      this.status = resp.status;
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

microdeposit.prototype.setId = function(id) {
  this.id = id;
};

microdeposit.prototype.getId = function() {
  return this.id;
};

microdeposit.prototype.setAmount = function(amount) {
  this.amount = amount;
};

microdeposit.prototype.getAmount = function() {
  return this.amount;
};

microdeposit.prototype.setStatus = function(status) {
  this.status = status;
};

microdeposit.prototype.getStatus = function() {
  return this.status;
};

microdeposit.prototype.setLinks = function(links) {
  this.links = links;
};

microdeposit.prototype.getLinks = function() {
  return this.links;
};

microdeposit.prototype.setError = function(error) {
  this.error = error;
};

microdeposit.prototype.getError = function() {
  return this.error;
};

module.exports = microdeposit;
