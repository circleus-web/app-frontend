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
import { FormWithDescription } from '../../custom-form-generator/form-array/form-with-description';
import { FormButton } from '../../custom-form-generator/form-button/form-button';
import { IFormWithDescription } from '../../custom-form-generator/form-array/iform-with-description';
import { IFormButton } from '../../custom-form-generator/form-button/iform-button';
import { FormHeaderComponent } from '../form-header/form-header.component';
import { FormStyle } from '../../custom-form-generator/form-array/form-style';
import { FormItems } from '../../custom-form-generator/form-array/form-items';

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

  private _submitEmailForm(): void {
    this.formArrayWithDescriptions.forms['email'].isSubmited = true;
  }

  private _defyEmailForm(): void {
    this.formArrayWithDescriptions.forms['email'].isSubmited = false;
  }

  private _emailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const forbidden = !re.test(control.value);
      return forbidden ? { incorrectEmail: { value: control.value } } : null;
    };
  }

  private _emailForm: IFormWithDescription = new FormWithDescription({
    inputName: 'email',
    inputTitle: 'Email',
    inputPlaceholder: 'example@gmail.com',
    form: new FormControl('', [Validators.required, this._emailValidator()]),
    isSubmited: false,
  });

  private _verificationCodeForm: IFormWithDescription = new FormWithDescription(
    {
      inputName: 'verification-code',
      inputTitle: 'Код верификации',
      inputPlaceholder: 'Код из почты',
      form: new FormControl('', Validators.required),
    },
  );

  private _showVerificationCodeButton: IFormButton = new FormButton({
    text: 'Войти',
    disabled: (): boolean => {
      return this.formArrayWithDescriptions.isInvalid();
    },
    click: () => {
      this.formArrayWithDescriptions.activeItems = {
        email: FormItems.FORM_INPUT_WITH_LABEL,
        verificationCode: FormItems.FORM_INPUT_WITH_LABEL,
      };
      this._submitEmailForm();
    },
  });

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
      activeItems: {
        email: FormItems.FORM_INPUT_WITH_LABEL,
        showVerificationCode: FormItems.BUTTON,
      },
      onCreate: () => {
        this._emailControl$
          .pipe(takeUntilDestroyed(this._destroyRef))
          .subscribe(() => {
            this.formArrayWithDescriptions.activeItems = {
              email: FormItems.FORM_INPUT_WITH_LABEL,
              showVerificationCode: FormItems.BUTTON,
            };
            this._defyEmailForm();
          });
      },
    });

  protected formTitle: string = 'Вход';

  protected formSubTitle: string = 'Добро пожаловать!';

  private _emailControl$: Observable<string> =
    this.formArrayWithDescriptions.getFormValueChanges('email');
}
