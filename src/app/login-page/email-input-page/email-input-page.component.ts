import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from '../../shared/button/button.component';
import { FormProvider } from '../../shared/form-provider';
import { LoginFormProvider } from '../form-provider.service';

@Component({
  selector: 'app-login-page-email-input-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonComponent,
  ],
  templateUrl: './email-input-page.component.html',
  styleUrl: './email-input-page.component.scss',
  providers: [{ provide: FormProvider, useExisting: LoginFormProvider }],
})
export class EmailInputPageComponent {
  protected form: FormGroup;

  constructor(private router: Router, private formProvider: FormProvider) {
    this.form = this.formProvider.getForm().get('email') as FormGroup;
  }

  protected click() {
    if (this.form.valid) {
      this.formProvider.getForm().get('emailVerification')?.get('email')?.setValue(this.form.value.email);
      this.router.navigate(['login', 'email-verification']);
    }
  }
}
