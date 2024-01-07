import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { FormArrayProvider } from '../shared/form-array-provider.service';
import { IFormArrayWithDescriptions } from '../shared/iform-array-with-descriptions';

@Injectable({
  providedIn: 'root',
})
export class LoginFormArrayProvider extends FormArrayProvider {
  private _loginForm = {
    email: {
      formTitle: 'Вход',
      formSubtitle: 'Добро пожаловать!',
      forms: [
        {
          inputName: 'email',
          form: new FormControl('', Validators.required),
        },
      ],
    },
    emailVerification: {
      formTitle: 'Вход',
      formSubtitle: 'Добро пожаловать!',
      forms: [
        {
          inputName: 'email',
          form: new FormControl('', Validators.required),
        },
        {
          inputName: 'verificationCode',
          form: new FormControl('', Validators.required),
        },
      ],
    },
  };

  public override getFormArray(): {
    [key: string]: IFormArrayWithDescriptions;
  } {
    return this._loginForm;
  }
}
