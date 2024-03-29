import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth() {
    return {...this._auth};
  }

  constructor( private http: HttpClient) { }

  verificarAutenticacion(): Observable<boolean> {

    if( !localStorage.getItem('token')){
      console.log('verificarAutenticacion',localStorage.getItem('token'))
      return of(false);
    }

    return this.http.get<Auth>(`${this.baseUrl}/usuarios/2`)
      .pipe(
        map( auth => {
          //console.log('map',auth);
          this._auth = auth;
          return true;
        } )
      );

  }

  login(){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/2`)
      .pipe(
        tap( auth => this._auth = auth),
        tap( auth => localStorage.setItem('token', auth.id))
      );
  }

  logout(){
    localStorage.removeItem('token');
  }

}
