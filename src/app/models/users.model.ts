export interface AuthUserI {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface FullNameUserI {
  firstName:  string | null;
  secondName: string | null;
  patronymic: string | null;
}

export interface ResUserDataI {
  email: string | null;
  login: string | null;
  organization: string | null;
  fullName: FullNameUserI;
  idToken: string;
  //refreshToken: string;
  //expiresIn: string;
}
