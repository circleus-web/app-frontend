import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
} from '@angular/forms';

import { ButtonComponent } from '../../shared/button/button.component';
import { CustomFormGeneratorComponent } from '../../custom-form-generator/custom-form-generator.component';
import { FormHeaderComponent } from '../../form-header/form-header.component';
import { RegistrationFormArrayProviderService } from '../registration-form-array-provider.service';
import { FormArrayProvider } from '../../custom-form-generator/form-array/form-array-provider.service';
import { IFormArrayWithDescriptions } from '../../custom-form-generator/form-array/iform-array-with-descriptions';

@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonComponent,
    CustomFormGeneratorComponent,
    FormHeaderComponent,
  ],
  templateUrl: './registration-page-account-creation.component.html',
  styles: ['@import "colored-form";'],
  providers: [
    { provide: FormArrayProvider, useExisting: RegistrationFormArrayProviderService },
  ],
})
export class RegistrationPageAccountCreationComponent {
  constructor(private formArrayProvider: RegistrationFormArrayProviderService) {
    this.m_formArrayWithDescriptions = formArrayProvider.getFormArray('account_creation');
  }

  protected m_formArrayWithDescriptions: IFormArrayWithDescriptions;

  protected m_formTitle: string = 'Регистрация';

  protected m_formSubTitle: string =
    'Добро пожаловать! Пожалуйста, введите свои данные.';
}
