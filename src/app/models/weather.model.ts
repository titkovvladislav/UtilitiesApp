export interface WeatherInfoI {
  lat: number;
  lon: number;
  tzinfo: object;
  offset: number;
  name: string;
  abbr: string;
  dst: boolean;
  def_pressure_mm: number;
  def_pressure_pa: number;
  url: string;
}
export interface WeatherFactI {
  temp: number;
  feels_like: number;
  temp_water: number;
  icon: string;
  condition: string;
  wind_speed: number;
  wind_gust: number;
  wind_dir: string;
  pressure_mm: number;
  pressure_pa: number;
  humidity: number;
  daytime: string;
  polar: boolean;
  season: string;
  obs_time: number;
  is_thunder: boolean;
  prec_type: number;
  prec_strength: number;
  cloudness: number;
  phenom_icon: string;
  phenom_condition: string;
}
export interface WeatherForecastsI {
  date: string;
  date_ts: number;
  week: number;
  sunrise: string;
  sunset: string;
  moon_code: number;
  moon_text: string;
  parts: object;
  night: object
  temp_min: number;
  temp_max: number;
  temp_avg: number;
  feels_like: number;
  icon: string;
  condition: string;
  daytime: string;
  polar: boolean;
  wind_speed: number;
  wind_gust: number;
  wind_dir: string;
  pressure_mm: number;
  pressure_pa: number;
  humidity: number;
  prec_mm: number;
  prec_period: number;
  prec_type: number;
  prec_strength: number;
  cloudness: number;
  day_short: object;
  temp: number;
  hours: object;
  hour: string
  hour_ts: number
}

export interface CurrentWeatherI {
  now: number;
  now_dt: string;
  info: WeatherInfoI;
  fact: WeatherFactI;
  forecasts: WeatherForecastsI;
  geo_object: object,
  yesterday: object
}

export interface WeatherBDI {
  currentWeather: CurrentWeatherI;
  id: string;
}
