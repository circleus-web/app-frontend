import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from '../../shared/button/button.component';
import { FormArrayProvider } from '../../shared/form-array-provider.service';
import { LoginFormArrayProvider } from '../form-provider.service';
import { CustomFormGeneratorComponent } from '../../custom-form-generator/custom-form-generator.component';
import { IFormArrayWithDescriptions } from '../../shared/iform-array-with-descriptions';

@Component({
  selector: 'app-login-page-email-verification-page',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule, CustomFormGeneratorComponent],
  templateUrl: './email-verification-page.component.html',
  styleUrl: './email-verification-page.component.scss',
  providers: [
    { provide: FormArrayProvider, useExisting: LoginFormArrayProvider },
  ],
})
export class EmailVerificationPageComponent {
  protected forms: IFormArrayWithDescriptions;

  constructor(
    private router: Router,
    private formProvider: FormArrayProvider,
  ) {
    this.forms = this.formProvider.getFormArray()['emailVerification'];
  }
}
