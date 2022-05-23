import { ResUserDataI } from "../../models/users.model";
import { createReducer, on } from "@ngrx/store";
import { add } from "../actions/user.actions";

export interface State {
  user: ResUserDataI;
}
export const initialState: State = {
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

export const userReducer = createReducer(
  initialState,
  on(add, (state,  user ) => {
    console.log('adada')
    console.log(state)
    return {
      ...state,
      user: user.user}
  })
)
