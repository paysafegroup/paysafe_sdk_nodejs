import { Authorization } from './cardpayments/authorization'
import { AuthorizationReversal } from './cardpayments/authorizationreversal'
import { Pagination } from './cardpayments/pagination'
import { Refund } from './cardpayments/refund'
import { Settlement } from './cardpayments/settlement'
import { Verification } from './cardpayments/verification'
import * as constants from './constants'
import { GenericServiceHandler } from './generic-service-handler'
import { PaysafeMethod } from './PaysafeMethod'

type MerchantRefType = Authorization | AuthorizationReversal | Settlement | Refund

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

export class CardServiceHandler extends GenericServiceHandler {
  async monitor() {
    const requestObj = new PaysafeMethod(HEALTH_BEAT_URL, constants.GET)
    return this.request(requestObj)
  }

  /**
   * method for creating an Authorization
   */
  async authorize(auth: Authorization): Promise<Authorization> {
    const requestObj = new PaysafeMethod(prepareURI(AUTH_PATH, this.api.accountNumber), constants.POST)
    const response = this.request(requestObj, auth)
    return new Authorization(response)
  }

  /**
   * method for Complete a Held Authorization
   */
  async approveHeldAuth(auth: Authorization): Promise<Authorization> {
    if (auth && auth.id) {
      const authId = auth.id
      delete auth.id
      auth.status = 'COMPLETED'
      const requestObj = new PaysafeMethod(prepareURI(AUTH_PATH + authId, this.api.accountNumber),
        constants.PUT)
      const response = this.request(requestObj, auth)
      return new Authorization(response)
    } else {
      throw this.exception('Auth id is missing in CardServiceHandler.approveHeldAuth')
    }
  }

  /**
   * method for Cancel a Held Authorization
   */
  async cancelHeldAuth(auth: Authorization): Promise<Authorization> {
    if (auth && auth.id) {
      const authId = auth.id
      delete auth.id
      auth.status = 'CANCELLED'
      const requestObj = new PaysafeMethod(prepareURI(AUTH_PATH + authId, this.api.accountNumber),
        constants.PUT)
      const response = this.request(requestObj, auth)
      return new Authorization(response)
    } else {
      throw this.exception('Auth id is missing in CardServiceHandler.cancelHeldAuth')
    }
  }

  /**
   * method for reverse an Authorization
   */
  async reverseAuth(authReversal: AuthorizationReversal): Promise<AuthorizationReversal> {
    if (authReversal && authReversal.authorization
      && authReversal.authorization.id) {
      const authId = authReversal.authorization.id
      delete authReversal.authorization
      const requestObj = new PaysafeMethod(prepareURI(AUTH_PATH + authId + REVERSAUTH, this.api.accountNumber),
        constants.POST)
      const response = this.request(requestObj, authReversal)
      return new AuthorizationReversal(response)
    } else {
      throw this.exception('auth id is missing in CardServiceHandler.reverseAuth')
    }
  }

  /**
   * method for settle an Authorization.
   */
  async settlement(settle: Settlement): Promise<Settlement> {
    if (settle && settle.authorization && settle.authorization.id) {
      const authId = settle.authorization.id
      delete settle.authorization
      const requestObj = new PaysafeMethod(prepareURI(AUTH_PATH + authId + SETTLEMENTS, this.api.accountNumber),
        constants.POST)
      const response = this.request(requestObj, settle)
      return new Settlement(response)
    } else {
      throw this.exception('Auth id is missing in CardServiceHandler.settlement')
    }
  }

  /**
   * method for cancel a settlement.
   */
  async cancelSettlement(settle: Settlement): Promise<Settlement> {
    if (settle && settle.id) {
      const settlementId = settle.id
      delete settle.id
      settle.status = 'CANCELLED'
      const requestObj = new PaysafeMethod(prepareURI(SETTLEMENTS + '/' + settlementId, this.api.accountNumber),
        constants.PUT)
      const response = this.request(requestObj, settle)
      return new Settlement(response)
    } else {
      throw this.exception('settlement id is missing in CardServiceHandler.cancelSettlement')
    }
  }

  /**
   * method for refund an Amount.
   */
  async refund(refund: Refund): Promise<Refund> {
    const settlement = refund.getSettlements()
    if (settlement && settlement.getId()) {
      const settleId = settlement.getId()
      delete refund.settlements
      const requestObj = new PaysafeMethod(prepareURI(SETTLEMENTS + '/' + settleId + REFUNDS, this.api.accountNumber),
        constants.POST)
      const response = this.request(requestObj, refund)
      return new Refund(response)
    } else {
      throw this.exception('settlement id is missing in CardServiceHandler.refund')
    }
  }

  /**
   * method for cancel a refund.
   */
  async cancelRefund(refund: Refund): Promise<Refund> {
    if (refund && refund.id) {
      const refundId = refund.id
      delete refund.id
      refund.status = 'CANCELLED'
      const requestObj = new PaysafeMethod(prepareURI(REFUNDS + '/' + refundId, this.api.accountNumber),
        constants.PUT)
      const response = this.request(requestObj, refund)
      return new Refund(response)
    } else {
      throw this.exception('settlement id is missing in CardServiceHandler.cancelRefund')
    }
  }

  /**
   * method for get an Authorization
   */
  async getAuth(auth: Authorization): Promise<Authorization> {
    if (auth && auth.id) {
      const authId = auth.id
      delete auth.id
      const PaysafeRequestObj = new PaysafeMethod(prepareURI(AUTH_PATH + authId, this.api.accountNumber),
        constants.GET)
      const response = this.request(PaysafeRequestObj, null)
      return new Authorization(response)
    } else {
      throw this.exception('Auth id is missing in CardServiceHandler.getAuth')
    }
  }

  /**
   * method for getting Reverse authorization details
   */
  async getAuthReversal(authReversal: AuthorizationReversal): Promise<AuthorizationReversal> {
    if (authReversal.id) {
      const authId = authReversal.id
      delete authReversal.id
      const requestObj = new PaysafeMethod(prepareURI(REVERSAUTH + authId, this.api.accountNumber),
        constants.GET)
      const response = this.request(requestObj, null)
      return new AuthorizationReversal(response)
    } else {
      throw this.exception('Reverse Auth id is missing in CardServiceHandler.getAuthReversal')
    }
  }

  /**
   * common method for create search by merchant ref. number
   */
  searchMerchantRefCommon(merchObj: MerchantRefType, pagination: Pagination) {
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
   * method for search authorization, reverse Auth, settlements
   *         and refund using merchant ref number. classObj.constructor.name : get
   *         the name of constructor obj : with name of class with initial letter
   *         capital
   */
  async searchByMerchantRef(classObj: MerchantRefType, pagination: Pagination): Promise<MerchantRefType> {
    const constructor = classObj.constructor as typeof Authorization | typeof AuthorizationReversal |
      typeof Settlement | typeof Refund
    if (classObj && classObj.merchantRefNum) {
      const upperClassName = SEARCHMERACHANTREFERENCE[constructor.name.toUpperCase()]
      if (upperClassName) {
        const toInclude = this.searchMerchantRefCommon(classObj, pagination)
        const requestObj = new PaysafeMethod(prepareURI(upperClassName + '?' + toInclude, this.api.accountNumber),
          constants.GET)
        const response = this.request(requestObj, null)
        return new constructor(response)
      } else {
        throw this.exception('Please provide valid class name for search')
      }
    } else {
      throw this.exception('Please provide merchant ref number for search')
    }
  }

  /**
   * method for getting a settlement.
   */
  async getSettlement(settle: Settlement): Promise<Settlement> {
    if (settle && settle.id) {
      const settlementId = settle.id
      delete settle.id
      const requestObj = new PaysafeMethod(prepareURI(SETTLEMENTS + '/' + settlementId, this.api.accountNumber),
        constants.GET)
      const response = this.request(requestObj, null)
      return new Settlement(response)
    } else {
      throw this.exception('settlement id is missing in CardServiceHandler.getSettlement')
    }
  }

  /**
   * method for getting refund details.
   */
  async getRefund(refund: Refund): Promise<Refund> {
    if (refund && refund.id) {
      const refundId = refund.id
      delete refund.id
      const requestObj = new PaysafeMethod(prepareURI(REFUNDS + '/' + refundId, this.api.accountNumber),
        constants.GET)
      const response = this.request(requestObj, null)
      return new Refund(response)
    } else {
      throw this.exception('refund id is missing in CardServiceHandler.getRefund')
    }
  }

  /**
   * method for verifying card and billing details.
   */
  async verify(verification: Verification): Promise<Verification> {
    const requestObj = new PaysafeMethod(prepareURI(VERIFICATION, this.api.accountNumber), constants.POST)
    const response = this.request(requestObj, verification)
    return new Verification(response)
  }

  /**
   * method for get verification.
   */
  async getVerification(verification: Verification): Promise<Verification> {
    if (verification && verification.id) {
      const verificationId = verification.id
      delete verification.id
      const requestObj = new PaysafeMethod(prepareURI(VERIFICATION + '/' + verificationId, this.api.accountNumber),
        constants.GET)
      const response = this.request(requestObj, null)
      return new Verification(response)
    } else {
      throw this.exception('verification id is missing in CardServiceHandler.getVerification')
    }
  }
}
