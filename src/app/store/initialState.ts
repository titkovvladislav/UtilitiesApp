import { ResUserDataI } from "../models/users.model";

export interface UtilitiesState {
  user: ResUserDataI;
}
export const initialState: UtilitiesState = {
  user: {
    email: '',
    login: '',
    organization: '',
    fullName: {
      firstName:  '',
      secondName: '',
      patronymic: '',
    },
    idToken: '',
  }
}
