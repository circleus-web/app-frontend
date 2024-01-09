import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { ButtonComponent } from '../../shared/button/button.component';
import { CustomFormGeneratorComponent } from '../../custom-form-generator/custom-form-generator.component';
import { IFormArrayWithDescriptions } from '../../shared/form-array/iform-array-with-descriptions';
import { FormArrayWithDescriptions } from '../../shared/form-array/form-array-with-descriptions';
import { FormWithDescription } from '../../shared/form-array/form-with-description';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'app-login-page-email-input-page',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, CustomFormGeneratorComponent],
  templateUrl: './email-input-page.component.html',
  styleUrl: './email-input-page.component.scss',
})
export class EmailInputPageComponent {
  protected forms: IFormArrayWithDescriptions;

  constructor() {
    this.forms = new FormArrayWithDescriptions({
      formTitle: 'Вход',
      formSubTitle: 'Добро пожаловать!',
      forms: {
        email: new FormWithDescription({
          inputName: 'email',
          inputTitle: 'Email',
          inputPlaceholder: 'example@gmail.com',
          form: new FormControl('', Validators.required),
          isSubmited: false,
        }),
        verificationCode: new FormWithDescription({
          inputName: 'verification-code',
          inputTitle: 'Код верификации',
          inputPlaceholder: 'Код из почты',
          form: new FormControl('', Validators.required),
          disabled: (): boolean => {
            return !this.forms.forms['email'].isSubmited || false;
          },
        }),
      },
      buttons: {
        showVerificationCode: new Button({
          text: 'Войти',
          disabled: (): boolean => {
            return this.forms.formGroup.valid;
          },
          click: () => {
            this.forms.forms['email'].isSubmited = true;
            const buttonIndex = this.forms.activeButtons?.indexOf(
              'showVerificationCode',
            );
            if (buttonIndex !== undefined && buttonIndex !== -1)
              this.forms.activeButtons?.splice(buttonIndex);
          },
        }),
      },
      activeButtons: ['showVerificationCode'],
    });
  }
}
