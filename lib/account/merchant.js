var error = require("../common/error");
var createArray = require("../common/createArray");
var links = require("../common/link");

var merchant = function(resp) {
  if (resp) {
    if (resp.id) {
      this.id = resp.id;
    }
    if (resp.name) {
      this.name = resp.name;
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

merchant.prototype.setId = function(id) {
  this.id = id;
};

merchant.prototype.getId = function() {
  return this.id;
};

merchant.prototype.setName = function(name) {
  this.name = name;
};

merchant.prototype.getName = function() {
  return this.name;
};

merchant.prototype.setLinks = function(links) {
  this.links = links;
};

merchant.prototype.getLinks = function() {
  return this.links;
};

merchant.prototype.setError = function(error) {
  this.error = error;
};

merchant.prototype.getError = function() {
  return this.error;
};

module.exports = merchant;
