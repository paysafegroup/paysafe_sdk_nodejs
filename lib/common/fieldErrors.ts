export interface IFieldError {
  field: string
  error: string
}

export class FieldError implements IFieldError {
  field: string
  error: string

  constructor(resp?: IFieldError) {
    if (resp) {
      if (resp.field) {
        this.field = resp.field
      }
      if (resp.error) {
        this.error = resp.error
      }
    }
  }

  setField(field: string) {
    this.field = field
  }

  getField() {
    return this.field
  }

  setError(error: string) {
    this.error = error
  }

  getError() {
    return this.error
  }
}
