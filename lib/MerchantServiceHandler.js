/**
 * author: Francisco Bueno
 */
var PaysafeRequest = require("./PaysafeRequest");
var constants = require("./Constants.js");
var URI = 'accountmanagement/v1';
var MERCHANT_PATH = '/merchants';
var MERCHANT_ACCOUNT_PATH = '/accounts?operationMode=consolidated';
var MERCHANT_CREATE_BANK_ACC_PATH = '/bankaccounts';
var MERCHANT_ACH_BANK_ACC_PATH = '/achbankaccounts';
var MERCHANT_BACS_BANK_ACC_PATH = '/bacsbankaccounts';
var MERCHANT_SEPA_BANK_ACC_PATH = '/sepabankaccounts';
var MERCHANT_EFT_BANK_ACC_PATH = '/eftbankaccounts';
var SEPERATOR = '/';
/**
 * @author Atul.Patil method for initialization of constructor
 *         CustomerServiceHandler.
 */
var MerchantServiceHandler = function(PaysafeApiClient) {
  this._PaysafeApiClient = PaysafeApiClient;
};

var prepareMerchantURI = function(path, id) {
  return URI + MERCHANT_PATH + SEPERATOR + id + path;
};

var prepareURI = function(path, paysafeClient) {
  return URI + path;
};

/**
 * @author Francisco Bueno method for creating a Merchant
 */
MerchantServiceHandler.prototype.createMerchant = function(merchant, responseCallBack) {
  try {
    var clientObj = this._PaysafeApiClient;
    if (typeof (responseCallBack) === "function") {
      var requestObj = new PaysafeRequest(prepareURI(MERCHANT_PATH, clientObj),
        constants.POST);
      clientObj.processRequest(requestObj, merchant, function(error, response) {
        response = response ? new clientObj.Merchant(response) : response;
        responseCallBack(error, response);
      });
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : createMerchant");
    }
  } catch (err) {
    responseCallBack(err, null);
  }
};

/**
 * @author Francisco Bueno method for creating a Merchant Account-USD CC Consolidated
 */
MerchantServiceHandler.prototype.createMerchantAccount = function(merchantAccount, responseCallBack) {
  try {
    var clientObj = this._PaysafeApiClient;
    if (typeof (responseCallBack) === "function") {
      var requestObj = new PaysafeRequest(prepareMerchantURI(MERCHANT_ACCOUNT_PATH, merchantAccount.id),
        constants.POST);
      console.log(merchantAccount)
      clientObj.processRequest(requestObj, merchantAccount, function(error, response) {
        response = response ? new clientObj.MerchantAccount(response) : response;
        responseCallBack(error, response);
      });
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : createMerchantAccount");
    }
  } catch (err) {
    responseCallBack(err, null);
  }
};

/**
 * @author Francisco Bueno method for creating a Merchant ACH Bank Account
 */
MerchantServiceHandler.prototype.createMerchantACHBankAccount = function(bankAccount, responseCallBack) {
  try {
    var clientObj = this._PaysafeApiClient;
    if (typeof (responseCallBack) === "function") {
      var requestObj = new PaysafeRequest(prepareMerchantURI(MERCHANT_CREATE_BANK_ACC_PATH, bankAccount.accountId),
        constants.POST);
      console.log(merchantAccount)
      clientObj.processRequest(requestObj, merchantAccount, function(error, response) {
        console.log(response)
        console.log(JSON.stringify(response))
        // response = response ? new clientObj.MerchantACHBankAcoount(response) : response;
        responseCallBack(error, response);
      });
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : createMerchantAccount");
    }
  } catch (err) {
    responseCallBack(err, null);
  }
};

module.exports = MerchantServiceHandler;
