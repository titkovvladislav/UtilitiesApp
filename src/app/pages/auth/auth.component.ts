import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from "@angular/forms";
import { passwordMatchingValidator } from "./tools/customValidate";
import { ErrorStateMatcher } from "@angular/material/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";


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
export class AuthComponent implements OnDestroy {

  constructor(private authService: AuthService, private route: Router) { }

  private unsubscribe$: Subject<void> = new Subject<void>();
  public matcher = new MyErrorStateMatcher();
  public authDataGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email,]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required])
  }, {validators: passwordMatchingValidator});
  public isSignUp: boolean = false;
  public formTitle: Array<string> = ['Login', 'Sign Up'];

  public changeForm(): void {
    this.isSignUp = !this.isSignUp;
    this.formTitle.reverse();
  };

  public onAuth(): void {
    if (this.isSignUp) {
      this.authService.registration(this.authDataGroup.value)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(value => localStorage.setItem('token', value.idToken));
      return;
    }

    this.authService.authentication(this.authDataGroup.value)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(value => {
      localStorage.setItem('token', value.idToken);
      this.route.navigate(['/']);
    });
  };

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  };

}
