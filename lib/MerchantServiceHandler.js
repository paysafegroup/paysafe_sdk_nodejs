/**
 * author: Francisco Bueno
 */
var paysafeRequest = require('./PaysafeRequest');
var PaysafeMethod = require('./PaysafeMethod');
var Merchant = require("./account/merchant");
var MerchantAccount = require("./account/merchantAccount");
var BusinessOwner = require("./account/businessOwner");
var User = require("./account/user");
var Address = require("./customervault/addresses");
var Terms = require("./account/terms");
var MicroDeposit = require("./account/microdeposit");
var constants = require("./Constants.js");
var error = require("./common/error");

// PATHS
var URI = 'accountmanagement/v1';
var MERCHANT_PATH = '/merchants';
var MERCHANT_ACCOUNT_PATH = '/accounts';
var MERCHANT_NEW_ACCOUNT_PATH = '/accounts?operationMode=consolidated';
var MERCHANT_ADDRESSES_PATH = '/addresses';
var MERCHANT_BO_PATH = '/businessowners';
var MERCHANT_BO_ADD_PATH = '/currentaddresses';
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
function MerchantServiceHandler(api) {
  this._api = api
};

var prepareMerchantURI = function(path, id) {
  return URI + MERCHANT_PATH + SEPERATOR + id + path;
};

var prepareMerchantAccountURI = function(path, id) {
  return URI + MERCHANT_ACCOUNT_PATH + SEPERATOR + id + path;
};

var prepareURI = function(path) {
  return URI + path;
};

/**
 * @author Francisco Bueno method for creating a Merchant
 */
MerchantServiceHandler.prototype.createMerchant = function(merchant, responseCallBack) {
  try {
    if (typeof (responseCallBack) === "function") {
      var requestObj = new PaysafeMethod(prepareURI(MERCHANT_PATH),
        constants.POST);
      paysafeRequest(this._api, requestObj, merchant, function(error, response) {
        response = response ? new Merchant(response) : response;
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
MerchantServiceHandler.prototype.getMerchantAccount = function(responseCallBack) {
  try {
    if (typeof (responseCallBack) === "function") {
      if (this._api.accountNumber) {
        var requestObj = new PaysafeMethod(prepareMerchantAccountURI('', this._api.accountNumber), constants.GET);
        paysafeRequest(this._api, requestObj, null, function(error, response) {
          console.log(response)
          response = response ? new MerchantAccount(response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw error.generate(400,
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

    if (typeof (responseCallBack) === "function") {
      var requestObj = new PaysafeMethod(prepareMerchantURI(MERCHANT_NEW_ACCOUNT_PATH, merchantAccount.id),
        constants.POST);
      paysafeRequest(this._api, requestObj, merchantAccount, function(error, response) {
        response = response ? new MerchantAccount(response) : response;
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
    if (typeof (responseCallBack) === "function") {
      if (merchantAccount && merchantAccount.id) {
        var requestObj = new PaysafeMethod(prepareMerchantAccountURI('', this._api.accountNumber),
          constants.PUT);
        paysafeRequest(this._api, requestObj, merchantAccount, function(error, response) {
          response = response ? new MerchantAccount(response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw error.generate(400,
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
    if (typeof (responseCallBack) === "function") {
      if (businessOwner && businessOwner.id) {
        var requestObj = new PaysafeMethod(prepareURI(MERCHANT_BO_PATH + "/" + businessOwner.id),
          constants.GET);
        paysafeRequest(this._api, requestObj, null, function(error, response) {
          console.log(response)
          response = response ? new BusinessOwner(response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw error.generate(400,
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
    if (typeof (responseCallBack) === "function") {
      var requestObj = new PaysafeMethod(prepareMerchantAccountURI(MERCHANT_NEW_BO_PATH, this._api.accountNumber),
        constants.POST);
      paysafeRequest(this._api, requestObj, businessOwner, function(error, response) {
        console.log(response)
        response = response ? new BusinessOwner(response) : response;
        responseCallBack(error, response);
      });
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
    if (typeof (responseCallBack) === "function") {
      if (businessOwner && businessOwner.id) {
        var requestObj = new PaysafeMethod(prepareURI(MERCHANT_BO_PATH + "/" + businessOwner.id),
          constants.PUT);
        paysafeRequest(this._api, requestObj, businessOwner, function(error, response) {
          console.log(response)
          response = response ? new BusinessOwner(response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw error.generate(400,
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
 * @author Francisco Bueno method for getting a Merchant Business Owner Address
 */
MerchantServiceHandler.prototype.getMerchantBusinessOwnerAddress = function(address, responseCallBack) {
  try {
    if (typeof (responseCallBack) === "function") {
      if (address && address.id) {
        var requestObj = new PaysafeMethod(prepareURI(MERCHANT_BO_ADD_PATH + "/" + address.id),
          constants.GET);
        paysafeRequest(this._api, requestObj, null, function(error, response) {
          response = response ? new Address(response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw error.generate(400,
          "InvalidRequestException : address id is missing "
          + "in MerchantServiceHandler : getMerchantBusinessOwnerAddress");
      }
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : getMerchantBusinessOwnerAddress");
    }
  } catch (err) {
    responseCallBack(err, null);
  }
};

/**
 * @author Francisco Bueno method for creating a Merchant Business Owner Address
 */
MerchantServiceHandler.prototype.createMerchantBusinessOwnerAddress = function(businessOwnerAddress, responseCallBack) {
  try {
    if (typeof (responseCallBack) === "function") {
      if (businessOwnerAddress && businessOwnerAddress.profile && businessOwnerAddress.profile.id) {
        var requestObj = new PaysafeMethod(prepareURI(MERCHANT_BO_PATH + "/" + businessOwnerAddress.profile.id + MERCHANT_BO_ADD_PATH),
          constants.POST);
        paysafeRequest(this._api, requestObj, businessOwnerAddress, function(error, response) {
          console.log(response)
          // response = response ? new BusinessOwner(response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw error.generate(400,
          "InvalidRequestException : business owner id is missing "
          + "in MerchantServiceHandler : createMerchantBusinessOwnerAddress");
      }
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : createMerchantBusinessOwnerAddress");
    }
  } catch (err) {
    responseCallBack(err, null);
  }
};

/**
 * @author Francisco Bueno method for updating a Merchant Business Owner Address
 */
MerchantServiceHandler.prototype.updateMerchantBusinessOwnerAddress = function(address, responseCallBack) {
  try {
    if (typeof (responseCallBack) === "function") {
      if (address && address.id) {
        var requestObj = new PaysafeMethod(prepareURI(MERCHANT_BO_ADD_PATH + "/" + address.id),
          constants.PUT);
        paysafeRequest(this._api, requestObj, address, function(error, response) {
          response = response ? new Address(response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw error.generate(400,
          "InvalidRequestException : address id is missing "
          + "in MerchantServiceHandler : updateMerchantBusinessOwnerAddress");
      }
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : updateMerchantBusinessOwnerAddress");
    }
  } catch (err) {
    responseCallBack(err, null);
  }
};

/**
 * @author Francisco Bueno method for getting a User
 */
MerchantServiceHandler.prototype.getMerchantUser = function(responseCallBack) {
  try {
    if (typeof (responseCallBack) === "function") {
      var requestObj = new PaysafeMethod(prepareMerchantAccountURI(MERCHANT_USERS_PATH, this._api.accountNumber),
        constants.GET);
      paysafeRequest(this._api, requestObj, null, function(error, response) {
        console.log(response)
        response = response ? new User(response) : response;
        responseCallBack(error, response);
      });
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
    if (typeof (responseCallBack) === "function") {
      var requestObj = new PaysafeMethod(prepareMerchantAccountURI(MERCHANT_USERS_PATH, this._api.accountNumber),
        constants.POST);
      paysafeRequest(this._api, requestObj, user, function(error, response) {
        response = response ? new User(response) : response;
        responseCallBack(error, response);
      });
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
MerchantServiceHandler.prototype.activateMerchantAccount = function(responseCallBack) {
  try {
    if (typeof (responseCallBack) === "function") {
      var requestObj = new PaysafeMethod(prepareMerchantAccountURI(MERCHANT_ACTIVATION_PATH, this._api.accountNumber),
        constants.POST);
      paysafeRequest(this._api, requestObj, {}, function(error, response) {
        console.log(response)
        // response = response ? new this._api.Terms(response) : response;
        responseCallBack(error, response);
      });
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
    if (typeof (responseCallBack) === "function") {
      if (address && address.id) {
        var requestObj = new PaysafeMethod(prepareURI(MERCHANT_ADDRESSES_PATH + "/" + address.id),
          constants.GET);
        paysafeRequest(this._api, requestObj, null, function(error, response) {
          response = response ? new Address(response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw error.generate(400,
          "InvalidRequestException : address id is missing "
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
    if (typeof (responseCallBack) === "function") {
      var requestObj = new PaysafeMethod(prepareMerchantAccountURI(MERCHANT_ADDRESSES_PATH, this._api.accountNumber),
        constants.POST);
      paysafeRequest(this._api, requestObj, address, function(error, response) {
        response = response ? new Address(response) : response;
        responseCallBack(error, response);
      });
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
    if (typeof (responseCallBack) === "function") {
      if (address && address.id) {
        delete address.profile;
        var requestObj = new PaysafeMethod(prepareURI(MERCHANT_ADDRESSES_PATH + "/" + address.id),
          constants.PUT);
        paysafeRequest(this._api, requestObj, address, function(error, response) {
          response = response ? new Address(response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw error.generate(400,
          "InvalidRequestException : address id is missing "
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
    if (typeof (responseCallBack) === "function") {
      if (bankAccount && bankAccount.id) {
        var requestObj = new PaysafeMethod(prepareURI(MERCHANT_BANK_ACC_PATH[bankAccount.type] + "/" + bankAccount.id),
          constants.GET);
        paysafeRequest(this._api, requestObj, null, function(error, response) {
          console.log(response)
          // response = response ? new this._api[bankAccount.type](response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw error.generate(400,
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
    if (typeof (responseCallBack) === "function") {
      var requestObj = new PaysafeMethod(prepareMerchantAccountURI(MERCHANT_BANK_ACC_PATH[bankAccount.type], this._api.accountNumber),
        constants.POST);
      paysafeRequest(this._api, requestObj, bankAccount, function(error, response) {
        console.log(response)
        // response = response ? new this._api[bankAccount.type](response) : response;
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
    if (typeof (responseCallBack) === "function") {
      if (bankAccount && bankAccount.id) {
        var requestObj = new PaysafeMethod(prepareURI(MERCHANT_BANK_ACC_PATH[bankAccount.type] + "/" + bankAccount.id),
          constants.PUT);
        paysafeRequest(this._api, requestObj, bankAccount, function(error, response) {
          console.log(response)
          // response = response ? new this._api[bankAccount.type](response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw error.generate(400,
          "InvalidRequestException : bankaccount id is missing "
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
    if (typeof (responseCallBack) === "function") {
      if (bankAccount && bankAccount.id) {
        var requestObj = new PaysafeMethod(prepareURI(MERCHANT_BANK_ACC_PATH[bankAccount.type] + "/" + bankAccount.id),
          constants.DELETE);
        paysafeRequest(this._api, requestObj, bankAccount, function(error, response) {
          console.log(response)
          response = response ? new this._api[bankAccount.type](response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw error.generate(400,
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
    if (typeof (responseCallBack) === "function") {
      var requestObj = new PaysafeMethod(prepareURI(MERCHANT_MICRODEPOSIT_PATH + SEPERATOR + id),
        constants.GET);
      paysafeRequest(this._api, requestObj, null, function(error, response) {
        console.log(response)
        // response = response ? new MicroDeposit(response) : response;
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
    if (typeof (responseCallBack) === "function") {
      var requestObj = new PaysafeMethod(prepareURI(MERCHANT_BANK_ACC_PATH[bankAccount.type] + SEPERATOR + bankAccount.id + MERCHANT_MICRODEPOSIT_PATH),
        constants.POST);
      paysafeRequest(this._api, requestObj, {}, function(error, response) {
        console.log(response)
        response = response ? new MicroDeposit(response) : response;
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
    if (typeof (responseCallBack) === "function") {
      var requestObj = new PaysafeMethod(prepareURI(MERCHANT_MICRODEPOSIT_PATH + SEPERATOR + microdeposit.id + MERCHANT_MICRODEPOSIT_VALIDATE_PATH),
        constants.POST);
      paysafeRequest(this._api, requestObj, microdeposit, function(error, response) {
        response = response ? new MicroDeposit(response) : response;
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
    if (typeof (responseCallBack) === "function") {
      if (term.id) {
        var requestObj = new PaysafeMethod(prepareURI(MERCHANT_TC_PATH + "/" + term.id),
          constants.GET);
        paysafeRequest(this._api, requestObj, null, function(error, response) {
          response = response ? new Terms(response) : response;
          responseCallBack(error, response);
        });
      } else {
        throw error.generate(400,
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
MerchantServiceHandler.prototype.getMerchantTermsAndConditions = function(responseCallBack) {
  try {
    if (typeof (responseCallBack) === "function") {
      var requestObj = new PaysafeMethod(prepareMerchantAccountURI(MERCHANT_TC_PATH, this._api.accountNumber),
        constants.GET);
      paysafeRequest(this._api, requestObj, null, function(error, response) {
        // response = response ? new Terms(response) : response;
        responseCallBack(error, response);
      });
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
    if (typeof (responseCallBack) === "function") {
      var requestObj = new PaysafeMethod(prepareMerchantAccountURI(MERCHANT_TC_PATH, this._api.accountNumber),
        constants.POST);
      paysafeRequest(this._api, requestObj, { version: data.version }, function(error, response) {
        response = response ? new Terms(response) : response;
        responseCallBack(error, response);
      });
    } else {
      console.error("Please provide the responseCallBack function "
        + "in MerchantServiceHandler : acceptMerchantTCAccount");
    }
  } catch (err) {
    responseCallBack(err, null);
  }
};

module.exports = MerchantServiceHandler;
