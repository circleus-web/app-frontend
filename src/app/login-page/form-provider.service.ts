import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { FormArrayProvider } from '../shared/form-array/form-array-provider.service';
import { FormArrayWithDescriptions } from '../shared/form-array/form-array-with-descriptions';
import { IFormArrayWithDescriptions } from '../shared/form-array/iform-array-with-descriptions';

@Injectable({
  providedIn: 'root',
})
export class LoginFormArrayProvider extends FormArrayProvider {
  private _loginForm = {
    email: new FormArrayWithDescriptions({
      formTitle: 'Вход',
      formSubTitle: 'Добро пожаловать!',
      forms: {
        email: {
          inputName: 'email',
          inputTitle: 'Email',
          inputPlaceholder: 'example@gmail.com',
          form: new FormControl('', Validators.required),
        },
      },
      submitButton: {
        text: 'Войти',
        routerLink: ['login', 'email-verification'],
        click: () => {
          this.getFormArray()['emailVerification'].forms['email'].form.setValue(
            this.getFormArray()['email'].forms['email'].form.value,
          );
        },
      },
    }),
    emailVerification: new FormArrayWithDescriptions({
      formTitle: 'Вход',
      formSubTitle: 'Добро пожаловать!',
      forms: {
        email: {
          inputName: 'email',
          inputTitle: 'Email',
          inputPlaceholder: 'example@gmail.com',
          form: new FormControl('', Validators.required),
        },
        verificationCode: {
          inputName: 'verification-code',
          inputTitle: 'Код верификации',
          inputPlaceholder: 'Код из почты',
          form: new FormControl('', Validators.required),
        },
      },
    }),
  };

  public override getFormArray(): {
    [key: string]: IFormArrayWithDescriptions;
  } {
    return this._loginForm;
  }
}
