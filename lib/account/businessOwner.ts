import { Address } from '../customervault/address'
import { DateOfBirth } from '../customervault/dateofbirth'
import { GenericLinkedObject } from '../generic-linked-object'

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

  constructor(resp: any) {
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
        if (resp.currentAddress instanceof Array) {
          this.currentAddress = resp.currentAddress.map((address) => new Address(address))
        } else {
          this.currentAddress = resp.currentAddress
        }
      }
    }
  }

  setFirstName(firstName) {
    this.firstName = firstName
  }

  getFirstName() {
    return this.firstName
  }

  setMiddleName(middleName) {
    this.middleName = middleName
  }

  getMiddleName() {
    return this.middleName
  }

  setLastName(lastName) {
    this.lastName = lastName
  }

  getLastName() {
    return this.lastName
  }

  setEmail(email) {
    this.email = email
  }

  getEmail() {
    return this.email
  }

  setJobTitle(jobTitle) {
    this.jobTitle = jobTitle
  }

  getJobTitle() {
    return this.jobTitle
  }

  setPhone(phone) {
    this.phone = phone
  }

  getPhone() {
    return this.phone
  }

  setSsn(ssn) {
    this.ssn = ssn
  }

  getSsn() {
    return this.ssn
  }

  setDateOfBirth(dateOfBirth) {
    this.dateOfBirth = dateOfBirth
  }

  getDateOfBirth() {
    return this.dateOfBirth
  }

  setCurrentAddress(currentAddress) {
    this.currentAddress = currentAddress
  }

  getCurrentAddress() {
    return this.currentAddress
  }
}
