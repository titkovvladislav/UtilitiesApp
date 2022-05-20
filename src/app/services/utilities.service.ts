import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor( private _HTTP: HttpClient ) {}

  getApartment(){
  }
}
