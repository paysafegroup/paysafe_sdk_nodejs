import { PaysafeAPIDetails } from './api-details'
import { PaysafeError } from './common/error'
import * as constants from './constants'
import { PaysafeMethod } from './PaysafeMethod'
import { request } from './PaysafeRequest'
import { Authentication } from './threedsecure/authentication'
import { EnrollmentCheck } from './threedsecure/enrollmentchecks'

const HEALTH_BEAT_URL = 'threedsecure/monitor'
const URI = 'threedsecure/v1'
const ENROLLMENTCHECKS_PATH = '/enrollmentchecks'
const SEPARATOR = '/'
const AUTHENTICATION_PATH = '/authentications'

function prepareURI(path: string, paysafeClient: PaysafeAPIDetails) {
  return URI + '/accounts/' + paysafeClient.accountNumber + path
}

/**
 * Paysafe 3D Secure Version 2 API
 * @version 1.0 May 2019
 * @see https://developer.paysafe.com/en/3d-secure-2/api/
 */
export class ThreeDsecureServiceHandler {
  _api: PaysafeAPIDetails

  constructor(PaysafeApiClient: PaysafeAPIDetails) {
    this._api = PaysafeApiClient
  }

  /**
   * method for monitor ThreeDsecure API
   */
  monitor(responseCallBack) {
    try {
      const requestObj = new PaysafeMethod(HEALTH_BEAT_URL, constants.GET)
      request(this._api, requestObj, null, responseCallBack)
    } catch (err) {
      if (typeof (responseCallBack) === 'function') {
        responseCallBack(err, null)
      }
    }
  }

  /**
   * method to Submit Enrollment
   */
  submitEnrollment(enrollmentCheck: EnrollmentCheck, responseCallBack) {
    try {
      const clientObj = this._api
      if (typeof (responseCallBack) === 'function') {
        const PaysafeReqObj = new PaysafeMethod(prepareURI(ENROLLMENTCHECKS_PATH, clientObj),
            constants.POST)
        request(this._api, PaysafeReqObj, enrollmentCheck, (error, response) => {
          response = response ? new EnrollmentCheck(response) : response
          responseCallBack(error, response)
        })
      } else {
        console.error('Please provide the responseCallBack function '
            + 'in ThreeDsecureServiceHandler : Submit')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * Method to Submit Authentication
   */
  submitAuthentication(authentication: Authentication, responseCallBack) {
    try {
      const clientObj = this._api
      if (typeof (responseCallBack) === 'function') {
        const enrollment = authentication ? authentication.getEnrollment() : undefined
        if (authentication && enrollment && enrollment.id) {
          delete authentication.enrollmentchecks
          const PaysafeReqObj = new PaysafeMethod(prepareURI(ENROLLMENTCHECKS_PATH +
            SEPARATOR + enrollment.getId() + AUTHENTICATION_PATH, clientObj),
              constants.POST)
          request(this._api, PaysafeReqObj, authentication, (error, response) => {
            response = response ? new Authentication(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
              'InvalidRequestException : enrollment id is missing '
                  + 'in ThreeDsecureServiceHandler : submit_authentication')
        }
      } else {
        console.error('Please provide the responseCallBack function '
            + 'in ThreeDsecureServiceHandler : lookup')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * Method to Lookup Authentication
   */
  lookupAuthentication(authentication: Authentication, responseCallBack) {
    try {
      const clientObj = this._api
      if (typeof (responseCallBack) === 'function') {
        const PaysafeReqObj = new PaysafeMethod(prepareURI(AUTHENTICATION_PATH + SEPARATOR + authentication.getId(), clientObj),
            constants.GET)
        request(this._api, PaysafeReqObj, authentication, (error, response) => {
          response = response ? new Authentication(response) : response
          responseCallBack(error, response)
        })
      } else {
        console.error('Please provide the responseCallBack function '
            + 'in ThreeDsecureServiceHandler : lookup')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * Method to Lookup Authentication Enrollment
   */
  lookupAuthenticationEnrollment(authentication: Authentication, responseCallBack) {
    try {
      const clientObj = this._api
      if (typeof (responseCallBack) === 'function') {
        const PaysafeReqObj = new PaysafeMethod(prepareURI(AUTHENTICATION_PATH +
          SEPARATOR + authentication.getId() + '?fields=enrollmentchecks', clientObj),
            constants.GET)
        request(this._api, PaysafeReqObj, authentication, (error, response) => {
          response = response ? new Authentication(response) : response
          responseCallBack(error, response)
        })
      } else {
        console.error('Please provide the responseCallBack function '
            + 'in ThreeDsecureServiceHandler : lookup')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * Method to Lookup EnrollmentChecks
   */
  lookup(enrollmentCheck: EnrollmentCheck, responseCallBack) {
    try {
      const clientObj = this._api
      if (typeof (responseCallBack) === 'function') {
        const PaysafeReqObj = new PaysafeMethod(prepareURI(ENROLLMENTCHECKS_PATH + SEPARATOR + enrollmentCheck.getId(), clientObj),
            constants.GET)
        request(this._api, PaysafeReqObj, enrollmentCheck, (error, response) => {
          response = response ? new EnrollmentCheck(response) : response
          responseCallBack(error, response)
        })
      } else {
        console.error('Please provide the responseCallBack function '
            + 'in ThreeDsecureServiceHandler : lookup')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }
}
