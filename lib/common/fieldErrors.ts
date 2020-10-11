export class FieldErrors {
  field: string
  error: string

  constructor(resp) {
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
