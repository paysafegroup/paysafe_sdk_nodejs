import { PaysafeAPIDetails } from './api-details'
import { Card } from './cardpayments/card'
import { PaysafeError } from './common/error'
import * as constants from './constants'
import { ACHBankAccount } from './customervault/ACHBankAccount'
import { Address } from './customervault/address'
import { BACSBankAccount } from './customervault/BACSBankAccount'
import { EFTBankAccount } from './customervault/EFTBankAccount'
import { Mandate } from './customervault/mandate'
import { Profile } from './customervault/profile'
import { SEPABankAccount } from './customervault/SEPABankAccount'
import { PaysafeMethod } from './PaysafeMethod'
import { request } from './PaysafeRequest'

// PATHS
const URI = 'customervault/v1'
const HEALTH_BEAT_URL = 'customervault/monitor'
const PROFILE_PATH = '/profiles/'
const ADDRESS_PATH = '/addresses/'
const CARD_PATH = '/cards/'
const ACH_BANK_ACC_PATH = '/achbankaccounts'
const BACS_BANK_ACC_PATH = '/bacsbankaccounts'
const SEPA_BANK_ACC_PATH = '/sepabankaccounts'
const EFT_BANK_ACC_PATH = '/eftbankaccounts'
const MANDATES = '/mandates/'
const SEPARATOR = '/'

function prepareURI(path: string) {
  return URI + path
}

export class CustomerServiceHandler {
  private _api: PaysafeAPIDetails

  constructor(api: PaysafeAPIDetails) {
    this._api = api
  }

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

  createCustomerProfile(profile, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH), constants.POST)
        request(this._api, requestObj, profile, (error, response) => {
          response = response ? new Profile(response) : response
          responseCallBack(error, response)
        })
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in CustomerServiceHandler : createCustomerProfile')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  getCustomerProfile(profile, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (profile && profile.id) {
          const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id), constants.GET)
          request(this._api, requestObj, null, (error, response) => {
            response = response ? new Profile(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing '
            + 'in CustomerServiceHandler : getCustomerProfile')
        }
      } else {
        console.error('Please provide the responseCallBack function'
          + ' in CustomerServiceHandler : getCustomerProfile')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  deleteCustomerProfile(profile, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (profile && profile.id) {
          const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id), constants.DELETE)
          request(this._api, requestObj, null, (error, response) => {
            response = response ? new Profile(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing'
            + ' in CustomerServiceHandler : deleteCustomerProfile')
        }
      } else {
        console.error('Please provide the responseCallBack function'
          + ' in CustomerServiceHandler : deleteCustomerProfile')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  updateCustomerProfile(profile, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (profile && profile.id) {
          const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id), constants.PUT)
          request(this._api, requestObj, profile, (error, response) => {
            response = response ? new Profile(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing '
            + 'in CustomerServiceHandler : updateCustomerProfile')
        }
      } else {
        console.error('Please provide the responseCallBack function'
          + ' in CustomerServiceHandler : updateCustomerProfile')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  createCustomerAddress(address, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (address && address.profile && address.profile.id) {
          const profile = address.profile
          delete address.profile
          const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + ADDRESS_PATH),
            constants.POST)
          request(this._api, requestObj, address, (error, response) => {
            response = response ? new Address(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing '
            + 'in CustomerServiceHandler : createCustomerAddress')
        }
      } else {
        console.error('Please provide the responseCallBack'
          + ' in function CustomerServiceHandler : createCustomerAddress')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  getCustomerAddress(address, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (address && address.profile && address.profile.id) {
          const profile = address.profile
          delete address.profile
          const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + ADDRESS_PATH + address.id),
            constants.GET)
          request(this._api, requestObj, null, (error, response) => {
            response = response ? new Address(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing '
            + 'in CustomerServiceHandler : getCustomerAddress')
        }
      } else {
        console.error('Please provide the responseCallBack function'
          + ' in CustomerServiceHandler : getCustomerAddress')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  deleteCustomerAddress(address, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (address && address.profile && address.profile.id) {
          const profile = address.profile
          if (address && address.id) {
            delete address.profile
            const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + ADDRESS_PATH + address.id),
              constants.DELETE)
            request(this._api, requestObj, null, (error, response) => {
              response = response ? new Address(response) : response
              responseCallBack(error, response)
            })
          } else {
            throw PaysafeError.generate(400,
              'InvalidRequestException : address id is missing '
              + ' in CustomerServiceHandler : deleteCustomerAddress')
          }
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing'
            + ' in CustomerServiceHandler : deleteCustomerAddress')
        }
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in CustomerServiceHandler : deleteCustomerAddress')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  updateCustomerAddress(address, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (address && address.profile && address.profile.id) {
          const profile = address.profile
          if (address && address.id) {
            delete address.profile
            const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + ADDRESS_PATH + address.id),
              constants.PUT)
            request(this._api, requestObj, address, (error, response) => {
              response = response ? new Address(response) : response
              responseCallBack(error, response)
            })
          } else {
            throw PaysafeError.generate(400,
              'InvalidRequestException : address id is missing '
              + 'in CustomerServiceHandler : updateCustomerAddress')
          }
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing '
            + 'in CustomerServiceHandler : updateCustomerAddress')
        }
      } else {
        console.error('Please provide the responseCallBack function'
          + ' in CustomerServiceHandler : updateCustomerAddress')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  lookUpProfileBySubComponent(
    responseCallBack, profile, inAddress, inCards, inachbankaccounts, ineftbankaccounts) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (profile && profile.id) {
          let toInclude = ''
          if (inAddress) {
            toInclude = 'addresses'
          }
          if (inCards) {
            if (toInclude.length > 0) {
              toInclude += ','
              toInclude += 'cards'
            } else {
              toInclude = 'cards'
            }
          }
          if (inachbankaccounts) {
            if (toInclude.length > 0) {
              toInclude += ','
              toInclude += 'achbankaccounts'
            } else {
              toInclude = 'achbankaccounts'
            }
          }
          if (ineftbankaccounts) {
            if (toInclude.length > 0) {
              toInclude += ','
              toInclude += 'eftbankaccounts'
            } else {
              toInclude = 'eftbankaccounts'
            }
          }
          const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + '?' + 'fields=' + toInclude),
            constants.GET)
          request(this._api, requestObj, null, (error, response) => {
            response = response ? new Profile(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing'
            + ' in CustomerServiceHandler : lookUpProfileBySubComponent')
        }
      } else {
        console.error('Please provide the responseCallBack function'
          + ' in CustomerServiceHandler : lookUpProfileBySubComponent')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  createCustomerCard(card, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (card && card.profile && card.profile.id) {
          const profile = card.profile
          delete card.profile
          const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + CARD_PATH), constants.POST)
          request(this._api, requestObj, card, (error, response) => {
            response = response ? new Card(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing '
            + 'in CustomerServiceHandler : createCustomerCard')
        }
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in CustomerServiceHandler : createCustomerCard')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  getCustomerCard(card, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (card && card.profile && card.profile.id) {
          const profile = card.profile
          if (card && card.id) {
            delete card.profile
            const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + CARD_PATH + card.id),
              constants.GET)
            request(this._api, requestObj, null, (error, response) => {
              response = response ? new Card(response) : response
              responseCallBack(error, response)
            })
          } else {
            throw PaysafeError.generate(400,
              'InvalidRequestException : card id is missing '
              + 'in CustomerServiceHandler : getCustomerCard')
          }
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing '
            + 'in CustomerServiceHandler : getCustomerCard')
        }
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in CustomerServiceHandler : getCustomerCard')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  deleteCustomerCard(card, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (card && card.profile && card.profile.id) {
          const profile = card.profile
          if (card && card.id) {
            delete card.profile
            const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + CARD_PATH + card.id),
              constants.DELETE)
            request(this._api, requestObj, null, (error, response) => {
              response = response ? new Card(response) : response
              responseCallBack(error, response)
            })
          } else {
            throw PaysafeError.generate(400,
              'InvalidRequestException : card id is missing '
              + 'in CustomerServiceHandler : deleteCustomerCard')
          }
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing'
            + ' in CustomerServiceHandler : deleteCustomerCard')
        }
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in CustomerServiceHandler : deleteCustomerCard')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  updateCustomerCard(card, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (card && card.profile && card.profile.id) {
          const profile = card.profile
          if (card && card.id) {
            delete card.profile
            const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + CARD_PATH + card.id),
              constants.PUT)
            request(this._api, requestObj, card, (error, response) => {
              response = response ? new Card(response) : response
              responseCallBack(error, response)
            })
          } else {
            throw PaysafeError.generate(400,
              'InvalidRequestException : card id is missing '
              + 'in CustomerServiceHandler : updateCustomerCard')
          }
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing '
            + 'in CustomerServiceHandler : updateCustomerCard')
        }
      } else {
        console.error('Please provide the responseCallBack function '
          + 'in CustomerServiceHandler : updateCustomerCard')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }


  /**
   * Method for Create ACH Bank Account.
   *
   */
  createACHBankAccount(achbankAccount, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (achbankAccount && achbankAccount.profile && achbankAccount.profile.id) {
          const profile = achbankAccount.profile
          delete achbankAccount.profile
          const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + ACH_BANK_ACC_PATH),
            constants.POST)
          request(this._api, requestObj, achbankAccount, (error, response) => {
            response = response ? new ACHBankAccount(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing '
            + 'in CustomerServiceHandler : createachbankAccount')
        }
      } else {
        console.error('Please provide the responseCallBack'
          + ' in function CustomerServiceHandler : createachbankAccount')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * Method to Look Up an ACH Bank Account.
   *
   */

  getACHBankAccount(achBankAccount, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (achBankAccount && achBankAccount.id && achBankAccount.profile.id) {
          const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + achBankAccount.profile.id
            + ACH_BANK_ACC_PATH + '/' + achBankAccount.id), constants.GET)
          request(this._api, requestObj, null, (error, response) => {
            response = response ? new ACHBankAccount(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing '
            + 'in CustomerServiceHandler : getachBankAccount')
        }
      } else {
        console.error('Please provide the responseCallBack function'
          + ' in CustomerServiceHandler : getachBankAccount')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * Method to Update an ACH Bank Account.
   *
   */

  updateACHBankAccount(achBankAccount, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (achBankAccount && achBankAccount.profile.id) {
          const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + achBankAccount.profile.id
            + ACH_BANK_ACC_PATH + '/' + achBankAccount.id), constants.PUT)
          request(this._api, requestObj, achBankAccount, (error, response) => {
            response = response ? new ACHBankAccount(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing '
            + 'in CustomerServiceHandler : updateachBankAccount')
        }
      } else {
        console.error('Please provide the responseCallBack function'
          + ' in CustomerServiceHandler : updateachBankAccount')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * Method to Delete an ACH Bank Account.
   *
   */

  deleteACHBankAccount(achBankAccount, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (achBankAccount && achBankAccount.id && achBankAccount.profile.id) {
          const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + achBankAccount.profile.id
            + ACH_BANK_ACC_PATH + '/' + achBankAccount.id), constants.DELETE)
          request(this._api, requestObj, null, (error, response) => {
            response = response ? new ACHBankAccount(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing '
            + 'in CustomerServiceHandler : deleteachBankAccount')
        }
      } else {
        console.error('Please provide the responseCallBack function'
          + ' in CustomerServiceHandler : deleteachBankAccount')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /*----------------------------BACS_BANK_ACOUNT-----------------------*/
  /**
   * Method to Create BACS Bank Account.
   *
   */
  createBACSBankAccount(bacsbankAccount, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (bacsbankAccount && bacsbankAccount.profile && bacsbankAccount.profile.id) {
          const profile = bacsbankAccount.profile
          delete bacsbankAccount.profile
          const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + BACS_BANK_ACC_PATH),
            constants.POST)
          request(this._api, requestObj, bacsbankAccount, (error, response) => {
            response = response ? new BACSBankAccount(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing '
            + 'in CustomerServiceHandler : createbacsbankAccount')
        }
      } else {
        console.error('Please provide the responseCallBack'
          + ' in function CustomerServiceHandler : createbacsbankAccount')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * Method to Look Up an BACS Bank Account.
   *
   */

  getBACSBankAccount(bacsBankAccount, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (bacsBankAccount && bacsBankAccount.id && bacsBankAccount.profile.id) {
          const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + bacsBankAccount.profile.id
            + BACS_BANK_ACC_PATH + '/' + bacsBankAccount.id), constants.GET)
          request(this._api, requestObj, null, (error, response) => {
            response = response ? new BACSBankAccount(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing '
            + 'in CustomerServiceHandler : bacsBankAccount')
        }
      } else {
        console.error('Please provide the responseCallBack function'
          + ' in CustomerServiceHandler : bacsBankAccount')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * Method to Update an BACS Bank Account.
   *
   */

  updateBACSBankAccount(bacsBankAccount, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (bacsBankAccount && bacsBankAccount.profile.id) {
          const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + bacsBankAccount.profile.id
            + BACS_BANK_ACC_PATH + '/' + bacsBankAccount.id), constants.PUT)
          request(this._api, requestObj, bacsBankAccount, (error, response) => {
            response = response ? new BACSBankAccount(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing '
            + 'in CustomerServiceHandler : updatebacsBankAccount')
        }
      } else {
        console.error('Please provide the responseCallBack function'
          + ' in CustomerServiceHandler : updatebacsBankAccount')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * Method to Delete an BACS Bank Account.
   *
   */

  deleteBACSBankAccount(bacsBankAccount, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (bacsBankAccount && bacsBankAccount.id && bacsBankAccount.profile.id) {
          const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + bacsBankAccount.profile.id
            + BACS_BANK_ACC_PATH + '/' + bacsBankAccount.id), constants.DELETE)
          request(this._api, requestObj, null, (error, response) => {
            response = response ? new BACSBankAccount(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing '
            + 'in CustomerServiceHandler : deletebacsBankAccount')
        }
      } else {
        console.error('Please provide the responseCallBack function'
          + ' in CustomerServiceHandler : deletebacsBankAccount')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /*----------------------------EFT_BANK_ACCOUNT---------------------------*/

  /**
   * Method to Create an EFT Bank Account.
   *
   */

  createEFTBankAccount(eftbankAccount, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (eftbankAccount && eftbankAccount.profile && eftbankAccount.profile.id) {
          const profile = eftbankAccount.profile
          delete eftbankAccount.profile
          const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + EFT_BANK_ACC_PATH),
            constants.POST)
          request(this._api, requestObj, eftbankAccount, (error, response) => {
            response = response ? new EFTBankAccount(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing '
            + 'in CustomerServiceHandler : createeftbankAccount')
        }
      } else {
        console.error('Please provide the responseCallBack'
          + ' in function CustomerServiceHandler : createeftbankAccount')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * Method to Lookup an EFT Bank Account.
   *
   */


  getEFTBankAccount(eftBankAccount, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (eftBankAccount && eftBankAccount.id && eftBankAccount.profile.id) {
          const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + eftBankAccount.profile.id
            + EFT_BANK_ACC_PATH + '/' + eftBankAccount.id), constants.GET)
          request(this._api, requestObj, null, (error, response) => {
            response = response ? new EFTBankAccount(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing '
            + 'in CustomerServiceHandler : eftBankAccount')
        }
      } else {
        console.error('Please provide the responseCallBack function'
          + ' in CustomerServiceHandler : eftBankAccount')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * Method to Update an EFT Bank Account.
   *
   */

  updateEFTBankAccount(eftBankAccount, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (eftBankAccount && eftBankAccount.profile.id) {
          const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + eftBankAccount.profile.id
            + EFT_BANK_ACC_PATH + '/' + eftBankAccount.id), constants.PUT)
          request(this._api, requestObj, eftBankAccount, (error, response) => {
            response = response ? new EFTBankAccount(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing '
            + 'in CustomerServiceHandler : updateeftBankAccount')
        }
      } else {
        console.error('Please provide the responseCallBack function'
          + ' in CustomerServiceHandler : updateeftBankAccount')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * Method to delete an EFT Bank Account.
   *
   */

  deleteEFTBankAccount(eftBankAccount, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (eftBankAccount && eftBankAccount.id && eftBankAccount.profile.id) {
          const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + eftBankAccount.profile.id
            + EFT_BANK_ACC_PATH + '/' + eftBankAccount.id), constants.DELETE)
          request(this._api, requestObj, null, (error, response) => {
            response = response ? new EFTBankAccount(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing '
            + 'in CustomerServiceHandler : deleteeftBankAccount')
        }
      } else {
        console.error('Please provide the responseCallBack function'
          + ' in CustomerServiceHandler : deleteeftBankAccount')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }


  /*---------------------------------SEPA_BANK_ACCOUNT------------------------------*/
  /**
   * Method to Create an SEPA Bank Account.
   *
   */

  createSEPABankAccount(sepabankaccount, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (sepabankaccount && sepabankaccount.profile && sepabankaccount.profile.id) {
          const profile = sepabankaccount.profile
          delete sepabankaccount.profile
          const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + SEPA_BANK_ACC_PATH), constants.POST)
          request(this._api, requestObj, sepabankaccount, (error, response) => {
            response = response ? new SEPABankAccount(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing '
            + 'in CustomerServiceHandler : createsepabankAccount')
        }
      } else {
        console.error('Please provide the responseCallBack'
          + ' in function CustomerServiceHandler : createsepabankAccount')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * Method to Lookup SEPA Bank Account.
   *
   */

  getSEPABankAccount(sepaBankAccount, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (sepaBankAccount && sepaBankAccount.id && sepaBankAccount.profile.id) {
          const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + sepaBankAccount.profile.id
            + SEPA_BANK_ACC_PATH + '/' + sepaBankAccount.id), constants.GET)
          request(this._api, requestObj, null, (error, response) => {
            response = response ? new SEPABankAccount(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing '
            + 'in CustomerServiceHandler : sepaBankAccount')
        }
      } else {
        console.error('Please provide the responseCallBack function'
          + ' in CustomerServiceHandler : sepaBankAccount')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * Method to Update SEPA Bank Account.
   *
   */

  updateSEPABankAccount(sepaBankAccount, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (sepaBankAccount && sepaBankAccount.profile && sepaBankAccount.profile.id) {
          const profile = sepaBankAccount.profile
          const sepaid = sepaBankAccount.id
          delete sepaBankAccount.profile
          delete sepaBankAccount.id

          const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + SEPA_BANK_ACC_PATH + '/' + sepaid),
            constants.PUT)

          request(this._api, requestObj, sepaBankAccount, (error, response) => {
            response = response ? new SEPABankAccount(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing '
            + 'in CustomerServiceHandler : updatesepaBankAccount')
        }
      } else {
        console.error('Please provide the responseCallBack function'
          + ' in CustomerServiceHandler : updatesepaBankAccount')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * Method to Delete SEPA Bank Account.
   *
   */

  deleteSEPABankAccount(sepaBankAccount, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (sepaBankAccount && sepaBankAccount.id && sepaBankAccount.profile.id) {
          const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + sepaBankAccount.profile.id
            + SEPA_BANK_ACC_PATH + '/' + sepaBankAccount.id), constants.DELETE)
          request(this._api, requestObj, null, (error, response) => {
            response = response ? new SEPABankAccount(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing '
            + 'in CustomerServiceHandler : deletesepaBankAccount')
        }
      } else {
        console.error('Please provide the responseCallBack function'
          + ' in CustomerServiceHandler : deletesepaBankAccount')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  searchMerchantRefCommon(merchObj) {
    let toInclude = ''
    if (merchObj && merchObj.profiles && merchObj.sepabankaccounts) {
      toInclude = PROFILE_PATH + merchObj.profiles.id + SEPA_BANK_ACC_PATH + SEPARATOR + merchObj.sepabankaccounts.id + MANDATES
    } else if (merchObj && merchObj.profiles && merchObj.bacsbankaccounts) {
      toInclude = PROFILE_PATH + merchObj.profiles.id + BACS_BANK_ACC_PATH + SEPARATOR + merchObj.bacsbankaccounts.id + MANDATES
    }
    return toInclude
  }

  /**
   * Method to create Mandates.
   *
   */

  createMandates(mandates, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {
        if (mandates && mandates.profiles) {
          const toInclude = this.searchMerchantRefCommon(mandates)
          if (mandates.sepabankaccounts) {
            delete mandates.sepabankaccounts
            delete mandates.profiles
          } else if (mandates.bacsbankaccounts) {
            delete mandates.bacsbankaccounts
            delete mandates.profiles
          }
          const requestObj = new PaysafeMethod(prepareURI(toInclude), constants.POST)
          request(this._api, requestObj, mandates, (error, response) => {
            response = response ? new Mandate(response) : response
            responseCallBack(error, response)
          })
        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing '
            + 'in CustomerServiceHandler : create_mandates_sepa_bank')
        }

      } else {
        console.error('Please provide the responseCallBack function '
          + 'in CustomerServiceHandler : create_mandates_sepa_bank')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /*create_mandates_bacs_bankmandates, responseCallBack) {
      try {
          if (typeof (responseCallBack) === "function") {

              if (mandates && mandates.profiles && mandates.bacsbankaccounts) {
                  var profile = mandates.profiles;
                  delete mandates.profiles;

                  var bacsbankaccounts = mandates.bacsbankaccounts;
                  delete mandates.bacsbankaccounts;

                  var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.getId() +
                  BACS_BANK_ACC_PATH+bacsbankaccounts.getId() + MANDATES), constants.POST);
                  request(this._api, requestObj, mandates, function(error, response) {
                      response = response ? new Mandate(response) : response;
                      responseCallBack(error, response);
                  });

              } else {
                  throw PaysafeError.generate(400,
                          "InvalidRequestException : profile id is missing "
                                  + "in CustomerServiceHandler : create_mandates_bacs_bank");
              }

          } else {
              console.error("Please provide the responseCallBack function "
                      + "in CustomerServiceHandler : create_mandates_bacs_bank");
          }
      } catch (err) {
          responseCallBack(err, null);
      }
  };*/


  /**
   * Method to Lookup Mandates.
   *
   */

  lookupMandates(mandates, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {

        if (mandates && mandates.profiles && mandates.profiles.id) {
          const profile = mandates.profiles
          delete mandates.profiles

          const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.getId() + MANDATES + mandates.getId()),
            constants.GET)
          request(this._api, requestObj, profile, (error, response) => {
            response = response ? new Mandate(response) : response
            responseCallBack(error, response)
          })

        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing '
            + 'in CustomerServiceHandler : lookup_mandates')
        }

      } else {
        console.error('Please provide the responseCallBack function '
          + 'in CustomerServiceHandler : createBACSMandates')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * Method to Update Mandates.
   *
   */

  updateMandates(mandates, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {

        if (mandates && mandates.profiles && mandates.profiles.id) {
          const profile = mandates.profiles
          delete mandates.profiles

          const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.getId() + MANDATES + mandates.getId()),
            constants.PUT)
          request(this._api, requestObj, mandates, (error, response) => {
            response = response ? new Mandate(response) : response
            responseCallBack(error, response)
          })

        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing '
            + 'in CustomerServiceHandler : update_mandates')
        }

      } else {
        console.error('Please provide the responseCallBack function '
          + 'in CustomerServiceHandler : update_mandates')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }

  /**
   * Method to Delete Mandates.
   *
   */

  deleteMandates(mandates, responseCallBack) {
    try {
      if (typeof (responseCallBack) === 'function') {

        if (mandates && mandates.profiles && mandates.profiles.id) {
          const profile = mandates.profiles
          delete mandates.profiles

          const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.getId() + MANDATES + mandates.getId()),
            constants.DELETE)
          request(this._api, requestObj, profile, (error, response) => {
            response = response ? new Mandate(response) : response
            responseCallBack(error, response)
          })

        } else {
          throw PaysafeError.generate(400,
            'InvalidRequestException : profile id is missing '
            + 'in CustomerServiceHandler : delete_mandates')
        }

      } else {
        console.error('Please provide the responseCallBack function '
          + 'in CustomerServiceHandler : delete_mandates')
      }
    } catch (err) {
      responseCallBack(err, null)
    }
  }
}
