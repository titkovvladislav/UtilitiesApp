import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { ResUserDataI } from "../../models/users.model";
import { selectFeatureUser } from "../../store/selectors";
import { Observable } from "rxjs";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public image = '/assets/img/mainLogo.png'
  public user$!: Observable<any>
  constructor(
    private route: Router,
    private store: Store
    ) { }

  ngOnInit(): void {
    this.user$ = this.store.select(selectFeatureUser)
  }

  public logOut(): void {
    localStorage.clear()
    this.route.navigate(['login'])
  }

}
