import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export const passwordMatchingValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  console.log('Validator: password', password?.value)
  console.log('Validator: confirmPassword', confirmPassword?.value)

  return password?.value === confirmPassword?.value ? null : { notmatched: true };
};
