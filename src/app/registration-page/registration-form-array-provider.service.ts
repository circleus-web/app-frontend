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
import { FormCombobox } from '../custom-form-generator/form-combobox/form-combobox';
import { IFormCombobox } from '../custom-form-generator/form-combobox/iform-combobox';
import { FormInputWithToggle } from '../custom-form-generator/form-input-with-toggle/form-input-with-toggle';
import { IFormInputWithToggle } from '../custom-form-generator/form-input-with-toggle/iform-input-with-toggle';
import { FormInputWithLabel } from '../custom-form-generator/form-input/form-input-with-label';
import { IFormInputWithLabel } from '../custom-form-generator/form-input/iform-input-with-label';
import { FormTextWithLink } from '../custom-form-generator/form-text-with-link/form-text-with-link';
import { IFormTextWithLink } from '../custom-form-generator/form-text-with-link/iform-text-with-link';
import { FormText } from '../custom-form-generator/form-text/form-text';
import { IFormText } from '../custom-form-generator/form-text/iform-text';
import { Input } from '../shared/input/input/input';
import { Toggle } from '../shared/toggle-button/toggle';

class AccountCreationForm {
  private readonly m_destroyRef = inject(DestroyRef);

  private m_emailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const forbidden = !re.test(control.value);
      return forbidden ? { incorrectEmail: { value: control.value } } : null;
    };
  }

  private readonly m_emailForm: IFormInputWithLabel = new FormInputWithLabel({
    input: new Input({
      formControl: new FormControl('', [Validators.required, this.m_emailValidator()]),
      name: 'email',
      placeholder: 'example@gmail.com',
    }),
    title: 'Email',
  });

  private readonly m_verificationCodeForm: IFormInputWithLabel = new FormInputWithLabel({
    input: new Input({
      formControl: new FormControl('', Validators.required),
      name: 'verification-code',
      placeholder: 'Код из почты',
    }),
    title: 'Код верификации',
  });

  private readonly m_verificationCodeSupportText: IFormText = new FormText({
    text: 'Мы отправили вам код верификации. Пожалуйста, проверьте почту и создайте аккаунт',
    class: ['support-text'],
  });

  private readonly m_showVerificationCodeButton: IFormButton = new FormButton({
    text: 'Продолжить',
    class: ['btn', 'btn-primary'],
    disabled: (): boolean => {
      return this.formArrayWithDescriptions.isInvalid();
    },
    click: () => {
      this.formArrayWithDescriptions.setCurrentStepContent({ items: this.m_verificationCodeInputActiveItems });
    },
  });

  private m_submitForm(): void {}

  private readonly m_submitEmailVerificationCodeButton: IFormButton = new FormButton({
    text: 'Создать аккаунт',
    class: ['btn', 'btn-primary'],
    disabled: (): boolean => {
      return this.formArrayWithDescriptions.isInvalid();
    },
    click: () => {
      this.m_submitForm();
    },
    routerLink: ['/registration', 'fill-account-information'],
  });

  private readonly m_linkToRegistration: IFormTextWithLink = new FormTextWithLink({
    link: 'Войти',
    routerLink: ['/login'],
    textBeforeLink: 'Уже есть аккаунт? ',
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
    submitEmailVerificationCodeButton: FormItems.FORM_BUTTON,
    linkToRegistration: FormItems.FORM_TEXT_WITH_LINK,
  };

  private readonly m_formsOnPage = {
    email: this.m_emailForm,
    verificationCode: this.m_verificationCodeForm,
  };

  private readonly m_buttonsOnPage = {
    showVerificationCode: this.m_showVerificationCodeButton,
    submitEmailVerificationCodeButton: this.m_submitEmailVerificationCodeButton,
  };

  private readonly m_textsOnPage = {
    verificationCodeSupportText: this.m_verificationCodeSupportText,
  };

  private readonly m_textsWithLinksOnPage = {
    linkToRegistration: this.m_linkToRegistration,
  };

  public formArrayWithDescriptions: IFormArrayWithDescriptions = new FormArrayWithDescriptions({
    forms: this.m_formsOnPage,
    formsStyle: FormStyles.LOGIN_FORM,
    buttons: this.m_buttonsOnPage,
    texts: this.m_textsOnPage,
    textsWithLinks: this.m_textsWithLinksOnPage,
    steps: [
      { items: this.m_emailInputActiveItems },
    ],
    onCreate: () => {
      this.m_emailControl$?.pipe(takeUntilDestroyed(this.m_destroyRef)).subscribe(() => {
        this.formArrayWithDescriptions.setCurrentStepContent({ items: this.m_emailInputActiveItems });
      });
    },
  });

  private readonly m_emailControl$?: Observable<string> =
    this.formArrayWithDescriptions.getFormValueChanges('email');
}

class UserForm {
  private readonly m_lastNameForm: IFormInputWithLabel = new FormInputWithLabel({
    input: new Input({
      formControl: new FormControl('', Validators.required),
      name: 'lastName',
      placeholder: 'Корольков',
    }),
    title: 'Фамилия',
  });

  private readonly m_firstNameForm: IFormInputWithLabel = new FormInputWithLabel({
    input: new Input({
      formControl: new FormControl('', Validators.required),
      name: 'firstName',
      placeholder: 'Вадим',
    }),
    title: 'Имя',
  });

  private readonly m_phoneNumberForm: IFormInputWithToggle = new FormInputWithToggle({
    input: new Input({
      formControl: new FormControl('', [Validators.required]),
      name: 'phoneNumber',
      placeholder: '+7 (999) 999-99-99',
    }),
    toggle: new Toggle({
      name: 'isPhonePublic',
      inversed: true,
    }),
    title: 'Номер телефона',
    toggleTitle: 'Не показывать в профиле',
  });

  private readonly m_dateOfBirthForm: IFormInputWithToggle = new FormInputWithToggle({
    input: new Input({
      formControl: new FormControl('', [Validators.required]),
      name: 'dateOfBirth',
      placeholder: '01.01.2000',
    }),
    toggle: new Toggle({
      name: 'isPhonePublic',
      inversed: true,
    }),
    title: 'Дата рождения',
    toggleTitle: 'Не показывать в профиле',
  });

  private readonly m_cityForm: IFormInputWithLabel = new FormInputWithLabel({
    input: new Input({
      formControl: new FormControl('', Validators.required),
      name: 'city',
      placeholder: 'Москва',
    }),
    title: 'Местоположение',
  });

  private readonly m_specializationForm: IFormInputWithLabel = new FormInputWithLabel({
    input: new Input({
      formControl: new FormControl('', [Validators.required]),
      name: 'specialization',
      placeholder: 'Дизайнер Интерфейсов',
    }),
    title: 'Специальность',
  });

  private readonly m_gradeForm: IFormCombobox = new FormCombobox({
    comboboxName: 'grade',
    comboboxTitle: 'Грейд',
    comboboxOptions: ['Junior', 'Middle', 'Senior'],
    defaultValue: 'Junior',
    formControl: new FormControl('', [Validators.required]),
  });

  private readonly m_formsOnPage = {
    lastName: this.m_lastNameForm,
    firstName: this.m_firstNameForm,
    phoneNumber: this.m_phoneNumberForm,
    dateOfBirth: this.m_dateOfBirthForm,
    city: this.m_cityForm,
    specializationForm: this.m_specializationForm,
    gradeForm: this.m_gradeForm,
  };

  private readonly m_generalActiveItems = {
    lastName: FormItems.FORM_INPUT_WITH_LABEL,
    firstName: FormItems.FORM_INPUT_WITH_LABEL,
    phoneNumber: FormItems.FORM_INPUT_WITH_LABEL,
    dateOfBirth: FormItems.FORM_INPUT_WITH_LABEL,
    city: FormItems.FORM_INPUT_WITH_LABEL,
    submit: FormItems.FORM_BUTTON,
  };

  private readonly m_jobActiveItems = {
    specializationForm: FormItems.FORM_INPUT_WITH_LABEL,
    gradeForm: FormItems.FORM_COMBOBOX_WITH_LABEL,
  };

  public formArrayWithDescriptions: IFormArrayWithDescriptions = new FormArrayWithDescriptions({
    forms: this.m_formsOnPage,
    steps: [{ items: this.m_generalActiveItems }, { items: this.m_jobActiveItems }],
  });
}

@Injectable({
  providedIn: 'root',
})
export class RegistrationFormArrayProviderService implements FormArrayProvider {
  private _accountCreationForm = new AccountCreationForm();

  private _userForm = new UserForm();

  public getFormArray(key: string): IFormArrayWithDescriptions {
    switch (key) {
      case 'account_creation':
        return this._accountCreationForm.formArrayWithDescriptions;
      case 'user_info':
        return this._userForm.formArrayWithDescriptions;
      default:
        throw new FormNotFoundError(key);
    }
  }
}
