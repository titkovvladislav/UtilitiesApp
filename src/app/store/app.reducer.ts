import { createReducer, on } from "@ngrx/store";
import { initialState } from "./initialState";
import { saveUser } from "./app.actions";

export const appReducer = createReducer(
  initialState,
  on(saveUser, (state,  action ) => {
    return {
      ...state,
      user: action.user
    }
  })
)
