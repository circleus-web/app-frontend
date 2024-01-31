import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { IFormInputWithLabel } from '../../../custom-form-generator/form-input/iform-input-with-label';
import { FormInputWithLabel } from '../../../custom-form-generator/form-input/form-input-with-label';
import { FormItems } from '../../../custom-form-generator/form-array/form-items';
import { FormArrayWithDescriptions } from '../../../custom-form-generator/form-array/form-array-with-descriptions';
import { IFormArrayWithDescriptions } from '../../../custom-form-generator/form-array/iform-array-with-descriptions';
import { CustomFormGeneratorComponent } from '../../../custom-form-generator/custom-form-generator.component';
import { FormFooterComponent } from '../form-footer/form-footer.component';
import { IFormInputWithRadio } from '../../../custom-form-generator/form-input-with-radio/iform-input-with-radio';
import { FormInputWithRadio } from '../../../custom-form-generator/form-input-with-radio/form-input-with-radio';

@Component({
  selector: 'app-general-info',
  standalone: true,
  templateUrl: './general-info.component.html',
  styles: ['@import "white-form";'],
  imports: [CustomFormGeneratorComponent, FormFooterComponent],
})
export class GeneralInfoComponent {
  private m_lastNameForm: IFormInputWithLabel = new FormInputWithLabel({
    inputName: 'lastName',
    inputTitle: 'Фамилия',
    inputPlaceholder: 'Корольков',
    form: new FormControl('', [Validators.required]),
  });

  private m_firstNameForm: IFormInputWithLabel = new FormInputWithLabel({
    inputName: 'firstName',
    inputTitle: 'Имя',
    inputPlaceholder: 'Вадим',
    form: new FormControl('', [Validators.required]),
  });

  private m_phoneNumberForm: IFormInputWithRadio = new FormInputWithRadio({
    inputName: 'phoneNumber',
    inputTitle: 'Номер телефона',
    inputPlaceholder: '+7 (999) 999-99-99',
    form: new FormControl('', [Validators.required]),
  });

  private m_dateOfBirthForm: IFormInputWithLabel = new FormInputWithLabel({
    inputName: 'dateOfBirth',
    inputTitle: 'Дата рождения',
    inputPlaceholder: '01.01.2000',
    form: new FormControl('', [Validators.required]),
  });

  private m_cityForm: IFormInputWithLabel = new FormInputWithLabel({
    inputName: 'city',
    inputTitle: 'Местоположение',
    inputPlaceholder: 'Москва',
    form: new FormControl('', [Validators.required]),
  });

  private m_formsOnPage = {
    lastName: this.m_lastNameForm,
    firstName: this.m_firstNameForm,
    phoneNumber: this.m_phoneNumberForm,
    dateOfBirth: this.m_dateOfBirthForm,
    city: this.m_cityForm,
  };

  private m_buttonsOnPage = {};

  private m_generalActiveItems = {
    lastName: FormItems.FORM_INPUT_WITH_LABEL,
    firstName: FormItems.FORM_INPUT_WITH_LABEL,
    phoneNumber: FormItems.FORM_INPUT_WITH_LABEL,
    dateOfBirth: FormItems.FORM_INPUT_WITH_LABEL,
    city: FormItems.FORM_INPUT_WITH_LABEL,
    submit: FormItems.FORM_BUTTON,
  };

  protected m_formArrayWithDescriptions: IFormArrayWithDescriptions =
    new FormArrayWithDescriptions({
      forms: this.m_formsOnPage,
      buttons: this.m_buttonsOnPage,
      activeItems: this.m_generalActiveItems,
    });
}
