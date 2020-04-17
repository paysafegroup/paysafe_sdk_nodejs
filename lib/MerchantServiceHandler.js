/**
 * author: Francisco Bueno
 */
var PaysafeRequest = require("./PaysafeRequest");
var constants = require("./Constants.js");
var URI = 'accountmanagement/v1';
var MERCHANT_PATH = '/merchants';
var MERCHANT_ACCOUNT_PATH = '/accounts';
var MERCHANT_NEW_ACCOUNT_PATH = '/accounts?operationMode=consolidated';
var MERCHANT_ADDRESSES_PATH = '/addresses';
var MERCHANT_CREATE_BANK_ACC_PATH = '/bankaccounts';
var MERCHANT_TC_PATH = '/termsandconditions';

var MERCHANT_BANK_ACC_PATH = {
  "ACH" : "/achbankaccounts",
  "BACS" : "/bacsbankaccounts",
  "SEPA" : "/sepabankaccounts",
  "EFT" : "/eftbankaccounts"
};

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

var prepareMerchantAccountURI = function(path, id) {
  return URI + MERCHANT_ACCOUNT_PATH + SEPERATOR + id + path;
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
 * @author Francisco Bueno method for getting a Merchant Account-USD CC Consolidated
 */
MerchantServiceHandler.prototype.getMerchantAccount = function(merchantAccount, responseCallBack) {
  try {
    var clientObj = this._PaysafeApiClient;
    if (typeof (responseCallBack) === "function") {
      if (merchantAccount && merchantAccount.id) {
        var requestObj = new PaysafeRequest(prepareMerchantAccountURI('', merchantAccount.id),
          constants.GET);
        clientObj.processRequest(requestObj, null, function(error, response) {
          response = response ? new clientObj.MerchantAccount(response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw clientObj.error(400,
          "InvalidRequestException : merchant account id is missing "
          + "in MerchantServiceHandler : getMerchantAccount");
      }
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : getMerchantAccount");
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
      var requestObj = new PaysafeRequest(prepareMerchantURI(MERCHANT_NEW_ACCOUNT_PATH, merchantAccount.id),
        constants.POST);
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
 * @author Francisco Bueno method for updating a Merchant Account-USD CC Consolidated
 */
MerchantServiceHandler.prototype.updateMerchantAccount = function(merchantAccount, responseCallBack) {
  try {
    var clientObj = this._PaysafeApiClient;
    if (typeof (responseCallBack) === "function") {
      if (merchantAccount && merchantAccount.id) {
        var requestObj = new PaysafeRequest(prepareMerchantAccountURI('', merchantAccount.id),
          constants.PUT);
        clientObj.processRequest(requestObj, merchantAccount, function(error, response) {
          response = response ? new clientObj.MerchantAccount(response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw clientObj.error(400,
          "InvalidRequestException : merchant account id is missing "
          + "in MerchantServiceHandler : updateMerchantAccount");
      }
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : updateMerchantAccount");
    }
  } catch (err) {
    responseCallBack(err, null);
  }
};

/**
 * @author Francisco Bueno method for getting a Merchant Address
 */
MerchantServiceHandler.prototype.getMerchantAddress = function(address, responseCallBack) {
  try {
    var clientObj = this._PaysafeApiClient;
    if (typeof (responseCallBack) === "function") {
      if (address && address.id) {
        var profile = address.profile;
        delete address.profile;
        var requestObj = new PaysafeRequest(prepareURI(MERCHANT_ADDRESSES_PATH + "/" + address.id, clientObj),
          constants.GET);
        clientObj.processRequest(requestObj, null, function(error, response) {
          response = response ? new clientObj.Address(response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw clientObj.error(400,
          "InvalidRequestException : account id is missing "
          + "in MerchantServiceHandler : getMerchantAdress");
      }
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : getMerchantAdress");
    }
  } catch (err) {
    responseCallBack(err, null);
  }
};

/**
 * @author Francisco Bueno method for creating a Merchant Address
 */
MerchantServiceHandler.prototype.createMerchantAddress = function(address, responseCallBack) {
  try {
    var clientObj = this._PaysafeApiClient;
    if (typeof (responseCallBack) === "function") {
      if (address && address.profile && address.profile.id) {
        var profile = address.profile;
        delete address.profile;
        var requestObj = new PaysafeRequest(prepareMerchantAccountURI(MERCHANT_ADDRESSES_PATH, profile.id),
          constants.POST);
        clientObj.processRequest(requestObj, address, function(error, response) {
          response = response ? new clientObj.Address(response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw clientObj.error(400,
          "InvalidRequestException : account id is missing "
          + "in MerchantServiceHandler : createMerchantBankAccount");
      }
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : createMerchantBankAccount");
    }
  } catch (err) {
    responseCallBack(err, null);
  }
};

/**
 * @author Francisco Bueno method for updating a Merchant Address
 */
MerchantServiceHandler.prototype.updateMerchantAddress = function(address, responseCallBack) {
  try {
    var clientObj = this._PaysafeApiClient;
    if (typeof (responseCallBack) === "function") {
      if (address && address.id) {
        delete address.profile;
        var requestObj = new PaysafeRequest(prepareURI(MERCHANT_ADDRESSES_PATH + "/" + address.id, clientObj),
          constants.PUT);
        clientObj.processRequest(requestObj, address, function(error, response) {
          response = response ? new clientObj.Address(response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw clientObj.error(400,
          "InvalidRequestException : account id is missing "
          + "in MerchantServiceHandler : updateMerchantBankAccount");
      }
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : updateMerchantBankAccount");
    }
  } catch (err) {
    responseCallBack(err, null);
  }
};

/**
 * @author Francisco Bueno method for getting a Merchant Address
 */
MerchantServiceHandler.prototype.getMerchantBankAccount = function(bankAccount, responseCallBack) {
  try {
    var clientObj = this._PaysafeApiClient;
    if (typeof (responseCallBack) === "function") {
      if (bankAccount && bankAccount.id) {
        var requestObj = new PaysafeRequest(prepareURI(MERCHANT_BANK_ACC_PATH[bankAccount.type] + "/" + bankAccount.id, clientObj),
          constants.GET);
        console.log(prepareURI(MERCHANT_BANK_ACC_PATH[bankAccount.type] + "/" + bankAccount.id, clientObj))
        console.log(bankAccount)
        clientObj.processRequest(requestObj, null, function(error, response) {
          console.log(response)
          // response = response ? new clientObj[bankAccount.type](response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw clientObj.error(400,
          "InvalidRequestException : account id is missing "
          + "in MerchantServiceHandler : getMerchantBankAccount");
      }
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : getMerchantBankAccount");
    }
  } catch (err) {
    responseCallBack(err, null);
  }
};

/**
 * @author Francisco Bueno method for creating a Merchant ACH Bank Account
 */
MerchantServiceHandler.prototype.createMerchantBankAccount = function(bankAccount, responseCallBack) {
  try {
    var clientObj = this._PaysafeApiClient;
    if (typeof (responseCallBack) === "function") {
      var requestObj = new PaysafeRequest(prepareMerchantAccountURI(MERCHANT_BANK_ACC_PATH[bankAccount.type], bankAccount.accountId),
        constants.POST);
      console.log(prepareMerchantAccountURI(MERCHANT_BANK_ACC_PATH[bankAccount.type], bankAccount.accountId))
      console.log(bankAccount)
      clientObj.processRequest(requestObj, bankAccount, function(error, response) {
        console.log(response)
        // response = response ? new clientObj[bankAccount.type](response) : response;
        responseCallBack(error, response);
      });
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : createMerchantBankAccount");
    }
  } catch (err) {
    responseCallBack(err, null);
  }
};

/**
 * @author Francisco Bueno method for updating a Merchant Bank Account
 */
MerchantServiceHandler.prototype.updateMerchantBankAccount = function(bankAccount, responseCallBack) {
  try {
    var clientObj = this._PaysafeApiClient;
    if (typeof (responseCallBack) === "function") {
      if (bankAccount && bankAccount.id) {
        var requestObj = new PaysafeRequest(prepareURI(MERCHANT_BANK_ACC_PATH[bankAccount.type] + "/" + bankAccount.id, clientObj),
          constants.PUT);
        console.log(prepareURI(MERCHANT_BANK_ACC_PATH[bankAccount.type] + "/" + bankAccount.id, clientObj))
        console.log(bankAccount)
        clientObj.processRequest(requestObj, bankAccount, function(error, response) {
          console.log(response)
          // response = response ? new clientObj[bankAccount.type](response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw clientObj.error(400,
          "InvalidRequestException : account id is missing "
          + "in MerchantServiceHandler : updateMerchantBankAccount");
      }
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : updateMerchantBankAccount");
    }
  } catch (err) {
    responseCallBack(err, null);
  }
};

/**
 * @author Francisco Bueno method for deleting a Merchant Bank Account
 */
MerchantServiceHandler.prototype.deleteMerchantBankAccount = function(bankAccount, responseCallBack) {
  try {
    var clientObj = this._PaysafeApiClient;
    if (typeof (responseCallBack) === "function") {
      if (bankAccount && bankAccount.id) {
        var requestObj = new PaysafeRequest(prepareURI(MERCHANT_BANK_ACC_PATH[bankAccount.type] + "/" + bankAccount.id, clientObj),
          constants.DELETE);
        console.log(prepareURI(MERCHANT_BANK_ACC_PATH[bankAccount.type] + "/" + bankAccount.id, clientObj))
        console.log(bankAccount)
        clientObj.processRequest(requestObj, bankAccount, function(error, response) {
          console.log(response)
          // response = response ? new clientObj[bankAccount.type](response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw clientObj.error(400,
          "InvalidRequestException : account id is missing "
          + "in MerchantServiceHandler : deleteMerchantBankAccount");
      }
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : deleteMerchantBankAccount");
    }
  } catch (err) {
    responseCallBack(err, null);
  }
};

/**
 * @author Francisco Bueno method for updating a Merchant Account-USD CC Consolidated
 */
MerchantServiceHandler.prototype.getMerchantTermsAndConditions = function(id, responseCallBack) {
  try {
    var clientObj = this._PaysafeApiClient;
    if (typeof (responseCallBack) === "function") {
      if (id) {
        var requestObj = new PaysafeRequest(prepareMerchantAccountURI(MERCHANT_TC_PATH, id),
          constants.GET);
        console.log(prepareMerchantAccountURI(MERCHANT_TC_PATH, id))
        clientObj.processRequest(requestObj, null, function(error, response) {
          // response = response ? new clientObj.MerchantAccount(response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw clientObj.error(400,
          "InvalidRequestException : merchant account id is missing "
          + "in MerchantServiceHandler : getMerchantTCAccount");
      }
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : getMerchantTCAccount");
    }
  } catch (err) {
    responseCallBack(err, null);
  }
};

module.exports = MerchantServiceHandler;
