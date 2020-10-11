import { Address } from '../customervault/address'
import { DateOfBirth } from '../customervault/dateofbirth'
import { GenericLinkedObject, IGenericLinkedObject } from '../generic-linked-object'

export interface IBusinessOwner extends IGenericLinkedObject {
  firstName?: string
  middleName?: string
  lastName?: string
  jobTitle?: string
  phone?: string
  email?: string
  ssn?: string
  dateOfBirth?: DateOfBirth
  currentAddress?: Address
}

export class BusinessOwner extends GenericLinkedObject {
  firstName: string
  middleName: string
  lastName: string
  jobTitle: string
  phone: string
  email: string
  ssn: string
  dateOfBirth: DateOfBirth
  currentAddress: Address

  constructor(resp?: IBusinessOwner) {
    super(resp)

    if (resp) {
      // Required
      if (resp.firstName) {
        this.firstName = resp.firstName
      }
      if (resp.middleName) {
        this.middleName = resp.middleName
      }
      // Required
      if (resp.lastName) {
        this.lastName = resp.lastName
      }
      if (resp.email) {
        this.email = resp.email
      }
      // Required
      if (resp.jobTitle) {
        this.jobTitle = resp.jobTitle
      }
      // Required
      if (resp.phone) {
        this.phone = resp.phone
      }
      // Required
      if (resp.ssn) {
        this.ssn = resp.ssn
      }
      // Required
      if (resp.dateOfBirth) {
        this.dateOfBirth = new DateOfBirth(resp.dateOfBirth)
      }
      // Required
      if (resp.currentAddress) {
        this.currentAddress = resp.currentAddress
      }
    }
  }

  setFirstName(firstName: string) {
    this.firstName = firstName
  }

  getFirstName() {
    return this.firstName
  }

  setMiddleName(middleName: string) {
    this.middleName = middleName
  }

  getMiddleName() {
    return this.middleName
  }

  setLastName(lastName: string) {
    this.lastName = lastName
  }

  getLastName() {
    return this.lastName
  }

  setEmail(email: string) {
    this.email = email
  }

  getEmail() {
    return this.email
  }

  setJobTitle(jobTitle: string) {
    this.jobTitle = jobTitle
  }

  getJobTitle() {
    return this.jobTitle
  }

  setPhone(phone: string) {
    this.phone = phone
  }

  getPhone() {
    return this.phone
  }

  setSSN(ssn: string) {
    this.ssn = ssn
  }

  getSSN() {
    return this.ssn
  }

  setDateOfBirth(dateOfBirth: DateOfBirth) {
    this.dateOfBirth = dateOfBirth
  }

  getDateOfBirth() {
    return this.dateOfBirth
  }

  setCurrentAddress(currentAddress: Address) {
    this.currentAddress = currentAddress
  }

  getCurrentAddress() {
    return this.currentAddress
  }
}
