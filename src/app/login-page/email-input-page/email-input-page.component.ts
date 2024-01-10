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

@Component({
  selector: 'app-login-page-email-input-page',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, CustomFormGeneratorComponent],
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
      formTitle: 'Вход',
      formSubTitle: 'Добро пожаловать!',
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

  private _emailControl$: Observable<string> =
    this.formArrayWithDescriptions.getFormValueChanges('email');
}
