var error = require("../common/error");
var createArray = require("../common/createArray");
var links = require("../common/link");
var recoveryQuestion = require("./recoveryQuestion");

var user = function(resp) {
  if (resp) {
    if (resp.id) {
      this.id = resp.id;
    }
    if (resp.userName) {
      this.userName = resp.userName;
    }
    if (resp.password) {
      this.password = resp.password;
    }
    if (resp.email) {
      this.email = resp.email;
    }
    if (resp.recoveryQuestion) {
      this.recoveryQuestion = new recoveryQuestion(resp.recoveryQuestion);
    }
    if (resp.users) {
      this.users = resp.users;
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

user.prototype.setId = function(id) {
  this.id = id;
};

user.prototype.getId = function() {
  return this.id;
};

user.prototype.setUserName = function(userName) {
  this.userName = userName;
};

user.prototype.getUserName = function() {
  return this.userName;
};

user.prototype.setPassword = function(password) {
  this.password = password;
};

user.prototype.getPassword = function() {
  return this.password;
};

user.prototype.setEmail = function(email) {
  this.email = email;
};

user.prototype.getEmail = function() {
  return this.email;
};

user.prototype.setRecoveryQuestion = function(recoveryQuestion) {
  this.recoveryQuestion = recoveryQuestion;
};

user.prototype.getRecoveryQuestion = function() {
  return this.recoveryQuestion;
};

user.prototype.setUsers = function(users) {
  this.users = users;
};

user.prototype.getUsers = function() {
  return this.users;
};

user.prototype.setLinks = function(links) {
  this.links = links;
};

user.prototype.getLinks = function() {
  return this.links;
};

user.prototype.setError = function(error) {
  this.error = error;
};

user.prototype.getError = function() {
  return this.error;
};

module.exports = user;
