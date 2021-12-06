import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/libs/core/Services/auth.service';
import {StorageService} from '../../../core/Services/storage.service';

@Component({
  selector: 'app-couverture-appli',
  templateUrl: './couverture-appli.page.html',
  styleUrls: ['./couverture-appli.page.scss'],
})
export class CouvertureAppliPage implements OnInit {

  constructor(private loading: LoadingController, private router: Router, private storageService: StorageService) { }

  ngOnInit() {
    this.storageService.get('user').then((value => {
      //console.log(value);
      if (value){
        this.router.navigate(['/main']);
      }else {
        this.router.navigate(['/verification-tel']);
      }
    }));
  }
}
