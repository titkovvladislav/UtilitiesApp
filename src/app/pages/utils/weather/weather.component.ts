import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from "../../../services/weather.service";
import { WeatherI } from "../../../models/weather.model";
import { Observable, Subject, takeUntil } from "rxjs";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {

  constructor( private weatherApi: WeatherService ) { }

  public weather!: Observable<WeatherI>;
  private unsubscribe$: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    this.weather = this.weatherApi.getWeather()
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
