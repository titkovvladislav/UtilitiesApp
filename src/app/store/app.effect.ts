import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ROUTER_NAVIGATION, RouterNavigationAction } from "@ngrx/router-store";
import { Title } from "@angular/platform-browser";
import { tap } from "rxjs";
import { RouterStateTitle } from "../models/store.model";

@Injectable()
export class AppEffect {
  constructor(
    private actions$: Actions,
    private titleService: Title
  ) { }
  updateTitle$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(ROUTER_NAVIGATION),
        tap((action: RouterNavigationAction<RouterStateTitle>) => {
          this.titleService.setTitle(action.payload.routerState.title);
        }))
  }, { dispatch: false })


}
