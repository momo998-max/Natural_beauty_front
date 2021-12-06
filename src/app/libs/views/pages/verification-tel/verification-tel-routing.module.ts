import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerificationTelPage } from './verification-tel.page';

const routes: Routes = [
  {
    path: '',
    component: VerificationTelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificationTelPageRoutingModule {}
