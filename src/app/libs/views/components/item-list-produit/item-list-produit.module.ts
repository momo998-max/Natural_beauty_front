import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListProduitComponent } from './item-list-produit.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ItemListProduitComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ItemListProduitComponent]
})
export class ItemListProduitModule { }
