import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { AuthUserI, ResUserDataI } from "../models/users.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _HTTP: HttpClient ) { }

  authentication(authData: AuthUserI): Observable<ResUserDataI>{
    const body = {
      email: authData.email,
      password: authData.password,
    }

    return this._HTTP.post<ResUserDataI>(environment.authUrl, body)
  }

  registration(regData: AuthUserI): Observable<ResUserDataI>{
    const body = {
      email: regData.email,
      password: regData.password,
    }
    return this._HTTP.post<ResUserDataI>(environment.regUrl, body)
  }
}
