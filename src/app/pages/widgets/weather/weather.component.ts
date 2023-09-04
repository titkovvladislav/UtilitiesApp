import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WeatherService } from "../../../services/weather.service";
import { CurrentWeatherI } from "../../../models/weather.model";
import { Observable } from "rxjs";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent {

  public weather!: Observable<CurrentWeatherI>;

  constructor( private weatherApi: WeatherService ) {
    this.weather = weatherApi.getWeather();
  }


}
