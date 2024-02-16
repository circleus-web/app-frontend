import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from '../shared/button/button.component';
import { CustomFormGeneratorComponent } from '../custom-form-generator/custom-form-generator.component';
import { IFormArrayWithDescriptions } from '../custom-form-generator/form-array/iform-array-with-descriptions';
import { FormHeaderComponent } from '../form-header/form-header.component';
import { FormArrayProvider } from '../custom-form-generator/form-array/form-array-provider.service';
import { LoginFormArrayProviderService } from './login-form-array-provider.service';

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
  providers: [
    { provide: FormArrayProvider, useExisting: LoginFormArrayProviderService },
  ],
})
export class LoginPageComponent {
  constructor(private formProvider: FormArrayProvider) {
    this.m_formArrayWithDescriptions = formProvider.getFormArray('login_page');
  }

  protected m_formArrayWithDescriptions: IFormArrayWithDescriptions;

  protected m_formTitle: string = 'Вход';

  protected m_formSubTitle: string =
    'Добро пожаловать! Пожалуйста, введите свои данные.';
}
