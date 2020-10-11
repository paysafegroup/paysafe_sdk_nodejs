import { Card } from '../cardpayments/card'
import { GenericObject } from '../generic'
import { ACHBankAccount } from './ACHBankAccount'
import { Address } from './address'
import { BACSBankAccount } from './BACSBankAccount'
import { DateOfBirth } from './dateofbirth'
import { EFTBankAccount } from './EFTBankAccount'
import { SEPABankAccount } from './SEPABankAccount'

export class Profile extends GenericObject {
  status: string
  merchantCustomerId: string
  locale: string
  firstName: string
  middleName: string
  lastName: string
  dateOfBirth: DateOfBirth
  ip: string
  gender: string
  nationality: string
  email: string
  phone: string
  cellPhone: string
  paymentToken: string
  addresses: Address[]
  cards: Card[]
  achbankaccounts: ACHBankAccount[]
  eftbankaccounts: EFTBankAccount[]
  bacsbankaccounts: BACSBankAccount[]
  sepabankaccounts: SEPABankAccount[]

  constructor(resp) {
    super(resp)
    if (resp) {
      if (resp.status) {
        this.status = resp.status
      }
      if (resp.merchantCustomerId) {
        this.merchantCustomerId = resp.merchantCustomerId
      }
      if (resp.locale) {
        this.locale = resp.locale
      }
      if (resp.firstName) {
        this.firstName = resp.firstName
      }
      if (resp.middleName) {
        this.middleName = resp.middleName
      }
      if (resp.lastName) {
        this.lastName = resp.lastName
      }
      if (resp.dateOfBirth) {
        this.dateOfBirth = new DateOfBirth(resp.dateOfBirth)
      }
      if (resp.ip) {
        this.ip = resp.ip
      }
      if (resp.gender) {
        this.gender = resp.gender
      }
      if (resp.nationality) {
        this.nationality = resp.nationality
      }
      if (resp.email) {
        this.email = resp.email
      }
      if (resp.phone) {
        this.phone = resp.phone
      }
      if (resp.cellPhone) {
        this.cellPhone = resp.cellPhone
      }
      if (resp.paymentToken) {
        this.paymentToken = resp.paymentToken
      }
      if (resp.addresses) {
        if (resp.addresses instanceof Array) {
          this.addresses = new resp.addresses.map((address) => new Address(address))
        } else {
          this.addresses = resp.addresses
        }
      }
      if (resp.cards) {
        if (resp.cards instanceof Array) {
          this.cards = resp.cards.map((card) => new Card(card))
        } else {
          this.cards = resp.cards
        }
      }
      if (resp.achbankaccounts) {
        if (resp.achbankaccounts instanceof Array) {
          this.achbankaccounts = resp.achbankaccounts.map((a) => new ACHBankAccount(a))
        } else {
          this.achbankaccounts = resp.achbankaccounts
        }
      }
      if (resp.eftbankaccounts) {
        if (resp.eftbankaccounts instanceof Array) {
          this.eftbankaccounts = resp.eftbankaccounts.map((a) => new EFTBankAccount(a))
        } else {
          this.eftbankaccounts = resp.eftbankaccounts
        }
      }
      if (resp.bacsbankaccounts) {
        if (resp.bacsbankaccounts instanceof Array) {
          this.bacsbankaccounts = resp.bacsbankaccounts.map((a) => new BACSBankAccount(a))
        } else {
          this.bacsbankaccounts = resp.bacsbankaccounts
        }
      }
      if (resp.sepabankaccounts) {
        if (resp.sepabankaccounts instanceof Array) {
          this.sepabankaccounts = resp.sepabankaccounts.map((a) => new SEPABankAccount(a))
        } else {
          this.sepabankaccounts = resp.sepabankaccounts
        }
      }
      if (resp.status) {
        this.status = resp.status
      }
    }
  }

  setStatus(status) {
    this.status = status
  }

  getStatus() {
    return this.status
  }

  setCards(cards: Card[]) {
    this.cards = cards
  }

  getCards() {
    return this.cards
  }

  setCard(card: Card) {
    this.cards = [card]
  }

  getCard() {
    return this.cards[0]
  }

  setACHBankAccounts(achbankaccounts) {
    this.achbankaccounts = achbankaccounts
  }

  getACHBankAccounts() {
    return this.achbankaccounts
  }

  setEFTBankAccounts(eftbankaccounts) {
    this.eftbankaccounts = eftbankaccounts
  }

  getEFTBankAccounts() {
    return this.eftbankaccounts
  }

  setBACSBankAccounts(bacsbankaccounts) {
    this.bacsbankaccounts = bacsbankaccounts
  }

  getBACSBankAccounts() {
    return this.bacsbankaccounts
  }

  setSEPABankAccounts(sepabankaccounts) {
    this.sepabankaccounts = sepabankaccounts
  }

  getSEPABankAccounts() {
    return this.sepabankaccounts
  }

  setAddresses(addresses) {
    this.addresses = addresses
  }

  getAddresses() {
    return this.addresses
  }

  setPaymentToken(paymentToken) {
    this.paymentToken = paymentToken
  }

  getPaymentToken() {
    return this.paymentToken
  }

  setCellPhone(cellPhone) {
    this.cellPhone = cellPhone
  }

  getCellPhone() {
    return this.cellPhone
  }

  setPhone(phone) {
    this.phone = phone
  }

  getPhone() {
    return this.phone
  }

  setEmail(email) {
    this.email = email
  }

  getEmail() {
    return this.email
  }

  setNationality(nationality) {
    this.nationality = nationality
  }

  getNationality() {
    return this.nationality
  }

  setGender(gender) {
    this.gender = gender
  }

  getGender() {
    return this.gender
  }

  setIp(ip) {
    this.ip = ip
  }

  getIp() {
    return this.ip
  }

  setDateOfBirth(dateOfBirth) {
    this.dateOfBirth = dateOfBirth
  }

  getDateOfBirth() {
    return this.dateOfBirth
  }

  setLastName(lastName) {
    this.lastName = lastName
  }

  getLastName() {
    return this.lastName
  }

  setMiddleName(middleName) {
    this.middleName = middleName
  }

  getMiddleName() {
    return this.middleName
  }

  setFirstName(firstName) {
    this.firstName = firstName
  }

  getFirstName() {
    return this.firstName
  }

  setLocale(locale) {
    this.locale = locale
  }

  getLocale() {
    return this.locale
  }

  setMerchantCustomerId(merchantCustomerId) {
    this.merchantCustomerId = merchantCustomerId
  }

  getMerchantCustomerId() {
    return this.merchantCustomerId
  }
}
