declare class Paysafe {
  // resources: typeof Paysafe.resources
  // PaysafeResource: typeof Paysafe.PaysafeResource

  constructor(apiKey: string, apiPassword: string, environment: string, accountNumber: string | boolean);

  getConstant(c: string): any

}
export = Paysafe;

declare namespace Paysafe {

  namespace merchants {
    interface IMerchant {
      id: string
      name: string  // Required
      links: common.ILink[]
      error: common.IError
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
      error: common.IError
    }

    interface IRecoveryQuestion {
      id: string
      question: string
      questionId: string
      answer: string
      error: common.IError
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
