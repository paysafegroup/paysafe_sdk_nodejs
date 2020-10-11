import { GenericLinkedObject, IGenericLinkedObject } from '../generic-linked-object'

export interface ITerms extends IGenericLinkedObject {
  version?: string
  acceptanceDate?: string
}

export class Terms extends GenericLinkedObject {
  public version?: string
  public acceptanceDate?: string

  constructor(resp?: ITerms) {
    super(resp)

    if (resp) {
      if (resp.version) {
        this.version = resp.version
      }
      if (resp.acceptanceDate) {
        this.acceptanceDate = resp.acceptanceDate
      }
    }
  }

  setVersion(version: string) {
    this.version = version
  }

  getVersion() {
    return this.version
  }

  setAcceptanceDate(acceptanceDate: string) {
    this.acceptanceDate = acceptanceDate
  }

  getAcceptanceDate() {
    return this.acceptanceDate
  }
}
