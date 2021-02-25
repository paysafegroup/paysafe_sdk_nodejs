import { Environment } from '../bin/environment'

export interface PaysafeAPIDetails {
  key: string
  password: string
  environment: Environment
  accountNumber: string
  /**
   * If `true` then `console.log` is used by default.
   */
  logging?: boolean | ((message: any) => void)
}
