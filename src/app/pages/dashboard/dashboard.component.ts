import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from "../../services/utilities.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor( private utilitiesService: UtilitiesService ) {}

  ngOnInit(): void {
    this.utilitiesService.getApartment()
  }


}
