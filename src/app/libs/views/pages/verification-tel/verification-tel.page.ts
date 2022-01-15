// @ts-ignore

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import { AuthService } from 'src/app/libs/core/Services/auth.service';

@Component({
  selector: 'app-verification-tel',
  templateUrl: './verification-tel.page.html',
  styleUrls: ['./verification-tel.page.scss'],
})
export class VerificationTelPage implements OnInit {
  veritelForm: FormGroup;
  submitted = false;
  login_error: string = '';

  constructor(private router: Router, private formBuilder: FormBuilder, 
    private _authService: AuthService,
    private _storage: Storage, 
    private _router: Router) { }

  ngOnInit() {
    this.veritelForm= this.formBuilder.group({
      username: ['', [Validators.required]],
        password: ['', [Validators.required]]
    }
    );

    this.veritelForm.get('username').valueChanges.subscribe(
      ()=> { this.login_error = ''}
    )
    this.veritelForm.get('password').valueChanges.subscribe(
      ()=> { this.login_error = ''}
    )
  }
  get errorControl(){ return this.veritelForm.controls; }

  onSubmit() {
  this.submitted = true;
    if (this.veritelForm.invalid){
      return null;
    }
    this._authService.authentif(this.veritelForm.getRawValue()).subscribe(
      data => {
        //this._storage.set('token', data.token);
        this._router.navigateByUrl('/main')           
      },
      error => {
        if(error.status==401){
          this.login_error = 'Infos incorrectes.'
        }
        
      })
    
}
}
