import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from "@angular/forms";
import { passwordMatchingValidator } from "./tools/customValidate";
import { ErrorStateMatcher } from "@angular/material/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control?.invalid  && control?.touched);
    const invalidParent = !!(control?.parent?.invalid && control?.dirty );

    return invalidCtrl || invalidParent;
  }
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, private route: Router) { }

  public matcher = new MyErrorStateMatcher();
  public authDataGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email,]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required])
  }, {validators: passwordMatchingValidator})
  public isSignUp = false
  public formTitle = ['Login', 'Sign Up']

  ngOnInit(): void { }

  public changeForm() {
    this.isSignUp = !this.isSignUp
    this.formTitle.reverse()
  }

  public onAuth() {
    console.log('-------------------------------------')
    if (this.isSignUp) {
      console.log('get registration')
      this.authService.registration(this.authDataGroup.value).subscribe(value => localStorage.setItem('token', value.idToken))

      return
    }

    this.authService.authentication(this.authDataGroup.value).subscribe(value => {
      localStorage.setItem('token', value.idToken)
      this.route.navigate(['/'])
    })

    console.log('-------------------------------------')
  }

}
