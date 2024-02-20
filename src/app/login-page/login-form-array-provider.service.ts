import { DestroyRef, Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

import { Observable } from 'rxjs';

import {
  FormArrayProvider,
  FormNotFoundError,
} from '../custom-form-generator/form-array/form-array-provider.service';
import { FormArrayWithDescriptions } from '../custom-form-generator/form-array/form-array-with-descriptions';
import { FormItems } from '../custom-form-generator/form-array/form-items';
import { FormStyles } from '../custom-form-generator/form-array/form-style';
import { IFormArrayWithDescriptions } from '../custom-form-generator/form-array/iform-array-with-descriptions';
import { FormButton } from '../custom-form-generator/form-button/form-button';
import { IFormButton } from '../custom-form-generator/form-button/iform-button';
import { FormInputWithLabel } from '../custom-form-generator/form-input/form-input-with-label';
import { IFormInputWithLabel } from '../custom-form-generator/form-input/iform-input-with-label';
import { FormTextWithLink } from '../custom-form-generator/form-text-with-link/form-text-with-link';
import { IFormTextWithLink } from '../custom-form-generator/form-text-with-link/iform-text-with-link';
import { FormText } from '../custom-form-generator/form-text/form-text';
import { IFormText } from '../custom-form-generator/form-text/iform-text';

@Injectable({
  providedIn: 'root',
})
export class LoginFormArrayProviderService implements FormArrayProvider {
  private m_emailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const forbidden = !re.test(control.value);
      return forbidden ? { incorrectEmail: { value: control.value } } : null;
    };
  }

  private readonly m_emailForm: IFormInputWithLabel = new FormInputWithLabel({
    inputName: 'email',
    inputTitle: 'Email',
    inputPlaceholder: 'example@gmail.com',
    form: new FormControl('', [Validators.required, this.m_emailValidator()]),
    class: ['auth-page'],
  });

  private readonly m_verificationCodeForm: IFormInputWithLabel = new FormInputWithLabel({
    inputName: 'verification-code',
    inputTitle: 'Код верификации',
    inputPlaceholder: 'Код из почты',
    form: new FormControl('', Validators.required),
    class: ['auth-page'],
  });

  private readonly m_verificationCodeSupportText: IFormText = new FormText({
    text: 'Мы отправили вам код верификации. Пожалуйста, проверьте почту',
    class: ['support-text'],
  });

  private readonly m_showVerificationCodeButton: IFormButton = new FormButton({
    text: 'Продолжить',
    class: ['btn', 'btn-primary'],
    disabled: (): boolean => {
      return this.m_loginFormArray.isInvalid();
    },
    click: () => {
      this.m_loginFormArray.activeItems = this.m_verificationCodeInputActiveItems;
    },
  });

  private readonly m_linkToRegistration: IFormTextWithLink = new FormTextWithLink({
    link: 'Зарегистрироваться',
    routerLink: ['/registration'],
    textBeforeLink: 'Ещё нет аккаунта? ',
    class: ['footer'],
  });

  private readonly m_emailInputActiveItems = {
    email: FormItems.FORM_INPUT_WITH_LABEL,
    showVerificationCode: FormItems.FORM_BUTTON,
    linkToRegistration: FormItems.FORM_TEXT_WITH_LINK,
  };

  private readonly m_verificationCodeInputActiveItems = {
    email: FormItems.FORM_INPUT_WITH_LABEL,
    verificationCodeSupportText: FormItems.FORM_TEXT,
    verificationCode: FormItems.FORM_INPUT_WITH_LABEL,
    linkToRegistration: FormItems.FORM_TEXT_WITH_LINK,
  };

  private readonly m_formsOnPage = {
    email: this.m_emailForm,
    verificationCode: this.m_verificationCodeForm,
  };

  private readonly m_buttonsOnPage = {
    showVerificationCode: this.m_showVerificationCodeButton,
  };

  private readonly m_textsOnPage = {
    verificationCodeSupportText: this.m_verificationCodeSupportText,
  };

  private readonly m_textsWithLinksOnPage = {
    linkToRegistration: this.m_linkToRegistration,
  };

  private readonly m_loginFormArray: IFormArrayWithDescriptions = new FormArrayWithDescriptions({
    forms: this.m_formsOnPage,
    formsStyle: FormStyles.LOGIN_FORM,
    buttons: this.m_buttonsOnPage,
    texts: this.m_textsOnPage,
    textsWithLinks: this.m_textsWithLinksOnPage,
    activeItems: this.m_emailInputActiveItems,
    onCreate: () => {
      this.m_emailControl$?.pipe(takeUntilDestroyed(this.m_destroyRef)).subscribe(() => {
        this.m_loginFormArray.activeItems = this.m_emailInputActiveItems;
      });
    },
  });

  private readonly m_destroyRef = inject(DestroyRef);

  public getFormArray(key: string): IFormArrayWithDescriptions {
    if (key !== undefined && key !== 'login_page') throw new FormNotFoundError(key);

    return this.m_loginFormArray;
  }

  private readonly m_emailControl$?: Observable<string> =
    this.m_loginFormArray.getFormValueChanges('email');
}
