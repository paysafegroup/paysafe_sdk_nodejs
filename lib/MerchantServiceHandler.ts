import { MerchantACHBankAccount } from './account/ACHBankAccount'
import { BusinessOwner } from './account/businessOwner'
import { Merchant } from './account/merchant'
import { MerchantAccount } from './account/merchantAccount'
import { MicroDeposit } from './account/microdeposit'
import { Terms } from './account/terms'
import { User } from './account/user'
import { PaysafeError } from './common/error'
import * as constants from './constants'
import { Address } from './customervault/address'
import { PaysafeMethod } from './PaysafeMethod'
import { request } from './PaysafeRequest'

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

/**
 * Account Management API
 *
 * @version 1
 * @see https://developer.paysafe.com/en/platforms/accounts/api/
 * @see https://developer.paysafe.com/en/rest-apis/platforms/account-management/getting-started/introduction-to-account-management/
 */
export class MerchantServiceHandler {
  private _api: any

  constructor(api) {
    this._api = api
  }

  createMerchant(merchant: Merchant, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        const requestObj = new PaysafeMethod(this.prepareURI(MERCHANT_PATH), constants.POST)
        request(this._api, requestObj, merchant, (error, response) => {
          response = response ? new Merchant(response) : response
          responseCallBack(error, response)
        })
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in MerchantServiceHandler : createMerchant')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }
  /**
   * @author Francisco Bueno method for getting a Merchant Account-USD CC Consolidated
   */
  getMerchantAccount(responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (this._api.accountNumber) {
          const requestObj = new PaysafeMethod(this.prepareMerchantAccountURI(''), constants.GET)
          request(this._api, requestObj, null, (error, response) => {
            response = response ? new MerchantAccount(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : merchant account id is missing '
            + 'in MerchantServiceHandler : getMerchantAccount')
        }
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in MerchantServiceHandler : getMerchantAccount')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }
  /**
   * @author Francisco Bueno method for creating a Merchant Account-USD CC Consolidated
   */
  createMerchantAccount(merchant: Merchant, merchantAccount: MerchantAccount, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (merchant && merchant.id) {
          const requestObj = new PaysafeMethod(this.prepareMerchantURI(MERCHANT_NEW_ACCOUNT_PATH, merchant.id),
            constants.POST)
          request(this._api, requestObj, merchantAccount, (error, response) => {
            response = response ? new MerchantAccount(response) : response
            responseCallBack(error, response)
          })
        } else {
          console.error('merchant id is missing')
        }
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in MerchantServiceHandler : createMerchantAccount')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }
  /**
   * @author Francisco Bueno method for updating a Merchant Account-USD CC Consolidated
   */
  updateMerchantAccount(merchantAccount: MerchantAccount, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (merchantAccount && merchantAccount.id) {
          const requestObj = new PaysafeMethod(this.prepareMerchantAccountURI(''),
            constants.PUT)
          request(this._api, requestObj, merchantAccount, (error, response) => {
            response = response ? new MerchantAccount(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : merchant account id is missing '
            + 'in MerchantServiceHandler : updateMerchantAccount')
        }
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in MerchantServiceHandler : updateMerchantAccount')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }
  /**
   * @author Francisco Bueno method for getting a Merchant Business Owner
   */
  getMerchantBusinessOwner(businessOwner: BusinessOwner, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (businessOwner && businessOwner.id) {
          const requestObj = new PaysafeMethod(this.prepareURI(MERCHANT_BO_PATH + '/' + businessOwner.id),
            constants.GET)
          request(this._api, requestObj, null, (error, response) => {
            response = response ? new BusinessOwner(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : business owner id is missing '
            + 'in MerchantServiceHandler : getMerchantBusinessOwner')
        }
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in MerchantServiceHandler : getMerchantBusinessOwner')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }
  /**
   * @author Francisco Bueno method for creating a Merchant Business Owner - Consolidated
   */
  createMerchantBusinessOwner(businessOwner: BusinessOwner, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        const requestObj = new PaysafeMethod(this.prepareMerchantAccountURI(MERCHANT_NEW_BO_PATH),
          constants.POST)
        request(this._api, requestObj, businessOwner, (error, response) => {
          response = response ? new BusinessOwner(response) : response
          responseCallBack(error, response)
        })
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in MerchantServiceHandler : createMerchantBusinessOwner')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }
  /**
   * @author Francisco Bueno method for updating a Merchant Business Owner - Consolidated
   */
  updateMerchantBusinessOwner(businessOwner: BusinessOwner, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (businessOwner && businessOwner.id) {
          const requestObj = new PaysafeMethod(this.prepareURI(MERCHANT_BO_PATH + '/' + businessOwner.id),
            constants.PUT)
          request(this._api, requestObj, businessOwner, (error, response) => {
            response = response ? new BusinessOwner(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : business owner id is missing '
            + 'in MerchantServiceHandler : createMerchantBusinessOwner')
        }
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in MerchantServiceHandler : createMerchantBusinessOwner')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * @author Francisco Bueno method for getting a Merchant Business Owner Address
   */
  getMerchantBusinessOwnerAddress(address: Address, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (address && address.id) {
          const requestObj = new PaysafeMethod(this.prepareURI(MERCHANT_BO_ADD_PATH + '/' + address.id),
            constants.GET)
          request(this._api, requestObj, null, (error, response) => {
            response = response ? new Address(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : address id is missing '
            + 'in MerchantServiceHandler : getMerchantBusinessOwnerAddress')
        }
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in MerchantServiceHandler : getMerchantBusinessOwnerAddress')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }
  /**
   * @author Francisco Bueno method for creating a Merchant Business Owner Address
   */
  createMerchantBusinessOwnerAddress(address: Address, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (address && address.profile && address.profile.id) {
          const requestObj = new PaysafeMethod(this.prepareURI(MERCHANT_BO_PATH + '/' + address.profile.id + MERCHANT_BO_ADD_PATH),
            constants.POST)
          request(this._api, requestObj, address, (error, response) => {
            response = response ? new Address(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : business owner id is missing '
            + 'in MerchantServiceHandler : createMerchantBusinessOwnerAddress')
        }
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in MerchantServiceHandler : createMerchantBusinessOwnerAddress')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }
  /**
   * @author Francisco Bueno method for updating a Merchant Business Owner Address
   */
  updateMerchantBusinessOwnerAddress(address: Address, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (address && address.id) {
          const requestObj = new PaysafeMethod(this.prepareURI(MERCHANT_BO_ADD_PATH + '/' + address.id),
            constants.PUT)
          request(this._api, requestObj, address, (error, response) => {
            response = response ? new Address(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : address id is missing '
            + 'in MerchantServiceHandler : updateMerchantBusinessOwnerAddress')
        }
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in MerchantServiceHandler : updateMerchantBusinessOwnerAddress')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }
  /**
   * @author Francisco Bueno method for getting a User
   */
  getMerchantUser(responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        const requestObj = new PaysafeMethod(this.prepareMerchantAccountURI(MERCHANT_USERS_PATH),
          constants.GET)
        request(this._api, requestObj, null, (error, response) => {
          response = response ? new User(response) : response
          responseCallBack(error, response)
        })
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in MerchantServiceHandler : getMerchantUser')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }
  /**
   * @author Francisco Bueno method for creating a User
   */
  createMerchantUser(user: User, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        const requestObj = new PaysafeMethod(this.prepareMerchantAccountURI(MERCHANT_USERS_PATH),
          constants.POST)
        request(this._api, requestObj, user, (error, response) => {
          response = response ? new User(response) : response
          responseCallBack(error, response)
        })
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in MerchantServiceHandler : createMerchantUser')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }
  /**
   * @author Francisco Bueno method for activating Merchant Account
   */
  activateMerchantAccount(responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        const requestObj = new PaysafeMethod(this.prepareMerchantAccountURI(MERCHANT_ACTIVATION_PATH),
          constants.POST)
        request(this._api, requestObj, { }, (error, response) => {
          // response = response ? new this._api.Terms(response) : response;
          responseCallBack(error, response)
        })
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in MerchantServiceHandler : acceptMerchantTCAccount')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }
  /**
   * @author Francisco Bueno method for getting a Merchant Address
   */
  getMerchantAddress(address: Address, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (address && address.id) {
          const requestObj = new PaysafeMethod(this.prepareURI(MERCHANT_ADDRESSES_PATH + '/' + address.id),
            constants.GET)
          request(this._api, requestObj, null, (error, response) => {
            response = response ? new Address(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : address id is missing '
            + 'in MerchantServiceHandler : getMerchantAddress')
        }
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in MerchantServiceHandler : getMerchantAddress')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }
  /**
   * @author Francisco Bueno method for creating a Merchant Address
   */
  createMerchantAddress(address: Address, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        const requestObj = new PaysafeMethod(this.prepareMerchantAccountURI(MERCHANT_ADDRESSES_PATH),
          constants.POST)
        request(this._api, requestObj, address, (error, response) => {
          response = response ? new Address(response) : response
          responseCallBack(error, response)
        })
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in MerchantServiceHandler : createMerchantAccountAddress')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }
  /**
   * @author Francisco Bueno method for updating a Merchant Address
   */
  updateMerchantAddress(address: Address, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (address && address.id) {
          delete address.profile
          const requestObj = new PaysafeMethod(this.prepareURI(MERCHANT_ADDRESSES_PATH + '/' + address.id),
            constants.PUT)
          request(this._api, requestObj, address, (error, response) => {
            response = response ? new Address(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : address id is missing '
            + 'in MerchantServiceHandler : updateMerchantAccountAddress')
        }
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in MerchantServiceHandler : updateMerchantAccountAddress')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }
  /**
   * @author Francisco Bueno method for getting a Merchant Address
   */
  getMerchantBankAccount(bankAccount: MerchantACHBankAccount, responseCallBack) {
    try {
      const constructor = bankAccount.constructor as typeof MerchantACHBankAccount
      if (typeof (responseCallBack) === 'function') {
        if (bankAccount && bankAccount.id) {
          const requestObj = new PaysafeMethod(this.prepareURI(MERCHANT_BANK_ACC_PATH[bankAccount.type] + '/' + bankAccount.id),
            constants.GET)
          request(this._api, requestObj, null, (error, response) => {
            response = response ? new constructor(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : bankAccount id is missing '
            + 'in MerchantServiceHandler : getMerchantBankAccount')
        }
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in MerchantServiceHandler : getMerchantBankAccount')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }
  /**
   * @author Francisco Bueno method for creating a Merchant ACH Bank Account
   */
  createMerchantBankAccount(bankAccount: MerchantACHBankAccount, responseCallBack) {
    try {
      const constructor = bankAccount.constructor as typeof MerchantACHBankAccount
      if (typeof (responseCallBack) === 'function') {
        const requestObj = new PaysafeMethod(
          this.prepareMerchantAccountURI(MERCHANT_BANK_ACC_PATH[bankAccount.type]),
          constants.POST)
        request(this._api, requestObj, bankAccount, (error, response) => {
          response = response ? new constructor(response) : response
          responseCallBack(error, response)
        })
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in MerchantServiceHandler : createMerchantBankAccount')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }
  /**
   * @author Francisco Bueno method for updating a Merchant Bank Account
   */
  updateMerchantBankAccount(bankAccount: MerchantACHBankAccount, responseCallBack) {
    try {
      const constructor = bankAccount.constructor as typeof MerchantACHBankAccount
      if (typeof (responseCallBack) === 'function') {
        if (bankAccount && bankAccount.id) {
          const requestObj = new PaysafeMethod(
            this.prepareURI(MERCHANT_BANK_ACC_PATH[bankAccount.type] + '/' + bankAccount.id),
            constants.PUT)
          request(this._api, requestObj, bankAccount, (error, response) => {
            response = response ? new constructor(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : bankaccount id is missing '
            + 'in MerchantServiceHandler : updateMerchantBankAccount')
        }
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in MerchantServiceHandler : updateMerchantBankAccount')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }
  /**
   * @author Francisco Bueno method for deleting a Merchant Bank Account
   */
  deleteMerchantBankAccount(bankAccount, responseCallBack) {
    try {
      const constructor = bankAccount.constructor as typeof MerchantACHBankAccount
      if (typeof (responseCallBack) === 'function') {
        if (bankAccount && bankAccount.id) {
          const requestObj = new PaysafeMethod(this.prepareURI(MERCHANT_BANK_ACC_PATH[bankAccount.type] + '/' + bankAccount.id),
            constants.DELETE)
          request(this._api, requestObj, bankAccount, (error, response) => {
            response = response ? new constructor(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : account id is missing '
            + 'in MerchantServiceHandler : deleteMerchantBankAccount')
        }
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in MerchantServiceHandler : deleteMerchantBankAccount')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }
  /**
   * @author Francisco Bueno method for getting a Merchant Microdeposit
   */
  getMerchantMicroDeposit(id: string, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        const requestObj = new PaysafeMethod(this.prepareURI(MERCHANT_MICRODEPOSIT_PATH + SEPARATOR + id),
          constants.GET)
        request(this._api, requestObj, null, (error, response) => {
          // response = response ? new MicroDeposit(response) : response;
          responseCallBack(error, response)
        })
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in MerchantServiceHandler : getMerchantMicroDeposit')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }
  /**
   * @author Francisco Bueno method for creating a Merchant MicroDeposit
   */
  createMerchantMicroDeposit(bankAccount: MerchantACHBankAccount, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        const requestObj = new PaysafeMethod(this.prepareURI(MERCHANT_BANK_ACC_PATH[bankAccount.type] +
          SEPARATOR + bankAccount.id + MERCHANT_MICRODEPOSIT_PATH),
          constants.POST)
        request(this._api, requestObj, { }, (error, response) => {
          response = response ? new MicroDeposit(response) : response
          responseCallBack(error, response)
        })
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in MerchantServiceHandler : createMerchantMicroDeposit')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * @author Francisco Bueno method for validating a Merchant MicroDeposit
   */
  validateMerchantMicroDeposit(microDeposit: MicroDeposit, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        const requestObj = new PaysafeMethod(this.prepareURI(MERCHANT_MICRODEPOSIT_PATH +
          SEPARATOR + microDeposit.id + MERCHANT_MICRODEPOSIT_VALIDATE_PATH),
          constants.POST)
        request(this._api, requestObj, microDeposit, (error, response) => {
          response = response ? new MicroDeposit(response) : response
          responseCallBack(error, response)
        })
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in MerchantServiceHandler : getMerchantMicroDeposit')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * @author Francisco Bueno method for looking up Merchant Terms and Conditions Acceptance Request
   */
  getMerchantAcceptanceTermsAndConditions(term: Terms, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (term.id) {
          const requestObj = new PaysafeMethod(this.prepareURI(MERCHANT_TC_PATH + '/' + term.id),
            constants.GET)
          request(this._api, requestObj, null, (error, response) => {
            response = response ? new Terms(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : merchant account id is missing '
            + 'in MerchantServiceHandler : getMerchantAcceptanceTCAccount')
        }
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in MerchantServiceHandler : getMerchantAcceptanceTCAccount')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }
  /**
   * @author Francisco Bueno method for looking up Merchant Terms and Conditions as HTML
   */
  getMerchantTermsAndConditions(responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        const requestObj = new PaysafeMethod(this.prepareMerchantAccountURI(MERCHANT_TC_PATH),
          constants.GET)
        request(this._api, requestObj, null, (error, response) => {
          // response = response ? new Terms(response) : response;
          responseCallBack(error, response)
        })
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in MerchantServiceHandler : getMerchantTCAccount')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }
  /**
   * @author Francisco Bueno method for accepting Merchant Terms and Conditions
   */
  acceptMerchantTermsAndConditions(terms: Terms, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        const requestObj = new PaysafeMethod(this.prepareMerchantAccountURI(MERCHANT_TC_PATH),
          constants.POST)
        request(this._api, requestObj, { version: terms.version }, (error, response) => {
          response = response ? new Terms(response) : response
          responseCallBack(error, response)
        })
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in MerchantServiceHandler : acceptMerchantTCAccount')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  private prepareMerchantURI(path: string, id: string) {
    return URI + MERCHANT_PATH + SEPARATOR + id + path
  }

  private prepareMerchantAccountURI(path: string, id = this._api.accountNumber) {
    return URI + MERCHANT_ACCOUNT_PATH + SEPARATOR + id + path
  }

  private prepareURI(path: string) {
    return URI + path
  }
}
