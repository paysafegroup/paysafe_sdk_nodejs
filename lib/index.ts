import * as Environment from '../bin/environment'
import { IMerchantACHBankAccount, MerchantACHBankAccount } from './account/ACHBankAccount'
import { MerchantBACSBankAccount } from './account/BACSBankAccount'
import { BusinessOwner, IBusinessOwner } from './account/businessOwner'
import { IMerchantEFTBankAccount, MerchantEFTBankAccount } from './account/EFTBankAccount'
import { IMerchant, Merchant } from './account/merchant'
import { IMerchantAccount, MerchantAccount } from './account/merchantAccount'
import { MerchantDescriptor } from './account/merchantDescriptor'
import { IMicroDeposit, MicroDeposit } from './account/microdeposit'
import { RecoveryQuestion } from './account/recoveryQuestion'
import { MerchantSEPABankAccount } from './account/SEPABankAccount'
import { ITerms, Terms } from './account/terms'
import { IUser, User } from './account/user'
import { PaysafeAPIDetails } from './api-details'
import { AccordD } from './cardpayments/accordD'
import { Authentication } from './cardpayments/authentication'
import { Authorization, AuthorizationStatus, AVSResponse, CvvVerification, Recurring } from './cardpayments/authorization'
import { AuthorizationReversal } from './cardpayments/authorizationreversal'
import { BillingDetails } from './cardpayments/billingDetails'
import { Card, ICard } from './cardpayments/card'
import { CardExpiry, ICardExpiry } from './cardpayments/cardExpiry'
import { MasterPass } from './cardpayments/masterPass'
import { Pagination } from './cardpayments/pagination'
import { Refund, RefundStatus } from './cardpayments/refund'
import { Settlement } from './cardpayments/settlement'
import { ShippingDetails } from './cardpayments/shippingDetails'
import { ISplitPayout, SplitPayout } from './cardpayments/splitPayout'
import { Verification } from './cardpayments/verification'
import { VisaAdditionalAuthData } from './cardpayments/visaAdditionalAuthData'
import { CardServiceHandler } from './CardServiceHandler'
import { PaysafeError } from './common/error'
import { CustomerServiceHandler } from './CustomerServiceHandler'
import { ACHBankAccount } from './customervault/ACHBankAccount'
import { ACHSingleUseToken, IACHSingleUseToken } from './customervault/ACHSingleUseToken'
import { Address, IAddress } from './customervault/address'
import { BACSBankAccount } from './customervault/BACSBankAccount'
import { DateOfBirth, IDateOfBirth } from './customervault/dateofbirth'
import { EFTBankAccount } from './customervault/EFTBankAccount'
import { Mandate } from './customervault/mandate'
import { Profile } from './customervault/profile'
import { SEPABankAccount } from './customervault/SEPABankAccount'
import { Purchase, PurchaseStatus } from './directdebit/purchase'
import { StandaloneCredit } from './directdebit/standalonecredits'
import { DirectDebitServiceHandler } from './DirectDebitServiceHandler'
import { MerchantServiceHandler } from './MerchantServiceHandler'
import { EnrollmentCheck } from './threedsecure/enrollmentchecks'
import { ThreeDsecureServiceHandler } from './ThreeDsecureServiceHandler'

export {
  Merchant, IMerchant,
  MerchantAccount, IMerchantAccount,
  MerchantACHBankAccount, IMerchantACHBankAccount,
  MerchantBACSBankAccount,
  MerchantEFTBankAccount, IMerchantEFTBankAccount,
  MerchantSEPABankAccount,
  MicroDeposit, IMicroDeposit,
  User, IUser,
  RecoveryQuestion,
  BusinessOwner, IBusinessOwner,
  Terms, ITerms,
  Card, ICard,
  AccordD,
  Authentication,
  Authorization,
  AuthorizationStatus,
  CvvVerification,
  AVSResponse,
  Recurring,
  AuthorizationReversal,
  BillingDetails,
  CardExpiry, ICardExpiry,
  MasterPass,
  MerchantDescriptor,
  Pagination,
  // RecipientDateOfBirth,
  Refund, RefundStatus,
  Settlement,
  ShippingDetails,
  Verification,
  VisaAdditionalAuthData,
  Address, IAddress,
  DateOfBirth, IDateOfBirth,
  Profile,
  ACHBankAccount,
  BACSBankAccount,
  EFTBankAccount,
  SEPABankAccount,
  Mandate,
  Purchase,
  PurchaseStatus,
  StandaloneCredit,
  EnrollmentCheck,
  SplitPayout, ISplitPayout,
  ACHSingleUseToken, IACHSingleUseToken,
}

export { PaysafeError as Error }

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
  SplitPayout = SplitPayout
  ACHSingleUseToken = ACHSingleUseToken
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
        debugging: environment !== 'LIVE',
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

  enabledDebugging() {
    this.api.debugging = true
    return this
  }

  error(code: string, message: string) {
    return new PaysafeError({ code, message })
  }

  updateConfig(host: string, maxSockets: number, timeout: number) {
    this.api.environment = Environment.createEnv(host, maxSockets, timeout)
    return this
  }
}
