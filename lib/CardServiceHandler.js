/**
 * author: Anup W.
 */
var paysafeRequest = require('./PaysafeMethod');
var PaysafeMethod = require('./PaysafeMethod');
var Authorization = require("./cardpayments/authorization");
var AuthorizationReversal = require("./cardpayments/authorizationreversal");
var Settlements = require("./cardpayments/settlements");
var Refund = require("./cardpayments/refund");
var Verification = require("./cardpayments/verification");

// PATH
var PaysafeRequest = require("./PaysafeRequest");
var constants = require("./Constants.js");
var HEALTH_BEAT_URL = 'cardpayments/monitor';
var URI = 'cardpayments/v1';
var AUTH_PATH = '/auths/';
var SETTLEMENTS = '/settlements';
var REFUNDS = '/refunds';
var REVERSAUTH = '/voidauths/';
var VERIFICATION = '/verifications';

var SEARCHMERACHANTREFERENCE = {
    "AUTHORIZATION" : "/auths/",
    "SETTLEMENTS" : "/settlements",
    "REFUND" : "/refunds",
    "AUTHORIZATIONREVERSAL" : "/voidauths/",
    "VERIFICATION" : "/verifications"
};
var STATUS = {
    "RECEIVED" : "RECEIVED",
    "PENDING" : "PENDING",
    "PROCESSING" : "PROCESSING",
    "COMPLETED" : "COMPLETED",
    "FAILED" : "FAILED",
    "CANCELLED" : "CANCELLED"
};

/**
 * @author Atul.Patil method for initializing CardServiceHandler
 */

var CardServiceHandler = function(api) {
    this._api = api
};

var prepareURI = function(path, id) {
    return URI + "/accounts/" + id + path;
};

var capitaliseFirstLetter = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * @author Atul.Patil method for monitor card api
 */

CardServiceHandler.prototype.monitor = function(responseCallBack) {
    try {
        var requestObj = new PaysafeMethod(HEALTH_BEAT_URL, constants.GET);
        paysafeRequest(requestObj, null, responseCallBack);
    } catch (err) {
        if (typeof (responseCallBack) === "function") {
            responseCallBack(err, null);
        }
    }
};

/**
 * @author Atul.Patil method for creating an Authorization
 */

CardServiceHandler.prototype.authorize = function(auth, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            var requestObj = new PaysafeMethod(prepareURI(AUTH_PATH, this._api.accountNumber),
                constants.POST);
            paysafeRequest(requestObj, auth, function(error, response) {
                response = response ? new Authorization(response) : response;
                responseCallBack(error, response);
            });
        } else {
            console.error("Please provide the responseCallBack function "
                + "in CardServiceHandler : authorize");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

/**
 * @author Atul.Patil method for Complete a Held Authorization
 */

CardServiceHandler.prototype.approveHeldAuth = function(auth, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (auth && auth.id) {
                var authId = auth.id;
                delete auth.id;
                auth.status = STATUS.COMPLETED;
                var requestObj = new PaysafeMethod(prepareURI(AUTH_PATH + authId, this._api.accountNumber),
                    constants.PUT);
                paysafeRequest(requestObj, auth, function(error, response) {
                    response = response ? new Authorization(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : Auth id is missing "
                    + "in CardServiceHandler : approveHeldAuth");
            }
        } else {
            console.error("Please provide the responseCallBack function "
                + "in CardServiceHandler : approveHeldAuth");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

/**
 * @author Atul.Patil method for Cancel a Held Authorization
 */

CardServiceHandler.prototype.cancelHeldAuth = function(auth, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (auth && auth.id) {
                var authId = auth.id;
                delete auth.id;
                auth.status = STATUS.CANCELLED;
                var requestObj = new PaysafeMethod(prepareURI(AUTH_PATH + authId, this._api.accountNumber),
                    constants.PUT);
                paysafeRequest(requestObj, auth, function(error, response) {
                    response = response ? new Authorization(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : Auth id is missing "
                    + "in CardServiceHandler : cancelHeldAuth");
            }
        } else {
            console.error("Please provide the responseCallBack function "
                + "in CardServiceHandler : cancelHeldAuth");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

/**
 * @author Atul.Patil method for reverse an Authorization
 */

CardServiceHandler.prototype.reverseAuth = function(authReversal, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (authReversal && authReversal.authorization
                && authReversal.authorization.id) {
                var authId = authReversal.authorization.id;
                delete authReversal.authorization;
                var requestObj = new PaysafeMethod(prepareURI(AUTH_PATH + authId + REVERSAUTH, this._api.accountNumber),
                    constants.POST);
                paysafeRequest(requestObj, authReversal, function(error, response) {
                    response = response ? new AuthorizationReversal(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : auth id is missing "
                    + "in CardServiceHandler : reverseAuth");
            }
        } else {
            console.error("Please provide the responseCallBack function "
                + "in CardServiceHandler : reverseAuth");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

/**
 * @author Atul.Patil method for settle an Authorization.
 */

CardServiceHandler.prototype.settlement = function(settle, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (settle && settle.authorization && settle.authorization.id) {
                var authId = settle.authorization.id;
                delete settle.authorization;
                var requestObj = new PaysafeMethod(prepareURI(AUTH_PATH + authId + SETTLEMENTS, this._api.accountNumber),
                    constants.POST);
                paysafeRequest(requestObj, settle, function(error, response) {
                    response = response ? new Settlements(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : Auth id is missing "
                    + "in CardServiceHandler : settlement");
            }
        } else {
            console.error("Please provide the responseCallBack function "
                + "in CardServiceHandler : settlement");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

/**
 * @author Atul.Patil method for cancel a settlement.
 */

CardServiceHandler.prototype.cancelSettlement = function(settle, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (settle && settle.id) {
                var settlementId = settle.id;
                delete settle.id;
                settle.status = STATUS.CANCELLED;
                var requestObj = new PaysafeMethod(prepareURI(SETTLEMENTS + "/" + settlementId, this._api.accountNumber),
                    constants.PUT);
                paysafeRequest(requestObj, settle, function(error, response) {
                    response = response ? new Settlements(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : settlement id is missing "
                    + "in CardServiceHandler : cancelSettlement");
            }
        } else {
            console.error("Please provide the responseCallBack function "
                + "in CardServiceHandler : cancelSettlement");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

/**
 * @author Atul.Patil method for refund an Amount.
 */

CardServiceHandler.prototype.refund = function(refund, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (refund && refund.getSettlements() && refund.getSettlements().getId()) {
                var settleId = refund.getSettlements().getId();
                delete refund.settlements;
                var requestObj = new PaysafeMethod(prepareURI(SETTLEMENTS + "/" + settleId + REFUNDS, this._api.accountNumber),
                    constants.POST);
                paysafeRequest(requestObj, refund, function(error, response) {
                    response = response ? new Refund(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : settlement id is missing "
                    + "in CardServiceHandler : refund");
            }
        } else {
            console.error("Please provide the responseCallBack function "
                + "in CardServiceHandler : refund");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

/**
 * @author Atul.Patil method for cancel a refund.
 */

CardServiceHandler.prototype.cancelRefund = function(refund, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (refund && refund.id) {
                var refundId = refund.id;
                delete refund.id;
                refund.status = STATUS.CANCELLED;
                var requestObj = new PaysafeMethod(prepareURI(REFUNDS + "/" + refundId, this._api.accountNumber),
                    constants.PUT);
                paysafeRequest(requestObj, refund, function(error, response) {
                    response = response ? new Refund(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : settlement id is missing "
                    + "in CardServiceHandler : cancelRefund");
            }
        } else {
            console.error("Please provide the responseCallBack function "
                + "in CardServiceHandler : cancelRefund");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

/**
 * @author Atul.Patil method for get an Authorization
 */

CardServiceHandler.prototype.getAuth = function(auth, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (auth && auth.id) {
                var authId = auth.id;
                delete auth.id;
                var PaysafeRequestObj = new PaysafeMethod(prepareURI(AUTH_PATH + authId, this._api.accountNumber),
                    constants.GET);
                paysafeRequest(PaysafeRequestObj, null, function(error,
                                                                 response) {
                    response = response ? new Authorization(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : Auth id is missing "
                    + "in CardServiceHandler : getAuth");
            }
        } else {
            console.error("Please provide the responseCallBack function "
                + "in CardServiceHandler : getAuth");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

/**
 * @author Atul.Patil method for getting Reverse authorization details
 */

CardServiceHandler.prototype.getAuthReversal = function(authReversal, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (authReversal && authReversal.id) {
                var authId = authReversal.id;
                delete authReversal.id;
                var requestObj = new PaysafeMethod(prepareURI(REVERSAUTH + authId, this._api.accountNumber),
                    constants.GET);
                paysafeRequest(requestObj, null, function(error, response) {
                    response = response ? new AuthorizationReversal(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : Reverse Auth id is missing in"
                    + " CardServiceHandler : getAuthReversal");
            }
        } else {
            console.error("Please provide the responseCallBack function in"
                + " CardServiceHandler : getAuthReversal");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

/**
 * @author Atul.Patil common method for create search by merchant ref. number
 */

CardServiceHandler.prototype.searchMerchantRefCommon = function(merchObj, pagination) {
    var toInclude = "";
    if (merchObj && merchObj.merchantRefNum) {
        toInclude = "merchantRefNum=" + merchObj.merchantRefNum;
    }
    if (pagination) {
        if (pagination.limit) {
            toInclude += "&limit=" + pagination.limit;
        }
        if (pagination.offset) {
            toInclude += "&offset=" + pagination.offset;
        }
        if (pagination.startDate) {
            toInclude += "&startDate=" + pagination.startDate;
        }
        if (pagination.endDate) {
            toInclude += "&endDate=" + pagination.endDate;
        }
    }
    return toInclude;
};

/**
 * @author Atul.Patil method for search authorization, reverse Auth, settlements
 *         and refund using merchant ref number. classObj.constructor.name : get
 *         the name of cunstructor obj : with name of class with initial letter
 *         capital
 */

CardServiceHandler.prototype.searchByMerchantRef = function(classObj, pagination, responseCallBack) {
    try {
        var className = capitaliseFirstLetter(classObj.constructor.name);
        if (typeof (responseCallBack) === "function") {
            if (classObj && classObj.merchantRefNum) {
                var upperClassName = SEARCHMERACHANTREFERENCE[className.toUpperCase()];
                if (upperClassName) {
                    var toInclude = this.searchMerchantRefCommon(classObj, pagination);
                    var requestObj = new PaysafeMethod(prepareURI(upperClassName + "?" + toInclude, this._api.accountNumber),
                        constants.GET);
                    paysafeRequest(requestObj, null, function(error, response) {
                        response = response ? new this._api[className](response) : response;
                        responseCallBack(error, response);
                    });
                } else {
                    throw error.generate(400, "InvalidClassException : "
                        + "Please provide valid class name for search");
                }
            } else {
                throw error.generate(400, "InvalidRequestException : "
                    + "Please provide merchant ref number for search");
            }
        } else {
            console.error("Please provide the responseCallBack function in"
                + " CardServiceHandler : searchByMerchantRef");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

/**
 * @author Atul.Patil method for getting a settlement.
 */

CardServiceHandler.prototype.getSettlement = function(settle, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (settle && settle.id) {
                var settlementId = settle.id;
                delete settle.id;
                var requestObj = new PaysafeMethod(prepareURI(SETTLEMENTS + "/" + settlementId, this._api.accountNumber),
                    constants.GET);
                paysafeRequest(requestObj, null, function(error, response) {
                    response = response ? new Settlements(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : settlement id is missing in"
                    + " CardServiceHandler : getSettlement");
            }
        } else {
            console.error("Please provide the responseCallBack function in"
                + " CardServiceHandler : getSettlement");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

/**
 * @author Atul.Patil method for getting refund details.
 */

CardServiceHandler.prototype.getRefund = function(refund, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (refund && refund.id) {
                var refundId = refund.id;
                delete refund.id;
                var requestObj = new PaysafeMethod(prepareURI(REFUNDS + "/" + refundId, this._api.accountNumber),
                    constants.GET);
                paysafeRequest(requestObj, null, function(error, response) {
                    response = response ? new Refund(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : refund id is missing in"
                    + " CardServiceHandler : CancelRefund");
            }
        } else {
            console.error("Please provide the responseCallBack function in"
                + " CardServiceHandler : CancelRefund");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

/**
 * @author Atul.Patil method for verifing card and billing details.
 */

CardServiceHandler.prototype.verify = function(verification, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            var requestObj = new PaysafeMethod(prepareURI(VERIFICATION, this._api.accountNumber),
                constants.POST);
            paysafeRequest(requestObj, verification, function(error, response) {
                response = response ? new Verification(response) : response;
                responseCallBack(error, response);
            });
        } else {
            console.error("Please provide the responseCallBack function in"
                + " CardServiceHandler : verify");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

/**
 * @author Atul.Patil method for get verification.
 */

CardServiceHandler.prototype.getVerification = function(verification, responseCallBack) {
    try {
        if (typeof (responseCallBack) === "function") {
            if (verification && verification.id) {
                var verificationId = verification.id;
                delete verification.id;
                var requestObj = new PaysafeMethod(prepareURI(VERIFICATION + "/" + verificationId, this._api.accountNumber),
                    constants.GET);
                paysafeRequest(requestObj, null, function(error, response) {
                    response = response ? new Verification(response) : response;
                    responseCallBack(error, response);
                });
            } else {
                throw error.generate(400,
                    "InvalidRequestException : verification id is missing in"
                    + " CardServiceHandler : getVerification");
            }
        } else {
            console.error("Please provide the responseCallBack function in"
                + " CardServiceHandler : getVerification");
        }
    } catch (err) {
        responseCallBack(err, null);
    }
};

module.exports = CardServiceHandler;
