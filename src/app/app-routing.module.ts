import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'couverture-appli',
    pathMatch: 'full'
  },
  {
    path: 'couverture-appli',
    loadChildren: () => import('./libs/views/pages/couverture-appli/couverture-appli.module').then(m => m.CouvertureAppliPageModule)
  },
  {
    path: 'verification-tel',
    loadChildren: () => import('./libs/views/pages/verification-tel/verification-tel.module').then(m => m.VerificationTelPageModule)
  },
  {
    path: 'create-compte',
    loadChildren: () => import('./libs/views/pages/create-compte/create-compte.module').then(m => m.CreateComptePageModule)
  },
  {
    path: 'verification-code',
    loadChildren: () => import('./libs/views/pages/verification-code/verification-code.module').then(m => m.VerificationCodePageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./libs/views/main/main.module').then(m => m.MainPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
