import { Pagination } from '.'
import { PaysafeAPIDetails } from './api-details'
import * as constants from './constants'
import { Purchase } from './directdebit/purchase'
import { StandaloneCredit } from './directdebit/standalonecredits'
import { GenericServiceHandler } from './generic-service-handler'
import { PaysafeMethod } from './PaysafeMethod'

const HEALTH_BEAT_URL = 'directdebit/monitor'
const URI = 'directdebit/v1'
const PURCHASE_PATH = '/purchases'
const STANDALONE_PATH = '/standalonecredits'
const SEPARATOR = '/'

const SEARCHMERACHANTREFERENCE = {
  'PURCHASES': '/purchases',
  'STANDALONECREDITS': '/standalonecredits',
}

function prepareURI(path: string, paysafeClient: PaysafeAPIDetails) {
  return URI + '/accounts/' + paysafeClient.accountNumber + path
}

export class DirectDebitServiceHandler extends GenericServiceHandler {
  /**
   * Method to monitor Direct Debit api
   */
  async monitor(): Promise<any> {
    const requestObj = new PaysafeMethod(HEALTH_BEAT_URL, constants.GET)
    const response = await this.request(requestObj)
    return response
  }

  async submitPurchase(purchase: Purchase): Promise<Purchase> {
    const PaysafeReqObj = new PaysafeMethod(prepareURI(PURCHASE_PATH, this.api), constants.POST)
    const response = await this.request(PaysafeReqObj, purchase)
    return new Purchase(response)
  }

  /**
   * Lookup purchase
   */
  async getPurchase(purchase: Purchase): Promise<Purchase> {
    const PaysafeReqObj = new PaysafeMethod(prepareURI(PURCHASE_PATH + SEPARATOR + purchase.id, this.api), constants.GET)
    const response = await this.request(PaysafeReqObj, purchase)
    return new Purchase(response)
  }

  /**
   * Method to Lookup StandaloneCredits
   */
  async getStandalone(standaloneCredit: StandaloneCredit): Promise<StandaloneCredit> {
    const clientObj = this.api
    const PaysafeReqObj = new PaysafeMethod(prepareURI(STANDALONE_PATH + SEPARATOR + standaloneCredit.id, clientObj),
      constants.GET)
    const response = await this.request(PaysafeReqObj, standaloneCredit)
    return new StandaloneCredit(response)
  }

  /**
   * Method to Submit StandaloneCredits
   */
  async submitStandalone(standaloneCredit: StandaloneCredit): Promise<StandaloneCredit> {
    const clientObj = this.api
    const PaysafeReqObj = new PaysafeMethod(prepareURI(STANDALONE_PATH, clientObj), constants.POST)
    const response = await this.request(PaysafeReqObj, standaloneCredit)
    return new StandaloneCredit(response)
  }

  async cancelPurchase(purchase: Purchase): Promise<Purchase> {
    const clientObj = this.api
    const PaysafeReqObj = new PaysafeMethod(prepareURI(PURCHASE_PATH + SEPARATOR + purchase.id, clientObj),
      constants.PUT)
    const response = await this.request(PaysafeReqObj, purchase)
    return new Purchase(response)
  }

  /**
   * Method to cancel StandaloneCredits
   */
  async cancelStandaloneCredits(standaloneCredit: StandaloneCredit): Promise<StandaloneCredit> {
    const clientObj = this.api
    const PaysafeReqObj = new PaysafeMethod(prepareURI(STANDALONE_PATH + SEPARATOR + standaloneCredit.id, clientObj),
      constants.PUT)
    const response = await this.request(PaysafeReqObj, standaloneCredit)
    return new StandaloneCredit(response)
  }

  searchMerchantRefCommon(merchObj: Purchase | StandaloneCredit, pagination: Pagination) {
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
  async searchByMerchantRef(classObj: Purchase | StandaloneCredit, pagination: Pagination): Promise<Purchase | StandaloneCredit> {
    const clientObj = this.api
    const constructor = classObj.constructor as typeof Purchase | typeof StandaloneCredit
    if (classObj && classObj.merchantRefNum) {
      const upperClassName = SEARCHMERACHANTREFERENCE[constructor.name.toUpperCase()]
      if (upperClassName) {
        const toInclude = this.searchMerchantRefCommon(classObj, pagination)
        const requestObj = new PaysafeMethod(prepareURI(upperClassName + '?'
          + toInclude, clientObj), constants.GET)
        const response = await this.request(requestObj, null)
        return new constructor(response)
      } else {
        throw this.exception('Please provide valid class name for search')
      }
    } else {
      throw this.exception('Please provide merchant ref number for search')
    }
  }
}
