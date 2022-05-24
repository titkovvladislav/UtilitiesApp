import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { initialState } from "./initialState";
import { saveUser } from "./app.actions";
import { routerReducer } from "@ngrx/router-store";
import { appStateI } from "../models/store.model";

export const appReducer = createReducer(
  initialState,
  on(saveUser, (state,  action ) => {
    return {
      ...state,
      user: action.user,
    }
  })
)

export const reducer: ActionReducerMap<appStateI> = {
  appState: appReducer,
  router: routerReducer
}

