import { createAction, props } from "@ngrx/store";
import { ResUserDataI } from "../../models/users.model";

export const add = createAction('[User] add', props<{user: ResUserDataI}>());

