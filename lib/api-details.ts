import { Environment } from '../bin/environment'

export interface PaysafeAPIDetails {
  key: string
  password: string
  environment: Environment
  accountNumber: string
}
