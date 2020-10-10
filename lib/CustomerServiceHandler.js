/*
* Copyright (c) 2016 Paysafe
*
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
* associated documentation files (the "Software"), to deal in the Software without restriction,
* including without limitation the rights to use, copy, modify, merge, publish, distribute,
* sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all copies or
* substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
* NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
* DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
/**
 * author: Atul.Patil.
 */
var paysafeRequest = require('./PaysafeRequest');
var PaysafeMethod = require('./PaysafeMethod');
var Profiles = require("./customervault/profiles");
var Address = require("./customervault/addresses");
var Card = require("./cardpayments/card");
var ACHBankAccounts = require("./customervault/ACHBankAccounts");
var BACSBankAccounts = require("./customervault/BACSBankAccounts");
var EFTBankAccounts = require("./customervault/EFTBankAccounts");
var SEPABankAccounts = require("./customervault/SEPABankAccounts");
var Mandates = require("./customervault/mandates");
var constants = require("./Constants.js");
var error = require("./common/error");

// PATHS
var URI = 'customervault/v1';
var HEALTH_BEAT_URL = 'customervault/monitor';
var PROFILE_PATH = '/profiles/';
var ADDRESS_PATH = '/addresses/';
var CARD_PATH = '/cards/';
var ACH_BANK_ACC_PATH = '/achbankaccounts';
var BACS_BANK_ACC_PATH = '/bacsbankaccounts';
var SEPA_BANK_ACC_PATH = '/sepabankaccounts';
var EFT_BANK_ACC_PATH = '/eftbankaccounts';
var MANDATES = '/mandates/';
var SEPERATOR = '/';

/**
 * @author Atul.Patil method for initialization of constructor
 *         CustomerServiceHandler.
 */
function CustomerServiceHandler(api) {
    this._api = api
};

var prepareURI = function(path) {
    return URI + path;
};

/**
 * @author Atul.Patil method for monitor customer api
 */
CustomerServiceHandler.prototype.monitor = function(responseCallBack) {
    try {
        var requestObj = new PaysafeMethod(HEALTH_BEAT_URL, constants.GET);
        paysafeRequest(this._api, requestObj, null, responseCallBack);
    } catch (err) {
        if (typeof (responseCallBack) === "function") {
            responseCallBack(err, null);
        }
    }
};
/**
 * @author Atul.Patil method for Create Profile.
 */

CustomerServiceHandler.prototype.createCustomerProfile = function(profile, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH), constants.POST);
            paysafeRequest(this._api, requestObj, profile, function(error, response) {
                console.log(response)
                response = response ? new Profiles(response) : response;
                responseCallBack(error, response);
            });
        } else {
            console.error("Please provide the responseCallBack function "
                + "in CustomerServiceHandler : createCustomerProfile");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

/**
 * @author Atul.Patil method for get profile details.
 */
CustomerServiceHandler.prototype.getCustomerProfile = function(profile, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (profile && profile.id) {
                var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id), constants.GET);
                paysafeRequest(this._api, requestObj, null, function(error, response) {
                    response = response ? new Profiles(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing "
                    + "in CustomerServiceHandler : getCustomerProfile");
            }
        } else {
            console.error("Please provide the responseCallBack function"
                + " in CustomerServiceHandler : getCustomerProfile");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};
/**
 * @author Atul.Patil method for delete profile.
 */
CustomerServiceHandler.prototype.deleteCustomerProfile = function(profile, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (profile && profile.id) {
                var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id), constants.DELETE);
                paysafeRequest(this._api, requestObj, null, function(error, response) {
                    response = response ? new Profiles(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing"
                    + " in CustomerServiceHandler : deleteCustomerProfile");
            }
        } else {
            console.error("Please provide the responseCallBack function"
                + " in CustomerServiceHandler : deleteCustomerProfile");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};
/**
 * @author Atul.Patil method for update a profile.
 */
CustomerServiceHandler.prototype.updateCustomerProfile = function(profile, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (profile && profile.id) {
                var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id), constants.PUT);
                paysafeRequest(this._api, requestObj, profile, function(error, response) {
                    response = response ? new Profiles(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing "
                    + "in CustomerServiceHandler : updateCustomerProfile");
            }
        } else {
            console.error("Please provide the responseCallBack function"
                + " in CustomerServiceHandler : updateCustomerProfile");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};
/**
 * @author Atul.Patil method for create an address.
 */
CustomerServiceHandler.prototype.createCustomerAddress = function(address, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (address && address.profile && address.profile.id) {
                var profile = address.profile;
                delete address.profile;
                var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + ADDRESS_PATH),
                    constants.POST);
                paysafeRequest(this._api, requestObj, address, function(error, response) {
                    response = response ? new Address(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing "
                    + "in CustomerServiceHandler : createCustomerAddress");
            }
        } else {
            console.error("Please provide the responseCallBack"
                + " in function CustomerServiceHandler : createCustomerAddress");
        }
    } catch (err) {
        console.log(err);
        responseCallBack(err, null);
    }
};
/**
 * @author Atul.Patil method for get an address.
 */
CustomerServiceHandler.prototype.getCustomerAddress = function(address, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (address && address.profile && address.profile.id) {
                var profile = address.profile;
                delete address.profile;
                var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + ADDRESS_PATH + address.id),
                    constants.GET);
                paysafeRequest(this._api, requestObj, null, function(error, response) {
                    response = response ? new Address(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing "
                    + "in CustomerServiceHandler : getCustomerAddress");
            }
        } else {
            console.error("Please provide the responseCallBack function"
                + " in CustomerServiceHandler : getCustomerAddress");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};
/**
 * @author Atul.Patil method for delete an address.
 */
CustomerServiceHandler.prototype.deleteCustomerAddress = function(address, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (address && address.profile && address.profile.id) {
                var profile = address.profile;
                if (address && address.id) {
                    delete address.profile;
                    var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + ADDRESS_PATH + address.id),
                        constants.DELETE);
                    paysafeRequest(this._api, requestObj, null, function(error, response) {
                        response = response ? new Address(response) : response;
                        responseCallBack(error, response);
                    });
                } else {
                    throw error.generate(400,
                        "InvalidRequestException : address id is missing "
                        + " in CustomerServiceHandler : deleteCustomerAddress");
                }
            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing"
                    + " in CustomerServiceHandler : deleteCustomerAddress");
            }
        } else {
            console.error("Please provide the responseCallBack function "
                + "in CustomerServiceHandler : deleteCustomerAddress");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};
/**
 * @author Atul.Patil method for update an address.
 */
CustomerServiceHandler.prototype.updateCustomerAddress = function(address, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (address && address.profile && address.profile.id) {
                var profile = address.profile;
                if (address && address.id) {
                    delete address.profile;
                    var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + ADDRESS_PATH + address.id),
                        constants.PUT);
                    paysafeRequest(this._api, requestObj, address, function(error, response) {
                        response = response ? new Address(response) : response;
                        responseCallBack(error, response);
                    });
                } else {
                    throw error.generate(400,
                        "InvalidRequestException : address id is missing "
                        + "in CustomerServiceHandler : updateCustomerAddress");
                }
            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing "
                    + "in CustomerServiceHandler : updateCustomerAddress");
            }
        } else {
            console.error("Please provide the responseCallBack function"
                + " in CustomerServiceHandler : updateCustomerAddress");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};
/**
 * @author Atul.Patil method for looking profile details using subcomponents
 *         address and card.
 */
CustomerServiceHandler.prototype.lookUpProfileBySubComponent = function(
    responseCallBack, profile, inAddress, inCards, inachbankaccounts, ineftbankaccounts) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (profile && profile.id) {
                var toInclude = "";
                if (inAddress) {
                    toInclude = "addresses";
                }
                if (inCards) {
                    if (toInclude.length > 0) {
                        toInclude += ",";
                        toInclude += "cards";
                    } else {
                        toInclude = "cards";
                    }
                }
                if (inachbankaccounts) {
                    if (toInclude.length > 0) {
                        toInclude += ",";
                        toInclude += "achbankaccounts";
                    } else {
                        toInclude = "achbankaccounts";
                    }
                }
                if (ineftbankaccounts) {
                    if (toInclude.length > 0) {
                        toInclude += ",";
                        toInclude += "eftbankaccounts";
                    } else {
                        toInclude = "eftbankaccounts";
                    }
                }
                var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + "?" + "fields=" + toInclude),
                    constants.GET);
                paysafeRequest(this._api, requestObj, null, function(error, response) {
                    response = response ? new Profiles(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing"
                    + " in CustomerServiceHandler : lookUpProfileBySubComponent");
            }
        } else {
            console.error("Please provide the responseCallBack function"
                + " in CustomerServiceHandler : lookUpProfileBySubComponent");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};
/**
 * @author Atul.Patil method for create a card.
 */
CustomerServiceHandler.prototype.createCustomerCard = function(card, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (card && card.profile && card.profile.id) {
                var profile = card.profile;
                delete card.profile;
                var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + CARD_PATH), constants.POST);
                paysafeRequest(this._api, requestObj, card, function(error, response) {
                    response = response ? new Card(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing "
                    + "in CustomerServiceHandler : createCustomerCard");
            }
        } else {
            console.error("Please provide the responseCallBack function "
                + "in CustomerServiceHandler : createCustomerCard");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};
/**
 * @author Atul.Patil method for get a card details.
 */
CustomerServiceHandler.prototype.getCustomerCard = function(card, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (card && card.profile && card.profile.id) {
                var profile = card.profile;
                if (card && card.id) {
                    delete card.profile;
                    var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + CARD_PATH + card.id),
                        constants.GET);
                    paysafeRequest(this._api, requestObj, null, function(error, response) {
                        console.log(response)
                        response = response ? new Card(response) : response;
                        responseCallBack(error, response);
                    });
                } else {
                    throw error.generate(400,
                        "InvalidRequestException : card id is missing "
                        + "in CustomerServiceHandler : getCustomerCard");
                }
            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing "
                    + "in CustomerServiceHandler : getCustomerCard");
            }
        } else {
            console.error("Please provide the responseCallBack function "
                + "in CustomerServiceHandler : getCustomerCard");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};
/**
 * @author Atul.Patil method for delete a card.
 */
CustomerServiceHandler.prototype.deleteCustomerCard = function(card, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (card && card.profile && card.profile.id) {
                var profile = card.profile;
                if (card && card.id) {
                    delete card.profile;
                    var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + CARD_PATH + card.id),
                        constants.DELETE);
                    paysafeRequest(this._api, requestObj, null, function(error, response) {
                        response = response ? new Card(response) : response;
                        responseCallBack(error, response);
                    });
                } else {
                    throw error.generate(400,
                        "InvalidRequestException : card id is missing "
                        + "in CustomerServiceHandler : deleteCustomerCard");
                }
            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing"
                    + " in CustomerServiceHandler : deleteCustomerCard");
            }
        } else {
            console.error("Please provide the responseCallBack function "
                + "in CustomerServiceHandler : deleteCustomerCard");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};
/**
 * @author Atul.Patil method for update a card.
 */
CustomerServiceHandler.prototype.updateCustomerCard = function(card, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (card && card.profile && card.profile.id) {
                var profile = card.profile;
                if (card && card.id) {
                    delete card.profile;
                    var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + CARD_PATH + card.id),
                        constants.PUT);
                    paysafeRequest(this._api, requestObj, card, function(error, response) {
                        response = response ? new Card(response) : response;
                        responseCallBack(error, response);
                    });
                } else {
                    throw error.generate(400,
                        "InvalidRequestException : card id is missing "
                        + "in CustomerServiceHandler : updateCustomerCard");
                }
            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing "
                    + "in CustomerServiceHandler : updateCustomerCard");
            }
        } else {
            console.error("Please provide the responseCallBack function "
                + "in CustomerServiceHandler : updateCustomerCard");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};


/**
 * Method for Create ACH Bank Account.
 *
 */
CustomerServiceHandler.prototype.createACHBankAccount = function(achbankAccount, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (achbankAccount && achbankAccount.profile && achbankAccount.profile.id) {
                var profile = achbankAccount.profile;
                delete achbankAccount.profile;
                var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH+profile.id + ACH_BANK_ACC_PATH),
                    constants.POST);
                paysafeRequest(this._api, requestObj, achbankAccount, function(error, response) {
                    response = response ? new ACHBankAccounts(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing "
                    + "in CustomerServiceHandler : createachbankAccount");
            }
        } else {
            console.error("Please provide the responseCallBack"
                + " in function CustomerServiceHandler : createachbankAccount");
        }
    } catch (err) {
        console.log(err);
        responseCallBack(err, null);
    }
};

/**
 * Method to Look Up an ACH Bank Account.
 *
 */

CustomerServiceHandler.prototype.getACHBankAccount = function(achBankAccount, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (achBankAccount && achBankAccount.id && achBankAccount.profile.id) {
                var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + achBankAccount.profile.id
                    + ACH_BANK_ACC_PATH + "/" + achBankAccount.id), constants.GET);
                paysafeRequest(this._api, requestObj, null, function(error, response) {
                    response = response ? new ACHBankAccounts(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing "
                    + "in CustomerServiceHandler : getachBankAccount");
            }
        } else {
            console.error("Please provide the responseCallBack function"
                + " in CustomerServiceHandler : getachBankAccount");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

/**
 * Method to Update an ACH Bank Account.
 *
 */

CustomerServiceHandler.prototype.updateACHBankAccount = function(achBankAccount, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (achBankAccount && achBankAccount.profile.id) {
                var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH+achBankAccount.profile.id
                    + ACH_BANK_ACC_PATH + "/" + achBankAccount.id), constants.PUT);
                paysafeRequest(this._api, requestObj, achBankAccount, function(error, response) {
                    response = response ? new ACHBankAccounts(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing "
                    + "in CustomerServiceHandler : updateachBankAccount");
            }
        } else {
            console.error("Please provide the responseCallBack function"
                + " in CustomerServiceHandler : updateachBankAccount");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

/**
 * Method to Delete an ACH Bank Account.
 *
 */

CustomerServiceHandler.prototype.deleteACHBankAccount = function(achBankAccount, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (achBankAccount && achBankAccount.id && achBankAccount.profile.id) {
                var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + achBankAccount.profile.id
                    + ACH_BANK_ACC_PATH + "/" + achBankAccount.id), constants.DELETE);
                paysafeRequest(this._api, requestObj, null, function(error, response) {
                    response = response ? new ACHBankAccounts(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing "
                    + "in CustomerServiceHandler : deleteachBankAccount");
            }
        } else {
            console.error("Please provide the responseCallBack function"
                + " in CustomerServiceHandler : deleteachBankAccount");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

/*----------------------------BACS_BANK_ACOUNT-----------------------*/
/**
 * Method to Create BACS Bank Account.
 *
 */
CustomerServiceHandler.prototype.createBACSBankAccount = function(bacsbankAccount, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (bacsbankAccount && bacsbankAccount.profile && bacsbankAccount.profile.id) {
                var profile = bacsbankAccount.profile;
                delete bacsbankAccount.profile;
                var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH+profile.id + BACS_BANK_ACC_PATH),
                    constants.POST);
                paysafeRequest(this._api, requestObj, bacsbankAccount, function(error, response) {
                    response = response ? new BACSBankAccounts(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing "
                    + "in CustomerServiceHandler : createbacsbankAccount");
            }
        } else {
            console.error("Please provide the responseCallBack"
                + " in function CustomerServiceHandler : createbacsbankAccount");
        }
    } catch (err) {
        console.log(err);
        responseCallBack(err, null);
    }
};

/**
 * Method to Look Up an BACS Bank Account.
 *
 */

CustomerServiceHandler.prototype.getBACSBankAccount = function(bacsBankAccount, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (bacsBankAccount && bacsBankAccount.id && bacsBankAccount.profile.id) {
                var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + bacsBankAccount.profile.id
                    + BACS_BANK_ACC_PATH + "/" + bacsBankAccount.id), constants.GET);
                paysafeRequest(this._api, requestObj, null, function(error, response) {
                    response = response ? new BACSBankAccounts(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing "
                    + "in CustomerServiceHandler : bacsBankAccount");
            }
        } else {
            console.error("Please provide the responseCallBack function"
                + " in CustomerServiceHandler : bacsBankAccount");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

/**
 * Method to Update an BACS Bank Account.
 *
 */

CustomerServiceHandler.prototype.updateBACSBankAccount = function(bacsBankAccount, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (bacsBankAccount && bacsBankAccount.profile.id) {
                var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + bacsBankAccount.profile.id
                    + BACS_BANK_ACC_PATH + "/" + bacsBankAccount.id), constants.PUT);
                paysafeRequest(this._api, requestObj, bacsBankAccount, function(error, response) {
                    response = response ? new BACSBankAccounts(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing "
                    + "in CustomerServiceHandler : updatebacsBankAccount");
            }
        } else {
            console.error("Please provide the responseCallBack function"
                + " in CustomerServiceHandler : updatebacsBankAccount");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

/**
 * Method to Delete an BACS Bank Account.
 *
 */

CustomerServiceHandler.prototype.deleteBACSBankAccount = function(bacsBankAccount, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (bacsBankAccount && bacsBankAccount.id && bacsBankAccount.profile.id) {
                var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + bacsBankAccount.profile.id
                    + BACS_BANK_ACC_PATH + "/" + bacsBankAccount.id), constants.DELETE);
                paysafeRequest(this._api, requestObj, null, function(error, response) {
                    response = response ? new BACSBankAccounts(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing "
                    + "in CustomerServiceHandler : deletebacsBankAccount");
            }
        } else {
            console.error("Please provide the responseCallBack function"
                + " in CustomerServiceHandler : deletebacsBankAccount");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

/*----------------------------EFT_BANK_ACCOUNT---------------------------*/

/**
 * Method to Create an EFT Bank Account.
 *
 */

CustomerServiceHandler.prototype.createEFTBankAccount = function(eftbankAccount, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (eftbankAccount && eftbankAccount.profile && eftbankAccount.profile.id) {
                var profile = eftbankAccount.profile;
                delete eftbankAccount.profile;
                var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + EFT_BANK_ACC_PATH),
                    constants.POST);
                paysafeRequest(this._api, requestObj, eftbankAccount, function(error, response) {
                    response = response ? new EFTBankAccounts(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing "
                    + "in CustomerServiceHandler : createeftbankAccount");
            }
        } else {
            console.error("Please provide the responseCallBack"
                + " in function CustomerServiceHandler : createeftbankAccount");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

/**
 * Method to Lookup an EFT Bank Account.
 *
 */


CustomerServiceHandler.prototype.getEFTBankAccount = function(eftBankAccount, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (eftBankAccount && eftBankAccount.id && eftBankAccount.profile.id) {
                var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + eftBankAccount.profile.id
                    + EFT_BANK_ACC_PATH + "/" + eftBankAccount.id), constants.GET);
                paysafeRequest(this._api, requestObj, null, function(error, response) {
                    response = response ? new EFTBankAccounts(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing "
                    + "in CustomerServiceHandler : eftBankAccount");
            }
        } else {
            console.error("Please provide the responseCallBack function"
                + " in CustomerServiceHandler : eftBankAccount");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

/**
 * Method to Update an EFT Bank Account.
 *
 */

CustomerServiceHandler.prototype.updateEFTBankAccount = function(eftBankAccount, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (eftBankAccount && eftBankAccount.profile.id) {
                var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + eftBankAccount.profile.id
                    + EFT_BANK_ACC_PATH + "/" + eftBankAccount.id), constants.PUT);
                paysafeRequest(this._api, requestObj, eftBankAccount, function(error, response) {
                    response = response ? new EFTBankAccounts(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing "
                    + "in CustomerServiceHandler : updateeftBankAccount");
            }
        } else {
            console.error("Please provide the responseCallBack function"
                + " in CustomerServiceHandler : updateeftBankAccount");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

/**
 * Method to delete an EFT Bank Account.
 *
 */

CustomerServiceHandler.prototype.deleteEFTBankAccount = function(eftBankAccount, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (eftBankAccount && eftBankAccount.id && eftBankAccount.profile.id) {
                var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + eftBankAccount.profile.id
                    + EFT_BANK_ACC_PATH + "/" + eftBankAccount.id), constants.DELETE);
                paysafeRequest(this._api, requestObj, null, function(error, response) {
                    response = response ? new EFTBankAccounts(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing "
                    + "in CustomerServiceHandler : deleteeftBankAccount");
            }
        } else {
            console.error("Please provide the responseCallBack function"
                + " in CustomerServiceHandler : deleteeftBankAccount");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};


/*---------------------------------SEPA_BANK_ACCOUNT------------------------------*/
/**
 * Method to Create an SEPA Bank Account.
 *
 */

CustomerServiceHandler.prototype.createSEPABankAccount = function(sepabankaccount, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (sepabankaccount && sepabankaccount.profile && sepabankaccount.profile.id) {
                var profile = sepabankaccount.profile;
                delete sepabankaccount.profile;
                var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + SEPA_BANK_ACC_PATH), constants.POST);
                paysafeRequest(this._api, requestObj, sepabankaccount, function(error, response) {
                    response = response ? new SEPABankAccounts(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing "
                    + "in CustomerServiceHandler : createsepabankAccount");
            }
        } else {
            console.error("Please provide the responseCallBack"
                + " in function CustomerServiceHandler : createsepabankAccount");
        }
    } catch (err) {
        console.log(err);
        responseCallBack(err, null);
    }
};

/**
 * Method to Lookup SEPA Bank Account.
 *
 */

CustomerServiceHandler.prototype.getSEPABankAccount = function(sepaBankAccount, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (sepaBankAccount && sepaBankAccount.id && sepaBankAccount.profile.id) {
                var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + sepaBankAccount.profile.id
                    + SEPA_BANK_ACC_PATH + "/" + sepaBankAccount.id), constants.GET);
                paysafeRequest(this._api, requestObj, null, function(error, response) {;
                    response = response ? new SEPABankAccounts(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing "
                    + "in CustomerServiceHandler : sepaBankAccount");
            }
        } else {
            console.error("Please provide the responseCallBack function"
                + " in CustomerServiceHandler : sepaBankAccount");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

/**
 * Method to Update SEPA Bank Account.
 *
 */

CustomerServiceHandler.prototype.updateSEPABankAccount = function(sepaBankAccount, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (sepaBankAccount && sepaBankAccount.profile && sepaBankAccount.profile.id) {
                var profile = sepaBankAccount.profile;
                var sepaid = sepaBankAccount.id;
                delete sepaBankAccount.profile;
                delete sepaBankAccount.id;

                var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH+profile.id + SEPA_BANK_ACC_PATH + "/"+sepaid),
                    constants.PUT);

                paysafeRequest(this._api, requestObj, sepaBankAccount, function(error, response) {
                    response = response ? new SEPABankAccounts(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing "
                    + "in CustomerServiceHandler : updatesepaBankAccount");
            }
        } else {
            console.error("Please provide the responseCallBack function"
                + " in CustomerServiceHandler : updatesepaBankAccount");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

/**
 * Method to Delete SEPA Bank Account.
 *
 */

CustomerServiceHandler.prototype.deleteSEPABankAccount = function(sepaBankAccount, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (sepaBankAccount && sepaBankAccount.id && sepaBankAccount.profile.id) {
                var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + sepaBankAccount.profile.id
                    + SEPA_BANK_ACC_PATH + "/" + sepaBankAccount.id), constants.DELETE);
                paysafeRequest(this._api, requestObj, null, function(error, response) {
                    response = response ? new SEPABankAccounts(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing "
                    + "in CustomerServiceHandler : deletesepaBankAccount");
            }
        } else {
            console.error("Please provide the responseCallBack function"
                + " in CustomerServiceHandler : deletesepaBankAccount");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

var capitaliseFirstLetter = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

CustomerServiceHandler.prototype.searchMerchantRefCommon = function(merchObj) {
    var toInclude = "";
    if (merchObj && merchObj.profiles && merchObj.sepabankaccounts) {
        toInclude = PROFILE_PATH + merchObj.profiles.id + SEPA_BANK_ACC_PATH + SEPERATOR+merchObj.sepabankaccounts.id + MANDATES;
    }else if(merchObj && merchObj.profiles && merchObj.bacsbankaccounts) {
        toInclude = PROFILE_PATH + merchObj.profiles.id + BACS_BANK_ACC_PATH + SEPERATOR+merchObj.bacsbankaccounts.id + MANDATES;
    }
    return toInclude;
};

/**
 * Method to create Mandates.
 *
 */

CustomerServiceHandler.prototype.createMandates = function(mandates, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (mandates && mandates.profiles) {
                var toInclude = this.searchMerchantRefCommon(mandates);
                if(mandates.sepabankaccounts){
                    delete mandates.sepabankaccounts;
                    delete mandates.profiles;
                }else if(mandates.bacsbankaccounts){
                    delete mandates.bacsbankaccounts;
                    delete mandates.profiles;
                }
                var requestObj = new PaysafeMethod(prepareURI(toInclude), constants.POST);
                paysafeRequest(this._api, requestObj, mandates, function(error, response) {
                    response = response ? new Mandates(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing "
                    + "in CustomerServiceHandler : create_mandates_sepa_bank");
            }

        } else {
            console.error("Please provide the responseCallBack function "
                + "in CustomerServiceHandler : create_mandates_sepa_bank");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

/*CustomerServiceHandler.prototype.create_mandates_bacs_bank = function(mandates, responseCallBack) {
	try {
		if (typeof (responseCallBack) === "function") {

			if (mandates && mandates.profiles && mandates.bacsbankaccounts) {
				var profile = mandates.profiles;
				delete mandates.profiles;

				var bacsbankaccounts = mandates.bacsbankaccounts;
				delete mandates.bacsbankaccounts;

				var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.getId() +
				BACS_BANK_ACC_PATH+bacsbankaccounts.getId() + MANDATES), constants.POST);
				paysafeRequest(this._api, requestObj, mandates, function(error, response) {
                    response = response ? new Mandates(response) : response;
                    responseCallBack(error, response);
                });

			} else {
				throw error.generate(400,
						"InvalidRequestException : profile id is missing "
								+ "in CustomerServiceHandler : create_mandates_bacs_bank");
			}

		} else {
			console.error("Please provide the responseCallBack function "
					+ "in CustomerServiceHandler : create_mandates_bacs_bank");
		}
	} catch (err) {
		console.log(err);
		responseCallBack(err, null);
	}
};*/


/**
 * Method to Lookup Mandates.
 *
 */

CustomerServiceHandler.prototype.lookupMandates = function(mandates, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {

            if (mandates && mandates.profiles && mandates.profiles.id) {
                var profile = mandates.profiles;
                delete mandates.profiles;

                var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.getId() + MANDATES+mandates.getId()),
                    constants.GET);
                paysafeRequest(this._api, requestObj, profile, function(error, response) {
                    response = response ? new Mandates(response) : response;
                    responseCallBack(error, response);
                });

            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing "
                    + "in CustomerServiceHandler : lookup_mandates");
            }

        } else {
            console.error("Please provide the responseCallBack function "
                + "in CustomerServiceHandler : createBACSMandates");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

/**
 * Method to Update Mandates.
 *
 */

CustomerServiceHandler.prototype.updateMandates = function(mandates, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {

            if (mandates && mandates.profiles && mandates.profiles.id) {
                var profile = mandates.profiles;
                delete mandates.profiles;

                var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.getId() + MANDATES+mandates.getId()),
                    constants.PUT);
                paysafeRequest(this._api, requestObj, mandates, function(error, response) {
                    response = response ? new Mandates(response) : response;
                    responseCallBack(error, response);
                });

            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing "
                    + "in CustomerServiceHandler : update_mandates");
            }

        } else {
            console.error("Please provide the responseCallBack function "
                + "in CustomerServiceHandler : update_mandates");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

/**
 * Method to Delete Mandates.
 *
 */

CustomerServiceHandler.prototype.deleteMandates = function(mandates, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {

            if (mandates && mandates.profiles && mandates.profiles.id) {
                var profile = mandates.profiles;
                delete mandates.profiles;

                var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.getId() + MANDATES+mandates.getId()),
                    constants.DELETE);
                paysafeRequest(this._api, requestObj, profile, function(error, response) {
                    response = response ? new Mandates(response) : response;
                    responseCallBack(error, response);
                });

            } else {
                throw error.generate(400,
                    "InvalidRequestException : profile id is missing "
                    + "in CustomerServiceHandler : delete_mandates");
            }

        } else {
            console.error("Please provide the responseCallBack function "
                + "in CustomerServiceHandler : delete_mandates");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};




module.exports = CustomerServiceHandler;
