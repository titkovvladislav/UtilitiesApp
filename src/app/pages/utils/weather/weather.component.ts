import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../../../services/weather.service";
import { CurrentWeatherI } from "../../../models/weather.model";
import { Observable } from "rxjs";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor( private weatherApi: WeatherService ) { }

  public weather!: Observable<CurrentWeatherI>;

  ngOnInit(): void {
    this.weather = this.weatherApi.getWeather()
  }


}
