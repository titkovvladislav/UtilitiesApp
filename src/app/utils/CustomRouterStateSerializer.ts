import { RouterStateSerializer } from "@ngrx/router-store";
import { RouterStateSnapshot } from "@angular/router";
import { RouterStateTitle } from "../models/store.model";

export class CustomRouterStateSerializer implements RouterStateSerializer<RouterStateTitle>{

  serialize(routerState: RouterStateSnapshot): RouterStateTitle {
    let route = routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const title = route.data['title'];
    const url = routerState.url
    return { title, url };
  }
}
