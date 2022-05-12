export interface authUser {
  email: string,
  password: string,
  confirmPassword: string
}

export interface resUserData {
  kind: string,
  localId: string,
  email: string,
  displayName: string,
  idToken: string,
  registered: boolean,
  refreshToken: string,
  expiresIn: string
}
