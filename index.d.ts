import { IStripeError } from 'stripe'

declare class Paysafe {
  constructor(apiKey: string, apiPassword: string, environment: string, accountNumber: string | boolean);

  merchantService: Paysafe.resources.Merchant
  customerService: Paysafe.resources.Customer
  cardService: Paysafe.resources.Card

}
export = Paysafe;

declare namespace Paysafe {

  namespace customers {
    interface ICustomer {
      id: string,
      status: string,
      merchantCustomerId: string,
      locale: string,
      firstName: string,
      middleName: string,
      lastName: string,
      email: string,
      phone: string,
      dateOfBirth: common.IDateOfBirth
      paymentToken: string,
      error?: any,
    }
  }
  namespace cards {
    interface ICard {
      id: string
      lastDigits: string
      cvv: string
      type: string
      paymentToken: string
      cardType?: 'AX' | 'BC' | 'BL' | 'CB' | 'DN' | 'DS' | 'EC' | 'JC' | 'MA' | 'MC' | 'SO' | 'CU' | 'TP' | 'VE' | 'VI' | 'Unknown',
      cardExpiry: ICardExpiry
      holderName: string
      billingAddressId: string
      defaultCardIndicator: boolean
      status: string
      error?: common.IError,
    }

    interface ICardExpiry {
      month: number
      year: number
    }

    interface ISettlements {
      id: string
      error?: common.IError
    }

    interface IRefund {
      id: string
      amount: number
      merchantRefNum: string
      settlements: ISettlements
      status?: string
      error?: common.IError
    }

    interface IAuthorization {
      id: string
      merchantRefNum: string
      amount: number
      card: ICard
      settleWithAuth: boolean
      description?: string
      currencyCode?: string
      status?: string
      error?: common.IError
    }
  }
  namespace merchants {
    interface IMerchant {
      id: string
      name: string  // Required
      links: common.ILink[]
      error?: common.IError
    }
    interface IMerchantAccount {
      id: string
      legalEntity: string
      productCode: string
      currency: string
      region: string
      locale: string
      category: string  // Required
      averageTransactionAmount: number  // Required
      yearlyVolumeRange: string  // Required
      phone: string  // Required
      usAccountDetails: IUsAccountDetails
      merchantDescriptor: IMerchantDescriptor
      status: string
      name: string
      links: common.ILink[]
      error: common.IError
    }

    interface IMerchantUser {
      id: string
      userName: string
      email: string
      password: string
      recoveryQuestion: IRecoveryQuestion
      links: common.ILink[]
      error?: common.IError
    }

    interface IBusinessOwner {
      id: string,
      firstName: string,
      middleName?: string,
      lastName: string,
      email?: string,
      jobTitle: string,
      phone: string,
      dateOfBirth: common.IDateOfBirth
      ssn: string,
      currentAddress: common.IAddress
      isApplicant?: boolean,
      isControlProng?: boolean,
      error?: any,
    }

    interface ITerm {
      id: string,
      version?: string,
      acceptanceDate?: string,
      error?: any,
    }

    interface IRecoveryQuestion {
      id: string
      question: string
      questionId: string
      answer: string
      error?: common.IError
    }

    interface IMicroDeposit {
      id: string,
      amount: string,
      status: string,
      error?: any,
    }

    interface IUsAccountDetails {
      type: string
      description: string
      isCardPresent: boolean
      hasPreviouslyProcessedCards: boolean
      shipsGoods: boolean
      deliveryTimeRange: string
      refundPolicy: boolean
      refundPolicyDescription: string
      federalTaxNumber: string // Required
    }
    interface IMerchantDescriptor {
      dynamicDescriptor: string  // Required
      phone: string  // Required
    }
  }

  namespace common {
    interface IAddress {
      id: string,
      street: string
      street2: string
      street3?: string
      city: string
      country: string
      state: string
      zip: string
      phone: string
      status: string
      recipientName: string
      profile: customers.ICustomer
      error?: IError
    }

    interface IDateOfBirth {
      year: string
      month: string
      day: string
    }

    interface IACHBankAccount {
      id: string,
      type: string
      status: string
      statusReason: string
      accountNumber: string
      routingNumber: string
      error?: IError
    }

    interface IBACSBankAccount {
      id: string,
      type: string
      status: string
      statusReason: string
      accountNumber: string
      beneficiaryAccountName: string
      beneficiaryBankCountry: string
      sortCode: string
      billingAddressId: string
      error?: IError
    }

    interface IEFTBankAccount {
      id: string,
      type: string
      status: string
      statusReason: string
      accountNumber: string
      transitNumber: string
      institutionId: string
      error?: IError
    }

    interface ISEPABankAccount {
      id: string,
      type: string
      status: string
      statusReason: string
      accountNumber: string
      beneficiaryAccountName: string
      beneficiaryBankCountry: string
      ibanNumber: string
      swiftNumber: string
      error?: IError
    }

    type IBankAccount = IACHBankAccount | IBACSBankAccount | IEFTBankAccount | ISEPABankAccount

    interface IError {
      code: string
      message: string
      fieldErrors: string
      links: string[]
    }
    interface ILink {
      rel: string
      href: string
    }
  }

  class PaysafeResource {
    constructor(paysafe: Paysafe, urlData: any);
  }

  namespace resources {
    class Merchant extends PaysafeResource{
      createMerchant(data: merchants.IMerchant, response?: IResponseFn<merchants.IMerchant>): Promise<merchants.IMerchant>;
      getMerchantAccount(response?: IResponseFn<merchants.IMerchant>): Promise<merchants.IMerchantAccount>;
      createMerchantAccount(data: merchants.IMerchantAccount, response?: IResponseFn<merchants.IMerchantAccount>): Promise<merchants.IMerchantAccount>;
      updateMerchantAccount(data: merchants.IMerchantAccount, response?: IResponseFn<merchants.IMerchantAccount>): Promise<merchants.IMerchantAccount>;
      activateMerchantAccount(response?: IResponseFn<any>): Promise<any>;
      getMerchantUser(response?: IResponseFn<merchants.IMerchantUser>): Promise<merchants.IMerchantUser>;
      createMerchantUser(data: merchants.IMerchantUser, response?: IResponseFn<merchants.IMerchantUser>): Promise<merchants.IMerchantUser>;
      getMerchantBusinessOwner(data: merchants.IBusinessOwner, response?: IResponseFn<merchants.IBusinessOwner>): Promise<merchants.IBusinessOwner>;
      createMerchantBusinessOwner(data: merchants.IBusinessOwner, response?: IResponseFn<merchants.IBusinessOwner>): Promise<merchants.IBusinessOwner>;
      updateMerchantBusinessOwner(data: merchants.IBusinessOwner, response?: IResponseFn<merchants.IBusinessOwner>): Promise<merchants.IBusinessOwner>;
      getMerchantBusinessOwnerAddress(data: common.IAddress, response?: IResponseFn<common.IAddress>): Promise<common.IAddress>;
      createMerchantBusinessOwnerAddress(data: common.IAddress, response?: IResponseFn<common.IAddress>): Promise<common.IAddress>;
      updateMerchantBusinessOwnerAddress(data: common.IAddress, response?: IResponseFn<common.IAddress>): Promise<common.IAddress>;
      getMerchantAddress(data: common.IAddress, response?: IResponseFn<common.IAddress>): Promise<common.IAddress>;
      createMerchantAddress(data: common.IAddress, response?: IResponseFn<common.IAddress>): Promise<common.IAddress>;
      updateMerchantAddress(data: common.IAddress, response?: IResponseFn<common.IAddress>): Promise<common.IAddress>;
      getMerchantBankAccount(data: common.IBankAccount, response?: IResponseFn<common.IBankAccount>): Promise<common.IBankAccount>;
      createMerchantBankAccount(data: common.IBankAccount, response?: IResponseFn<common.IBankAccount>): Promise<common.IBankAccount>;
      updateMerchantBankAccount(data: common.IBankAccount, response?: IResponseFn<common.IBankAccount>): Promise<common.IBankAccount>;
      getMerchantMicroDeposit(data: merchants.IMicroDeposit, response?: IResponseFn<merchants.IMicroDeposit>): Promise<merchants.IMicroDeposit>;
      createMerchantMicroDeposit(data: any, response?: IResponseFn<merchants.IMicroDeposit>): Promise<merchants.IMicroDeposit>;
      validateMerchantMicroDeposit(data: merchants.IMicroDeposit, response?: IResponseFn<merchants.IMicroDeposit>): Promise<merchants.IMicroDeposit>;
      getMerchantAcceptanceTermsAndConditions(data: merchants.ITerm, response?: IResponseFn<merchants.ITerm>): Promise<merchants.ITerm>;
      getMerchantTermsAndConditions(response?: IResponseFn<merchants.ITerm>): Promise<any>;
      acceptMerchantTermsAndConditions(data: any, response?: IResponseFn<merchants.ITerm>): Promise<merchants.ITerm>;
    }

    class Customer extends PaysafeResource {
      getCustmerProfile(data: customers.ICustomer, response?: IResponseFn<customers.ICustomer>): Promise<customers.ICustomer>;
      createCustmerProfile(data: customers.ICustomer, response?: IResponseFn<customers.ICustomer>): Promise<customers.ICustomer>;
      updateCustmerProfile(data: customers.ICustomer, response?: IResponseFn<customers.ICustomer>): Promise<customers.ICustomer>;
      createCustmerAddress(data: common.IAddress, response?: IResponseFn<common.IAddress>): Promise<common.IAddress>;
      updateCustmerAddress(data: common.IAddress, response?: IResponseFn<common.IAddress>): Promise<common.IAddress>;
      getCustmerCard(data: cards.ICard, response?: IResponseFn<cards.ICard>): Promise<cards.ICard>;
      createCustmerCard(data: cards.ICard, response?: IResponseFn<cards.ICard>): Promise<cards.ICard>;

    }

    class Card extends PaysafeResource {
      authorize(data: cards.IAuthorization, response?: IResponseFn<cards.IAuthorization>): Promise<cards.IAuthorization>;
      reverseAuth(data: any, response?: IResponseFn<any>): Promise<any>;
      getRefund(data: cards.IRefund, response?: IResponseFn<cards.IRefund>): Promise<cards.IRefund>;
      refund(data: cards.IRefund, response?: IResponseFn<cards.IRefund>): Promise<cards.IRefund>;
      cancelRefund(data: cards.IRefund, response?: IResponseFn<cards.IRefund>): Promise<cards.IRefund>;
      /* TODO: Add more services */
    }
  }

  type IResponseFn<R> = (err: common.IError, value: R) => void;


  // class PaysafeResource {
  //   constructor(paysafe: Paysafe);
  // }
  //
  // namespace resources {
  //   class MerchantServiceHandler extends PaysafeResource {
  //     constructor(paysafe: any)
  //
  //     createMerchant(data: merchants.IMerchant): merchants.IMerchant
  //   }
  // }
}
