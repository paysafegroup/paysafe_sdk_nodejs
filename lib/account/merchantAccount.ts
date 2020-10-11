import { GenericLinkedObject, IGenericLinkedObject } from '../generic-linked-object'
import { MerchantDescriptor } from './merchantDescriptor'
import { AccountDetails } from './usAccountDetails'

export type IMerchantAccountStatus = 'APPROVED' | 'PROCESSING' | 'DEFERRED' | 'DISABLED' | 'ENABLED' | 'PENDING' | 'REJECTED' | 'RETURNED' | 'SUBMITTED' | 'WAITING' | 'WITHDRAWN'

export interface IMerchantAccount extends IGenericLinkedObject {
  name?: string
  legalEntity?: string
  productCode?: string
  currency?: string
  region?: string
  locale?: string
  category?: string
  averageTransactionAmount?: any
  yearlyVolumeRange?: string
  phone?: string
  email?: string
  usAccountDetails?: AccountDetails
  merchantDescriptor?: MerchantDescriptor
  status?: IMerchantAccountStatus
}

/**
 * Merchant Account
 *
 * Add one or more merchant accounts to the merchant entity.
 */
export class MerchantAccount extends GenericLinkedObject implements IMerchantAccount {
  name: string
  legalEntity: string
  productCode: string
  currency: string
  region: string
  locale: string
  category: string
  averageTransactionAmount: any
  yearlyVolumeRange: string
  phone: string
  email: string
  usAccountDetails: AccountDetails
  merchantDescriptor: MerchantDescriptor

  /**
   * This is the status of the merchant account. Possible values are:
   * APPROVED - The merchant account has been approved, but not yet enabled.
   * PROCESSING - The merchant account application is being processed by Risk / Compliance.
   * DEFERRED - The merchant account application has been deferred until underwriting by Risk / Compliance is completed.
   * DISABLED - The merchant account application has been disabled due to suspension or termination.
   * ENABLED - The merchant account has been enabled for payment processing.
   * PENDING - The merchant account application has not yet been completed.
   * REJECTED - The merchant account application has been rejected due to Risk / Compliance check failure.
   * RETURNED - The merchant account application has been returned from Risk to Compliance for review.
   * SUBMITTED - The merchant account has been submitted for review by Paysafe Risk / Compliance.
   * WAITING - Compliance is waiting for additional information to be provided by the merchant.
   * WITHDRAWN - The merchant account application has been withdrawn.
   */
  status?: IMerchantAccountStatus

  constructor(resp?: IMerchantAccount) {
    super(resp)

    if (resp) {
      if (resp.name) {
        this.name = resp.name
      }
      if (resp.legalEntity) {
        this.legalEntity = resp.legalEntity
      }
      if (resp.productCode) {
        this.productCode = resp.productCode
      }
      if (resp.currency) {
        this.currency = resp.currency
      }
      if (resp.region) {
        this.region = resp.region
      }
      if (resp.locale) {
        this.locale = resp.locale
      }
      if (resp.category) {
        this.category = resp.category
      }
      if (resp.averageTransactionAmount) {
        this.averageTransactionAmount = resp.averageTransactionAmount
      }
      if (resp.yearlyVolumeRange) {
        this.yearlyVolumeRange = resp.yearlyVolumeRange
      }
      if (resp.phone) {
        this.phone = resp.phone
      }
      if (resp.email) {
        this.email = resp.email
      }
      if (resp.usAccountDetails) {
        this.usAccountDetails = new AccountDetails(resp.usAccountDetails)
      }
      if (resp.merchantDescriptor) {
        this.merchantDescriptor = new MerchantDescriptor(resp.merchantDescriptor)
      }
      if (resp.status) {
        this.status = resp.status
      }
    }
  }

  setName(name: string) {
    this.name = name
  }

  getName() {
    return this.name
  }

  setLegalEntity(legalEntity: string) {
    this.legalEntity = legalEntity
  }

  getLegalEntity() {
    return this.legalEntity
  }

  setProductCode(productCode: string) {
    this.productCode = productCode
  }

  getProductCode() {
    return this.productCode
  }

  setCurrency(currency: string) {
    this.currency = currency
  }

  getCurrency() {
    return this.currency
  }

  setRegion(region: string) {
    this.region = region
  }

  getRegion() {
    return this.region
  }

  setLocale(locale: string) {
    this.locale = locale
  }

  getLocale() {
    return this.locale
  }

  setCategory(category: string) {
    this.category = category
  }

  getCategory() {
    return this.category
  }

  setAverageTransactionAmount(averageTransactionAmount: number) {
    this.averageTransactionAmount = averageTransactionAmount
  }

  getAverageTransactionAmount() {
    return this.averageTransactionAmount
  }

  setYearlyVolumeRange(yearlyVolumeRange: string) {
    this.yearlyVolumeRange = yearlyVolumeRange
  }

  getYearlyVolumeRange() {
    return this.yearlyVolumeRange
  }

  setPhone(phone: string) {
    this.phone = phone
  }

  getPhone() {
    return this.phone
  }

  setEmail(email: string) {
    this.email = email
  }

  getEmail() {
    return this.email
  }

  setStatus(status: IMerchantAccountStatus) {
    this.status = status
  }

  getStatus() {
    return this.status
  }
}
