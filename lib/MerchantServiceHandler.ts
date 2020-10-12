import { MerchantACHBankAccount } from './account/ACHBankAccount'
import { BusinessOwner } from './account/businessOwner'
import { IMerchant, Merchant } from './account/merchant'
import { MerchantAccount } from './account/merchantAccount'
import { MicroDeposit } from './account/microdeposit'
import { Terms } from './account/terms'
import { User } from './account/user'
import * as constants from './constants'
import { Address } from './customervault/address'
import { GenericServiceHandler } from './generic-service-handler'
import { PaysafeMethod } from './PaysafeMethod'

// PATHS
const URI = 'accountmanagement/v1'
const MERCHANT_PATH = '/merchants'
const MERCHANT_ACCOUNT_PATH = '/accounts'
const MERCHANT_NEW_ACCOUNT_PATH = '/accounts?operationMode=consolidated'
const MERCHANT_ADDRESSES_PATH = '/addresses'
const MERCHANT_BO_PATH = '/businessowners'
const MERCHANT_BO_ADD_PATH = '/currentaddresses'
const MERCHANT_NEW_BO_PATH = '/businessowners?operationMode=consolidated'
// const MERCHANT_BANK_PATH = '/bankaccounts'
const MERCHANT_MICRODEPOSIT_PATH = '/microdeposits'
const MERCHANT_MICRODEPOSIT_VALIDATE_PATH = '/validate'
const MERCHANT_TC_PATH = '/termsandconditions'
const MERCHANT_ACTIVATION_PATH = '/activation'
const MERCHANT_USERS_PATH = '/users'
const MERCHANT_BANK_ACC_PATH = {
  'ACH' : '/achbankaccounts',
  'BACS' : '/bacsbankaccounts',
  'SEPA' : '/sepabankaccounts',
  'EFT' : '/eftbankaccounts',
}
const SEPARATOR = '/'

// type BankAccountTypes = MerchantACHBankAccount

/**
 * Account Management API
 *
 * @version 1
 * @see https://developer.paysafe.com/en/platforms/accounts/api/
 * @see https://developer.paysafe.com/en/rest-apis/platforms/account-management/getting-started/introduction-to-account-management/
 */
export class MerchantServiceHandler extends GenericServiceHandler {
  async createMerchant(merchant: Merchant | IMerchant): Promise<Merchant> {
    const requestObj = new PaysafeMethod(this.prepareURI(MERCHANT_PATH), constants.POST)
    const response = await this.request(requestObj, merchant)
    return new Merchant(response)
  }

  /**
   * Method for getting a Merchant Account-USD CC Consolidated
   */
  async getMerchantAccount(): Promise<MerchantAccount> {
    if (this.api.accountNumber) {
      const requestObj = new PaysafeMethod(this.prepareMerchantAccountURI(''), constants.GET)
      const response = await this.request(requestObj)
      return new MerchantAccount(response)
    } else {
      throw this.exception('merchant account id is missing in MerchantServiceHandler.getMerchantAccount')
    }
  }

  /**
   * Method for creating a Merchant Account-USD CC Consolidated
   */
  async createMerchantAccount(merchant: Merchant, merchantAccount: MerchantAccount): Promise<MerchantAccount> {
    if (merchant && merchant.id) {
      const requestObj = new PaysafeMethod(this.prepareMerchantURI(MERCHANT_NEW_ACCOUNT_PATH, merchant.id), constants.POST)
      const response = await this.request(requestObj, merchantAccount)
      return new MerchantAccount(response)
    } else {
      throw this.exception('merchant id is missing in MerchantServiceHandler.createMerchantAccount')
    }
  }

  /**
   * Method for updating a Merchant Account-USD CC Consolidated
   */
  async updateMerchantAccount(merchantAccount: MerchantAccount): Promise<MerchantAccount> {
    if (merchantAccount && merchantAccount.id) {
      const requestObj = new PaysafeMethod(this.prepareMerchantAccountURI(''), constants.PUT)
      const response = await this.request(requestObj, merchantAccount)
      return new MerchantAccount(response)
    } else {
      throw this.exception('merchant account id is missing in MerchantServiceHandler.updateMerchantAccount')
    }
  }
  /**
   * Method for getting a Merchant Business Owner
   */
  async getMerchantBusinessOwner(businessOwner: BusinessOwner): Promise<BusinessOwner> {
    if (businessOwner && businessOwner.id) {
      const requestObj = new PaysafeMethod(this.prepareURI(MERCHANT_BO_PATH + '/' + businessOwner.id), constants.GET)
      const response = await this.request(requestObj)
      return new BusinessOwner(response)
    } else {
      throw this.exception('business owner id is missing in MerchantServiceHandler.getMerchantBusinessOwner')
    }
  }
  /**
   * Method for creating a Merchant Business Owner - Consolidated
   */
  async createMerchantBusinessOwner(businessOwner: BusinessOwner): Promise<BusinessOwner> {
    const requestObj = new PaysafeMethod(this.prepareMerchantAccountURI(MERCHANT_NEW_BO_PATH), constants.POST)
    const response = await this.request(requestObj, businessOwner)
    return new BusinessOwner(response)
  }
  /**
   * Method for updating a Merchant Business Owner - Consolidated
   */
  async updateMerchantBusinessOwner(businessOwner: BusinessOwner): Promise<BusinessOwner> {
    if (businessOwner && businessOwner.id) {
      const requestObj = new PaysafeMethod(this.prepareURI(MERCHANT_BO_PATH + '/' + businessOwner.id), constants.PUT)
      const response = await this.request(requestObj, businessOwner)
      return new BusinessOwner(response)
    } else {
      throw this.exception('business owner id is missing in MerchantServiceHandler.createMerchantBusinessOwner')
    }
  }

  /**
   * Method for getting a Merchant Business Owner Address
   */
  async getMerchantBusinessOwnerAddress(address: Address): Promise<Address> {
    if (address && address.id) {
      const requestObj = new PaysafeMethod(this.prepareURI(MERCHANT_BO_ADD_PATH + '/' + address.id), constants.GET)
      const response = await this.request(requestObj, null)
      return new Address(response)
    } else {
      throw this.exception('address id is missing in MerchantServiceHandler.getMerchantBusinessOwnerAddress')
    }
  }

  /**
   * Method for creating a Merchant Business Owner Address
   */
  async createMerchantBusinessOwnerAddress(address: Address): Promise<Address> {
    if (address && address.profile && address.profile.id) {
      const uri = this.prepareURI(MERCHANT_BO_PATH + '/' + address.profile.id + MERCHANT_BO_ADD_PATH)
      const requestObj = new PaysafeMethod(uri, constants.POST)
      const response = await this.request(requestObj, address)
      return new Address(response)
    } else {
      throw this.exception('business owner id is missing in MerchantServiceHandler.createMerchantBusinessOwnerAddress')
    }
  }

  /**
   * Method for updating a Merchant Business Owner Address
   */
  async updateMerchantBusinessOwnerAddress(address: Address): Promise<Address> {
    if (address && address.id) {
      const requestObj = new PaysafeMethod(this.prepareURI(MERCHANT_BO_ADD_PATH + '/' + address.id), constants.PUT)
      const response = await this.request(requestObj, address)
      return new Address(response)
    } else {
      throw this.exception('address id is missing in MerchantServiceHandler.updateMerchantBusinessOwnerAddress')
    }
  }

  /**
   * Method for getting a User
   */
  async getMerchantUser() {
    const requestObj = new PaysafeMethod(this.prepareMerchantAccountURI(MERCHANT_USERS_PATH), constants.GET)
    const response = await this.request(requestObj)
    return new User(response)
  }

  /**
   * Method for creating a User
   */
  async createMerchantUser(user: User): Promise<User> {
    const requestObj = new PaysafeMethod(this.prepareMerchantAccountURI(MERCHANT_USERS_PATH), constants.POST)
    const response = await this.request(requestObj, user)
    return new User(response)
  }

  /**
   * Method for activating Merchant Account
   */
  async activateMerchantAccount(): Promise<any> {
    const requestObj = new PaysafeMethod(this.prepareMerchantAccountURI(MERCHANT_ACTIVATION_PATH), constants.POST)
    const response = await this.request(requestObj)
    return response
  }

  /**
   * Method for getting a Merchant Address
   */
  async getMerchantAddress(address: Address): Promise<Address> {
    if (address && address.id) {
      const requestObj = new PaysafeMethod(this.prepareURI(MERCHANT_ADDRESSES_PATH + '/' + address.id), constants.GET)
      const response = await this.request(requestObj)
      return new Address(response)
    } else {
      throw this.exception('address id is missing in MerchantServiceHandler.getMerchantAddress')
    }
  }

  /**
   * Method for creating a Merchant Address
   */
  async createMerchantAddress(address: Address): Promise<Address> {
    const requestObj = new PaysafeMethod(this.prepareMerchantAccountURI(MERCHANT_ADDRESSES_PATH), constants.POST)
    const response = await this.request(requestObj, address)
    return new Address(response)
  }

  /**
   * Method for updating a Merchant Address
   */
  async updateMerchantAddress(address: Address): Promise<Address> {
    if (address && address.id) {
      delete address.profile
      const requestObj = new PaysafeMethod(this.prepareURI(MERCHANT_ADDRESSES_PATH + '/' + address.id), constants.PUT)
      const response = await this.request(requestObj, address)
      return new Address(response)
    } else {
      throw this.exception('address id is missing in MerchantServiceHandler.updateMerchantAccountAddress')
    }
  }

  /**
   * Method for getting a Merchant Address
   */
  async getMerchantBankAccount(bankAccount: MerchantACHBankAccount): Promise<MerchantACHBankAccount> {
    const constructor = bankAccount.constructor as typeof MerchantACHBankAccount
    if (bankAccount && bankAccount.id) {
      const requestObj = new PaysafeMethod(this.prepareURI(MERCHANT_BANK_ACC_PATH[bankAccount.type] + '/' + bankAccount.id),
        constants.GET)
      const response = await this.request(requestObj, null)
      return new constructor(response)
    } else {
      throw this.exception('bankAccount id is missing in MerchantServiceHandler.getMerchantBankAccount')
    }
  }

  /**
   * Method for creating a Merchant ACH Bank Account
   */
  async createMerchantBankAccount(bankAccount: MerchantACHBankAccount): Promise<MerchantACHBankAccount> {
    const constructor = bankAccount.constructor as typeof MerchantACHBankAccount
    const uri = this.prepareMerchantAccountURI(MERCHANT_BANK_ACC_PATH[bankAccount.type])
    const requestObj = new PaysafeMethod(uri, constants.POST)
    const response = await this.request(requestObj, bankAccount)
    return new constructor(response)
  }

  /**
   * Method for updating a Merchant Bank Account
   */
  async updateMerchantBankAccount(bankAccount: MerchantACHBankAccount): Promise<MerchantACHBankAccount> {
    if (bankAccount && bankAccount.id) {
      const constructor = bankAccount.constructor as typeof MerchantACHBankAccount
      const uri = this.prepareURI(MERCHANT_BANK_ACC_PATH[bankAccount.type] + '/' + bankAccount.id)
      const requestObj = new PaysafeMethod(uri, constants.PUT)
      const response = await this.request(requestObj, bankAccount)
      return new constructor(response)
    } else {
      throw this.exception('bankaccount id is missing in MerchantServiceHandler.updateMerchantBankAccount')
    }
  }

  /**
   * Method for deleting a Merchant Bank Account
   */
  async deleteMerchantBankAccount(bankAccount: MerchantACHBankAccount): Promise<any> {
    if (bankAccount && bankAccount.id) {
      const uri = this.prepareURI(MERCHANT_BANK_ACC_PATH[bankAccount.type] + '/' + bankAccount.id)
      const requestObj = new PaysafeMethod(uri, constants.DELETE)
      const response = await this.request(requestObj, bankAccount)
      return response
    } else {
      throw this.exception('account id is missing in MerchantServiceHandler.deleteMerchantBankAccount')
    }
  }

  /**
   * Method for getting a Merchant MicroDeposit
   */
  async getMerchantMicroDeposit(id: string): Promise<MicroDeposit> {
    const uri = this.prepareURI(MERCHANT_MICRODEPOSIT_PATH + SEPARATOR + id)
    const requestObj = new PaysafeMethod(uri, constants.GET)
    const response = await this.request(requestObj, null)
    return new MicroDeposit(response)
  }

  /**
   * Method for creating a Merchant MicroDeposit
   */
  async createMerchantMicroDeposit(bankAccount: MerchantACHBankAccount): Promise<MicroDeposit> {
    const uri = this.prepareURI(MERCHANT_BANK_ACC_PATH[bankAccount.type] + SEPARATOR + bankAccount.id + MERCHANT_MICRODEPOSIT_PATH)
    const requestObj = new PaysafeMethod(uri, constants.POST)
    const response = await this.request(requestObj)
    return new MicroDeposit(response)
  }

  /**
   * Method for validating a Merchant MicroDeposit
   */
  async validateMerchantMicroDeposit(microDeposit: MicroDeposit): Promise<MicroDeposit> {
    const uri = this.prepareURI(MERCHANT_MICRODEPOSIT_PATH + SEPARATOR + microDeposit.id + MERCHANT_MICRODEPOSIT_VALIDATE_PATH)
    const requestObj = new PaysafeMethod(uri, constants.POST)
    const response = await this.request(requestObj, microDeposit)
    return new MicroDeposit(response)
  }

  /**
   * Method for looking up Merchant Terms and Conditions Acceptance Request
   */
  async getMerchantAcceptanceTermsAndConditions(term: Terms): Promise<Terms> {
    if (term.id) {
      const requestObj = new PaysafeMethod(this.prepareURI(MERCHANT_TC_PATH + '/' + term.id), constants.GET)
      const response = await this.request(requestObj, null)
      return new Terms(response)
    } else {
      throw this.exception('merchant account id is missing in MerchantServiceHandler.getMerchantAcceptanceTCAccount')
    }
  }

  /**
   * Method for looking up Merchant Terms and Conditions as HTML
   */
  async getMerchantTermsAndConditions(): Promise<{ version: string, text: string }> {
    const requestObj = new PaysafeMethod(this.prepareMerchantAccountURI(MERCHANT_TC_PATH), constants.GET)
    const request = await this.rawRequest(requestObj, null)

    return {
      version: request.response.headers['x_terms_version'] as string,
      text: request.body,
    }
  }

  /**
   * Method for accepting Merchant Terms and Conditions
   */
  async acceptMerchantTermsAndConditions(terms: Terms): Promise<Terms> {
    const requestObj = new PaysafeMethod(this.prepareMerchantAccountURI(MERCHANT_TC_PATH), constants.POST)
    const response = await this.request(requestObj, { version: terms.version })
    return new Terms(response)
  }

  private prepareMerchantURI(path: string, id: string) {
    return URI + MERCHANT_PATH + SEPARATOR + id + path
  }

  private prepareMerchantAccountURI(path: string) {
    return URI + MERCHANT_ACCOUNT_PATH + SEPARATOR + this.api.accountNumber + path
  }

  private prepareURI(path: string) {
    return URI + path
  }
}
