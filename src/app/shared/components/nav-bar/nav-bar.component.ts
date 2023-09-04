import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { ResUserDataI } from "../../../models/users.model";
import { selectFeatureUser } from "../../../store/selectors";
import { Observable } from "rxjs";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public image = '/assets/img/mainLogo.png'
  public user$: Observable<ResUserDataI> = this.store.select(selectFeatureUser)
  constructor(
    private route: Router,
    private store: Store
    ) { }

  ngOnInit(): void {
  }

  public logOut(): void {
    localStorage.clear()
    this.route.navigate(['login'])
  }

}
