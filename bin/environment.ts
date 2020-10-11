export class Environment {
  _host: string
  maxSockets: number
  timeout: number

  constructor(host: string, maxSocket: number, timeout: number) {
    this._host = host
    this.maxSockets = maxSocket
    this.timeout = timeout
  }
}

export const LIVE = new Environment('https://api.paysafe.com', 10, 30000)
export const TEST = new Environment('https://api.test.paysafe.com', 10, 30000)
export const LOCALTEST = new Environment('localhost', 10, 30000)
export const SBOXTEST = new Environment('https://api.sbox.paysafe.com', 10, 30000)

export function createEnv(host: string, maxSockets: number, timeout: number) {
  return new Environment(host, maxSockets, timeout)
}
