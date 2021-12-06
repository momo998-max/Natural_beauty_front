// @ts-ignore

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-verification-tel',
  templateUrl: './verification-tel.page.html',
  styleUrls: ['./verification-tel.page.scss'],
})
export class VerificationTelPage implements OnInit {
  veritelForm: FormGroup;
  submitted = false;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.veritelForm= this.formBuilder.group({
        username: ['', [Validators.required, Validators.pattern('7[7|6|8|0|5][0-9]{7}$')]],
    }
    );
  }
  get errorControl(){ return this.veritelForm.controls; }

  onSubmit() {
  this.submitted = true;
    if (this.veritelForm.invalid){
      return null;
    }
}
}
