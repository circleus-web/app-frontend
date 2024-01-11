import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { ButtonComponent } from '../../shared/button/button.component';
import { CustomFormGeneratorComponent } from '../../custom-form-generator/custom-form-generator.component';
import { IFormArrayWithDescriptions } from '../../shared/form-array/iform-array-with-descriptions';
import { FormArrayWithDescriptions } from '../../shared/form-array/form-array-with-descriptions';
import { FormWithDescription } from '../../shared/form-array/form-with-description';
import { Button } from '../../shared/button/button';
import { IFormWithDescription } from '../../shared/form-array/iform-with-description';
import { IButton } from '../../shared/button/ibutton';
import { FormHeaderComponent } from '../form-header/form-header.component';

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

  private _hideButton(buttonId: string): void {
    const buttonIndex =
      this.formArrayWithDescriptions.activeButtons?.indexOf(buttonId);
    if (buttonIndex !== undefined && buttonIndex !== -1)
      this.formArrayWithDescriptions.activeButtons?.splice(buttonIndex);
  }

  private _showButton(buttonId: string): void {
    const buttonIndex =
      this.formArrayWithDescriptions.activeButtons?.indexOf(buttonId);
    if (buttonIndex === undefined || buttonIndex === -1)
      this.formArrayWithDescriptions.activeButtons?.push(buttonId);
  }

  private _pipeEmailFormValueChanges(): void {
    this._emailControl$
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe(() => {
        this._defyEmailForm();
        this._showButton('showVerificationCode');
      });
  }

  private _emailForm: IFormWithDescription = new FormWithDescription({
    inputName: 'email',
    inputTitle: 'Email',
    inputPlaceholder: 'example@gmail.com',
    form: new FormControl('', Validators.required),
    isSubmited: false,
  });

  private _verificationCodeForm: IFormWithDescription = new FormWithDescription(
    {
      inputName: 'verification-code',
      inputTitle: 'Код верификации',
      inputPlaceholder: 'Код из почты',
      form: new FormControl('', Validators.required),
      disabled: (): boolean => {
        return !this.formArrayWithDescriptions.isFormSubmited('email');
      },
    },
  );

  private _showVerificationCodeButton: IButton = new Button({
    text: 'Войти',
    disabled: (): boolean => {
      return this.formArrayWithDescriptions.isInvalid();
    },
    click: () => {
      this._submitEmailForm();
      this._hideButton('showVerificationCode');
    },
  });

  protected formArrayWithDescriptions: IFormArrayWithDescriptions =
    new FormArrayWithDescriptions({
      forms: {
        email: this._emailForm,
        verificationCode: this._verificationCodeForm,
      },
      buttons: {
        showVerificationCode: this._showVerificationCodeButton,
      },
      activeButtons: ['showVerificationCode'],
      onCreate: () => this._pipeEmailFormValueChanges,
    });

  protected formTitle: string = 'Вход';

  protected formSubTitle: string = 'Добро пожаловать!';

  protected inputStyle = {
    'display': 'flex',
    'height': '40px',
    'padding': '8px 12px',
    'align-self': 'stretch',
    'border-radius': '8px',
    'background': 'var(--Gray-100, #F2F4F7)',
    'border': 'none',
    'font-family': 'Inter',
    'font-size': '14px',
    'font-style': 'normal',
    'font-weight': '400',
    'line-height': '20px',
  };

  protected buttonContainerStyle = {
    'display': 'flex',
    'width': '100%',
  };

  protected buttonStyle = {
    'display': 'flex',
    'padding': '12px 16px',
    'justify-content': 'center',
    'align-items': 'center',
    'align-self': 'stretch',
    'gap': '8px',
    'flex': '1 0 0',
    'border-radius': '8px',
    'border': '1px solid var(--Accent-600, #7F56D9)',
    'background': 'var(--Accent-600, #7F56D9)',
    'box-shadow': '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
    'color': 'var(--White, #FFF)',
    'font-family': 'Inter',
    'font-size': '14px',
    'font-style': 'normal',
    'font-weight': '600',
    'line-height': '16px',
  };

  private _emailControl$: Observable<string> =
    this.formArrayWithDescriptions.getFormValueChanges('email');
}
