export interface AuthUserI {
  email: string,
  password: string,
  confirmPassword: string
}

export interface ResUserDataI {
  kind: string,
  localId: string,
  email: string,
  displayName: string,
  idToken: string,
  registered: boolean,
  refreshToken: string,
  expiresIn: string
}
