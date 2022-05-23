import { createAction, props } from "@ngrx/store";
import { ResUserDataI } from "../models/users.model";


export const saveUser = createAction('[User] saveUser', props<{user: ResUserDataI}>());

