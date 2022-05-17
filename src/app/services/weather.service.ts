import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { WeatherI } from "../models/weather.model";


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private _HTTP: HttpClient ) { }

  getWeather(){
    return this._HTTP.get<WeatherI>(environment.weather.url)
  }
}
