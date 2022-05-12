import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from "@angular/forms";
import { passwordMatchingValidator } from "./tools/customValidate";
import { ErrorStateMatcher } from "@angular/material/core";


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control?.invalid && control?.parent?.dirty && control?.touched);
    const invalidParent = !!(control?.parent?.invalid && control?.parent?.dirty );
    console.log('-----')
    console.log('control?.invalid',control?.invalid)
    console.log('control?.parent?.dirty',control?.parent?.dirty)
    console.log('control?.dirty',control?.touched)
    console.log('invalidCtrl',invalidCtrl)
    console.log('-----')


    return invalidCtrl || invalidParent;
  }
}

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor() {
  }
  matcher = new MyErrorStateMatcher();


  public authDataGroup = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.email,]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required])
  }, {validators: passwordMatchingValidator})
  public isSignUp = false
  public formTitle = ['Login', 'Sign Up']
  public isOk = true


  ngOnInit(): void {

  }
  public changeCheck(){
    this.isOk = !this.isOk
  }

  public changeForm() {
    this.isSignUp = !this.isSignUp
    //console.log('isSignUp', this.isSignUp)
    this.formTitle.reverse()
  }

  public onAuth() {

    console.log('-------------------------------------')
    console.log('click')
    console.log('authDataGroup', this.authDataGroup.controls)
    //console.log('authData-boolean', this.authDataGroup.value.password === this.authDataGroup.value.confirmPassword)
    //console.log('authData-password', this.authDataGroup.value.password )
    //console.log('authData-rePassword', this.authDataGroup.value.confirmPassword)
    console.log('-------------------------------------')
  }

}
