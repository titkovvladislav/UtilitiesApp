import { RouterReducerState } from "@ngrx/router-store";
import { ResUserDataI } from "./users.model";

export interface RouterStateTitle {
  title: string;
  url: string;
}

export interface UtilitiesState {
  user: ResUserDataI;
}

export interface appStateI {
  appState: UtilitiesState;
  router: RouterReducerState<RouterStateTitle>;
}
