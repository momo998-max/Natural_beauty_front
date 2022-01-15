import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Storage} from '@ionic/storage';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  helpers: any;

  public baseUrl = environment.baseUrl;
  public userUrl = '/users';
  public authentifUrl ='/login';
  public getuserUrl = '/users/${id}';

  constructor(private storage: Storage, private http: HttpClient, private router: Router) { }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  httpOption = {
    headers: new HttpHeaders(
      {
        // eslint-disable-next-line @typescript-eslint/naming-convention
         'Content-Type': 'application/json'
      })
  };
  createUser(data: any){
    return this.http.post<any>(this.baseUrl + this.userUrl, data);
  }
  authentif(data: any){
    return this.http.post<any>(this.baseUrl + this.authentifUrl, data, this.httpOption);
  }
  getUser(id: number){
    // @ts-ignore
    return this.http.get<any>(this.baseUrl + this.getuserUrl, data, this.httpOption);
  }
  getTokenOnIonicStorage(){
    return this.storage.get('token').then(
      (token) =>token
    );
  }
  decodeToken(token: any){
    this.helpers = new JwtHelperService();
    return this.helpers.decodeToken(token);
  }
  public saveClientData(data: any) {
    this.storage.set('user', data);
  }

  public getClientData(): any {
    return this.storage.get('user');
  }
}
