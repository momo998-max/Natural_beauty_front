// @ts-ignore

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ProduitsService} from '../../../core/Services/produits.service';
import {BehaviorSubject} from 'rxjs';
import {CartService} from '../../../core/Services/cart.service';
import {CartModalPage} from './cart-modal/cart-modal.page';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
})
export class ProduitPage implements OnInit {
  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;
  dataCatalogue: any;
  // eslint-disable-next-line max-len
  constructor(private cartService: CartService,private formbuilder: FormBuilder,private modalCtrl: ModalController, private produitSrv: ProduitsService) { }

  ngOnInit() {
    this.produitSrv.getProduitsByIdCatalogue(2).subscribe(
      data=>{
        this.dataCatalogue = data;
        console.log(data.produits[0]);
      },
      error => {
       console.log(error);
      }
    );
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }
  addToCart(product) {
    this.cartService.addProduct(product);
  }
  async openCart() {

    const modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
    });
    modal.present();
  }

  //async _openModal(id: any) {
   //const modal = await this.modalCtrl.create({
    // component: ProduitModalComponent,
    // componentProps:{id}
   //});
  // await modal.present();
 //}
  }
