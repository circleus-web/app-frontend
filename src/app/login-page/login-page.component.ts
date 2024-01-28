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

import { ButtonComponent } from '../shared/button/button.component';
import { CustomFormGeneratorComponent } from '../custom-form-generator/custom-form-generator.component';
import { IFormArrayWithDescriptions } from '../custom-form-generator/form-array/iform-array-with-descriptions';
import { FormArrayWithDescriptions } from '../custom-form-generator/form-array/form-array-with-descriptions';
import { FormButton } from '../custom-form-generator/form-button/form-button';
import { IFormButton } from '../custom-form-generator/form-button/iform-button';
import { FormHeaderComponent } from '../form-header/form-header.component';
import { FormStyle } from '../custom-form-generator/form-array/form-style';
import { FormItems } from '../custom-form-generator/form-array/form-items';
import { IFormInputWithLabel } from '../custom-form-generator/form-input/iform-input-with-label';
import { FormInputWithLabel } from '../custom-form-generator/form-input/form-input-with-label';
import { IFormText } from '../custom-form-generator/form-text/iform-text';
import { FormText } from '../custom-form-generator/form-text/form-text';
import { IFormTextWithLink } from '../custom-form-generator/form-text-with-link/iform-text-with-link';
import { FormTextWithLink } from '../custom-form-generator/form-text-with-link/form-text-with-link';

@Component({
  selector: 'app-login-page',
  standalone: true,
  templateUrl: './login-page.component.html',
  styles: ['@import "colored-form";'],
  imports: [
    ReactiveFormsModule,
    ButtonComponent,
    CustomFormGeneratorComponent,
    FormHeaderComponent,
  ],
})
export class LoginPageComponent {
  private m_destroyRef = inject(DestroyRef);

  private m_emailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const forbidden = !re.test(control.value);
      return forbidden ? { incorrectEmail: { value: control.value } } : null;
    };
  }

  private m_emailForm: IFormInputWithLabel = new FormInputWithLabel({
    inputName: 'email',
    inputTitle: 'Email',
    inputPlaceholder: 'example@gmail.com',
    form: new FormControl('', [Validators.required, this.m_emailValidator()]),
    class: ['auth-page'],
  });

  private m_verificationCodeForm: IFormInputWithLabel = new FormInputWithLabel({
    inputName: 'verification-code',
    inputTitle: 'Код верификации',
    inputPlaceholder: 'Код из почты',
    form: new FormControl('', Validators.required),
    class: ['auth-page'],
  });

  private m_verificationCodeSupportText: IFormText = new FormText({
    text: 'Мы отправили вам код верификации. Пожалуйста, проверьте почту',
    class: ['support-text'],
  });

  private m_showVerificationCodeButton: IFormButton = new FormButton({
    text: 'Продолжить',
    class: ['btn', 'btn-primary'],
    disabled: (): boolean => {
      return this.m_formArrayWithDescriptions.isInvalid();
    },
    click: () => {
      this.m_formArrayWithDescriptions.activeItems =
        this.m_verificationCodeInputActiveItems;
    },
  });

  private m_linkToRegistration: IFormTextWithLink = new FormTextWithLink({
    link: 'Зарегистрироваться',
    routerLink: ['/registration'],
    textBeforeLink: 'Ещё нет аккаунта? ',
    class: ['footer'],
  });

  private m_emailInputActiveItems = {
    email: FormItems.FORM_INPUT_WITH_LABEL,
    showVerificationCode: FormItems.FORM_BUTTON,
    linkToRegistration: FormItems.FORM_TEXT_WITH_LINK,
  };

  private m_verificationCodeInputActiveItems = {
    email: FormItems.FORM_INPUT_WITH_LABEL,
    verificationCodeSupportText: FormItems.FORM_TEXT,
    verificationCode: FormItems.FORM_INPUT_WITH_LABEL,
    linkToRegistration: FormItems.FORM_TEXT_WITH_LINK,
  };

  private m_formsOnPage = {
    email: this.m_emailForm,
    verificationCode: this.m_verificationCodeForm,
  };

  private m_buttonsOnPage = {
    showVerificationCode: this.m_showVerificationCodeButton,
  };

  private m_textsOnPage = {
    verificationCodeSupportText: this.m_verificationCodeSupportText,
  };

  private m_textsWithLinksOnPage = {
    linkToRegistration: this.m_linkToRegistration,
  };

  protected m_formArrayWithDescriptions: IFormArrayWithDescriptions =
    new FormArrayWithDescriptions({
      forms: this.m_formsOnPage,
      formsStyle: FormStyle.LOGIN_FORM,
      buttons: this.m_buttonsOnPage,
      texts: this.m_textsOnPage,
      textsWithLinks: this.m_textsWithLinksOnPage,
      activeItems: this.m_emailInputActiveItems,
      onCreate: () => {
        this.m_emailControl$
          ?.pipe(takeUntilDestroyed(this.m_destroyRef))
          .subscribe(() => {
            this.m_formArrayWithDescriptions.activeItems =
              this.m_emailInputActiveItems;
          });
      },
    });

  protected m_formTitle: string = 'Вход';

  protected m_formSubTitle: string =
    'Добро пожаловать! Пожалуйста, введите свои данные.';

  private m_emailControl$?: Observable<string> =
    this.m_formArrayWithDescriptions.getFormValueChanges('email');
}
