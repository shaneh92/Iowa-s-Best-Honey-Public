import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  validationForm: FormGroup;
  constructor(public modalRef: MdbModalRef<SignInComponent>) {
    this.validationForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(
        null,
        Validators.compose([Validators.required, Validators.email])
      ),
      registerPassword: new FormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.pattern(
            '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'
          ),
        ])
      ),
    });
  }
  get firstName(): AbstractControl {
    return this.validationForm.get('firstName')!;
  }
  get lastName(): AbstractControl {
    return this.validationForm.get('lastName')!;
  }
  get email(): AbstractControl {
    return this.validationForm.get('email')!;
  }
  get registerPassword(): AbstractControl {
    return this.validationForm.get('registerPassword')!;
  }
}
