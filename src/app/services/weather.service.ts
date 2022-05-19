import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { CurrentWeatherI, WeatherBDI } from "../models/weather.model";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { map, Observable, of, switchMap, take, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly currentWeather$!: Observable<CurrentWeatherI>
  constructor(
    private _HTTP: HttpClient,
    private afs: AngularFirestore
  ) {
    this.currentWeather$ = this._HTTP.get<CurrentWeatherI>(environment.weather.url)
  }

  public getWeather(): Observable<CurrentWeatherI> {
    return this.afs.collection<WeatherBDI>('weather').valueChanges()
      .pipe(
        take(1),
        map((item) => item[0]),
        switchMap(value => {
          if(this.checkDate(value.currentWeather.now)){
            return of(value.currentWeather)
          } else {
            this.deleteWeather(value.id);
            return this.currentWeather$.pipe(tap(value2 => this.postWeather(value2)))
          }
        }),
        tap(value1 => console.log('value111',value1)),
      )
  }


  private checkDate( date:number ): boolean {
    const formatDate: number = +`${date}000`;
    const verifiableDate: string = new Date(formatDate).toString().slice(0,18);
    const correctDate: string = new Date().toString().slice(0,18);

    return correctDate === verifiableDate;
  }

  private postWeather( currentWeather: CurrentWeatherI): void{
    const id = this.afs.createId();
    this.afs.collection('weather').add({id,currentWeather})
  }

  private deleteWeather(id: string): void {
    this.afs
      .collection('/weather', ref => ref.where('id', '==', `${id}`))
      .snapshotChanges()
      .pipe(
        take(1),
        map(actions => actions.map(a => {
          const id = a.payload.doc.id;
          return  id ;
        })),
      )
      .subscribe( documentId=> {
        this.afs
          .collection('weather')
          .doc(documentId[0])
          .delete()
          .catch((error) => {
            console.log(error)
        })
      })
  }
}
