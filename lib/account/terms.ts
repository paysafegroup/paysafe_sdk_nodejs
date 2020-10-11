import { GenericLinkedObject } from '../generic-linked-object'

export class Terms extends GenericLinkedObject {
  public version: string
  public acceptanceDate: string

  constructor(resp) {
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

  setVersion(version) {
    this.version = version
  }

  getVersion() {
    return this.version
  }

  setAcceptanceDate(acceptanceDate) {
    this.acceptanceDate = acceptanceDate
  }

  getAcceptanceDate() {
    return this.acceptanceDate
  }
}
