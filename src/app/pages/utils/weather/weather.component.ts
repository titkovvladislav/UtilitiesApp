import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../../../services/weather.service";
import { WeatherI } from "../../../models/weather.model";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor( private weatherApi: WeatherService ) { }

  public weather!: WeatherI

  ngOnInit(): void {
    this.weatherApi.getWeather().subscribe(value => this.weather = value)
  }

}
