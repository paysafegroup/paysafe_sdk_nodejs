var error = require("../common/error");
var createArray = require("../common/createArray");
var links = require("../common/link");
var usAccountDetails = require("./usAccountDetails");
var merchantDescriptor = require("./merchantDescriptor");

var merchantAccount = function(resp) {
  if (resp) {
    if (resp.id) {
      this.id = resp.id;
    }
    if (resp.name) {
      this.name = resp.name;
    }
    if (resp.legalEntity) {
      this.legalEntity = resp.legalEntity;
    }
    if (resp.productCode) {
      this.productCode = resp.productCode;
    }
    if (resp.currency) {
      this.currency = resp.currency;
    }
    if (resp.region) {
      this.region = resp.region;
    }
    if (resp.locale) {
      this.locale = resp.locale;
    }
    if (resp.category) {
      this.category = resp.category;
    }
    if (resp.averageTransactionAmount) {
      this.averageTransactionAmount = resp.averageTransactionAmount;
    }
    if (resp.yearlyVolumeRange) {
      this.yearlyVolumeRange = resp.yearlyVolumeRange;
    }
    if (resp.phone) {
      this.phone = resp.phone;
    }
    if (resp.email) {
      this.email = resp.email;
    }
    if (resp.usAccountDetails) {
      this.usAccountDetails = new usAccountDetails(resp.usAccountDetails);
    }
    if (resp.merchantDescriptor) {
      this.merchantDescriptor = new merchantDescriptor(resp.merchantDescriptor);
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

merchantAccount.prototype.setId = function(id) {
  this.id = id;
};

merchantAccount.prototype.getId = function() {
  return this.id;
};

merchantAccount.prototype.setName = function(name) {
  this.name = name;
};

merchantAccount.prototype.getName = function() {
  return this.name;
};

merchantAccount.prototype.setLegalEntity = function(legalEntity) {
  this.legalEntity = legalEntity;
};

merchantAccount.prototype.getLegalEntity = function() {
  return this.legalEntity;
};

merchantAccount.prototype.setProductCode = function(productCode) {
  this.productCode = productCode;
};

merchantAccount.prototype.getProductCode = function() {
  return this.productCode;
};

merchantAccount.prototype.setCurrency = function(currency) {
  this.currency = currency;
};

merchantAccount.prototype.getCurrency = function() {
  return this.currency;
};

merchantAccount.prototype.setRegion = function(region) {
  this.region = region;
};

merchantAccount.prototype.getRegion = function() {
  return this.region;
};

merchantAccount.prototype.setLocale = function(locale) {
  this.locale = locale;
};

merchantAccount.prototype.getLocale = function() {
  return this.locale;
};

merchantAccount.prototype.setCategory = function(category) {
  this.category = category;
};

merchantAccount.prototype.getCategory = function() {
  return this.category;
};

merchantAccount.prototype.setAverageTransactionAmount = function(averageTransactionAmount) {
  this.averageTransactionAmount = averageTransactionAmount;
};

merchantAccount.prototype.getAverageTransactionAmount = function() {
  return this.averageTransactionAmount;
};

merchantAccount.prototype.setYearlyVolumeRange = function(yearlyVolumeRange) {
  this.yearlyVolumeRange = yearlyVolumeRange;
};

merchantAccount.prototype.getYearlyVolumeRange = function() {
  return this.yearlyVolumeRange;
};

merchantAccount.prototype.setPhone = function(phone) {
  this.phone = phone;
};

merchantAccount.prototype.getPhone = function() {
  return this.phone;
};

merchantAccount.prototype.setEmail = function(email) {
  this.email = email;
};

merchantAccount.prototype.getEmail = function() {
  return this.email;
};

merchantAccount.prototype.setStatus = function(status) {
  this.status = status;
};

merchantAccount.prototype.getStatus = function() {
  return this.status;
};

merchantAccount.prototype.setLinks = function(links) {
  this.links = links;
};

merchantAccount.prototype.getLinks = function() {
  return this.links;
};

merchantAccount.prototype.setError = function(error) {
  this.error = error;
};

merchantAccount.prototype.getError = function() {
  return this.error;
};

module.exports = merchantAccount;
