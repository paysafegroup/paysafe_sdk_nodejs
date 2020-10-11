import { PaysafeAPIDetails } from './api-details'
import { Authorization } from './cardpayments/authorization'
import { AuthorizationReversal } from './cardpayments/authorizationreversal'
import { Refund } from './cardpayments/refund'
import { Settlement } from './cardpayments/settlement'
import { Verification } from './cardpayments/verification'
import { PaysafeError } from './common/error'
import * as constants from './constants'
import { PaysafeMethod } from './PaysafeMethod'
import { request as paysafeRequest } from './PaysafeRequest'

// PATH
const HEALTH_BEAT_URL = 'cardpayments/monitor'
const URI = 'cardpayments/v1'
const AUTH_PATH = '/auths/'
const SETTLEMENTS = '/settlements'
const REFUNDS = '/refunds'
const REVERSAUTH = '/voidauths/'
const VERIFICATION = '/verifications'

const SEARCHMERACHANTREFERENCE = {
  'AUTHORIZATION': '/auths/',
  'SETTLEMENTS': '/settlements',
  'REFUND': '/refunds',
  'AUTHORIZATIONREVERSAL': '/voidauths/',
  'VERIFICATION': '/verifications',
}

function prepareURI(path, id) {
  return URI + '/accounts/' + id + path
}

export class CardServiceHandler {
  constructor(private api: PaysafeAPIDetails) {
  }

  monitor(responseCallBack) {
    try {
      const requestObj = new PaysafeMethod(HEALTH_BEAT_URL, constants.GET)
      paysafeRequest(this.api, requestObj, null, responseCallBack)
    } catch (err) {
      if (typeof (responseCallBack) === 'function') {
        responseCallBack(err, null)
      }
    }
  }

  /**
   * @author Atul.Patil method for creating an Authorization
   */

  authorize(auth: Authorization, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        const requestObj = new PaysafeMethod(prepareURI(AUTH_PATH, this.api.accountNumber), constants.POST)
        paysafeRequest(this.api, requestObj, auth, (error, response) => {
          response = response ? new Authorization(response) : response
          responseCallBack(error, response)
        })
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in CardServiceHandler : authorize')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * @author Atul.Patil method for Complete a Held Authorization
   */

  approveHeldAuth(auth: Authorization, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (auth && auth.id) {
          const authId = auth.id
          delete auth.id
          auth.status = 'COMPLETED'
          const requestObj = new PaysafeMethod(prepareURI(AUTH_PATH + authId, this.api.accountNumber),
            constants.PUT)
          paysafeRequest(this.api, requestObj, auth, (error, response) => {
            response = response ? new Authorization(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : Auth id is missing '
            + 'in CardServiceHandler : approveHeldAuth')
        }
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in CardServiceHandler : approveHeldAuth')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * @author Atul.Patil method for Cancel a Held Authorization
   */

  cancelHeldAuth(auth: Authorization, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (auth && auth.id) {
          const authId = auth.id
          delete auth.id
          auth.status = 'CANCELLED'
          const requestObj = new PaysafeMethod(prepareURI(AUTH_PATH + authId, this.api.accountNumber),
            constants.PUT)
          paysafeRequest(this.api, requestObj, auth, (error, response) => {
            response = response ? new Authorization(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : Auth id is missing '
            + 'in CardServiceHandler : cancelHeldAuth')
        }
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in CardServiceHandler : cancelHeldAuth')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * @author Atul.Patil method for reverse an Authorization
   */

  reverseAuth(authReversal: AuthorizationReversal, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (authReversal && authReversal.authorization
          && authReversal.authorization.id) {
          const authId = authReversal.authorization.id
          delete authReversal.authorization
          const requestObj = new PaysafeMethod(prepareURI(AUTH_PATH + authId + REVERSAUTH, this.api.accountNumber),
            constants.POST)
          paysafeRequest(this.api, requestObj, authReversal, (error, response) => {
            response = response ? new AuthorizationReversal(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : auth id is missing '
            + 'in CardServiceHandler : reverseAuth')
        }
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in CardServiceHandler : reverseAuth')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * @author Atul.Patil method for settle an Authorization.
   */

  settlement(settle: Settlement, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (settle && settle.authorization && settle.authorization.id) {
          const authId = settle.authorization.id
          delete settle.authorization
          const requestObj = new PaysafeMethod(prepareURI(AUTH_PATH + authId + SETTLEMENTS, this.api.accountNumber),
            constants.POST)
          paysafeRequest(this.api, requestObj, settle, (error, response) => {
            response = response ? new Settlement(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : Auth id is missing '
            + 'in CardServiceHandler : settlement')
        }
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in CardServiceHandler : settlement')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * @author Atul.Patil method for cancel a settlement.
   */

  cancelSettlement(settle: Settlement, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (settle && settle.id) {
          const settlementId = settle.id
          delete settle.id
          settle.status = 'CANCELLED'
          const requestObj = new PaysafeMethod(prepareURI(SETTLEMENTS + '/' + settlementId, this.api.accountNumber),
            constants.PUT)
          paysafeRequest(this.api, requestObj, settle, (error, response) => {
            response = response ? new Settlement(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : settlement id is missing '
            + 'in CardServiceHandler : cancelSettlement')
        }
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in CardServiceHandler : cancelSettlement')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * @author Atul.Patil method for refund an Amount.
   */

  refund(refund, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (refund && refund.getSettlements() && refund.getSettlements().getId()) {
          const settleId = refund.getSettlements().getId()
          delete refund.settlements
          const requestObj = new PaysafeMethod(prepareURI(SETTLEMENTS + '/' + settleId + REFUNDS, this.api.accountNumber),
            constants.POST)
          paysafeRequest(this.api, requestObj, refund, (error, response) => {
            response = response ? new Refund(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : settlement id is missing '
            + 'in CardServiceHandler : refund')
        }
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in CardServiceHandler : refund')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * @author Atul.Patil method for cancel a refund.
   */

  cancelRefund(refund: Refund, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (refund && refund.id) {
          const refundId = refund.id
          delete refund.id
          refund.status = 'CANCELLED'
          const requestObj = new PaysafeMethod(prepareURI(REFUNDS + '/' + refundId, this.api.accountNumber),
            constants.PUT)
          paysafeRequest(this.api, requestObj, refund, (error, response) => {
            response = response ? new Refund(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : settlement id is missing '
            + 'in CardServiceHandler : cancelRefund')
        }
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in CardServiceHandler : cancelRefund')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * @author Atul.Patil method for get an Authorization
   */

  getAuth(auth: Authorization, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (auth && auth.id) {
          const authId = auth.id
          delete auth.id
          const PaysafeRequestObj = new PaysafeMethod(prepareURI(AUTH_PATH + authId, this.api.accountNumber),
            constants.GET)
          paysafeRequest(this.api, PaysafeRequestObj, null, (error, response) => {
            response = response ? new Authorization(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : Auth id is missing '
            + 'in CardServiceHandler : getAuth')
        }
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in CardServiceHandler : getAuth')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * @author Atul.Patil method for getting Reverse authorization details
   */

  getAuthReversal(authReversal: AuthorizationReversal, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (authReversal && authReversal.id) {
          const authId = authReversal.id
          delete authReversal.id
          const requestObj = new PaysafeMethod(prepareURI(REVERSAUTH + authId, this.api.accountNumber),
            constants.GET)
          paysafeRequest(this.api, requestObj, null, (error, response) => {
            response = response ? new AuthorizationReversal(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : Reverse Auth id is missing in'
            + ' CardServiceHandler : getAuthReversal')
        }
      } else {
        console.error('Please provide the responseCallBack function in'
          + ' CardServiceHandler : getAuthReversal')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * @author Atul.Patil common method for create search by merchant ref. number
   */

  searchMerchantRefCommon(merchObj, pagination) {
    let toInclude = ''
    if (merchObj && merchObj.merchantRefNum) {
      toInclude = 'merchantRefNum=' + merchObj.merchantRefNum
    }
    if (pagination) {
      if (pagination.limit) {
        toInclude += '&limit=' + pagination.limit
      }
      if (pagination.offset) {
        toInclude += '&offset=' + pagination.offset
      }
      if (pagination.startDate) {
        toInclude += '&startDate=' + pagination.startDate
      }
      if (pagination.endDate) {
        toInclude += '&endDate=' + pagination.endDate
      }
    }
    return toInclude
  }

  /**
   * @author Atul.Patil method for search authorization, reverse Auth, settlements
   *         and refund using merchant ref number. classObj.constructor.name : get
   *         the name of constructor obj : with name of class with initial letter
   *         capital
   */

  searchByMerchantRef(classObj: Authorization | AuthorizationReversal | Settlement | Refund, pagination, responseCallBack) {
    try {
      const constructor = classObj.constructor as typeof Authorization | typeof AuthorizationReversal |
        typeof Settlement | typeof Refund
      if (typeof (responseCallBack) === 'function') {
        if (classObj && classObj.merchantRefNum) {
          const upperClassName = SEARCHMERACHANTREFERENCE[constructor.name.toUpperCase()]
          if (upperClassName) {
            const toInclude = this.searchMerchantRefCommon(classObj, pagination)
            const requestObj = new PaysafeMethod(prepareURI(upperClassName + '?' + toInclude, this.api.accountNumber),
              constants.GET)
            paysafeRequest(this.api, requestObj, null, (error, response) => {
              response = response ? new constructor(response) : response
              responseCallBack(error, response)
            })
          } else {
            throw PaysafeError.generate(400, 'InvalidClassException : '
              + 'Please provide valid class name for search')
          }
        } else {
          throw PaysafeError.generate(400, 'InvalidRequestException : '
            + 'Please provide merchant ref number for search')
        }
      } else {
        console.error('Please provide the responseCallBack function in'
          + ' CardServiceHandler : searchByMerchantRef')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * @author Atul.Patil method for getting a settlement.
   */

  getSettlement(settle: Settlement, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (settle && settle.id) {
          const settlementId = settle.id
          delete settle.id
          const requestObj = new PaysafeMethod(prepareURI(SETTLEMENTS + '/' + settlementId, this.api.accountNumber),
            constants.GET)
          paysafeRequest(this.api, requestObj, null, (error, response) => {
            response = response ? new Settlement(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : settlement id is missing in'
            + ' CardServiceHandler : getSettlement')
        }
      } else {
        console.error('Please provide the responseCallBack function in'
          + ' CardServiceHandler : getSettlement')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * @author Atul.Patil method for getting refund details.
   */

  getRefund(refund: Refund, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (refund && refund.id) {
          const refundId = refund.id
          delete refund.id
          const requestObj = new PaysafeMethod(prepareURI(REFUNDS + '/' + refundId, this.api.accountNumber),
            constants.GET)
          paysafeRequest(this.api, requestObj, null, (error, response) => {
            response = response ? new Refund(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : refund id is missing in'
            + ' CardServiceHandler : CancelRefund')
        }
      } else {
        console.error('Please provide the responseCallBack function in'
          + ' CardServiceHandler : CancelRefund')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * @author Atul.Patil method for verifing card and billing details.
   */

  verify(verification: Verification, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        const requestObj = new PaysafeMethod(prepareURI(VERIFICATION, this.api.accountNumber),
          constants.POST)
        paysafeRequest(this.api, requestObj, verification, (error, response) => {
          response = response ? new Verification(response) : response
          responseCallBack(error, response)
        })
      } else {
        console.error('Please provide the responseCallBack function in'
          + ' CardServiceHandler : verify')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * @author Atul.Patil method for get verification.
   */

  getVerification(verification: Verification, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (verification && verification.id) {
          const verificationId = verification.id
          delete verification.id
          const requestObj = new PaysafeMethod(prepareURI(VERIFICATION + '/' + verificationId, this.api.accountNumber),
            constants.GET)
          paysafeRequest(this.api, requestObj, null, (error, response) => {
            response = response ? new Verification(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : verification id is missing in'
            + ' CardServiceHandler : getVerification')
        }
      } else {
        console.error('Please provide the responseCallBack function in'
          + ' CardServiceHandler : getVerification')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }
}

