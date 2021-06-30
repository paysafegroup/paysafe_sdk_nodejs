import { DateOfBirth } from '../customervault/dateofbirth'

/**
 * @deprecated
 */
export class VisaAdditionalAuthData {
  recipientDateOfBirth: DateOfBirth
  recipientZip: string
  recipientLastName: string
  recipientAccountNumber: string

  constructor(resp) {
    if (resp) {
      if (resp.recipientDateOfBirth) {
        this.recipientDateOfBirth = new DateOfBirth(
            resp.recipientDateOfBirth)
      }
      if (resp.recipientZip) {
        this.recipientZip = resp.recipientZip
      }
      if (resp.recipientLastName) {
        this.recipientLastName = resp.recipientLastName
      }
      if (resp.recipientAccountNumber) {
        this.recipientAccountNumber = resp.recipientAccountNumber
      }
    }
  }

  setRecipientDateOfBirth(recipientDateOfBirth: DateOfBirth) {
    this.recipientDateOfBirth = recipientDateOfBirth
  }

  getRecipientDateOfBirth() {
    return this.recipientDateOfBirth
  }

  setRecipientZip(recipientZip: string) {
    this.recipientZip = recipientZip
  }

  getRecipientZip() {
    return this.recipientZip
  }

  setRecipientLastName(
      recipientLastName) {
    this.recipientLastName = recipientLastName
  }

  getRecipientLastName() {
    return this.recipientLastName
  }

  setRecipientAccountNumber(
      recipientAccountNumber) {
    this.recipientAccountNumber = recipientAccountNumber
  }

  getRecipientAccountNumber() {
    return this.recipientAccountNumber
  }
}
