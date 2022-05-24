import { UtilitiesState } from "../models/store.model";

export const initialState: UtilitiesState = {
  user: {
    email: null,
    login: null,
    organization: null,
    fullName: {
      firstName:  null,
      secondName: null,
      patronymic: null,
    },
    idToken: '',
  }
}
