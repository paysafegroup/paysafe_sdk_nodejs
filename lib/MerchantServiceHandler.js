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
var MERCHANT_BO_PATH = '/businessowners';
var MERCHANT_NEW_BO_PATH = '/businessowners?operationMode=consolidated';
var MERCHANT_BANK_PATH = '/bankaccounts';
var MERCHANT_MICRODEPOSIT_PATH = '/microdeposits';
var MERCHANT_MICRODEPOSIT_VALIDATE_PATH = '/validate';
var MERCHANT_TC_PATH = '/termsandconditions';
var MERCHANT_ACTIVATION_PATH = '/activation';
var MERCHANT_USERS_PATH = '/users';

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
 * @author Francisco Bueno method for getting a Merchant Business Owner
 */
MerchantServiceHandler.prototype.getMerchantBusinessOwner = function(businessOwner, responseCallBack) {
  try {
    var clientObj = this._PaysafeApiClient;
    if (typeof (responseCallBack) === "function") {
      if (businessOwner && businessOwner.id) {
        var requestObj = new PaysafeRequest(prepareURI(MERCHANT_BO_PATH + "/" + businessOwner.id, clientObj),
          constants.GET);
        clientObj.processRequest(requestObj, null, function(error, response) {
          console.log(response)
          response = response ? new clientObj.BusinessOwner(response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw clientObj.error(400,
          "InvalidRequestException : business owner id is missing "
          + "in MerchantServiceHandler : getMerchantBusinessOwner");
      }
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : getMerchantBusinessOwner");
    }
  } catch (err) {
    responseCallBack(err, null);
  }
};

/**
 * @author Francisco Bueno method for creating a Merchant Business Owner - Consolidated
 */
MerchantServiceHandler.prototype.createMerchantBusinessOwner = function(businessOwner, responseCallBack) {
  try {
    var clientObj = this._PaysafeApiClient;
    if (typeof (responseCallBack) === "function") {
      if (businessOwner && businessOwner.profile && businessOwner.profile.id) {
        var profile = businessOwner.profile;
        delete businessOwner.profile;
        var requestObj = new PaysafeRequest(prepareMerchantAccountURI(MERCHANT_NEW_BO_PATH, profile.id),
          constants.POST);
        clientObj.processRequest(requestObj, businessOwner, function(error, response) {
          console.log(response)
          response = response ? new clientObj.BusinessOwner(response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw clientObj.error(400,
          "InvalidRequestException : account id is missing "
          + "in MerchantServiceHandler : createMerchantBusinessOwner");
      }
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : createMerchantBusinessOwner");
    }
  } catch (err) {
    responseCallBack(err, null);
  }
};

/**
 * @author Francisco Bueno method for updating a Merchant Business Owner - Consolidated
 */
MerchantServiceHandler.prototype.updateMerchantBusinessOwner = function(businessOwner, responseCallBack) {
  try {
    var clientObj = this._PaysafeApiClient;
    if (typeof (responseCallBack) === "function") {
      if (businessOwner && businessOwner.id) {
        var profile = businessOwner.profile;
        delete businessOwner.profile;
        var requestObj = new PaysafeRequest(prepareURI(MERCHANT_BO_PATH + "/" + businessOwner.id, clientObj),
          constants.PUT);
        clientObj.processRequest(requestObj, businessOwner, function(error, response) {
          console.log(response)
          response = response ? new clientObj.BusinessOwner(response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw clientObj.error(400,
          "InvalidRequestException : business owner id is missing "
          + "in MerchantServiceHandler : createMerchantBusinessOwner");
      }
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : createMerchantBusinessOwner");
    }
  } catch (err) {
    responseCallBack(err, null);
  }
};

/**
 * @author Francisco Bueno method for getting a User
 */
MerchantServiceHandler.prototype.getMerchantUser = function(id, responseCallBack) {
  try {
    var clientObj = this._PaysafeApiClient;
    if (typeof (responseCallBack) === "function") {
      if (id) {
        var requestObj = new PaysafeRequest(prepareMerchantAccountURI(MERCHANT_USERS_PATH, id),
          constants.GET);
        clientObj.processRequest(requestObj, null, function(error, response) {
          console.log(response)
          response = response ? new clientObj.User(response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw clientObj.error(400,
          "InvalidRequestException : account id is missing "
          + "in MerchantServiceHandler : getMerchantUser");
      }
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : getMerchantUser");
    }
  } catch (err) {
    responseCallBack(err, null);
  }
};

/**
 * @author Francisco Bueno method for creating a User
 */
MerchantServiceHandler.prototype.createMerchantUser = function(user, responseCallBack) {
  try {
    var clientObj = this._PaysafeApiClient;
    if (typeof (responseCallBack) === "function") {
      if (user && user.profile && user.profile.id) {
        var profile = user.profile;
        delete user.profile;
        console.log(prepareMerchantAccountURI(MERCHANT_USERS_PATH, profile.id))
        var requestObj = new PaysafeRequest(prepareMerchantAccountURI(MERCHANT_USERS_PATH, profile.id),
          constants.POST);
        clientObj.processRequest(requestObj, user, function(error, response) {
          console.log(response)
          response = response ? new clientObj.User(response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw clientObj.error(400,
          "InvalidRequestException : account id is missing "
          + "in MerchantServiceHandler : createMerchantUser");
      }
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : createMerchantUser");
    }
  } catch (err) {
    responseCallBack(err, null);
  }
};

/**
 * @author Francisco Bueno method for activating Merchant Account
 */
MerchantServiceHandler.prototype.activateMerchantAccount = function(id, responseCallBack) {
  try {
    var clientObj = this._PaysafeApiClient;
    if (typeof (responseCallBack) === "function") {
      if (id) {
        var requestObj = new PaysafeRequest(prepareMerchantAccountURI(MERCHANT_ACTIVATION_PATH, id),
          constants.POST);
        console.log(prepareMerchantAccountURI(MERCHANT_ACTIVATION_PATH, id))
        clientObj.processRequest(requestObj, {}, function(error, response) {
          console.log(response)
          // response = response ? new clientObj.Terms(response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw clientObj.error(400,
          "InvalidRequestException : merchant account id is missing "
          + "in MerchantServiceHandler : acceptMerchantTCAccount");
      }
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : acceptMerchantTCAccount");
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
        var requestObj = new PaysafeRequest(prepareURI(MERCHANT_ADDRESSES_PATH + "/" + address.id, clientObj),
          constants.GET);
        clientObj.processRequest(requestObj, null, function(error, response) {
          response = response ? new clientObj.Address(response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw clientObj.error(400,
          "InvalidRequestException : account id is missing "
          + "in MerchantServiceHandler : getMerchantAddress");
      }
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : getMerchantAddress");
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
          + "in MerchantServiceHandler : createMerchantAccountAddress");
      }
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : createMerchantAccountAddress");
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
          + "in MerchantServiceHandler : updateMerchantAccountAddress");
      }
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : updateMerchantAccountAddress");
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
          response = response ? new clientObj[bankAccount.type](response) : response;
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
 * @author Francisco Bueno method for getting a Merchant Microdeposit
 */
MerchantServiceHandler.prototype.getMerchantMicroDeposit = function(id, responseCallBack) {
  try {
    var clientObj = this._PaysafeApiClient;
    if (typeof (responseCallBack) === "function") {
      var requestObj = new PaysafeRequest(prepareURI(MERCHANT_MICRODEPOSIT_PATH + SEPERATOR + id, clientObj),
        constants.GET);
      console.log(prepareURI(MERCHANT_MICRODEPOSIT_PATH + SEPERATOR + id, clientObj))
      clientObj.processRequest(requestObj, null, function(error, response) {
        console.log(response)
        response = response ? new clientObj.MicroDeposit(response) : response;
        responseCallBack(error, response);
      });
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : getMerchantMicroDeposit");
    }
  } catch (err) {
    responseCallBack(err, null);
  }
};

/**
 * @author Francisco Bueno method for creating a Merchant Microdeposit
 */
MerchantServiceHandler.prototype.createMerchantMicroDeposit = function(bankAccount, responseCallBack) {
  try {
    var clientObj = this._PaysafeApiClient;
    if (typeof (responseCallBack) === "function") {
      var requestObj = new PaysafeRequest(prepareURI(MERCHANT_BANK_ACC_PATH[bankAccount.type] + SEPERATOR + bankAccount.id + MERCHANT_MICRODEPOSIT_PATH, clientObj),
        constants.POST);
      console.log(prepareURI(MERCHANT_BANK_ACC_PATH[bankAccount.type] + SEPERATOR + bankAccount.id + MERCHANT_MICRODEPOSIT_PATH, clientObj))
      clientObj.processRequest(requestObj, {}, function(error, response) {
        console.log(response)
        // response = response ? new clientObj[bankAccount.type](response) : response;
        responseCallBack(error, response);
      });
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : createMerchantMicroDeposit");
    }
  } catch (err) {
    responseCallBack(err, null);
  }
};

/**
 * @author Francisco Bueno method for validating a Merchant Microdeposit
 */
MerchantServiceHandler.prototype.validateMerchantMicroDeposit = function(microdeposit, responseCallBack) {
  try {
    var clientObj = this._PaysafeApiClient;
    if (typeof (responseCallBack) === "function") {
      var requestObj = new PaysafeRequest(prepareURI(MERCHANT_MICRODEPOSIT_PATH + SEPERATOR + microdeposit.id + MERCHANT_MICRODEPOSIT_VALIDATE_PATH, clientObj),
        constants.POST);
      console.log(prepareURI(MERCHANT_MICRODEPOSIT_PATH + SEPERATOR + microdeposit.id + MERCHANT_MICRODEPOSIT_VALIDATE_PATH, clientObj))
      clientObj.processRequest(requestObj, microdeposit, function(error, response) {
        console.log(response)
        response = response ? new clientObj.MicroDeposit(response) : response;
        responseCallBack(error, response);
      });
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : getMerchantMicroDeposit");
    }
  } catch (err) {
    responseCallBack(err, null);
  }
};

/**
 * @author Francisco Bueno method for looking up Merchant Terms and Conditions Acceptance Request
 */
MerchantServiceHandler.prototype.getMerchantAcceptanceTermsAndConditions = function(term, responseCallBack) {
  try {
    var clientObj = this._PaysafeApiClient;
    if (typeof (responseCallBack) === "function") {
      if (term.id) {
        var requestObj = new PaysafeRequest(prepareURI(MERCHANT_TC_PATH + "/" + term.id, clientObj),
          constants.GET);
        console.log(prepareURI(MERCHANT_TC_PATH + "/" + term.id, clientObj))
        clientObj.processRequest(requestObj, null, function(error, response) {
          response = response ? new clientObj.Terms(response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw clientObj.error(400,
          "InvalidRequestException : merchant account id is missing "
          + "in MerchantServiceHandler : getMerchantAcceptanceTCAccount");
      }
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : getMerchantAcceptanceTCAccount");
    }
  } catch (err) {
    responseCallBack(err, null);
  }
};

/**
 * @author Francisco Bueno method for looking up Merchant Terms and Conditions as HTML
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

/**
 * @author Francisco Bueno method for accepting Merchant Terms and Conditions
 */
MerchantServiceHandler.prototype.acceptMerchantTermsAndConditions = function(data, responseCallBack) {
  try {
    var clientObj = this._PaysafeApiClient;
    if (typeof (responseCallBack) === "function") {
      if (data.id) {
        var requestObj = new PaysafeRequest(prepareMerchantAccountURI(MERCHANT_TC_PATH, data.id),
          constants.POST);
        console.log(prepareMerchantAccountURI(MERCHANT_TC_PATH, data.id))
        clientObj.processRequest(requestObj, { version: data.version }, function(error, response) {
          response = response ? new clientObj.Terms(response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw clientObj.error(400,
          "InvalidRequestException : merchant account id is missing "
          + "in MerchantServiceHandler : acceptMerchantTCAccount");
      }
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : acceptMerchantTCAccount");
    }
  } catch (err) {
    responseCallBack(err, null);
  }
};

module.exports = MerchantServiceHandler;
