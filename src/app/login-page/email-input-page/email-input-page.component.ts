import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  AbstractControl,
  FormControl,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

import { ButtonComponent } from '../../shared/button/button.component';
import { CustomFormGeneratorComponent } from '../../custom-form-generator/custom-form-generator.component';
import { IFormArrayWithDescriptions } from '../../custom-form-generator/form-array/iform-array-with-descriptions';
import { FormArrayWithDescriptions } from '../../custom-form-generator/form-array/form-array-with-descriptions';
import { FormButton } from '../../custom-form-generator/form-button/form-button';
import { IFormButton } from '../../custom-form-generator/form-button/iform-button';
import { FormHeaderComponent } from '../form-header/form-header.component';
import { FormStyle } from '../../custom-form-generator/form-array/form-style';
import { FormItems } from '../../custom-form-generator/form-array/form-items';
import { IFormInputWithLabel } from '../../custom-form-generator/form-input/iform-input-with-label';
import { FormInputWithLabel } from '../../custom-form-generator/form-input/form-input-with-label';
import { IFormText } from '../../custom-form-generator/form-text/iform-text';
import { FormText } from '../../custom-form-generator/form-text/form-text';

@Component({
  selector: 'app-login-page-email-input-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonComponent,
    CustomFormGeneratorComponent,
    FormHeaderComponent,
  ],
  templateUrl: './email-input-page.component.html',
  styleUrl: './email-input-page.component.scss',
})
export class EmailInputPageComponent {
  private _destroyRef = inject(DestroyRef);

  private _emailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const forbidden = !re.test(control.value);
      return forbidden ? { incorrectEmail: { value: control.value } } : null;
    };
  }

  private _emailForm: IFormInputWithLabel = new FormInputWithLabel({
    inputName: 'email',
    inputTitle: 'Email',
    inputPlaceholder: 'example@gmail.com',
    form: new FormControl('', [Validators.required, this._emailValidator()]),
    class: ['login-page'],
  });

  private _verificationCodeForm: IFormInputWithLabel = new FormInputWithLabel({
    inputName: 'verification-code',
    inputTitle: 'Код верификации',
    inputPlaceholder: 'Код из почты',
    form: new FormControl('', Validators.required),
    class: ['login-page'],
  });

  private _verificationCodeSupportText: IFormText = new FormText({
    text: 'Мы отправили вам код верификации. Пожалуйста, проверьте почту',
    class: ['support-text'],
  });

  private _showVerificationCodeButton: IFormButton = new FormButton({
    text: 'Войти',
    class: ['btn', 'btn-primary'],
    disabled: (): boolean => {
      return this.formArrayWithDescriptions.isInvalid();
    },
    click: () => {
      this.formArrayWithDescriptions.activeItems =
        this._verificationCodeInputActiveItems;
    },
  });

  private _emailInputActiveItems = {
    email: FormItems.FORM_INPUT_WITH_LABEL,
    showVerificationCode: FormItems.FORM_BUTTON,
  };

  private _verificationCodeInputActiveItems = {
    email: FormItems.FORM_INPUT_WITH_LABEL,
    verificationCodeSupportText: FormItems.FORM_TEXT,
    verificationCode: FormItems.FORM_INPUT_WITH_LABEL,
  };

  protected formArrayWithDescriptions: IFormArrayWithDescriptions =
    new FormArrayWithDescriptions({
      forms: {
        email: this._emailForm,
        verificationCode: this._verificationCodeForm,
      },
      formsStyle: FormStyle.LOGIN_FORM,
      buttons: {
        showVerificationCode: this._showVerificationCodeButton,
      },
      texts: {
        verificationCodeSupportText: this._verificationCodeSupportText,
      },
      activeItems: this._emailInputActiveItems,
      onCreate: () => {
        this._emailControl$
          ?.pipe(takeUntilDestroyed(this._destroyRef))
          .subscribe(() => {
            this.formArrayWithDescriptions.activeItems =
              this._emailInputActiveItems;
          });
      },
    });

  protected formTitle: string = 'Вход';

  protected formSubTitle: string = 'Добро пожаловать!';

  private _emailControl$?: Observable<string> =
    this.formArrayWithDescriptions.getFormValueChanges('email');
}
