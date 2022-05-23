import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public image = '/assets/img/mainLogo.png'

  constructor( private route: Router ) { }

  ngOnInit(): void {
  }

  public logOut(): void {
    localStorage.clear()
    this.route.navigate(['login'])
  }

}
