var error = require("../common/error");
var createArray = require("../common/createArray");
var addresses = require("../customervault/addresses");
var dateOfBirth = require("../customervault/dateofbirth");
var links = require("../common/link");

var businessOwner = function(resp) {
  if (resp) {
    if (resp.id) {
      this.id = resp.id;
    }
    // Required
    if (resp.firstName) {
      this.firstName = resp.firstName;
    }
    if (resp.middleName) {
      this.middleName = resp.middleName;
    }
    // Required
    if (resp.lastName) {
      this.lastName = resp.lastName;
    }
    if (resp.email) {
      this.email = resp.email;
    }
    // Required
    if (resp.jobTitle) {
      this.jobTitle = resp.jobTitle;
    }
    // Required
    if (resp.phone) {
      this.phone = resp.phone;
    }
    // Required
    if (resp.ssn) {
      this.ssn = resp.ssn;
    }
    // Required
    if (resp.dateOfBirth) {
      this.dateOfBirth = new dateOfBirth(resp.dateOfBirth);
    }
    // Required
    if (resp.currentAddress) {
      if (resp.currentAddress instanceof Array) {
        this.currentAddress = new createArray(resp.currentAddress, addresses);
      } else {
        this.currentAddress = resp.currentAddress;
      }
    }
    if (resp.profile) {
      this.profile = resp.profile;
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

businessOwner.prototype.setId = function(id) {
  this.id = id;
};

businessOwner.prototype.getId = function() {
  return this.id;
};

businessOwner.prototype.setFirstName = function(firstName) {
  this.firstName = firstName;
};

businessOwner.prototype.getFirstName = function() {
  return this.firstName;
};

businessOwner.prototype.setMiddleName = function(middleName) {
  this.middleName = middleName;
};

businessOwner.prototype.getMiddleName = function() {
  return this.middleName;
};

businessOwner.prototype.setLastName = function(lastName) {
  this.name = lastName;
};

businessOwner.prototype.getLastName = function() {
  return this.lastName;
};

businessOwner.prototype.setEmail = function(email) {
  this.email = email;
};

businessOwner.prototype.getEmail = function() {
  return this.email;
};

businessOwner.prototype.setJobTitle = function(jobTitle) {
  this.jobTitle = jobTitle;
};

businessOwner.prototype.getJobTitle = function() {
  return this.jobTitle;
};

businessOwner.prototype.setPhone = function(phone) {
  this.phone = phone;
};

businessOwner.prototype.getPhone = function() {
  return this.phone;
};

businessOwner.prototype.setSsn = function(ssn) {
  this.ssn = ssn;
};

businessOwner.prototype.getSsn = function() {
  return this.ssn;
};

businessOwner.prototype.setDateOfBirth = function(dateOfBirth) {
  this.dateOfBirth = dateOfBirth;
};

businessOwner.prototype.getDateOfBirth = function() {
  return this.dateOfBirth;
};

businessOwner.prototype.setCurrentAddress = function(currentAddress) {
  this.currentAddress = currentAddress;
};

businessOwner.prototype.getCurrentAddress = function() {
  return this.currentAddress;
};

businessOwner.prototype.setProfile = function(profile) {
  this.profile = profile;
};

businessOwner.prototype.getProfile = function() {
  return this.profile;
};

businessOwner.prototype.setLinks = function(links) {
  this.links = links;
};

businessOwner.prototype.getLinks = function() {
  return this.links;
};

businessOwner.prototype.setError = function(error) {
  this.error = error;
};

businessOwner.prototype.getError = function() {
  return this.error;
};

module.exports = businessOwner;
