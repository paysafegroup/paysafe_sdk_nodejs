import { BillingDetails } from '../cardpayments/billingDetails'
import { ACHBankAccount } from '../customervault/ACHBankAccount'
import { BACSBankAccount } from '../customervault/BACSBankAccount'
import { EFTBankAccount } from '../customervault/EFTBankAccount'
import { Profile } from '../customervault/profile'
import { SEPABankAccount } from '../customervault/SEPABankAccount'
import { GenericLinkedObject } from '../generic-linked-object'

export class Purchase extends GenericLinkedObject {
  merchantRefNum: string
  amount: number
  ach: ACHBankAccount
  bacs: BACSBankAccount
  sepa: SEPABankAccount
  eft: EFTBankAccount
  profile: Profile
  billingDetails: BillingDetails
  customerIp: string
  dupCheck: boolean
  txnTime: string
  currencyCode: string
  status: string
  purchases: Purchase[]

  constructor(resp) {
    super(resp)

    if (resp) {
      if (resp.merchantRefNum) {
        this.merchantRefNum = resp.merchantRefNum
      }
      if (resp.amount) {
        this.amount = resp.amount
      }
      if (resp.ach) {
        this.ach = new ACHBankAccount(resp.ach)
      }
      if (resp.bacs) {
        this.bacs = new BACSBankAccount(resp.bacs)
      }
      if (resp.sepa) {
        this.sepa = new SEPABankAccount(resp.sepa)
      }
      if (resp.eft) {
        this.eft = new EFTBankAccount(resp.eft)
      }
      if (resp.profile) {
        this.profile = new Profile(resp.profile)
      }
      if (resp.billingDetails) {
        this.billingDetails = new BillingDetails(resp.billingDetails)
      }
      if (resp.customerIp) {
        this.customerIp = resp.customerIp
      }
      if (typeof resp.dupCheck !== 'undefined') {
        this.dupCheck = resp.dupCheck
      }
      if (resp.txnTime) {
        this.txnTime = resp.txnTime
      }
      if (resp.currencyCode) {
        this.currencyCode = resp.currencyCode
      }
      if (resp.status) {
        this.status = resp.status
      }
      if (resp.purchases) {
        this.purchases = resp.purchases.map((purchase) => new Purchase(purchase))
      }
    }
  }

  setMerchantRefNum(merchantRefNum) {
    this.merchantRefNum = merchantRefNum
  }

  getMerchantRefNum() {
    return this.merchantRefNum
  }

  setAmount(amount) {
    this.amount = amount
  }

  getAmount() {
    return this.amount
  }

  setACH(ach: ACHBankAccount) {
    this.ach = ach
  }

  getACH() {
    return this.ach
  }

  setETF(eft: EFTBankAccount) {
    this.eft = eft
  }

  getETF() {
    return this.eft
  }

  setBACS(bacs: BACSBankAccount) {
    this.bacs = bacs
  }

  getBACS() {
    return this.bacs
  }

  setSEPA(sepa: SEPABankAccount) {
    this.sepa = sepa
  }

  getSEPA() {
    return this.sepa
  }

  setProfile(profile: Profile) {
    this.profile = profile
  }

  getProfile() {
    return this.profile
  }

  setBillingDetails(billingDetails: BillingDetails) {
    this.billingDetails = billingDetails
  }

  getBillingDetails() {
    return this.billingDetails
  }

  setCustomerIp(customerIp) {
    this.customerIp = customerIp
  }

  getCustomerIp() {
    return this.customerIp
  }

  setDupCheck(dupCheck) {
    this.dupCheck = dupCheck
  }

  getDupCheck() {
    return this.dupCheck
  }

  setTxnTime(txnTime) {
    this.txnTime = txnTime
  }

  getTxnTime() {
    return this.txnTime
  }

  setCurrencyCode(currencyCode) {
    this.currencyCode = currencyCode
  }

  getCurrencyCode() {
    return this.currencyCode
  }

  setPurchases(purchases) {
    this.purchases = purchases
  }

  getPurchases() {
    return this.purchases
  }

  setStatus(status) {
    this.status = status
  }

  getStatus() {
    return this.status
  }
}
