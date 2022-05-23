export interface AuthUserI {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface FullNameUserI {
  firstName:  string;
  secondName: string;
  patronymic: string;
}

export interface ResUserDataI {
  email: string;
  login: string;
  organization: string;
  fullName: FullNameUserI;
  idToken: string;
  //refreshToken: string;
  //expiresIn: string;
}
