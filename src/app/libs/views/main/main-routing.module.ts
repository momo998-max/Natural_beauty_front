import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: '',
        redirectTo: 'produit',
        pathMatch: 'full'
      },
      {
        path: 'profil',
        loadChildren: () => import('../pages/profil/profil.module').then( m => m.ProfilPageModule)
      },
      {
        path: 'produit',
        loadChildren: () => import('../pages/produit/produit.module').then( m => m.ProduitPageModule)
      },
      {
        path: 'panier',
        loadChildren: () => import('../pages/panier/panier.module').then( m => m.PanierPageModule)
      },
      {
        path: 'historique',
        loadChildren: () => import('../pages/historique/historique.module').then( m => m.HistoriquePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
