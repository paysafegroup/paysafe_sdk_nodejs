export class MasterPass {
  payPassWalletIndicator: string
  authenticationMethod: string
  cardEnrollmentMethod: string
  masterCardAssignedId: string

  constructor(resp) {
    if (resp) {
      if (resp.payPassWalletIndicator) {
        this.payPassWalletIndicator = resp.payPassWalletIndicator
      }
      if (resp.authenticationMethod) {
        this.authenticationMethod = resp.authenticationMethod
      }
      if (resp.cardEnrollmentMethod) {
        this.cardEnrollmentMethod = resp.cardEnrollmentMethod
      }
      if (resp.masterCardAssignedId) {
        this.masterCardAssignedId = resp.masterCardAssignedId
      }
    }
  }

  setCardEnrollmentMethod(cardEnrollmentMethod) {
    this.cardEnrollmentMethod = cardEnrollmentMethod
  }

  getCardEnrollmentMethod() {
    return this.cardEnrollmentMethod
  }

  setMasterCardAssignedId(masterCardAssignedId) {
    this.masterCardAssignedId = masterCardAssignedId
  }

  getMasterCardAssignedId() {
    return this.masterCardAssignedId
  }

  setPayPassWalletIndicator(payPassWalletIndicator) {
    this.payPassWalletIndicator = payPassWalletIndicator
  }

  getPayPassWalletIndicator() {
    return this.payPassWalletIndicator
  }

  setAuthenticationMethod(authenticationMethod) {
    this.authenticationMethod = authenticationMethod
  }

  getAuthenticationMethod() {
    return this.authenticationMethod
  }
}
