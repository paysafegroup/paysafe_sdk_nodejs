import { GenericLinkedObject } from '../generic-linked-object'
import { MerchantDescriptor } from './merchantDescriptor'
import { AccountDetails } from './usAccountDetails'

/**
 * Merchant Account
 *
 * Add one or more merchant accounts to the merchant entity.
 */
export class MerchantAccount extends GenericLinkedObject {
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
  status: string

  constructor(resp) {
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

  setName(name) {
    this.name = name
  }

  getName() {
    return this.name
  }

  setLegalEntity(legalEntity) {
    this.legalEntity = legalEntity
  }

  getLegalEntity() {
    return this.legalEntity
  }

  setProductCode(productCode) {
    this.productCode = productCode
  }

  getProductCode() {
    return this.productCode
  }

  setCurrency(currency) {
    this.currency = currency
  }

  getCurrency() {
    return this.currency
  }

  setRegion(region) {
    this.region = region
  }

  getRegion() {
    return this.region
  }

  setLocale(locale) {
    this.locale = locale
  }

  getLocale() {
    return this.locale
  }

  setCategory(category) {
    this.category = category
  }

  getCategory() {
    return this.category
  }

  setAverageTransactionAmount(averageTransactionAmount) {
    this.averageTransactionAmount = averageTransactionAmount
  }

  getAverageTransactionAmount() {
    return this.averageTransactionAmount
  }

  setYearlyVolumeRange(yearlyVolumeRange) {
    this.yearlyVolumeRange = yearlyVolumeRange
  }

  getYearlyVolumeRange() {
    return this.yearlyVolumeRange
  }

  setPhone(phone) {
    this.phone = phone
  }

  getPhone() {
    return this.phone
  }

  setEmail(email) {
    this.email = email
  }

  getEmail() {
    return this.email
  }

  setStatus(status) {
    this.status = status
  }

  getStatus() {
    return this.status
  }
}
