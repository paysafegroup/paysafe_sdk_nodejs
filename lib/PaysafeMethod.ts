export class PaysafeMethod {
  constructor(public readonly apiUrl, public readonly method: 'POST' | 'GET' | 'PUT' | 'DELETE') {
  }

  buildUrl(apiEndPoint: string) {
    return `${apiEndPoint}/${this.apiUrl}`
  }
}
