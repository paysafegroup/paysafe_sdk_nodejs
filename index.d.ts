import { PaymentChargeService } from '../../src/services/payment/payment-charge.service'

declare class Paysafe {
  // resources: typeof Paysafe.resources
  // PaysafeResource: typeof Paysafe.PaysafeResource

  constructor(apiKey: string, apiPassword: string, environment: string, accountNumber: string | boolean);

  getConstant(c: string): any

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
      profile: ICustomer
      error?: common.IError
    }

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

    interface IRefund {
      id: string
      amount: number
      merchantRefNum: string
      settlements: ISettlements
      status?: string
      error?: common.IError
    }

    interface ISettlements {
      id: string
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

    interface IRecoveryQuestion {
      id: string
      question: string
      questionId: string
      answer: string
      error?: common.IError
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
    interface IDateOfBirth {
      year: string
      month: string
      day: string
    }
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
