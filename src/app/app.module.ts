import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemListProduitModule } from './libs/views/components/item-list-produit/item-list-produit.module';
import { IonicStorageModule } from '@ionic/storage-angular';
// @ts-ignore
import {InterceptorInterceptor} from './interceptor.interceptor';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ItemListProduitModule, HttpClientModule, IonicStorageModule.forRoot()],
  // eslint-disable-next-line max-len
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
