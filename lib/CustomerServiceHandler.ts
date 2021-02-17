import { Card } from './cardpayments/card'
import * as constants from './constants'
import { ACHBankAccount } from './customervault/ACHBankAccount'
import { ACHSingleUseToken } from './customervault/ACHSingleUseToken'
import { Address } from './customervault/address'
import { BACSBankAccount } from './customervault/BACSBankAccount'
import { CardSingleUseToken } from './customervault/CardSingleUseToken'
import { EFTBankAccount } from './customervault/EFTBankAccount'
import { Mandate } from './customervault/mandate'
import { Profile } from './customervault/profile'
import { SEPABankAccount } from './customervault/SEPABankAccount'
import { GenericServiceHandler } from './generic-service-handler'
import { PaysafeMethod } from './PaysafeMethod'

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
const ACH_SINGLE_USE_TOKENS_PATH = '/achsingleusetokens'
const CARD_SINGLE_USE_TOKENS_PATH = '/singleusetokens'

function prepareURI(path: string) {
  return URI + path
}

export class CustomerServiceHandler extends GenericServiceHandler {
  async monitor(): Promise<any> {
    const requestObj = new PaysafeMethod(HEALTH_BEAT_URL, constants.GET)
    const response = await this.request(requestObj, null)
    return response
  }

  async createCustomerProfile(profile): Promise<Profile> {
    const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH), constants.POST)
    const response = await this.request(requestObj, profile)
    return new Profile(response)
  }

  async getCustomerProfile(profile: Profile): Promise<Profile> {
    let path: string
    if (profile && profile.id) {
      path = PROFILE_PATH + profile.id
    } else if (profile && profile.merchantCustomerId) {
      path = PROFILE_PATH + '?merchantCustomerId=' + profile.merchantCustomerId
    } else {
      throw this.exception('profile id and merchantCustomerId is missing in CustomerServiceHandler.getCustomerProfile')
    }
    const requestObj = new PaysafeMethod(prepareURI(path), constants.GET)
    const response = await this.request(requestObj, null)
    return new Profile(response)
  }

  async deleteCustomerProfile(profile: Profile): Promise<Profile> {
    if (profile && profile.id) {
      const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id), constants.DELETE)
      const response = await this.request(requestObj, null)
      return new Profile(response)
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.deleteCustomerProfile')
    }
  }

  async updateCustomerProfile(profile: Profile): Promise<Profile> {
    if (profile && profile.id) {
      const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id), constants.PUT)
      const response = await this.request(requestObj, profile)
      return new Profile(response)
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.updateCustomerProfile')
    }
  }

  async createCustomerAddress(address: Address): Promise<Address> {
    if (address && address.profile && address.profile.id) {
      const profile = address.profile
      delete address.profile
      const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + ADDRESS_PATH),
        constants.POST)
      const response = await this.request(requestObj, address)
      return new Address(response)
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.createCustomerAddress')
    }
  }

  async getCustomerAddress(address: Address): Promise<Address> {
    if (address && address.profile && address.profile.id) {
      const profile = address.profile
      delete address.profile
      const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + ADDRESS_PATH + address.id),
        constants.GET)
      const response = await this.request(requestObj, null)
      return new Address(response)
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.getCustomerAddress')
    }
  }

  async deleteCustomerAddress(address: Address): Promise<Address> {
    if (address && address.profile && address.profile.id) {
      const profile = address.profile
      if (address && address.id) {
        delete address.profile
        const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + ADDRESS_PATH + address.id),
          constants.DELETE)
        const response = await this.request(requestObj, null)
        return new Address(response)
      } else {
        throw this.exception('address id is missing  in CustomerServiceHandler.deleteCustomerAddress')
      }
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.deleteCustomerAddress')
    }
  }

  async updateCustomerAddress(address: Address): Promise<Address> {
    if (address && address.profile && address.profile.id) {
      const profile = address.profile
      if (address && address.id) {
        delete address.profile
        const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + ADDRESS_PATH + address.id),
          constants.PUT)
        const response = await this.request(requestObj, address)
        return new Address(response)
      } else {
        throw this.exception('address id is missing in CustomerServiceHandler.updateCustomerAddress')
      }
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.updateCustomerAddress')
    }
  }

  async lookUpProfileBySubComponent(profile: Profile, params: {
    inAddress: boolean,
    inCards: boolean,
    inACHBankAccounts: boolean,
    inEFTBankAccounts: boolean,
  }): Promise<Profile> {
    if (profile && profile.id) {
      let toInclude = ''
      if (params.inAddress) {
        toInclude = 'addresses'
      }
      if (params.inCards) {
        if (toInclude.length > 0) {
          toInclude += ','
          toInclude += 'cards'
        } else {
          toInclude = 'cards'
        }
      }
      if (params.inACHBankAccounts) {
        if (toInclude.length > 0) {
          toInclude += ','
          toInclude += 'achbankaccounts'
        } else {
          toInclude = 'achbankaccounts'
        }
      }
      if (params.inEFTBankAccounts) {
        if (toInclude.length > 0) {
          toInclude += ','
          toInclude += 'eftbankaccounts'
        } else {
          toInclude = 'eftbankaccounts'
        }
      }
      const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + '?' + 'fields=' + toInclude), constants.GET)
      const response = await this.request(requestObj)
      return new Profile(response)
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.lookUpProfileBySubComponent')
    }
  }

  async createCustomerCard(card: Card): Promise<Card> {
    if (card && card.profile && card.profile.id) {
      const profile = card.profile
      delete card.profile
      const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + CARD_PATH), constants.POST)
      const response = await this.request(requestObj, card)
      return new Card(response)
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.createCustomerCard')
    }
  }

  /**
   *
   * @param profileId The ID of the profile to which the card is being added. (e.g. a5f1889d-f1be-4bbf-941d-fd9b8d09d5b1)
   * @param singleUseToken The single-use token returned in response to a single-use token creation request.
   * @param accountId The merchant account ID that the merhant provides and will be linked to the card. (e.g. 1002370290)
   */
  async createCustomerCardFromSingleUseToken(profileId: string, singleUseToken: string, accountId?: string): Promise<Card> {
    const method = new PaysafeMethod(prepareURI(PROFILE_PATH + profileId + CARD_PATH), constants.POST)
    const requestObj = {
      singleUseToken,
      accountId,
    }
    const response = await this.request(method, requestObj)
    return new Card(response)
  }

  async getCustomerCard(card: Card): Promise<Card> {
    if (card && card.profile && card.profile.id) {
      const profile = card.profile
      if (card && card.id) {
        delete card.profile
        const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + CARD_PATH + card.id),
          constants.GET)
        const response = await this.request(requestObj, null)
        return new Card(response)
      } else {
        throw this.exception('card id is missing in CustomerServiceHandler.getCustomerCard')
      }
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.getCustomerCard')
    }
  }

  async deleteCustomerCard(card: Card): Promise<Card> {
    if (card && card.profile && card.profile.id) {
      const profile = card.profile
      if (card && card.id) {
        delete card.profile
        const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + CARD_PATH + card.id),
          constants.DELETE)
        const response = await this.request(requestObj, null)
        return new Card(response)
      } else {
        throw this.exception('card id is missing in CustomerServiceHandler.deleteCustomerCard')
      }
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.deleteCustomerCard')
    }
  }

  async updateCustomerCard(card: Card): Promise<Card> {
    if (card && card.profile && card.profile.id) {
      const profile = card.profile
      if (card && card.id) {
        delete card.profile
        const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + CARD_PATH + card.id),
          constants.PUT)
        const response = await this.request(requestObj, card)
        return new Card(response)
      } else {
        throw this.exception('card id is missing in CustomerServiceHandler.updateCustomerCard')
      }
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.updateCustomerCard')
    }
  }


  /**
   * Method for Create ACH Bank Account.
   */
  async createACHBankAccount(bankAccount: ACHBankAccount): Promise<ACHBankAccount> {
    if (bankAccount && bankAccount.profile && bankAccount.profile.id) {
      const profile = bankAccount.profile
      delete bankAccount.profile
      const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + ACH_BANK_ACC_PATH),
        constants.POST)
      const response = await this.request(requestObj, bankAccount)
      return new ACHBankAccount(response)
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.createACHBankAccount')
    }
  }

  /**
   * Method to Look Up an ACH Bank Account.
   */
  async getACHBankAccount(bankAccount: ACHBankAccount): Promise<ACHBankAccount> {
    if (bankAccount && bankAccount.id && bankAccount.profile && bankAccount.profile.id) {
      const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + bankAccount.profile.id
        + ACH_BANK_ACC_PATH + '/' + bankAccount.id), constants.GET)
      const response = await this.request(requestObj, null)
      return new ACHBankAccount(response)
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.getACHBankAccount')
    }
  }

  /**
   * Method to Update an ACH Bank Account.
   */
  async updateACHBankAccount(bankAccount: ACHBankAccount): Promise<ACHBankAccount> {
    if (bankAccount && bankAccount.profile && bankAccount.profile.id) {
      const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + bankAccount.profile.id
        + ACH_BANK_ACC_PATH + '/' + bankAccount.id), constants.PUT)
      const response = await this.request(requestObj, bankAccount)
      return new ACHBankAccount(response)
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.updateACHBankAccount')
    }
  }

  /**
   * Method to Delete an ACH Bank Account.
   */
  async deleteACHBankAccount(bankAccount: ACHBankAccount): Promise<ACHBankAccount> {
    if (bankAccount && bankAccount.id && bankAccount.profile && bankAccount.profile.id) {
      const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + bankAccount.profile.id
        + ACH_BANK_ACC_PATH + '/' + bankAccount.id), constants.DELETE)
      const response = await this.request(requestObj, null)
      return new ACHBankAccount(response)
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.deleteACHBankAccount')
    }
  }

  /*----------------------------BACS_BANK_ACOUNT-----------------------*/

  /**
   * Method to Create BACS Bank Account.
   */
  async createBACSBankAccount(bankAccount: BACSBankAccount): Promise<BACSBankAccount> {
    if (bankAccount && bankAccount.profile && bankAccount.profile.id) {
      const profile = bankAccount.profile
      delete bankAccount.profile
      const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + BACS_BANK_ACC_PATH),
        constants.POST)
      const response = await this.request(requestObj, bankAccount)
      return new BACSBankAccount(response)
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.createbacsbankAccount')
    }
  }

  /**
   * Method to Look Up an BACS Bank Account.
   */
  async getBACSBankAccount(bankAccount: BACSBankAccount): Promise<BACSBankAccount> {
    if (bankAccount && bankAccount.id && bankAccount.profile && bankAccount.profile.id) {
      const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + bankAccount.profile.id
        + BACS_BANK_ACC_PATH + '/' + bankAccount.id), constants.GET)
      const response = await this.request(requestObj, null)
      return new BACSBankAccount(response)
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.getBACSBankAccount')
    }
  }

  /**
   * Method to Update an BACS Bank Account.
   */
  async updateBACSBankAccount(bankAccount: BACSBankAccount): Promise<BACSBankAccount> {
    if (bankAccount && bankAccount.profile && bankAccount.profile.id) {
      const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + bankAccount.profile.id
        + BACS_BANK_ACC_PATH + '/' + bankAccount.id), constants.PUT)
      const response = await this.request(requestObj, bankAccount)
      return new BACSBankAccount(response)
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.updateBACSBankAccount')
    }
  }

  /**
   * Method to Delete an BACS Bank Account.
   */
  async deleteBACSBankAccount(bankAccount: BACSBankAccount): Promise<BACSBankAccount> {
    if (bankAccount && bankAccount.id && bankAccount.profile && bankAccount.profile.id) {
      const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + bankAccount.profile.id
        + BACS_BANK_ACC_PATH + '/' + bankAccount.id), constants.DELETE)
      const response = await this.request(requestObj, null)
      return new BACSBankAccount(response)
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.deleteBACSBankAccount')
    }
  }

  /*----------------------------EFT_BANK_ACCOUNT---------------------------*/

  /**
   * Method to Create an EFT Bank Account.
   */
  async createEFTBankAccount(bankAccount: EFTBankAccount): Promise<EFTBankAccount> {
    if (bankAccount && bankAccount.profile && bankAccount.profile.id) {
      const profile = bankAccount.profile
      delete bankAccount.profile
      const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + EFT_BANK_ACC_PATH),
        constants.POST)
      const response = await this.request(requestObj, bankAccount)
      return new EFTBankAccount(response)
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.createEFTBankAccount')
    }
  }

  /**
   * Method to Lookup an EFT Bank Account.
   */
  async getEFTBankAccount(bankAccount: EFTBankAccount): Promise<EFTBankAccount> {
    if (bankAccount && bankAccount.id && bankAccount.profile && bankAccount.profile.id) {
      const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + bankAccount.profile.id
        + EFT_BANK_ACC_PATH + '/' + bankAccount.id), constants.GET)
      const response = await this.request(requestObj, null)
      return new EFTBankAccount(response)
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.getEFTBankAccount')
    }
  }

  /**
   * Method to Update an EFT Bank Account.
   */
  async updateEFTBankAccount(bankAccount: EFTBankAccount): Promise<EFTBankAccount> {
    if (bankAccount && bankAccount.profile && bankAccount.profile.id) {
      const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + bankAccount.profile.id
        + EFT_BANK_ACC_PATH + '/' + bankAccount.id), constants.PUT)
      const response = await this.request(requestObj, bankAccount)
      return new EFTBankAccount(response)
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.updateEFTBankAccount')
    }
  }

  /**
   * Method to delete an EFT Bank Account.
   */
  async deleteEFTBankAccount(bankAccount: EFTBankAccount): Promise<EFTBankAccount> {
    if (bankAccount && bankAccount.id && bankAccount.profile && bankAccount.profile.id) {
      const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + bankAccount.profile.id
        + EFT_BANK_ACC_PATH + '/' + bankAccount.id), constants.DELETE)
      const response = await this.request(requestObj, null)
      return new EFTBankAccount(response)
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.deleteEFTBankAccount')
    }
  }


  /*---------------------------------SEPA_BANK_ACCOUNT------------------------------*/

  /**
   * Method to Create an SEPA Bank Account.
   */
  async createSEPABankAccount(bankAccount: SEPABankAccount): Promise<SEPABankAccount> {
    if (bankAccount && bankAccount.profile && bankAccount.profile.id) {
      const profile = bankAccount.profile
      delete bankAccount.profile
      const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + SEPA_BANK_ACC_PATH), constants.POST)
      const response = await this.request(requestObj, bankAccount)
      return new SEPABankAccount(response)
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.createSEPABankAccount')
    }
  }

  /**
   * Method to Lookup SEPA Bank Account.
   */
  async getSEPABankAccount(bankAccount: SEPABankAccount): Promise<SEPABankAccount> {
    if (bankAccount && bankAccount.id && bankAccount.profile && bankAccount.profile.id) {
      const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + bankAccount.profile.id
        + SEPA_BANK_ACC_PATH + '/' + bankAccount.id), constants.GET)
      const response = await this.request(requestObj, null)
      return new SEPABankAccount(response)
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.getSEPABankAccount')
    }
  }

  /**
   * Method to Update SEPA Bank Account.
   */
  async updateSEPABankAccount(bankAccount: SEPABankAccount): Promise<SEPABankAccount> {
    if (bankAccount && bankAccount.id && bankAccount.profile && bankAccount.profile.id) {
      const profile = bankAccount.profile
      const sepaid = bankAccount.id
      delete bankAccount.profile
      delete bankAccount.id

      const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.id + SEPA_BANK_ACC_PATH + '/' + sepaid),
        constants.PUT)

      const response = await this.request(requestObj, bankAccount)
      return new SEPABankAccount(response)
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.updateSEPABankAccount')
    }
  }

  /**
   * Method to Delete SEPA Bank Account.
   */
  async deleteSEPABankAccount(bankAccount: SEPABankAccount): Promise<SEPABankAccount> {
    if (bankAccount && bankAccount.id && bankAccount.profile && bankAccount.profile.id) {
      const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + bankAccount.profile.id
        + SEPA_BANK_ACC_PATH + '/' + bankAccount.id), constants.DELETE)
      const response = await this.request(requestObj, null)
      return new SEPABankAccount(response)
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.deleteSEPABankAccount')
    }
  }

  searchMerchantRefCommon(merchObj: Mandate) {
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
   */
  async createMandates(mandate: Mandate): Promise<Mandate> {
    if (mandate && mandate.profiles) {
      const toInclude = this.searchMerchantRefCommon(mandate)
      if (mandate.sepabankaccounts) {
        delete mandate.sepabankaccounts
        delete mandate.profiles
      } else if (mandate.bacsbankaccounts) {
        delete mandate.bacsbankaccounts
        delete mandate.profiles
      }
      const requestObj = new PaysafeMethod(prepareURI(toInclude), constants.POST)
      const response = await this.request(requestObj, mandate)
      return new Mandate(response)
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.create_mandates_sepa_bank')
    }
  }

  /* async create_mandates_bacs_bankmandates): Promise<any> {
      if (mandates && mandates.profiles && mandates.bacsbankaccounts) {
          var profile = mandates.profiles;
          delete mandates.profiles;

          var bacsbankaccounts = mandates.bacsbankaccounts;
          delete mandates.bacsbankaccounts;

          var requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.getId() +
          BACS_BANK_ACC_PATH+bacsbankaccounts.getId() + MANDATES), constants.POST);
          const response = await this.request(requestObj, mandates, function(error, response) {
          return new Mandate(response)
      } else {
          throw this.exception("profile id is missing in CustomerServiceHandler.create_mandates_bacs_bank");
      }
  };*/

  /**
   * Method to Lookup Mandates.
   */
  async lookupMandates(mandates: Mandate): Promise<Mandate> {
    if (mandates && mandates.profiles && mandates.profiles.id) {
      const profile = mandates.profiles
      delete mandates.profiles

      const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.getId() + MANDATES + mandates.getId()),
        constants.GET)
      const response = await this.request(requestObj, profile)
      return new Mandate(response)
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.lookupMandates')
    }
  }

  /**
   * Method to Update Mandates.
   */
  async updateMandates(mandates: Mandate): Promise<Mandate> {
    if (mandates && mandates.profiles && mandates.profiles.id) {
      const profile = mandates.profiles
      delete mandates.profiles

      const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.getId() + MANDATES + mandates.getId()),
        constants.PUT)
      const response = await this.request(requestObj, mandates)
      return new Mandate(response)
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.updateMandates')
    }
  }

  /**
   * Method to Delete Mandates.
   */
  async deleteMandates(mandates: Mandate): Promise<Mandate> {
    if (mandates && mandates.profiles && mandates.profiles.id) {
      const profile = mandates.profiles
      delete mandates.profiles

      const requestObj = new PaysafeMethod(prepareURI(PROFILE_PATH + profile.getId() + MANDATES + mandates.getId()),
        constants.DELETE)
      const response = await this.request(requestObj, profile)
      return new Mandate(response)
    } else {
      throw this.exception('profile id is missing in CustomerServiceHandler.deleteMandates')
    }
  }

  /**
   * This is how you submit an ACH single-use token creation request. In the response, you will find
   * a paymentToken value to include with your Direct Debit Purchase. You have to generate a new
   * single-use token for each ACH transaction you wish to process.
   */
  async createACHSingleUseToken(achSingleUseToken: ACHSingleUseToken): Promise<ACHSingleUseToken> {
    const requestObj = new PaysafeMethod(prepareURI(ACH_SINGLE_USE_TOKENS_PATH), constants.POST)
    const response = await this.request(requestObj, achSingleUseToken)
    return new ACHSingleUseToken(response)
  }

  async getCardWithSingleUseToken(paymentToken: string): Promise<CardSingleUseToken> {
    const requestObj = new PaysafeMethod(prepareURI(CARD_SINGLE_USE_TOKENS_PATH + SEPARATOR + 'search'), constants.POST)
    const response = await this.request(requestObj, { paymentToken })
    return new CardSingleUseToken(response)
  }
}
