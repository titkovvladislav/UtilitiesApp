import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { authUser, resUserData } from "../models/users.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _HTTP: HttpClient) { }

  authentication(authData: authUser): Observable<resUserData>{
    const body = {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    }

    return this._HTTP.post<resUserData>(environment.authUrl, body)
  }

  registration(regData: authUser): Observable<resUserData>{
    const body = {
      email: regData.email,
      password: regData.password,
      returnSecureToken: true
    }
    return this._HTTP.post<resUserData>(environment.regUrl, body)
  }
}
