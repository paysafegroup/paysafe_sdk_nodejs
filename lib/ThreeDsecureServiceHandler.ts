import { PaysafeAPIDetails } from './api-details'
import * as constants from './constants'
import { GenericServiceHandler } from './generic-service-handler'
import { PaysafeMethod } from './PaysafeMethod'
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
export class ThreeDsecureServiceHandler extends GenericServiceHandler {
  /**
   * method for monitor ThreeDsecure API
   */
  async monitor(): Promise<any> {
    const requestObj = new PaysafeMethod(HEALTH_BEAT_URL, constants.GET)
    const response = await this.request(requestObj)
    return response
  }

  /**
   * method to Submit Enrollment
   */
  async submitEnrollment(enrollmentCheck: EnrollmentCheck): Promise<any> {
    const PaysafeReqObj = new PaysafeMethod(prepareURI(ENROLLMENTCHECKS_PATH, this.api),
      constants.POST)
    const response = await this.request(PaysafeReqObj, enrollmentCheck)
    return new EnrollmentCheck(response)
  }

  /**
   * Method to Submit Authentication
   */
  async submitAuthentication(authentication: Authentication): Promise<any> {
    const enrollment = authentication ? authentication.getEnrollment() : undefined
    if (authentication && enrollment && enrollment.id) {
      delete authentication.enrollmentchecks
      const PaysafeReqObj = new PaysafeMethod(prepareURI(ENROLLMENTCHECKS_PATH +
        SEPARATOR + enrollment.getId() + AUTHENTICATION_PATH, this.api),
        constants.POST)
      const response = await this.request(PaysafeReqObj, authentication)
      return new Authentication(response)
    } else {
      throw this.exception('enrollment id is missing in ThreeDsecureServiceHandler.submit_authentication')
    }
  }

  /**
   * Method to Lookup Authentication
   */
  async lookupAuthentication(authentication: Authentication): Promise<any> {
    const PaysafeReqObj = new PaysafeMethod(prepareURI(AUTHENTICATION_PATH + SEPARATOR + authentication.getId(), this.api),
      constants.GET)
    const response = await this.request(PaysafeReqObj, authentication)
    return new Authentication(response)
  }

  /**
   * Method to Lookup Authentication Enrollment
   */
  async lookupAuthenticationEnrollment(authentication: Authentication): Promise<any> {
    const PaysafeReqObj = new PaysafeMethod(prepareURI(AUTHENTICATION_PATH +
      SEPARATOR + authentication.getId() + '?fields=enrollmentchecks', this.api),
      constants.GET)
    const response = await this.request(PaysafeReqObj, authentication)
    return new Authentication(response)
  }

  /**
   * Method to Lookup EnrollmentChecks
   */
  async lookup(enrollmentCheck: EnrollmentCheck): Promise<any> {
    const PaysafeReqObj = new PaysafeMethod(prepareURI(ENROLLMENTCHECKS_PATH + SEPARATOR + enrollmentCheck.getId(), this.api),
      constants.GET)
    const response = await this.request(PaysafeReqObj, enrollmentCheck)
    return new EnrollmentCheck(response)
  }
}
