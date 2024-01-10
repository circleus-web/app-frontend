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

@Component({
  selector: 'app-login-page-email-input-page',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, CustomFormGeneratorComponent],
  templateUrl: './email-input-page.component.html',
  styleUrl: './email-input-page.component.scss',
})
export class EmailInputPageComponent {
  private _destroyRef = inject(DestroyRef);

  private submitEmailForm(): void {
    this.formArrayWithDescriptions.forms['email'].isSubmited = true;
  }

  private defyEmailForm(): void {
    this.formArrayWithDescriptions.forms['email'].isSubmited = false;
  }

  private hideButton(buttonId: string): void {
    const buttonIndex =
      this.formArrayWithDescriptions.activeButtons?.indexOf(buttonId);
    if (buttonIndex !== undefined && buttonIndex !== -1)
      this.formArrayWithDescriptions.activeButtons?.splice(buttonIndex);
  }

  private showButton(buttonId: string): void {
    const buttonIndex =
      this.formArrayWithDescriptions.activeButtons?.indexOf(buttonId);
    if (buttonIndex === undefined || buttonIndex === -1)
      this.formArrayWithDescriptions.activeButtons?.push(buttonId);
  }

  protected formArrayWithDescriptions: IFormArrayWithDescriptions =
    new FormArrayWithDescriptions({
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
            return (
              !this.formArrayWithDescriptions.forms['email'].isSubmited || false
            );
          },
        }),
      },
      buttons: {
        showVerificationCode: new Button({
          text: 'Войти',
          disabled: (): boolean => {
            return this.formArrayWithDescriptions.formGroup.invalid;
          },
          click: () => {
            this.submitEmailForm();
            this.hideButton('showVerificationCode');
          },
        }),
      },
      activeButtons: ['showVerificationCode'],
      onCreate: () => {
        this._emailControl$
          .pipe(takeUntilDestroyed(this._destroyRef))
          .subscribe(() => {
            this.defyEmailForm();
            this.showButton('showVerificationCode');
          });
      },
    });

  private _emailControl$: Observable<string> =
    this.formArrayWithDescriptions.forms['email'].form.valueChanges;
}
