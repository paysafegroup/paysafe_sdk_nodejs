import { IError, PaysafeError } from './common/error'

export interface IGenericObject {
  id?: string
  error?: PaysafeError | IError
}

export class GenericObject {
  public id?: string
  public error?: PaysafeError

  constructor(resp?: IGenericObject) {
    if (resp) {
      if (resp.id) {
        this.id = resp.id
      }

      if (resp.error) {
        this.setError(resp.error)
      }
    }
  }

  setId(id: string) {
    this.id = id
  }

  getId() {
    return this.id
  }

  setError(error: PaysafeError | IError) {
    this.error = new PaysafeError(error)
  }

  getError() {
    return this.error
  }
}
