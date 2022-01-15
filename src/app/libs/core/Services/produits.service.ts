import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Storage} from '@ionic/storage';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  public baseUrl = environment.baseUrl;
  public cataloguesUrl = '/catalogues';
  constructor(private storage: Storage, private http: HttpClient, private router: Router) { }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  httpOption = {
    headers: new HttpHeaders(
      {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json'
      })
  };
  getCatalogues(){
    return this.http.get<any>( this.baseUrl + this.cataloguesUrl, this.httpOption);
  }
  // @ts-ignore
  getProduitsByIdCatalogue(id: number){
    return this.http.get<any>( this.baseUrl + this.cataloguesUrl + '/' + id , this.httpOption);
  }
}
