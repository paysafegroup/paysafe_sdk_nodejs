
export type StoredCredentialType = 'ADHOC' | 'TOPUP' | 'RECURRING'
export type StoredCredentialOccurrence = 'INITIAL' | 'SUBSEQUENT'

export interface IStoredCredential {
  type?: StoredCredentialType
  occurrence?: StoredCredentialOccurrence
  initialTransactionId?: string
  externalInitialTransactionId?: string
}

export class StoredCredential implements IStoredCredential {
  /**
   * This specifies the type of request being made.
   * Possible values are:
   * ADHOC – Ad hoc consumer-initiated request
   * TOPUP – Unscheduled merchant-iniitated request
   * RECURRING – Scheduled, merchant-initiated recurring request
   * Note: This value defaults to ADHOC.
   */
  type: StoredCredentialType
  /**
   * This specifies whether this stored credential request is initial or recurring.
   * Possible values are:
   * INITIAL – Used when this is the first time the consumer uses this credit card
   * SUBSEQUENT – Used when the consumer uses this credit card for subsquent requests
   * Note: This value defaults to INITIAL.
   */
  occurrence: StoredCredentialOccurrence
  /**
   * Id of the initial Recurring Payment transaction.
   * This id should be stored from the auth response of the transaction indicated as initial with the following:
   * type=RECURRING/TOPUP, occurrence=INITIAL.
   * This reference should be provided when:
   * type=RECURRING and occurrence=SUBSEQUENT
   * type=TOPUP and occurrence=SUBSEQUENT
   * Note: This reference is a must to meet PSD 2 authentication process requirements for merchant initiated transactions successfully.
   * string length <= 36
   */
  initialTransactionId: string
  /**
   * Id of the initial Recurring Payment transaction in case this transaction was processed through external PSP.
   * This reference should be provided only when:
   * type=RECURRING and occurrence=SUBSEQUENT
   * type=TOPUP and occurrence=SUBSEQUENT
   * Note: This reference cannot be provided along with initialTransactionId.
   * string length <= 256
   */
  externalInitialTransactionId: string

  constructor(resp?: IStoredCredential) {
    if (resp) {
      if (resp.type) {
        this.type = resp.type
      }
      if (resp.occurrence) {
        this.occurrence = resp.occurrence
      }
      if (resp.initialTransactionId) {
        this.initialTransactionId = resp.initialTransactionId
      }
      if (resp.externalInitialTransactionId) {
        this.externalInitialTransactionId = resp.externalInitialTransactionId
      }
    }
  }

  public getType(): StoredCredentialType {
      return this.type
  }

  public setType(type: StoredCredentialType): void {
      this.type = type
  }

  public getOccurrence(): StoredCredentialOccurrence {
      return this.occurrence
  }

  public setOccurrence(occurrence: StoredCredentialOccurrence): void {
      this.occurrence = occurrence
  }

  public getInitialTransactionId(): string {
    return this.initialTransactionId
  }

  public setInitialTransactionId(initialTransactionId: string): void {
    this.initialTransactionId = initialTransactionId
  }

  public getExternalInitialTransactionId(): string {
    return this.externalInitialTransactionId
  }

  public setExternalInitialTransactionId(externalInitialTransactionId: string): void {
    this.externalInitialTransactionId = externalInitialTransactionId
  }
}
