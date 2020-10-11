import { GenericLinkedObject } from '../generic-linked-object'
import { RecoveryQuestion } from './recoveryQuestion'

/**
 * User
 *
 * Add a user to a merchant account. The user will be able to sign in to the Paysafe Merchant Back Office for that account.
 */
export class User extends GenericLinkedObject {
  userName: string
  password: string
  email: string
  recoveryQuestion: RecoveryQuestion
  users: any

  constructor(resp) {
    super(resp)

    if (resp) {
      if (resp.userName) {
        this.userName = resp.userName
      }
      if (resp.password) {
        this.password = resp.password
      }
      if (resp.email) {
        this.email = resp.email
      }
      if (resp.recoveryQuestion) {
        this.recoveryQuestion = new RecoveryQuestion(resp.recoveryQuestion)
      }
      if (resp.users) {
        this.users = resp.users
      }
    }
  }

  setUserName(userName: string) {
    this.userName = userName
  }

  getUserName() {
    return this.userName
  }

  setPassword(password: string) {
    this.password = password
  }

  getPassword() {
    return this.password
  }

  setEmail(email: string) {
    this.email = email
  }

  getEmail() {
    return this.email
  }

  setRecoveryQuestion(recoveryQuestion: RecoveryQuestion) {
    this.recoveryQuestion = recoveryQuestion
  }

  getRecoveryQuestion() {
    return this.recoveryQuestion
  }

  setUsers(users) {
    this.users = users
  }

  getUsers() {
    return this.users
  }
}
