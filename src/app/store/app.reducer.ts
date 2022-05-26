import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { initialState } from "./initialState";
import { saveUser } from "./app.actions";
import { routerReducer } from "@ngrx/router-store";
import { AppStateI } from "../models/store.model";

export const appReducer = createReducer(
  initialState,
  on(saveUser, (state,  action ) => {
    return {
      ...state,
      user: action.user,
    }
  })
)

export const reducer: ActionReducerMap<AppStateI> = {
  appState: appReducer,
  router: routerReducer
}

