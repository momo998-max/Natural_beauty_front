import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduitPageRoutingModule } from './produit-routing.module';

import { ProduitPage } from './produit.page';
import { ItemListProduitModule } from '../../components/item-list-produit/item-list-produit.module';
import {CartModalPageModule} from './cart-modal/cart-modal.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProduitPageRoutingModule,
        ItemListProduitModule,
        ReactiveFormsModule,
        CartModalPageModule
    ],
  declarations: [ProduitPage]
})
export class ProduitPageModule {}
