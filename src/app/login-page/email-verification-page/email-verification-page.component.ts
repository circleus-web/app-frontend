import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from '../../shared/button/button.component';
import { FormProvider } from '../../shared/form-provider';
import { LoginFormProvider } from '../form-provider.service';
import { FormHeaderComponent } from '../form-header/form-header.component';

@Component({
  selector: 'app-login-page-email-verification-page',
  standalone: true,
  imports: [
    ButtonComponent,
    ReactiveFormsModule,
    FormHeaderComponent,
  ],
  templateUrl: './email-verification-page.component.html',
  styleUrl: './email-verification-page.component.scss',
  providers: [{ provide: FormProvider, useExisting: LoginFormProvider }],
})
export class EmailVerificationPageComponent {
  protected form: FormGroup;

  constructor(private formProvider: FormProvider) {
    this.form = this.formProvider.getForm().get('emailVerification') as FormGroup;
  }
}
