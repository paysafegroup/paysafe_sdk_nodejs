import * as Environment from '../bin/environment'
import { MerchantACHBankAccount } from './account/ACHBankAccount'
import { MerchantBACSBankAccount } from './account/BACSBankAccount'
import { BusinessOwner } from './account/businessOwner'
import { MerchantEFTBankAccount } from './account/EFTBankAccount'
import { Merchant } from './account/merchant'
import { MerchantAccount } from './account/merchantAccount'
import { MerchantDescriptor } from './account/merchantDescriptor'
import { MicroDeposit } from './account/microdeposit'
import { RecoveryQuestion } from './account/recoveryQuestion'
import { MerchantSEPABankAccount } from './account/SEPABankAccount'
import { Terms } from './account/terms'
import { User } from './account/user'
import { PaysafeAPIDetails } from './api-details'
import { AccordD } from './cardpayments/accordD'
import { Authentication } from './cardpayments/authentication'
import { Authorization } from './cardpayments/authorization'
import { AuthorizationReversal } from './cardpayments/authorizationreversal'
import { BillingDetails } from './cardpayments/billingDetails'
import { Card } from './cardpayments/card'
import { CardExpiry } from './cardpayments/cardExpiry'
import { MasterPass } from './cardpayments/masterPass'
import { Pagination } from './cardpayments/pagination'
import { Refund } from './cardpayments/refund'
import { Settlement } from './cardpayments/settlement'
import { ShippingDetails } from './cardpayments/shippingDetails'
import { Verification } from './cardpayments/verification'
import { VisaAdditionalAuthData } from './cardpayments/visaAdditionalAuthData'
import { CardServiceHandler } from './CardServiceHandler'
import { PaysafeError } from './common/error'
import { CustomerServiceHandler } from './CustomerServiceHandler'
import { ACHBankAccount } from './customervault/ACHBankAccount'
import { Address } from './customervault/address'
import { BACSBankAccount } from './customervault/BACSBankAccount'
import { DateOfBirth } from './customervault/dateofbirth'
import { EFTBankAccount } from './customervault/EFTBankAccount'
import { Mandate } from './customervault/mandate'
import { Profile } from './customervault/profile'
import { SEPABankAccount } from './customervault/SEPABankAccount'
import { Purchase } from './directdebit/purchase'
import { StandaloneCredit } from './directdebit/standalonecredits'
import { DirectDebitServiceHandler } from './DirectDebitServiceHandler'
import { MerchantServiceHandler } from './MerchantServiceHandler'
import { EnrollmentCheck } from './threedsecure/enrollmentchecks'
import { ThreeDsecureServiceHandler } from './ThreeDsecureServiceHandler'

export {
  Merchant,
  MerchantAccount,
  MerchantACHBankAccount,
  MerchantBACSBankAccount,
  MerchantEFTBankAccount,
  MerchantSEPABankAccount,
  MicroDeposit,
  User,
  RecoveryQuestion,
  BusinessOwner,
  Terms,
  Card,
  AccordD,
  Authentication,
  Authorization,
  AuthorizationReversal,
  BillingDetails,
  CardExpiry,
  MasterPass,
  MerchantDescriptor,
  Pagination,
  // RecipientDateOfBirth,
  Refund,
  Settlement,
  ShippingDetails,
  Verification,
  VisaAdditionalAuthData,
  Address,
  DateOfBirth,
  Profile,
  ACHBankAccount,
  BACSBankAccount,
  EFTBankAccount,
  SEPABankAccount,
  Mandate,
  Purchase,
  StandaloneCredit,
  EnrollmentCheck,
}

export class Paysafe {
  Merchant = Merchant
  MerchantAccount = MerchantAccount
  MerchantACHBankAccount = MerchantACHBankAccount
  MerchantBACSBankAccount = MerchantBACSBankAccount
  MerchantEFTBankAccount = MerchantEFTBankAccount
  MerchantSEPABankAccount = MerchantSEPABankAccount
  MicroDeposit = MicroDeposit
  User = User
  RecoveryQuestion = RecoveryQuestion
  BusinessOwner = BusinessOwner
  Terms = Terms
  Card = Card
  AccordD = AccordD
  Authentication = Authentication
  Authorization = Authorization
  AuthorizationReversal = AuthorizationReversal
  BillingDetails = BillingDetails
  CardExpiry = CardExpiry
  MasterPass = MasterPass
  MerchantDescriptor = MerchantDescriptor
  Pagination = Pagination
  // RecipientDateOfBirth = DateOfBirth
  Refund = Refund
  Settlement = Settlement
  ShippingDetails = ShippingDetails
  Verification = Verification
  VisaAdditionalAuthData = VisaAdditionalAuthData
  Address = Address
  DateOfBirth = DateOfBirth
  Profile = Profile
  ACHBankAccount = ACHBankAccount
  BACSBankAccount = BACSBankAccount
  EFTBankAccount = EFTBankAccount
  SEPABankAccount = SEPABankAccount
  Mandate = Mandate
  Purchase = Purchase
  StandaloneCredit = StandaloneCredit
  EnrollmentCheck = EnrollmentCheck
  // authentication = require('./threedsecure/authentications')

  public merchantService: MerchantServiceHandler
  public cardService: CardServiceHandler
  public customerService: CustomerServiceHandler
  public directDebitService: DirectDebitServiceHandler
  public threeDsecureService: ThreeDsecureServiceHandler

  private api: PaysafeAPIDetails

  constructor(apiKey, apiPassword, environment: 'LIVE' | 'TEST' | 'LOCALTEST' | 'SBOXTEST', accountNumber: string) {
    const env: Environment.Environment = Environment[environment]
    if (apiKey && apiPassword && environment && accountNumber && env) {
      this.api = {
        key: apiKey,
        password: apiPassword,
        environment: env,
        accountNumber,
      }

      // Services
      this.merchantService = new MerchantServiceHandler(this.api)
      this.cardService = new CardServiceHandler(this.api)
      this.customerService = new CustomerServiceHandler(this.api)
      this.directDebitService = new DirectDebitServiceHandler(this.api)
      this.threeDsecureService = new ThreeDsecureServiceHandler(this.api)
    } else if (!apiKey) {
      throw new Error('Please provide API key!')
    } else if (!apiPassword) {
      throw new Error('Please provide API password!')
    } else if (!environment) {
      throw new Error("Please provide Environment string i.e 'TEST' or 'LIVE'!")
    } else if (!env) {
      throw new Error("Environment string must be 'TEST' or 'LIVE'!")
    } else if (!accountNumber) {
      throw new Error('Please provide Merchant Account Number!')
    }
  }

  error(code: string, message: string) {
    return new PaysafeError({ code, message })
  }

  updateConfig(host: string, maxSockets: number, timeout: number) {
    this.api.environment = Environment.createEnv(host, maxSockets, timeout)
  }
}
