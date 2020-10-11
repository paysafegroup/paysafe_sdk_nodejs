import { FieldError, IFieldError } from './fieldErrors'
import { ILink, Link } from './link'

export interface IError {
  code?: string
  message?: string
  links?: (Link | ILink)[]
  fieldErrors?: (FieldError | IFieldError)[]
  details?: string
}

export class PaysafeError implements IError {
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
  links?: Link[]
  fieldErrors?: FieldError[]
  details?: string

  constructor(resp?: IError) {
    if (resp) {
      if (resp.code) {
        this.code = resp.code
      }
      if (resp.message) {
        this.message = resp.message
      }
      if (resp.links) {
        this.setLinks(resp.links)
      }
      if (resp.fieldErrors) {
        this.setFieldErrors(resp.fieldErrors)
      }
      if (resp.details) {
        this.details = resp.details
      }
    }
  }

  setDetails(details: string) {
    this.details = details
  }

  getDetails() {
    return this.details
  }

  setFieldErrors(fieldErrors: (FieldError | IFieldError)[]) {
    this.fieldErrors = fieldErrors.map((fieldError) => new FieldError(fieldError))
  }

  getFieldErrors() {
    return this.fieldErrors
  }

  setCode(code: string) {
    this.code = code
  }

  getCode() {
    return this.code
  }

  setMessage(message: string) {
    this.message = message
  }

  getMessage() {
    return this.message
  }

  setLinks(links: (Link | ILink)[]) {
    this.links = links.map((link) => new Link(link))
  }

  getLinks() {
    return this.links
  }
}
