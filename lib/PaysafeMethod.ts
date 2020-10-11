export class PaysafeMethod {
  constructor(private apiUrl, public readonly method: 'POST' | 'GET' | 'PUT' | 'DELETE') {
  }

  buildUrl(apiEndPoint: string) {
    return `${apiEndPoint}/${this.apiUrl}`
  }
}
