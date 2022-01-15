import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificationTelPageRoutingModule } from './verification-tel-routing.module';

import { VerificationTelPage } from './verification-tel.page';
import { AuthService } from 'src/app/libs/core/Services/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificationTelPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [VerificationTelPage],
  providers:[AuthService,
  
  ]
})
export class VerificationTelPageModule {}
