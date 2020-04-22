var error = require("../common/error");
var createArray = require("../common/createArray");
var links = require("../common/link");

var recoveryQuestion = function(resp) {
  if (resp) {
    if (resp.id) {
      this.id = resp.id;
    }
    if (resp.question) {
      this.question = resp.question;
    }
    if (resp.questionId) {
      this.questionId = resp.questionId;
    }
    if (resp.answer) {
      this.answer = resp.answer;
    }
    if (resp.error) {
      this.error = new error(resp.error);
    }
  }
};

recoveryQuestion.prototype.setId = function(id) {
  this.id = id;
};

recoveryQuestion.prototype.getId = function() {
  return this.id;
};

recoveryQuestion.prototype.setQuestion = function(question) {
  this.question = question;
};

recoveryQuestion.prototype.getQuestion = function() {
  return this.question;
};

recoveryQuestion.prototype.setQuestionId = function(questionId) {
  this.questionId = questionId;
};

recoveryQuestion.prototype.getQuestionId = function() {
  return this.questionId;
};

recoveryQuestion.prototype.setAnswer = function(answer) {
  this.answer = answer;
};

recoveryQuestion.prototype.getAnswer = function() {
  return this.answer;
};

recoveryQuestion.prototype.setError = function(error) {
  this.error = error;
};

recoveryQuestion.prototype.getError = function() {
  return this.error;
};

module.exports = recoveryQuestion;
