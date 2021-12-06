import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Storage} from '@ionic/storage';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public baseUrl = environment.baseUrl;
  public userUrl = '/users';
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
  public saveClientData(data: any) {
    this.storage.set('user', data);
  }

  public getClientData(): any {
    return this.storage.get('user');
  }
}
