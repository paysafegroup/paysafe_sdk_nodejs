import { PaysafeAPIDetails } from './api-details'
import { PaysafeError } from './common/error'
import * as constants from './constants'
import { Purchase } from './directdebit/purchase'
import { StandaloneCredit } from './directdebit/standalonecredits'
import { PaysafeMethod } from './PaysafeMethod'
import { request } from './PaysafeRequest'

const HEALTH_BEAT_URL = 'directdebit/monitor'
const URI = 'directdebit/v1'
const PURCHASE_PATH = '/purchases'
const STANDALONE_PATH = '/standalonecredits'
const SEPARATOR = '/'

const SEARCHMERACHANTREFERENCE = {
  'PURCHASES' : '/purchases',
  'STANDALONECREDITS' : '/standalonecredits',
}

function prepareURI(path: string, paysafeClient: PaysafeAPIDetails) {
  return URI + '/accounts/' + paysafeClient.accountNumber + path
}

export class DirectDebitServiceHandler {
  _PaysafeApiClient: PaysafeAPIDetails

  constructor(api: PaysafeAPIDetails) {
    this._PaysafeApiClient = api
  }

  /**
   * Method to monitor Direct Debit api
   */
  monitor(responseCallBack) {
    try {
      const requestObj = new PaysafeMethod(HEALTH_BEAT_URL, constants.GET)
      request(this._PaysafeApiClient, requestObj, null, responseCallBack)
    } catch (err) {
      if (typeof (responseCallBack) === 'function') {
        responseCallBack(err, null)
      }
    }
  }

  submitPurchase(purchase: Purchase, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        const PaysafeReqObj = new PaysafeMethod(prepareURI(PURCHASE_PATH, this._PaysafeApiClient), constants.POST)
        request(this._PaysafeApiClient, PaysafeReqObj, purchase, (error, response) => {
          response = response ? new Purchase(response) : response
          responseCallBack(error, response)
          })
      } else {
        console.error('Please provide the responseCallBack function '
            + 'in DirectDebitServiceHandler : SubmitPurchase')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * Lookup purchase
   */
  getPurchase(purchase: Purchase, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        const PaysafeReqObj = new PaysafeMethod(prepareURI(PURCHASE_PATH + SEPARATOR + purchase.id, this._PaysafeApiClient), constants.GET)
        request(this._PaysafeApiClient, PaysafeReqObj, purchase, (error, response) => {
          response = response ? new Purchase(response) : response
          responseCallBack(error, response)
        })
      } else {
        console.error('Please provide the responseCallBack function '
            + 'in DirectDebitServiceHandler : getPurchase')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * Method to Lookup StandaloneCredits
   */
  getStandalone(standaloneCredit: StandaloneCredit, responseCallBack) {
    try {
      const clientObj = this._PaysafeApiClient
      if (typeof (responseCallBack) === 'function') {
        const PaysafeReqObj = new PaysafeMethod(prepareURI(STANDALONE_PATH + SEPARATOR + standaloneCredit.id, clientObj),
            constants.GET)
        request(this._PaysafeApiClient, PaysafeReqObj, standaloneCredit, (error, response) => {
          response = response ? new StandaloneCredit(response) : response
          responseCallBack(error, response)
        })
      } else {
        console.error('Please provide the responseCallBack function '
            + 'in DirectDebitServiceHandler : getPurchase')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * Method to Submit StandaloneCredits
   *
   */
  submitStandalone(standaloneCredit: StandaloneCredit, responseCallBack) {
    try {
      const clientObj = this._PaysafeApiClient
      if (typeof (responseCallBack) === 'function') {
        const PaysafeReqObj = new PaysafeMethod(prepareURI(STANDALONE_PATH, clientObj), constants.POST)
        request(this._PaysafeApiClient, PaysafeReqObj, standaloneCredit, (error, response) => {
          response = response ? new StandaloneCredit(response) : response
          responseCallBack(error, response)
        })
      } else {
        console.error('Please provide the responseCallBack function '
            + 'in DirectDebitServiceHandler : SubmitPurchase')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  cancelPurchase(purchase: Purchase, responseCallBack) {
    try {
      const clientObj = this._PaysafeApiClient
      if (typeof (responseCallBack) === 'function') {
        const PaysafeReqObj = new PaysafeMethod(prepareURI(PURCHASE_PATH + SEPARATOR + purchase.id, clientObj),
            constants.PUT)
        request(this._PaysafeApiClient, PaysafeReqObj, purchase, (error, response) => {
          response = response ? new Purchase(response) : response
          responseCallBack(error, response)
        })
      } else {
        console.error('Please provide the responseCallBack function '
            + 'in CustomerServiceHandler : processACHpurchase')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }
  /**
   * Method to cancel StandaloneCredits
   *
   */
  cancelStandaloneCredits(standaloneCredit: StandaloneCredit, responseCallBack) {
    try {
      const clientObj = this._PaysafeApiClient
      if (typeof (responseCallBack) === 'function') {
        const PaysafeReqObj = new PaysafeMethod(prepareURI(STANDALONE_PATH + SEPARATOR + standaloneCredit.id, clientObj),
            constants.PUT)
        request(this._PaysafeApiClient, PaysafeReqObj, standaloneCredit, (error, response) => {
          response = response ? new StandaloneCredit(response) : response
          responseCallBack(error, response)
        })
      } else {
        console.error('Please provide the responseCallBack function '
            + 'in CustomerServiceHandler : processACHpurchase')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

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
   * Method for search Purchases, StandAloneCredits using merchant ref number. classObj.constructor.name : get
   *         the name of constructor obj : with name of class with initial letter
   *         capital
   */
  searchByMerchantRef(classObj: Purchase | StandaloneCredit, pagination, responseCallBack) {
    try {
      const clientObj = this._PaysafeApiClient
      const constructor = classObj.constructor as typeof Purchase | typeof StandaloneCredit
      if (typeof (responseCallBack) === 'function') {
        if (classObj && classObj.merchantRefNum) {
          const upperClassName = SEARCHMERACHANTREFERENCE[constructor.name.toUpperCase()]
          if (upperClassName) {
            const toInclude = this.searchMerchantRefCommon(classObj, pagination)
            const requestObj = new PaysafeMethod(prepareURI(upperClassName + '?'
                + toInclude, clientObj), constants.GET)
            request(this._PaysafeApiClient, requestObj, null, (error, response) => {
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
}
