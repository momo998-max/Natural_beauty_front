import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../core/Services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-compte',
  templateUrl: './create-compte.page.html',
  styleUrls: ['./create-compte.page.scss'],
})
export class CreateComptePage implements OnInit {
  creatComptForm: FormGroup;
  invalid = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private userSrv: AuthService) { }

  ngOnInit() {
    this.creatComptForm= this.formBuilder.group({
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      nom: ['', [Validators.required, Validators.minLength(2)]],
      tel: ['', [Validators.required, Validators.pattern('7[7|6|8|0|5][0-9]{7}$')]],
      adress: ['', [Validators.required, Validators.minLength(3)]],
      }
    );
  }

  get errorControl(){ return this.creatComptForm.controls; }

  onSubmit() {
    this.invalid = true;
    if (this.creatComptForm.invalid){
      return null;
    }
    this.creatComptForm.value.password= 'passer123';
    this.userSrv.createUser(this.creatComptForm.value).subscribe(
      data =>{
        this.creatComptForm.reset();
        this.router.navigate(['main']);

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User ajouté!!!',
          showConfirmButton: false,
          timer: 2000
        });
      },
      error => {console.log(error); }
    );
  }
}
