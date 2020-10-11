import { PaysafeError } from './common/error'

export class GenericObject {
  public id?: string
  public error?: PaysafeError

  constructor(resp: any) {
    if (resp) {
      if (resp.id) {
        this.id = resp.id
      }

      if (resp.error) {
        this.error = new PaysafeError(resp.error)
      }
    }
  }

  setId(id: string) {
    this.id = id
  }

  getId() {
    return this.id
  }

  setError(error: PaysafeError) {
    this.error = error
  }

  getError() {
    return this.error
  }
}
