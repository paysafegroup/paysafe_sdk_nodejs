import { FieldErrors } from './fieldErrors'
import { Link } from './link'

export class PaysafeError {
  /**
   * Helper factory which takes raw paysafe errors and outputs wrapping instances
   */
  static generate(code, message) {
    return new PaysafeError({
      code,
      message,
    })
  }

  code?: string
  message?: string
  links?: any[]
  fieldErrors?: any[]
  details?: string

  constructor(resp) {
    if (resp) {
      if (resp.code) {
        this.code = resp.code
      }
      if (resp.message) {
        this.message = resp.message
      }
      if (resp.links) {
          this.links = resp.links.map((link) => new Link(link))
      }
      if (resp.fieldErrors) {
          this.fieldErrors = resp.fieldErrors.map((fieldError) => new FieldErrors (fieldError))
      }
      if (resp.details) {
        this.details = resp.details
      }
    }
  }

  setDetails(details) {
    this.details = details
  }

  getDetails() {
    return this.details
  }

  setFieldErrors(fieldErrors) {
    this.fieldErrors = fieldErrors
  }

  getFieldErrors() {
    return this.fieldErrors
  }

  setCode(code) {
    this.code = code
  }

  getCode() {
    return this.code
  }

  setMessage(message) {
    this.message = message
  }

  getMessage() {
    return this.message
  }

  setLinks(links) {
    this.links = links
  }

  getLinks() {
    return this.links
  }
}
