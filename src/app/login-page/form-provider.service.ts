import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormProvider } from '../shared/form-provider';

@Injectable({
  providedIn: 'root',
})
export class LoginFormProvider extends FormProvider {
  private _loginForm = new FormGroup({
    email: new FormGroup({
      email: new FormControl('', Validators.required),
    }),
    emailVerification: new FormGroup({
      email: new FormControl('', Validators.required),
      verificationCode: new FormControl('', Validators.required),
    }),
  });

  public override getForm(): FormGroup {
    return this._loginForm;
  }
}
