import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { CurrentWeatherI } from "../models/weather.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private _HTTP: HttpClient ) {}

  public getWeather(): Observable<CurrentWeatherI> {
    return this._HTTP.get<CurrentWeatherI>(environment.weather.url)
  }
}
