import { PaysafeAPIDetails } from './api-details'
import { PaysafeError } from './common/error'
import { PaysafeMethod } from './PaysafeMethod'
import { request } from './PaysafeRequest'

export class GenericServiceHandler {
  constructor(protected api: PaysafeAPIDetails) {
  }

  protected exception(message: string) {
    return PaysafeError.generate(400, `InvalidRequestException: ${message}`)
  }

  protected request(method: PaysafeMethod, requestObject?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      request(this.api, method, requestObject, (error, response) => {
        if (error) {
          reject(error)
        } else if (response && response.error) {
          reject(new PaysafeError(response.error))
        } else {
          resolve(response)
        }
      })
    })
  }
}
