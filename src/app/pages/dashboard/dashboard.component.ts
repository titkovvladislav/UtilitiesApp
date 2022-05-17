import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherComponent } from "../utils/weather/weather.component";
import { UtilitiesService } from "../../services/utilities.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild(WeatherComponent) child!: WeatherComponent

  constructor(private utilitiesService: UtilitiesService) {}

  ngOnInit(): void {
    this.utilitiesService.getApartment()
  }


}
